# Design System — DORA Research

Always read this file before making any visual or UI decision on this site. All font choices, colors, spacing, component behavior, and aesthetic direction are defined here. Do not deviate without explicit approval.

> **2026-05-24 vertical repositioning (Phase A + B both shipped):** DORA is framed as **the AI deployment company for iGaming** — vertical operational infrastructure for gaming operators, not horizontal "enterprise AI." The site keeps the visual system (white airy base, dark rounded "stage" panels, Aurora gradient, swarm mark, pill buttons, motion suite — see 2026-05-23 entries). Homepage now includes: hero, command-center stage, icon strip, problem, **Category** ("not a chatbot/BPO/operator/agency"), **Paradigm shift** ("from AI that chats to AI that acts"), **Operating philosophy** ("human-governed agentic operations" — agents handle / humans retain), stack diagram, **5-pillar architecture spine** (Operational workflows · Persona-based operational agents · Coordinated multi-agent systems · Persistent operational memory · Human-governed harness), **8 iGaming use cases**, **Deployment model** (Assess → Deploy → Validate → Expand → Productize), **Outcomes**, **Trust layer** (regulated operational environments with 8 safeguards), final CTA. Research section removed from homepage.

## Product Context

- **What this is:** Marketing site for DORA Research — the **AI deployment company for iGaming**. Vertical operational infrastructure for gaming operators.
- **Who it is for:** Gaming operators — executives and operational leaders responsible for CRM, customer support, compliance, fraud & risk, payments, affiliates, BI & reporting, QA, and trading services. Buyers care about operational cost, throughput, regulatory posture, and operating margin.
- **Positioning:** DORA deploys **human-governed agentic systems** across iGaming operations to reduce manual workload, accelerate execution, and expand operating margins.
- **Not DORA:** DORA is **not** a foundation model company, casino operator, BPO provider, generic chatbot, automation agency, or a horizontal "enterprise AI" platform.
- **Core primitives** (Phase A shipped — Phase B reworks to 5): coordinated workflows, parallel agent swarms, persona-based agents. *Phase B adds:* persistent operational memory and the human-governed harness as explicit pillars.
- **Operating model:** Deployment-led — workflow assessment → bounded agent deployment → operational validation → expanded permissions → infrastructure licensing.
- **Project type:** Static (SSG) marketing site using React 18 + TypeScript + Vite + Tailwind, prerendered via `vite-react-ssg`.

## Strategic Design Direction

DORA should feel like **an AI deployment company built for iGaming operators** — vertical, operator-credible, regulated-environment-trustworthy, deployment-led.

- Vertical, not horizontal: iGaming is the **category**, not a use case.
- Operator-grade, not generic enterprise.
- Regulated-environment-credible: bounded permissions, audit trails, human oversight visible in the design language.
- Light, precise, architectural, high-trust.
- Calm, sparse, and legible — selling commercial outcomes, not technology.

Do not make the site look like a casino brand, a chatbot/copilot company, a BPO/services agency, a generic horizontal AI platform, an automation marketplace, a consumer productivity assistant, or another foundation-model lab.

## Design Thesis

DORA's clearest one-line idea:

> **DORA is building the AI-native operational layer for the global iGaming industry.**

Supporting frame (still useful — and the visual stack diagram still works for it):

> Existing models sit below. DORA sits above them, deploying human-governed agentic systems directly into gaming operations.

The homepage should make the vertical framing visible above the fold: iGaming, deployment-led, human-governed, operator-measurable.

## Aesthetic Direction

**Antigravity-leaning enterprise systems** — visual system unchanged from the 2026-05-23 redesign.

A light-first white base with generous space and big geometric sans, punctuated by cinematic **dark, rounded "stage" panels** (the command center, product surfaces) embedded in the white page. The **Aurora** spectral gradient is the signature accent, used sparingly as hairlines, heading underlines, the stack rail, the logo, and the giant wordmark — never flooding surfaces. Buttons are **pills**; cards and stages are **rounded**. The hero is centered with an Aurora accent rule.

Still avoid: purple / violet / magenta or warm gradient hues (keep Aurora cool: mint → blue), fake analytics dashboards, glowing-orb-as-meaning, robot or brain imagery, hype metrics, literal illustration, neon, glassmorphism, decorative blobs, and self-serve SaaS language that makes DORA feel generic.

