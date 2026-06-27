# Reich — Premium B2B Landing Page

## Original Problem Statement
Build a premium B2B landing page for "Reich", a solo digital marketing consultant in Switzerland (personal brand). Target: lawyers, doctors, real estate agents, executive coaches in DACH. Strictly follow the provided color system, typography, copy, and layout. Use the supplied portrait in the "Über mich" section.

## Architecture
- Static React single-page app (no backend). All CTAs use mailto links to sofijareich@gmail.com.
- `/app/frontend/src/App.js` — all sections (Nav, Hero, Leistungen, Referenzen, Über mich, Closing, Footer) + IntersectionObserver reveal animation.
- `/app/frontend/src/App.css` — full design system (colors, typography, layout).
- Fonts via Google Fonts in index.html: Cormorant Garamond (headlines) + DM Sans (body/labels).
- Portrait: `/app/frontend/public/assets/sofija.jpg`.

## Design System (per spec, do not deviate)
- BG #0E0C0F, secondary #1A161E, borders #2B2330, gold #C4A882 (hover #E8D5B0), body #9B8FA8, head #E8E2EE, burgundy glow #6B1A3A. Forbidden: #F72585.
- Headlines Cormorant Garamond 300 + gold italic em. Body DM Sans 300–400. Labels uppercase 0.32em gold.
- Border-radius 0 everywhere, left-aligned, 100px+ section padding, 1px gold dividers @0.2 opacity. No stock photos/icons/emoji.

## Implemented (2026-06-26)
- All 5 sections complete and verified via screenshots. German editorial copy authored for truncated sections (per user approval). Email: sofijareich@gmail.com. CTA = mailto.

## Backlog
- P2: Cookie/Impressum/Datenschutz pages (Swiss legal compliance) if site goes live.
- P2: Optional real contact form with backend storage.
