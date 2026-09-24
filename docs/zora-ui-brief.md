# Zora product UI brief

Version 1.2 · 23 September 2026 · DORA Research, Inc.
Changed in 1.2: brought in line with the mockup as shipped on 23 September (status as words, no icon badges, calls as rows, new panel and sidebar widths, the live demo). Where the demo simplifies the product, the brief keeps the product spec and says what the demo does instead.
For: the senior UX/UI designer building Zora's product interface.
Owner: John Brackens (founder). Reply to hello@dorareason.com with questions.

---

## 0. How to read this

You are designing the real product behind the mockup on https://www.dorareason.com. That mockup is a working demo with demonstration data: the sidebar opens all twelve screens (Brief, Your calls, Today, Commitments, Decisions, Projects, Incidents, Delivery, People, Sources, Authority, Settings), decisions update everywhere, new records arrive after 06:00, and the ask box answers questions from the demo's record. It is the visual and tonal reference for everything below: the palette, the type, the density, the way Zora speaks, and the shape of a decision. Its source is a single file, `public/coming-soon.html` in the site repository, and every token and component measurement in section 8 is taken from it as shipped on 23 September, so you can open the live page, inspect, and trust the numbers. The page draws the window at a fixed 1000 px and scales it to fit the marketing layout; the product itself is a normal fluid app.

What you are building is larger than the crop: eleven screens, a component library, the states between them, and the panel where Zora works. This brief gives you the product logic, the information architecture, the anatomy of every screen and component, the design system, the voice, and the deliverables. Where a decision is still open it says so and names a default.

Three facts that govern everything:

1. **Zora is an AI Chief of Staff for CTOs.** She is "she". She is never described as an assistant, a copilot, a bot, "it", or a dashboard. She is not a second brain and not a reporting tool; the morning brief is one thing she produces, not what she is.
2. **She advises with evidence; the CTO decides.** Nothing in the interface may make a decision for the CTO, hide the evidence behind a claim, or imply she acted without authority. Every held decision names the person who decides. This is the product's contract and the interface must make it visible on every screen.
3. **Calm and in control.** The CTO who has read the brief at 06:04 is calm, knows what happened, and knows which question to ask first. The interface should feel like that person's desk, not like a control room.

---

## 1. What Zora is

DORA Research is an applied AI lab. Zora is its first agent. She works for one accountable person, the CTO (or VP Engineering), who is also the daily user. She reads what the engineering organization produces across its systems (issue trackers, code hosting, observability, paging, chat, calendar), keeps the record of commitments, decisions, and risks, and brings the CTO the calls that need a person, with the evidence attached, before the CTO has to ask.

Her two enemies:

- **The status meeting that reconstructs last week.** The past the CTO should already have. The brief exists so the meeting does not.
- **Being caught off guard.** The future the CTO should have seen. The conditions were there on Tuesday; the brief says so on Tuesday.

Her authority, which the interface must express plainly:

- **Today:** she advises. Every recommendation is a proposal. She names who decides and does not decide.
- **Within a year:** she acts, one action at a time, per customer, after a shadow period: a ticket opened when a written condition is met, a page on a published rule, a deploy held where release is one click from the on-call. Each such action appears in the next brief with the rule that fired and who wrote it. Demotion is one message.

The promise is delivery: ship faster, break less. Memory is how she does it, not what she is for.

Two words to keep distinct in copy: **the record** (singular) is the organization's institutional memory that Zora keeps; **records** (plural) are the atoms of evidence she cites. Section 6.2a defines a record.

---

## 2. Who uses it

**Primary: the CTO.** Persona in the mockup: Dana Kim, CTO of TransparentAI, an engineering organization of 62 people. Reads the brief at 06:00 on a laptop, sometimes on a phone in transit. Has twelve things on the calendar and wants to know three: what happened last night, where each project stands and why, and where the organization is most at risk. Will not read instructions. Scans first, reads second. Values being told what she does not know and being asked only for the calls that need her.

**Secondary: the people Zora names.** Engineering managers and leads (Elena Ruiz, Priya Nair, Tomas Berg, Marcus Lind in the demo data) who appear as owners on commitments, decisions, and calls. In v1 they do not have their own workspace; they may receive messages from Zora and see items shared by the CTO. Design for them as recipients, not as users.

**Contexts:** 06:00 at a desk (the brief, full width); a phone between meetings (one call to make, one thread to read); a meeting room (the incident review she prepared, on a shared screen). The first is the primary layout; the other two must not be afterthoughts.

---

## 3. Principles