## Brand Personality

DORA should sound and look **operator-aware, regulated-environment-credible, deployment-focused, outcomes-driven, human-governance-emphatic, calm, precise** — talking to gaming operations leaders about measurable margin impact, not pitching technology to engineers.

DORA should not sound promotional, hype-y, "AI-revolution" framing, chatbot/copilot framing, BPO/services-agency framing, or like a horizontal enterprise AI vendor.

## Typography

- **Body + UI:** `Plus Jakarta Sans` (400–800).
- **Research accent:** `Instrument Serif` (italic), sparing — one or two editorial accents.
- **Labels / diagrams / captions:** `JetBrains Mono`, 10–12px, uppercase, wide tracking.

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

Tight tracking on display sizes (`-0.03em` to `-0.04em`). Direct, plainspoken headlines.

## Color System

A crisp light architecture palette with the cool **Aurora** spectral signature.

| Token | Hex | Usage |
|---|---|---|
| `base` | `#FFFFFF` | Main page background |
| `soft` | `#F7F8FA` | Secondary surfaces, light buttons, subtle fields |
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

The signature gradient. Multi-hue but deliberately **cool / "AI-systems"**, not warm or pride-style rainbow.

```
--spectral:    linear-gradient(90deg,  #6EE7B7, #2DD4BF, #22D3EE, #38BDF8, #3B82F6);
--spectral-v:  linear-gradient(180deg, #6EE7B7, #2DD4BF, #22D3EE, #38BDF8, #3B82F6);
```

Apply Aurora as: the hero accent bar, section-heading underlines (~64px), hairline section dividers, the stack-diagram DORA rail, the CTA topline, primitive / use-case hover accents, the swarm logo mark, and the giant footer wordmark (`background-clip:text`). Thin signature, not surface fills. **No purple, violet, magenta, or warm hues.**

## Layout

- **Max content width:** `max-w-[1200px]`.
- **Gutters:** `px-6` mobile, `px-8` desktop.
- **Section padding:** `py-16` mobile → `py-20`/`py-28` desktop.
- **Hero:** centered, ~78-82px top space, Aurora accent bar flush-left of headline.

### Corner radius scale

| Element | Radius |
|---|---|
| Large dark stages, command center, CTA band | `24-26px` |
| Cards, product-stage cards, use-case cards | `16-20px` |
| Small panels / chips inside stages | `9-14px` |
| Buttons, eyebrow chips | pill (`999px`) |
| **Stack / architecture diagram layer rows** | **`0` (stay sharp)** — keeps the diagram reading as a precise architectural artifact |

## Brand Mark (Logo)

The DORA mark is a **swarm** — a coordinated ring of particles (the "orbit ring"), abstract and geometric, mapping to "parallel agent swarms."

- **Construction:** ~13 `<circle>` elements on a `0 0 24 24` grid forming a ring with an opening (denser, larger dots on the lower-left arc) plus two small inner dots, filled with the Aurora gradient via `gradientUnits="userSpaceOnUse"`.
- **Usage:** header (~22-24px, Aurora, spinning), command-center mark (~20px, solid white on dark, static), footer meta (~17px, Aurora, spinning). Minimum legible size ~16px.
- **Motion:** rotates slowly (~22s linear) in live contexts (header/footer); static otherwise; reduced-motion → static.
- **Don't:** literal fish/animals, recolor outside Aurora/white, outline, shrink below ~16px.
- **Reuse:** ship as the `<Logo />` SVG component.

## Header

Sticky/translucent light `soft` background, hairline bottom border, 64px height, simple navigation, one pill CTA. The header logo **spins** (Aurora swarm).

Navigation: How it works · Primitives · Use cases · Research · Contact.

CTA: **Assess deployment** (formerly "Talk to DORA" — Phase A updates the CTA label). On ≤860px the links collapse to a hamburger that toggles a dropdown menu (links + CTA).

## Buttons

All buttons are **pills** (`999px`).

- **Primary:** `ink` background, white text. Hover → slightly lighter ink.
- **Secondary:** `soft` background, `ink` text, hairline `line` border. Hover → subtle darken.
- **Ghost:** transparent, `ink` text, `line-strong` border.
- **Signal pill:** `signal` background, dark text — allowed only on the dark/graphite CTA band.

