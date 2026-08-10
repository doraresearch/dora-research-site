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

Hosted on **Cloudflare Pages** (project `dora-research-site`), deployed manually:

```bash
npm run build
wrangler pages deploy dist --project-name dora-research-site
```

Run wrangler under **Node 20** (not the machine-default Node 26). DNS and custom domains (`dorareason.com`, `www`) are managed in the Cloudflare dashboard. See `CLAUDE.md` for the full deploy notes.
