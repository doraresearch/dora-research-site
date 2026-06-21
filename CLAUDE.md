# DORA Research site

Static marketing site for DORA — **secure AI teammates for infrastructure operations**. DORA turns recurring alerts, diagnostics, runbooks, and escalations into AI-executed workflows across an operator's existing stack (Datadog, PagerDuty, CloudWatch, Prometheus, Slack, Jira, cloud, databases), reducing human touches per task while keeping engineers in control — higher throughput without scaling headcount linearly. Audience: infrastructure & operations engineers (DBAs, SREs, NOC, DevOps, platform/cloud/security ops, QA). Stack: React 18 + TypeScript + Vite + Tailwind + react-router-dom, prerendered via vite-react-ssg (no framer-motion). Current public surface: single-page homepage. Deployed on Vercel (manual `vercel --prod`).

> **Positioning note (2026-06-21):** the built/shipped site is the **infrastructure-operations** product described above. Earlier revisions of this file and `DESIGN.md` described an **iGaming** positioning ("AI operations for iGaming", KYC/payments/VIP). That positioning is **superseded/stale** — the iGaming language does not appear anywhere in the build. Judge work against the infrastructure-operations product and the design system's visual invariants.

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit approval. Flag any code that doesn't match `DESIGN.md`.

Direction (2026-05-23): the site is intentionally **Antigravity-leaning** — white airy base, cinematic dark **rounded** "stage" panels, big geometric sans, an **Aurora** spectral signature, **pill** buttons, a **swarm** brand mark, and a defined motion suite. This reversed the old sharp/cool-blue-only/no-gradient/minimal-motion rules. `DESIGN.md` is authoritative; this list is a quick reference.

Positioning (built site, reconciled 2026-06-21): hero = **"Secure AI teammates for infrastructure operations."** with the supporting line *"DORA turns recurring alerts, diagnostics, runbooks, and escalations into AI-executed workflows across your existing stack. Reduce human touches per task while keeping engineers in control."* + *"Operate at higher throughput without scaling headcount linearly."* Hero eyebrow chip: *Secure AI Teammates*. Recurring trust theme: *Autonomous where safe. Human-controlled where it matters.* (Trust section reads *"Built for production environments."*). The product model is **Observe → Diagnose → Execute → Verify → Document (→ Escalate)** (Platform accordion under *"Full-stack operations."*). Primary CTA everywhere: **Map your first workflow** (secondary: *How it works*). Avoid: chatbot/copilot framing, hype, research-y language, whitepaper density. Built homepage flow (6 sections): **Hero** · **Problem** (*"Operations still scale through human execution."* — soft section + ops-headcount `ScaleVisual` with a bottleneck callout) · **Platform** (`#product` — *"Full-stack operations."*, tabs [Platform/Teammates/Get started] + left accordion + a **desktop-only** dark "live signal feed" panel) · **Trust** (`#control` — *"Built for production environments."*, 4 safeguards in a dark stage: Scoped access · Human approval paths · Audit-ready history · Gradual trust model) · **Capabilities** (`#outcomes` — *"Measure the work removed from the queue."*, infinite metric-card carousel) · **ClosingCTA** (*"Take recurring work out of the human queue."*) · **Footer** (giant Aurora "DORA" wordmark + meta *SECURE AI TEAMMATES FOR INFRASTRUCTURE OPERATIONS*). Nav (desktop ≥lg): **Product · Teammates · Control · Deployment** + pill CTA *Map your first workflow*. The `#teammates` and `#deployment` anchors are scroll-target `<span>`s at the top of the Platform section (`Platform.tsx`), so both of those nav links land on Platform.

Key invariants:
- **Type:** Plus Jakarta Sans (400-800) for hero, headings, body, UI, cards, buttons, diagrams. Instrument Serif (italic) is a sparse accent only. JetBrains Mono for labels, captions, diagram annotations.
- **Color:** base `#FFFFFF`, soft `#F7F8FA`, ink `#050608`, graphite `#0C0F14`, body `#3B4148`, muted `#6F7782`, line `#E4E8ED`, line-strong `#AEB7C2`, signal `#7DD3FC`, signal-soft `#E0F7FF`, deep-signal `#0369A1`.
- **Aurora gradient** is the signature accent: `#6EE7B7 → #2DD4BF → #22D3EE → #38BDF8 → #3B82F6` (mint→teal→cyan→blue). Cool only — **NO purple/violet/magenta, NO warm hues**. Use as thin accents (hero bar, heading underlines, dividers, stack rail, logo, giant wordmark), not surface fills. No Tailwind default blue.
- **Rounded scale:** stages/CTA band 24-26px, cards 16-20px, small in-stage panels 9-14px, buttons = pills (999px). **Exception:** stack/architecture diagram layer rows stay sharp (radius 0).
- Hairline borders; soft low-opacity shadows allowed only under dark stages. No glassmorphism or decorative blobs.
- **Brand mark** = the original **swarm orbit-ring** SVG (Aurora fill; solid white on dark), NOT a peak/lambda. Ship as a reusable `<Logo/>` component.
- The interactive product explainer in the build is the **Platform** section (`#product`): a tabbed (Platform/Teammates/Get started) left accordion (Observe/Diagnose/Execute/Verify/Document) paired with a **desktop-only** (`hidden lg:block`) dark "live signal feed" panel that simulates telemetry → diagnosis → execution → verification. Footer closes on the giant Aurora "DORA" wordmark.
- **Motion suite** (all `prefers-reduced-motion`-gated; continuous loops pause when hidden): hero entrance fade-up (~750ms); continuous `<canvas>` Aurora ribbon flow confined to the How-DORA-works visual panel; rotating logo mark (~22s); section scroll-reveal fade-ups; cell-pulse on live chips/grids; hover transitions <200ms.
- The hero background is the **Aurora `<canvas>`** (`AuroraCanvas` — drifting nebula blobs + horizontal aurora bands + parallax particle layers + sparse mesh lines, mouse-reactive, `prefers-reduced-motion`-gated, pauses when the hero scrolls out of view), under a radial vignette that keeps hero text legible. Dark "stage" panels (Platform live-feed, Trust safeguards) use corner brackets. Note: the older stack-diagram / harness-frame / Aurora-ribbon visuals described in `DESIGN.md` are **not in the current build**.

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

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
- Author a backlog-ready spec/issue → invoke /spec