Preferred CTAs (iGaming-tuned): *Assess your operator AI deployment opportunity*, *Map a gaming operations workflow*, *See where DORA runs*, *Evaluate operator margin impact*. Avoid: Talk to AI, Unlock AI, Supercharge your team, Get started free.

## Homepage Structure (Phase A + B — shipped)

1. **Header** — sticky, swarm mark + nav (How it works · Architecture · Use cases · Outcomes · Contact) + pill CTA.
2. **Hero** — *AI-native operations infrastructure for iGaming.*
3. **Command-center stage** (`#how-it-works`) — dark rounded panel with the continuous canvas swarm + real iGaming system surfaces (player-retention workflow, parallel ops agents, harness review).
4. **Icon strip** — monochrome systems-icon row.
5. **Problem** — *Gaming operators are digitally native. Their operations are not.*
6. **Category** — *An AI deployment company for iGaming.* (Not a chatbot / BPO / casino operator / agency.)
7. **Paradigm shift** — *From AI that chats — to AI that acts.* Centered Aurora moment + 2-col verb contrast (chats: drafts/suggests/answers ↔ acts: routes/executes/escalates/monitors/approves/reports).
8. **Operating philosophy** — *Human-governed agentic operations.* Dark rounded stage with two columns: **Agents handle** (execution, monitoring, reporting, throughput, repetitive coordination) / **Humans retain** (strategic decisions, quality governance, escalations, compliance accountability, exceptions).
9. **Stack diagram** — *Built above the model layer* (operator-tuned framing).
10. **Architecture spine** (`#architecture`) — *Five pillars of operational intelligence.* Editorial rows alternating left/right: Operational workflows · Persona-based operational agents · Coordinated multi-agent systems · **Persistent operational memory** · Human-governed harness.
11. **Where DORA runs** (`#use-cases`) — 8 iGaming operating functions (CRM & Retention, Customer Support, Compliance Operations, Fraud & Risk, Payments, Affiliate Operations, BI & Reporting, Trading Services).
12. **Deployment model** — *How DORA deploys.* 5-phase numbered flow with Aurora signal line: Assess → Deploy → Validate → Expand → Productize.
13. **Measured outcomes** (`#outcomes`) — operator-impact list (cost, throughput, retention, compliance cadence, margin expansion — 10 items).
14. **Trust layer** — *Built for regulated operational environments.* Bracketed dark stage (harness-frame aesthetic) with 8 safeguards: scoped permissions · human review gates · audit trails · escalation rules · policy-aware agents · constrained execution · monitoring & evaluation · compliance-aligned workflows.
15. **Final CTA** (`#contact`) — *Assess your operator AI deployment opportunity.*
16. **Footer** — giant Aurora "DORA" wordmark + columns + meta with the swarm mark.

## Required Components

### Stack Diagram

Show where DORA sits relative to models, while framing the operator context:

1. Gaming operations
2. DORA Application Layer
3. DORA Orchestration Layer
4. DORA Harness Layer
5. Existing Model Layer
6. Data / Infrastructure / Compute

The three DORA layers are grouped and emphasized with `signal-soft` fill, an **Aurora vertical rail**, and a "↳ DORA operates here" mono bracket. Layer rows stay sharp (radius 0).

### Architecture Spine (Phase B shipped — 5 pillars)

Five editorial rows (left text + mono index + Explore pill; right a dark rounded product-stage card), alternating left/right per row:

1. **Operational workflows** — `WorkflowRail` visual (01-05 rails on dark stage).
2. **Persona-based operational agents** — `PersonaCards` (Retention · Compliance · Risk role cards).
3. **Coordinated multi-agent systems** — `AgentGrid` (12-cell grid with the live `cell-pulse` animation on active cells).
4. **Persistent operational memory** — `MemoryLayers` (6 mono-labeled memory categories: POLICIES · DECISIONS · EXCEPTIONS · CUSTOMER PATTERNS · COMPLIANCE LOGIC · INSTITUTIONAL — with sample counts).
5. **Human-governed harness** — `HarnessFrame` (instrument-rig: containment brackets + measurement ring + Aurora eval arc + CONTEXT/EVAL/CONSTRAINTS + REVIEW → DEPLOY readout).

