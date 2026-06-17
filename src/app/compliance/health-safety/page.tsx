import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { healthSafety, company } from '@/lib/content';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Health & Safety — L&R Clearing Agency CC",
  description: "Our commitment to maintaining the highest standards of safety, ethical conduct, and regulatory compliance in customs clearing and freight forwarding.",
  alternates: { canonical: '/compliance/health-safety' },
};

export default function HealthSafetyPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Compliance"
          title="Health, Safety & Compliance"
          description={healthSafety.body}
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Compliance', href: '/compliance/regulations' }, { label: 'Health & Safety' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8 font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/85">
                <p>
                  As a licensed customs clearing agency operating in {company.country}, we are bound by the
                  Customs and Excise Act, the Value Added Tax Act, the Close Corporations Act, and the
                  broader framework of Southern African Customs Union (SACU) and SADC trade protocols. We
                  regard these not as constraints but as the baseline of professional conduct.
                </p>
                <p>
                  Our health and safety posture extends beyond our own staff to the cargo we handle and the
                  partners we engage. We verify that dangerous goods are correctly classified, documented,
                  and packaged before we file a declaration. We will not facilitate the movement of
                  consignments that appear to breach sanctions, contravene CITES, or violate the laws of the
                  importing or exporting country.
                </p>
                <p>
                  Internally, we maintain documented procedures for client onboarding, documentation review,
                  declaration submission, exception handling, and records retention. Every staff member is
                  briefed on these procedures during induction and re-briefed whenever a regulatory change
                  affects their workstream.
                </p>
                <p>
                  We cooperate fully with customs, port, and tax authorities during inspections, audits, and
                  inquiries. Where a discrepancy is identified in a declaration we have filed, we disclose it
                  promptly to the client and to Customs, and we manage the amendment or voluntary disclosure
                  process on the client's behalf.
                </p>
              </div>

              <aside className="space-y-5">
                <div className="p-8 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <Icon name="shield" className="w-10 h-10 text-[var(--color-accent)] mb-5" />
                  <h3 className="font-display font-bold text-white text-lg mb-3">Compliance Commitments</h3>
                  <ul className="space-y-3 font-body text-sm text-[var(--color-secondary)]">
                    <li className="flex gap-2"><span className="text-[var(--color-accent)]">•</span> Accurate tariff classification on every declaration</li>
                    <li className="flex gap-2"><span className="text-[var(--color-accent)]">•</span> Full disclosure of dutiable value including assists and royalties</li>
                    <li className="flex gap-2"><span className="text-[var(--color-accent)]">•</span> Verification of permit validity before submission</li>
                    <li className="flex gap-2"><span className="text-[var(--color-accent)]">•</span> Honest communication with Customs &amp; Excise</li>
                    <li className="flex gap-2"><span className="text-[var(--color-accent)]">•</span> Records retained for the statutory minimum period</li>
                    <li className="flex gap-2"><span className="text-[var(--color-accent)]">•</span> Refusal to facilitate sanctions or CITES violations</li>
                  </ul>
                </div>
                <div className="p-6 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-light-bg)' }}>
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-2">Regulator</p>
                  <p className="font-body text-sm text-[var(--color-primary)]">
                    Namibia Customs &amp; Excise (Ministry of Finance) · Namport · Namibian Revenue Agency
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
