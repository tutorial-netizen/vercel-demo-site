# Vercel Demo Site

A tiny static website made for a beginner-friendly tutorial on creating a GitHub repository and deploying it with Vercel.

## Files

- `index.html` — page structure
- `style.css` — page styling
- `script.js` — small interactive button

## Run locally

Open `index.html` in a browser. No build step or package installation is required.

## Deploy with Vercel

1. Create a new **public** GitHub repository named `vercel-demo-site` (or choose a different name).
2. Upload these files to the repository root. Make sure `index.html`, `style.css`, and `script.js` are not hidden inside another nested folder.
3. Go to https://vercel.com and sign in.
4. Choose **Add New → Project** (the wording may vary).
5. Import the GitHub repository.
6. Because this is a plain HTML/CSS/JavaScript site, no framework or build command is required. If Vercel asks for an output directory, leave it blank unless the current UI requires a value.
7. Click **Deploy** and wait for the deployment to finish.
8. Open the generated `*.vercel.app` URL and test the button.

## Notes

This is a demo project, so it does not need environment variables, a database, or a backend. Never commit passwords, API keys, or other secrets to a public repository.
