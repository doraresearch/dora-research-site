# Design system: DORA Research and Zora

Always read this file before making any visual, UI, or copy decision on this site. It describes the site as shipped and the decisions behind it.

> **Version 3.2 · 24 September 2026.** Rewritten to match the site as shipped. The live site at www.dorareason.com is one page, `public/coming-soon.html`, published as the whole site while the `HOLDING` file exists (see §11). Version 2.0, Paper and Night, is retired as a visual system: the founder rejected the site rebuilt to it as "AI-generic" on 20 September 2026. Its thesis, naming, voice, and mark geometry survive where this file repeats them. The React site in `src/` still implements v2.0 and is withheld from production. Do not extend it, and do not mix it with this system on one page.
>
> The product interface behind the demo is specified in `docs/zora-ui-brief.md`, which carries the window's full component measurements. This file carries the brand, the page, and the rules. Where either document disagrees with `public/coming-soon.html`, the page is the reference and the document is corrected.

Every rule below carries a status:

- **Decided**: the founder decided it, in words, on the date given. Changing it is a new decision, logged in the changelog with a reason.
- **Shipped**: live on www.dorareason.com. The founder approved the rendered page but has not ruled on this rule by itself; it was chosen during design work. Keep it for consistency. Changing it needs no new decision, but show the founder the rendered change.
- **Proposed**: drafted, not built, not adopted. Do not build it without asking.
- **Open**: a known gap or unanswered question.

Dates are the founder's local time (UTC+2), as in the commit history.

## 1. Brand thesis (Decided)

From the founder interview of 13 September 2026, corrected by the founder on 20 September 2026.

- **DORA Research is an applied AI lab.** It builds agents that take over specific operational work in engineering organizations, and it says plainly which work that is. People keep judgment and accountability. Research, benchmarks, and frameworks come first and become products, the way ElevenLabs works.
- **Zora is the first product: an AI Chief of Staff for CTOs.** In full, a technical director and chief of staff who reports to the CTO. Buyer and daily user are the same person, the CTO or VP Engineering.
- **Zora leads; DORA Research is the maker** (20 Sep). On the site Zora is the subject of the copy and DORA Research, Inc. is the company that makes her.
- **She is not a reporting tool** (20 Sep). She keeps the CTO's commitments, decisions, and risks in view at any hour, prepares each call with its evidence before it has to be made, and follows through. The morning brief is one thing she produces. It is never the headline, the hero, or the site's spine.
- **The promise is delivery.** Ship faster, break less. The lab is named for the DORA metrics. Memory is how Zora works, never what she is for.
- **Authority.** Today she advises with evidence and the CTO decides. Within a year she acts, one action at a time.
- **Three questions** she answers before they are asked: What happened last night? Where are we with this project, and why? Where are we most at risk?
- **Two enemies:** the status meeting that reconstructs last week, and being caught off guard.
- **One feeling:** calm and in control, knowing which question to ask first.
- **Say AI and agents plainly. Zora is she.** She has a name and a voice, never a face or an avatar.

## 2. Naming

| Element | Rule | Status |
| --- | --- | --- |
| DORA Research, Inc. | The company, and the header wordmark exactly as written. Descriptor: *an applied AI lab*. | Decided: wordmark 20 Sep, descriptor 13 Sep |
| dorareason.com | The web property ("Dora Reason"). Contact `hello@dorareason.com`. | Decided, 20 Sep |
| Zora | The first product. Title case, no article, never "it". She is the subject of her sentences. | Decided, 13 Sep |
| AI Chief of Staff for CTOs | What Zora is, in the headline. "Chief of Staff" is title case, like "CTOs". | Phrase Decided, 20 Sep. Capitals Shipped: the founder flagged the case clash on 21 Sep, and title case was chosen in reply. |
| reports to the CTO | The reporting line, for longer descriptions. | Decided, 13 Sep |
| by DORA Research | Attribution where Zora is introduced away from the header, as in the meta description. | Shipped |
| Private beta, by invitation | The stage. Never waitlist, early access, or launch. Email subject *Zora private beta*. | Shipped |
| Zora speaks as "I" | In her panel she speaks in the first person and calls the CTO "you". The lab speaks as "we". | Shipped |
| the brief | The home screen and the morning document. Lowercase in running text. One output, not her identity. | Shipped |
| Product family | Every product gets its own name and its own mark. The swarm is the lab's mark and never identifies a product. | Decided, 13 Sep |