1. **The brief arrives whole.** No progressive loading of the morning brief; it is compiled before the CTO opens it and appears as one finished thing. Life is in the dialogue after it.
2. **Evidence on every claim.** Every statement Zora makes carries its source and time (Datadog 02:41, PagerDuty incident 2291, Slack #incident-2291, Linear ORD-1187). Evidence is one interaction away, never more.
3. **She advises, you decide.** Decisions are cards with two explicit actions and a named decider. Zora's recommendation is visible but never pre-selected. There is no "auto-approve".
4. **Density like a real tool.** 12 to 13 px body text inside the app, 1 px rules, 20 px chips, tabular figures. It should look like software a CTO uses every day, not a landing page.
5. **One accent.** The lab's deep green is the only action colour in the light shell. Status colours are semantic and always paired with a word.
6. **No chat-first.** Zora has a panel and you can ask her things, but the product is the brief and the record, not a message thread. No chat bubbles as the primary surface, no avatar, no face, no sparkle icon.
7. **Plain language.** Short sentences, concrete nouns, times and counts. No hype, no exclamation marks, no "AI-powered".

---

## 4. Information architecture

The workspace is the customer's engineering organization. The sidebar has three groups. Counts in the sidebar are live and mean something specific. "Live" means recalculated whenever the CTO opens or returns to the app; a count never changes under the CTO's cursor without a page action.

### Workspace switcher (top of sidebar)
Customer organization name and unit, e.g. "TransparentAI / Engineering · 62 people", with a 20 px monogram tile and a switcher chevron. One workspace per customer in v1. The chevron is not rendered for a single-workspace customer; the row is the monogram tile and the name only. It appears the day a second unit is added.

### Today
- **Brief** (home). The morning brief. Count shows the compile time, "06:00".
- **Your calls.** The queue of decisions Zora is holding for the CTO. Count = open calls (2 in the demo). This is the most important secondary screen: everything held, each with its deadline. Anatomy: a single column of call cards (section 7), full width, grouped under "Due today", "Due this week", and "No deadline"; within a group, nearest deadline first, so a same-day call always sits above a Friday one regardless of which was raised first; calls with no deadline sort oldest first. Deciding a call here uses the same two buttons and outcome line as the panel, and updates the Brief, the panel, the Projects row, and the Decisions log the moment it is chosen.
- **Today.** The calendar for the day with what Zora prepared for each item. Count = items prepared (4).

### Organization
- **Commitments.** Everything someone said they would do, with owner, date, and state. Count = tracked this week (14).
- **Decisions.** The decision log: who decided what, when, on what evidence. Draft decisions live here too.
- **Projects.** The four to twenty things the organization is delivering, each with owner, status, next milestone, and the *why* behind the status. Count = active projects.
- **Incidents.** Past and open incidents with Zora's reviews. Count = open (1).
- **Delivery.** The four DORA measures (deployment frequency, lead time, change failure rate, time to restore) against the organization's own baseline, with the deploy chart.
- **People.** The directory Zora reasons about: roles, rotas, who owns what, who has left. Count = people (62).

### Zora
- **Sources.** The connected systems, what was read, when, and any gaps. Count = connected (6).
- **Authority.** The accountability line: what Zora may do on her own, what she must hold, per rule, with history. This is where the "within a year" actions get switched on, one at a time.
- **Settings.** Workspace, the brief's time and recipients, notifications, people and roles.

### Sidebar foot
The signed-in person: avatar initials, name, role ("DK · Dana Kim · CTO").

### Zora's panel (right, persistent)
Her working surface. Present on every screen, collapsible. See section 6.

---

## 5. The Brief (home screen)

The layout in the mockup is the canonical desktop layout: sidebar 184 px, the brief taking the remaining width, Zora's panel 272 px (the mockup draws this at 1000 px and scales it; the product is fluid from 1000 px up). Above 1400 px the grid stays 6 columns; widgets get more room up to a max content width of 1240 px (section 12). That breakpoint is new product spec; the mockup only defines 960 and 640.

### 5.1 Greeting block
- Heading: "Morning, boss." 22 px / 600 / letter-spacing −0.02em. The greeting is time-of-day aware ("Morning", "Afternoon", "Evening") and always addresses the CTO as "boss". This was the founder's call; keep it.
- Sub-line, 12.5 px muted: what she did and what needs the CTO. Canonical: "Read 1,204 records from six sources between 05:12 and 05:58. One incident overnight, mitigated. Two things need your call."
- Right: the compile time as plain text, faint, 11.5 px: "Compiled 06:00 · Mon 21 Sep". No pill, no tint, no icon, and no other controls in the greeting row.

### 5.2 Widgets
Widgets are cards on a 6-column grid with 12 px gaps: `c3` is half width, `c4`/`c2` a two-thirds/one-third pair, `c6` full width. Every widget has a header (title and a right-aligned meta; no icon badge), a body, and an optional footer line with one link. Order is by urgency, and the first row is fixed:

**Row 1 (always): Overnight · Needs your call.**

**Overnight** (`c3`). What happened since the CTO last looked.
- Title line: the incident in one sentence ("EU order writes blocked for 14 minutes") with a status chip (Mitigated / Ongoing / Recovered).
- Sub-line: impact, scope, window ("40 checkouts failed · orders_eu · 02:41–02:55").
- Timeline: mono time, a dot (risk / neutral / action / ok), the event, and the source in muted text. Five to eight events; "show all" beyond that.
- Footer: cause in one sentence and one link ("Where else →", which opens the pattern search). Pattern search opens as a modal over the Brief: a short list of the other places the same condition holds today (the project, table, or service, and the matching evidence), each row linking to its own screen. It is not a separate navigation item.
- Meta: "Incident 2291 · review", the link to the review she prepared.
- Empty state: "Quiet night. 1,204 records read, nothing needed you." with the sources line.

**Needs your call** (`c3`). The decisions she is holding.
- Meta: "2 held for you".
- Body: call cards (section 7), most urgent first. Never more than three here; the rest are on Your calls with a count link.
- Empty state: "Nothing held. The last call you made: …" with the most recent decision.

**Row 2: Delivery · Sources.**

**Delivery** (`c4`). Four figures with deltas against the organization's own last-30-day baseline, then the chart.
- Figures: Deploys / day (14.2, ▲ 8% vs Aug), Lead time (1.8 d, ▼ 0.3 d), Change failure (3.1%, ▼ 0.4 pt), Time to restore (22 min, ▲ 4 min · 2291). Mono 26 px, label 11 px above, delta mono 11 px below, coloured by direction of goodness, not by sign.
- Chart: production deploys per day, 30 bars, weekends at 35% opacity (the mockup's legend swatch says 30%; fix the legend, not the bars), a 7-day average line with a soft area fill, a legend row above right.
- Footer: "Production deploys per day, 30 days; weekends shaded." and the link "Throughput, stability, quality →".

**Sources** (`c2`). Big mono figure "1,204" and "records read tonight · 05:12–05:58", then a list of the six sources with a 22 px letter tile in the vendor's colour and the count read. Sources with a problem show a chip (Stale / Disconnected) instead of the count.

**Row 3: Commitments · Today.**

**Commitments** (`c3`). Figure "14 tracked · 9 kept · 3 open · 2 slipped", a segmented progress bar (success / success-mid / risk), then a list: avatar, title, owner and date, a chip (Kept / Open / Moved / Slipped). The summary and the chip vocabulary must reconcile: every row belongs to one of the summary's buckets.

**Today** (`c3`). The day's calendar: mono time, title, what she prepared ("4 parts · 8 records"), a chip (Ready / Drafted / Zora, when it is her own task).

**Row 4: Decisions** (`c6`). A list of the week's decisions: title, who and when, record count, chevron; drafts carry a "Draft" chip. Meta counts finalised decisions this week and excludes pending calls and drafts; with the canonical data that is 2 finalised, 1 pending, 1 draft, so the meta reads "2 recorded", not "4". Footer: "Each with who decided and the evidence behind it." and "All decisions →". The mockup demonstrates the fan-out: the moment 0043 is decided, a row "Migration 0043 held until off-peak" with "You · Mon 21, 06:05 · decided from the brief" appears at the top of the log with a brief highlight. The product row also carries its record count ("4 records").

**Row 5: Projects** (`c6`). A table: Project, Owner (avatar and name), Status chip (On track / At risk / Held), Next milestone (mono date), Why (a sentence, wrapping), Records (mono count). The *Why* column is the point of the table; the status without the why is the status meeting she replaces.

### 5.3 Rules for the Brief
- It is compiled at the customer's chosen time (default 06:00 local) and dated. Reopening it later in the day shows the same compiled brief plus a "Since 06:00" strip if anything changed. The strip sits between the greeting and the widget grid, one line per change ("New call: on-call rota…", "Incident 2291: recovered"), each linking to the changed widget; it is not dismissible and disappears at the next compile. The demo simplifies this to a single line under the greeting that starts "Watching six sources." and replaces itself with the latest arrival and a count ("06:09 · Linear · ORD-1187: 38 of 40 retries settled.  2 new"); the product keeps one line per change, each a link.
- Every widget's meta or footer carries the one link that goes deeper. No widget has more than one. The demo builds no modals or detail pages, so each of these links asks Zora instead and she answers in her panel: the review, where else the condition holds, the delivery picture, and the week's decisions.
- Numbers in the brief must reconcile with the screens they summarise (14 commitments here means 14 on the Commitments screen).
- Demonstration data in the mockup is the canonical example content for design; see the appendix.

---

## 6. Zora's panel

The panel is where she works in front of the CTO. It is the only surface in the dark register (section 8.2). It is 272 px wide at the design width, collapsible to a 44 px rail, and becomes a bottom sheet on phones.

### 6.1 Header (46 px)
- A 6 px cyan dot, the name "Zora", and on the right an 11.5 px status in the UI font: **In the room** (idle, listening), **Reading** (working; a blinking mint dot follows the word), **Waiting on you** (a proposal is open). After a decision the status returns to "In the room".
- The demo's "Replay" control lives in the caption under the window, not in the panel; the product does not have it.

### 6.2 Transcript
Not a chat. A record of the exchange, oldest at the top, in three kinds of message:

- **You.** Right-aligned block on the raised surface with a mono label "You · 06:04" and the question. Example: "What happened with EU orders last night?"
- **Her work.** A list of steps as she does them: a check icon (spinner while in progress) and the step in plain words, with the source named inside the sentence rather than in a separate tag column. Example: "Read the Datadog alert, 02:41"; "Read PagerDuty incident 2291"; "Read 14 messages in #incident-2291"; "Matched 2291 to 0043 in Linear". Steps are the evidence trail; in the product each is a link to its record (in the demo they are plain text). While she reads a step, the matching source and the matching timeline row light up.
- **Her answer.** Plain paragraphs, 12.5 px. Entities she read are links in mint (orders_eu, ORD-1187). Two paragraphs maximum before she offers a card.

### 6.2a Records
A record is the atomic unit of evidence Zora cites: one Slack message (not a thread), one Linear ticket state change, one GitHub commit, pull request, or review comment, one Datadog alert firing, one PagerDuty page, one calendar event. A step or evidence link always resolves to exactly one record; a claim built from several ("a pattern of five") lists every one when opened, never a paraphrase without its sources.

### 6.3 The action card
When her answer implies a decision, she proposes it as a card on the raised surface: a title in the imperative ("Hold migration 0043 until the index is built off-peak"), a chip ("Your call" in warn colours), one line of context ("Tomas has a 23:00 UTC slot. Nothing runs until you say so."), and two buttons: the recommended action as a mint primary button, the alternative as an outlined one. Both are real. Never a single button. Never a pre-selected choice.

After the CTO chooses:
- The card's chip changes to the outcome and the time ("Held · you, 06:05"), the buttons disappear, and she confirms in one sentence what she did next ("Held. I've told Tomas, moved 0043 to 23:00 UTC with the index built first, and put it in tonight's brief with the rule that fired.").
- The same call updates everywhere it appears: the Needs-your-call card, the Projects row, the Decisions log, Your calls.

### 6.4 The ask input
Above the input, a "Try" row offers up to two questions the CTO hasn't asked yet; choosing one asks it exactly as typing would, and it drops off once asked. Below, a single-line input, "Ask Zora…", with a send control. Enter sends. When a question is outside what she knows, she says so plainly and names what she can answer; she never makes up an answer. She can be asked anything about the record; she answers with steps and sources as above. She does not perform actions from the input that are above her authority; she proposes a card instead.

### 6.5 The evidence drawer
Opening any step, timeline dot, or record link opens the evidence drawer: the source badge and system icon, the timestamp, the record's content trimmed to what is cited (a message's text, an alert's metric and threshold, a pull request's summary), its author, and a "View in Datadog" link out to the vendor. For chat sources it shows only the message cited, never the surrounding channel, and labels it as an excerpt. It exists in both registers: light on the brief's screens, night inside the panel. It is a required component (section 8.6) and a required screen state (section 14).

### 6.6 Correcting her
Any assertion Zora makes can be challenged in place. A small "Not quite" control on a claim opens the panel with her evidence and an input for what is wrong. She acknowledges the change, asks at most one clarifying question, updates the claim everywhere it appears, and, if the correction points at a standing misreading (the wrong owner for a whole project), offers to fix the underlying mapping and names the fix for the CTO to confirm. A corrected claim carries a "Corrected" note with what changed, who changed it, and when.

### 6.7 Sharing
When the CTO shares an item (a call, a commitment row, a project's why) with the person it names, Zora sends only that item and its own evidence, never the surrounding brief and never other people's commitments, calls, or decisions, with a deep link back for the CTO. Recipients of the whole brief (a deputy, a co-CTO) are a separate, higher-trust setting in Settings and must be labelled as such so it is not mistaken for manager access.

### 6.8 Behaviour
- The panel keeps its transcript per day; yesterday's is reachable from the header.
- Keyboard: the input is focusable from anywhere with a shortcut (default ⌘J); cards' buttons are in the tab order; steps are links.
- Reduced motion: no blinking dot, no fades.

---

## 7. Decision cards ("calls")

A call is the unit of the product. It appears in Needs your call, on Your calls, in Zora's panel, and in the Decisions log once made.

**Anatomy (light shell):** a row inside the Needs-your-call card, not a boxed card of its own: no fill, no radius, no tint for held calls, separated from the call above by a 1 px rule-soft divider (none above the first). Inside the panel the same decision appears as the action card (6.3). A call row contains:
- Title, 12.5 px / 500, one sentence with the object and the time ("Billing migration 0043 runs tonight against a 22 M-row table").
- Status, right of the title, as a coloured word: before a decision, the deadline itself (**Tonight**, **Through Fri**, in warning); after it, the outcome: **Held · 23:00** (success), **Runs tonight** (warning), **Reassigned** (success), **Left as is** (muted). The buttons are replaced by an outcome line, "Decided by you at 06:05."
- Why: one or two sentences of evidence and the available move ("Same index-build pattern as 2291, the case behind Marcus's off-peak proposal this morning. Tomas can move it to 23:00 UTC with the index built first.").
- Who: avatar, the owner and their role, then "· you decide". Always present.
- Actions: two small buttons; the recommended one is the primary. After a decision they are replaced by the outcome line.

**Rules**
- Every call has a deadline Zora knows (tonight, Friday) and shows it when it is within 24 hours.
- Two options only. If there are more, she asks a question in the panel first.
- The CTO can always ask "why" from a card; the panel opens with the evidence trail.
- Decided calls are never deleted; they move to the Decisions log with the evidence and the outcome.
- A call can be decided from its card wherever it appears. Once decided, every other open surface showing it, including a second device or tab, reflects the outcome on next paint; tapping a now-superseded action shows what actually happened instead of erroring.

---

## 8. Design system

All values are from the live mockup. Use them as the seed of the Figma library; extend, don't replace.

### 8.1 Light shell (the app)
| Token | Value | Use |
|---|---|---|
| canvas | #F4F6F8 | App background behind the window and the page |
| raised | #FFFEFB | The brief's ground |
| card | #FFFFFF | Widgets |
| subtle | #F0EFE9 | Icon badges, closing bars, progress track |
| sidebar | #F6F7F5 | Sidebar ground |
| ink | #111814 | Primary text |
| muted | #48564F | Secondary text (7.1:1 on white) |
| faint | #6B776F | Labels, metas, axis text (4.7:1 on white; never below 11 px) |
| rule | #DCE1DC | Card borders, sidebar border |
| rule-soft | #E6EAE6 | Row dividers, table lines |
| action | #145C43 | Links, primary buttons, spine, nav active text |
| action-hover | #0C4935 | Hover |
| action-soft | #DCECE4 | Compiled pill, "Prepared/Open" chips |
| nav-active | #E5EAE6 | Active sidebar item ground |
| nav-hover | #ECEFEC | Sidebar item hover |
| focus | #1D63D8 | Focus ring, 2 px, offset 2 px |
| success / soft | #21683A / #E4F2E7 | Done, Kept, On track, Mitigated |
| success-mid | #B9D3C4 | Open segment of progress bars |
| warning / soft | #7A5600 / #FFF1C2 | Deadlines on held calls, At risk, Moved, Runs tonight |
| risk / soft | #A73745 / #F9E7EA | Slipped, incident start, worse deltas |
| living | #3D8B68 | The mark's gradient start; threads; decorative only |
| cyan | #03F5F2 | The mark's gradient end; the 6 px dot beside Zora's name; pulses. Never text, never a fill |

### 8.2 Night register (Zora's panel only)
| Token | Value | Use |
|---|---|---|
| n-ground | #131E18 | Panel ground |
| n-raised | #19261F | Your message, the action card, the input |
| n-hover | #23382F | Hover |
| n-line | #2B3932 | Borders, dividers |
| n-strong | #5D6C64 | Outlined button borders, spinner icons (not text) |
| n-text | #F5F7F2 | Text (15.9:1) |
| n-muted | #A4B1AA | Secondary text, step rows, the status word (7.7:1) |
| n-mint / soft | #67BF99 / #183428 | The one recommended action, entity links, the check icons |
| n-warn / soft | #F1C65A / #392F17 | "Your call" chip |
| n-rose / soft | #F08A9A / #3C2028 | A named risk |
| n-ok / soft | #72CF82 / #193A22 | Outcome chips |

The night register never leaks into the light shell and the light shell never leaks into the panel. The panel has no shadows; separation is 1 px lines and one raised step.

### 8.3 Typography
- UI: **Geist** 400 / 500 / 600. Figures and times: **Geist Mono** 400 / 500 with tabular numerals. (The marketing page uses Archivo for its own copy; the product does not.)
- Scale inside the app: greeting 22/600; widget title 12.5/500; body 12.5/400, line-height 1.45; meta 11.5/400; labels 11/400; caps labels 10.5/500 with 0.04em tracking, uppercase; figures 26/500 mono, letter-spacing −0.02em, and a small figure 20/500 mono for the Sources total and the Commitments count; deltas 11/500 mono; status words 11.5/500; sidebar 12.5/450, counts 10.5 mono; chart axis text 10/400 mono faint.
- Nothing below 10.5 px, and nothing below 11 px that carries information. Two documented exceptions: the chart axis at 10 px (the figures above the chart carry the values; raise it to 11 if you prefer) and avatar initials at 9.5 px.
- Typographic apostrophes and ellipses ("I've", "…"); never straight quotes in copy.

### 8.4 Spacing, radii, lines, elevation
- Base unit 4 px. Card padding 12 px sides, 10 px top, 12 px bottom; sidebar 12/10; panel 12/16.
- Radii: 6 px monogram tiles and source tiles, 7 px nav items and buttons, 9 px the ask input, 12 px widget cards, 10 px the panel's action card, 16 px the window. Status words and call rows have no radius.
- Lines: 1 px everywhere. Rule for edges, rule-soft for dividers inside a card.
- Elevation: cards `0 1px 2px rgba(13,21,17,.04), 0 1px 0 rgba(13,21,17,.03)`; call rows carry no shadow of their own; the app window on a marketing surface uses the layered stack in the source; inside the product there is no floating window and no in-page surface with a shadow larger than a card's. Overlays that must read as above the page (menus, tooltips, the evidence drawer, a modal, the tablet panel overlay) are exempt and use their own stronger elevation, which the designer sets.

### 8.5 Icons
Drawn on a 16 px grid, 1.5 to 1.75 px stroke, round caps and joins, no fills. Rendered sizes: 15 px by default (panel steps, cards), 16 px in the sidebar, 13 px for the send tile. Widget headers and the compile time carry no icon. The set in the mockup: brief, check-circle, check, decide, risk, project, incident, people, delivery, source, calendar, settings, search, chevron, up-down, clock, arrow, send, read, spinner, hold, bell. Extend in the same weight.

### 8.6 Components (with the mockup's measurements)
- **Sidebar nav item:** 30 px tall, 6/8 padding, icon 16 px faint, label muted 450, count mono 10.5 faint right; hover: nav-hover ground; active: nav-active ground, action text and icon.
- **Section label:** 10.5 caps faint, 12 px above, 4 px below.
- **Status word:** a status is a word in its semantic colour, 11.5/500, inline with its row: no background, no radius, no dot. It replaces the pill-and-dot chip the first version of this brief specified. Always a word; never a dot alone.
- **Button:** 28 px with 12 px text (small: 24 px with 11.5 px text), 7 px radius, 500. Primary: action ground, white text. Secondary: white ground, rule border, ink text, faint border on hover. Night primary: mint ground, ink text; night secondary: n-strong border, n-text.
- **Avatar:** 22 px circle, initials 9.5/600 white on a colour from a fixed set (#2A4E3E, #44574D, #5D6C64, #838F89, #111814 for Zora); 20 px in tables.
- **Metric:** label 11 faint / figure 26 mono / delta 11 mono coloured by goodness.
- **List row:** 7 px vertical padding, rule-soft divider, avatar 22, title 12.5/500 ellipsised, sub 11 faint ellipsised, chip or mono value right. A row that leads to its own detail (a project, a decision, a commitment) is itself the click target, not just its meta value; hovering shows a rule-soft tint and a pointer cursor. A row with nothing to open (a row in the Sources widget) is not a button and has no hover state. The demo has no detail pages: a decision row asks Zora about that decision in her panel, and a Settings row expands in place or opens the Sources screen.
- **Table:** headers 11/500 faint with a rule-soft underline; cells 12 px, 7 px vertical padding; one wrapping "why" column; mono for dates and counts.
- **Timeline:** columns 44 / 14 / 1fr; mono time 11 faint; 8 px dot with a 2 px white halo on a 2 px rule; event 12.5; source 11 faint after a middle dot.
- **Progress bar:** 6 px, 3 px radius, segments success / success-mid / risk on the subtle track.
- **Chart:** bars in action at 85% (weekends 35%), 2 px radius; a 1.5 px action line for the 7-day average over a soft area fill; axis text 10 mono faint; legend row 11 faint above right with 8 px swatches.
- **Panel message (You):** n-raised ground, n-line border, 10/10/2/10 radius, 7/10 padding, label 11 n-muted in the UI font.
- **Panel step:** 11.5 px n-muted, 15 px check icon in mint (spinner in n-strong while working); the source is named in the sentence, with no separate tag.
- **Action card:** n-raised, a mint-tinted border (`rgba(103,191,153,.32)`) so the decision reads as the payoff, 10 px radius, 12 px padding; title 12.5/500 n-text; chip; context 12 n-muted; two 26 px buttons.
- **Ask input:** 36 px, n-raised, n-line border, 9 px radius, placeholder n-muted, 24 px send tile on n-line.
- **Evidence drawer:** a right-hand drawer 360 px wide (a sheet on phones) with the source badge, timestamp, the cited record trimmed to what is cited, its author, and a "View in …" link; light register on the brief's screens, night register when opened from the panel. The demo does not build the drawer: a timeline event expands in place to show its record's text.
- **Since 06:00 strip:** one line per change on the raised ground between the greeting and the grid, 12.5 px, each line a link to its widget.

---

## 9. Motion

- The brief arrives whole. The only motion on the Brief is a short stagger of widgets on first paint (80 ms apart, 360 ms each, 6 px rise) and figures counting up over 900 ms. Nothing loops on the Brief.
- Zora's panel is where things move: her status word changes; steps appear one at a time (about 700 ms each, while the source she is reading lights) and their spinner becomes a check; the answer fades in (260 ms); the card follows after a beat. Decision outcomes update in place with a 160 ms fade; a new row in the Decisions log gets a short highlight so the eye finds it.
- Easing: ease-out for entering, ease-in for leaving, `cubic-bezier(.2,.7,.2,1)` for anything that settles.
- `prefers-reduced-motion`: everything to its finished state, no blinking, no counting.
- No animation carries information a static state does not.

---

## 10. Voice and copy

- Plain, calm, specific. Times, counts, names, IDs. "Read 1,204 records from six sources between 05:12 and 05:58."
- First person for Zora, "you" for the CTO, "boss" only in the greeting.
- She says what she knows and what she does not. She names who decides. "Tomas can move it to 23:00 UTC. You decide."
- Chip vocabulary is fixed and one word or a short phrase: Done, Kept, Open, Moved, Slipped, Mitigated, Ongoing, On track, At risk, Held, Tonight, Through Fri, Held · 23:00, Runs tonight, Reassigned, Left as is, Ready, Drafted, Draft, Stale, Disconnected.
- Never: "AI-powered", "seamless", "unlock", "supercharge", "insight", "leverage", exclamation marks, emoji, "Welcome to", instructions longer than a sentence.
- Errors say what happened, why, and what to do next, in that order.

---

## 11. Accessibility

- Text contrast AA at every size; the tokens above already pass (lowest pair in use: faint on white, 4.7:1). Nothing informational is carried by colour alone; chips always have a word.
- Everything interactive is keyboard reachable in reading order; rows that open are `role="button"` with `aria-expanded`; the focus ring is 2 px focus blue (light) or #8AB8FF (night) with a 2 px offset.
- Landmarks: navigation, main, complementary (the panel). The brief is a region labelled with its date.
- Touch targets 44 px on phone layouts; 28 px controls are acceptable on desktop with pointer input.
- Reduced motion as in section 9. Looping media pauses offscreen.

---

## 12. Layout and responsive

- **Desktop, the primary layout:** sidebar 184 · brief (fluid, min 520) · panel 272, at 1000 px and above; the brief's grid is 6 columns with 12 px gaps. Above 1400 px keep the grid but let widgets breathe (max content width 1240 in the brief).
- **Laptop 960 to 1000:** the sidebar collapses to a 56 px icon rail with tooltips; the panel stays.
- **Tablet 700 to 960:** the sidebar becomes a drawer; the panel collapses to a rail on the right edge and opens as an overlay; the grid becomes 2 columns: c3 widgets pair up, a c4/c2 pair each takes a full-width row instead of sitting side by side, and c6 stays full width.
- **Phone under 700:** single column. The greeting stacks above its pill; metrics go two-up; the Overnight timeline stays; tables become stacked rows; Zora's panel is a bottom sheet with her status in the sheet's handle; it opens collapsed to the handle by default and expands on tap or an upward drag; when her status becomes "Waiting on you" it expands once to show the card, then can be collapsed again. The header wraps. No horizontal scrolling anywhere.
- Print (an incident review on paper) is in scope for the Incident screen only.

---

## 13. States you must design

- **First run:** connect sources (six tiles, each with a state), name the CTO, set the brief's time, choose the first three projects. For each of the first three projects Zora states, in plain language, the rule she will use to call it On track, At risk, or Held ("At risk if the next milestone has slipped once or has had no owner update in five working days") and asks the CTO to confirm or adjust it before the first compile. The same confirm-or-adjust exchange recurs in the panel the first time she infers a new owner or a new rota; it is never buried in Settings. Zora's panel says what she will do at the first compile. The first brief arrives the next morning; until then the Brief screen shows what she has read so far.
- **Loading:** skeletons that match the widget shapes; never a spinner over the brief.
- **Empty:** each widget's empty line is in section 5. Empty states are a sentence in her voice, not an illustration.
- **Partial:** a source is stale or disconnected; the Sources widget shows it, the affected widgets carry a small "Datadog stale since 03:10" note in their meta, and the brief's sub-line says what could not be read.
- **Wrong:** a connected source's data is misleading rather than missing. The claim itself, not just the source tile, can be flagged as unverified from its evidence drawer (section 6.6); until Zora re-checks it against the source she does not repeat the claim in a later brief, and the flagged claim carries a small "Flagged, unverified" note.
- **Error:** what happened, why, what to do; a retry where one exists.
- **Decision states:** held; decided (each outcome); corrected (section 6.6); overdue. Overdue means the deadline passed with no decision: the chip goes to risk, both buttons stay live so the CTO can still choose, and Zora's note says how long it has been open and what happens if it stays undecided. She never reports that something already happened unless a default for that call type exists in Authority, written by the CTO in advance ("if undecided by the deadline, hold anything touching production writes"); then the card reads like a decided one, with the safe outcome and a link to the rule that fired. If no such rule exists she does not act: the call stays overdue, she escalates once more (a Slack DM, the next brief's headline), and waits.
- **Notifications:** the brief is announced at compile time by email and by Slack DM with the sub-line and a deep link; a held call with a deadline inside two hours gets its own message. Design both messages.

---

## 14. Screens to deliver

1. Brief (home), desktop, with all eight widgets and the panel; plus the "Since 06:00" variant.
2. Your calls.
3. Today.
4. Commitments.
5. Decisions, with a decision detail: a full page with the log row's title and chip, the evidence trail rendered as the panel's step list (6.2) in the light register, and the outcome line.
6. Projects, with a project detail: a full page with a header (owner, status chip, next milestone), a vertical status history (one row per change of the why, mono date and sentence, newest first), and the current why in the same words as the Projects table.
7. Incidents, with the incident review she prepares (four parts: impact, what led to it, what we change, where else it applies; eight records attached; no names on the wall). The review reuses the Overnight timeline's events and named actors (who was paged, who acknowledged); "no names on the wall" means the four narrative parts describe the system and the decision, never a person's judgment or performance.
8. Delivery.
9. People.
10. Sources, Authority, Settings.
11. First run.
12. The evidence drawer (6.5), the correction flow (6.6), and the pattern-search modal (5.2), as states on the screens above.

Each at desktop and phone; tablet for the Brief, Your calls, and the panel.

**Also deliver:** the component library (section 8.6) as Figma components with variants and the token set as Figma variables (light and night); a clickable prototype of the morning flow (open the brief → ask what happened → hold 0043 → see the call update everywhere); a state matrix for calls and for the panel's status; a handoff page mapping every token and component to the CSS in the source file.

**Review cadence:** show the Brief and the panel first, at desktop, with the demo data. The founder reacts to rendered screens one at a time; bring one direction per question, not a menu.

**Done means:** a senior front-end engineer can build the Brief and the panel from the file without asking a design question, and a CTO opening the prototype at 06:00 knows what happened, what needs them, and who decides, within ten seconds.

---

## 15. Out of scope and do not

- No chat-first layout, no message bubbles as the primary surface, no avatar or face for Zora, no sparkle or "magic" iconography.
- No purple, no gradients on surfaces, no glassmorphism, no glow, no decorative blobs, no icon-in-circle feature grids, no centred everything.
- No status pills or dots on every row, no icon badges in widget headers, no accent-coloured eyebrow labels. The founder had these taken out of the mockup on 23 September as AI-template tells.
- No dashboard for its own sake: every widget answers one of the three questions (what happened, where things stand and why, where the risk is) or holds a call.
- No decision made for the CTO, anywhere, by default, except a named default per call type that the CTO wrote in Authority in advance, always disclosed on the call itself (section 13).
- No timeline or sparkline that isn't backed by a record the CTO can open.
- Do not redesign the brand mark (the thirteen-dot swarm, geometry fixed) or Zora's cyan dot. The swarm is the lab's mark, not Zora's; it does not appear inside the product beyond the account and about screens.

---

## Appendix A. Demonstration data (canonical example content)

Use this content in every screen so the screens tell one story.

- Workspace: TransparentAI · Engineering · 62 people. CTO: Dana Kim (DK).
- Date: Monday 21 September 2026. Brief compiled 06:00. Records read 1,204 between 05:12 and 05:58: Linear 312, GitHub 488, Datadog 201, PagerDuty 3, Slack 176, Calendar 24.
- Incident 2291: EU order writes blocked 14 minutes. 02:41 p99 write latency to 30 s (Datadog); 02:44 Marcus paged, acknowledged in 40 s (PagerDuty); 02:54 index build on orders_eu cancelled (Slack #incident-2291); 02:55 writes recovered, queue drained by 03:02 (Datadog); 03:12 ORD-1187 opened for the 40 retries (Linear). Cause: the index build took the write lock during EU morning traffic. Review prepared: four parts, eight records.
- Calls held: (1) Billing migration 0043 runs tonight against a 22 M-row table; same pattern as 2291; Tomas Berg (billing) can move it to 23:00 UTC with the index built first; actions Hold until off-peak / Let it run. (2) On-call rota lists two people who have left (Sam, Ines) through Friday; Marcus Lind (SRE) is the only live responder; actions Reassign by rota / Leave as is.
- Delivery, last 30 days: deploys/day 14.2 (▲ 8% vs Aug); lead time 1.8 d (▼ 0.3 d); change failure 3.1% (▼ 0.4 pt); time to restore 22 min (▲ 4 min · 2291).
- Commitments this week: 14 tracked, 9 kept, 3 open, 2 slipped. Rows: SDK-418 fix to beta (Priya, moved to Thu 24, Moved); Atlas scope signed (Elena, Tue 15, Kept); Rota updated (Marcus, due Fri 18, Slipped); Board notes to you (Zora, Thu 24, drafted, Open).
- Today: 09:30 Incident review 2291 (4 parts · 8 records, Ready); 11:00 Board prep (every figure sourced, Drafted); 15:00 Atlas checkpoint (scope decision attached, Ready); 17:00 Commitments check (14 against what shipped, Zora).
- Decisions: Atlas ships EU-only first (Elena, Tue 15, 3 records); Index builds move off-peak (Marcus, proposed Mon 21 02:58, pending the CTO's call on 0043); SDK 2.0 release held to Thu (Priya, Tue 15, 2 records); Rollback owner named per service (you, Fri 18, draft).
- Projects: Atlas · EU launch (Elena Ruiz, On track, Oct 14, "Scope cut to EU-only on Tue; dependency on billing 0043 cleared once it runs", 41 records); SDK 2.0 · mobile (Priya Nair, At risk, Sep 24, "Release held on SDK-418; fix moved to Thu, partner demo is Fri", 27); Billing migration (Tomas Berg, Held, Tonight, "Step 0043 repeats the 2291 pattern; waiting on your call", 18); Data platform (Marcus Lind, On track, Nov 2, "Off-peak index policy written Mon 02:58; rota gap is the open risk", 33).
- Panel exchange: You 06:04 "What happened with EU orders last night?" → steps (Datadog, PagerDuty, Slack, Linear) → answer → card "Hold migration 0043 until the index is built off-peak" → Held · you, 06:05 → "Held. I've told Tomas, moved 0043 to 23:00 UTC with the index built first, and put it in tonight's brief with the rule that fired."

## Appendix B. Source
- Live reference: https://www.dorareason.com (the working demo; `?still` shows the finished state). The demo only builds two breakpoints (960 and 640); the laptop, tablet, and phone behaviour in section 12 is product spec, not something to check against the page.
- Source file: `public/coming-soon.html` in the site repository; tokens in `:root`, components in the style block, the panel's sequence in the script.
- Brand: DORA Research, Inc. is the lab; the thirteen-dot swarm is the lab's mark; Zora is the product and gets her own mark later. Wordmark "DORA Research, Inc."; web property dorareason.com.
