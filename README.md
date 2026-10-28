# Rivet Ridge Rally website

Responsive landing page for **Rivet Ridge Rally**, the Roblox arcade motocross game, published at **dorareason.com** and **www.dorareason.com**. On 28 October 2026 the owner authorized this page to replace the DORA holding website.

The active site lives in `gaming/`: original game key art, real gameplay captures, ten venue previews with medal targets, environment filters, riding controls, and livery references. See [gaming/README.md](gaming/README.md) for content sources and interaction details.

`vite.gaming.config.ts` builds `gaming/` into `dist/`. The default build does not publish the archived DORA files in `public/` or the withheld React app in `src/`.

The previous DORA site and its design history remain available in `public/coming-soon.html`, [DESIGN.md](DESIGN.md), [docs/zora-ui-brief.md](docs/zora-ui-brief.md), and `brand/`. DORA's visual rules apply to that archived site.

## Run locally

```bash
npm install
npm run dev
```

Open the dev server root (`/`) for Rivet Ridge Rally. `npm run preview` serves the production build after `npm run build`.

## Validate

```bash
npm run typecheck
npm run build
```

## Deploy

Production is hosted on **Cloudflare Pages** (project `dora-research-site`). Normal releases use local branch → GitHub PR → merge to `main`; `.github/workflows/deploy-cloudflare-pages.yml` then validates, builds under Node 22, and deploys `dist` using the GitHub `Production` environment secrets.

Do not use local Wrangler for normal releases. DNS and custom domains (`dorareason.com`, `www`) remain managed in Cloudflare.

## Archived DORA build

- `npm run dev:dora` serves the former development setup; the holding page is at `/coming-soon.html`.
- `npm run build:dora` builds the former site into `dist/`; while `HOLDING` exists, `scripts/holding.mjs` replaces that output with the DORA holding page.
- `HOLDING` affects only this archived build. Removing it does not select Rivet Ridge Rally and would expose the rejected React design in a DORA build.
- `npm run build` restores Rivet Ridge Rally output in `dist/`. Roll back a deployed release through the normal GitHub PR workflow.
