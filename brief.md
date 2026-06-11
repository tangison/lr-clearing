# L&R Clearing Agency — Demo Website v2

## Project Brief

| Field | Value |
|-------|-------|
| **Client** | L&R Clearing Agency Close Corporation |
| **Agent** | Tangison (Tangison Studio OS) |
| **Version** | 2.0 |
| **Date** | 2026-06-11 |
| **Live URL** | https://lr-clearing.vercel.app |
| **GitHub** | https://github.com/tangison/lr-clearing |
| **Framework** | Next.js 16 App Router + TypeScript |
| **Runtime** | Bun |
| **Styling** | Tailwind CSS + CSS Custom Properties |
| **Animations** | GSAP (hero stagger, scroll triggers, parallax) |
| **Fonts** | Barlow Condensed 700/800, DM Sans 400/500, JetBrains Mono 400 |
| **Deployment** | Vercel Hobby |

## Brand Tokens

- `--color-primary`: #1B2A4A (Navy Deep)
- `--color-primary-mid`: #243561 (Navy Mid)
- `--color-accent`: #E8642A (Signal Orange)
- `--color-light-bg`: #F0EBE1 (Port Sand)
- `--color-body-light`: #FAFAF8 (Manifest White)
- `--color-secondary`: #8A9BB0 (Iron Grey)
- `--color-near-black`: #111827 (Footer BG)

## Pages

| Route | Status |
|-------|--------|
| `/` | Full build — Hero, TrustBar, Services, Why L&R, ImageStrip, ContactCTA |
| `/brand` | Full build — Logo assets, color palette, typography specimens |
| `/services` | Coming Soon |
| `/about` | Coming Soon |
| `/portfolio` | Coming Soon |
| `/contact` | Coming Soon |

## Key Design Decisions

1. **Industrial aesthetic**: Zero border-radius on service cards, 1px gap dividers, no drop shadows
2. **Logo handling**: Icon mark in navbar with `filter: brightness(0) invert(1)` for white on dark; full logo in footer and brand page
3. **Signal Orange rationale**: References crane hooks, container markings, and hi-vis vests from client's port photos
4. **GSAP animations**: 4 moments only — hero headline stagger, service card scroll-in, image strip parallax, stat reveal
5. **Mobile-first**: 375px base, full-screen overlay menu with 48px Barlow Condensed links

## Contact

- **WhatsApp**: +264 81 375 9901
- **Email**: ops.clearing@gmail.com
- **Address**: Cnr 10th Road & Sam Nujoma Ave, Walvis Bay, Namibia
- **Registration**: CC/2012/1572
- **VAT**: 05757590615

## Built By

[Tangison Studio](https://studio.tangison.com)
