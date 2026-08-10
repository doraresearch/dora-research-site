# DORA Research site

Static marketing site for DORA — **secure AI teammates for infrastructure operations**. DORA turns recurring alerts, diagnostics, runbooks, and escalations into AI-executed workflows across an operator's existing stack (Datadog, PagerDuty, CloudWatch, Prometheus, Slack, Jira, cloud, databases), reducing human touches per task while keeping engineers in control — higher throughput without scaling headcount linearly. Audience: infrastructure & operations engineers (DBAs, SREs, NOC, DevOps, platform/cloud/security ops, QA). Stack: React 18 + TypeScript + Vite + Tailwind + react-router-dom, prerendered via vite-react-ssg (no framer-motion). Current public surface: single-page homepage. Deployed on **Cloudflare Pages** (manual `wrangler pages deploy`).

> **Positioning note (2026-06-21):** the built/shipped site is the **infrastructure-operations** product described above. Earlier revisions of this file and `DESIGN.md` described an **iGaming** positioning ("AI operations for iGaming", KYC/payments/VIP). That positioning is **superseded/stale** — the iGaming language does not appear anywhere in the build. Judge work against the infrastructure-operations product and the design system's visual invariants.

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit approval. Flag any code that doesn't match `DESIGN.md`.

Direction (2026-05-23): the site is intentionally **Antigravity-leaning** — white airy base, cinematic dark **rounded** "stage" panels, big geometric sans, an **Aurora** spectral signature, **pill** buttons, a **swarm** brand mark, and a defined motion suite. This reversed the old sharp/cool-blue-only/no-gradient/minimal-motion rules. `DESIGN.md` is authoritative; this list is a quick reference.

Positioning (built site, reconciled 2026-06-21): hero = **"Secure AI teammates for infrastructure operations."** with the supporting line *"DORA turns recurring alerts, diagnostics, runbooks, and escalations into AI-executed workflows across your existing stack. Reduce human touches per task while keeping engineers in control."* + *"Operate at higher throughput without scaling headcount linearly."* Recurring trust theme: *Autonomous where safe. Human-controlled where it matters.* (Trust section reads *"Built for production environments."*). The product model is **Observe → Diagnose → Execute → Verify → Document (→ Escalate)** (Platform accordion under *"Full-stack operations."*). Primary CTA everywhere: **Map your first workflow** (secondary: *How it works*). Avoid: chatbot/copilot framing, hype, research-y language, whitepaper density. Built homepage flow (6 sections): **Hero** · **Problem** (*"Operations still scale through human execution."* — soft section + ops-headcount `ScaleVisual` with a bottleneck callout) · **Platform** (`#product` — *"Full-stack operations."*, tabs [Platform/Teammates/Get started] + left accordion + a **desktop-only** dark "live signal feed" panel) · **Trust** (`#control` — *"Built for production environments."*, 4 safeguards in a dark stage: Scoped access · Human approval paths · Audit-ready history · Gradual trust model) · **Capabilities** (`#outcomes` — *"Measure the work removed from the queue."*, static 3-col metric-card grid on desktop, snap-scroll row on mobile) · **ClosingCTA** (*"Take recurring work out of the human queue."*) · **Footer** (giant Aurora "DORA" wordmark + meta *SECURE AI TEAMMATES FOR INFRASTRUCTURE OPERATIONS*). Nav (desktop ≥lg): **Product · Teammates · Control · Deployment** + pill CTA *Map your first workflow*. The `#teammates` and `#deployment` anchors are scroll-target `<span>`s at the top of the Platform section (`Platform.tsx`), so both of those nav links land on Platform.