Retired terms, never reuse: *a second brain for work*; *organizational memory* as a promise; *Starting with product + technology*; *Remember · Connect · Anticipate · Prove* as marketing; *Porcelain Intelligence*; *Paper and Night* as the site's look; *Work moves. Zora remembers.*; *She reads the night. You read the brief.*; *06:00. The brief is finished.*; *Give Zora one night. Read the brief at 06:00.*; *overnight work* as what the lab does; a clock counting down to the next brief; *Zora by DORA Research* as the header wordmark.

## 3. Marks

### 3.1 The swarm, the lab's mark

Thirteen dots in orbit around an undrawn centre, with one seat open at the upper right. The count comes from the lab's first idea, a swarm of AI agents each with its own specialization. The founder chose the mark by eye over months.

**Geometry (Decided, unchanged since the original site).** 24-unit frame. Ring centre 12, 12, radius 8.5. Seats every 30° counterclockwise from dot 1 at three o'clock. Open seat at 16.25, 4.64. Two trailing dots inside the ring. The inline SVG in `public/coming-soon.html`, `public/favicon.svg`, and `src/components/Logo.tsx` all carry this geometry.

| Dot | cx | cy | r |
| --- | --- | --- | --- |
| 1 | 20.50 | 12.00 | 1.40 |
| 2 | 19.36 | 7.75 | 1.20 |
| 3 | 12.00 | 3.50 | 1.10 |
| 4 | 7.75 | 4.64 | 1.30 |
| 5 | 4.64 | 7.75 | 1.50 |
| 6 | 3.50 | 12.00 | 1.60 |
| 7 | 4.64 | 16.25 | 1.70 |
| 8 | 7.75 | 19.36 | 1.80 |
| 9 | 12.00 | 20.50 | 1.70 |
| 10 | 16.25 | 19.36 | 1.60 |
| 11 | 19.36 | 16.25 | 1.50 |
| 12 | 15.00 | 13.00 | 1.00 |
| 13 | 13.00 | 15.50 | 0.90 |

- **Gradient (Decided, 20 Sep).** Two stops, `userSpaceOnUse`, from 3, 21 to 21, 3: Living Green `#3D8B68` at the lower left to Signal Cyan `#03F5F2` at the upper right.
- **Motion (Decided, 20 Sep).** The header mark turns once every 22 seconds, linear, forever, about its centre (`transform-origin: 12px 12px`, keyframes `swarm-spin`). Under reduced motion it stands still.
- **Header lockup (Shipped).** The mark at 30 px, a 12 px gap, then "DORA Research, Inc." in Archivo 500 at 15 px. The email link sits at the far right in muted.
- **Favicon (Shipped, unchanged since the original site).** `public/favicon.svg`: a 64-unit tile with 14-unit corners in warm white `#F7F5EF`, with the gradient swarm centred on it and its positions scaled 2.5×.
- **Where it appears (Shipped).** The page header and the favicon. Never inside the product window, which is the customer's workspace.
- **Misuse.** Never stretched, re-angled, given a fourteenth dot, a glow, or a pulse, or coloured other than the gradient or one flat ink. The turn is its only motion.

### 3.2 Zora's mark (Proposed, not adopted)

The site carries no mark for Zora. In the product her presence is her name and a 6 px Signal Cyan dot in her panel's header (Shipped).

Version 2.0 proposed an "open seat" mark: one flat disc in the swarm's open seat, plus a chord joining ring seats 7 and 11. It has never been put to the founder as a rendered choice. `src/components/ZoraMark.tsx` implements it for the withheld v2 site. Kept for reference only:

```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <circle cx="16.25" cy="6.64" r="3"/>
  <rect x="3.74" y="17.35" width="16.52" height="1.8" rx="0.9"/>
</svg>
```

## 4. Colour

### 4.1 Rules

- **The original palette is the base (Decided, 20 Sep).** The site's first palette (root commit `d9d013f`) is the base, "with room to push it further on this page". Colour is not rationed to a single accent: statuses use amber, rose, and green, the mark carries its gradient, and the source traces light in Living Green.
- **The Night register lives in Zora's panel (Decided, 20 Sep).** The page and the window are light. Zora's panel inside the window uses the original dark theme. Night tokens never appear outside the panel, and light tokens never inside it.
- **One action colour in the light register (Shipped).** Deep green `#145C43` for links, primary buttons, the active nav item, and a call's title while she discusses it.
- **Status is a word in its colour (Shipped).** Never a colour alone, never a pill or a dot (§7).
- **Reserved colours (Shipped).** Living Green and Signal Cyan are the mark's gradient. Living Green also lights a source trace while Zora reads it and colours the travelling pulses. Signal Cyan is also the 6 px dot beside Zora's name. Neither is ever text or a surface.
- **Never (Shipped).** Purple, glass, glow, or a gradient on a surface or a heading. The only gradients are the mark's and the Delivery chart's area fill.

