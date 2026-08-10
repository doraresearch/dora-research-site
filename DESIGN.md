# Design System — DORA Research / Zora

Always read this file before making visual or UI decisions on this site. It is the source of truth for the live Zora homepage.

> **2026-08-01 repositioning:** DORA Research is now a consumer memory lab. **Zora** is its first product: a private AI second brain for capturing, connecting, and recalling personal knowledge. The previous infrastructure-operations site and its Aurora design system are superseded.

## Product Context

- **What this is:** A static, single-page product site for Zora by DORA Research, built with React 18, TypeScript, Vite, Tailwind, and `vite-react-ssg`.
- **Audience:** People who want a reliable, private personal memory system rather than another folder, notes app, or generic chatbot.
- **Promise:** Zora captures everything you read, write, hear, and think; connects fragments into a living model of your knowledge; and retrieves the original source and context when you ask.
- **Core product model:** **Capture → Connect → Recall**.
- **Trust model:** On-device memory store, end-to-end encryption, no training on personal data, and the ability to export or erase anytime.
- **Primary CTA:** `Join the waitlist`.
- **Current beta wording:** `Private beta · Fall 2026 · macOS + iOS first` in the hero and `Private beta · Fall 2026` at the closing CTA.

## Brand Personality

Zora should feel warm, calm, thoughtful, and quietly capable: consumer-friendly without becoming cute, precise without feeling technical, and private by design rather than privacy-theatre.

Avoid infrastructure/enterprise operations vocabulary, fake metrics, generic SaaS dashboards, chatbot/copilot framing, dark command-center visuals, robotic imagery, decorative gradients, and hype.

## Visual Direction

The visual language is **Living Knowledge**: editorial typography over an airy warm-white canvas, pale-sage structural bands, compact inline memory artifacts, and a few deliberately reserved moments of orange discovery.

- Use open layouts and generous whitespace rather than bento grids or nested cards.
- Keep real interface labels and controls code-native.
- The hero uses an app-window mockup built in code, not a stock image.
- Use only the two prescribed soft radial glows behind the hero mockup; do not tint or wash the mockup itself.
- Use simple thin-stroke SVG icons. Never use emoji.
- Interactions should be subtle: button/link colors, logo spin, recall pulse, and the footer wordmark shimmer. Every animation must respect `prefers-reduced-motion` and continuous footer animation must pause offscreen.

## Color System

| Token | Value | Use |
| --- | --- | --- |
| `base` | `#F7F5EF` | Warm-white primary background |
| `sage` | `#E4EADF` | Pale-sage band and skeleton fills |
| `ink` | `#17251F` | Forest ink text and footer |
| `muted` | `#66716A` | Moss-grey secondary copy |
| `green` | `#3D8B68` | Living-green CTAs, links, source marks, eyebrows |
| `green-deep` | `#2F7355` | CTA hover |
| `orange` | `#FF785A` | Signal orange, restricted to intelligence/discovery moments |
| `yellow` | `#F3D56B` | Soft-yellow recall highlight |
| `line` | `#D8DFD2` | Primary hairlines and borders |
| `line-soft` | `#EDEFE6` | Inner rules |
| `line-graph` | `#C9D2C2` | Memory graph links |
| `white` | `#FFFFFF` | App window and input surfaces |

### Accent discipline

Living Green is the only interactive accent. Signal Orange is only for recalled waveform bars, an active memory-graph connection/node, and pulse dots. Soft Yellow only marks a recalled phrase or date. Do not introduce blue, purple, neon, broad surface gradients, or extra color families.

## Typography

- **Display:** `Bricolage Grotesque`, 700–800. Use for headings and the giant DORA wordmark.
- **Body/UI:** `Figtree`, 400–700.
- **Labels:** `IBM Plex Mono`, 400–500, uppercase with generous tracking.

| Role | Size / treatment |
| --- | --- |
| Hero H1 | `44px` mobile → `64px` desktop, 1.02 leading, `-0.03em` tracking |
| H2 | `32–44px`, `-0.02em` tracking |
| H3 | `21px` |
| Lede | `18px`, 1.6 leading |
| Body | `16px` |
| Card copy | `14px`, 1.6 leading |
| Mono labels | `9–12px`, uppercase, `.08–.22em` tracking |
| Footer wordmark | `clamp(90px, 21vw, 260px)`, 800, `.82` line-height |

## Layout and Components

- **Content width:** `1200px` maximum, `24px` mobile / `32px` desktop gutters.
- **Header:** sticky 72px warm-white translucent row with a 16px backdrop blur and hairline. Desktop nav: `Zora`, `How it works`, `Privacy`; mobile uses the minimal hamburger menu.
- **Header CTA:** a 42px living-green pill that links to `#waitlist`.
- **Controls:** inputs and buttons are 50px high and always pill-shaped. Never allow a CTA label to wrap.
- **Radii:** cards `18px`, app window `20px`, inner panels `10–12px`, buttons and inputs `9999px`.
- **Hairlines:** use `line`, `line-soft`, or `line-graph`; shadows are limited to the app window and overlapping capture fragments.
- **Anchors:** `#zora`, `#how-it-works`, `#privacy`, and `#waitlist` use an 84px scroll margin.

## Homepage Structure

The page order is fixed:

1. **Header** — swarm mark, DORA RESEARCH wordmark, anchor navigation, waitlist CTA.
2. **Hero (`#zora`)** — eyebrow `Zora · by DORA Research`; H1 `Ask your memory anything.`; product lede; waitlist form; private-beta note; a polished Zora memory-workspace product frame.
3. **How it works (`#how-it-works`)** — pale-sage section headed `Capture. Connect. Recall.` with three code-native product surfaces: inbox capture, linked-memory workspace, and source-backed recall.
4. **Trust strip (`#privacy`)** — four uppercase assurances separated by interpuncts.
5. **Waitlist CTA (`#waitlist`)** — centered headline `Your mind, with a perfect memory.` and a second waitlist form.
6. **Footer** — forest-ink surface, concise lab copy, Zora/Lab links, animated Living Knowledge DORA wordmark, and mono metadata.

## Brand Mark

The DORA mark is the original 13-dot swarm orbit ring. Keep its geometry intact and use a two-stop, bottom-left-to-top-right gradient from Living Green (`#3D8B68`) to Signal Orange (`#FF785A`). Header and footer instances spin slowly over 22 seconds; static copies may remain still. The matching favicon uses the same swarm on Warm White.

## Interaction and Accessibility

- Use semantic heading order, labelled fields, keyboard-accessible mobile navigation, visible focus rings, and the existing skip link.
- The waitlist form validates the browser email field, disables itself during its local submit state, and replaces itself with a confirmation message. A real waitlist endpoint remains a product integration TODO.
- Maintain full-width, stacked form controls below `sm` and horizontal controls above it.
- Preserve the existing Lenis same-page anchor behavior. Native smooth scrolling is the fallback when Lenis is not active.
- Apply `prefers-reduced-motion` globally: no animated motion may be required to understand the page.

## Superseded Context

Prior versions of this repository marketed secure AI teammates for infrastructure operations with a dark Aurora system, `Plus Jakarta Sans`, `Instrument Serif`, `JetBrains Mono`, and an operations-control page structure. That positioning and visual language were replaced on 2026-08-01 by the DORA Research / Zora consumer-memory redesign.
