# DORA Research site

Static marketing site for **DORA Research**, an applied AI lab, and its first product, **Zora**, a technical director who reports to the CTO and delivers a finished brief every morning at 06:00.

See `DESIGN.md` for the Paper and Night design system (v2.0), brand architecture, marks, copy rules, and the target site structure. The live site still implements the retired Porcelain system until the rebuild lands.

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