Section heading: *Five pillars of operational intelligence.* `id="architecture"`.

### Command Center Artifact

A dark, rounded graphite stage with the continuous Aurora swarm behind **real iGaming system surfaces** — not a fake dashboard:

- **Workflow brief** — a real iGaming workflow (e.g., player retention, fraud triage, compliance review) with 5 rails.
- **Parallel agents** — live chips representing operations agents (e.g., retention · support · fraud · payments · compliance).
- **Harness review** — context traced, output evaluated, constraints respected → "Ready for action" / "Deploy."

Avoid generic metrics, fake analytics charts, chat bubbles, or decorative UI filler.

### Harness Visual — the harness frame

Row 4's visual is a dark stage card showing the agent core wrapped in an instrument rig: corner **containment brackets**, a dashed **measurement ring** with an Aurora **eval arc** (~75%), N/E/S/W tick marks, the labels **CONTEXT · EVAL · CONSTRAINTS**, and a **"REVIEW ✓ → DEPLOY"** readout. Built as an inline SVG ring with a `userSpaceOnUse` Aurora gradient.

In motion contexts the eval arc rotates slowly (~16s) and the core gently pulses; reduced-motion → static.

### Giant Wordmark Footer

A huge "DORA" set in Plus Jakarta Sans 800 with the Aurora gradient via `background-clip:text` — the Antigravity-style brand close.

### Use Case Cards (Phase A — 8 iGaming functions)

A 4-column grid (responsive: 1 col mobile, 2 cols tablet, 4 cols desktop) showing the 8 operating functions where DORA runs inside gaming operators:

| Function | Card copy |
|---|---|
| **CRM & Retention** | AI-native player lifecycle management — segmentation, campaign orchestration, VIP workflow support. |
| **Customer Support** | Human-governed player operations with escalation, QA, policy checks, and multilingual execution. |
| **Compliance Operations** | KYC, AML, document review, regulatory workflows, audit-ready escalation trails. |
| **Fraud & Risk** | Behavioral monitoring, abuse detection, anomaly review, operational risk triage. |
| **Payments** | Reconciliation, routing support, treasury coordination, payment-risk workflows. |
| **Affiliate Operations** | Partner onboarding, reconciliation, monitoring, campaign operations. |
| **BI & Reporting** | Real-time operational intelligence, anomaly detection, executive reporting. |
| **Trading Services** | Exposure monitoring, trading workflow intelligence, decision-support operations. |

Concise, serious, regulated-tone — no full-automation promises. Aurora top-border accent on hover.

## Motion

Motion is functional and restrained but uses a defined signature set. **Every motion is mandatorily `prefers-reduced-motion`-gated**. Continuous loops pause when the tab is hidden.

Approved motion:

1. **Hero entrance** — sequential fade-up of eyebrow → headline → lede → CTAs → stage (~750ms total).
2. **Command-center swarm** — continuous `<canvas>` particle/"bee" swarm, confined to the dark command-center stage.
3. **Swarm logo mark** — slow rotation (~22s linear) in header + footer; static elsewhere.
4. **Scroll reveals** — subtle fade-up + ~20px translate as major sections enter the viewport (IntersectionObserver, once each, ~600ms).
5. **Live command center** — agent chips pulse on staggered CSS `cell-pulse` (1.8s); spine agent grid cells pulse on the same animation with different stagger delays.
6. **Harness eval arc** — slow rotation (`eval-spin` 16s).
7. **Harness core** — gentle `core-pulse` (3.2s).
8. **Hover** — Aurora accent draws/grows on hover (primitive rows, use-case cards); transitions under 200ms.
9. **Mobile nav** — hamburger ↔ X toggle, dropdown slide/fade.

Avoid: parallax, motion outside this list, motion that isn't reduced-motion-gated, continuous animation outside the dark command stage (logo + arc + core + cell-pulse excepted), and anything cute, bouncy, or attention-grabbing.

## Copy Rules

Use prominently:

