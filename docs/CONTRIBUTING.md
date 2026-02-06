# Contributing

## Development setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

Source: `package.json`

## Linting
- ESLint is configured with the `react-app` preset.
- Run linting with:
  ```bash
  npm run lint
  ```

Source: `.eslintrc.json`, `package.json`

## Code conventions (from codebase)
- **Components** are defined as default exports in `.jsx` files.
- **Styled-components** are used for most styling, often declared at the top of component files.
- **Hooks** are defined in `src/hooks` or in feature folders as `use*.js`.

Source: `src/ui/*`, `src/features/*`, `src/hooks/*`

## Naming and structure
- Route-level pages live in `src/pages`.
- Reusable UI components live in `src/ui`.
- Feature logic is grouped under `src/features/<feature>`.

Source: `src/pages/*`, `src/ui/*`, `src/features/*`

## Commit style / branch strategy
**Unknown from code.** No commit or branch conventions are documented in this repository.