### 4.2 Light register

"Original" means the value is in the root commit's palette or its mark. "Added" means it was introduced for the product window.

| Token | Value | Use | Origin |
| --- | --- | --- | --- |
| `canvas` | `#F4F6F8` | Page ground | original |
| `raised` | `#FFFEFB` | The window and the brief's ground | original |
| card | `#FFFFFF` | Widgets, secondary buttons | added |
| `subtle` | `#F0EFE9` | Progress track, quiet fills | original |
| sidebar | `#F6F7F5` | Sidebar ground | added |
| `ink` | `#111814` | Primary text | original |
| `muted` | `#48564F` | Secondary text, 7.1:1 on white | original |
| `faint` | `#6B776F` | Labels, metas, axis text, 4.7:1 on white | added |
| `rule` | `#DCE1DC` | Card and window borders | original |
| `rule-soft` | `#E6EAE6` | Dividers inside a card, call rows | added |
| trace | `#C9D2CD` | Source traces at rest | added |
| `action` | `#145C43` | Links, primary buttons, active nav | original |
| `action-hover` | `#0C4935` | Hover | original |
| `action-soft` | `#DCECE4` | A lit timeline row, a new row's flash | original |
| nav-active | `#E5EAE6` | Active sidebar item | added |
| nav-hover | `#ECEFEC` | Sidebar hover | added |
| `focus` | `#1D63D8` | Focus ring | original |
| `success` / soft | `#21683A` / `#E4F2E7` | Done, Kept, On track, Mitigated | original |
| `success-mid` | `#B9D3C4` | Open segment of a progress bar | added |
| `warning` / soft | `#7A5600` / `#FFF1C2` | Held, At risk, Moved, Tonight | original |
| `risk` / soft | `#A73745` / `#F9E7EA` | Slipped, incident start, worse deltas | original |
| `living` | `#3D8B68` | Mark gradient start, lit traces, pulses | original |
| `cyan` | `#03F5F2` | Mark gradient end, Zora's dot | original |

### 4.3 Night register (Zora's panel)

Every value is from the original site's dark theme.

| Token | Value | Use |
| --- | --- | --- |
| `n-ground` | `#131E18` | Panel ground |
| `n-raised` | `#19261F` | The CTO's message, the action card, the ask input |
| `n-hover` | `#23382F` | Hover |
| `n-line` | `#2B3932` | Borders and dividers |
| `n-strong` | `#5D6C64` | Outlined button borders, the working spinner |
| `n-text` | `#F5F7F2` | Text |
| `n-muted` | `#A4B1AA` | Secondary text, steps, the status word |
| `n-mint` / soft | `#67BF99` / `#183428` | The recommended action, entity links, step checks |
| `n-warn` / soft | `#F1C65A` / `#392F17` | Your call |
| `n-rose` / soft | `#F08A9A` / `#3C2028` | A named risk |
| `n-ok` / soft | `#72CF82` / `#193A22` | Outcomes |

### 4.4 Depth (Shipped)

- **The window** floats on a three-layer shadow, `--window-shadow` below. The founder asked for a window "nearly floating off the page" on 21 September; the values are Shipped.
- **Cards** carry `0 1px 2px rgba(13,21,17,.04), 0 1px 0 rgba(13,21,17,.03)`.
- **Nothing else casts a shadow.** Call rows, the sidebar, and Zora's panel have none; the panel separates with 1 px lines and one raised step.

### 4.5 CSS tokens

As shipped in `public/coming-soon.html`:

