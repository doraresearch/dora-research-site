# Design System — DORA Research

Always read this file before making any visual or UI decision on this site. All font choices, colors, spacing, component behavior, and aesthetic direction are defined here. Do not deviate without explicit approval.

> **2026-05-23 redesign direction:** the site moved intentionally *closer to antigravity.google's* visual language — a light, airy white base with cinematic dark **rounded** "stage" panels, big geometric sans, an **Aurora** spectral gradient signature, **pill** buttons, a **swarm** brand mark, and a defined motion suite (ambient swarm, hero entrance, scroll reveals). This reverses several earlier invariants (sharp edges, cool-blue-only, no gradients, minimal/no continuous motion). See the Decisions Log.

## Product Context

- **What this is:** Marketing site for DORA Research, an AI systems company operating between an applied research lab, enterprise product studio, and AI-native services company.
- **Who it is for:** Enterprise leaders, operators, founders, technical teams, and transformation owners responsible for deploying AI into important daily workflows.
- **Positioning:** DORA helps organizations build and deploy AI systems they can rely on every day across their most important work.
- **Stack role:** DORA operates above the model layer, focusing on the application, orchestration, and harness layers of the AI stack.
- **Not DORA:** DORA is not a foundation model company, data infrastructure company, compute company, core infrastructure company, or generic AI tooling company.
- **Core primitives:** Coordinated enterprise workflows, parallel agent swarms, and unique personas per agent.
- **Operating model:** DORA combines research, system design, implementation, and enterprise deployment.
- **Project type:** Static marketing site using React + Vite + Tailwind + Framer Motion.

## Strategic Design Direction

DORA should feel like a serious enterprise AI systems company that turns existing models into dependable operational systems.

- Light, precise, architectural, and high-trust.
- Systems-led rather than SaaS-dashboard-led.
- Enterprise-grade without feeling corporate-generic.
- Research-backed without feeling academic or obscure.
- Productized without pretending to be a self-serve horizontal SaaS app.
- Calm, sparse, and legible.

Do not make the site look like a dark-only AI research lab, purple-gradient AI SaaS page, chatbot company, decorative dashboard company, consumer productivity assistant, foundation model lab, data company, infrastructure company, or compute company.

## Design Thesis

DORA's clearest visual idea:

> Existing models sit below. DORA sits above them. Enterprise work runs through DORA's application, orchestration, and harness layers.

The homepage should make this idea visible before the user scrolls.

The visual system is based on layered systems, workflow routing, enterprise work surfaces, agent roles, and harness/reliability concepts.

## Aesthetic Direction

**Antigravity-leaning enterprise systems.**

A light-first white base with generous space and big geometric sans, punctuated by cinematic **dark, rounded "stage" panels** (the command center, product surfaces) embedded in the white page. The **Aurora** spectral gradient is the signature accent, used sparingly as hairlines, heading underlines, the stack rail, the logo, and the giant wordmark — never flooding surfaces. Buttons are **pills**; cards and stages are **rounded**. The hero is centered with an Aurora accent rule and shows "above the model layer" through the command-center stage and the stack diagram.

This intentionally borrows antigravity.google's visual language — white airy base, dark rounded product stages, spectral accent, pill buttons, big confident type, ambient swarm motion, giant wordmark close — while keeping DORA-specific content, the stack/harness story, and an enterprise (not playful) tone. We are deliberately closer to that reference than to a generic template; we are not copying its logo, copy, or exact layout.

Still avoid: purple / violet / magenta or warm gradient hues (keep Aurora cool: mint → blue), fake analytics dashboards, a glowing orb used as if it carries meaning, robot or brain imagery, hype metrics, literal illustration (e.g. fish), neon, glassmorphism, decorative blobs, and self-serve SaaS language that makes DORA feel generic.

## Brand Personality

DORA should sound and look precise, serious, calm, technical but understandable, high-agency, operational, enterprise-ready, systems-oriented, confident without hype, and research-backed but deployment-focused.

DORA should not sound promotional, buzzword-heavy, academic for its own sake, like a chatbot wrapper, or like a generic AI automation agency.

