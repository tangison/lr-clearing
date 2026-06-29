import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { company } from '@/lib/content';
import { Icon } from '@/lib/icons';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact, L&R Clearing Agency CC",
  description:
    "Speak to our customs clearing team in Walvis Bay, Namibia. Phone, email, WhatsApp, or submit an inquiry online, we respond within one business hour during office hours.",
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Contact Us"
          title="Let's get your cargo moving."
          description="Tell us about your shipment and we'll respond with a clearance or forwarding plan. For urgent matters, WhatsApp or call, we monitor both during office hours."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left, direct contact */}
              <div>
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mb-4">
                  Direct Contact
                </p>
                <h2
                  className="font-display font-extrabold tracking-tight text-[var(--color-primary)]"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15 }}
                >
                  Reach our team directly.
                </h2>
                <p className="mt-4 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
                  Our office in Walvis Bay is strategically positioned between the port and the
                  town's commercial district, allowing us to maintain close working relationships
                  with Namport, Customs &amp; Excise, and the major shipping lines.
                </p>

                <div className="mt-10 space-y-5">
                  <a
                    href={`tel:${company.phone}`}
                    className="flex items-start gap-4 p-5 rounded-[var(--radius-card)] transition-all hover:translate-x-1"
                    style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)', borderLeft: '3px solid var(--color-accent)' }}
                  >
                    <span className="shrink-0 inline-flex w-10 h-10 items-center justify-center rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}>
                      <Icon name="phone" className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)]">Phone</p>
                      <p className="font-display font-bold text-lg text-[var(--color-primary)] mt-1">{company.phoneDisplay}</p>
                      <p className="font-body text-sm text-[var(--color-primary)]/70 mt-1">{company.officeHours} CAT</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-start gap-4 p-5 rounded-[var(--radius-card)] transition-all hover:translate-x-1"
                    style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)', borderLeft: '3px solid var(--color-accent)' }}
                  >
                    <span className="shrink-0 inline-flex w-10 h-10 items-center justify-center rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}>
                      <Icon name="mail" className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)]">Email</p>
                      <p className="font-display font-bold text-lg text-[var(--color-primary)] mt-1 break-all">{company.email}</p>
                      <p className="font-body text-sm text-[var(--color-primary)]/70 mt-1">For all clearance &amp; forwarding inquiries</p>
                    </div>
                  </a>

                  <a
                    href={company.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-[var(--radius-card)] transition-all hover:translate-x-1"
                    style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)', borderLeft: '3px solid var(--color-accent)' }}
                  >
                    <span className="shrink-0 inline-flex w-10 h-10 items-center justify-center rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}>
                      <Icon name="whatsapp" className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)]">WhatsApp</p>
                      <p className="font-display font-bold text-lg text-[var(--color-primary)] mt-1">{company.phoneDisplay}</p>
                      <p className="font-body text-sm text-[var(--color-primary)]/70 mt-1">Fastest channel for urgent matters</p>
                    </div>
                  </a>

                  <div
                    className="flex items-start gap-4 p-5 rounded-[var(--radius-card)]"
                    style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)', borderLeft: '3px solid var(--color-accent)' }}
                  >
                    <span className="shrink-0 inline-flex w-10 h-10 items-center justify-center rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}>
                      <Icon name="map-pin" className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)]">Office</p>
                      <p className="font-display font-bold text-lg text-[var(--color-primary)] mt-1">{company.address.line1}</p>
                      <p className="font-body text-sm text-[var(--color-primary)]/70 mt-1">{company.address.city}, {company.address.country}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-light-bg)' }}>
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)] mb-2">Registration</p>
                  <p className="font-body text-sm text-[var(--color-primary)]">
                    {company.legalName} · {company.registration} · VAT {company.vat}
                  </p>
                </div>
              </div>

              {/* Right, inquiry form */}
              <div>
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mb-4">
                  Inquiry Form
                </p>
                <h2
                  className="font-display font-extrabold tracking-tight text-[var(--color-primary)]"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15 }}
                >
                  Submit a shipment inquiry.
                </h2>
                <p className="mt-4 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
                  Fill in the details below and we'll open WhatsApp with your inquiry
                  pre-filled, just hit send. The more we know about your cargo, route, and
                  timeline, the more precise our response will be.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