```css
:root {
  --canvas: #F4F6F8; --raised: #FFFEFB; --subtle: #F0EFE9;
  --ink: #111814; --muted: #48564F; --faint: #6B776F;
  --rule: #DCE1DC; --rule-soft: #E6EAE6;
  --action: #145C43; --action-hover: #0C4935; --action-soft: #DCECE4;
  --focus: #1D63D8;
  --warning: #7A5600; --warning-soft: #FFF1C2; --risk: #A73745; --risk-soft: #F9E7EA; --success: #21683A; --success-soft: #E4F2E7; --success-mid: #B9D3C4;
  --living: #3D8B68; --cyan: #03F5F2;
  /* night, for Zora's own panel */
  --n-ground: #131E18; --n-raised: #19261F; --n-hover: #23382F; --n-line: #2B3932; --n-strong: #5D6C64; --n-text: #F5F7F2; --n-muted: #A4B1AA; --n-mint: #67BF99; --n-mint-soft: #183428; --n-warn: #F1C65A; --n-warn-soft: #392F17; --n-rose: #F08A9A; --n-rose-soft: #3C2028; --n-ok: #72CF82; --n-ok-soft: #193A22;
  --window-shadow: 0 0 0 1px rgba(13,21,17,.07), 0 2px 4px rgba(13,21,17,.05), 0 30px 60px -24px rgba(13,21,17,.22);
  --ui: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --mono: 'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace;
}
```

The sidebar, card, trace, and nav values are written inline in the style block rather than as variables.

## 5. Typography (Shipped)

- **Page copy:** Archivo 400 and 500. It was chosen for the coming-soon page on 21 September; the founder approved the page but has not ruled on the face (Open, §13).
- **Product window:** Geist 400, 500, and 600 for the interface. Geist Mono 400 and 500 for figures, times, counts, and chart axes.
- **One request:** `https://fonts.googleapis.com/css2?family=Archivo:wght@400;500&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap`
- **Tabular figures** everywhere: `font-feature-settings: 'tnum'` on the body.
- **Retired:** Newsreader and IBM Plex Mono, the v2.0 faces. The React build in `src/` still loads them.

Page scale:

| Role | Face | Size / line | Notes |
| --- | --- | --- | --- |
| Headline | Archivo 500 | `clamp(40px, 3.6vw, 56px)` / 1.03, −0.032em | 36 px at 640 and below. Three lines; "Chief of Staff" is held together with non-breaking spaces. |
| Sub-line | Archivo 400 | 17 / 1.55, muted | Max 29em. 16 px at 640 and below. |
| Contact line | Archivo 400 | 15, muted | Max 30em. The link is action, 500, underlined 1 px with a 3 px offset. |
| Header | Archivo 500 | 15 | Wordmark in ink, email link in muted. |
| Source labels | Archivo 400 | 12 / 16, muted | Ink while lit. |
| Demo caption | Archivo 400 | 12.5, faint | Replay is an underlined text button. |
| Footer | Archivo 400 | 13, faint | |

The window's scale is in `docs/zora-ui-brief.md` §8.3: greeting 22/600, widget title and body 12.5, metas 11.5, status words 11.5/500, figures 26/500 in mono.

Sentence case everywhere except the title "Chief of Staff" (Shipped).

## 6. Page layout

### 6.1 Decisions

- **The window sits on the right, about half the page** (Decided, 21 Sep).
- **Lines from the data sources feed the window, and records visibly travel along them** (Decided, 21 Sep).
- **Three panes, and the brief shows only Overnight and Needs your call** (Decided, 21 Sep). Delivery, Sources, and the rest are their own screens.
- **No top bar over the brief** (Decided, 21 Sep). The founder questioned what it added; it was removed, and the founder approved the result.
- **The window is lifted off the page**, crisp at every edge (Decided, 21 Sep).
- **The page works on an iPad** (Decided, 21 Sep). The founder reported it broken there; see §6.3.

### 6.2 Structure (Shipped)

- **One screen.** Header, hero, and footer in a three-row grid. `.page` is at most 1600 px wide with 32 px by 48 px padding; the hero is centred vertically.
- **Hero.** Two columns: copy at `clamp(400px, 33vw, 520px)` and the stage filling the rest, 48 px apart, centred vertically.
- **Copy.** Headline, sub-line, contact line, in that order. Nothing above the headline: no eyebrow, no badge, no logo.
- **Stage.** A 96 px feed column beside the window. Six labels, Linear, GitHub, Datadog, PagerDuty, Slack, and Calendar, sit on six parallel horizontal traces that end at the window's left edge. The traces spread over the middle 68 percent of the window's height. Each source is its own input: no hub, and no fan converging on a point.
- **Window.** Laid out at 1000 px wide and 660 px tall with 16 px corners. It is scaled with CSS `zoom` so its layout never drops below 1000 px: in a narrower slot it shrinks, in a wider one it widens at full size. Columns: sidebar 184 px, the brief fluid, Zora's panel 272 px.
- **Caption.** Under the window: *Interactive demo with fictional data. Click around, or ask Zora.* with Replay at the right.
- **Footer.** *DORA Research, Inc. · An applied AI lab.* at the left, *dorareason.com · © 2026* at the right.

