import { storage, keys, ensureArray, nextId } from './storage.js';

async function hashPassword(password){
  const enc = new TextEncoder();
  const data = enc.encode(password);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const bytes = Array.from(new Uint8Array(digest));
  return bytes.map(b=>b.toString(16).padStart(2,'0')).join('');
}

export async function register({email, password, role, name, companyName}){
  email = email.trim().toLowerCase();
  const users = ensureArray(keys.users);
  if(users.some(u=>u.email===email)) throw new Error('Email already registered');
  const passwordHash = await hashPassword(password);
  const user = { id: nextId(), email, passwordHash, role, name: name||'', companyName: companyName||'' };
  users.push(user);
  storage.set(keys.users, users);
  storage.set(keys.session, { userId: user.id });
  return user;
}

export async function login({email, password}){
  email = email.trim().toLowerCase();
  const users = ensureArray(keys.users);
  const user = users.find(u=>u.email===email);
  if(!user) throw new Error('Invalid credentials');
  const passwordHash = await hashPassword(password);
  if(passwordHash!==user.passwordHash) throw new Error('Invalid credentials');
  storage.set(keys.session, { userId: user.id });
  return user;
}

export function logout(){ storage.remove(keys.session); }

export function currentUser(){
  const sess = storage.get(keys.session, null);
  if(!sess) return null;
  const users = ensureArray(keys.users);
  return users.find(u=>u.id===sess.userId) || null;
}

export function requireRole(role){
  const user = currentUser();
  if(!user || user.role!==role){
    window.location.href = './auth.html';
  }
  return user;
}


