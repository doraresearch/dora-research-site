# Design System — DORA Research / Zora

Always read this file before making visual or UI decisions on this site. It is the source of truth for the live Zora homepage.

> **2026-08-12 repositioning:** DORA Research is the company behind **Zora**, a second brain for work. The broader category is organizational memory; product and technology teams are the first concrete use case. The previous consumer-memory and infrastructure-operations directions are superseded.

## Product Context

- **What this is:** A static, single-page product site for Zora by DORA Research, built with React 18, TypeScript, Vite, Tailwind, and `vite-react-ssg`.
- **Audience:** Teams whose context is fragmented across meetings, conversations, documents, tickets, roadmaps, code, and system signals. Product and technology are the initial wedge.
- **Promise:** Zora continuously connects what a team sees, says, decides, and ships, then surfaces context, risks, evidence, and what needs attention next.
- **Core product model:** **Remember → Connect → Anticipate → Prove**.
- **Trust model:** Every conclusion can show its original source, timestamp, owner, and decision trail.
- **Primary CTA:** `Request private beta`.
- **Current beta wording:** `Starting with product + technology`.

## Brand Personality

Zora should feel calm, precise, credible, and quietly proactive: enterprise-ready without becoming generic SaaS, technical without becoming a project-management dashboard, and intelligent without presenting as a chatbot.

Avoid consumer-life organization, fake metrics, generic SaaS dashboards, chatbot/copilot framing, document-repository metaphors, robotic imagery, decorative AI gradients, and hype.

## Visual Direction

The visual language is **Porcelain Intelligence**: cinematic workplace media, editorial pacing, cool porcelain surfaces, restrained signal color, and believable product software built around time, causality, evidence, and attention.

- Use open layouts and generous whitespace rather than bento grids or nested cards.
- Keep real interface labels and controls code-native.
- The hero uses a documentary workplace loop with a dedicated mobile crop, matching poster fallback, and a restrained copy scrim; product proof remains code-native below it.
- Only clean, licensed media masters may ship. Watermarked or artifact-processed clips are temporary composition previews and must remain independently swappable.
- Use media scrims only where necessary for legibility. Product frames stay flat and ruled rather than glowing or glassy.
- Use simple thin-stroke SVG icons. Never use emoji.
- Interactions should reveal causality and evidence: workspace tabs, selectable records, active relationship paths, contextual inspectors, grounded follow-up questions, video pause controls, and the restrained logo spin. Every animation must respect `prefers-reduced-motion`; looping media pauses offscreen and when the tab is hidden.

## Color System

| Token | Value | Use |
| --- | --- | --- |
| `base` | `#F4F6F8` | Cool-grey primary canvas |
| `section-band` | `#E2E8EE` | Darker cool-grey Atlas narrative band |
| `surface` | `#FFFEFB` | Raised product and control surfaces |
| `subtle` | `#F0EFE9` | Quiet neutral controls and nested surfaces |
| `ink` | `#111814` | Primary text and footer ink |
| `secondary` | `#48564F` | Secondary copy and operational metadata |
| `action` | `#145C43` | Primary actions, active records, and trace links |
| `action-hover` | `#0C4935` | Primary hover state |
| `signal-cyan` | `#03F5F2` | DORA mark endpoint and live intelligence indicator only |
| `risk` | `#A73745` | Delivery risk and blocking state |
| `line` | `#DCE1DC` | Primary hairlines and borders |
| `line-strong` | `#838F89` | Structural controls and high-emphasis boundaries |
| `focus` | `#1D63D8` | Keyboard focus ring |

### Accent discipline

Action Green is the only interaction color. Signal Cyan is reserved for the original DORA mark and small live-status cues. Cobalt appears only as the accessible focus ring and the restricted green-to-cobalt signal rule. Risk red always carries operational meaning. Do not introduce purple, broad surface gradients, or decorative color families.

## Typography

- **Display, body, and UI:** `Geist`, 400–700.
- **Labels:** `IBM Plex Mono`, 400–500, uppercase with generous tracking.

| Role | Size / treatment |
| --- | --- |
| Hero H1 | `44/46px` mobile → `72/72px` desktop, `-0.035em` → `-0.045em` tracking |
| H2 | `38/42px` mobile → `52/56px` desktop |
| H3 | `32/38px` |
| Lede | `16/26px` mobile → `20/30px` desktop |
| Body | `16px` |
| Product UI | `11–14px`; never miniaturize functional software below a legible operational scale |
| Mono labels | `9–11px`, uppercase, `.04–.08em` tracking |

## Layout and Components

- **Page rail:** `1344px` maximum including `24px` mobile / `32px` compact desktop gutters, resolving to a `1280px` content rail at 1440.
- **Header:** 64px mobile / 72px desktop. The masthead names DORA Research; the product identity appears in the hero. Desktop nav: `Product`, `How it works`, `Traceability`.
- **Header CTA:** a 40px action-green, 6px-radius button linking to `#waitlist`.
- **Controls:** 40–48px high with 6–10px radii and visible focus states. Never allow a CTA label to wrap.
- **Radii:** media `14px` mobile / `20px` desktop; product shell `18px`; nested panels `8–12px`; only icon controls are fully round.
- **Hairlines:** use semantic subtle or strong borders. The enterprise workspace has one restrained outer elevation; nested product surfaces are flat.
- **Anchors:** `#zora`, `#workday`, `#how-it-works`, `#traceability`, and `#waitlist` use an 84px scroll margin.

## Homepage Structure

The page order is fixed:

1. **Header** — original swarm mark, DORA Research company masthead, product navigation, private-beta CTA.
2. **Hero (`#zora`)** — cinematic workday loop; eyebrow `Zora by DORA Research`; H1 `Work moves. Zora remembers.`; category lede and product/technology qualifier.
3. **Editorial thesis** — `The work is everywhere. The memory should be shared.`
4. **Atlas scenario metrics** — five source systems, four critical moments, one decision brief.
5. **Product film (`#workday`)** — interactive, chaptered Atlas-release brief answering `Can Atlas still ship Friday?`.
6. **How it works (`#how-it-works`)** — one persistent Zora enterprise workspace with Remember, Connect, Anticipate, and Prove modes.
7. **Cinematic handoff** — workplace reset: `By the time you ask, Zora already knows.`
8. **Traceability (`#traceability`)** — broader second-brain-for-work vision with an interactive source-backed evidence ledger.
9. **Beta CTA and footer** — `Give your team a memory that keeps up.` with explicit DORA Research attribution.

## Brand Mark

The DORA mark is the original 13-dot swarm orbit ring. Keep its geometry intact and use a two-stop, bottom-left-to-top-right gradient from Living Green (`#3D8B68`) to Signal Cyan (`#03F5F2`). Header and footer instances spin slowly over 22 seconds; static copies may remain still. The matching favicon uses the same swarm on Warm White.

## Interaction and Accessibility

- Use semantic heading order, labelled fields, keyboard-accessible mobile navigation, visible focus rings, and the existing skip link.
- The waitlist form validates the browser email field, disables itself during its local submit state, and replaces itself with a confirmation message. A real waitlist endpoint remains a product integration TODO.
- Maintain full-width, stacked form controls below `sm` and horizontal controls above it.
- Preserve the existing Lenis same-page anchor behavior. Native smooth scrolling is the fallback when Lenis is not active.
- Apply `prefers-reduced-motion` globally: no animated motion may be required to understand the page.

## Superseded Context

Prior versions marketed infrastructure automation and later a consumer personal-memory organizer. Both are superseded. The current category is a second brain for work, with product and technology teams as the initial wedge and Atlas as the canonical release narrative.
