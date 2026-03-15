# DORA Research site

Cleaned Vite + React + Tailwind marketing site reconstructed from the Base44 export.

## What changed

- Removed Base44 Vite plugin and SDK dependencies
- Removed auth, query client, toaster, and other app scaffolding
- Normalized routes to lowercase public paths
- Added redirects from legacy `/Home`, `/Thesis`, `/Research`, `/About` paths
- Preserved the editorial light-mode visual direction and page copy
- Included a production build in `dist/`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
