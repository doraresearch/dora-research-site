# DORA Research site

Static marketing site for DORA Research's first product, **Zora** — a second brain for work. The site introduces the broader organizational-memory vision through a concrete product-and-technology workday centered on one Atlas release.

See `DESIGN.md` for the Porcelain Intelligence design system, brand architecture, page structure, and current copy.

## Run locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run typecheck
npm run build
```

## Deploy

Production is hosted on **Cloudflare Pages** (project `dora-research-site`). Normal releases use local branch → GitHub PR → merge to `main`; `.github/workflows/deploy-cloudflare-pages.yml` then validates, builds under Node 22, and deploys `dist` using the GitHub `Production` environment secrets.

Do not use local Wrangler for normal releases. DNS and custom domains (`dorareason.com`, `www`) remain managed in Cloudflare.
