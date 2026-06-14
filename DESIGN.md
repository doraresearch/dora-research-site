# Design System — DORA Research

Always read this file before making any visual or UI decision on this site. All font choices, colors, spacing, component behavior, and aesthetic direction are defined here. Do not deviate without explicit approval.

> **2026-06-11 (later) commercial-grade pass:** same strategy, tighter hierarchy. Hero headline is now **"The AI operations team for iGaming."** (buyer-readable); "the agent-native operations layer for iGaming" demoted to a mono **category support line** under the hero sub. New **commercial strip** under the hero (Deploy agents across · Start with · Measure · Control). The **withdrawal-review example moved up** (after functions) and compressed to copy + five target-metric cards. Functions section renamed **"What your AI operations team handles."** (8 cards incl. Compliance, absorbing the agent-modules copy; AgentModules + CorePromise + IconStrip sections removed). Deployment section is now a **services engagement**: "How we deploy inside your operation." — 7 numbered steps + a "What you get" deliverables card. ~30% copy cut; avoid "agentic systems", "governed pattern", "bounded by construction", "durable operating infrastructure", and overusing "operating model". Nav: How it works · Functions · Example · Deployment · Contact (desktop nav ≥lg).
>
> **2026-06-11 outcome-led repositioning:** DORA is **the agent-native operations layer for iGaming** — operators get **operational agents** (not generic "AI agents") for core functions (support · KYC · payments · risk · VIP · compliance · reporting) to **launch lean, operate safely, and scale without a traditional operations org**. Recurring trust theme: *Autonomous where safe. Human-controlled where it matters.* DORA is **not the gaming platform** — it runs the business around it. "Gather. Reason. Act. Escalate. Learn." is the five-step product model (how-it-works), not the value proposition. Primary CTA everywhere: **Map your AI operations team**. See the Homepage Structure list below for the current flow.
>
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
| `deep-signal` | `#0369A1` | Link hovers, small active annotations, mono index labels |
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

Navigation (2026-06-11): How it works · Agents · Where it runs · Deployment · Contact.

CTA: **Map your AI operations team**. On ≤860px the links collapse to a hamburger that toggles a dropdown menu (links + CTA).

## Buttons

All buttons are **pills** (`999px`).

- **Primary:** `ink` background, white text. Hover → slightly lighter ink.
- **Secondary:** `soft` background, `ink` text, hairline `line` border. Hover → subtle darken.
- **Ghost:** transparent, `ink` text, `line-strong` border.
- **Signal pill:** `signal` background, dark text — allowed only on the dark/graphite CTA band.

Preferred CTAs (2026-06-11): **Map your AI operations team** (the primary, used in header, hero, problem stage, and final CTA), *See example deployment*, *See agent modules*, *See where DORA runs*. Avoid generic CTAs: Learn more, Get started, Talk to AI, Unlock AI, Supercharge your team.

## Homepage Structure (2026-06-11 — commercial-grade flow)

