# Rivet Ridge Rally landing page

Responsive promotional landing page for the existing Roblox arcade motocross game. The source of truth is the sibling `Rivet Ridge Rally Roblox` project, specifically `docs/GAME_SPEC.md`, `docs/VENUES.md`, `docs/STORE_LISTING.md` and `src/shared/RiderIdentity.luau`.

## Run

- `npm run dev`, then open the dev server root `/`.
- `npm run typecheck` and `npm run build` validate and build the site into `dist/` using `vite.gaming.config.ts`.
- `npm run preview` serves the production output locally.

The owner authorized this page to replace the DORA website at dorareason.com on 28 October 2026. The existing Cloudflare Pages workflow deploys `dist/` after a GitHub PR merges to `main`. `gaming/public/` supplies the favicon, social card, sitemap, robots file, cache/security headers, and redirects from the former page URLs.

The DORA sources remain archived in the repository. `npm run dev:dora` and `npm run build:dora` retain their previous workflow; `HOLDING` applies only to that archived build.

## Content and interactions

- Original owner-selected sunset key art, plus real Roblox gameplay screenshots copied into `media/`.
- Ten documented venues with their names, descriptions, lap lengths and Bronze/Silver/Gold/Author times in `venues.js`.
- Featured venues, environment filters, full campaign expansion, and venue detail dialogs.
- Riding tips for throttle, turbo and cooling gates; keyboard/gamepad/touch control reference.
- Six free livery swatches with a selected-name readout. This is a color reference, not a live bike repaint or saved Roblox loadout.
- Direct Roblox experience links use place id `96146435186709`. The source listing records private playtest access; links do not grant access.

No AI world-generation, multiplayer, authentication, fictional statistics, or backend features are implied. The game features AI rivals. Mobile layouts and reduced-motion preferences are supported. No new runtime dependencies.

## Art direction

Deep navy, cream, Ridge Teal `#19b8b0` and coral `#f15f50`; condensed italic motorsport typography, angled action buttons, large original key art, real gameplay venue cards. The generated website concept is a layout reference only; the shipped page uses original project assets and native HTML text and controls. Source artwork remains unchanged in the game project.
