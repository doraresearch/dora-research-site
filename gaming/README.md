# Rivet Ridge Rally landing page

Responsive promotional website for the existing Roblox arcade motocross game. Game content comes from the sibling `Rivet Ridge Rally Roblox` project: `docs/GAME_SPEC.md`, `docs/VENUES.md`, `docs/STORE_LISTING.md` and `src/shared/RiderIdentity.luau`.

## Development and release

- `npm run dev` serves the gaming site at `/`.
- `npm run typecheck` and `npm run build` validate and build into `dist/` using `vite.gaming.config.ts`.
- `npm run preview` serves the production output locally.
- Release through a GitHub PR merged to `main`; the existing Cloudflare Pages workflow deploys to dorareason.com. Do not use local Wrangler or commit credentials.

DORA sources remain archived. `npm run dev:dora` and `npm run build:dora` retain the previous workflow; `HOLDING` applies only to the archived build.

## Selected design — 31 October 2026

The owner selected Cinematic Launch, then simplified it to three sections: cinematic hero and film, visual track showcase, and a final Play on Roblox invitation. Riding tutorials, controls references and garage sections were removed. The original generated-video direction was deferred in favour of the existing motion preview.

Dark navy, white Sora typography, electric teal actions, coral section headings, original sunset artwork, and actual venue captures. All text and controls are native HTML. No AI world generation, live multiplayer, fictional statistics or public-release claims. Roblox place `96146435186709` requires invite-only playtest access; website links do not grant access. Both main play invitations state that the Roblox account needs access.

## Content and motion

- `main.js` owns the featured tracks, ten-track catalog and venue detail dialogs. Stable track IDs remain unchanged; displayed names match the current game’s `src/shared/rules/Tracks.luau` (including Redline Mesa, Splinter Run and Frostbite Ridge).
- `motion.js` owns the muted 6.233-second hero loop and on-demand 26-second silent trailer with native playback, seek and fullscreen controls. Film failures retain the poster and offer Retry; blocked playback leaves native controls available.
- The v3 media source is `/Users/john/Sandbox/rivet-ridge-rally-website-video-v3/`: copy only trailer.mp4, hero-loop.mp4, poster.jpg and trailer-poster.jpg. Owner confirmed website-use rights. `sources/` stays internal and is never committed or uploaded.
- Both videos are 1920×1080, 30fps H.264 with fast-start metadata and no audio stream. Trailer is about 14.5 MB; hero about 3.45 MB. The old sound-caption track is removed because this version is silent. Static video URLs include a v3 cache key.
- Footage was captured in-engine from development build f259bfa. Venue scenery and the neutral rider are Studio-only; do not describe it as the currently available playtest. The film description identifies development footage and paid cosmetics. The invite-only access note remains beside both play invitations.
- Hero video and matching first-frame poster use the same framing: 50% on desktop/tablet and 76% on phones. The desktop scrim reduces competition from roadside lettering. Background motion pauses offscreen, during dialogs and when the tab is hidden; reduced-motion/data-saving preferences defer loading until opt-in.
- Poster and video are development footage; the other existing promotional artwork and venue stills remain unchanged. Sora is self-hosted with its SIL Open Font License in `public/fonts/OFL-Sora.txt`.
- Known media limitations accepted for integration: the foliage loop transition is visible; a roadside RIDER SCHOOL board enters behind the hero headline; the trailer contains game-effect flicker and a brief repeated finish crossing. No retouching or trailer re-edit was performed here. Physical-phone playback has not been verified.

## Verification

Run typecheck, production build, and rendered browser QA; no lint or automated test script is configured. Verify desktop/mobile layouts, track switching, details/catalog dialogs, film playback and close, motion pause/resume, reduced-motion/data-saving behavior, image loading, and Roblox destinations. The in-app browser reported `browser.user is unavailable` during the final design pass; local headless Chromium was used as the fallback.
