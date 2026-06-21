# Interactive Portfolio — Project Guide

## Project Type

Personal interactive portfolio. Goal: distinctive, non-templated presentation that could not be mistaken for any other portfolio. Audience: recruiters, collaborators, and creative peers. The site's single job is to make someone want to reach out.

---

## Design System

**No external component library.** Build with:

- **Framework:** React or Next.js (Server Components by default; `"use client"` only for motion/interaction leaves)
- **Styling:** Tailwind v4 utilities
- **Animation:** `motion/react` (formerly Framer Motion) for UI motion; GSAP + ScrollTrigger only for full scroll-hijacks or sticky-stacks
- **Fonts:** `next/font` or self-hosted `@font-face` with `font-display: swap`. No Google Fonts `<link>` tags.
- **Icons:** Phosphor Icons (`@phosphor-icons/react`) first. HugeIcons, Radix, or Tabler as fallbacks. Never hand-roll SVG paths. Never use Lucide unless already in the project.

---

## Design Dials (defaults for this portfolio)

```
DESIGN_VARIANCE:  8   (asymmetric layouts, offset grids, intentional negative space)
MOTION_INTENSITY: 7   (scroll-reveals, hover physics, entry transitions — all motivated)
VISUAL_DENSITY:   3   (generous whitespace, art-gallery breathing room)
```

Override conversationally when a section calls for it. Never use the baseline silently.

---

## Typography Rules

- **Display face:** a characterful sans display — choose from Geist Display, Cabinet Grotesk, Satoshi, Outfit, or PP Neue Montreal. Pair with a complementary mono or body face.
- **Body face:** a legible companion — Geist, Inter Tight, or a system stack.
- **Serif is banned as default.** Only acceptable if the aesthetic is genuinely editorial/heritage AND you can articulate the specific reason. Fraunces and Instrument Serif are specifically banned.
- Default headline scale: `text-4xl md:text-6xl tracking-tighter leading-none`
- Default body: `text-base text-[neutral] leading-relaxed max-w-[65ch]`
- Italic descender clearance: any italic word with `y g j p q` needs `leading-[1.1]` min + `pb-1` on the wrapper.

---

## Color Rules

- Max 1 accent color per page. Saturation < 80%.
- No AI-purple gradients, no generic glassmorphism, no neon outer glows.
- No pure `#000000` or `#ffffff` — use off-black (zinc-950) and off-white.
- Once an accent is chosen, it is locked for the entire page. No mid-page accent shifts.
- Warm cream + brass/clay/oxblood palette is banned (AI default). Use something specific to the chosen aesthetic instead.
- One palette family: do not mix warm and cool grays on the same page.

---

## Layout Rules

- **Anti-center bias:** when DESIGN_VARIANCE > 4, avoid centered heroes. Default to split-screen, left-aligned + right asset, or asymmetric structures.
- **Hero must fit the initial viewport:** headline ≤ 2 lines, subtext ≤ 20 words + ≤ 4 lines, CTA visible without scroll.
- Hero top padding max `pt-24` at desktop.
- Hero text elements max 4 total: eyebrow OR brand strip (pick one or neither), headline, subtext, CTAs.
- **Viewport stability:** always `min-h-[100dvh]`, never `h-screen`.
- **Contain layouts:** `max-w-[1400px] mx-auto` or `max-w-7xl`.
- **Grid over flex-math:** use CSS Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`) instead of `w-[calc(33%-1rem)]`.
- Mobile collapse must be explicit per section — no silent Tailwind assumptions.

---

## Eyebrow Restraint

Maximum 1 eyebrow label per 3 sections. If section A has an eyebrow, the next 2 sections cannot. Count `uppercase tracking` micro-labels before shipping — if count > `ceil(sectionCount / 3)`, remove some. When in doubt, drop the eyebrow entirely; the headline alone is enough.

---

## Section Layout Diversity

- No two sections share the same layout family.
- Max 2 consecutive zigzag (image+text split) sections. Break with full-width, vertical-stack, bento, marquee, or another family.
- No 3-column equal feature cards. Use asymmetric grids, scroll-pinned, or horizontal-scroll instead.
- One marquee per page maximum.

---

## Motion Rules

Every animation must have a one-sentence justification: hierarchy, storytelling, feedback, or state transition. "It looks cool" is not a justification.

- `MOTION_INTENSITY > 3`: must honor `prefers-reduced-motion` via `useReducedMotion()`.
- `MOTION_INTENSITY > 4`: page must actually animate — entry transitions, scroll-reveals, hover physics. Static pages cannot claim high motion intensity.
- Never `useState` for continuous values (mouse position, scroll progress). Use `useMotionValue` / `useTransform` from `motion/react`.
- **Banned scroll pattern:** `window.addEventListener("scroll", ...)`. Use Motion's `useScroll()`, GSAP ScrollTrigger, IntersectionObserver, or CSS `animation-timeline` instead.
- For sticky-stack and horizontal-pan scrolltelling, follow the canonical skeletons in `front-end-skill.md` (Sections 5.A and 5.B). Key: `start: "top top"`, `pin: true`.
- All `useEffect` animations need cleanup functions (`ctx.revert()` for GSAP, returned cleanup for Motion).
- Never mix GSAP and Motion in the same component tree.

---

## Copy & Content Rules

- No em-dashes (`—` or `–` as separator). Use hyphens, commas, periods, or parentheses.
- No filler marketing verbs: "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize".
- No startup-slop brand names in examples.
- No fake-precise invented numbers without real data behind them.
- No generic names (Jane Doe, John Doe) in mock content.
- One CTA intent per page — pick one label ("Get in touch" OR "Let's talk", not both).
- No duplicate CTAs with the same intent anywhere on the page.

---

## Accessibility & Performance

- Every CTA must pass WCAG AA contrast (4.5:1 for body text, 3:1 for large text 18px+).
- No CTA label that wraps to 2+ lines at desktop. Shorten the label or widen the button.
- Form inputs, placeholders, labels, and focus rings all pass WCAG AA against their section background.
- Keyboard focus visible on all interactive elements.
- Animate only `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`.
- Hero images: `next/image priority` or preloaded (LCP target < 2.5s).
- `will-change: transform` only on elements that will actually animate.
- Grain/noise filters only on fixed, `pointer-events-none` pseudo-elements — never on scrolling containers.

---

## Image Strategy

1. Use a generation tool if available to produce section-specific assets at the right aspect ratio.
2. Use `https://picsum.photos/seed/{descriptive-seed}/{w}/{h}` with a descriptive seed for placeholders.
3. If neither is possible, leave clearly labeled placeholder slots and note what images are needed.

