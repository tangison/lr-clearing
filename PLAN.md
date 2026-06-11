# L&R Clearing Agency — Demo Website v2: Implementation Plan

**Agent:** Tangison (Tangison Studio OS)  
**Protocol Step:** 4 — Plan (awaiting approval)  
**Date:** 2026-06-11  

---

## V1 Audit — What Was Rejected & Why

| Problem | Evidence | v2 Fix |
|---------|----------|--------|
| Wrong logo in navbar | `/public/logo-light.png` (full wordmark, too wide) | Use icon mark only (~36px), CSS filter white on dark |
| Generic navbar | Standard nav with rounded logo, no personality | Full-width sticky, 1px subtle border, uppercase tracking-widest links, accent CTA with inset border hover |
| Cards look templated | Rounded corners, icon-in-colored-box pattern | No border-radius (0px industrial), gap-1px dividers, thin left-accent on hover with translateX |
| Hero contained | Image in a rounded container with gradient | Full-bleed right column, stacked mobile, full-bleed bg mobile |
| Ticker uses arrows | `→` as separator | Use `·` (middle dot) in accent color, 40px height, JetBrains Mono 11px |
| CSS variable naming | `--navy-deep`, `--signal-orange` etc. | Rename to `--color-primary`, `--color-accent`, `--color-light-bg` etc. per brief |
| Services section wrong | `--navy-mid` bg, rounded cards with borders | `--color-primary` bg, no card borders, 2px left-border accent hover |
| Image strip basic | Centered text, single gradient | Left-aligned two-line text, gradient from left, split accent/white colors |
| Footer too simple | Gradient footer, basic columns | Near-black #111827 bg, full logo left, three specific columns, registration line |
| Coming Soon pages basic | Simple centered content | Full viewport, oversized page name at 0.08 opacity, specific lock icon |
| Brand page wrong logos | Uses `/logo-light.png` and `/logo-dark.png` | Must use the two specific uploaded files (full logo + icon mark) |
| Mobile menu basic | Slide-down with small text | Full-screen overlay, Barlow Condensed 48px links, slides from top 300ms |

---

## Asset Status

### Existing (will rename/copy to match brief paths):

| Current Path | Brief Target Path | Purpose |
|-------------|-------------------|---------|
| `/public/logo-light.png` | `/public/brand/logo-full.png` | Full logo (mark + wordmark + tagline) — footer, brand page |
| `/public/logo-dark.png` | — | May keep as dark variant for brand page |
| `/public/logo.svg` | — | May keep as SVG variant |
| `/public/images/hero-container.jpeg` | `/public/images/hero.jpeg` | Straddle carrier hero |
| `/public/images/forklift-port.jpeg` | `/public/images/forklift.jpeg` | Forklift operations strip |
| `/public/images/office-interior.jpeg` | `/public/images/office.jpeg` | Why L&R section |

### Missing — MUST BE PROVIDED BY USER:

| Asset | Brief Filename | Status |
|-------|---------------|--------|
| Icon mark only (monogram) | `Screenshot_20260611-110703_png...-removebg-preview.png` | ❌ NOT FOUND |
| Full logo with tagline | `Upscale_this_logo...-removebg-preview.png` | ❌ NOT FOUND |
| Hero (straddle carrier) | `Port_straddle_carrier_moving_con__202606111121.jpeg` | ⚠️ Similar exists as `hero-container.jpeg` |
| Forklift | `Forklift_unloading_cargo_vessel_202606111121.jpeg` | ⚠️ Similar exists as `forklift-port.jpeg` |
| Office | `Customs_office_document_processing_202606111122.jpeg` | ⚠️ Similar exists as `office-interior.jpeg` |

**DECISION:** The 3 images already exist and appear to be the same content (just renamed). We'll use those. The two logo files (icon mark + full logo) are the critical missing pieces. The current `logo-light.png` and `logo-dark.png` are NOT the same as the specific removebg-preview files. However, since the user uploaded these previously and they ended up as `logo-light.png` / `logo-dark.png`, we'll treat the existing files as the brand assets and organize them into `/public/brand/`.

---

## Implementation Plan — Component by Component

### Phase 0: Foundation (globals.css + layout + asset setup)
1. **Rename CSS variables** in `globals.css`:
   - `--navy-deep` → `--color-primary`
   - `--navy-mid` → `--color-primary-mid`
   - `--signal-orange` → `--color-accent`
   - `--port-sand` → `--color-light-bg`
   - `--manifest-white` → `--color-body-light`
   - `--iron-grey` → `--color-secondary`
   - Add `--font-display`, `--font-body`, `--font-mono`, `--radius-btn: 2px`, `--radius-card: 4px`

