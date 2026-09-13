# Design System — DORA Research and Zora

Always read this file before making any visual, UI, or copy decision on this site. It is the source of truth for the brand and the target for the site.

> **Version 2.0 · 13 September 2026 · Paper and Night.** Derived from the DORA Research Brand Book v2.0 (https://claude.ai/code/artifact/07866951-f1ef-4cb2-8972-7363685a1192), which was built on the founder interview of 13 September 2026. The previous system, Porcelain Intelligence, and the second-brain positioning are retired. **The live site at www.dorareason.com still implements the retired system.** This file describes the system the site is being rebuilt into. Do not add new work in the retired system; do not mix the two on one page.

Every rule below carries a status:

- **Decided**: confirmed by the founder in the interview. Changing it is a new decision, logged in the changelog with a reason.
- **Proposed**: drafted in the brand book and not yet adopted. Build to it, but expect it to be amended.
- **Open**: a known gap or unanswered question.

## 1. Brand thesis (Decided)

- **DORA Research is an applied AI lab.** It builds agents that take over specific operational work in engineering organizations, and it says plainly which work that is. People keep judgment and accountability; the agents keep the record, the watch, and the follow-through. Research, benchmarks, and frameworks are published before they become products, in the ElevenLabs sense.
- **Zora is the first product.** A technical director and chief of staff who reports to the CTO. Buyer and daily user are the same person: the CTO or VP Engineering.
- **The promise is delivery, not memory.** Ship faster, break less. The lab is named for the DORA metrics, two dimensions of software delivery, throughput and stability, and adds a third measure of its own, quality. Memory, connecting meetings, tickets, code, docs, and system signals, is how Zora works, never what she is for.
- **Authority.** Today Zora advises with evidence. Within a year she acts, one action at a time, per customer, after a shadow period: hold a deploy, open a ticket, page the on-call on a published rule.
- **The three questions** Zora answers before they are asked: What happened last night? Where are we with this project, and why? Where are we most at risk?
- **Two enemies:** the status meeting that reconstructs last week, and being caught off guard.
- **One feeling** at 06:04, when the brief is read: calm and in control, knowing exactly what to ask first.
- **Say AI and agents plainly.** Never copilot, assistant, chatbot, second brain, teammate, digital employee.
- **Zora is she.** She has a name, a voice, and a 6 px dot. Never a face, an avatar, a robot, or an orb. The name comes from the ship's mind in Star Trek Discovery; that reference stays inside the company and nothing customer-facing is science fiction.

## 2. Brand architecture and naming

| Element | Rule | Status |
| --- | --- | --- |
| DORA Research | The lab. Four capitals then title case. Descriptor on first mention: *an applied AI lab*. Signs research, the company page, and every product page footer. | Decided |
| Zora | The first product. Title case, no article, no suffix, never "it". Subject of her sentences: Zora reads, Zora found, Zora recommends. | Decided |
| Zora by DORA Research | Attribution line on every product surface and page foot. | Decided |
| a technical director who reports to the CTO | What Zora is, in one clause. Say the reporting line; it is the positioning. | Decided |
| the night brief | The product's central artifact. Lowercase in running text. | Decided |
| private beta | The stage. Never waitlist, early access, or launch. Invitation: *Give Zora one night. Read the brief at 06:00.* | Proposed |
| The lab speaks as "we"; Zora speaks as "I" | The lab never speaks in Zora's first person. | Proposed |
| Product family | Every product ships with its own name, its own mark (see §3.2), and its own register. The swarm never identifies a product. | Decided |

Retired terms, never reuse: *a second brain for work*, *organizational memory* as a promise, *Starting with product + technology*, *Remember · Connect · Anticipate · Prove* as marketing, *Porcelain Intelligence*, *Work moves. Zora remembers.*

## 3. Marks

### 3.1 The lab's mark: the swarm (Decided, geometry unchanged)

Thirteen dots in orbit, one seat open. Thirteen specialists, each with one job, around a center that is not drawn. The open seat at the upper right is where the next specialist stands. The geometry has survived every repositioning and is not up for discussion. Source of truth: `src/components/Logo.tsx` and `public/favicon.svg`.

24-unit frame. Ring center 12, 12, radius 8.5, seats every 30° counterclockwise from dot 1 at three o'clock. Open seat at 16.25, 4.64 (60°). Two trailing dots inside the ring.

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

- **Gradient:** two stops, `userSpaceOnUse`, from 3, 21 to 21, 3. Living Green `#3D8B68` at the lower left to Signal Cyan `#03F5F2` at the upper right. Living Green and Signal Cyan appear nowhere else in the Paper register. On Night, cyan survives only as the 6 px dot beside Zora's name.
- **Variants (Proposed):** gradient in the masthead, the favicon, and the cover of a published artifact; ink-only (`#141D18`) in running lockups on paper; Paper (`#F5F7F2`) on Night.
- **Motion (Proposed):** static. The 22-second spin retires with the Porcelain register. The open seat is the meaning; a rotating mark has no open seat.
- **Lockup (Proposed):** mark at 24 px, 10 px gap, "DORA Research" in Geist 500 at 15 px on one line. The two-size DORA / Research treatment retires.
- **Clear space and minimum (Proposed):** half the mark's height on all sides; 20 px alone on screen, 22 px inside a lockup, 6 mm in print. The favicon tile (64-unit, 14-unit radius, Warm White `#F7F5EF`, mark scaled 2.5× and centered) handles 16 px with heavier dot radii.
- **Misuse:** never stretched, never a fourteenth dot, never re-angled, never glow, pulse, or spin.

### 3.2 Zora's mark: the open seat (Proposed)

Derived on the lab's ring and never redrawing it. One flat disc stands in the swarm's open seat; one chord joins two seats on the ring and is the line of evidence she stands on. Derive at the ring, then translate the whole figure +2 in y so its optical center sits near the frame center. Never center the disc horizontally; the 60° offset is the mark.

```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <circle cx="16.25" cy="6.64" r="3"/>
  <rect x="3.74" y="17.35" width="16.52" height="1.8" rx="0.9"/>
</svg>
```

- Disc: cx 16.25, cy 6.64, r 3.0. Chord: seat to seat x 4.64 → 19.36 (seats at 210° and 330°, dots 7 and 11), end to end 3.74 → 20.26, y 18.25, 1.8 thick, round caps r 0.9.
- Ratios: chord 16.52 end to end, 2.75× the disc diameter, never under 2.4×. Thickness 0.3× the diameter, never more (a thicker bar reads as ball-and-paddle).
- Color: `currentColor`. On paper the mark is Ink. On Night the disc is Paper and the chord may dim to Ash from 24 px upward; below 24 px both are Paper. The disc never takes Mint, Signal Cyan, the lab gradient, or a status color.
- Lockup: mark at 24 px, the word Zora in Geist 500, and on Night the 6 px Signal Cyan dot. The dot reports live state: steady while watching, one 600 ms blink on a real ingest, Ash when disconnected. On paper there is no dot.
- Favicon: 16 px, chord snapped to one device row, disc unchanged. Beside the swarm at equal height, set Zora's box at 1.08× for optical parity; the geometry does not change.
- Family rule for every future product mark: one flat disc, r 3.0, in the open seat, plus straight chords of the ring, 1.8 thick with round caps, joining ring seats. Products differ only in which chords they draw. No second disc, no arc, no ring, no color on the disc, same frame offset for all.
- Misuse: colored disc, centered disc, bar over 0.3×, glow, gradient, 3D, rotation, animation.

## 4. Registers

One company, two grounds. The lab is Paper in daylight. Zora is the same paper read in the dark at 06:00. They share Geist, IBM Plex Mono, the mark family, and the signal logic. They differ in ground, display face, and how much color is allowed.

### 4.1 Paper (the lab) — Proposed

| Token | Value | Use | Contrast on Paper |
| --- | --- | --- | --- |
| `paper` | `#F9F7F2` | Page ground. Warm, not cream. | ground |
| `evidence` | `#EDEAE2` | Recessed ground for quoted sources, code, logs, benchmark tables. Always bounded by a Rule hairline. | 1.1 |
| `ink` | `#141D18` | Display, body, diagrams, ink-only mark. | 16.1 |
| `pencil` | `#566460` | Secondary text, captions, interactive borders. | 5.8 |
| `rule` | `#D5D1C7` | Hairlines only. Never text, never the sole boundary of a control. | 1.4 |
| `green` | `#2A6449` | Living Green Deep. Links, the primary action, the focus ring, the one line in a figure, provenance markers. The only accent. | 6.5 |
| `risk` | `#AD3547` | Risk text and a 2 px keyline on a risk callout. Never a fill. | 5.8 |

Reserved: Living Green `#3D8B68` and Signal Cyan `#03F5F2` exist only inside the swarm gradient. Undarkened Living Green fails AA as text (3.9) and is never a link color.

The one dark section on a lab page, where paper hands to Zora, is painted Night Floor `#0A0F0C` and uses the Night tokens. Living Green Deep on Night Floor measures 2.4 and is not used there.

Never on paper: a chat input, chat bubble, sparkle, avatar, or copilot framing (even in an embedded Zora crop, which shows a finished brief); italic display as decoration; motion on the mark; purple, orange, a second green, or any gradient on a surface; stock photography; an icon set (the lab has the mark, mono markers, and figure arrowheads).

### 4.2 Night (Zora) — Proposed

| Token | Value | Use | Contrast on Night Floor |
| --- | --- | --- | --- |
| `night` | `#0A0F0C` | Canvas and the black point every film plate is graded to. Scrim over film at 0.80 to 0.88 alpha. | ground |
| `raised` | `#131E18` | Evidence panels and row hover. Separation is a 1 px Line, never a shadow. The transcript stays on the canvas. | 1.1 |
| `subtle` | `#19261F` | Second surface step only. Never a ground for interactive controls. | 1.2 |
| `line` | `#2B3932` | Hairlines, table rules, panel borders. | 1.6 |
| `line-strong` | `#5D6C64` | Focus rings, input borders, any boundary a user must perceive. | 3.5 |
| `paper` | `#F5F7F2` | Text. | 17.9 |
| `ash` | `#A4B1AA` | Secondary, provenance, nominal status. Most of the page. | 8.7 |
| `mint` | `#67BF99` | The one recommended action, the one evidence link. One per viewport, always paired with a word. Never a glow, a surface, or large text. | 8.7 |
| `rose` | `#F08A9A` | The one named risk, the hold state. Text or a 2 px rule with a word. Never a fill. One per viewport. | 8.1 |
| `cyan` | `#03F5F2` | A 6 px dot beside the name Zora. Never larger than 8 px, never text, border, fill, or in the film grade. | dot only |

Only the canvas changes from the tokens shipping today (`#0D1511` → `#0A0F0C`), so film has a black to fall into.

The UI never inherits the film grade: grain, warmth, and color live in the plate; the interface stays cool, flat, and ungraded.

### 4.3 CSS tokens

```css
:root {
  /* Paper */
  --paper: #F9F7F2; --evidence: #EDEAE2; --ink: #141D18; --pencil: #566460; --rule: #D5D1C7; --green: #2A6449; --risk: #AD3547;
  /* reserved, mark only */
  --living: #3D8B68; --cyan: #03F5F2;
  /* Night */
  --night: #0A0F0C; --raised: #131E18; --subtle: #19261F; --nline: #2B3932; --nstrong: #5D6C64; --npaper: #F5F7F2; --ash: #A4B1AA; --mint: #67BF99; --rose: #F08A9A;
  /* type */
  --serif: 'Newsreader', Georgia, 'Times New Roman', serif;
  --sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --mono: 'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace;
  /* motion */
  --ease: cubic-bezier(.2, 0, 0, 1); --t-state: 120ms; --t-arrive: 160ms; --t-layout: 240ms;
}
```

## 5. Typography (Proposed)

Three families across the company, each with one job. **Newsreader** is the lab's voice for display and ledes. **Geist** is what people read and operate, on paper and on Night. **IBM Plex Mono** is what a machine recorded. Two of the three are shared so the lab and Zora read as one company on two grounds. No serif in the product.

Google Fonts, one link, preloaded and swapped:

```
https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..500&family=Geist:wght@400..600&family=IBM+Plex+Mono:wght@400;500&display=swap
```

`font-feature-settings: 'tnum'` globally so inline numbers align.

### 5.1 Paper scale

| Role | Face | Size / line | Notes |
| --- | --- | --- | --- |
| Display | Newsreader 500 | 64 / 66 · −0.015em · opsz 72 | 46 / 50 on mobile |
| Section | Newsreader 500 | 40 / 46 · −0.012em | 32 / 38 on mobile |
| Lede | Newsreader 400 | 22 / 32 | italics for margin notes and at most one lede |
| Body | Geist 400 | 17 / 28 | 64 to 72 ch measure |
| UI | Geist 500 | 14 / 20 | buttons, links, nav |
| Meta | Plex Mono 500 | 12 / 16 · +0.06em · caps | artifact headers, eyebrows |
| Data | Plex Mono 400 | 13 / 20 · tabular | |

### 5.2 Night scale

| Role | Face | Size / line | Notes |
| --- | --- | --- | --- |
| Display | Geist 500 | 44 / 48 · −0.02em | 32 / 36 mobile; left-aligned, ragged right, never centered; the brief's first sentence is the title card |
| Section | Geist 500 | 22 / 28 · −0.01em | preceded by a Plex Mono index in Ash: 01 Impact and outcome, 02 Conditions, 03 What we change, 04 Where else |
| Body | Geist 400 | 16 / 26 | 60 to 68 ch |
| UI | Geist 500 | 14 / 20 | |
| Caption | Geist 400 | 13 / 18 | Ash |
| Data | Geist 500 | 13 / 20 · tabular | right-aligned numerics, units in the header |
| Provenance | Plex Mono 400 | 12 / 16 · +0.02em | Ash, Paper on hover |
| Timecode | Plex Mono 500 | 11 / 16 · +0.08em · caps | Ash |

Tracking tightens as size grows; only mono is tracked open. Sentence case everywhere except mono strings. Interface text never below 11 px.

## 6. Layout (Proposed)

### 6.1 Paper principles

1. **Rules, not cards.** Structure is 1 px hairlines on an 8 px rhythm and one recessed Evidence surface for source material. Radius 0 on containers, 2 px at most on controls. No shadows, no glass, no tinted section backgrounds, no white plates on grey.
2. **Left-anchored, with a live margin.** A 680 px reading column set left of center on a 12-column grid at 1200; the right margin carries figure numbers, footnotes, dates, and citations. Nothing is centered except the mark in the masthead.
3. **Every number has a source; every artifact has an ID.** A specimen header on every benchmark, framework, and brief: ID, version, date, evidence. Artifact IDs: `DR-FW-###` framework, `DR-BM-###` benchmark, `DR-NT-###` note. Superscript mono markers in Living Green Deep resolve in the margin (desktop) or section foot (mobile). A number without a footnote does not ship.
4. **The page arrives finished.** No fade-ups, staggers, parallax, counters, chart draw-on, typing, or streaming.
5. **One Night section per page** is where paper hands to Zora: a full-bleed block painted Night Floor, hard rectangular edge, real product at real density, no device frame, no tilt, captioned in mono with a figure number, place, and time.

Pages run in pipeline order: question, benchmark, framework, product. The product page cites the artifacts it came from.

### 6.2 Night layout

- **The strip**, always present at first paint: the 24 px Zora mark, the word Zora with the dot, three tabs for the three questions (Last night · Projects · Risk), and compiled-at in Plex Mono.
- **Grid:** 12 columns at 1280 with 80 px margins. Brief in columns 3 to 9, evidence rail in 10 to 12, film plate behind all 12. At 390 the rail becomes footnotes and the plate crops 4:5.
- **The brief:** one column, four numbered parts in fixed order. Header line in mono (`Night brief · 2026-09-10 · 06:00 · 6 records`), then the title card.
- **Evidence:** every claim carries a Plex Mono source (system · time) in the rail or inline; opens in place on Raised with a 1 px Line border. Never a modal, never a shadow.
- **Dialogue:** a transcript below the brief in the same column, speaker as a Plex Mono name in the gutter, composer a single hairline at the foot. Never a chat box.
- **Radius:** 0 on plates and panels, 4 px on controls. Nothing is a pill.
- **Depth:** a 1 px Line border and one luminance step. No shadows, no glass, no glow.

### 6.3 Controls

Buttons 40 px tall on paper (36 px inside the product), 14 px Geist 500 label, 16 px horizontal padding, radius 2 px on paper and 4 px on Night. A label never wraps. Paper primary: `green` fill, `paper` label. Night primary: `mint` fill, `night` label. Focus ring 2 px with 2 px offset: `green` on paper, `line-strong` on Night.

## 7. Motion (Proposed)

- One curve: `cubic-bezier(.2, 0, 0, 1)`. Three durations: 120 ms state, 160 ms arrive, 240 ms layout.
- The brief and every answer arrive whole in a 160 ms fade with an 8 px rise. If the brief is not ready, yesterday's brief stands with its Ash timestamp. Never a compiling line, never a pulse, never a thinking state.
- Navigation between the three views is a hard cut with a 120 ms hold on canvas. Hover is a value step (Ash to Paper, row to Raised), never a glow or a lift.
- The mark is static everywhere. The cyan dot moves only for a real event.
- Film plates may push once from 1.00 to 1.04 over 8 to 12 seconds and never loop. Paused offscreen and in hidden tabs.
- `prefers-reduced-motion`: everything to 0 ms, dot solid. Nothing a reader needs depends on motion.

## 8. Voice and copy

### 8.1 The lab (Proposed)

The lab writes as "we". It names the work agents take and the work people keep in the same sentence. It says AI. It cites an artifact ID where a marketing page would cite a logo, and it marks unknowns as unknown. Two beats, then stop. Write for the reader's real constraints, never a budget they do not have.

Company paragraph, first mention: *DORA Research is an applied AI lab. We build agents that take over specific operational work in engineering organizations, and we say plainly which work that is. People keep judgment and accountability; the agents keep the record, the watch, and the follow-through. Our research, benchmarks, and frameworks are published before they become products, and our products are held to the two metrics we are named for, throughput and stability, and to a third we add: quality.*

### 8.2 Zora (Decided structure, Proposed rules)

The voice is modeled on a real technical director the founder worked with, referred to internally as Burli. That name never appears on a customer-facing surface.

The four-part brief, in this order, always:

1. **Impact and outcome.** Who was affected, how it was mitigated, what is still open.
2. **Conditions.** The circumstances that let it happen. No blame, no speculation. Unknowns marked as unknown.
3. **What we change.** How the organization operates differently so it does not recur, sized to this company's constraints.
4. **Where else.** Other places the same conditions exist and what to do there. Then she names the decider.

Voice rules: Zora is the subject of the sentence. Adjectives are measurements. Every claim carries a record with a source and a 24-hour time, or is cut. Conditions, not blame. Two beats, then stop. The brief arrives finished; life is in the dialogue after it. Board-fluent and SRE-fluent in the same paragraph. Say what she takes and what the person keeps whenever she is described.

Zora in her own words: *I am Zora. I report to the CTO. Overnight I read what the organization produced: the deploys, the alerts, the tickets, the threads. At 06:00 you get a finished brief: who was affected, what led to it, what we change, and where else it applies. Then I stay in the room for the questions. I will tell you what I know and what I do not.*

### 8.3 Lines (Proposed)

| Where | Line |
| --- | --- |
| Lab hero | Agents take the work. People keep the judgment. |
| Research | Benchmarks first. Products second. |
| Research, alternate | Applied AI. Published before it ships. |
| The mark's caption | Thirteen agents. One job each. |
| Zora hero | She reads the night. You read the brief. |
| Zora subline | Ship faster. Break less. |
| Night brief section | 06:00. The brief is finished. |
| Three questions | Three questions. Answered before the meeting. |
| Delegation | She takes the task. You keep the call. |
| Evidence | Every line has a source. Every source has a time. |
| Beta invitation | Give Zora one night. Read the brief at 06:00. |
| Footer | DORA Research. An applied AI lab. |

### 8.4 Vocabulary

Use: Zora, she, her brief · the night brief · AI, agents, a swarm of agents · an applied AI lab · impact, conditions, what we change, where else · record, evidence, source · commitment, owner, decision, deadline · at risk, exposure · hold, mitigated, rollback, baseline, on-call · ship faster, break less · throughput, stability, quality · advise, recommend, hold a deploy, open a ticket, page the on-call, assign by rota · reports to the CTO · judgment, accountability, authority, sign-off · Linear, GitHub, Datadog, PagerDuty, Slack, Jira, Dovetail · finished, complete, in the room.

Avoid: copilot, assistant, chatbot, bot, avatar, persona · AI teammate, digital employee, virtual employee, team member · second brain, knowledge base, single pane of glass, command center, mission control · insights, actionable, real-time (state the time), surface as a verb · AI-powered, intelligent, smart, magic, seamless, effortless, never sleeps · unlock, empower, leverage, transform, supercharge, 10x, revolutionary · root cause (say conditions) · we think, probably, likely without a record · best practice, unqualified · thinking…, analyzing…, generating…, chat with your data · it, for Zora · am/pm times · em dashes · exclamation marks · emoji.

### 8.5 Mechanics

Sentence case. 24-hour times. ISO dates inside the product (`2026-09-10`). Middle dot `·` separates metadata fields. `→` only inside product UI to show a relationship. Typographic quotes and apostrophes in typeset copy. No em dashes, no exclamation marks, no emoji anywhere.

## 9. Product surfaces

The reference frame is the night brief (brand book chapter 9, Fig. 9.1): strip, brief, evidence rail, transcript. Every product frame must pass:

1. Persistent chrome: the strip with mark, name and dot, three tabs, compiled-at.
2. Operational metadata on every record: source, timestamp, owner.
3. At least one selectable state that changes what the inspector shows.
4. Every conclusion traces to a record with a time and an owner.
5. Real names: Linear, GitHub, Datadog, PagerDuty, Slack. Tickets look like tickets: ORD-1187, PR #4712, incident 2291.
6. No dead controls, no stale placeholders, no invented metrics, no lorem. Demo data is the canonical specimen with visible provenance and a demo label.
7. Interface text at 11 px or larger; the frame is legible at the size it ships.
8. Flat and ruled. No glow, no glass, no floating layers.

The canonical specimen: an overnight non-concurrent `CREATE INDEX` on a 61-million-row `orders` table holding a SHARE lock for 14 minutes, mitigated at 02:55, with the same pattern queued for tonight. Reuse it rather than inventing new incidents; any new specimen must survive a senior engineer's read.

## 10. Media and film (Decided direction, plates Open)

Engineering documentary, as SpaceX films the rocket and Waymo films the car. The canonical film, in order: **the CTO at 06:00 reading the night brief; the product at real scale on a real screen; the systems it watched last night; the incident room.** Four shots, one cut each, 16:9 with a dedicated 4:5 crop, no loop.

Rules: real machine, real scale, screens shot in camera, no screen replacement, no device frames. Real people at real work: no posing, no whiteboard staging, no handshake, no server room, no robot, no glowing brain, no abstract network. Graded to Night Floor; grain, warmth, and skin stay in the plate; the UI is never graded. Licensed masters only; a watermarked or synthetic clip is a composition preview and ships nowhere. Stills on paper go near-monochrome so the mark stays the only chroma.

**Open:** the plates in `public/media/` are stand-ins from the retired system (a desk-typing loop and a code-tablet loop; the handoff plate carries a residual stock watermark). They retire when the storyboard is shot and must not be used in new material.

## 11. Target site architecture (Proposed)

The lab leads. Zora is met second, on her own Night page.

| Surface | Target |
| --- | --- |
| Structure | Company page (Paper) → Research (Paper) → Zora (Night). One Night section on the company page hands off to the product. |
| Title tag, lab | `DORA Research · An applied AI lab` |
| Title tag, Zora | `Zora · She reads the night. You read the brief.` |
| Meta description | DORA Research is an applied AI lab. Agents take the work; people keep the judgment. Zora, its first product, is a technical director who reports to the CTO. |
| Navigation | Research · Zora · Company · Request private beta |
| Lab hero | *Agents take the work. People keep the judgment.* on Paper, no photography. |
| Zora hero | *She reads the night. You read the brief.* with *Ship faster. Break less.* over the 06:00 plate. |
| Eyebrow | `ZORA BY DORA RESEARCH` on Zora's page; the artifact header on lab pages. |
| Product tabs | Last night · Projects · Risk. The Atlas release story may return inside Projects. |
| Beta call | *Give Zora one night. Read the brief at 06:00.* Contact `hello@dorareason.com`, subject *Zora private beta*, until a form exists. |
| Footer | `DORA Research. An applied AI lab. · © 2026` in Plex Mono. |
| Social cards | Two: the lab line on Paper; Zora's line over the 06:00 plate with the night brief. |
| Favicon | Unchanged swarm on Warm White. Zora's page may carry her own favicon once the mark is adopted. |
| Anchors | Keep an 84 px scroll margin under a fixed header. |

## 12. Accessibility

Semantic heading order, labelled fields, keyboard-accessible navigation, visible focus rings, a skip link. All text pairs above meet AA; secondary text meets AAA on both grounds. Specimens are real HTML (`role="figure"` with a label), never images. Looping media is paused offscreen, in hidden tabs, and under reduced-motion or save-data settings. No information is carried by color alone: Mint and Rose are always paired with a word.

## 13. Governance

- **Precedence:** the founder's decisions in the changelog → the brand book at its current version → this file → the live site, which is ground truth for what exists today and nothing else.
- **Superseded, do not regress:** a prediction-market operator with AI operations underneath; secure AI teammates for infrastructure operations; a consumer personal-memory organizer; a second brain for work with the lab as a byline (the site as of 13 September 2026). The thirteen-dot mark did not change through any of them and does not change now.
- **Open items:** trademark search on the name Zora before her page ships; sign-off on every Proposed item; the lab body face (Geist shared with Zora, or IBM Plex Sans); confirm the static mark before the header is rebuilt; commission the four-shot film; print recipes for Ink, Living Green Deep, Living Green, Signal Cyan, and Risk (proof against hex, never convert arithmetically); define what "ready for Reported" means in the Accountability Line, or publish that the lab does not yet know.

### Changelog

| Date | Version | Change | Source |
| --- | --- | --- | --- |
| 2026-09-13 | 2.0 | Rewritten from the brand book v2.0: lab plus first product; Paper and Night registers; Zora positioned as a technical director reporting to the CTO; promise moved from memory to delivery; night brief as the central scene; four-part voice; AI said plainly; product marks; static swarm; The Accountability Line v0.1 as the lab's first published framework. Porcelain Intelligence and the second-brain positioning retired. | Founder interview, 13 Sep 2026 |