1. **Header** — sticky, swarm mark + nav (How it works · Functions · Example · Deployment · Contact) + pill CTA *Map your AI operations team*. Desktop nav at `lg+`; hamburger below.
2. **Hero** — *The AI operations team for iGaming.* Subhead: "DORA gives operators operational agents for core functions, helping them launch lean, operate safely, and scale without a traditional operations org." Mono category line beneath: *the agent-native operations layer for iGaming*. CTAs: *Map your AI operations team* · *See a workflow example* (`#deployment-pattern`).
3. **Commercial strip** — 4-cell hairline card row directly under the hero: **Deploy agents across** (Support · KYC · Payments · Risk · VIP · Compliance · Reporting) · **Start with** (one workflow) · **Measure** (review time · throughput · escalation quality · cost-to-serve) · **Control** (approvals · permissions · audit logs · playbooks).
4. **Problem** — dark numbered stage: *Operators build ops teams too early.* Lede: "Operators are expected to build support, KYC, payments, risk, VIP, compliance, and reporting capacity before they have the scale to justify a full operations org. DORA changes that model." + signal CTA.
5. **What DORA replaces** (`#why-now`) — commercial-hook lede + two contrast panels; old-way cards are buyer pains: *Slack & ticket handoffs · Fragmented tools · Inconsistent escalation · Repetitive reviews*. (Memory pill removed.)
6. **Platform line** — *DORA is not your gaming platform…* separator band.
7. **Core functions** (`#use-cases`) — *What your AI operations team handles.* One-line lede; hub grid of 8 verb-led function cards (**Support · KYC · Payments · Risk & fraud · VIP & CRM · Compliance · BI & reporting · Trading & sportsbook**) around the graphite DORA hub (pill → *See a workflow example*). Absorbs the former agent-modules copy.
8. **Example deployment** (`#deployment-pattern`) — *High-value withdrawal review.* Compressed: one connective paragraph ("DORA connects payments, KYC, AML, gameplay, device, bonus, support, and prior-case signals…") + **five graphite target-metric cards** (Faster review cycles 24–72 hrs→2–12 hrs · Higher reviewer throughput 25–35→90–120 · Fewer unnecessary holds 8–12%→3–5% · Better escalation quality · Complete audit trail) + pilot-variance footnote + link to `/example/withdrawal-review`.
9. **How it works** (`#how-it-works`, 2026-06-12 — interactive) — *How DORA works.* (eyebrow *Operating model*). Two-column interactive explainer (reference: withpanacea.com "How Panacea supports you"): **left 45% = five accordion items** (01 Gather · 02 Reason · 03 Act · 04 Escalate · 05 Learn — Gather expanded on load; one open at a time; hover/click/focus all set the active item; real `<button>` triggers with `aria-expanded`/`aria-controls`; smooth `grid-rows` height transition, reduced-motion-gated; active item = `bg-soft` + vertical Aurora accent bar + deep-signal number). **Right 55% = dark rounded visual panel** (graphite stage, corner brackets, `AuroraRibbons` at 35% opacity + vignette) with **five crossfading operational vignettes** built from in-stage UI-card idioms: Gather = source chips → flow lines → "context assembled" core; Reason = case-evaluation checklist + confidence bar + Proceed/Hold/Escalate path chips; Act = executing core → six action rows with checks; Escalate = exception card → dashed context line → human-review card (Evidence/Rationale/Audit-trail tags, Approve/Override pills); Learn = operational-memory panel + outcomes-feed-playbooks loop + ascending bars. Bottom chrome: mono `0X · STEP` + *operating loop*. Mobile: accordion stacks above the visual; tap drives state.
10. **How we deploy** (`#deployment`) — *How we deploy inside your operation.* Services engagement: 7 numbered steps (map workflow → permissions → systems → approval rules → controlled deploy → measure → expand) + **"What you get"** card (workflow map · agent playbook · integration plan · human approval rules · pilot dashboard · expansion roadmap).
11. **Trust layer** — *Autonomous where safe. Human-controlled where it matters.* Eyebrow *built for operators, not demos*; 8 safeguards (incl. operator-configured playbooks, existing-stack integration, monitoring & review).
12. **Final CTA** (`#contact`) — *Map your first operational agent.* "Start with one workflow. Define the rules, controls, systems, and success metrics. Expand once the operating model is proven." Buttons: *Map your AI operations team* · *See a workflow example*.
13. **Footer** — giant Aurora wordmark + columns + meta (*Operational agents · iGaming*).

Removed in the commercial pass: **Core promise** section, **Agent modules** section (copy merged into Core functions), **Icon strip**.

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

### Architecture Spine — REMOVED 2026-06-11

The 5-pillar editorial spine (later simplified into an "operating model" strip of Gather→Learn cards) was removed from the homepage: it duplicated the How-DORA-Works stage's five-step model. `PrimitiveSpine.tsx` is deleted. The pillar visuals (WorkflowRail · PersonaCards · AgentGrid · MemoryLayers · HarnessFrame) are retired with it; the harness-frame aesthetic lives on in the trust layer and proof module.

### Operations Stage → How-DORA-works visual panel (2026-06-12)

The full-width Aurora-ribbon statement stage was replaced by the interactive How-DORA-works section (see Homepage Structure item 9). `AuroraRibbons` now renders inside that section's right-hand visual panel at reduced opacity (~35%) behind the per-step vignettes — same canvas, same reduced-motion/visibility behavior. Original stage spec (kept for reference):

#### Original spec (2026-06-10, retired)

A cinematic dark rounded graphite stage in the Turing-hero treatment, recolored to the Aurora signature:

