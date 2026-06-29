import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Risk Management, L&R Clearing Agency CC",
  description: "How we identify, mitigate, and manage the operational, compliance, and commercial risks involved in cross-border cargo movement.",
  alternates: { canonical: '/compliance/risk-management' },
};

export default function RiskManagementPage() {
  const risks = [
    {
      title: 'Documentation Risk',
      mitigation: 'Every declaration is reviewed by a second agent before submission. Invoices, packing lists, and bills of lading are checked for consistency in values, weights, descriptions, and currency codes.',
    },
    {
      title: 'Classification Risk',
      mitigation: 'We maintain a commodity classification register per client. New products are researched and the proposed HS code is documented before the first declaration is filed.',
    },
    {
      title: 'Valuation Risk',
      mitigation: 'For related-party transactions and shipments involving assists or royalties, we collect the full valuation narrative up-front so the declared value will withstand audit.',
    },
    {
      title: 'Permit & Licence Risk',
      mitigation: 'We confirm permit validity and coverage before submission. Expired or insufficient permits are flagged to the client before customs raises a query.',
    },
    {
      title: 'Cargo Handling Risk',
      mitigation: 'Dangerous goods are verified against the IMDG/IATA/ADR classifications and the carrier\'s acceptance criteria. Special-handling cargo is routed through partners with the appropriate equipment.',
    },
    {
      title: 'Counterparty Risk',
      mitigation: 'We work with a vetted panel of carriers, warehouses, and border-side agents. New counterparties are onboarded only after a documented due-diligence check.',
    },
    {
      title: 'Regulatory Change Risk',
      mitigation: 'We monitor customs notices, tariff amendments, and SARS/SACU publications daily. Material changes are summarised and circulated to affected clients within 48 hours.',
    },
    {
      title: 'Financial Risk',
      mitigation: 'Disbursements are tracked per shipment. Clients receive itemised statements. Outstanding balances are escalated before they become aged debt.',
    },
  ];

  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Compliance"
          title="Risk Management"
          description="Cross-border trade involves layered risks: documentation, classification, valuation, permitting, handling, counterparty, regulatory, and financial. We have a documented mitigation for each."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Compliance', href: '/compliance/regulations' }, { label: 'Risk Management' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid sm:grid-cols-2 gap-5">
              {risks.map((r, i) => (
                <div key={r.title} className="p-8 rounded-[var(--radius-card)]" style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-[var(--radius-btn)]" style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}>
                      <Icon name="shield" className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--color-primary)] mb-3">{r.title}</h3>
                  <p className="font-body text-[0.9375rem] leading-relaxed text-[var(--color-body-text)]">{r.mitigation}</p>
                </div>
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
