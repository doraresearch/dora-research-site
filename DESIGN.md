# Design System — DORA Research

Always read this file before making any visual or UI decision on this site. All font choices, colors, spacing, component behavior, and aesthetic direction are defined here. Do not deviate without explicit approval.

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

**Crisp systems architecture.**

Use a light-first visual system with a clean technical base, white architecture panels, sharp structural dividers, and a cool blue systems signal. The site should feel technical, precise, modern, and enterprise-grade. It must not feel beige, dusty, parchment-like, boutique, or editorial-first. The hero should feel like an enterprise architecture artifact, not a decorative product dashboard. The hero must show "above the model layer" through a bespoke stack + flow + harness diagram.

Borrow only general category principles: clear hero copy, simple navigation, large product/system visual, workflow-oriented sections, platform-layer framing, calm high-trust colors, and strong contrast between strategic explanation and technical diagramming. Do not reference or imitate any specific company brand.

Avoid overly rounded cards, animated blobs, fake dashboards, generic chat bubbles, purple-blue AI gradients, glowing nodes, robot or brain imagery, hype metrics, and self-serve SaaS language that makes DORA feel generic.

## Brand Personality

DORA should sound and look precise, serious, calm, technical but understandable, high-agency, operational, enterprise-ready, systems-oriented, confident without hype, and research-backed but deployment-focused.

DORA should not sound promotional, buzzword-heavy, academic for its own sake, like a chatbot wrapper, or like a generic AI automation agency.

## Typography

- **Body + UI:** `Instrument Sans`, weights 400, 500, 600. Use for almost all headings, body, navigation, cards, tables, buttons, and diagrams.
- **Research accent:** `Instrument Serif`, sparingly for one editorial pull quote, research statement, or section accent. Do not use for the main product headline.
- **Labels / diagrams / captions:** `JetBrains Mono`, 10-12px, uppercase, wide tracking.

| Role | Size | Line height | Family |
|---|---:|---:|---|
| Hero display | `48px / 60px / 72px / 88px` by breakpoint | 0.96 | Instrument Sans 600 |
| H2 | `36px / 48px / 60px` by breakpoint | 1.02 | Instrument Sans 600 |
| H3 | 22-28px | 1.08-1.2 | Instrument Sans 600 |
| Lede | 22-24px | 1.45 | Instrument Sans 500 |
| Body | 16-18px | 1.6-1.7 | Instrument Sans 400 |
| Small | 14-15px | 1.5-1.6 | Instrument Sans 400 |
| Diagram label | 10-12px | 1.2 | JetBrains Mono 500 |

Use direct, plainspoken headlines. Avoid decorative headline treatments and excessive tracking on large text.

## Color System

The DORA site uses a crisp architecture palette with a deliberately cool systems signal. It should feel light, technical, and enterprise-grade, not beige, dusty, parchment-like, boutique, or editorial-first. Use the exact signal colors below rather than default Tailwind blue.

| Token | Hex | Usage |
|---|---|---|
| `base` | `#F7F8FA` | Main page background |
| `surface` | `#FFFFFF` | Cards, tables, diagrams, panels |
| `surface-alt` | `#EEF1F4` | Neutral hover states and subtle alternate fields |
| `ink` | `#050608` | Primary text, headlines, nav |
| `graphite` | `#111418` | Dark research/deployment band, footer, dark buttons |
| `body` | `#3B4148` | Paragraph text |
| `muted` | `#6F7782` | Labels, metadata, secondary text |
| `line` | `#DCE1E6` | Standard hairline borders |
| `line-strong` | `#AEB7C2` | Stronger dividers, tables, architecture lines |
| `signal` | `#7DD3FC` | DORA focus rails, route indicators, selected system states |
| `signal-soft` | `#E0F7FF` | Subtle DORA layer backgrounds in diagrams only |
| `deep-signal` | `#0284C7` | Link hovers, small active annotations, dark-section route endings |
| `dark-text` | `#F8FAFC` | Text on graphite background |
| `dark-muted` | `#CBD5E1` | Secondary text on graphite background |

Use `base` as the main background, `surface` for diagrams and panels, `signal-soft` only for DORA layer backgrounds in diagrams or selected states, `signal` only for focus rails, route indicators, and selected states, and `graphite` for the dark research/deployment band, footer, and primary dark buttons.

Do not use warm paper, beige, parchment, sage green, pale green section backgrounds throughout the page, purple AI gradients, neon glows, glassmorphism, or decorative blobs.

## Layout

- **Max content width:** `max-w-[1440px]` on the homepage when the layout needs a more expansive enterprise architecture canvas.
- **Gutters:** `px-6` mobile, `px-10` desktop.
- **Section padding:** `py-20 md:py-28`.
- **Hero minimum height:** `min-h-[88vh]` on desktop, content-driven height on mobile.
- **Grid style:** Bordered grids, structured rows, stack diagrams, and workflow tables.
- **Card style:** Sharp rectangles with subtle borders. Prefer `rounded-none`.
- **Whitespace:** Generous, calm, premium.
- **Rhythm:** crisp light hero with digital bee swarm -> dark command-center artifact -> sparse problem -> iconic stack table -> primitive system cards -> workflow trace -> proof artifact -> reliability framework -> dark services/research band -> use-case table -> research agenda -> graphite CTA -> dark footer.

## Header

Fixed at top with light `base` background, hairline bottom border, compact height, simple navigation, and one CTA.

Navigation:

- How it works
- Primitives
- Use cases
- Research
- Contact