## Typography

- **Body + UI:** `Plus Jakarta Sans`, weights 400, 500, 600, 700, 800. Use for hero, headings, body, navigation, cards, tables, buttons, and diagrams. (Adopted 2026-05-23, replacing Instrument Sans, for a more geometric, Antigravity-leaning cut.)
- **Research accent:** `Instrument Serif` (italic), used sparingly for one or two editorial accents — e.g. a single word inside a heading ("Built *above* the model layer", "Reliability, *designed in*"), a research pull-quote. Never the main product headline.
- **Labels / diagrams / captions:** `JetBrains Mono`, 10-12px, uppercase, wide tracking.

| Role | Size | Line height | Family |
|---|---:|---:|---|
| Hero display | `46px` mobile → `74-82px` desktop | 0.94-0.98 | Plus Jakarta Sans 700 |
| H2 | `28-42px` by breakpoint | 1.02-1.06 | Plus Jakarta Sans 700 |
| H3 | 20-28px | 1.08-1.2 | Plus Jakarta Sans 700 |
| Serif accent | matches its heading | — | Instrument Serif 400 italic |
| Lede | 19-20px | 1.5-1.55 | Plus Jakarta Sans 500 |
| Body | 15-18px | 1.6-1.7 | Plus Jakarta Sans 400 |
| Small | 13-15px | 1.5-1.6 | Plus Jakarta Sans 400 |
| Diagram / label | 10-12px | 1.2 | JetBrains Mono 500 |
| Giant wordmark | `clamp(90px, 21vw, 260px)` | 0.86 | Plus Jakarta Sans 800 |

Use direct, plainspoken headlines with tight tracking (`-0.03em` to `-0.04em` on display sizes). Avoid decorative headline treatments and excessive tracking on large text.

## Color System

A crisp light architecture palette with a cool **Aurora** spectral signature. Light, technical, enterprise-grade — not beige, dusty, parchment-like, boutique, or editorial-first.

| Token | Hex | Usage |
|---|---|---|
| `base` | `#FFFFFF` | Main page background |
| `soft` | `#F7F8FA` | Secondary surfaces, light buttons, subtle fields |
| `surface-alt` | `#EEF1F4` | Neutral hover states |
| `ink` | `#050608` | Primary text, headlines, nav, primary button bg |
| `graphite` | `#0C0F14` | Dark stage panels, command center, CTA band |
| `body` | `#3B4148` | Paragraph text |
| `muted` | `#6F7782` | Labels, metadata, secondary text |
| `line` | `#E4E8ED` | Standard hairline borders |
| `line-strong` | `#AEB7C2` | Stronger dividers, tables, architecture lines |
| `signal` | `#7DD3FC` | Solid UI accents: stage dots, selected states, signal pill |
| `signal-soft` | `#E0F7FF` | DORA layer backgrounds in the stack diagram |
| `deep-signal` | `#0284C7` | Link hovers, small active annotations, mono index labels |
| `dark-text` | `#F8FAFC` | Text on dark/graphite |
| `dark-muted` | `#CBD5E1` | Secondary text on dark/graphite |

### Aurora spectral signature

The signature gradient. Multi-hue but deliberately **cool / "AI-systems"**, not a warm or pride-style rainbow.

```
--spectral:    linear-gradient(90deg,  #6EE7B7, #2DD4BF, #22D3EE, #38BDF8, #3B82F6);
--spectral-v:  linear-gradient(180deg, #6EE7B7, #2DD4BF, #22D3EE, #38BDF8, #3B82F6);
```

| Stop | Hex | Color |
|---|---|---|
| 1 | `#6EE7B7` | mint green |
| 2 | `#2DD4BF` | teal |
| 3 | `#22D3EE` | cyan |
| 4 | `#38BDF8` | sky blue (also used as solid `signal2`) |
| 5 | `#3B82F6` | blue |

Apply Aurora as: the hero accent bar, section-heading underlines (~64px), hairline section dividers, the stack-diagram DORA rail, the CTA topline, primitive / use-case hover accents, the swarm logo mark, and the giant footer wordmark (`background-clip:text`). Use it as a thin signature, not as fills behind text or whole sections.

