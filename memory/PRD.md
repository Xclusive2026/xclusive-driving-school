# Xclusive Driving School — PRD

## Original Problem Statement
"I want you to create a website for Driving tuition."

## User Choices
- Static, fully responsive marketing site. No login, no payment.
- Contact/enquiry form only (no email sending — enquiries stored in DB).
- Highlight: Course packages & pricing, Reviews/testimonials, Contact form.
- Brand: "Xclusive Driving School". Theme: black, white, red. User has an existing logo.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis (smooth scroll) + react-fast-marquee + @phosphor-icons/react.
- Backend: FastAPI + MongoDB (motor). Enquiries stored in `enquiries` collection.
- Single-page site with anchor navigation; components in `/app/frontend/src/components/site/`.

## Design
- Brutalist editorial dark theme. Fonts: Anton (display), Outfit (sub), IBM Plex Sans (body), IBM Plex Mono (labels).
- Kinetic masked line-by-line hero reveal, parallax hero background, grain overlay, scroll reveals, red editorial marquee.
- Logo generated (black/white/red X + steering wheel motif) at data.js BRAND.logo.

## Implemented (2026-08-05)
- Kinetic hero with parallax + on-load reveal.
- Editorial red marquee bar.
- Manifesto: stats strip + 3 numbered chapters + cockpit image.
- Packages: 3-tier bordered pricing grid (First Gear £320 / Full Throttle £600 / Fast Pass £950), featured highlight, "choose" scrolls to contact & preselects package.
- Reviews: 3 testimonial cards with grayscale→color hover.
- Contact: brutalist form (name/email/phone/package/message) → POST /api/enquiries, success state + toast.
- Footer with giant outline wordmark.
- Backend: POST/GET /api/enquiries (verified via curl + UI e2e).

## Backlog
- P1: Instructor profiles section, FAQ accordion, area/coverage map.
- P2: Admin view for enquiries, Google reviews embed, blog/tips.