CTA: Talk to DORA. Use a sharp rectangle with `graphite` background, `dark-text` text, and `ink` on hover.

## Buttons

Primary buttons use `graphite`, `dark-text`, `ink` on hover, a hairline border, and sharp rectangles. Signal buttons are allowed only on graphite CTA sections. Secondary buttons are transparent or `surface` with `ink` text, hairline border, and a subtle `surface` hover state.

Preferred CTAs: Talk to DORA, See how it works, Explore the primitives, Build with DORA.

Avoid: Get started free, Start for free, Unlock AI, Supercharge your team.

## Homepage Structure

1. Light Antigravity-style launch hero with restrained digital bee swarm.
2. Dark command-center artifact showing workflow, parallel agents, and harness review.
3. Problem section.
4. Above-the-model-layer stack section.
5. Core primitives.
6. From prompts to systems.
7. Example system / proof artifact.
8. Reliability framework.
9. Research / architecture / deployment pipeline.
10. Use cases.
11. Research agenda.
12. Final CTA.
13. Footer.

## Required Components

### Stack Diagram

Show where DORA sits in the AI stack:

1. Enterprise Workflows
2. DORA Application Layer
3. DORA Orchestration Layer
4. DORA Harness Layer
5. Existing Model Layer
6. Data / Infrastructure / Compute

DORA layers must be grouped and visually emphasized with `signal-soft` and a `signal` rail or marker. Model, data, infrastructure, and compute must be visible but de-emphasized. Use mono labels, hairline borders, route lines, brackets, and keep it readable on mobile.

### Primitive Cards

Three sharp rectangular cards:

1. Coordinated enterprise workflows
2. Parallel agent swarms
3. Persona-based agents

Each card needs direct copy and a restrained diagram cue.

### Workflow Flow

Use structured rows with mono labels:

1. `01 / WORKFLOW` Start with the enterprise workflow
2. `02 / ROLES` Define agent roles and responsibilities
3. `03 / PERSONAS` Assign personas and operating constraints
4. `04 / ORCHESTRATION` Run agents in parallel through orchestration
5. `05 / HARNESS` Evaluate, refine, and deploy

### Command Center Artifact

The dark post-hero section should mirror the cinematic product-stage rhythm of Antigravity while staying DORA-specific. It must show real system surfaces, not a fake dashboard: workflow brief, role-specific agents, conflict routing, and harness review.

Rules:

- Use a graphite/ink stage with white system surfaces.
- Keep panels sharp, bordered, and product-like.
- Show workflow, parallel agents, and harness controls together.
- Avoid generic metrics, fake analytics charts, chat bubbles, glowing nodes, or decorative UI filler.
- Keep the artifact static; the hero swarm is the only approved continuous ambient motion.

### Use Case Cards

Cards must be concise, serious, and avoid full-automation promises.

## Motion

Minimal, functional, and purposeful only.

- Hero entrance only.
- Optional subtle diagram entrance in hero.
- One premium route-line draw or hover-highlight interaction is allowed.
- Exception approved on 2026-05-21: the homepage hero may use a restrained digital bee swarm as the ambient field when mirroring the Antigravity-style launch layout. The swarm must feel geometric, systems-oriented, and precise rather than cute, cartoonish, or decorative filler.
- Hero entrance duration: 750ms.
- Hover transitions under 200ms.

Avoid per-section scroll animations, parallax, decorative motion, animated AI gimmicks, floating particles, glowing orbs, and continuous background animation.

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
- Preserve maintainability and component clarity.
- Use semantic sections and accessible markup.
- Ensure responsive design.
- Do not introduce unnecessary dependencies.
- Use Framer Motion only if already installed, and only for the hero entrance.
- Replace placeholder copy with final copy from this document.
- Use actual layout and diagrams, not generic placeholders.
- Make the homepage immediately communicate that DORA turns existing models into reliable enterprise AI systems through workflow coordination, parallel agent swarms, personas, orchestration, and harnesses.

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-15 | Remodel homepage around above-the-model-layer positioning | DORA's clearest market distinction is not model capability or infrastructure. It is turning existing models into dependable, role-aware systems inside enterprise workflows. |
| 2026-05-15 | Shift visual direction from academic research page to enterprise AI systems company | The previous research-lab editorial style preserved seriousness but did not communicate application, orchestration, and harness layers quickly enough for enterprise buyers. |
| 2026-05-15 | Use light-first design instead of dark-first design | A lighter system can feel more modern, enterprise-accessible, and productized while still preserving seriousness through sharp rectangles, restrained color, stack diagrams, and precise copy. |
| 2026-05-15 | Remove company-specific visual references | The site should not imitate another AI startup's brand or homepage structure. DORA needs its own systems-layer identity. |
| 2026-05-15 | Add AI-native services section | DORA is not only a software surface. It combines research, system design, orchestration, harnesses, and deployment support for enterprise AI systems. |
| 2026-05-21 | Replace fluid hero type with breakpoint-based type scale | Keeps the site crisp and stable across viewport sizes while preserving the intended 88px desktop hero cap. |
| 2026-05-21 | Adopt Antigravity-style launch layout with a digital bee swarm hero | User explicitly requested mirroring Antigravity's layout while replacing the star field with a swarm of digital bees. This is an intentional exception to the normal light architecture hero rules. |
| 2026-05-22 | Extend Antigravity rhythm with a dark DORA command-center artifact | The reference site moves from launch hero into a cinematic product-stage section. DORA should echo that rhythm with workflow, parallel-agent, and harness-review surfaces rather than screenshots of an IDE. |