### 6.3 Responsive (Shipped)

- **1180 px and below:** the hero stacks. The copy is capped at 36rem and the window runs full width beneath it.
- **960 px and below:** the window is drawn at its natural width with no zoom. The feed and the sidebar are hidden, widgets pair up in two columns, and the window's height follows its content.
- **640 px and below:** 24 px page padding, the header wraps, the headline drops to 36 px, and widgets run in one column. The greeting stacks. The ask input is 16 px so iOS does not zoom on focus.

The product's own responsive behaviour for laptops, tablets, and phones is specified in `docs/zora-ui-brief.md` §12; the demo builds only these breakpoints.

## 7. The product window

The window is Zora's real interface with demonstration data, built as live HTML. It is never an image, an illustration, or a diagram (Decided, 21 Sep: the founder set warp.co's product mockup as the bar for realism). Full anatomy and measurements are in `docs/zora-ui-brief.md` §§4 to 8.

**Composition (Decided, 21 Sep; details Shipped).**

- **Sidebar:** the workspace, then three groups, Today, Organization, and Zora. Twelve screens: Brief, Your calls, Today, Commitments, Decisions, Projects, Incidents, Delivery, People, Sources, Authority, and Settings. Dana Kim, CTO, sits at the foot.
- **Brief:** the greeting *Morning, boss.* (Decided: the founder asked for a "Hi Boss" greeting on 20 Sep. When "Morning, Dana." was offered instead on 21 Sep, the founder went ahead with "boss"). Under it come a sub-line in her words and the stamp *Compiled 06:00 · Mon 21 Sep*. Next is a *Since 06:00* line that changes as records arrive. Then two widgets, Overnight and Needs your call.
- **Zora's panel:** her name, the 6 px cyan dot, and a status word: *Reading*, *In the room*, or *Waiting on you*. Then the CTO's question and her steps, each naming its source in the sentence ("Read the Datadog alert, 02:41"). Her answer follows, then an action card with a mint border and two buttons. *Try* suggestions sit above the ask input.

**AI-template tells, removed on 23 September.** The direction is Decided: the founder said the page still had "too many AI-slop elements". The list below came from an audit the founder approved as rendered, and is Shipped. Do not bring any of them back:

- **No status pills or dots.** A status is a coloured word at 11.5/500, with no background, radius, or dot.
- **No icon badges** in widget headers.
- **No eyebrow or kicker** above the headline.
- **No glow or halo** behind the window.
- **Held calls are rows** divided by a hairline, not cards with their own shadows.
- **No fan of beams.** Sources arrive on parallel traces.

**Demonstration data (Shipped, one story; TransparentAI Decided 21 Sep, replacing Northwind).** TransparentAI, Engineering, 62 people. Dana Kim, CTO. Monday 21 September 2026. Incident 2291: EU order writes were blocked for 14 minutes when an index build on `orders_eu` took the write lock, and recovered at 02:55. Migration 0043 runs tonight against a 22 M-row table with the same pattern. The on-call rota still lists two people who have left. The people are Marcus Lind, Elena Ruiz, Priya Nair, and Tomas Berg. The canonical content is in `docs/zora-ui-brief.md` Appendix A. Reuse it rather than inventing new incidents; any new specimen must survive a senior engineer's read.

**Integrity (Shipped).**

1. Every claim traces to a record with a source and a 24-hour time.
2. Real product names: Linear, GitHub, Datadog, PagerDuty, Slack. Tickets look like tickets: ORD-1187, PR #2214, incident 2291.
3. No dead controls. Every button, link, nav item, timeline row, and chevron row does something. A row with nothing to open, like the draft *Rollback owner named per service*, is not a button and has no hover state.
4. No invented metrics. The figures reconcile; the Delivery bars average the 14.2 deploys a day they claim.
5. The demo says it is a demo with fictional data.
6. Zora never decides for the CTO. Held calls wait for a click, and she says who decides: "Nothing runs until you decide."

## 8. Motion and the live demo

**Decided.**

- The mark turns every 22 seconds (20 Sep).
- Records visibly flow from the sources into the window (21 Sep).
- The mockup is a live demo, not a static image (23 Sep), built in three layers (23 Sep). It plays by itself, the visitor can drive it, and it stays calm.

**The principle (Shipped).** Anything that moves means something: a record arriving, Zora reading, or a decision taking effect. The only things that repeat are the mark's turn and the small pulses on the traces, which stand for records arriving.

