# DORA Research site

Static marketing site for DORA Research's first product, **Zora** — a second brain for work. Zora continuously connects context across meetings, conversations, documentation, tickets, roadmaps, code, and system signals, then surfaces what changed, why it matters, and what needs attention. Product and technology teams are the initial wedge. Stack: React 18 + TypeScript + Vite + Tailwind + react-router-dom, prerendered via `vite-react-ssg`.

## Design system

Read `DESIGN.md` before making visual or UI decisions. It is authoritative for the current Porcelain Intelligence system, product positioning, copy, palette, type, media rules, and page architecture.

Key invariants:

- DORA Research is the company; Zora is the product.
- The category is a second brain for work. Product and technology are the initial concrete use case, not the category definition.
- Keep the original 13-dot swarm geometry intact. The mark gradient is Living Green `#3D8B68` to Signal Cyan `#03F5F2`.
- Geist is the product and marketing sans; IBM Plex Mono is limited to labels, timestamps, IDs, and provenance.
- Canvas `#F4F6F8`, section band `#E2E8EE`, raised surface `#FFFEFB`, ink `#111814`, action `#145C43`, signal cyan `#03F5F2`, risk `#A73745`, focus `#1D63D8`.
- Product visuals must feel like believable software: persistent chrome, operational metadata, real selectable states, contextual inspectors, traceable evidence, and controls that change the UI.
- Never ship consumer-life examples, generic chat-composer heroes, abstract AI imagery, fake metrics, dead controls, stale placeholders, or watermarked media.
- Motion must explain activity, causality, or attention; honor reduced motion/save-data and pause looping media offscreen or in hidden tabs.

## Dev

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

There is currently no lint or automated test script. Do not invent `npm run lint` or `npm test`; use typecheck, build, and rendered browser QA.

## Deploy

Production (`dorareason.com` + `www`) is hosted on **Cloudflare Pages** (project `dora-research-site`). The normal release path is local branch → GitHub PR → merge to `main`; the push to `main` triggers `.github/workflows/deploy-cloudflare-pages.yml`.

The workflow uses Node 22, `npm ci`, typecheck, build, and a pinned Cloudflare Wrangler action. Credentials live only in the GitHub `Production` environment secrets `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`. Never deploy with local Wrangler for a normal release and never commit those values. DNS and custom domains remain managed in Cloudflare.
