export const storage = {
  get(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : (fallback ?? null);
    }catch(e){
      console.error('storage.get', key, e);
      return fallback ?? null;
    }
  },
  set(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key){ localStorage.removeItem(key); }
};

export const keys = {
  users: 'jb_users',
  jobs: 'jb_jobs',
  applications: 'jb_applications',
  session: 'jb_session',
  seq: 'jb_seq'
};

export function nextId(){
  const current = storage.get(keys.seq, 1000) || 1000;
  const next = current + 1;
  storage.set(keys.seq, next);
  return next.toString();
}

export function ensureArray(key){
  const arr = storage.get(key, []);
  if(!Array.isArray(arr)){
    storage.set(key, []);
    return [];
  }
  return arr;
}


