import { storage, keys, ensureArray, nextId } from './storage.js';

export function seed(){
  // only seed once
  if(storage.get(keys.users) && storage.get(keys.jobs)) return;

  const employer = { id: nextId(), email:'employer@example.com', passwordHash:'', role:'employer', name:'Alex Employer', companyName:'Skyline Tech'};
  const candidate = { id: nextId(), email:'candidate@example.com', passwordHash:'', role:'candidate', name:'Casey Candidate', companyName:''};
  // "Password123!" SHA-256
  employer.passwordHash = '3c0600e4209a1e09495fe2eb305ad3ff412f6fde38be3f4fc0ca89fd9b59e4e3';
  candidate.passwordHash = '3c0600e4209a1e09495fe2eb305ad3ff412f6fde38be3f4fc0ca89fd9b59e4e3';

  const users = [employer, candidate];

  const jobs = [
    { id: nextId(), title:'Frontend Engineer', company:'Skyline Tech', location:'Remote', type:'Full-time', salary:'$90k - $120k', description:'Build elegant UIs with React. Collaborate with design and backend teams.', postedBy: employer.id, featured:true, createdAt: Date.now() },
    { id: nextId(), title:'Backend Engineer', company:'Cloud Harbor', location:'New York, NY', type:'Full-time', salary:'$110k - $140k', description:'Design scalable APIs with Node and PostgreSQL.', postedBy: employer.id, featured:true, createdAt: Date.now() - 86400000 },
    { id: nextId(), title:'Product Designer', company:'Pixel Forge', location:'Austin, TX', type:'Contract', salary:'$60/hr', description:'Craft delightful interfaces and iterate quickly.', postedBy: employer.id, featured:false, createdAt: Date.now() - 172800000 },
  ];

  storage.set(keys.users, users);
  storage.set(keys.jobs, jobs);
  storage.set(keys.applications, []);
}

export function formatDate(ts){
  const d = new Date(ts);
  return d.toLocaleDateString();
}


