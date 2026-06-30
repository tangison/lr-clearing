import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { services, permitCategories } from '@/lib/content';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Services, L&R Clearing Agency CC",
  description:
    "Customs clearing, freight forwarding, port & border operations, documentation, cargo management, and supply chain services across Namibia and Southern Africa.",
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
          description="From the first Bill of Entry to the final delivery, we handle every link in the cross-border trade chain, so your cargo moves compliantly, predictably, and on time."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid gap-6">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group grid md:grid-cols-12 gap-6 md:gap-10 p-6 md:p-8 rounded-[var(--radius-card)] transition-all duration-300 hover:translate-x-1 overflow-hidden"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-divider)',
                    borderLeft: '4px solid var(--color-accent)',
                  }}
                >
                  {/* Image */}
                  <div className="md:col-span-4 relative overflow-hidden rounded-[var(--radius-card)]" style={{ aspectRatio: '4 / 3' }}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  {/* Content */}
                  <div className="md:col-span-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)]">
                        {s.number}
                      </span>
                      <span className="inline-flex w-8 h-8 items-center justify-center rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}>
                        <Icon name={s.icon} className="w-4 h-4" />
                      </span>
                    </div>
                    <h3
                      className="font-display font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent-text)] transition-colors"
                      style={{ fontSize: '1.75rem', lineHeight: 1.2 }}
                    >
                      {s.title}
                    </h3>
                    <p className="font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)] mb-4">
                      {s.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] group-hover:translate-x-1 transition-transform">
                      Explore
                      <Icon name="arrow-right" className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Permits & Licences section */}
        <section style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left: heading */}
              <div className="lg:col-span-5">
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mb-4">
                  Permits &amp; Licences
                </p>
                <h2
                  className="font-display font-extrabold tracking-tight text-white mb-5"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}
                >
                  Every permit your cargo needs, handled.
                </h2>
                <p className="font-body text-[1.0625rem] leading-relaxed text-[var(--color-secondary-strong)] mb-8">
                  Beyond the seven core services above, we prepare, submit, and track 30+ permit
                  and approval documents across six regulatory categories — from abnormal load
                  permits to ITAC submissions and aviation operating licences. Whatever your
                  commodity, origin, or destination, the paperwork is part of the service.
                </p>
                <Link
                  href="/permits"
                  className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] hover:underline"
                >
                  View all permits &amp; licences →
                </Link>
              </div>
              {/* Right: category chips */}
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-3">
                  {permitCategories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/permits#${c.slug}`}
                      className="group flex items-center gap-3 p-4 rounded-[var(--radius-card)] transition-all hover:translate-x-1"
                      style={{
                        backgroundColor: 'var(--color-primary-mid)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <span
                        className="shrink-0 inline-flex w-9 h-9 items-center justify-center rounded-[var(--radius-card)]"
                        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-accent)' }}
                      >
                        <Icon name={c.icon} className="w-4 h-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-display font-bold text-white text-sm leading-tight group-hover:text-[var(--color-accent-text)] transition-colors">
                          {c.name}
                        </p>
                        <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)] mt-0.5">
                          {c.items.length} items
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
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