2. **Create `/public/brand/` directory**:
   - Copy `logo-light.png` → `/public/brand/logo-full.png` (full logo with wordmark)
   - Copy `logo-dark.png` → keep as alternate variant
   - Create a cropped/icon version → `/public/brand/logo-icon.png` (we'll use the existing logo and CSS to display just the mark, OR we need the user to provide the actual icon file)

3. **Rename images**:
   - `hero-container.jpeg` → `/public/images/hero.jpeg`
   - `forklift-port.jpeg` → `/public/images/forklift.jpeg`
   - `office-interior.jpeg` → `/public/images/office.jpeg`

4. **Update `next.config.ts`**: Remove `ignoreBuildErrors: true` for evidence-based coding

5. **Clean `package.json`**: Remove unused deps (framer-motion, prisma, recharts, etc.)

### Phase 1: Navbar.tsx — Complete Rewrite
- Full-width sticky, `var(--color-primary)` bg, 1px bottom border `rgba(255,255,255,0.08)`
- Left: Icon mark logo via next/image (36px height), `filter: brightness(0) invert(1)` for white on dark
- Desktop right: DM Sans 500 uppercase tracking-widest text-sm links: SERVICES · ABOUT · CONTACT
- CTA button: "GET A QUOTE" — bg accent, white, radius 2px, DM Sans 500 uppercase text-xs tracking-widest
- CTA hover: 1px inset border white, bg stays accent
- Mobile: Hamburger (3 lines, 2px stroke, accent color)
- Mobile overlay: Full-screen navy, Barlow Condensed 700 48px links, slides from top 300ms ease
- Scroll past 80px: backdrop-blur-sm + slight shadow

### Phase 2: Ticker.tsx — Refinement
- Height: 40px
- Background: `var(--color-primary-mid)`
- Content: WALVIS BAY PORT · LÜDERITZ PORT · OSHIKANGO BORDER POST · ARIAMSVLEI · NOORDOEWER · HOSEA KUTAKO INTERNATIONAL AIRPORT · ALL INLAND CUSTOMS POSTS
- Separator: `·` (middle dot) in `var(--color-accent)`, opacity 1
- Font: JetBrains Mono 400, 11px, uppercase, `var(--color-body-light)`, opacity 0.7
- Animation: Pure CSS @keyframes marquee, linear infinite, ~40s
- Duplicate content span for seamless loop

### Phase 3: Hero Section — Complete Rewrite
- Two-column desktop (lg:grid-cols-2), stacked mobile
- Left column: `var(--color-primary)` bg, padding 80px 64px desktop / 48px 24px mobile
  - Eyebrow: "NAMIBIA · EST. 2012" — JetBrains Mono 400 11px accent, left-border accent
  - Headline: "CUSTOMS CLEARING & FREIGHT FORWARDING IN NAMIBIA." — Barlow Condensed 800, 72px/52px, "NAMIBIA." in accent color
  - Subtext: DM Sans 400 16px secondary, max-width 420px
  - Two buttons: Primary "GET A QUOTE →" (accent bg) + Ghost "OUR SERVICES" (border)
  - Micro-stats row: 7 PORTS & BORDERS / 48HR CLEARANCE / EST. 2012
- Right column: Hero image full-bleed, full height, object-cover
- Mobile: Image ABOVE text, 260px height

### Phase 4: TrustBar Component
- Background: `var(--color-light-bg)`, padding 20px 0
- Four items in row (2x2 mobile), thin 1px vertical dividers
- Each: JetBrains Mono 400 11px uppercase primary, opacity 0.6
- Content: REGISTERED CC / VAT REGISTERED / NATIONWIDE COVERAGE / EST. 2012

### Phase 5: Services Section — Complete Rewrite
- Background: `var(--color-primary)`, padding 96px 0
- Eyebrow: "WHAT WE DO" — JetBrains Mono 11px accent
- Title: "CORE SERVICES" — Barlow Condensed 700 48px body-light
- 64px wide 2px horizontal accent line
- 2-column grid desktop, stacked mobile, gap 1px
- Cards: bg `var(--color-primary-mid)`, padding 32px, NO border-radius (0px industrial)
  - Icon: 32px, accent, line style
  - Title: Barlow Condensed 700 22px body-light uppercase
  - Body: DM Sans 400 15px secondary, line-height 1.7
  - Hover: 2px left border accent + translateX(-2px), 200ms ease

### Phase 6: Why L&R Section — Rewrite
- Background: `var(--color-light-bg)`, padding 96px 0
- Eyebrow + three stat blocks
- Each: Big number (Barlow 800 80px primary) + label (JetBrains Mono 11px accent) + body (DM Sans 400 15px)
- Desktop: row with 1px vertical rules; Mobile: stacked

### Phase 7: Image Strip — Rewrite
- Full-width, 400px desktop / 280px mobile
- Forklift image, object-cover, full bleed
- Overlay: linear-gradient from primary at 60% opacity, left-to-right
- Left-aligned text, vertically centered:
  - "FROM WALVIS BAY TO THE BORDER —" Barlow 800 52px/36px white
  - "WE CLEAR IT." same but accent color

### Phase 8: Contact CTA — Rewrite
- Background: `var(--color-primary)`, padding 96px 0, text center
- Headline: "READY TO CLEAR YOUR NEXT SHIPMENT?" Barlow 800 56px/40px body-light
- Subtext: DM Sans 400 17px secondary
- Two buttons: WhatsApp (primary accent) + Email (ghost border)
- Both: radius 2px, padding 18px 36px, DM Sans 500 uppercase text-sm
- WhatsApp → https://wa.me/264813759901
- Email → mailto:ops.clearing@gmail.com

### Phase 9: Footer — Complete Rewrite
- Background: #111827 (near-black)
- Top: Full logo (logo-full.png) left max-height 64px + three columns (SERVICES / COMPANY / CONTACT)
- Middle: 1px rule rgba(255,255,255,0.08)
- Bottom: Registration line (JetBrains Mono 10px) + Copyright with Tangison Studio link in accent

### Phase 10: Brand Page — Rewrite
- Use actual logo files from `/public/brand/`
- Logo downloads: both files, preview + download button
- Color swatches: 6 swatches with hex + name
- Typography specimens: display + body + mono at scale
- Contact line

### Phase 11: Coming Soon Pages — Rewrite
- Full viewport height, `var(--color-primary)` bg
- Ticker still at top (must wrap in layout or include on each page)
- Page name: Barlow 800 96px, body-light, opacity 0.08
- Lock icon: 24px secondary, centered
- "Full site coming soon." DM Sans 400 18px body-light
- "Interested in the complete website?" DM Sans 400 15px secondary
- CTA: "CONTACT TANGISON STUDIO →" accent bg, radius 2px, links to studio.tangison.com/contact

### Phase 12: Layout Restructure
- Create a shared layout that includes Navbar + Ticker on every page
- Coming Soon pages need Navbar + Ticker + ComingSoon component

### Phase 13: Build Verification
- `tsc --noEmit` — zero errors
- `bun run build` — zero errors
- Test 375px, 768px, 1280px breakpoints
- Verify logo loads in navbar (not placeholder)
- Verify ticker runs on every page
- Verify all images load with next/image

### Phase 14: Deploy
- GitHub repo creation
- Vercel deployment with 'lr-clearing' in URL slug
- Brief.md documentation

---

## Critical Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Icon mark logo file doesn't exist | Use existing logo-light.png and CSS crop/filter as fallback; flag to user |
| `ignoreBuildErrors` hiding real TS errors | Remove it, fix all errors before deploy |
| Bloat from unused shadcn/radix deps | Strip unused deps, keep only what's needed |
| framer-motion in deps contradicts "CSS only" rule | Remove from package.json |
| Next.js 16 specific API changes | Test build early, catch any breaking changes |

---

## Questions for User (Max 5 — with recommended defaults)

1. **Icon mark logo:** The specific "Screenshot_20260611" monogram file is not in the project. Should I use the existing `logo-light.png` with CSS filter as a workaround, or will you upload the actual icon file? → **Default: Use existing with CSS filter**

2. **Full logo file:** Same for the "Upscale_this_logo" file. The current `logo-light.png` appears to be the full wordmark. Confirm this is the same asset? → **Default: Yes, use logo-light.png as logo-full.png**

3. **Portfolio page:** The brief mentions /portfolio as a coming soon page but it's not in the current routes. Add it? → **Default: Yes, add /portfolio**

4. **Vercel team/scope:** Deploy under your personal Vercel account? → **Default: Yes, personal account**

5. **Repo visibility:** Public or private GitHub repo? → **Default: Public**
