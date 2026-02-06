# Troubleshooting

## Module not found: missing files
Some components and hooks are referenced but do not exist in the repo:
- `FormRowVertical` imported by `LoginForm`.
- `SortBy` imported by `BookingTableOperations`.
- `useUser` imported by `UpdateUserDataForm`.
- `useUpdateUser` imported by `UpdatePasswordForm`.

**Fix:** Create these modules or remove the imports/usage.

Source: `src/features/authentication/LoginForm.jsx`, `src/features/bookings/BookingTableOperations.jsx`, `src/features/authentication/UpdateUserDataForm.jsx`, `src/features/authentication/UpdatePasswordForm.jsx`

## Importing UI components that lack exports
Some UI files define styled components but don’t export anything (e.g., `Filter`, `Select`, `Pagination`, `ErrorFallback`). Importing them will fail or export `undefined`.

**Fix:** Add exported React components to these files or remove the imports.

Source: `src/ui/Filter.jsx`, `src/ui/Select.jsx`, `src/ui/Pagination.jsx`, `src/ui/ErrorFallback.jsx`, `src/features/bookings/BookingTableOperations.jsx`, `src/features/dashboard/DashboardFilter.jsx`

## Supabase auth or permission errors
Supabase calls may fail due to row-level security or incorrect credentials. There is a comment in the bookings delete API noting RLS policies, and the client uses a hard-coded URL/key.

**Fix:** Verify Supabase RLS policies and update credentials in `src/services/supabase.js` as needed.

Source: `src/services/apiBookings.js`, `src/services/supabase.js`

## Empty UI (no data)
Some views use placeholder data or empty arrays (e.g., `BookingTable` uses `const bookings = []`).

**Fix:** Wire up actual data fetching or supply mocked data for development.

Source: `src/features/bookings/BookingTable.jsx`
