import type { MetadataRoute } from 'next';
import { services, nav as navData } from '@/lib/content';
import { siteUrl as BASE_URL } from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    ...navData.primary,
    ...navData.company,
    ...navData.compliance,
    ...navData.support,
    { label: 'Industries', href: '/industries' },
    { label: 'Brand', href: '/brand' },
  ].map((r) => ({
    url: `${BASE_URL}${r.href}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: r.href === '/' ? 1 : r.href === '/pricing' ? 0.9 : 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
