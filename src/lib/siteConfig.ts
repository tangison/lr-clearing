/**
 * siteConfig. Single source of truth for the production site URL.
 *
 * Used by:
 *  - src/app/layout.tsx       (metadataBase, OG url, JSON-LD url/logo/image)
 *  - src/app/sitemap.ts       (sitemap.xml entries)
 *  - src/components/ContactForm.tsx (WhatsApp message footer)
 *
 * The canonical URL is read from NEXT_PUBLIC_SITE_URL so that switching
 * to the custom domain (www.lrclearing.com) only requires updating one
 * environment variable in Vercel, no code changes needed.
 *
 * Until the custom domain is live, the canonical falls back to the
 * Vercel preview URL with the correct `-ten` suffix.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lrclearing.com';
