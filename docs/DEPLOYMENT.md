# Deployment

## Build output
- Production builds are created with `npm run build` (Vite). The build output directory is not customized in `vite.config.js`, so Vite’s default output directory applies.

Source: `package.json`, `vite.config.js`

## Deployment steps (generic static hosting)
1. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```
2. Serve the build output with any static host (e.g., Vercel/Netlify or a CDN + static file server).
3. Optional local preview:
   ```bash
   npm run preview
   ```

Source: `package.json`

## CI/CD notes
No CI/CD workflows are present in this repository. **Unknown from code** what the intended CI/CD setup should be.

Source: repository root (no `.github/` directory)
