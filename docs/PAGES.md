# Pages

Routes are defined in `src/App.jsx`. Each page below is listed with purpose, components, data dependencies, and user flows.

Source: `src/App.jsx`, `src/pages/*`

## /dashboard
- **Purpose:** Dashboard landing page (currently a placeholder with heading and text).
- **Main components:** `Row`, `Heading`.
- **Data dependencies:** None.
- **User flows:** View dashboard header.

Source: `src/pages/Dashboard.jsx`, `src/ui/Row.jsx`, `src/ui/Heading.jsx`

## /bookings
- **Purpose:** Bookings page header (placeholder text).
- **Main components:** `Row`, `Heading`.
- **Data dependencies:** None in this page file. Booking components exist in `src/features/bookings`, but are not wired into this page yet.
- **User flows:** View page header.

Source: `src/pages/Bookings.jsx`, `src/features/bookings/*`

## /cabins
- **Purpose:** Manage cabin inventory.
- **Main components:** `CabinTable` (list), `AddCabin` (modal trigger), `Row`, `Heading`.
- **Data dependencies:** `useCabins` query (Supabase `cabins` table). Mutations use `useCreateCabin`, `useUpdateCabin`, `useDeleteCabin`.
- **User flows:** View cabins list, create a new cabin, edit or delete existing cabins via modal.

Source: `src/pages/Cabins.jsx`, `src/features/cabins/CabinTable.jsx`, `src/features/cabins/AddCabin.jsx`, `src/features/cabins/useCabins.js`, `src/features/cabins/useCreateCabin.js`, `src/features/cabins/useUpdateCabin.js`, `src/features/cabins/useDeleteCabin.js`

## /users
- **Purpose:** Create a new user (heading only).
- **Main components:** `Heading`.
- **Data dependencies:** None.
- **User flows:** View page heading.

Source: `src/pages/Users.jsx`

## /settings
- **Purpose:** Update hotel settings.
- **Main components:** `UpdateSettingsForm`, `Row`, `Heading`.
- **Data dependencies:** `useSettings` query and `useUpdateSettings` mutation (Supabase `settings` table).
- **User flows:** Edit settings fields and persist on blur.

Source: `src/pages/Settings.jsx`, `src/features/settings/UpdateSettingsForm.jsx`, `src/features/settings/useSettings.js`, `src/features/settings/useUpdateSettings.js`

## /account
- **Purpose:** Account management placeholders for user data/password updates.
- **Main components:** `Heading`, `Row`.
- **Data dependencies:** None in this page; related forms exist in `src/features/authentication` but are not rendered here.
- **User flows:** View account update headings.

Source: `src/pages/Account.jsx`, `src/features/authentication/*`

## /login
- **Purpose:** Login screen container (currently shows text only).
- **Main components:** `LoginLayout` styled component.
- **Data dependencies:** None.
- **User flows:** View login container; actual login form is not rendered in this page file.

Source: `src/pages/Login.jsx`, `src/features/authentication/LoginForm.jsx`

## * (Page not found)
- **Purpose:** 404 view with back navigation.
- **Main components:** `Heading`, `useMoveBack` hook.
- **Data dependencies:** None.
- **User flows:** Click “Go back” to navigate back in history.

Source: `src/pages/PageNotFound.jsx`, `src/hooks/useMoveBack.js`
