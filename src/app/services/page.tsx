import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { services } from '@/lib/content';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Services — L&R Clearing Agency CC",
  description:
    "Customs clearing, freight forwarding, port & border operations, import/export documentation, cargo management, supply chain solutions, and specialized services across Namibia and Southern Africa.",
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Our Services"
          title="End-to-end customs, freight, and supply chain services."
          description="From the first Bill of Entry to the final delivery, we handle every link in the cross-border trade chain — so your cargo moves compliantly, predictably, and on time."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid gap-6">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block p-8 md:p-10 rounded-[var(--radius-card)] transition-all duration-300 hover:translate-x-1"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-divider)',
                    borderLeft: '4px solid var(--color-accent)',
                  }}
                >
                  <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                    <div className="md:col-span-1">
                      <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)]">
                        {s.number}
                      </span>
                    </div>
                    <div className="md:col-span-2 flex md:justify-center">
                      <span
                        className="inline-flex items-center justify-center w-14 h-14 rounded-[var(--radius-card)]"
                        style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}
                      >
                        <Icon name={s.icon} className="w-7 h-7" />
                      </span>
                    </div>
                    <div className="md:col-span-6">
                      <h3
                        className="font-display font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors"
                        style={{ fontSize: '1.75rem', lineHeight: 1.2 }}
                      >
                        {s.title}
                      </h3>
                      <p className="font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/75">
                        {s.shortDescription}
                      </p>
                    </div>
                    <div className="md:col-span-3 flex md:justify-end items-start">
                      <span
                        className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] group-hover:translate-x-1 transition-transform"
                      >
                        Explore
                        <Icon name="arrow-right" className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA
          title="Not sure which service you need?"
          description="Send us your shipment details and we will recommend the most cost-effective combination of clearance, forwarding, and logistics services for your cargo."
        />
      </main>
      <Footer />
    </>
  );
}
