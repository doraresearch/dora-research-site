# Design System — DORA Research

Always read this file before making any visual or UI decision on this site. All
font choices, colors, spacing, and aesthetic direction are defined here. Do not
deviate without explicit approval.

## Product Context
- **What this is:** Marketing and editorial site for DORA Research, an applied AI research lab.
- **Who it's for:** Researchers, operators, founders, and engineers interested in AI systems that execute work, not just answer questions.
- **Space:** Applied AI, workflow execution systems, operator architectures.
- **Project type:** Static marketing site (React + Vite + Tailwind + Framer Motion).

## Aesthetic Direction
- **Direction:** Research-lab editorial. Bell Labs, Stripe Press, academic quarterly.
- **Decoration level:** Intentional. Typography carries the brand. One subtle schematic background layer, hairline rules, mono figure captions.
- **Mood:** Sober, measured, confident. A working paper, not a landing page.
- **Anti-references:** Stripe, Linear, Vercel, generic AI-startup landing pages. No purple gradients, no rounded-bubble icons, no Tailwind blue, no Inter.

## Typography

Three families, clearly assigned.

- **Display / thesis:** `Instrument Serif` — 400 regular + italic. Used for `h1` and `h2`. Italic is used for emphasized words in the accent color.
- **Body + UI:** `Instrument Sans` — 400, 500, 600. Default for paragraphs, lede text, buttons, navigation.
- **Labels / eyebrows / system names / figure captions:** `JetBrains Mono` — 400, 500. Used at 10–12px with wide tracking, uppercased.

Loaded from Google Fonts in `src/index.css`.

### Scale

| Role | Size | Line height | Family |
|------|------|-------------|--------|
| Hero display | `clamp(64px, 9vw, 112px)` | 1.02 | Serif |
| H2 | `clamp(36px, 4.5vw, 56px)` | 1.08 | Serif |
| H3 (card) | 20px | 1.2 | Serif |
| Lede | 22px | 1.45 | Sans 500 |
| Body | 17px | 1.7 | Sans 400 |
| Small | 14px | 1.55 | Sans 400 |
| Eyebrow | 11px | 1 | Mono 500 (tracking 0.14em, uppercase) |
| Figure caption | 12px | 1 | Mono 500 (tracking 0.1em, uppercase) |

### Emphasis

Use italic Instrument Serif in the accent color for emphasized words inside headlines (e.g. "AI that *executes*."). Use Instrument Sans 500 weight for in-paragraph emphasis in ink color.

## Color

Paper, ink, and one archival accent. No gradients. No semantic color spam.

| Token | Hex | HSL | Usage |
|-------|-----|-----|-------|
| `paper` | `#F6F3EC` | `42 35% 94%` | Page background |
| `card` | `#FBFAF5` | `50 33% 97%` | Card / surface background |
| `ink` | `#0A0A0A` | `0 0% 4%` | Primary text, primary button bg |
| `body` | `#5A5A5A` | `0 0% 35%` | Body paragraphs |
| `muted` | `#8C8A84` | `45 4% 53%` | Eyebrows, muted labels |
| `accent` | `#B08A3E` | `42 48% 47%` | Italic emphasis, hover states, one horizontal rule per page, figure numbers |
| `accent-hover` | `#9A7934` | `42 49% 40%` | Hover state for accent |
| `hairline` | `rgba(10,10,10,0.12)` | — | Dividers, card borders |
| `hairline-strong` | `rgba(10,10,10,0.24)` | — | Hovered borders, diagram node borders |

**Accent rule:** the accent appears in one or two places per viewport — never decoratively. It carries meaning (emphasis, hover, figure number).

### Dark mode

The site is single-mode (light) for now. A dark-mode extension of this palette uses paper `#141210`, ink `#F3EEE4`, body `#A8A39A`, muted `#6B6760`, accent `#D4AF5C` (lighter ochre). Not wired up yet.

## Spacing

- **Base unit:** 8px.
- **Density:** Comfortable to spacious. Widen vertical air around hero and thesis moments.
- **Scale:** 2xs(4) xs(8) sm(12) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96).
- **Hero top padding:** `pt-40 md:pt-56` (was `pt-32 md:pt-44`).
- **Section padding:** `py-24 md:py-32`.

## Layout

- **Approach:** Grid-disciplined, with intentional asymmetry at hero and thesis moments.
- **Max content width:** `max-w-6xl` (1152px).
- **Side gutters:** `px-6` mobile, `px-8` desktop.
- **Grids:** Two-column 1fr/2fr for "heading + body" pairs. Research cards use a 3-column hairline grid (no gaps, shared borders).
- **Border radius:** `0` (sharp edges, always). No `rounded-*` utilities on cards, buttons, diagrams, or inputs. The only exception is the SVG icons in `BackgroundIcons.jsx`.
- **Shadows:** None. Hairline borders carry separation instead.

## Motion

- **Approach:** Minimal-functional.
- **Where:** Hero entrance only. One fade-up on the hero `h1` + lede. Everywhere else static.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out).
- **Duration:** 750ms for hero entrance. No transition longer than 200ms for hover states.
- **Banned:** Per-section `whileInView` fade-ups. Parallax is OK for the subtle schematic icon layer (already implemented).

## Eyebrows and Figure Captions

Replace decorative numerals with academic markers:

- Section eyebrows: `§ I · THE EXECUTION GAP`, `§ II · THESIS`, …
- Figure captions: `FIG 1 · EXECUTION ARCHITECTURE`, `FIG 2 · PIPELINE`.
- Working-paper banner on hero: `DORA RESEARCH · WORKING PAPER · 2026.04`.
- Card tags: `01 · EXECUTION`, `02 · STATE` — mono in accent color, used on research cards only.

All eyebrows are JetBrains Mono, 11px, uppercase, tracking 0.14em.

## Components

- **Buttons:** Sharp rectangles, no radius. Primary is solid ink with paper text and oxblood hover. Ghost is transparent with hairline border and ink text, hover tightens the border to full ink. No gradients, no shadows.
- **Cards (research, concept):** Sharp hairline rectangles on card color. Mono tag in accent color, serif h3, sans body copy. Hover changes background from paper to card, no shadow.
- **Figure cards:** Sharp hairline rectangles on card color. Figure caption strip at top with bottom-hairline separator. Mono figure number in accent on the left, mono title in ink on the right.
- **Research grid:** Zero-gap grid with shared hairlines (top + left on the container, right + bottom on each cell). Feels like a printed table.
- **Diagrams:** Sharp nodes, hairline borders, thin ink connectors with simple arrowheads. Labels in JetBrains Mono.
- **Background icons:** Keep the existing parallax layer, but tune the color to `rgba(10,10,10,0.035)` and stroke width to 0.6 for a more refined feel.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-23 | Initial design system created | Shifted away from generic AI-startup editorial-minimal (Inter + Tailwind blue + rounded cards + cold `#FAFAFA`) toward research-lab editorial (Instrument Serif + ochre accent + sharp hairline grid + warm ivory paper). The category needs a differentiator; the existing system was literate but interchangeable with every Stripe-clone. |
| 2026-04-23 | Accent locked as ochre `#B08A3E` | Chosen over oxblood, prussian blue, forest, and ink-only after side-by-side comparison. Ochre reads as manuscript / aged-paper / warm — pairs with the warm ivory paper and the Instrument Serif display to reinforce the scholarly working-paper aesthetic without feeling tech-y or corporate. |