- "**AI-native operations infrastructure for iGaming**"
- "**AI deployment company for iGaming**"
- "**human-governed agentic operations**" / "human-governed oversight"
- "gaming operators" / "iGaming operators"
- "bounded agent deployment"
- "measurable operator impact" / "operating margin"
- "regulated operational environments"
- "operating functions: CRM, Support, Compliance, Fraud, Payments, Affiliates, BI, Trading"
- "above the model layer" (kept — secondary architectural framing)
- "application, orchestration, and harness layers"
- "reliable AI systems"
- "parallel agent swarms" / "persona-based agents"

Required statement (kept, reframed):

> DORA does not build foundation models, data infrastructure, compute platforms, casino operations, or generic AI infrastructure. We deploy the operational layer that runs AI-native gaming operations.

Avoid: "Enterprise AI" as the primary framing (vertical iGaming first), generic horizontal enterprise use cases as primary, chatbot, copilot for X, AI employee, automation agency, BPO, unlock, supercharge, revolutionize, magical, autonomous everything, future of, next-generation, transform your business overnight.

## Homepage Copy (Phase A)

### Hero

Headline: **AI-native operations infrastructure for iGaming.**

Subheadline: DORA deploys human-governed agentic systems across gaming operations — helping operators reduce manual workload, accelerate execution, and expand operating margins.

Hero eyebrow: DORA · AI DEPLOYMENT FOR iGAMING

Primary CTA: **Assess your operator AI deployment opportunity**

Secondary CTA: See how it works

### Problem

Headline: **Gaming operators are digitally native. Their operations are not.**

Copy: Most iGaming operators still depend on fragmented tools, outsourced services, manual workflows, and large operational teams across CRM, support, compliance, fraud, payments, affiliates, reporting, QA, and trading.

DORA rebuilds these workflows around AI-native operational systems that can carry context, coordinate tasks, interact with enterprise systems, and execute under human-governed oversight.

### Category (new)

Eyebrow: NOT A CHATBOT. NOT A BPO. NOT ANOTHER CASINO OPERATOR.

Headline: **An AI deployment company for iGaming.**

Copy: DORA is not a chatbot, BPO provider, casino operator, or generic automation agency. We deploy AI-native operational systems directly into gaming environments, starting with bounded workflows where ROI can be measured quickly and expanding as trust, accuracy, and operational value are proven.

### Stack (kept)

Headline: Built above the model layer.

Copy: DORA is model-agnostic. We do not compete at the foundation model, compute, infrastructure, or generic data layers. We build where AI becomes operational: the application, orchestration, and harness layers — deployed directly into gaming operations.

### Where DORA runs (new — Use Cases)

Eyebrow: OPERATING FUNCTIONS

Headline: **Where DORA runs inside gaming operators.**

(8 cards — see Use Case Cards above.)

### Measured outcomes (new)

Eyebrow: WHAT OPERATORS MEASURE

Headline: **Built for measurable operator impact.**

DORA deployments are designed to improve:

- operational cost structure
- support and CRM execution speed
- compliance review cadence
- fraud and risk triage
- payment operations
- affiliate reconciliation
- reporting frequency
- operational throughput
- margin expansion

### Final CTA (updated)

Headline: **Assess your operator AI deployment opportunity.**

Sub: Map a labor-heavy gaming operations workflow with DORA. We start with bounded deployments where impact can be measured in weeks.

Primary CTA: **Assess your operator AI deployment opportunity**

Secondary CTA: See where DORA runs

## Implementation Requirements

