import type { Metadata } from 'next';
import Image from 'next/image';
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
                  className="group rounded-[var(--radius-card)] overflow-hidden transition-all duration-300 hover:translate-y-1"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-divider)',
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                    <Image
                      src={ind.image}
                      alt={ind.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(27,42,74,0) 40%, rgba(27,42,74,0.9) 100%)',
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex w-10 h-10 items-center justify-center rounded-[var(--radius-card)] backdrop-blur-sm"
                        style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white' }}
                      >
                        <Icon name={ind.icon as IconName} className="w-5 h-5" />
                      </span>
                    </div>
                    <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-white text-lg leading-tight">
                      {ind.name}
                    </h3>
                  </div>
                  {/* Body */}
                  <div className="p-6">
                    <p className="font-body text-[0.9375rem] leading-relaxed text-[var(--color-primary)]/75">
                      {ind.description}
                    </p>
                  </div>
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