**The opening story (Shipped).**

1. The copy settles with an 8 px rise. The window rises 14 px over 900 ms on `cubic-bezier(.2,.7,.2,1)` after 80 ms.
2. The brief's widgets arrive and their figures count up.
3. After 700 ms the ask box types *What happened with EU orders last night?* at 22 ms a character.
4. Her status turns to *Reading*. Each step lights its source's trace and label while a larger pulse travels in over 0.55 s; then the step's spinner becomes a check.
5. Her answer appears, then the action card, and her status becomes *Waiting on you*. The call she is discussing lights in the brief for 2.6 s.
6. Six records arrive, the first after 2.6 s and then one every 4.5 s, each on its own source's trace. Each updates the *Since 06:00* line, and some change the brief: a new timeline row, a moved meeting. The demo clock runs from 06:04 to 06:18 and stops.
7. If nobody has touched the window after 16 s, the demo types one more question into the ask box in the CTO's place: where the organization is most at risk. Zora never makes a decision herself.
8. Nothing loops. Replay restores the window and starts over.

A small ambient pulse travels one random trace every 1.1 s, paused while the tab is hidden.

**What the visitor can do (Shipped).**

- **Sidebar:** all twelve screens open.
- **Decisions ripple.** A decision updates the call row, the project row, the counts, the Decisions log and its subtitle, and her reply.
- **Widget links go deeper through Zora.** *review* asks for the four-part incident review. *Where else →* asks where the same condition holds, and she names migration 0043. *Throughput, stability, quality →* asks how delivery is going. *All decisions →* asks for the week's decisions and their evidence. Each answer is written for every state of the two calls.
- **Decision rows ask Zora about that decision.** Atlas and SDK 2.0 reuse her answers on those projects. *Index builds move off-peak* gets its own answer about the proposal and tonight's 0043 call. A row added by a decision asks about that call.
- **Settings rows** expand in place with one line of detail, their chevron turning down, except *Sources*, which opens the Sources screen.
- **Every clickable row** takes the timeline's hover tint and a pointer, and opens with Enter or Space.
- **The ask box** answers thirteen topics from the demo's record and greets a hello. For anything else it says the question is not in this demo's record, rather than inventing an answer. The suggestions change as topics are used.
- **A question asked while she is answering waits its turn.** If several arrive, the latest one runs.
- **On screens 960 px and narrower**, a widget link scrolls the page to her panel and keeps her reply in view.
- **Timeline rows** open their record in place.

**Finished state (Shipped).**

- **`?still`** freezes the end of the opening story: no arrivals, no idle question, no pulses, no typing, no counting. The header mark keeps turning.
- **`prefers-reduced-motion`** shows the opening story finished at once and stops the mark. There are no pulses, typing, or counting. Records still arrive on schedule, without motion, and the idle question is skipped.

**Retired from v2.0:** the static mark, "the page arrives finished" with no fades or staggers, and the 120, 160, and 240 ms scale.

## 9. Voice and copy

### 9.1 The page

| Where | Copy | Status |
| --- | --- | --- |
| Headline | Zora is an AI Chief of Staff for CTOs. | Phrase Decided, 20 Sep; capitals Shipped, 21 Sep |
| Sub-line | She tracks every commitment, decision, and risk across your engineering organization and brings you the calls that need you, with the evidence attached. | Decided, 21 Sep |
| Contact | Coming soon. Private beta, by invitation. Write to hello@dorareason.com. | Shipped |
| Demo caption | Interactive demo with fictional data. Click around, or ask Zora. | Shipped |
| Footer | DORA Research, Inc. · An applied AI lab. / dorareason.com · © 2026 | Shipped |
| Title tag | Coming soon · DORA Research, Inc. | Shipped |
| Meta description | The headline and sub-line, then "By DORA Research, an applied AI lab. Private beta, by invitation." | Shipped |
| Social title | Zora is an AI Chief of Staff for CTOs. Coming soon. | Shipped |
| Social description | Zora is the first agent from DORA Research, an applied AI lab. Private beta, by invitation. | Shipped |

### 9.2 Zora

**The structure (Decided, 13 Sep).** The voice is modelled on a technical director the founder worked with, known inside the company as Burli. That name never appears on a customer-facing surface. When she explains an incident she goes in this order:

1. **Impact and outcome.** Who was affected, how it was mitigated, what is still open.
2. **Conditions.** The circumstances that let it happen. No blame, no speculation, unknowns marked as unknown.
3. **What we change.** How the organization operates differently so it does not recur, sized to this company's real constraints.
4. **Where else.** Other places the same conditions exist. Then she names who decides.

