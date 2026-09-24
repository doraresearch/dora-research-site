# DORA Research site

Static site for **DORA Research, Inc.**, an applied AI lab, and its first product, **Zora**: an AI Chief of Staff for CTOs. She tracks every commitment, decision, and risk across an engineering organization and brings the CTO the calls that need a decision, with the evidence attached. She advises with evidence; the CTO decides. The promise is delivery, ship faster and break less; memory is the mechanism, not the promise. The morning brief is one thing she produces, not what she is: never frame Zora as an overnight reporting tool. Stack: React 18 + TypeScript + Vite + Tailwind + react-router-dom, prerendered via `vite-react-ssg`; the live page itself is plain HTML.

## What is live

Production is one page, `public/coming-soon.html`: the headline, a private-beta contact line, and a live, interactive demo of Zora's product window with fictional data (TransparentAI, Dana Kim, incident 2291). It is a single self-contained HTML file with inline CSS and JavaScript.

The holding switch publishes it as the whole site. While the file `HOLDING` exists at the repository root, `scripts/holding.mjs` runs at the end of `npm run build` and:

- copies the page to `dist/index.html` and `dist/404.html`;
- removes the React bundle, its route data, and the React pages' HTML;
- redirects `/research` and `/zora` to `/` (302) and `/coming-soon.html` to `/` (301);
- writes a sitemap that lists the root alone.

The React app in `src/` (Company, Research, and Zora pages) is the v2.0 Paper and Night rebuild, which the founder rejected on 20 September 2026. It still typechecks and builds, but it is withheld. Do not extend it. Do not delete `HOLDING` without the founder's go-ahead, because that republishes it.

Working on the page:

- Edit `public/coming-soon.html`. `npm run dev` serves it at `/coming-soon.html`; the dev server's `/` is the withheld React app.
- `?still` freezes the demo in its finished state; the header mark keeps turning. Reduced motion removes all motion, including the mark's turn.
- The demo's timers throttle in background tabs, and the in-app Browser pane runs as one. Verify motion in a headless browser.
- `public/og-soon.png` is the social card, cut from the page at 1200 by 630. Re-cut it when the page's look changes.
- Production HTML differs from the file only where Cloudflare obfuscates the `mailto:` links and injects its decoder script. Compare against production, not the repo, before claiming parity.

## Design system

`DESIGN.md` is authoritative. Version 3.1 (24 September 2026) describes the site as shipped and the founder's dated decisions behind it. `docs/zora-ui-brief.md` specifies the product interface behind the demo, with the window's full component measurements, for a senior product designer. Every rule in `DESIGN.md` is Decided (the founder said so, on a date), Shipped (live, chosen during design work, not ruled on separately), Proposed (not built; ask first), or Open.

Key invariants:

- Zora leads the copy. DORA Research, Inc. is the maker and the header wordmark. The headline says "AI Chief of Staff for CTOs", with "Chief of Staff" in title case.
- Zora is "she". Never describe her as a second brain, a copilot, an assistant, a reporting tool, or "it".
- The original palette is the base, and Zora's panel is the only dark surface. Do not desaturate.
- The thirteen-dot swarm keeps its original geometry and its Living Green to Signal Cyan gradient, and turns once every 22 seconds in the header.
- The product window is live HTML, never an image. No status pills or dots, icon badges, eyebrows, glows, or beam fans.
- Before changing a Decided rule, or anything the founder chose (the mark, motion, palette, copy), show rendered options and ask, one question at a time.

Never regress to the infrastructure-operations, consumer personal-memory, prediction-market, second-brain, overnight-reporting, or Paper and Night directions. DORA Research is the lab; Zora is the product. The brand book v2.0 in `brand/` is history, and its visual system is retired.

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
