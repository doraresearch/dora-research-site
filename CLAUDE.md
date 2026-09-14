# DORA Research site

Static marketing site for **DORA Research**, an applied AI lab, and its first product, **Zora**: a technical director and chief of staff who reports to the CTO. The lab builds agents that take over specific operational work in engineering organizations so people keep judgment and accountability, and it publishes its research, benchmarks, and frameworks before they become products. Zora reads what the organization produced overnight and delivers a finished brief by 06:00 that answers three questions before they are asked: what happened last night, where a project stands and why, and where the organization is most at risk. The promise is delivery, ship faster and break less; memory is the mechanism, not the promise.

## Design system

`DESIGN.md` is authoritative. It is version 2.0, **Paper and Night**, derived from the DORA Research Brand Book v2.0 (the presentation deck and its source are in `brand/`) and the founder interview of 13 September 2026: a warm Paper register for the lab, a dark Night register for Zora, shared Geist and IBM Plex Mono, Newsreader for the lab's display, a static thirteen-dot swarm as the lab's mark, and a product mark family that starts with Zora's open-seat mark.

**The live site still implements the retired Porcelain Intelligence system and the retired second-brain positioning.** Do not add new work in the retired system, do not mix the two on one page, and do not describe Zora as a second brain, a copilot, an assistant, or "it". Every rule in `DESIGN.md` carries a status (Decided, Proposed, Open); build to Proposed rules and expect amendments.

Never regress to the infrastructure-operations, consumer personal-memory, prediction-market, or second-brain directions. DORA Research is the lab; Zora is the product. Preserve the original 13-dot mark geometry.

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
