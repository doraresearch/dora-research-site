# DORA Research site

Static marketing site for DORA Research — **the AI deployment company for iGaming**. DORA deploys human-governed agentic systems across gaming operations (CRM, support, compliance, fraud, payments, affiliates, BI, trading) to reduce manual workload and expand operator margins. Stack: React 18 + TypeScript + Vite + Tailwind + react-router-dom, prerendered via vite-react-ssg (no framer-motion). Current public surface: single-page homepage. Deployed on Vercel (manual `vercel --prod`).

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit approval. Flag any code that doesn't match `DESIGN.md`.

Direction (2026-05-23): the site is intentionally **Antigravity-leaning** — white airy base, cinematic dark **rounded** "stage" panels, big geometric sans, an **Aurora** spectral signature, **pill** buttons, a **swarm** brand mark, and a defined motion suite. This reversed the old sharp/cool-blue-only/no-gradient/minimal-motion rules. `DESIGN.md` is authoritative; this list is a quick reference.

Positioning (2026-06-11, commercial-grade): hero = **"The AI operations team for iGaming."**; "the agent-native operations layer for iGaming" is the supporting **category phrase** (hero mono line, hub cell, footer), not the headline. Operators get **operational agents** (never generic "AI agents") for core functions (**support, KYC, payments, risk, VIP, compliance, reporting**) to **launch lean, operate safely, and scale without a traditional operations org**. Recurring trust theme: *Autonomous where safe. Human-controlled where it matters.* DORA is **not the gaming platform**. "Gather. Reason. Act. Escalate. Learn." is the five-step product model (how-it-works). Primary CTA everywhere: **Map your AI operations team**. Avoid: chatbot/copilot/BPO framing, hype, research-y language, and whitepaper density — no "agentic systems", "governed pattern", "bounded by construction", "durable operating infrastructure". Homepage flow: hero · commercial strip (deploy across/start with/measure/control) · Problem (ops teams too early — dark stage) · What DORA replaces (contrast panels, buyer-pain cards) · Platform line · Core functions (`#use-cases` — "What your AI operations team handles.", 8 cards + hub) · **Example deployment** (`#deployment-pattern` — high-value withdrawal review: copy + 5 metric cards) · How it works (`#how-it-works` — ribbon stage, 5 one-line definitions) · How we deploy (`#deployment` — 7-step engagement + "What you get") · Trust layer (8 safeguards) · CTA *Map your first operational agent.* Nav: How it works · Functions · Example · Deployment · Contact (desktop nav ≥lg).

Key invariants:
- **Type:** Plus Jakarta Sans (400-800) for hero, headings, body, UI, cards, buttons, diagrams. Instrument Serif (italic) is a sparse accent only. JetBrains Mono for labels, captions, diagram annotations.
- **Color:** base `#FFFFFF`, soft `#F7F8FA`, ink `#050608`, graphite `#0C0F14`, body `#3B4148`, muted `#6F7782`, line `#E4E8ED`, line-strong `#AEB7C2`, signal `#7DD3FC`, signal-soft `#E0F7FF`, deep-signal `#0284C7`.
- **Aurora gradient** is the signature accent: `#6EE7B7 → #2DD4BF → #22D3EE → #38BDF8 → #3B82F6` (mint→teal→cyan→blue). Cool only — **NO purple/violet/magenta, NO warm hues**. Use as thin accents (hero bar, heading underlines, dividers, stack rail, logo, giant wordmark), not surface fills. No Tailwind default blue.
- **Rounded scale:** stages/CTA band 24-26px, cards 16-20px, small in-stage panels 9-14px, buttons = pills (999px). **Exception:** stack/architecture diagram layer rows stay sharp (radius 0).
- Hairline borders; soft low-opacity shadows allowed only under dark stages. No glassmorphism or decorative blobs.
- **Brand mark** = the original **swarm orbit-ring** SVG (Aurora fill; solid white on dark), NOT a peak/lambda. Ship as a reusable `<Logo/>` component.
- Homepage must immediately communicate that DORA operates above the model layer through application, orchestration, and harness layers; the dark operations stage (`#how-it-works`) is a cinematic Aurora-ribbon canvas behind one centered governed-loop statement (Turing-hero treatment — console surfaces retired 2026-06-10); footer closes on the giant Aurora "DORA" wordmark.
- **Motion suite** (all `prefers-reduced-motion`-gated; continuous loops pause when hidden): hero entrance fade-up (~750ms); continuous `<canvas>` Aurora ribbon flow confined to the dark operations stage; rotating logo mark (~22s); section scroll-reveal fade-ups; cell-pulse on live chips/grids; hover transitions <200ms.
- **Harness visual = the harness frame** (orb retired): the agent core wrapped in an instrument rig — containment brackets + measurement ring + Aurora eval arc + CONTEXT/EVAL/CONSTRAINTS + "REVIEW → DEPLOY". See `DESIGN.md`.

## Dev

```bash
npm install
npm run dev      # vite dev server
npm run build    # production build
npm run preview  # preview prod build
```

## Deploy

Production (`www.dorareason.com`) ships **manually** via the Vercel CLI — `git push` to `main` does **not** auto-deploy:

```bash
vercel --prod    # remote build + aliases the production domain
```

Auto-deploy is not currently wired: the Vercel project (`jbrackens-projects/dora-research-site`) is not connected to the GitHub repo (no Vercel GitHub App, webhook, or commit checks), and `vercel git connect` fails from the CLI ("Failed to connect doraresearch/dora-research-site") because the Vercel GitHub App is not installed on the `doraresearch` GitHub org. To enable push-to-deploy, a GitHub org admin must connect the repo in Vercel → project → Settings → Git (this installs the app).

Notes:
- `.vercel/project.json`'s `orgId` `team_Tfxzg…` is the id of the `jbrackens-projects` Vercel account (Vercel labels accounts as "teams") — the link is correct, not stale.
- The connected **Vercel MCP** is authed to a different identity and 403s on this account; use the **Vercel CLI** (logged in as `jbrackens`) for deploys/inspection.
- Build runs `tsc --noEmit && vite-react-ssg build` (prerendered static output in `dist/`). SPA fallback routing is in `vercel.json`.
