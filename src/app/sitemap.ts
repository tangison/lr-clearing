import type { MetadataRoute } from 'next';
import { services, nav as navData } from '@/lib/content';

const BASE_URL = 'https://lr-clearing.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    ...navData.primary,
    ...navData.company,
    ...navData.compliance,
    ...navData.support,
    { label: 'Industries', href: '/industries' },
    { label: 'Brand', href: '/brand' },
  ].map((r) => ({
    url: `${BASE_URL}${r.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r.href === '/' ? 1 : 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
