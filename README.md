# Personal Resume Site

A single-page resume / portfolio built with **React + Vite**.

## Edit your details
All content lives in one file — open [`src/data.js`](src/data.js) and replace the
placeholder text with your own name, experience, skills, projects, and education.

## Add your files
- **Profile photo**: drop an image into the `public/` folder (e.g. `public/photo.jpg`),
  then set `photo: '/photo.jpg'` in `src/data.js`.
- **Resume PDF**: drop it into `public/` (e.g. `public/resume.pdf`). The "Download CV"
  button uses `resumeUrl` in `src/data.js`.
- Anything placed in `public/` is served from the site root (`/filename`).

## Run locally
```bash
npm install
npm run dev
```
Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```
The static site is generated in the `dist/` folder.
