import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Portfolio, L&R Clearing Agency CC',
  description: 'Redirected to /services. Browse our customs clearing and freight forwarding services.',
  alternates: { canonical: '/services' },
};

/**
 * Legacy /portfolio route, replaced by /services in v3.
 * Permanent redirect to preserve SEO equity and avoid broken inbound links.
 */
export default function PortfolioPage() {
  redirect('/services');
}
