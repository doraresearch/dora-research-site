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

Dark navy, white Sora typography, electric teal actions, coral section headings, original sunset artwork, and actual venue captures. All text and controls are native HTML. No AI world generation, live multiplayer, fictional statistics or public-release claims. Roblox place `96146435186709` requires private-playtest access; website links do not grant access.

## Content and motion

- `main.js` owns the three featured tracks, ten-track catalog and venue detail dialogs. `venues.js` holds documented venue names, settings, lap lengths and medal times.
- `motion.js` owns the muted ten-second hero loop, pause/play control and on-demand 45-second film with native seeking, sound, captions and fullscreen controls.
- Background motion pauses offscreen, when a dialog opens or when the document is hidden. Reduced-motion and data-saving preferences prevent automatic loading/playback; visitors can opt in.
- Video comes from the game's own `build/marketing/RivetRidgeRally_promo.mp4`. The hero uses seconds 8–18; the film retains the original 45-second edit. MP4 exports use H.264 with fast-start metadata, approximately 1.7 MB for the hero and 9.4 MB for the film. Caption cues describe non-dialogue racing audio.
- `media/cinematic-poster.jpg` is generated promotional artwork derived from the selected concept, labeled separately from actual footage. Canyon's showcase uses existing promotional art; other venue images are actual gameplay. Sora is self-hosted with its SIL Open Font License in `public/fonts/OFL-Sora.txt`.

## Verification

Run typecheck, production build, and rendered browser QA; no lint or automated test script is configured. Verify desktop/mobile layouts, track switching, details/catalog dialogs, film playback and close, motion pause/resume, reduced-motion/data-saving behavior, image loading, and Roblox destinations. The in-app browser reported `browser.user is unavailable` during the final design pass; local headless Chromium was used as the fallback.