No div-based fake screenshots. No hand-rolled decorative SVGs. Text-only pages are not minimalism — even minimal layouts need 2-3 real images.

---

## Page-Level Rules

- One theme per page (light, dark, or auto via `prefers-color-scheme`). No section-level theme flips.
- One corner-radius system per page. Mixed radii only with an explicit documented rule.
- One icon family per project. Standardize `strokeWidth` globally.
- One design system per project — no mixing.

---

## Banned AI Tells (do not ship any of these)

- Neon outer glows, AI-purple gradients, generic glassmorphism everywhere
- Inter as default font
- Three equal horizontal feature cards
- Section-number eyebrows (`001 · Capabilities`, `00 / INDEX`)
- Version labels in hero (V0.6, BETA, EARLY ACCESS)
- Decoration text strips at hero bottom (`BRAND. MOTION. SPATIAL.`)
- Scroll cues (`↓ scroll`, `Scroll to explore`)
- Locale / city / weather strips in nav or footer (unless genuinely place-relevant)
- Middle-dot (`·`) used more than once per line in metadata strips
- Decorative colored status dots on nav items or list rows
- Pills or text labels overlaid on images
- Photo-credit captions on placeholder images
- Version footers (`v1.4.2`, `Build 0048`) on portfolio pages
- `border-t` + `border-b` on every row of a long list
- Filled-track scoring/progress bars as comparison visuals
- Split-header pattern (giant left headline + floating right explainer paragraph)
- Hand-rolled decorative SVGs
- Div-based fake product UIs or dashboards

---

## Pre-Flight Check (run before every ship)

- [ ] Zero em-dashes anywhere on the page
- [ ] One theme, locked page-wide
- [ ] One accent color, consistent across all sections
- [ ] One corner-radius system
- [ ] All CTA text passes WCAG AA contrast
- [ ] No CTA label wraps at desktop
- [ ] Eyebrow count ≤ ceil(sectionCount / 3)
- [ ] No two consecutive sections share a layout family
- [ ] No 3+ zigzag (image+text-split) sections in a row
- [ ] No duplicate CTA intent
- [ ] Hero fits the viewport (≤ 2-line headline, ≤ 20-word subtext, CTA visible)
- [ ] Hero top padding ≤ pt-24
- [ ] Hero text elements ≤ 4 total
- [ ] Every animation has a one-sentence justification
- [ ] `prefers-reduced-motion` respected for MOTION_INTENSITY > 3
- [ ] No `window.addEventListener("scroll")` anywhere
- [ ] All `useEffect` animations have cleanup functions
- [ ] `min-h-[100dvh]` used (not `h-screen`) for full-height sections
- [ ] Mobile collapse explicit per multi-column section
- [ ] Real images used (not div-based fakes)
- [ ] Copy re-read: no broken grammar, no AI-hallucinated phrases, no filler verbs
- [ ] No AI tells from the banned list above
