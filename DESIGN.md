# Design System — DimeTech / DimeAid

## Product Context
- **What this is:** A fintech API platform that adds 11 cents to every transaction (10 cents to charity, 1 cent to operations), generating tax-deductible donations for partner businesses.
- **Who it's for:** Dual audience — enterprise partners (Uber, restaurant chains, POS systems) and end consumers who see DimeAid messaging at checkout.
- **Space/industry:** Fintech x social impact. Peers: Stripe (payments infrastructure), Aspiration (ethical finance), charity:water (impact branding).
- **Project type:** B2B partner materials (pitch decks, specs, partner kits) + consumer-facing web experience.

## Aesthetic Direction
- **Direction:** Editorial/Refined — confident, mature, not startup-playful. Stripe's authority meets charity:water's warmth.
- **Decoration level:** Intentional — subtle grain texture on hero sections, clean everywhere else. Not sterile, not noisy.
- **Mood:** Trustworthy yet warm. The feeling of a well-run institution that genuinely cares. Professional enough for an Uber boardroom, human enough for an in-store sticker.
- **Reference sites:** stripe.com (authority, typography-forward), charitywater.org (emotional warmth, poster-like imagery), wise.com (transparency, plain language)

## Typography
- **Display/Hero:** General Sans — confident geometric sans with personality. Modern but not cold. Warm enough for a social mission, authoritative enough for enterprise. Load from Fontshare.
- **Body:** DM Sans — highly readable, warm character at small sizes, excellent paragraph rendering. Load from Google Fonts.
- **UI/Labels:** General Sans at 11-13px, weight 600, with letter-spacing for overlines and labels.
- **Data/Tables:** Geist — clean tabular-nums for financial projections and dashboards. Load from Vercel CDN.
- **Code:** JetBrains Mono — standard for API documentation and code blocks. Load from Google Fonts.
- **Loading:** Google Fonts + Fontshare CDN. Preload display font only. font-display: swap.
- **Scale:**
  - xs: 12px / 0.75rem
  - sm: 14px / 0.875rem
  - base: 16px / 1rem
  - lg: 18px / 1.125rem
  - xl: 20px / 1.25rem
  - 2xl: 24px / 1.5rem
  - 3xl: 30px / 1.875rem
  - 4xl: 36px / 2.25rem
  - 5xl: 48px / 3rem
  - hero: clamp(48px, 7vw, 80px)

## Color
- **Approach:** Restrained — one strong accent + warm neutrals. Color is rare and meaningful.
- **Primary:** #16A34A (green-600) — hunger relief, growth, money. Used for CTAs, success states, key data highlights.
- **Secondary:** #1E40AF (navy-800) — deep trust, enterprise credibility. Used for secondary actions, informational elements.
- **Accent:** #EA580C (orange-600) — warm orange, the color of a copper dime. Energy, urgency, memorability. Used sparingly for emphasis and differentiation.
- **Neutrals:** Warm stone scale (NOT cool grays). This is a deliberate risk — every fintech uses cool blue-grays. Stone feels human and approachable.
  - 50: #FAFAF9 (page bg light)
  - 100: #F5F5F4 (surface)
  - 200: #E7E5E4 (border)
  - 300: #D6D3D1 (border subtle)
  - 400: #A8A29E (muted text)
  - 500: #78716C (secondary text)
  - 600: #57534E
  - 700: #44403C
  - 800: #292524 (surface dark mode)
  - 900: #1C1917 (text, dark bg)
  - 950: #0C0A09 (page bg dark)
- **Semantic:** success #16A34A, warning #D97706, error #DC2626, info #2563EB
- **Dark mode:** Stone-950 background, Stone-900 surfaces. Desaturate primary/accent by ~10%. Stone-50 for text. Test contrast independently.

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable — not cramped like a trading app, not airy like a lifestyle brand.
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px) 4xl(80px) 5xl(96px)

## Layout
- **Approach:** Hybrid — grid-disciplined for pitch decks and partner materials, slightly editorial for consumer-facing site.
- **Grid:** 12-column. Mobile: 4-col. Tablet: 8-col. Desktop: 12-col.
- **Breakpoints:** 375px (mobile) / 768px (tablet) / 1024px (desktop) / 1440px (wide)
- **Max content width:** 1000px for text-heavy pages, 1200px for dashboards.
- **Border radius:** Hierarchical — sm: 4px (inputs, small elements), md: 8px (buttons, alerts), lg: 12px (cards), xl: 16px (modals, hero sections), full: 9999px (pills, avatars).

## Motion
- **Approach:** Minimal-functional — smooth transitions that aid comprehension, no decorative animation.
- **Easing:** enter: cubic-bezier(0.16, 1, 0.3, 1), exit: cubic-bezier(0.55, 0, 1, 0.45), move: ease-in-out
- **Duration:** micro: 50-100ms (toggles, highlights), short: 150-250ms (buttons, inputs), medium: 250-400ms (cards, modals), long: 400-700ms (page transitions)
- **Reduced motion:** Respect prefers-reduced-motion. Disable all animation except opacity fades.

## Brand Voice (Design Context)
- **Headline style:** Direct, confident, no filler. "End hunger. Increase profit." not "We're on a mission to..."
- **Body style:** Plain language, Wise-inspired transparency. Explain the mechanics, not the aspirations.
- **Data presentation:** Let numbers speak. Large, well-typeset figures with tabular-nums. No decorative charts.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-27 | Initial design system created | Created by /design-consultation based on competitive research of Stripe, Monzo, Klarna, Aspiration, charity:water, Chime. Dual-audience (enterprise + consumer) drove Editorial/Refined direction. |
| 2026-03-27 | Warm stone neutrals over cool grays | Deliberate risk. Every fintech uses cool grays. Stone feels human and matches the social impact mission. |
| 2026-03-27 | Orange accent (#EA580C) | Deliberate risk. Orange is uncommon in fintech but evokes the copper dime. Memorable, ownable, creates energy without startup-pink vibes. |
| 2026-03-27 | General Sans for display | Chosen over Inter/Roboto/Poppins (overused) for its confident geometric character with warmth. Available free via Fontshare. |