**The rules (Shipped).**

- Zora is the subject of the sentence. She speaks as "I", the CTO is "you", and "boss" appears only in the greeting.
- Adjectives are measurements. Every claim carries a source and a 24-hour time, or it is cut.
- She says what she knows and what she does not.
- She names who decides, and never decides for the CTO.
- Two beats, then stop.
- Status words come from a fixed list: see `docs/zora-ui-brief.md` §10.

### 9.3 The lab (Proposed)

On the site the lab appears only as *DORA Research, Inc. · An applied AI lab.* The fuller lab voice returns when the lab's own pages do. It writes as "we", names the work agents take and the work people keep in the same sentence, and marks unknowns as unknown. The v2.0 company paragraph is the current draft:

*DORA Research is an applied AI lab. We build agents that take over specific operational work in engineering organizations, and we say plainly which work that is. People keep judgment and accountability; the agents keep the record, the watch, and the follow-through. Our research, benchmarks, and frameworks are published before they become products.*

### 9.4 Vocabulary

**Use:** Zora, she, her · AI Chief of Staff for CTOs · reports to the CTO · AI, agents · an applied AI lab · calls, held for you, you decide · the record, records, evidence, source · commitment, owner, decision, deadline · impact, conditions, what we change, where else · at risk, exposure, hold, mitigated, rollback, baseline, on-call · ship faster, break less · throughput, stability · advise, recommend · judgment, accountability, authority · Linear, GitHub, Datadog, PagerDuty, Slack · reading, in the room, waiting on you.

**Avoid:** copilot, assistant, chatbot, bot, avatar, persona · AI teammate, digital employee, virtual employee · second brain, knowledge base, single pane of glass, command center, mission control · reporting tool, overnight report, dashboard, for Zora herself · insights, actionable, real-time (state the time), surface as a verb · AI-powered, intelligent, smart, magic, seamless, effortless, never sleeps · unlock, empower, leverage, transform, supercharge, 10x, revolutionary · root cause (say conditions) · thinking…, analyzing…, generating…, chat with your data · Welcome to · it, for Zora · am and pm · em dashes · exclamation marks · emoji.

### 9.5 Mechanics (Shipped)

- Sentence case, except the title "Chief of Staff".
- 24-hour times.
- Dates in copy as "Mon 21 Sep" or "Tue 15", never ISO.
- A middle dot `·` separates metadata fields.
- `→` ends a link that goes deeper: another screen, or Zora's answer in her panel. In the product, *Where else →* opens a pattern search (`docs/zora-ui-brief.md` §5.2).
- Typographic apostrophes and quotes.
- No em dashes, no exclamation marks, no emoji.

## 10. Media and film (Decided direction, Open)

The direction is engineering documentary, as SpaceX films its rockets and Waymo its cars (Decided, 13 Sep). The founder described four shots:

1. A CTO at 6 a.m. reading the brief.
2. The product on a real screen.
3. The systems it watches.
4. The incident room.

The first shot is a scene, not the positioning (20 Sep). Nothing has been shot, and the site carries no film or photography.

When it is shot, the rules are: real machines at real scale, screens shot in camera, and real people at real work. No robots, glowing brains, or abstract networks. Licensed masters only.

## 11. The site as shipped

| Surface | As shipped |
| --- | --- |
| Pages | One, `public/coming-soon.html`, served at `/` and as the 404 page. |
| The switch | While `HOLDING` exists at the repository root, `scripts/holding.mjs` runs after the build. It copies the page to `dist/index.html` and `dist/404.html`, and removes the React pages' HTML, the `assets/` bundle, and the route data. It writes `_redirects` so `/research` and `/zora` go to `/` (302) and `/coming-soon.html` goes to `/` (301), and writes a sitemap that lists the root alone. Deleting `HOLDING` publishes the React site again. |
| Title | Coming soon · DORA Research, Inc. |
| Social card | `public/og-soon.png`, 1200 × 630, cut from the page itself. |
| Favicon | `public/favicon.svg` (§3.1). |
| Email | `hello@dorareason.com`. Cloudflare obfuscates the two `mailto:` links at the edge and injects its decoder script. Production HTML differs from the file there and nowhere else. |
| Withheld | The React site in `src/`: Company, Research, and Zora pages, built to v2.0. Its social cards, `public/og-lab.png` and `public/og-zora.png`, are still copied to production from `public/`, but nothing links to them. The v2.0 brand book in `brand/` is kept as history. |

