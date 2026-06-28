import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { company } from '@/lib/content';
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

  const borders = [
    { name: 'Ariamsveld', country: 'South Africa', corridor: 'Keetmanshoop–Upington– Gauteng' },
    { name: 'Noordoewer', country: 'South Africa', corridor: 'Windhoek–Vioolsdrif–Cape Town' },
    { name: 'Ngoma', country: 'Botswana', corridor: 'Katima Mulilo–Chobe–Livingstone' },
    { name: 'Katima Mulilo (Mamuno)', country: 'Botswana', corridor: 'Trans-Caprivi' },
    { name: 'Oshikango (Santa Clara)', country: 'Angola', corridor: 'Northern trade' },
    { name: 'Buitepos', country: 'Botswana', corridor: 'Trans-Kalahari to South Africa' },
    { name: 'Aroab', country: 'South Africa', corridor: 'Southern agricultural trade' },
    { name: 'Omahenene', country: 'Angola', corridor: 'Northern cross-border trade' },
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
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">Ports</p>
              <h2 className="font-display font-extrabold tracking-tight text-[var(--color-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                Two Namibian ports. One coordinated operation.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {ports.map((p) => (
                <div key={p.name} className="p-10 rounded-[var(--radius-card)]" style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)', borderTop: '4px solid var(--color-accent)' }}>
                  <Icon name={p.icon} className="w-10 h-10 text-[var(--color-accent)] mb-5" />
                  <h3 className="font-display font-bold text-2xl text-[var(--color-primary)] mb-1">{p.name}</h3>
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-4">{p.role}</p>
                  <p className="font-body text-[0.9375rem] leading-relaxed text-[var(--color-primary)]/80">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Border posts */}
        <section style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">Border Posts</p>
              <h2 className="font-display font-extrabold tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                Eight border crossings. One paperwork handover.
              </h2>
              <p className="mt-4 font-body text-[1.0625rem] leading-relaxed text-[var(--color-secondary)]">
                We coordinate with counterpart clearing agents on the other side of each border to ensure
                transit documents are accepted on arrival and your cargo is not delayed at the gate.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {borders.map((b) => (
                <div key={b.name} className="p-5 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-primary-mid)', border: '1px solid var(--border-subtle)' }}>
                  <p className="font-display font-bold text-white text-lg">{b.name}</p>
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent)] mt-1">{b.country}</p>
                  <p className="font-body text-xs text-[var(--color-secondary)] mt-3 leading-relaxed">{b.corridor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corridors */}
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">Trade Corridors</p>
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
                  <Icon name="truck" className="w-8 h-8 text-[var(--color-accent)] mb-4" />
                  <h3 className="font-display font-bold text-lg text-[var(--color-primary)] mb-3">{c.name}</h3>
                  <p className="font-body text-sm text-[var(--color-primary)]/75 leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mt-12 text-center">
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
