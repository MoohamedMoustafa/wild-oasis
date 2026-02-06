# The Wild Oasis Admin

A React + Vite single-page admin interface for managing The Wild Oasis hotel data. It provides routed screens for cabins, bookings, settings, users, and account management, backed by Supabase data access where implemented.

## Table of Contents
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Quickstart](#quickstart)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [License](#license)

## Key Features
- Cabin management UI with create/edit flows and image uploads.  
- Settings editor for hotel configuration fields.  
- Routed admin layout with sidebar navigation and header.  
- React Query-powered data fetching and caching for supported resources.  

> Note: Authentication flows are present in the UI but are not fully wired in code yet (see docs for details).

## Tech Stack
- React 18
- Vite
- React Router
- @tanstack/react-query
- Supabase JS
- styled-components
- react-hook-form

## Quickstart
### Prerequisites
- Node.js and npm
- A Supabase project with the required tables/bucket (see docs)

### Install
```bash
npm install
```

### Environment variables
No `process.env` / `import.meta.env` variables are referenced in source code. Supabase configuration is currently hard-coded. See [docs/GETTING_STARTED.md](docs/GETTING_STARTED.md) for details and recommendations.

### Run dev
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Configuration
Environment configuration is currently in `src/services/supabase.js` (hard-coded). For a full table of configuration details, see [docs/GETTING_STARTED.md](docs/GETTING_STARTED.md).

## Project Structure
High-level architecture and routing are documented in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). At a glance:
- `src/pages`: route-level pages
- `src/features`: feature-specific components and hooks
- `src/ui`: shared UI components
- `src/services`: Supabase client and API wrappers

## Documentation
- Getting Started → [docs/GETTING_STARTED.md](docs/GETTING_STARTED.md)
- Architecture → [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Pages/Routes → [docs/PAGES.md](docs/PAGES.md)
- Components → [docs/COMPONENTS.md](docs/COMPONENTS.md)
- API → [docs/API.md](docs/API.md)
- Deployment → [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- Troubleshooting → [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)
- Contributing → [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

## License
TBD