**Open:** what replaces the withheld site. For the full site the founder wants rendered directions anchored on assets only DORA has, the mark, the real product, and film, rather than a system of typographic rules (20 Sep).

## 12. Accessibility (Shipped)

- **Focus:** a 2 px `#1D63D8` ring with a 2 px offset on links, buttons, and focusable rows.
- **The window** is a region labelled "Interactive demo of Zora, with fictional data". The feed is hidden from assistive technology. Timeline rows are buttons with `aria-expanded` and open with Enter or Space.
- **No information by colour alone.** Every status is a word.
- **Reduced motion** removes all motion, including the mark's turn (§8).
- **Contrast** meets AA. The lowest pair in use is faint on white at 4.7:1.
- **Small text.** Everything is 11 px or larger except the sidebar's workspace line, group labels, and counts at 10.5 px, the chart axis at 10 px, and avatar initials at 9.5 px.
- **Landmarks:** header, main, and footer on the page.

## 13. Governance

- **Precedence:** the founder's decisions, dated in this file and the changelog; then this file; then `docs/zora-ui-brief.md` for the product interface; then the brand book v2.0 in `brand/`, which is history, with its visual system retired. The live site is ground truth for what exists today. When it and this file disagree, find out which is wrong before changing either.
- **Asking:** before changing a Decided rule or building a Proposed one, show the founder rendered options, one question at a time.
- **Superseded, do not regress:**
  - a prediction-market operator with AI operations underneath;
  - secure AI teammates for infrastructure operations;
  - a consumer personal-memory organizer;
  - a second brain for work, the site until 13 September 2026;
  - Paper and Night, v2.0, from 13 to 20 September 2026, rejected as AI-generic;
  - Zora as an overnight reporting tool, retired on 20 September 2026.

  The thirteen-dot mark did not change through any of them.
- **Open items:**
  - Trademark search on the name Zora.
  - Zora's own mark (§3.2).
  - The direction for the full site that replaces the withheld v2.0 build (§11).
  - Archivo as the page face: shipped, not ruled on.
  - Zora's self-description in her own words. The v2.0 text led with the overnight brief and is retired.
  - *Throughput, stability, quality →*: her delivery answer covers throughput and stability, and the demo has no measure of quality.
  - The four-shot film (§10).
  - Print recipes for the gradient and the status colours, proofed against hex.
  - The Accountability Line, the lab's first framework (v0.1 in `src/content/framework.ts`), including what "ready for Reported" means.

### Changelog

| Date | Version | Change | Source |
| --- | --- | --- | --- |
| 2026-09-24 | 3.2 | The chevron rows in Decisions and Settings are wired: decision rows ask Zora about that decision, Settings rows expand in place or open Sources. The draft row stays inert by the list-row rule. Four step labels that were cut off in Zora's panel are shortened. | `public/coming-soon.html` |
| 2026-09-24 | 3.1 | The four widget links (*review*, *Where else →*, *Throughput, stability, quality →*, *All decisions →*) now ask Zora to go deeper. The arrow rule is corrected to match the brief, where a footer link goes deeper rather than always opening a screen. After the 0043 call, the Decisions log and the Projects table no longer say it is pending; after the rota is reassigned, the Data platform project no longer calls the rota gap open. | `public/coming-soon.html` |
| 2026-09-24 | 3.0 | Rewritten to match the site as shipped: the coming-soon page, live since 21 September and last changed on 23 September. Positioning: Zora is an AI Chief of Staff for CTOs, Zora leads, and DORA Research, Inc. is the maker; the brief is one output, not her identity. Visuals: the original palette restored as the base; the Night register confined to Zora's panel; the gradient swarm turning every 22 s; Archivo on the page and Geist in the window; a live product window with three panes and a working demo; AI-template tells removed. Paper and Night retired as a visual system and its React build withheld. Statuses are now Decided, Shipped, Proposed, and Open. | Founder decisions of 20, 21, and 23 Sep 2026; `public/coming-soon.html` |
| 2026-09-13 | 2.0 | Rewritten from the brand book v2.0: lab plus first product; Paper and Night registers; Zora positioned as a technical director reporting to the CTO; promise moved from memory to delivery; night brief as the central scene; four-part voice; AI said plainly; product marks; static swarm; The Accountability Line v0.1 as the lab's first published framework. Porcelain Intelligence and the second-brain positioning retired. | Founder interview, 13 Sep 2026 |
