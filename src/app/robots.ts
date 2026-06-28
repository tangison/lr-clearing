import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/siteConfig';

/**
 * robots.txt
 *
 * All routes are public. Sitemap URL is generated from the canonical site URL
 * so switching to a new domain requires no manual edits here.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