**Do not** use purple, violet, or magenta; do not add warm hues (rose, peach, orange, yellow); do not use neon glows, glassmorphism, or decorative blobs. Silver/steel may appear only on dark sections (it washes out on white) and is optional, not part of the core token.

## Layout

- **Max content width:** `max-w-[1200px]` on the homepage.
- **Gutters:** `px-8` mobile, `px-8`+ desktop (32px container padding).
- **Section padding:** `py-16` to `py-20` (mobile) → `py-20`/`py-28` (desktop).
- **Hero:** centered, generous top space (~78-82px), Aurora accent bar flush-left of the headline.
- **Grid style:** bordered grids, structured rows, stack diagrams, editorial two-column rhythm (left text / right dark stage card).
- **Whitespace:** generous, calm, premium.

### Corner radius scale (replaces the old `radius 0` rule)

| Element | Radius |
|---|---|
| Large dark stages, command center, CTA band | `24-26px` |
| Cards, product-stage cards, use-case cards | `16-20px` |
| Small panels / chips inside stages | `9-14px` |
| Buttons, eyebrow chips | pill (`999px`) |
| **Stack / architecture diagram layer rows** | **`0` (stay sharp)** — keeps the diagram reading as a precise architectural artifact |

Borders stay hairline (`line` / `line-strong`). No shadows beyond soft, low-opacity drop shadows under dark stages. No decorative gradients on surfaces (Aurora is for accents only).

## Brand Mark (Logo)

The DORA mark is a **swarm** — a coordinated ring of particles (the "orbit ring"), abstract and geometric, mapping to "parallel agent swarms." It replaces the earlier peak/lambda mark, which was too close to Antigravity's logo.

- **Construction:** ~13 `<circle>` elements on a `0 0 24 24` grid forming a ring with an opening (denser, larger dots on the lower-left arc) plus two small inner dots, filled with the Aurora gradient via `gradientUnits="userSpaceOnUse"` so the gradient is spatially consistent at any size.
- **Usage:** header (~22px, Aurora), command-center mark (~20px, solid white on dark), footer meta (~17px, Aurora). Minimum legible size ~16px.
- **Motion:** rotates slowly (~22s linear) in live contexts (header/footer); static in print/screenshot/static contexts. Reduced-motion → static. See Motion.
- **Don't:** use literal fish or any animal/illustration; recolor outside Aurora (or solid white on dark); outline or box the mark; shrink below ~16px where the inner dots muddy.
- **Reuse:** ship as a single `<Logo />` SVG component.

## Header

Fixed/sticky at top with a translucent light `base` background, hairline bottom border, compact 64px height, simple navigation, and one CTA.

Navigation: How it works · Primitives · Use cases · Research · Contact.

CTA: **Talk to DORA** — a pill with `ink` background and white text. On screens ≤860px the links collapse to a hamburger that toggles a dropdown menu (links + CTA).

## Buttons

All buttons are **pills** (`999px`).

- **Primary:** `ink` background, white text. Hover → slightly lighter ink.
- **Secondary:** `soft` background, `ink` text, hairline `line` border. Hover → subtle darken.
- **Ghost:** transparent, `ink` text, `line-strong` border (used for "Explore →" in the primitive spine).
- **Signal pill:** `signal` background, dark text — allowed only on the dark/graphite CTA band.

Preferred CTAs: Talk to DORA, See how it works, Explore the primitives, Build with DORA. Avoid: Get started free, Start for free, Unlock AI, Supercharge your team. Hover transitions under 200ms.

## Homepage Structure

