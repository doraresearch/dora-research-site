# DORA Research site

Static marketing site for DORA Research, an applied AI lab. Stack: React 18 + Vite + Tailwind + Framer Motion + react-router-dom. Pages: Home, Thesis, Research, About. Deployed on Vercel.

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit approval. Flag any code that doesn't match `DESIGN.md`.

Key invariants:
- Instrument Serif for `h1`/`h2`/card `h3`, Instrument Sans for body/UI, JetBrains Mono for eyebrows/labels/figure captions.
- Paper `#F6F3EC`, ink `#0A0A0A`, body `#5A5A5A`, muted `#8C8A84`, accent `#B08A3E` (ochre).
- Sharp edges (border radius 0) on cards, buttons, diagrams.
- No shadows beyond hairline borders. No gradients. No Tailwind blue.
- Section eyebrows use `§ I`, `§ II`, `§ III` — not `01`, `02`, `03`.
- Figure captions use `FIG 1`, `FIG 2`.
- Motion is minimal: fade-up on hero only.

## Dev

```bash
npm install
npm run dev      # vite dev server
npm run build    # production build
npm run preview  # preview prod build
```

## Deploy

Auto-deploys on push to main via Vercel. SPA routing is handled in `vercel.json`.
