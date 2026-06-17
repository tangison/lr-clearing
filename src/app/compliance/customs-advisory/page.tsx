import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Customs Advisory Services — L&R Clearing Agency CC",
  description: "Tariff classification, valuation, origin, duty drawback, and trade compliance advisory — consultative support that goes beyond filing declarations.",
  alternates: { canonical: '/compliance/customs-advisory' },
};

export default function CustomsAdvisoryPage() {
  const services = [
    {
      title: 'Tariff Classification',
      detail: 'Binding advice on the correct HS code for your commodity — the foundation of duty calculation, permit requirements, and trade statistics. Wrong classification is the single most common cause of customs queries and post-clearance audits.',
    },
    {
      title: 'Customs Valuation',
      detail: 'Guidance on the transaction value method and the adjustments required for assists, royalties, selling commissions, and transport costs. We ensure your declared value will withstand a valuation audit.',
    },
    {
      title: 'Rules of Origin',
      detail: 'Determination of whether your goods qualify for SACU, SADC, or other preferential origin, and preparation of the supporting statement of origin or certificate.',
    },
    {
      title: 'Duty Drawback & Refunds',
      detail: 'Identification of drawback, rebate, and refund opportunities on previously paid duties — including re-exported inputs, manufactured exports, and specific industry rebates.',
    },
    {
      title: 'Trade Compliance Reviews',
      detail: 'A periodic audit of your import and export history to identify classification, valuation, or documentation issues before Customs does — and to quantify potential exposure.',
    },
    {
      title: 'Permit & Licence Strategy',
      detail: 'Identification of the permits and licences your commodity requires (SABS, Department of Agriculture, Ministry of Mines, NCR, etc.) and assistance with the application process.',
    },
  ];

  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Compliance"
          title="Customs Advisory Services"
          description="Beyond filing declarations, we help clients structure their import and export operations to be compliant, cost-efficient, and audit-ready from day one."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Compliance', href: '/compliance/regulations' }, { label: 'Customs Advisory' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.title} className="p-8 rounded-[var(--radius-card)]" style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)', borderLeft: '3px solid var(--color-accent)' }}>
                  <h3 className="font-display font-bold text-xl text-[var(--color-primary)] mb-3">{s.title}</h3>
                  <p className="font-body text-[0.9375rem] leading-relaxed text-[var(--color-primary)]/75">{s.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-10 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-primary)' }}>
              <Icon name="shield" className="w-10 h-10 text-[var(--color-accent)] mb-5" />
              <h3 className="font-display font-bold text-2xl text-white mb-3">A consultative, not transactional, relationship.</h3>
              <p className="font-body text-[1.0625rem] text-[var(--color-secondary)] max-w-3xl leading-relaxed">
                Most clearing agents file what you give them. We review what you give them and tell you when
                something can be done better — a different tariff heading that reduces duty, a permit you did
                not know you needed, or a valuation method that will not survive an audit. Advisory is built
                into our service, not billed as an extra.
              </p>
            </div>
          </div>
        </section>

        <ContactCTA
          title="Have a classification or valuation question?"
          description="Send us your HS code, product description, and import scenario — we will respond with our advisory view, normally within one business day."
        />
      </main>
      <Footer />
    </>
  );
}