1. Header (sticky, swarm mark + nav + Talk to DORA pill).
2. Centered hero — Aurora accent bar, big geometric headline, lede, pill CTAs, sequential fade-up entrance.
3. Command-center stage — dark rounded panel with the continuous swarm behind real system surfaces (workflow brief, parallel agents, harness review).
4. Monochrome systems-icon strip.
5. Problem — "Models are powerful. Systems are missing."
6. Stack diagram — "Built above the model layer" with the Aurora DORA rail.
7. Primitive spine — editorial rows (left text / right dark stage card): Coordinated workflows, Parallel agent swarms, Persona-based agents, and the Harness.
8. Use cases — concise cards.
9. Research agenda — Instrument Serif pull-quote + numbered agenda.
10. Final CTA — graphite rounded band, Aurora topline, signal pill.
11. Footer — giant Aurora "DORA" wordmark + columns + meta (with the swarm mark).

## Required Components

### Stack Diagram

Show where DORA sits in the AI stack:

1. Enterprise Workflows
2. DORA Application Layer
3. DORA Orchestration Layer
4. DORA Harness Layer
5. Existing Model Layer
6. Data / Infrastructure / Compute

The three DORA layers are grouped and emphasized with `signal-soft` fill, an **Aurora vertical rail**, and a "↳ DORA operates here" mono bracket. Model, data, infrastructure, and compute are visible but de-emphasized (dashed, `soft`, muted). Layer rows stay sharp (radius 0). Mono labels, hairline borders, readable on mobile.

### Primitive Spine

Four editorial rows (left text + mono index + Explore pill; right a dark rounded product-stage card):

1. Coordinated enterprise workflows — workflow rail (01-05) card
2. Parallel agent swarms — agent grid card (cells pulse active/idle)
3. Persona-based agents — role/context/constraints cards
4. The harness — the harness-frame card (see Harness Visual below)

### Command Center Artifact

A dark, rounded graphite stage with the continuous Aurora swarm behind **real system surfaces** — not a fake dashboard:

- Workflow brief (01-05 rails, some active)
- Parallel agents (live chips, some active)
- Harness review (context traced, output evaluated, constraints respected → "Ready for deployment")
- HUD corner brackets + mono labels; bottom rail "WORKFLOW → ORCHESTRATION → HARNESS".

Avoid generic metrics, fake analytics charts, chat bubbles, or decorative UI filler.

### Harness Visual — the harness frame

**Resolved 2026-05-23.** Row 4's visual is a dark stage card showing the agent core wrapped in an instrument rig: corner **containment brackets**, a dashed **measurement ring** with an Aurora **eval arc** (~75%), N/E/S/W tick marks, the labels **CONTEXT · EVAL · CONSTRAINTS**, and a **"REVIEW ✓ → DEPLOY"** readout. It reads as something that *wraps, measures, and gates* the agent system — not a glowing core. The earlier glowing orb is **retired** (it symbolized energy, not control/review).

Built as an inline SVG ring (`viewBox 0 0 100 100`) with a `userSpaceOnUse` Aurora gradient plus positioned mono labels; no extra dependencies. In motion contexts the eval arc rotates slowly (~16s) and the core gently pulses; static otherwise; reduced-motion → static.

### Giant Wordmark Footer

A huge "DORA" set in Plus Jakarta Sans 800 with the Aurora gradient via `background-clip:text` — the Antigravity-style brand close.

### Use Case Cards

Concise, serious, no full-automation promises. Aurora top-border accent on hover.

## Motion

Motion is functional and restrained, but the Antigravity direction adds a defined signature set. **Every motion below is mandatory `prefers-reduced-motion`-gated** (under `reduce`: continuous loops draw a single static frame, reveals show immediately, intervals don't run, the mark doesn't rotate). Continuous loops must **pause when the tab is hidden**.

Approved motion:

1. **Hero entrance** — sequential fade-up of eyebrow → headline → lede → CTAs → stage (~750ms total).
2. **Command-center swarm** — a continuous `<canvas>` particle/"bee" swarm, **confined to the dark command-center stage**. Geometric and precise, ~40-64 nodes drifting with constellation links and a few brighter Aurora nodes. This is the one approved continuous ambient field (it replaces the old "no continuous background animation" rule, scoped to the dark stage only).
3. **Swarm logo mark** — slow rotation (~22s linear) in header/footer; static elsewhere.
4. **Scroll reveals** — subtle fade-up + ~20px translate as major sections enter the viewport (IntersectionObserver, once each, ~600ms). Replaces the old "avoid per-section scroll animations" rule.
5. **Live command center** — agent chips and the spine's agent grid pulse active/idle on an interval so the system reads as running.
6. **Hover** — Aurora accent draws/grows on hover (primitive rows, use-case cards); transitions under 200ms.
7. **Mobile nav** — hamburger ↔ X toggle, dropdown slide/fade.

