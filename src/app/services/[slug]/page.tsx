import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { services } from '@/lib/content';
import { Icon } from '@/lib/icons';
import { siteUrl } from '@/lib/siteConfig';

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — L&R Clearing Agency CC`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — L&R Clearing Agency CC`,
      description: service.shortDescription,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  // BreadcrumbList JSON-LD for SEO
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${siteUrl}/services/${service.slug}` },
    ],
  };

  // Service schema for rich results
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'Organization',
      name: 'L&R Clearing Agency CC',
      url: siteUrl,
    },
    areaServed: [
      { '@type': 'Country', name: 'Namibia' },
      { '@type': 'Place', name: 'Southern Africa' },
    ],
    url: `${siteUrl}/services/${service.slug}`,
  };

  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <PageHeader
          eyebrow={`Service ${service.number}`}
          title={service.title}
          description={service.shortDescription}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]}
        />

        {/* Hero image */}
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 -mt-8 md:-mt-12 pb-8 md:pb-12 relative z-10">
            <div
              className="relative w-full overflow-hidden rounded-[var(--radius-card)]"
              style={{ aspectRatio: '21 / 9', boxShadow: '0 20px 50px -20px rgba(27,42,74,0.45)' }}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(27,42,74,0) 50%, rgba(27,42,74,0.85) 100%)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Service {service.number}
                </p>
                <h2 className="font-display font-extrabold text-white text-2xl md:text-4xl leading-tight">
                  {service.title}
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">Overview</p>
                <p className="font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/85">
                  {service.longDescription}
                </p>

                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mt-12 mb-6">
                  What this service includes
                </p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5 inline-flex w-6 h-6 items-center justify-center rounded-[var(--radius-btn)]" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                        <Icon name="check" className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-body text-[1.0625rem] text-[var(--color-primary)]/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="space-y-6">
                <div className="p-8 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <span className="inline-flex w-12 h-12 items-center justify-center rounded-[var(--radius-card)] mb-5" style={{ backgroundColor: 'var(--color-primary-mid)', color: 'var(--color-accent)' }}>
                    <Icon name={service.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="font-display font-bold text-white text-lg mb-2">Need this service?</h3>
                  <p className="font-body text-sm text-[var(--color-secondary)] mb-5">
                    Send us your shipment details; we will respond within one business hour with a costed plan.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 font-body font-medium px-5 py-3 text-xs tracking-widest uppercase transition-all duration-300 rounded-[var(--radius-btn)] w-full"
                    style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
                  >
                    Request a Quote
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </Link>
                </div>

                <div className="p-6 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-light-bg)' }}>
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-3">Service Code</p>
                  <p className="font-display font-bold text-3xl text-[var(--color-accent)]">{service.number}</p>
                  <p className="font-body text-xs text-[var(--color-primary)]/70 mt-2">
                    Use this code when referencing this service in correspondence.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-3">Other Services</p>
                <h2 className="font-display font-extrabold tracking-tight text-white" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1 }}>
                  Explore the rest of our service portfolio.
                </h2>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group p-6 rounded-[var(--radius-card)] transition-all duration-300 hover:translate-x-1"
                  style={{ backgroundColor: 'var(--color-primary-mid)', border: '1px solid var(--border-subtle)' }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex w-10 h-10 items-center justify-center rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-accent)' }}>
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">{s.number}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-secondary)] leading-relaxed">
                    {s.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
