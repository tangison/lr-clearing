import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { faqs, company } from '@/lib/content';
import { FAQClient } from '@/components/FAQClient';

export const metadata: Metadata = {
  title: "FAQ, L&R Clearing Agency CC",
  description:
    "Answers to common questions on customs clearance, freight forwarding, imports, exports, documentation, logistics, vehicle imports, and port operations in Namibia.",
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Frequently Asked Questions"
          title="Clear answers to the questions our clients ask most."
          description="Browse by category or search by keyword. If your question isn't answered here, our team is one WhatsApp message away."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-4xl px-6 md:px-12 py-16 md:py-24">
            <FAQClient items={faqs} />

            <div
              className="mt-16 p-8 md:p-10 rounded-[var(--radius-card)] text-center"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <h2
                className="font-display font-bold text-white mb-3"
                style={{ fontSize: '1.75rem', lineHeight: 1.2 }}
              >
                Still have a question?
              </h2>
              <p className="font-body text-[var(--color-secondary)] max-w-xl mx-auto mb-6">
                Our team is available {company.phoneDisplay} during office hours, or reach us on WhatsApp any time.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={company.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-body font-medium px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 rounded-[var(--radius-btn)]"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
                >
                  WhatsApp Us
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center justify-center gap-2 font-body font-medium px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 rounded-[var(--radius-btn)]"
                  style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA
          title="Ready to start your clearance?"
          description="Send us your shipment details and we'll respond with a clear, costed plan within one business hour."
          primaryLabel="Get a Quote"
          secondaryLabel="View Our Services"
        />
      </main>
      <Footer />
    </>
  );
}
