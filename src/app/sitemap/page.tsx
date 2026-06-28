import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { services, nav as navData } from '@/lib/content';

export const metadata: Metadata = {
  title: "Sitemap, L&R Clearing Agency CC",
  description: "Complete index of all pages on the L&R Clearing Agency CC website.",
  alternates: { canonical: '/sitemap' },
};

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Site Index"
          title="Sitemap"
          description="A complete list of every page on this site."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Sitemap' }]}
        />
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Column title="Main Pages" links={navData.primary} />
              <Column title="Services" links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
              <Column title="Company" links={navData.company} />
              <Column title="Compliance" links={navData.compliance} />
              <Column title="Support" links={navData.support} />
              <Column title="Brand" links={[{ label: 'Brand Guidelines', href: '/brand' }]} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-5">
        {title}
      </h2>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-body text-[0.9375rem] text-[var(--color-primary)]/80 hover:text-[var(--color-accent)] transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
