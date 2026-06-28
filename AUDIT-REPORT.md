# Tangison Audit — lr-clearing
**Date:** 2026-06-28
**Target:** https://www.lrclearing.com (repo: tangison/lr-clearing @ 667add1)
**Audit iteration:** 1 (complete)

---

## Phase 1 — Discovery summary

| Tool                  | Result                                              |
|-----------------------|-----------------------------------------------------|
| `npx tsc --noEmit`    | 0 errors                                            |
| `npm run lint`        | 0 errors, 1 warning (intentional Navbar effect dep) |
| `npm audit`           | 2 moderate (postcss transitive via next; no fix without breaking Next 16) |
| Live security headers | 4 of 5 present (CSP missing → fixed in this iteration) |
| Live SEO smoke        | canonical / OG / JSON-LD all serve www.lrclearing.com |
| Live broken links     | 0 broken internal links                             |
| Static source audit   | 18 findings (3 High, 5 Medium, 10 Low)              |

## Phase 2 — Classification

### Critical (0)
None.

### High (3)
| #  | Category | Finding | Fixability | Disposition |
|----|----------|---------|------------|-------------|
| H1 | SEO | `/` (homepage) has no `export const metadata` | Autonomous | **FIXED** — added per-page title/description/canonical/OG |
| H2 | SEO | `/portfolio` has no `export const metadata` | Autonomous (defer) | **FIXED** (defensive) — added minimal metadata; page is a 307 redirect to /services |
| H3 | SEO | `/brand` has no `export const metadata` | Autonomous | **FIXED** — added title/description/canonical/OG |

### Medium (5)
| #  | Category | Finding | Fixability | Disposition |
|----|----------|---------|------------|-------------|
| M1 | SEO | `/sitemap` description too short (66 chars) | Autonomous | **FIXED** — expanded to 132 chars |
| M2 | SEO | `/terms` description too short (64 chars) | Autonomous | **FIXED** — expanded then trimmed to 157 chars |
| M3 | A11y | ContactForm `<input>` flagged as missing label | Autonomous | **FALSE POSITIVE** — script regex couldn't parse JSX `id={name}`; verified manually that each input has matching `<label htmlFor={name}>`. Script patched to handle JSX expressions. |
| M4 | Documentation | README references old email `ops.clearing@gmail.com` | Autonomous | **FIXED** — updated to `hello@lrclearing.com` |
| M5 | Documentation | README references old canonical `lr-clearing-ten.vercel.app` | Autonomous | **FIXED** — updated to `www.lrclearing.com` |

### Low (10)
| #     | Category | Finding | Fixability | Disposition |
|-------|----------|---------|------------|-------------|
| L1-L5 | SEO | 5 pages with meta descriptions >160 chars | Autonomous | **FIXED** — all 5 trimmed to ≤160 chars |
| L6-L9 | Code Quality | 4 open TODO comments | Requires Human Review | **DEFERRED** — all 4 are legitimately tracked (construction.jpeg, apple-touch-icon, social profiles, PWA icons) |
| L10   | Code Quality | `package.json` missing `engines.node` | Autonomous | **FIXED** — added `engines.node >=20.0.0` |

### Additional (security audit)
| #  | Category | Finding | Disposition |
|-----|----------|---------|-------------|
| S1  | Security | CSP header missing | **FIXED** — added Content-Security-Policy with safe defaults for Next.js + WhatsApp + Google Fonts |
| S2  | Security | npm audit: postcss transitive vuln via next | **DEFERRED** — cannot fix without downgrading Next.js; will resolve when Next.js releases a fix |

## Phase 3 — Root cause analysis

- **Missing metadata on `/`, `/brand`**: oversight when pages were first created; `layout.tsx` default masks the gap. Root cause: no lint rule enforcing per-page metadata.
- **Description length issues**: original copy was written for clarity, not for the 70-160 char SEO sweet spot. Root cause: no length check in authoring workflow.
- **ContactForm a11y false positive**: audit script used a simple regex that didn't account for JSX expression syntax (`id={name}`). Root cause: script needed to be JSX-aware. **Patched the script.**
- **README staleness**: previous domain/email switch was applied to source but README was missed. Root cause: no doc-update step in the deployment checklist.
- **TODOs**: all 4 are legitimately deferred (real construction image, apple-touch-icon, social profiles, PWA icons) — leave as TODO, do not resolve.
- **`engines.node` missing**: not pinned in `package.json`. Vercel uses its own default but local dev may diverge. Root cause: project bootstrapped before Node version was decided.
- **CSP missing**: was TODO'd in `next.config.ts` from a previous iteration. Root cause: fear of breaking Next.js hydration. **Resolved** by using permissive-but-real CSP with `unsafe-inline` for scripts/styles (Next.js requires this) and TODO for nonce-based hardening.

## Phase 4 — Prioritization (severity × impact × confidence × reach)

