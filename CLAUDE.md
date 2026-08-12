# DORA Research site

Static marketing site for DORA Research's first product, **Zora** — a second brain for work. Zora connects workplace context across meetings, conversations, documentation, tickets, roadmaps, code, and technical systems. It helps teams remember why decisions were made, identify priorities and dependencies, surface risks and deadlines, and determine what needs attention next.

The broader category is organizational memory for work. Product and technology teams are the initial wedge and the primary website story. The canonical demo follows one Atlas release from customer evidence through scope, dependency, delivery risk, decision, and original evidence.

## Design system

`DESIGN.md` is authoritative. The live direction is **Porcelain Intelligence**: cool editorial surfaces, cinematic workplace media, restrained signal color, and believable interactive software organized around time, causality, evidence, and attention.

Never regress to the older infrastructure-operations or consumer personal-memory directions. DORA Research is the company; Zora is the product. Preserve the original 13-dot mark geometry.

## Dev

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

The repository does not currently define lint, unit-test, or end-to-end-test scripts. Use typecheck, build, and rendered browser QA in proportion to the change.

## Production deployment

Production (`https://www.dorareason.com`) is hosted on **Cloudflare Pages**, project `dora-research-site`. The release path is:

1. Validate locally.
2. Commit on a feature branch and push to GitHub.
3. Open and merge a PR into `main`.
4. The push to `main` triggers `.github/workflows/deploy-cloudflare-pages.yml`.
5. The workflow runs Node 22, `npm ci`, typecheck, build, and deploys `dist` with the pinned Cloudflare Wrangler action.

Credentials are stored only in GitHub's `Production` environment as `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`. Do not run Wrangler locally for normal releases, do not commit credentials, and do not change Cloudflare DNS or custom domains as part of a routine site deployment.

The old local `.vercel` metadata is ignored and has no deployment role.
