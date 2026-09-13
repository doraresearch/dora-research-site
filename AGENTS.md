# DORA Research site

Static marketing site for **DORA Research**, an applied AI lab, and its first product, **Zora**, a technical director and chief of staff who reports to the CTO. Zora reads what the organization produced overnight and delivers a finished four-part brief by 06:00: impact and outcome, conditions, what we change, where else. The promise is delivery, ship faster and break less; memory is the mechanism. Stack: React 18 + TypeScript + Vite + Tailwind + react-router-dom, prerendered via `vite-react-ssg`.

## Design system

Read `DESIGN.md` before making visual, UI, or copy decisions. It is version 2.0, Paper and Night, and it is the target system for the site; the live site still implements the retired Porcelain system until the rebuild lands. Do not add new work in the retired system.

Key invariants:

- DORA Research is the lab; Zora is the first product. Every product gets its own mark; the swarm never identifies a product.
- Keep the original 13-dot swarm geometry intact and static. Gradient Living Green `#3D8B68` to Signal Cyan `#03F5F2`, inside the mark only.
- Two registers. Paper (lab): `#F9F7F2` ground, ink `#141D18`, one accent `#2A6449`, risk `#AD3547`, Newsreader display, Geist body, IBM Plex Mono provenance. Night (Zora): `#0A0F0C` canvas, text `#F5F7F2`, secondary `#A4B1AA`, one Mint action `#67BF99` and one Rose risk `#F08A9A` per viewport, a 6 px cyan dot beside Zora's name, Geist and Plex Mono only.
- Rules, not cards. Radius 0 on containers, 2 px (paper) or 4 px (Night) on controls. No shadows, glass, glow, gradient surfaces, purple, emoji, or icon library.
- Say AI and agents plainly. Zora is she, the subject of her sentences, with a name, a voice, and a dot; never a face. Never copilot, assistant, chatbot, second brain, knowledge base, insights, or "it".
- The brief arrives finished: no streaming, typing, or thinking states. Motion is 120/160/240 ms on one curve; the mark is static; reduced motion is the baseline.
- Film is engineering documentary: the CTO at 06:00, the product on a real screen, the systems it watched, the incident room. Licensed masters only; the current plates are stand-ins from the retired system.
- Every number has a source and a 24-hour time; every artifact has an ID; no fake metrics, dead controls, or placeholders.

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
