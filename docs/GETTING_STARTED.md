# Getting Started

## Prerequisites
- **Node.js + npm** (project uses Vite + React scripts). Source: `package.json`
- **Supabase project** with `cabins`, `bookings`, `settings`, and `guests` tables plus a `cabin-images` storage bucket (referenced in code). Source: `src/services/apiCabins.js`, `src/services/apiBookings.js`, `src/services/apiSettings.js`, `src/data/Uploader.jsx`

## Install steps
```bash
npm install
```

## Run the app (local)
```bash
npm run dev
```

## Environment variables
No `process.env` or `import.meta.env` usages were found in `src/`. Supabase configuration is currently hard-coded in `src/services/supabase.js`. **If your Supabase URL/key differ, update that file or refactor to env vars.**

| NAME | Required | Default | Description | Where used |
| --- | --- | --- | --- | --- |
| _None found_ | — | — | No env vars are referenced in source code. | — |

Source: `src/services/supabase.js`

## Available npm scripts
| Script | Command | Purpose |
| --- | --- | --- |
| dev | `vite` | Start the dev server. |
| build | `vite build` | Build the production bundle. |
| lint | `eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0` | Run ESLint checks. |
| preview | `vite preview` | Preview the production build. |

Source: `package.json`

## Tests
No test script is defined in `package.json`. If tests are added in the future, document them here.

Source: `package.json`