Order applied:
1. M3 ContactForm a11y (verified false positive — no action)
2. H3 /brand metadata (linked from footer, indexed by Google) ✅
3. H1 / homepage metadata (already inherited but no per-page OG override) ✅
4. L1-L5 Truncate 5 long descriptions to ≤160 chars ✅
5. M1, M2 Expand 2 short descriptions ✅
6. M4, M5 Update README email + URL ✅
7. L10 Add `engines.node` to package.json ✅
8. S1 CSP header ✅
9. H2 /portfolio metadata (defensive) ✅

## Phase 5 — Remediation plan

Files touched (13):
- `src/app/page.tsx` — add `export const metadata`
- `src/app/brand/page.tsx` — add `export const metadata`
- `src/app/portfolio/page.tsx` — add minimal metadata (defensive)
- `src/app/{sitemap,terms,pricing,industries,privacy,services,about/vision-mission}/page.tsx` — adjust description lengths
- `next.config.ts` — add CSP header
- `README.md` — update email + URL
- `package.json` — add `engines.node`

Risks mitigated:
- CSP uses `'unsafe-inline'` for scripts/styles — required for Next.js hydration. TODO for nonce-based hardening.
- Description trims preserve meaning, not just chop at 160 chars. Manually reviewed each.

## Phase 6 — Autonomous fixes applied

All 14 autonomous fixes applied. See commit `e0d78b5` + `667add1` on `main`.

## Phase 7 — Validation

| Check | Before | After |
|-------|--------|-------|
| `npx tsc --noEmit` | 0 errors | 0 errors |
| `npm run lint` | 0 errors, 1 warning | 0 errors, 1 warning (unchanged, intentional) |
| `npm run build` | 33/33 pages | 33/33 pages |
| Live broken links | 0 | 0 |
| Live security headers | 4/5 (CSP missing) | 5/5 (CSP live) |
| Live metadata coverage | 18/21 pages with metadata | 21/21 pages with metadata |

## Phase 8 — Re-audit delta

| Metric | Before | After | Delta |
|--------|--------|-------|-------|
| Total findings | 18 | 4 | **-14 (78% reduction)** |
| Critical | 0 | 0 | 0 |
| High | 3 | 0 | **-3** |
| Medium | 5 | 0 | **-5** |
| Low | 10 | 4 | **-6** |
| False positives | 0 | 0 (1 fixed by patching script) | 0 |

**Remaining 4 findings**: all Low-severity TODO comments, all Requires Human Review, all legitimately deferred (tracked issues, not bugs).

## Phase 9 — Reflection

### What improved
- SEO coverage went from 18/21 pages with metadata to 21/21.
- All meta descriptions now in the 70-160 char SEO sweet spot.
- CSP header live on production — closes the only security-header gap.
- README no longer references stale contact info or URLs.
- `engines.node` pins the runtime for local dev consistency.
- Audit script patched to handle JSX expressions — future runs won't false-positive on `id={name}` patterns.

### What failed
- Initial `/terms` description fix overshot (169 → 189 chars after I added "to clients in Namibia and Southern Africa"). Caught in re-audit, trimmed to 157 chars. Lesson: re-audit immediately after each fix batch, not at the end.

### What regressed
- Nothing.

### What should happen next
- Resolve the 4 deferred TODOs when their blockers clear:
  - `construction.jpeg` — source a real photo
  - `apple-touch-icon` — export 180×180 from logo source
  - `sameAs` social profiles — when LinkedIn/Facebook/Instagram are live
  - PWA icon sizes — when proper 192/512 icons are exported
- Tighten CSP from `'unsafe-inline'` to nonce-based once Next.js nonce support is wired (Next 16 supports this; would need middleware).
- Monitor `npm audit` for the postcss fix — when Next.js releases a patched version, upgrade.

### Highest impact remaining issue
None. All High and Medium findings are resolved. The 4 remaining Low TODOs are tracked, not blocking.

## Phase 10 — Loop termination

**Stop condition met:** No critical issues remain. No errors remain. No High or Medium findings remain. Remaining 4 Low findings are all Requires Human Review (deferred TODOs).

**Audit complete.**

## Final deliverables

| Deliverable | Status |
|-------------|--------|
| Audit Report | This file (`AUDIT-REPORT.md`) |
| Fix Report | Commits `e0d78b5` + `667add1` on `main` |
| Regression Report | None — no regressions detected |
| Change Log | `git log --oneline f01844a..667add1` |
| Validation Report | tsc 0 / lint 0 errors 1 warning / build 33/33 / live smoke 12/12 routes 200 |
| GitHub Commit Summary | 2 commits pushed to `main` on `tangison/lr-clearing` |
| Pull Request Summary | Direct push to `main` (no PR — solo maintainer flow) |
| Lessons Learned | (1) Re-audit immediately after each fix batch. (2) Audit scripts must be JSX-aware. (3) README updates belong in the deployment checklist. |