- **`AuroraRibbons` canvas** — two to three flowing ribbon bundles (silky filament lines + soft glow strokes, additive `lighter` compositing) sweeping diagonally across the stage, drawn with Aurora-stop linear gradients that fade at both edges (mint→cyan→sky and blue→sky→teal — cool only, never Turing's warm gold), plus sparse twinkling star specks. SSR-safe; reduced-motion → one static frame; pauses when the tab is hidden; DPR capped at 2.
- **Content** — one centered statement only: mono eyebrow (*HOW DORA WORKS*), H2 *"Gather. Reason. Act. Escalate. Learn."* with the serif italic accent on *Learn*, one dark-muted sub-line about the human-governed loop. No buttons (hero CTAs sit directly above), no console chrome, no fake panels.
- **Frame** — corner containment brackets (harness vocabulary), radial-tinted graphite background, soft under-stage shadow, and a subtle center vignette overlay between canvas and text for legibility.

### Harness Visual — the harness frame

Row 4's visual is a dark stage card showing the agent core wrapped in an instrument rig: corner **containment brackets**, a dashed **measurement ring** with an Aurora **eval arc** (~75%), N/E/S/W tick marks, the labels **CONTEXT · EVAL · CONSTRAINTS**, and a **"REVIEW ✓ → DEPLOY"** readout. Built as an inline SVG ring with a `userSpaceOnUse` Aurora gradient.

In motion contexts the eval arc rotates slowly (~16s) and the core gently pulses; reduced-motion → static.

### Giant Wordmark Footer

A huge "DORA" set in Plus Jakarta Sans 800 with the Aurora gradient via `background-clip:text` — the Antigravity-style brand close.

### Use Case Cards (2026-06-10 — hub grid)

A centered **hub grid**: the 8 operating functions arranged around a central DORA hub cell (layout reference: Frontdesk's "all your customer communications, one agentic platform" section, translated into the DORA system).

- **Desktop (lg):** 3×3 grid — 4 function cards, the DORA hub in the center cell, 4 function cards.
- **Tablet (sm):** 2 columns; the hub spans the full row (`col-span-2`) mid-grid.
- **Mobile:** single column; the hub stacks mid-list.
- **Section header is centered** (chip eyebrow · H2 with serif accent · Aurora underline `mx-auto` · short lede) — an intentional exception to the default left-aligned section headers.
- **Function cards:** white, hairline `line` border, `rounded-card`, centered content — icon chip → bold title → small body description. Aurora top-border accent on hover (kept).
- **Icon chips:** 40px rounded-[12px] squares whose hues sweep the Aurora stops across the grid (cool only, no purple/warm): background = an Aurora stop at 13-18% alpha; icon stroke = a deepened same-hue tone for contrast — mint→`#059669`, teal→`#0D9488`, cyan→`#0891B2`, sky→`#0369A1` (= deep-signal), blue→`#2563EB`. Icons are 1.6-stroke line glyphs in the IconStrip style.
- **Hub cell:** graphite, `rounded-card`, static 2px Aurora topline, white swarm mark + "DORA" wordmark, mono label "ONE AGENTIC OPERATIONS LAYER", small `white/[0.06]` bordered pill linking to `#deployment-pattern`. (Frontdesk's violet-gradient hub is banned here — the graphite stage cell + Aurora hairline is the DORA translation.)

Current card copy lives in `src/components/home/UseCases.tsx` (titles: Payments & withdrawals · KYC & compliance · Fraud & risk · Support · CRM & VIP · Affiliates · BI & reporting · Trading; descriptions are "Agents …" action sentences). Concise, serious, regulated-tone — no full-automation promises.

## Motion

Motion is functional and restrained but uses a defined signature set. **Every motion is mandatorily `prefers-reduced-motion`-gated**. Continuous loops pause when the tab is hidden.

Approved motion:

1. **Hero entrance** — sequential fade-up of eyebrow → headline → lede → CTAs → stage (~750ms total).
2. **Aurora ribbon flow** — continuous `<canvas>` flowing light-ribbon animation (plus twinkling specks), confined to the dark visual panel of the How-DORA-works section at ~35% opacity (2026-06-12; previously the full-width operations stage). The swarm survives as the brand mark.
10. **How-DORA-works accordion** — hover/click-driven expand-collapse (`grid-template-rows` transition, ~500ms ease-out) and visual-panel crossfade (~500ms opacity/translate); both `motion-reduce:transition-none`-gated.
3. **Swarm logo mark** — slow rotation (~22s linear) in header + footer; static elsewhere.
4. **Scroll reveals** — subtle fade-up + ~20px translate as major sections enter the viewport (IntersectionObserver, once each, ~600ms).
5. **Live command center** — agent chips pulse on staggered CSS `cell-pulse` (1.8s); spine agent grid cells pulse on the same animation with different stagger delays.
6. **Harness eval arc** — slow rotation (`eval-spin` 16s).
7. **Harness core** — gentle `core-pulse` (3.2s).
8. **Hover** — Aurora accent draws/grows on hover (primitive rows, use-case cards); transitions under 200ms.
9. **Mobile nav** — hamburger ↔ X toggle, dropdown slide/fade.

Avoid: parallax, motion outside this list, motion that isn't reduced-motion-gated, continuous animation outside the dark command stage (logo + arc + core + cell-pulse excepted), and anything cute, bouncy, or attention-grabbing.

## Copy Rules

Use prominently (2026-06-11):

- "**the agent-native operations layer for iGaming**" (the category line)
- "**operational agents**" — NOT generic "AI agents"
- "**launch lean**" / "from day one" / "scale without a traditional operations org" / "scale without adding headcount linearly"
- "**Autonomous where safe. Human-controlled where it matters.**" (recurring trust theme)
- "human escalation" / "human approval paths" / "operator controls" / "audit-ready workflows" / "operator-configured playbooks"
- core functions: "**support, KYC, payments, risk, VIP, compliance, reporting**" (must appear immediately below the hero)
- "DORA is not your gaming platform — it runs the business around it" (platform separator)
- "Gather. Reason. Act. Escalate. Learn." (the five-step product model — how it works, not the tagline)
- "gaming operators" / "iGaming operators" · "regulated operational environments"
- "above the model layer" (kept — secondary architectural framing)

Required statement (kept, reframed):

> DORA does not build foundation models, data infrastructure, compute platforms, casino operations, or generic AI infrastructure. We deploy the operational layer that runs AI-native gaming operations.

Avoid: "Enterprise AI" as the primary framing (vertical iGaming first), generic horizontal enterprise use cases as primary, chatbot, copilot for X, AI employee, automation agency, BPO, unlock, supercharge, revolutionize, magical, autonomous everything, future of, next-generation, transform your business overnight. Also avoid (2026-06-11, compensating for the "Research" name): "researching the future of operations", "agentic intelligence", "AI transformation", "unlocking operational potential", and "AI agents" as the primary product term — the site must read as operational infrastructure, not a lab or consultancy. Also avoid (2026-06-11 commercial pass): "agentic systems", "durable operating infrastructure", "governed pattern", "bounded by construction", and overusing "operating model". Prefer buyer-facing phrasing: "what we deploy", "what your team gets", "what gets measured", "where humans approve", "audit-ready workflows", "launch lean".

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
| 2026-05-24 | **Deployment-pattern proof module** — high-value withdrawal risk review | Added a flagship proof section (`WithdrawalReview` → `#deployment-pattern`) between the Architecture spine and Use Cases. Single concrete deployment example that makes the 5-pillar framework feel real: intro + trust callout + agentic-vs-rules explainer + Before/With/Result cards + 5-stage flow + six-agent panel (Payment Fraud · AML · Account Behavior · Identity · Account Linking → Case Synthesis Orchestrator) + mock decision panel (composite risk score 72/100 with Aurora bar, recommended path, drivers, escalation reason, analyst options, audit trail) + 7-row ROI table (90-day pilot targets). Uses the existing harness-frame brackets aesthetic on the mock panel. |
| 2026-05-24 | **Restore live cell-pulse animations** (CSS, not JS intervals) | The proto's chip/grid pulsing and header-logo spin were missing from the React port. Restored via a shared `cell-pulse` keyframe with staggered per-cell delays; reduced-motion-safe. |
| 2026-06-10 | **Use-cases section → hub grid** (user-requested match to Frontdesk's "one agentic platform" section) | The 8 function cards now orbit a central graphite DORA hub cell (3×3 desktop, hub spans the row on tablet); section header centered; cards gain Aurora-hue icon chips (deepened same-hue strokes on light tints). Frontdesk's violet gradient hub translated to a graphite stage cell with an Aurora topline per the no-purple rule. Mono per-card index labels retired in favor of icon chips. |
| 2026-06-10 | **Why-now section → journey stage panels** (user-requested match to Frontdesk's "every stage of the customer journey" section) | Replaced the old-way/new-way contrast table with three soft rounded stage panels — 01 Gather · 02 Reason · 03 Act & learn — mapping the verbs already in the lede. Each panel: Aurora-clipped giant number (wordmark treatment), mono deep-signal tagline, description carrying the old/new contrast, 2×2 mini-card grid of abstract monochrome glyphs. Dashed mono connectors narrate the handoff between stages; closing "Outcomes feed operational memory" pill ties back to the memory pillar. Header centered like the use-cases hub grid. |
| 2026-06-10 | **Why-iGaming section → dark numbered-columns stage** (user-requested match to Frontdesk's "from zero to fully operational in minutes" band) | The soft section + 3 white trait cards became a dark rounded graphite stage: Aurora topline, centered white header + lede, three columns with giant Instrument Serif italic numerals (their `font-light italic` slate numerals → our serif accent), white titles, dark-muted one-liners, and a centered signal-pill CTA. Trait copy lightly expanded to fill the reference's description weight. Adds a mid-page conversion point. |
| 2026-06-10 | **Why-now corrected to two contrast panels + commercial-grade mini-illustrations** (user feedback) | The 3-stage journey version (Gather/Reason/Act) had changed the section's meaning. Rebuilt as two panels in the same anatomy: 01 Human-heavy operations (old way, fully muted) → dashed "operating shift" connector → 02 Agentic-native operations (new way, Aurora number + spectral topline + deep-signal accents). The lone-icon glyphs (called out as weak) were replaced with composed multi-element UI vignettes (overlapping windows, disconnected vs linked nodes, misaligned vs aligned checks, person↔docs loop, escalation-to-human) — color appears only on the new-way panel, so the old/new contrast is carried by the artwork too. |
| 2026-06-10 | **Command-center console → Aurora-ribbon operations stage** (user feedback: console section "doesn't make sense"; requested turing.com hero treatment) | The fake-console surfaces (workflow brief rails, agent chips, harness checklist, session chrome) were replaced with a cinematic minimal stage: new `AuroraRibbons` canvas — flowing gradient light streams in Aurora hues (Turing's warm gold ribbons recolored cool per the palette rule) + star specks — behind a single centered statement ("Gather. Reason. Act. Escalate. Learn."). Corner brackets kept. `SwarmCanvas` deleted; the swarm lives on as the brand mark. Motion suite item 2 updated accordingly. |
| 2026-06-11 | **Outcome-led repositioning: agent-native operations layer + operational agents** (10-point user direction) | Hero now leads with outcome (launch lean · operate safely · scale without a traditional ops org) + functions strip; "Gather. Reason. Act. Escalate. Learn." moved into the how-it-works stage as the five-step product model (definitions verbatim; Learn restored same day per user); new sections: **Core promise**, **What DORA replaces** (retitled contrast panels with the commercial-hook lede), **Platform line** (not your gaming platform), **Agent modules** (5 example modules: Support · KYC · Payments · Risk · Reporting); trust layer reframed *Built for operators, not demos* with the recurring line *Autonomous where safe. Human-controlled where it matters.* + playbooks/integration safeguards; deployment model retitled as the expansion story; every CTA → **Map your AI operations team**; terminology standardized ("agentic"→"agent-native" layer, "AI agents"→"operational agents"); page reflowed hero → promise → problem → replaces → platform line → solution → how-it-works → modules → proof → architecture → expansion → trust → CTA; nav gains **Agents** (`#agent-modules`). |
| 2026-06-11 | **Operating-model section removed** (user: redundant) | The `#operating-model` strip ("DORA deploys agents that operate inside the business" + five Gather→Learn cards, the descendant of the 5-pillar architecture spine) duplicated the How-DORA-Works stage's five-step columns. `PrimitiveSpine.tsx` deleted; page now flows proof → expansion story. |
| 2026-06-11 | **Commercial-grade pass** (user direction: less whitepaper, more AI-services firm; same strategy) | Hero → "The AI operations team for iGaming." with the agent-native layer line demoted to category support; new 4-cell commercial strip under the hero; problem lede → "…before they have the scale to justify a full operations org. DORA changes that model."; replaces-panel cards reframed as buyer pains (Slack/ticket handoffs, fragmented tools, inconsistent escalation, repetitive reviews); functions renamed "What your AI operations team handles." and absorbed the agent-modules copy (incl. Compliance card, Affiliates dropped); withdrawal example compressed to copy + five metric cards and moved above how-it-works; how-it-works definitions cut to one line each; deployment reworked as a 7-step services engagement with a "What you get" deliverables card; trust lede de-jargoned; final CTA → "Map your first operational agent."; CorePromise, AgentModules, and IconStrip removed (~30% copy cut); nav → Functions/Example, desktop nav breakpoint md→lg. |
| 2026-06-12 | **How-it-works → interactive two-column accordion** (user direction; reference: withpanacea.com) | The static verb-headline stage became a product-explainer: left accordion (5 steps, Gather open by default, hover/click/focus set active, accessible buttons with aria-expanded, smooth grid-rows height transition) + right dark visual panel with five crossfading operational vignettes (sources→core, case evaluation, action routing, human escalation, operational memory) over `AuroraRibbons` at 35% opacity. `CommandStage.tsx` deleted; section heading now "How DORA works." with eyebrow "Operating model". Checked the duplicate-CTA/footer report: production renders exactly one FinalCTA and one footer — no duplication existed. |
