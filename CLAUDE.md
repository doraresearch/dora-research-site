# DORA Research site

Static marketing site for DORA Research, an enterprise AI systems company. Stack: React 18 + Vite + Tailwind + Framer Motion + react-router-dom. Current public surface: single-page homepage with sections for how it works, primitives, use cases, research, and contact. Deployed on Vercel.

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit approval. Flag any code that doesn't match `DESIGN.md`.

Key invariants:
- Instrument Sans for hero, headings, body, UI, cards, tables, buttons, and diagrams. Instrument Serif is only a sparse research accent.
- JetBrains Mono for labels, captions, and diagram annotations.
- Base `#F7F8FA`, surface `#FFFFFF`, ink `#050608`, graphite `#111418`, body `#3B4148`, muted `#6F7782`, line `#DCE1E6`, line-strong `#AEB7C2`, signal `#7DD3FC`, signal-soft `#E0F7FF`, deep-signal `#0284C7`.
- Sharp edges (border radius 0) on cards, buttons, diagrams.
- No shadows beyond hairline borders. No decorative gradients. No Tailwind default blue.
- Homepage must immediately communicate that DORA operates above the model layer through application, orchestration, and harness layers.
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
