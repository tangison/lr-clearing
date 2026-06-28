import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { company } from '@/lib/content';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Compliance & Regulations, L&R Clearing Agency CC",
  description: "The legal and regulatory framework that governs customs clearing and freight forwarding in Namibia, and how we keep our clients on the right side of it.",
  alternates: { canonical: '/compliance/regulations' },
};

export default function RegulationsPage() {
  const frameworks = [
    {
      name: 'Customs and Excise Act (Namibia)',
      role: 'Primary customs law',
      detail: 'Governs the import, export, transit, and warehousing of goods; the assessment and collection of duties and taxes; the licensing of clearing agents; and the enforcement regime for non-compliance.',
    },
    {
      name: 'Value Added Tax Act (Namibia)',
      role: 'VAT framework',
      detail: 'Imposes 15% VAT on the customs value plus duty plus excise on most imports. Defines zero-rated exports, input tax claims, and the apportionment rules for mixed-use imports.',
    },
    {
      name: 'SACU Agreement',
      role: 'Common customs area',
      detail: 'Namibia is part of the Southern African Customs Union with Botswana, Eswatini, Lesotho, and South Africa. Goods moving within SACU are free of customs duty but still subject to local VAT and excise.',
    },
    {
      name: 'SADC Trade Protocol',
      role: 'Regional preferential trade',
      detail: 'Provides for reduced or zero duty on goods originating in SADC member states, supported by a SADC Certificate of Origin. We verify rule-of-origin compliance before claiming preference.',
    },
    {
      name: 'ASYCUDA World',
      role: 'Electronic customs system',
      detail: 'Namibia Customs operates on the ASYCUDA World platform. We submit all declarations electronically, attach scanned supporting documents, and track assessment status online.',
    },
    {
      name: 'Close Corporations Act (Namibia)',
      role: 'Corporate registration',
      detail: `${company.legalName} is registered as a Close Corporation under ${company.registration}, in compliance with the Close Corporations Act and the Companies Act of the Republic of Namibia.`,
    },
  ];

  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Compliance"
          title="Compliance & Regulations"
          description="A summary of the legal frameworks that govern our work, written in plain language for our clients. For formal advice on a specific shipment, contact our team directly."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Compliance', href: '/compliance/regulations' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid gap-6">
              {frameworks.map((f) => (
                <div key={f.name} className="p-8 md:p-10 rounded-[var(--radius-card)] grid md:grid-cols-12 gap-6" style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}>
                  <div className="md:col-span-3">
                    <span className="inline-flex w-10 h-10 items-center justify-center rounded-[var(--radius-card)] mb-3" style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}>
                      <Icon name="shield" className="w-5 h-5" />
                    </span>
                    <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-1">{f.role}</p>
                    <h3 className="font-display font-bold text-lg text-[var(--color-primary)]">{f.name}</h3>
                  </div>
                  <div className="md:col-span-9">
                    <p className="font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/80">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-primary)' }}>
              <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent)] mb-3">Important</p>
              <p className="font-body text-[1.0625rem] text-white leading-relaxed">
                The information on this page is a general summary for client orientation and is not legal advice.
                Tariff rates, permit requirements, and procedural rules change frequently. For the position
                applicable to a specific shipment, contact us with the HS code, origin, and destination.
              </p>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
