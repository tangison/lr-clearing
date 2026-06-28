import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { ContactCTA } from '@/components/ContactCTA';
import { instantQuotes, company } from '@/lib/content';
import { Icon } from '@/lib/icons';
import type { IconName } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Instant Quote: Customs Clearing Fees — L&R Clearing Agency CC',
  description:
    'Flat-fee customs clearing for vehicles and commercial & mining equipment across Namibia (NAMRA) and South Africa (SARS). Clear, upfront N$ pricing. Book instantly on WhatsApp.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Instant Quote: Customs Clearing Fees — L&R Clearing Agency CC',
    description:
      'Flat-fee customs clearing for vehicles and commercial & mining equipment across Namibia and South Africa. Clear, upfront N$ pricing.',
    type: 'website',
  },
};

const categoryOrder: Array<'Vehicles' | 'Commercial & Mining Equipment'> = [
  'Vehicles',
  'Commercial & Mining Equipment',
];

const categoryBlurb: Record<string, string> = {
  Vehicles:
    'Flat-fee clearance for vehicles moving across SACU and SADC lanes. Covers the customs agent fee only; duties, VAT, port charges, and transport are billed separately at cost.',
  'Commercial & Mining Equipment':
    'Flat-fee clearance for heavy machinery and mining equipment through Walvis Bay, Lüderitz, and South African border posts.',
};

export default function PricingPage() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    quotes: instantQuotes.filter((q) => q.category === cat),
  }));

  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Instant Quote"
          title="Upfront clearing fees. No surprises."
          description="Pick your lane, tap the WhatsApp button, and we will start your clearance today. All prices are in Namibian Dollars (N$), pegged 1:1 to the South African Rand, and represent the clearing agent fee only. Duties, VAT, port charges, and transport are billed separately at cost."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            {/* Quick assurance row */}
            <div className="grid sm:grid-cols-3 gap-4 mb-16">
              {[
                { icon: 'phone', label: 'Talk to a person', value: company.phoneDisplay },
                { icon: 'mail', label: 'Email', value: company.email },
                { icon: 'clock', label: 'Office hours', value: company.officeHours },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-5 rounded-[var(--radius-card)] bg-white"
                  style={{ border: '1px solid var(--border-divider)' }}
                >
                  <span
                    className="shrink-0 inline-flex w-10 h-10 items-center justify-center rounded-[var(--radius-card)]"
                    style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}
                  >
                    <Icon name={item.icon as IconName} className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
                      {item.label}
                    </p>
                    <p className="font-display font-bold text-[var(--color-primary)] truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="space-y-20">
              {grouped.map(({ category, quotes }) => (
                <div key={category}>
                  <div className="max-w-2xl mb-10">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-3">
                      {category}
                    </p>
                    <h2
                      className="font-display font-extrabold tracking-tight text-[var(--color-primary)]"
                      style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15 }}
                    >
                      {category === 'Vehicles'
                        ? 'Clearing of vehicles from all SACU and SADC countries.'
                        : 'Commercial and mining equipment.'}
                    </h2>
                    <p className="mt-4 font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/75">
                      {categoryBlurb[category]}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {quotes.map((q) => (
                      <article
                        key={q.slug}
                        className="flex flex-col p-6 md:p-8 bg-white rounded-[var(--radius-card)]"
                        style={{
                          border: '1px solid var(--border-divider)',
                          borderLeft: '4px solid var(--color-accent)',
                        }}
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                              {q.jurisdiction} · {q.direction}
                            </p>
                            <h3
                              className="font-display font-bold text-[var(--color-primary)]"
                              style={{ fontSize: '1.375rem', lineHeight: 1.2 }}
                            >
                              {q.title}
                            </h3>
                          </div>
                          <div className="text-right shrink-0">
                            <p
                              className="font-display font-extrabold text-[var(--color-accent)]"
                              style={{ fontSize: '1.875rem', lineHeight: 1 }}
                            >
                              {q.priceLabel}
                            </p>
                            {q.priceNad !== null && (
                              <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mt-1">
                                clearing fee
                              </p>
                            )}
                          </div>
                        </div>

                        {q.notes && (
                          <p className="font-body text-sm leading-relaxed text-[var(--color-primary)]/75 mb-6">
                            {q.notes}
                          </p>
                        )}

                        <div className="mt-auto flex flex-wrap items-center gap-3">
                          <a
                            href={q.whatsappPrefill}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 font-display font-bold text-sm transition-all hover:translate-x-0.5"
                            style={{
                              backgroundColor: 'var(--color-accent)',
                              color: 'white',
                              borderRadius: 'var(--radius-card)',
                            }}
                          >
                            <Icon name="whatsapp" className="w-4 h-4" />
                            Book on WhatsApp
                          </a>
                          <a
                            href={`mailto:${company.email}?subject=${encodeURIComponent(
                              'Quote request: ' + q.title
                            )}`}
                            className="inline-flex items-center gap-2 px-5 py-3 font-display font-bold text-sm transition-colors hover:underline"
                            style={{
                              color: 'var(--color-primary)',
                              border: '1px solid var(--border-divider)',
                              borderRadius: 'var(--radius-card)',
                            }}
                          >
                            <Icon name="mail" className="w-4 h-4" />
                            Email us
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <div
              className="mt-20 p-8 rounded-[var(--radius-card)]"
              style={{ backgroundColor: 'var(--color-light-bg)' }}
            >
              <h3 className="font-display font-bold text-[var(--color-primary)] mb-3" style={{ fontSize: '1.125rem' }}>
                What is included, and what is not.
              </h3>
              <p className="font-body text-sm leading-relaxed text-[var(--color-primary)]/80 mb-4">
                The fees above cover the customs clearing agent fee only: SAD 500/504
                preparation and submission, duty and VAT calculation, customs liaison, and
                release coordination. Duties, VAT, port handling charges, transport, and any
                applicable permits are billed separately at cost. We will provide a full
                estimate before you commit.
              </p>
              <p className="font-body text-sm leading-relaxed text-[var(--color-primary)]/80">
                For lanes marked <strong>Quote on request</strong> (Japan/UK imports, project
                cargo), the ops manager prepares a detailed quote based on vehicle type, origin
                port, and destination. Tap the WhatsApp button to start the conversation.
              </p>
            </div>
          </div>
        </section>

        <ContactCTA
          title="Need a quote for something else?"
          description="Project cargo, abnormal loads, perishables, or high-volume containerized imports. Tell us what is moving and we will come back with a detailed quote within one business hour."
        />
      </main>
      <Footer />
    </>
  );
}
