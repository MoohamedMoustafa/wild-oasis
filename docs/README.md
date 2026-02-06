# The Wild Oasis Admin (React)

## What this app is
A React + Vite single-page admin interface for managing the Wild Oasis hotel data. The UI includes routed screens for dashboard, bookings, cabins, users, settings, account, login, and a 404 fallback. It uses a shared layout (sidebar + header) and styled-components for styling.

Source: `src/App.jsx`, `src/pages/*`, `src/ui/AppLayout.jsx`

## Key features (from code)
- **Cabins management UI**: list of cabins and create/edit modal form (React Hook Form + Supabase mutations). Source: `src/pages/Cabins.jsx`, `src/features/cabins/*`, `src/services/apiCabins.js`
- **Settings editor**: update hotel settings fields (min/max booking length, guests per booking, breakfast price) with inline update. Source: `src/pages/Settings.jsx`, `src/features/settings/UpdateSettingsForm.jsx`, `src/services/apiSettings.js`
- **Bookings scaffolding**: booking table and booking detail components exist (some data and flows are placeholders). Source: `src/pages/Bookings.jsx`, `src/features/bookings/*`
- **Reusable UI library**: shared components for buttons, tables, forms, modals, menus, etc. Source: `src/ui/*`
- **Supabase integration**: data access via `@supabase/supabase-js` and a data uploader helper for seed data. Source: `src/services/supabase.js`, `src/services/api*.js`, `src/data/Uploader.jsx`

## Tech stack
- **React 18** and **React Router** for SPA routing. Source: `src/main.jsx`, `src/App.jsx`, `package.json`
- **Vite** build tooling. Source: `vite.config.js`, `package.json`
- **@tanstack/react-query** for data fetching + caching. Source: `src/App.jsx`, `src/features/*/use*.js`, `package.json`
- **Supabase JS** for backend data and storage. Source: `src/services/supabase.js`, `src/services/api*.js`, `package.json`
- **styled-components** for styling. Source: `src/styles/GlobalStyles.js`, `src/ui/*`, `package.json`
- **react-hook-form** for form state. Source: `src/features/cabins/CreateCabinForm.jsx`, `src/features/authentication/UpdatePasswordForm.jsx`, `package.json`
- **react-hot-toast** for notifications. Source: `src/App.jsx`, `src/features/cabins/useCreateCabin.js`, `src/features/settings/useUpdateSettings.js`
- **date-fns** for date handling. Source: `src/utils/helpers.js`, `src/features/bookings/BookingRow.jsx`, `package.json`

## Folder structure overview
```
src/
  App.jsx                # App shell + providers + router
  main.jsx               # React entry point
  data/                  # Sample data + uploader helper
  features/              # Feature-level components + hooks
  hooks/                 # Reusable hooks (e.g., useOutsideClick)
  pages/                 # Route-level pages
  services/              # Supabase client + API wrappers
  styles/                # Global styles
  ui/                    # Reusable UI components
  utils/                 # Formatting/date helpers
```

Source: `src/*`
