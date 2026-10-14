# Steal a Chami — 3D browser prototype

An unofficial fan-made parody game inspired by conveyor-based collecting games. It is not affiliated with Chaminade High School.

## How to play

1. Upload `index.html` and `teachers.js` to the **root** of your GitHub repository.
2. Under repository **Settings → Pages**, publish from `main` and `/ (root)`.
3. Open your GitHub Pages URL in Safari or Chrome. An internet connection is required to load the Three.js 3D engine from jsDelivr.
4. Use the on-screen joystick or WASD/arrow keys to move, swipe/drag on the 3D scene to rotate the camera, and press BUY / STEAL (or E) near a character.
5. Buy teachers from the central conveyor. Visit red/purple/yellow rival bases, pick up a teacher, and carry them to your blue base. Press BUY / STEAL again to deposit.
6. Shield protects your base for 30 seconds. Income and your roster save locally in your browser.

## Included

- Small 3D courtyard, third-person camera, mobile joystick, conveyor spawns, purchases, eight-slot bases, steal-and-carry, base shield, local saves
- All entries from the provided `teachers.js` public faculty/staff roster; deterministic fictional rarities
- Local match leaderboard with AI-controlled rival inventories
- Local demo event panel (code `FLYERS-DEMO`)

## Not included yet

- Live multiplayer, real user accounts, persistent online leaderboards, and secure server-side admin panel. These require a separate backend and authenticated permissions. Do not use the demo code as real authentication.
- AI rivals have stocked bases but do not move around or attack.

## Files

`index.html`: playable game. `teachers.js`: roster. `upgrades.js`: legacy prototype file, not needed by the 3D version.