Key invariants:
- **Type:** Plus Jakarta Sans (400-800) for hero, headings, body, UI, cards, buttons, diagrams. Instrument Serif (italic) is a sparse accent only. JetBrains Mono for labels, captions, diagram annotations.
- **Color:** base `#FFFFFF`, soft `#F7F8FA`, ink `#050608`, graphite `#0C0F14`, body `#3B4148`, muted `#6F7782`, line `#E4E8ED`, line-strong `#AEB7C2`, signal `#7DD3FC`, signal-soft `#E0F7FF`, deep-signal `#0369A1`.
- **Aurora gradient** is the signature accent: `#6EE7B7 → #2DD4BF → #22D3EE → #38BDF8 → #3B82F6` (mint→teal→cyan→blue). Cool only — **NO purple/violet/magenta, NO warm hues**. Use as thin accents (Aurora-clipped heading spans, metric-card hairlines/rails, logo, giant wordmark), not surface fills. No Tailwind default blue.
- **Rounded scale:** stages/CTA band 24-26px, cards 16-20px, small in-stage panels 9-14px, buttons = pills (999px). Note: Tailwind's `rounded-2xl` is remapped to 26px in `tailwind.config.js` — treat it as stage radius. **Exception:** stack/architecture diagram layer rows stay sharp (radius 0).
- Hairline borders; soft low-opacity shadows allowed only under dark stages. No glassmorphism on content surfaces (the frosted header nav pill + mobile menu are the sanctioned exceptions) and no decorative blobs.
- **Brand mark** = the original **swarm orbit-ring** SVG (Aurora fill; solid white on dark), NOT a peak/lambda. Ship as a reusable `<Logo/>` component.
- The interactive product explainer in the build is the **Platform** section (`#product`): a tabbed (Platform/Teammates/Get started) left accordion (Observe/Diagnose/Execute/Verify/Document/Escalate) paired with a **desktop-only** (`hidden lg:flex`) dark "live signal feed" panel that simulates telemetry → diagnosis → execution → verification, with its mono chrome row pinned to the panel bottom. Footer closes on the giant Aurora "DORA" wordmark.
- **Motion suite** (all `prefers-reduced-motion`-gated; continuous loops pause when hidden): Lenis smooth scroll (anchors via `lenis.scrollTo`); hero entrance fade-up (~750ms); hero Aurora canvas; hero "Trusted by" marquee; rotating logo mark (~22s); section scroll-reveal fade-ups; cell-pulse on live chips/grids; footer wordmark shimmer (12s, on-screen only); hover transitions <200ms.
- The hero background is the **Aurora `<canvas>`** (`AuroraCanvas` — drifting nebula blobs + silky Aurora ribbons + horizontal aurora bands + JetBrains Mono **code-rain** columns with clear zones under the headline band and the bottom-pinned marquee, mouse-reactive, `prefers-reduced-motion`-gated, pauses when the hero scrolls out of view), under a central legibility wash. Dark "stage" panels (Platform live-feed, Trust safeguards) use corner brackets. Note: the older stack-diagram / harness-frame visuals described in `DESIGN.md` are **not in the current build**.

## Dev

```bash
npm install
npm run dev      # vite dev server
npm run build    # production build
npm run preview  # preview prod build
```

## Deploy

Production (`dorareason.com` + `www`) is hosted on **Cloudflare Pages** (project
`dora-research-site`) and ships through GitHub Actions. The normal release flow
is local branch → GitHub PR → merge to `main`; the merge triggers
`.github/workflows/deploy-cloudflare-pages.yml`.

The workflow runs under Node 20 LTS, installs with `npm ci`, typechecks, builds
the prerendered site, and deploys `dist` with `cloudflare/wrangler-action@v4`.
Authentication is provided only through the GitHub `Production` environment
secrets `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`. Do not run Wrangler
locally for normal releases and do not commit either value. Store both under
GitHub **Settings → Environments → Production**; restrict the API token to the
target Cloudflare account with **Account → Cloudflare Pages → Edit** permission.

DNS for `dorareason.com` lives on **Cloudflare** (nameservers `courtney`/`ishaan.ns.cloudflare.com`); apex `@` and `www` are `CNAME → dora-research-site.pages.dev` (Proxied), SSL auto-provisioned. DNS records and Pages custom domains remain managed in the **Cloudflare dashboard** and are not changed by the deployment workflow.

Notes:
- Build runs `tsc --noEmit && vite-react-ssg build` (prerendered static output in `dist/`). SPA fallback for unknown paths is `public/_redirects` (`/* /index.html 200`).
- History: was on Vercel (manual `vercel --prod`); Vercel's Hobby plan then blocked the commercial deploy (`Not authorized`), so it was migrated to **Cloudflare Pages** on 2026-06-23. A stale `.vercel/` link may exist locally (gitignored) — ignore it; do not run `vercel`.

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
