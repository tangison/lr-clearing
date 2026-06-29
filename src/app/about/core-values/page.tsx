import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { coreValues } from '@/lib/content';

export const metadata: Metadata = {
  title: "Core Values, L&R Clearing Agency CC",
  description: "Integrity, excellence, reliability, efficiency, customer focus, and compliance, the six principles that guide every customs declaration we file.",
  alternates: { canonical: '/about/core-values' },
};

export default function CoreValuesPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Our Principles"
          title="Core Values"
          description="Six principles guide every decision we make, from the order in which we process shipments to the way we communicate with clients, carriers, and regulators."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Core Values' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="space-y-6">
              {coreValues.map((v, i) => (
                <div
                  key={v.name}
                  className="grid lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-[var(--radius-card)]"
                  style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}
                >
                  <div className="lg:col-span-2 flex lg:flex-col items-start gap-4">
                    <span className="font-display font-extrabold text-6xl text-[var(--color-accent-text)] leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)]">
                      Principle
                    </span>
                  </div>
                  <div className="lg:col-span-10">
                    <h2 className="font-display font-bold text-3xl text-[var(--color-primary)] mb-4">{v.name}</h2>
                    <p className="font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
                      {v.description}
                    </p>
                    <p className="font-body text-[0.9375rem] leading-relaxed text-[var(--color-primary)]/70 mt-4">
                      {getPracticalExample(v.name)}
                    </p>
                  </div>
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

function getPracticalExample(name: string): string {
  const map: Record<string, string> = {
    Integrity: 'If we spot an under-declared value on your commercial invoice, we will flag it before submission, not after Customs raises a query.',
    Excellence: 'Every Bill of Entry is reviewed by a second pair of eyes before submission, not just the agent who prepared it.',
    Reliability: 'Once we commit to a release date, we hold ourselves to it. If a risk emerges, we communicate it the same day, not at the next status meeting.',
    Efficiency: 'We file electronic declarations via ASYCUDA World the moment documentation is complete, rather than batching files end-of-day.',
    'Customer Focus': 'You receive proactive status updates at each milestone, not only when something goes wrong. Silence from us means progress, not neglect.',
    Compliance: 'We will not facilitate a clearance we believe to be non-compliant, even under commercial pressure. Our licence and your cargo both depend on it.',
  };
  return map[name] ?? '';
}
