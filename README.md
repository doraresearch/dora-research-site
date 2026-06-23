# DORA Research site

Static marketing site for DORA Research — **secure AI teammates for infrastructure operations**. Single-page React/Vite homepage. DORA turns recurring alerts, diagnostics, runbooks, and escalations into AI-executed workflows across the tools the team already runs (Datadog, PagerDuty, CloudWatch, Prometheus, Slack, Jira, cloud, databases), keeping engineers in control.

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
