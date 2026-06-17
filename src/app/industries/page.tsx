import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { industries } from '@/lib/content';
import { Icon, type IconName } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Industries We Serve — L&R Clearing Agency CC",
  description:
    "Customs clearing and logistics expertise for mining, agriculture, manufacturing, construction, retail, automotive, fisheries, oil & gas, and SMEs across Namibia and Southern Africa.",
  alternates: { canonical: '/industries' },
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Industries We Serve"
          title="Sector expertise that moves your cargo correctly."
          description="Every industry has its own permits, tariff structures, and clearance patterns. We have handled them all — and we apply that experience to every shipment we file."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="p-8 rounded-[var(--radius-card)] transition-all duration-300"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-divider)',
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-card)] mb-5"
                    style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-accent)' }}
                  >
                    <Icon name={ind.icon as IconName} className="w-6 h-6" />
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--color-primary)] mb-3">
                    {ind.name}
                  </h3>
                  <p className="font-body text-[0.9375rem] leading-relaxed text-[var(--color-primary)]/75">
                    {ind.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA
          title="In a sector we haven't listed?"
          description="Our team handles new commodity categories routinely. Send us your HS code or product description and we will confirm permit requirements, tariff, and estimated lead time."
          primaryLabel="Send your shipment details"
          secondaryLabel="View Our Services"
        />
      </main>
      <Footer />
    </>
  );
}
