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

## Overhaul (2026-08-15)
- Rebranded to real logo (Sheffield/Rotherham) + friendly light theme (red #E4141B / white / black), Poppins + Plus Jakarta Sans.
- Multi-page (react-router): Home, Driving Lessons, Reviews, Areas We Cover, Contact.
- Nav: Home | Driving Lessons | Reviews | Areas We Cover | Contact + prominent Book a Lesson; sticky mobile WhatsApp/Book bar.
- WhatsApp deep links (wa.me/447814129029) throughout; phone tel: links; email mailto.
- Services w/ real prices: Manual £37.50, Automatic £40 (speciality), Refresher £37.50/£40, Intensive £600, Advanced £40. "Book" buttons prefill Contact lesson via ?lesson=.
- Reviews page links to Facebook reviews (no invented reviews).
- Enquiry form fields: name, phone, email, lesson_type, preferred_instructor, contact_method, message → POST /api/enquiries (backend model updated). Verified curl + full UI flow.
- Contact details: 07814 129029, ishie677@gmail.com.

## Backlog
- P1: Instructor profiles section, FAQ accordion, area/coverage map.
- P2: Admin view for enquiries, Google reviews embed, blog/tips.
