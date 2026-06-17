import { redirect } from 'next/navigation';

/**
 * Legacy /portfolio route — replaced by /services in v3.
 * Permanent redirect to preserve SEO equity and avoid broken inbound links.
 */
export default function PortfolioPage() {
  redirect('/services');
}
