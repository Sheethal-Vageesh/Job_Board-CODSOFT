import { currentUser, logout } from './auth.js';

export function renderHeader(active){
  const user = currentUser();
  const roleLinks = user?.role==='employer'
    ? `<a href="./employer.html" class="${active==='employer'?'active':''}">Employer</a>`
    : user?.role==='candidate'
    ? `<a href="./candidate.html" class="${active==='candidate'?'active':''}">Candidate</a>`
    : '';
  return `
  <header class="site-header">
    <nav class="nav">
      <a href="./index.html" class="brand"><img src="./assets/logo.svg" alt="logo" width="28" height="28"/> JobBoard</a>
      <a href="./listings.html" class="${active==='listings'?'active':''}">Jobs</a>
      <div class="spacer"></div>
      ${roleLinks}
      ${user ? `
        <span style="color:#94a3b8">${user.email}</span>
        <a href="#" id="logoutBtn" class="btn secondary">Logout</a>
      ` : `
        <a href="./auth.html" class="btn">Login</a>
      `}
    </nav>
  </header>`;
}

export function bindHeader(){
  const btn = document.getElementById('logoutBtn');
  if(btn){
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      logout();
      window.location.href = './index.html';
    });
  }
}

export function renderFooter(){
  const year = new Date().getFullYear();
  return `<footer>© ${year} JobBoard · Built for demo purposes</footer>`;
}

export function toast(message, type='info'){
  let host = document.querySelector('.toast');
  if(!host){
    host = document.createElement('div');
    host.className = 'toast';
    document.body.appendChild(host);
  }
  const el = document.createElement('div');
  el.className = 'item';
  el.textContent = message;
  host.appendChild(el);
  setTimeout(()=>{ el.remove(); }, 3500);
}


