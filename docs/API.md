# API

This app uses **Supabase** via `@supabase/supabase-js`. API calls are encapsulated in `src/services/*`. There are no explicit REST endpoints defined; all calls use Supabase table and storage APIs.

**Base URL:** Supabase project URL is defined in `src/services/supabase.js` (do **not** commit secrets into docs). 

Source: `src/services/supabase.js`

## Auth requirements
Auth requirements are **Unknown from code**. The Supabase client is initialized directly with an anon key, but no explicit auth flow is implemented in the app UI.

Source: `src/services/supabase.js`, `src/features/authentication/*`

## Cabins
### getCabins
- **Operation:** `select('*')` from `cabins`.
- **Where used:** `useCabins` hook.

**Example (response shape):**
```json
{
  "id": 1,
  "name": "001",
  "maxCapacity": 2,
  "regularPrice": 250,
  "discount": 0,
  "image": "<supabase storage url>",
  "description": "..."
}
```

Source: `src/services/apiCabins.js`, `src/features/cabins/useCabins.js`, `src/data/data-cabins.js`

### createEditCabin
- **Operation:** `insert` (create) or `update` (edit) on `cabins`.
- **Also:** Uploads images to `storage/v1/object/public/cabin-images` when a new file is provided.
- **Where used:** `useCreateCabin`, `useUpdateCabin`.

**Example (request payload):**
```json
{
  "name": "009",
  "maxCapacity": 4,
  "regularPrice": 300,
  "discount": 20,
  "image": "<File | url>",
  "description": "Cabin description"
}
```

Source: `src/services/apiCabins.js`, `src/features/cabins/useCreateCabin.js`, `src/features/cabins/useUpdateCabin.js`

### deleteCabin
- **Operation:** `delete` from `cabins` by `id`.
- **Where used:** `useDeleteCabin`.

Source: `src/services/apiCabins.js`, `src/features/cabins/useDeleteCabin.js`

## Bookings
### getBooking
- **Operation:** `select('*, cabins(*), guests(*)')` on `bookings` by `id`.

Source: `src/services/apiBookings.js`

### getBookingsAfterDate
- **Operation:** `select('created_at, totalPrice, extrasPrice')` with date filters.

Source: `src/services/apiBookings.js`, `src/utils/helpers.js`

### getStaysAfterDate
- **Operation:** `select('*, guests(fullName)')` filtered by start date.

Source: `src/services/apiBookings.js`

### getStaysTodayActivity
- **Operation:** Filtered query for today’s check-ins/outs with `guests(fullName, nationality, countryFlag)`.

Source: `src/services/apiBookings.js`, `src/utils/helpers.js`

### updateBooking
- **Operation:** `update` by `id`.

Source: `src/services/apiBookings.js`

### deleteBooking
- **Operation:** `delete` by `id`.

Source: `src/services/apiBookings.js`

**Example (booking shape):**
```json
{
  "id": 1,
  "startDate": "2024-01-10",
  "endDate": "2024-01-15",
  "numNights": 5,
  "numGuests": 2,
  "status": "checked-in",
  "cabinId": 1,
  "guestId": 3
}
```

Source: `src/data/data-bookings.js`

## Settings
### getSettings
- **Operation:** `select('*')` from `settings` (single row).
- **Where used:** `useSettings`.

Source: `src/services/apiSettings.js`, `src/features/settings/useSettings.js`

### updateSetting
- **Operation:** `update` row with `id = 1` in `settings`.
- **Where used:** `useUpdateSettings`.

Source: `src/services/apiSettings.js`, `src/features/settings/useUpdateSettings.js`

**Example (request payload):**
```json
{ "maxBookingLength": 21 }
```

Source: `src/services/apiSettings.js`

## Guests (data seeding only)
The `Uploader` helper inserts and deletes rows from the `guests`, `cabins`, and `bookings` tables for sample data.

Source: `src/data/Uploader.jsx`
