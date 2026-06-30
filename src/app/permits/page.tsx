import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { permitCategories, company, services } from '@/lib/content';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Permits & Licences, L&R Clearing Agency CC',
  description:
    'Transport, customs, trade control, aviation, compliance, and specialised logistics permits we prepare and manage on behalf of clients across Namibia and SADC.',
  alternates: { canonical: '/permits' },
  openGraph: {
    title: 'Permits & Licences, L&R Clearing Agency CC',
    description:
      'Six permit categories covering every document your cargo needs to move compliantly across Namibia and SADC.',
    type: 'website',
  },
};

export default function PermitsPage() {
  const totalItems = permitCategories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Permits & Licences"
          title="Every permit your cargo needs. Handled."
          description={`From abnormal load permits to ITAC submissions and aviation operating licences, we prepare, submit, and track ${totalItems} distinct permit and approval documents across six categories on behalf of our clients.`}
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Permits' }]}
        />

        {/* In-page anchor nav */}
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 pt-12 md:pt-16">
            <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-secondary-strong)] mb-4">
              Categories
            </p>
            <div className="flex flex-wrap gap-3">
              {permitCategories.map((c) => (
                <a
                  key={c.slug}
                  href={`#${c.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-medium transition-all hover:translate-x-0.5"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-divider)',
                    color: 'var(--color-primary)',
                  }}
                >
                  <Icon name={c.icon} className="w-4 h-4 text-[var(--color-accent-text)]" />
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Category cards */}
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-20">
            <div className="grid gap-8">
              {permitCategories.map((c, idx) => (
                <article
                  key={c.slug}
                  id={c.slug}
                  className="scroll-mt-32 p-8 md:p-12 rounded-[var(--radius-card)]"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-divider)',
                    borderLeft: '4px solid var(--color-accent)',
                  }}
                >
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left: heading */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-4 mb-5">
                        <span
                          className="inline-flex w-12 h-12 items-center justify-center rounded-[var(--radius-card)]"
                          style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}
                        >
                          <Icon name={c.icon} className="w-6 h-6" />
                        </span>
                        <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)]">
                          {String(idx + 1).padStart(2, '0')} / {String(permitCategories.length).padStart(2, '0')}
                        </span>
                      </div>
                      <h2
                        className="font-display font-extrabold tracking-tight text-[var(--color-primary)] mb-4"
                        style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.15 }}
                      >
                        {c.name}
                      </h2>
                      <p className="font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
                        {c.summary}
                      </p>
                      <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)] mt-6">
                        {c.items.length} {c.items.length === 1 ? 'item' : 'items'}
                      </p>
                    </div>

                    {/* Right: items list */}
                    <div className="lg:col-span-7">
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {c.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 font-body text-[0.9375rem] leading-relaxed text-[var(--color-body-text)]"
                          >
                            <span
                              className="shrink-0 inline-flex w-5 h-5 mt-0.5 items-center justify-center rounded-full"
                              style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
                            >
                              <Icon name="check" className="w-3 h-3" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Related services backlink block */}
            <div className="mt-20">
              <div className="max-w-2xl mb-10">
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mb-3">
                  Related Services
                </p>
                <h3
                  className="font-display font-extrabold tracking-tight text-[var(--color-primary)]"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.15 }}
                >
                  Permits are part of a bigger service.
                </h3>
                <p className="mt-4 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
                  Each permit category above is delivered as part of (or alongside) one of our
                  seven core service lines. Jump to the service that matches your shipment to see
                  the full clearance and forwarding offer.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.slice(0, 6).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group p-5 rounded-[var(--radius-card)] transition-all hover:translate-x-1"
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid var(--border-divider)',
                      borderLeft: '3px solid var(--color-accent)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="shrink-0 inline-flex w-9 h-9 items-center justify-center rounded-[var(--radius-card)]"
                        style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}
                      >
                        <Icon name={s.icon} className="w-4 h-4" />
                      </span>
                      <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)]">
                        {s.number}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-[var(--color-primary)] text-sm leading-tight mb-1 group-hover:text-[var(--color-accent-text)] transition-colors">
                      {s.title}
                    </h4>
                    <p className="font-body text-xs text-[var(--color-body-text)] leading-relaxed line-clamp-2">
                      {s.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom info block */}
            <div
              className="mt-16 p-8 md:p-10 rounded-[var(--radius-card)]"
              style={{ backgroundColor: 'var(--color-light-bg)' }}
            >
              <h3
                className="font-display font-bold text-[var(--color-primary)] mb-4"
                style={{ fontSize: '1.375rem' }}
              >
                Do not see your permit on the list?
              </h3>
              <p className="font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)] mb-6">
                The catalogue above covers the documents we handle most often, but the regulatory
                landscape is wider than any single page can capture. If your shipment needs a
                permit, licence, or approval we have not listed, call us on{' '}
                <a href={`tel:${company.phone}`} className="text-[var(--color-accent-text)] underline">
                  {company.phoneDisplay}
                </a>{' '}
                or{' '}
                <a href={`tel:${company.phoneSecondary}`} className="text-[var(--color-accent-text)] underline">
                  {company.phoneSecondaryDisplay}
                </a>{' '}
                — we are available {company.officeHours.toLowerCase()} and will confirm within the
                hour whether we can prepare it for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={company.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-display font-bold text-sm transition-all hover:translate-x-0.5"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'white',
                    borderRadius: 'var(--radius-card)',
                  }}
                >
                  <Icon name="whatsapp" className="w-4 h-4" />
                  Ask on WhatsApp
                </a>
                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent('Permit enquiry')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 font-display font-bold text-sm transition-colors hover:underline"
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
            </div>
          </div>
        </section>

        <ContactCTA
          title="Need a permit not listed here?"
          description="Tell us about your cargo, origin, and destination. We will identify the permits you need and prepare the submissions on your behalf."
        />
      </main>
      <Footer />
    </>
  );
}
