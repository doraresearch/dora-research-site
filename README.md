# DORA Research site

Static site for **DORA Research, Inc.**, an applied AI lab, and its first product, **Zora**, an AI Chief of Staff for CTOs.

Production is one page, `public/coming-soon.html`, with a live demo of Zora's product window. It is published as the whole site while the `HOLDING` file exists (see `scripts/holding.mjs`). The React app in `src/` is the retired v2.0 Paper and Night build and is withheld.

See `DESIGN.md` for the design system as shipped (v3.0) and `docs/zora-ui-brief.md` for the product interface. The v2.0 brand book in `brand/` is kept as history.

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
