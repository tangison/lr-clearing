import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { company } from '@/lib/content';

export const metadata: Metadata = {
  title: "Terms & Conditions, L&R Clearing Agency CC",
  description:
    "Terms governing use of the L&R Clearing Agency CC website and our customs clearing and freight forwarding services to clients in Namibia and Southern Africa.",
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Legal"
          title="Terms & Conditions"
          description="The terms below govern your use of this website and the engagement of our services. Please read them carefully before proceeding."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]}
        />
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-3xl px-6 md:px-12 py-16 md:py-24">
            <article className="space-y-10 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
              <Section title="1. Introduction">
                These terms and conditions ("Terms") govern your access to and use of the website
                operated by {company.legalName} ("we", "us", "our"), a Namibian-registered Close
                Corporation ({company.registration}) with its principal place of business at{' '}
                {company.address.line1}, {company.address.city}, {company.address.country}. By
                accessing this website or engaging our services, you agree to be bound by these
                Terms.
              </Section>
              <Section title="2. Services">
                We provide customs clearing, freight forwarding, cargo coordination, and supply
                chain support services as described on this website. The specific scope, fees, and
                timeline of any engagement will be set out in a separate written quotation or
                service agreement. In the event of any conflict between these Terms and a signed
                service agreement, the signed agreement shall prevail.
              </Section>
              <Section title="3. Client Obligations">
                As a client, you agree to: (a) provide accurate, complete, and timely information
                and documentation regarding your cargo; (b) ensure that all goods shipped are
                legal, properly classified, and not subject to any sanction or prohibition; (c)
                comply with all applicable Namibian and international trade, customs, and transport
                regulations; and (d) settle our invoices within the agreed credit terms.
              </Section>
              <Section title="4. Customs Compliance">
                While we exercise professional care in preparing and submitting customs
                declarations on your behalf, the legal responsibility for the accuracy of declared
                information, the lawfulness of imported or exported goods, and the payment of
                duties, taxes, and any penalties ultimately rests with the importer or exporter of
                record. We will alert you to any discrepancies or risks identified during
                processing but cannot be held liable for inaccuracies in information you provide.
              </Section>
              <Section title="5. Fees and Payment">
                Our fees are quoted per engagement and are typically denominated in Namibian
                Dollars (NAD), which is pegged 1:1 to the South African Rand (ZAR). Disbursements
                incurred on your behalf, including but not limited to port charges, customs duty,
                VAT, transport, and inspection fees, are billed at cost plus an administrative
                margin where applicable. Unless otherwise agreed, invoices are payable within 30
                days of issue.
              </Section>
              <Section title="6. Limitation of Liability">
                To the maximum extent permitted by law, our liability for any single engagement
                shall not exceed the fees paid to us for that engagement. We shall not be liable
                for indirect, consequential, or speculative losses, including loss of profit, loss
                of market, or business interruption. We do not accept liability for delays caused
                by third parties (carriers, port authorities, customs, or other government
                agencies) or by force majeure events.
              </Section>
              <Section title="7. Confidentiality and Data Protection">
                We treat your commercial information as confidential and process personal data in
                accordance with our Privacy Policy and applicable Namibian law. We retain
                shipment and customs records for the period required by Namibian Customs and
                Excise regulations.
              </Section>
              <Section title="8. Intellectual Property">
                All content on this website, including text, logos, graphics, and code, is the
                property of {company.legalName} or its licensors and may not be reproduced without
                our prior written consent.
              </Section>
              <Section title="9. Governing Law and Jurisdiction">
                These Terms are governed by the laws of the Republic of Namibia. Any dispute
                arising from these Terms or from the provision of our services shall be subject to
                the exclusive jurisdiction of the Namibian courts, unless otherwise agreed in
                writing.
              </Section>
              <Section title="10. Changes to These Terms">
                We may update these Terms from time to time. The current version will always be
                available on this page with the effective date noted below. Continued use of this
                website or our services after a change constitutes acceptance of the updated
                Terms.
              </Section>
              <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)] pt-8" style={{ borderTop: '1px solid var(--border-divider)' }}>
                Effective date: 17 June 2026 · {company.legalName} · {company.registration} · VAT {company.vat}
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display font-bold text-xl text-[var(--color-primary)] mb-4">{title}</h2>
      <p>{children}</p>
    </section>
  );
}
