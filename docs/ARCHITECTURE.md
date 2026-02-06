# Architecture

## High-level architecture
- **Single-page React app** bootstrapped in `src/main.jsx` and rendered into `#root`. Source: `src/main.jsx`
- **App shell** wraps the router with React Query providers, global styles, and toast notifications. Source: `src/App.jsx`, `src/styles/GlobalStyles.js`
- **Layout** uses a sidebar + header (`AppLayout`) and renders nested routes via `<Outlet />`. Source: `src/ui/AppLayout.jsx`

## Routing
Routing is defined with `react-router-dom` in `src/App.jsx`.

### Route map
| Path | Element | Layout | Notes |
| --- | --- | --- | --- |
| `/` | `<Navigate replace to="dashboard" />` | `AppLayout` | Redirects to dashboard. |
| `/dashboard` | `<Dashboard />` | `AppLayout` | Dashboard screen. |
| `/bookings` | `<Bookings />` | `AppLayout` | Bookings screen (placeholder content). |
| `/cabins` | `<Cabins />` | `AppLayout` | Cabins list + add/edit. |
| `/users` | `<Users />` | `AppLayout` | Users screen (heading only). |
| `/settings` | `<Settings />` | `AppLayout` | Settings form. |
| `/account` | `<Account />` | `AppLayout` | Account settings placeholder. |
| `/login` | `<Login />` | none | Standalone login page. |
| `*` | `<PageNotFound />` | none | 404 fallback. |

Source: `src/App.jsx`, `src/pages/*`

## State management approach
- **React Query** for server state (caching, refetching, mutations). Source: `src/App.jsx`, `src/features/cabins/useCabins.js`, `src/features/settings/useSettings.js`
- **Local component state** via `useState` for form fields and UI interactions. Source: `src/features/authentication/LoginForm.jsx`, `src/features/authentication/UpdateUserDataForm.jsx`, `src/features/cabins/AddCabin.jsx`
- **react-hook-form** for form management and validation in cabin and password forms. Source: `src/features/cabins/CreateCabinForm.jsx`, `src/features/authentication/UpdatePasswordForm.jsx`

## Data fetching, caching, and error handling
- **Supabase JS client** is initialized in `src/services/supabase.js` and used by API modules. Source: `src/services/supabase.js`, `src/services/apiCabins.js`
- **Queries** (e.g., `useCabins`, `useSettings`) use React Query with cache keys like `['cabins']` and `['settings']`. Source: `src/features/cabins/useCabins.js`, `src/features/settings/useSettings.js`
- **Mutations** invalidate relevant caches and show toast notifications on success/error. Source: `src/features/cabins/useCreateCabin.js`, `src/features/settings/useUpdateSettings.js`
- **Global query config** in `App.jsx` sets `staleTime`, `gcTime`, and disables refetch on window focus. Source: `src/App.jsx`
- **Error handling**: API wrappers throw `Error` with messages; mutation hooks surface errors via `react-hot-toast`. Source: `src/services/apiCabins.js`, `src/features/cabins/useCreateCabin.js`

## Auth flow (if present)
- Authentication UI exists (`LoginForm`, `SignupForm`, `UpdatePasswordForm`, `UpdateUserDataForm`), but key logic is missing or placeholder: `handleSubmit` is empty and hooks like `useUpdateUser`/`useUser` are referenced but not defined. **Unknown from code** how auth is intended to work; it should be clarified and implemented.

Source: `src/features/authentication/LoginForm.jsx`, `src/features/authentication/UpdatePasswordForm.jsx`, `src/features/authentication/UpdateUserDataForm.jsx`
