# DORA Research site

Static marketing site for DORA Research's first product, **Zora** — a private AI second brain that captures, connects, and recalls personal knowledge. Single-page React/Vite homepage. See `DESIGN.md` for the Living Knowledge system and current product copy.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Hosted on **Cloudflare Pages** (project `dora-research-site`) and deployed by
`.github/workflows/deploy-cloudflare-pages.yml` after changes merge into `main`.
The workflow runs under Node 20, validates and builds the site, then uploads
`dist` using the `Production` environment secrets `CLOUDFLARE_ACCOUNT_ID` and
`CLOUDFLARE_API_TOKEN`.

Configure those values under **Settings → Environments → Production** in GitHub.
The API token should be restricted to the target Cloudflare account with
**Account → Cloudflare Pages → Edit** permission.

Normal releases use the local branch → GitHub PR → `main` merge flow. Do not run
Wrangler locally. DNS and custom domains (`dorareason.com`, `www`) remain managed
in the Cloudflare dashboard. See `CLAUDE.md` for the full deploy notes.