Durations: hero entrance 750ms, reveals ~600ms, hover <200ms, swarm slow and calm, mark rotation ~22s.

Avoid: parallax, motion outside this list, motion that isn't reduced-motion-gated, continuous animation outside the dark command stage (the rotating mark excepted), and anything cute, bouncy, or attention-grabbing.

## Copy Rules

Use these prominently:

- "above the model layer"
- "application, orchestration, and harness layers"
- "model-agnostic"
- "reliable AI systems"
- "enterprise workflows"
- "parallel agent swarms"
- "persona-based agents"

Required statement:

> DORA does not build foundation models, data infrastructure, compute platforms, or generic AI infrastructure.

Prefer systems nouns: workflow, harness, orchestration, evaluation, handoff, role, persona, constraint, context, deployment, reliability, system, traceability, operating layer, coordination, enterprise work.

Avoid: unlock, supercharge, future of, revolutionize, AI-powered everything, agentic as vague filler, magical, autonomous everything, one AI for every team, copilot for X, chatbot, productivity assistant, AI employee, next-generation, transform your business overnight.

## Homepage Copy

### Hero

Headline: Enterprise AI above the model layer.

Subheadline: DORA builds the application, orchestration, and harness layers that turn existing models into reliable systems for the workflows your organization depends on every day.

Supporting copy: We coordinate enterprise workflows, orchestrate parallel agent swarms, and give each agent a role-specific persona, context, and operating constraints.

Primary CTA: Talk to DORA

Secondary CTA: See how it works

Hero label: ABOVE THE MODEL LAYER

### Problem

Headline: Models are powerful. Systems are missing.

Copy: Foundation models can generate, reason, and respond. But models alone do not make AI operational.

Enterprises need systems that understand context, coordinate across teams, execute multi-step work, and behave reliably in production environments.

DORA builds the systems layer where AI becomes useful inside real organizations.

### Stack

Headline: Built above the model layer.

Copy: DORA is model-agnostic.

We do not compete at the foundation model, compute, infrastructure, or generic data layers. We build where AI becomes operational: the application, orchestration, and harness layers.

DORA does not build foundation models, data infrastructure, compute platforms, or generic AI infrastructure. We build the systems layer that turns existing models into dependable enterprise AI.

### Reliability

Headline: Reliability is designed into the system.

Copy: Reliable AI is not just better output. It is the ability to observe, evaluate, constrain, and improve how AI behaves inside real workflows.

DORA builds harnesses around agent systems so teams can see how work moves, where decisions happen, what context agents use, and how outputs are reviewed before deployment.

### From Research to Deployed Systems

Headline: From research to deployed systems.

Copy: DORA works with organizations to move from AI ambition to operational systems.

We combine research, workflow design, agent architecture, orchestration, harnesses, and deployment support so teams can rely on AI in daily work.

## Implementation Requirements

