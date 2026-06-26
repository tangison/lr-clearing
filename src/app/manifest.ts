import type { MetadataRoute } from 'next';
import { company } from '@/lib/content';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.legalName,
    short_name: 'L&R Clearing',
    description: company.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#1B2A4A',
    theme_color: '#1B2A4A',
    icons: [
      // TODO: export correct PWA icon sizes — logo-icon.png is 669×373, not square.
      // For now Next.js will resize on demand, but a proper 192×192 and 512×512
      // PNG should be exported from the logo source for best PWA support.
      {
        src: '/brand/logo-icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/brand/logo-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
