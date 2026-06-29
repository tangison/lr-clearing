import type { Metadata } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { company, borderPosts } from '@/lib/content';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Operational Coverage, L&R Clearing Agency CC",
  description: "Ports, border posts, and corridors we cover across Namibia and the Southern African region, Walvis Bay, Lüderitz, and major border crossings.",
  alternates: { canonical: '/about/operational-coverage' },
};

export default function OperationalCoveragePage() {
  const ports = [
    {
      name: 'Walvis Bay',
      role: 'Primary port of operation',
      detail: 'Namibia\'s deep-water port and the gateway for the Walvis Bay Corridor linking to Botswana, Zambia, Zimbabwe, and the DRC. We clear containerised, breakbulk, project, and reefer cargo here.',
      icon: 'port' as const,
    },
    {
      name: 'Lüderitz',
      role: 'Secondary port',
      detail: 'Specialised in fishing industry exports, mining inputs for the southern Karas region, and smaller containerised imports. We coordinate the specific carrier and shipping line schedules serving this port.',
      icon: 'ship' as const,
    },
  ];

  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Operational Coverage"
          title="Where we operate."
          description="Our operational footprint is anchored on the two Namibian ports and extends to every major border post connecting Namibia to its SADC neighbours."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Operational Coverage' }]}
        />

        {/* Ports */}
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mb-4">Ports</p>
              <h2 className="font-display font-extrabold tracking-tight text-[var(--color-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                Two Namibian ports. One coordinated operation.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {ports.map((p) => (
                <div key={p.name} className="p-10 rounded-[var(--radius-card)]" style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)', borderTop: '4px solid var(--color-accent)' }}>
                  <Icon name={p.icon} className="w-10 h-10 text-[var(--color-accent-text)] mb-5" />
                  <h3 className="font-display font-bold text-2xl text-[var(--color-primary)] mb-1">{p.name}</h3>
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)] mb-4">{p.role}</p>
                  <p className="font-body text-[0.9375rem] leading-relaxed text-[var(--color-body-text)]">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Border posts — image cards */}
        <section style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mb-4">Border Posts</p>
              <h2 className="font-display font-extrabold tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                Six border crossings. One paperwork handover.
              </h2>
              <p className="mt-4 font-body text-[1.0625rem] leading-relaxed text-[var(--color-secondary-strong)]">
                We coordinate with counterpart clearing agents on the other side of each border to ensure
                transit documents are accepted on arrival and your cargo is not delayed at the gate.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {borderPosts.map((b) => (
                <article
                  key={b.name}
                  className="overflow-hidden rounded-[var(--radius-card)]"
                  style={{ backgroundColor: 'var(--color-primary-mid)', border: '1px solid var(--border-subtle)' }}
                >
                  {/* 16:9 image */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                    <Image
                      src={b.image}
                      alt={b.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                  {/* Body */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-white text-xl">
                      {b.name} <span className="font-body font-normal text-base text-[var(--color-secondary-strong)]">Border Post</span>
                    </h3>
                    <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent-text)] mt-1">
                      {b.country}
                    </p>
                    <p className="font-body text-sm text-[var(--color-secondary-strong)] mt-3 leading-relaxed">
                      {b.corridor}
                    </p>
                    {b.imageNote && (
                      <p className="font-body text-[0.6875rem] text-[var(--color-secondary-strong)]/60 mt-4 italic leading-relaxed border-t border-[var(--border-subtle)] pt-3">
                        {b.imageNote}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)] mt-8 text-center opacity-70">
              All border post images sourced under free licences (CC0 / CC BY / CC BY-SA). See full attribution in /images/borders/SOURCES.md.
            </p>
          </div>
        </section>

        {/* Corridors */}
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mb-4">Trade Corridors</p>
              <h2 className="font-display font-extrabold tracking-tight text-[var(--color-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                The corridors that connect Namibia to the region.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Walvis Bay Corridor', detail: 'Walvis Bay → Windhoek → Gaborone → Pretoria → Maputo. The primary Atlantic-to-Indian-Ocean corridor.' },
                { name: 'Trans-Kalahari Corridor', detail: 'Walvis Bay → Windhoek → Buitepos → Lobatse → Johannesburg. A shorter route to Gauteng than via Cape Town.' },
                { name: 'Trans-Caprivi Corridor', detail: 'Walvis Bay → Tsumeb → Katima Mulilo → Livingstone → Lusaka → Lubumbashi. Links the Atlantic to central Africa.' },
              ].map((c) => (
                <div key={c.name} className="p-8 rounded-[var(--radius-card)]" style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}>
                  <Icon name="truck" className="w-8 h-8 text-[var(--color-accent-text)] mb-4" />
                  <h3 className="font-display font-bold text-lg text-[var(--color-primary)] mb-3">{c.name}</h3>
                  <p className="font-body text-sm text-[var(--color-body-text)] leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)] mt-12 text-center">
              {company.legalName} · {company.registration} · Based in {company.address.city}, {company.address.country}
            </p>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