- Use the existing React + Vite + Tailwind project structure.
- Load fonts: `Plus Jakarta Sans` (400-800), `Instrument Serif` (italic accent), `JetBrains Mono` (labels). Self-host or via Google Fonts.
- Preserve maintainability and component clarity. Ship the logo as a reusable `<Logo />` SVG component.
- Implement motion with CSS + minimal JS, or Framer Motion where it fits; the command-center swarm is a `<canvas>` component. **All motion must be `prefers-reduced-motion`-gated** and continuous loops must pause when hidden/offscreen.
- Use semantic sections and accessible markup. Hamburger nav needs `aria-expanded`.
- Ensure responsive design (the command-center stage stacks to one column on mobile).
- Do not introduce unnecessary dependencies.
- Replace placeholder copy with final copy from this document.
- Use actual layout and diagrams, not generic placeholders.
- Make the homepage immediately communicate that DORA turns existing models into reliable enterprise AI systems through workflow coordination, parallel agent swarms, personas, orchestration, and harnesses.
- The harness row uses the resolved **harness-frame** visual (see Harness Visual); the orb is retired.

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-15 | Remodel homepage around above-the-model-layer positioning | DORA's clearest market distinction is not model capability or infrastructure. It is turning existing models into dependable, role-aware systems inside enterprise workflows. |
| 2026-05-15 | Shift visual direction from academic research page to enterprise AI systems company | The previous research-lab editorial style preserved seriousness but did not communicate application, orchestration, and harness layers quickly enough for enterprise buyers. |
| 2026-05-15 | Use light-first design instead of dark-first design | A lighter system can feel more modern, enterprise-accessible, and productized while still preserving seriousness through sharp rectangles, restrained color, stack diagrams, and precise copy. |
| 2026-05-15 | Remove company-specific visual references | The site should not imitate another AI startup's brand or homepage structure. DORA needs its own systems-layer identity. |
| 2026-05-15 | Add AI-native services section | DORA is not only a software surface. It combines research, system design, orchestration, harnesses, and deployment support for enterprise AI systems. |
| 2026-05-21 | Replace fluid hero type with breakpoint-based type scale | Keeps the site crisp and stable across viewport sizes while preserving the intended large desktop hero cap. |
| 2026-05-21 | Adopt Antigravity-style launch layout with a digital bee swarm hero | User explicitly requested mirroring Antigravity's layout while replacing the star field with a swarm of digital bees. Intentional exception to the normal light architecture hero rules. |
| 2026-05-22 | Extend Antigravity rhythm with a dark DORA command-center artifact | The reference site moves from launch hero into a cinematic product-stage section. DORA echoes that rhythm with workflow, parallel-agent, and harness-review surfaces rather than an IDE screenshot. |
| 2026-05-23 | Move the whole site **closer to antigravity.google** (approved "greatest-hits" blend) | User asked to reimagine the site nearer the reference. Approved direction: centered Antigravity hero + command-center stage + above-the-model-layer stack diagram + 4-row primitive spine + giant wordmark close. |
| 2026-05-23 | **Rounded** surfaces + **pill** buttons (reverses sharp / `radius 0`) | Required to match the Antigravity direction. Stages 24-26px, cards 16-20px, buttons pill; stack-diagram layer rows stay sharp to preserve the architectural read. |
| 2026-05-23 | Adopt the **Aurora** spectral gradient as the signature (reverses cool-blue-only / no-gradient rule) | User wanted to keep a multi-hue gradient but recolored to read as "modern AI / ML / agents," not a pride rainbow. Dropped purple/violet/magenta and all warm hues; mint→teal→cyan→blue. `#7DD3FC` signal kept for solid accents. |
| 2026-05-23 | Replace the peak/lambda mark with an original **swarm** orbit-ring mark | The lambda was effectively Antigravity's logo. The swarm maps to "parallel agent swarms," is ownable, and reads at header size. Built from particles, not literal fish. |
| 2026-05-23 | Switch primary font **Instrument Sans → Plus Jakarta Sans** | More geometric / Google-Sans-like, closer to Antigravity; matches the approved mockups. Instrument Serif stays the accent, JetBrains Mono the label font. |
| 2026-05-23 | Expand the **motion** suite (reverses "minimal / no continuous / no scroll" rules) | Approved: continuous command-center canvas swarm (dark stage only), hero entrance, scroll-reveal fade-ups, rotating logo mark, live command-center pulsing, mobile nav. All mandatorily `prefers-reduced-motion`-gated and paused when hidden. |
| 2026-05-23 | Harness visual resolved: **harness frame** (orb retired) | A glowing orb symbolized energy, not a harness. Chosen visual wraps the agent core in an instrument rig — containment brackets + measurement ring + Aurora eval arc + CONTEXT/EVAL/CONSTRAINTS + REVIEW→DEPLOY. Picked over the review/deploy-gate and instrumented-swarm candidates. |
