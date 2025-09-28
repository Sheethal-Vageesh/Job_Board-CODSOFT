## Job Board (HTML/CSS/JS)

A fully client-side job board demo where employers can post jobs and candidates can search and apply. Uses localStorage to persist data and simulates email notifications in the UI. No backend required.

### Features
- Home page with welcome and featured jobs
- Job listings with search and filters
- Job detail page with application form and resume upload (stored client-side)
- Employer dashboard: post and manage jobs
- Candidate dashboard: profile and applications
- Authentication with roles (Employer/Candidate), password hashing in-browser
- Toast notifications simulating emails
- Responsive, modern UI (mobile-friendly)

### Quick Start
1. Download this folder.
2. Open `index.html` in your browser.
   - For best results with file uploads, serve via a local server.

### Run with a Local Server (recommended)
- Python 3: `python -m http.server 8000`
- Node: `npx serve .` or `npx http-server -p 8000`
Then open `http://localhost:8000/`.

### Default Pages
- `/index.html` – Home
- `/listings.html` – All jobs
- `/job.html?id=<jobId>` – Job detail & apply
- `/employer.html` – Employer dashboard
- `/candidate.html` – Candidate dashboard
- `/auth.html` – Login / Register

### Test Users (after first run you can register new ones)
- Employer: `employer@example.com` / `Password123!`
- Candidate: `candidate@example.com` / `Password123!`

### Data Storage
- All data persists in `localStorage` under keys prefixed with `jb_`.
- Resume files are stored as Base64 strings (demo only).

### Notes
- This is a demo without a server. Replace storage and email logic with real APIs for production.
 
### Troubleshooting uploads (Windows/OneDrive)
- If you see an error like `0x800701AA` or the file is stuck on "Syncing", your PDF might be cloud-only.
- Fix: Right-click the file in OneDrive and choose "Always keep on this device" (make it Available offline), then upload again.
- Also ensure the PDF is under 4 MB.


