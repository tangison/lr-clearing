import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { company } from '@/lib/content';

export const metadata: Metadata = {
  title: "Privacy Policy, L&R Clearing Agency CC",
  description:
    "How L&R Clearing Agency CC collects, uses, and protects personal and commercial information submitted through this website or during customs clearing services.",
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="We respect the confidentiality of your commercial information and process personal data in accordance with Namibian law."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        />
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-3xl px-6 md:px-12 py-16 md:py-24">
            <article className="space-y-10 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
              <Section title="1. Who We Are">
                {company.legalName} ({company.registration}) is a Namibian Close Corporation
                providing customs clearing and freight forwarding services. For the purposes of
                data protection, we are the data controller of the personal and commercial
                information you provide to us.
              </Section>
              <Section title="2. Information We Collect">
                We collect information that you provide directly to us when you: submit an inquiry
                through our contact form, request a quotation, engage us for clearance or
                forwarding services, or communicate with us by phone, email, or WhatsApp. This
                typically includes your name, business name, contact details, and shipment
                information (including cargo descriptions, values, origin, destination, and
                supporting documentation).
              </Section>
              <Section title="3. How We Use Your Information">
                We use your information to: (a) provide the customs clearing, freight forwarding,
                and logistics services you have engaged us to perform; (b) prepare and submit
                customs declarations and other statutory documents on your behalf; (c) communicate
                with you about your shipments and our services; (d) comply with our legal and
                regulatory obligations, including record-keeping requirements under Namibian
                Customs and Excise law; and (e) improve our services and website.
              </Section>
              <Section title="4. Legal Basis for Processing">
                We process your information on the legal bases of: (a) performance of a contract
                with you for the provision of clearing and forwarding services; (b) compliance
                with our legal obligations under Namibian customs, tax, and company law; and (c)
                our legitimate interests in operating our business and communicating with clients.
              </Section>
              <Section title="5. Information Sharing">
                We share your information with third parties only where necessary to perform the
                services you have engaged us for, for example with carriers, port authorities,
                customs, and other government agencies. We may also share information where
                required by law or to protect our legal rights. We do not sell your personal data.
              </Section>
              <Section title="6. International Transfers">
                Because customs clearance and freight forwarding are inherently cross-border
                activities, your shipment information may be shared with counterparties in other
                jurisdictions. We take reasonable steps to ensure that such transfers are protected
                by appropriate safeguards, including the standard contractual terms used in
                international trade.
              </Section>
              <Section title="7. Data Retention">
                We retain shipment and customs records for the period required by Namibian Customs
                and Excise regulations (typically five years from the date of clearance). Inquiry
                records that do not result in an engagement are retained for a shorter period and
                then deleted.
              </Section>
              <Section title="8. Data Security">
                We implement technical and organisational measures to protect your information
                against unauthorised access, loss, or disclosure. Access to client data is
                restricted to authorised personnel who require it to perform their duties.
              </Section>
              <Section title="9. Your Rights">
                You have the right to: request access to your personal data; request correction of
                inaccurate information; request deletion of your personal data (subject to our
                legal retention obligations); and object to or restrict certain processing. To
                exercise any of these rights, contact us using the details below.
              </Section>
              <Section title="10. Cookies">
                This website uses minimal cookies necessary for its operation. We do not use
                third-party advertising or tracking cookies. Analytics, if added in future, will
                be configured to anonymise IP addresses and will be disclosed here.
              </Section>
              <Section title="11. Contact">
                For any privacy-related questions or requests, contact us at:{' '}
                <a href={`mailto:${company.email}`} className="text-[var(--color-accent-text)] underline">{company.email}</a>{' '}
                or {company.phoneDisplay} / {company.phoneSecondaryDisplay} (24/7), or write to us at {company.address.line1},{' '}
                {company.address.city}, {company.address.country}.
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