- Use the existing React 18 + TypeScript + Vite + Tailwind project. Build runs `tsc --noEmit && vite-react-ssg build` (prerendered static output in `dist/`).
- Load fonts: `Plus Jakarta Sans` (400-800), `Instrument Serif` (italic accent), `JetBrains Mono` (labels). Async-loaded via `preload` + `onload` swap with a `<noscript>` fallback.
- Preserve maintainability and component clarity. Ship the logo as a reusable `<Logo />` SVG component.
- Implement motion with CSS + minimal JS (custom hooks for IntersectionObserver / reduced motion). The command-center swarm is a `<canvas>` component. **All motion must be `prefers-reduced-motion`-gated** and continuous loops must pause when hidden/offscreen.
- Use semantic sections and accessible markup. Hamburger nav needs `aria-expanded`.
- Ensure responsive design (the command-center stage stacks to one column on mobile).
- Do not introduce unnecessary dependencies.
- Replace placeholder copy with final copy from this document.
- Make the homepage immediately communicate that DORA is **the AI deployment company for iGaming**, with measurable operator impact.

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-15 | Remodel homepage around above-the-model-layer positioning | DORA's clearest market distinction is not model capability or infrastructure — it is turning existing models into dependable, role-aware systems inside enterprise workflows. |
| 2026-05-15 | Shift visual direction from academic research page to enterprise AI systems company | Communicate application, orchestration, and harness layers quickly enough for enterprise buyers. |
| 2026-05-15 | Use light-first design instead of dark-first | More modern, enterprise-accessible, productized while still serious through sharp rectangles, restrained color, stack diagrams, and precise copy. |
| 2026-05-15 | Remove company-specific visual references | The site should not imitate another AI startup's brand or homepage structure. |
| 2026-05-15 | Add AI-native services section | DORA is not only a software surface. It combines research, system design, orchestration, harnesses, and deployment support. |
| 2026-05-21 | Replace fluid hero type with breakpoint-based type scale | Crisp + stable across viewport sizes. |
| 2026-05-21 | Adopt Antigravity-style launch layout with a digital bee swarm hero | User explicitly requested mirroring Antigravity's layout. |
| 2026-05-22 | Extend Antigravity rhythm with a dark DORA command-center artifact | Echo the cinematic product-stage rhythm with workflow / parallel-agent / harness-review surfaces. |
| 2026-05-23 | Move the whole site closer to antigravity.google (approved "greatest-hits" blend) | User asked to reimagine the site nearer the reference. |
| 2026-05-23 | Rounded surfaces + pill buttons (reverses sharp / `radius 0`) | Required to match the Antigravity direction. Stages 24-26px, cards 16-20px, buttons pill; stack-diagram layer rows stay sharp. |
| 2026-05-23 | Adopt the Aurora spectral gradient as the signature (reverses cool-blue-only / no-gradient rule) | Multi-hue, recolored to read as "modern AI / ML / agents," not pride rainbow. |
| 2026-05-23 | Replace the peak/lambda mark with an original swarm orbit-ring mark | The lambda was effectively Antigravity's logo; the swarm maps to parallel agent swarms. |
| 2026-05-23 | Switch primary font Instrument Sans → Plus Jakarta Sans | More geometric / Google-Sans-like, closer to Antigravity. |
| 2026-05-23 | Expand the motion suite | Continuous command-center canvas swarm (dark stage only), hero entrance, scroll-reveal fade-ups, rotating logo mark, eval-arc + core pulse. All `prefers-reduced-motion`-gated. |
| 2026-05-23 | Harness visual resolved: harness frame (orb retired) | A glowing orb symbolized energy, not a harness. |
| 2026-05-24 | **Vertical repositioning to iGaming AI deployment company (Phase A)** | Investor thesis is sharper than the current horizontal "enterprise AI" framing. DORA is *the AI deployment company for iGaming*, not a horizontal enterprise platform. Phase A ships: hero, problem, **Category section**, kept stack + spine, **8 iGaming use cases**, **Outcomes section**, new CTA. |
| 2026-05-24 | **Phase B shipped — Paradigm shift, Operating philosophy, Architecture rework, Deployment model, Trust layer** | Completes the vertical pivot. Added `ParadigmShift` (chats → acts contrast), `OperatingPhilosophy` (dark stage: agents handle / humans retain), reworked the primitive spine to **5 pillars** including the new **Persistent operational memory** row with a `MemoryLayers` dark-card visual, added `DeploymentModel` (5-phase numbered flow with Aurora signal line), and `TrustLayer` (bracketed harness-frame dark stage with 8 safeguards). Renamed nav `Primitives → Architecture` (section id `#primitives` → `#architecture`). All sections use the existing visual vocabulary (Aurora, dark rounded stages, pills, mono labels, motion suite) — no design language change. |
| 2026-05-24 | **Restore live cell-pulse animations** (CSS, not JS intervals) | The proto's chip/grid pulsing and header-logo spin were missing from the React port. Restored via a shared `cell-pulse` keyframe with staggered per-cell delays; reduced-motion-safe. |
