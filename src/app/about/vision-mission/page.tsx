import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { vision, mission, company } from '@/lib/content';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Vision & Mission, L&R Clearing Agency CC",
  description: "Our vision to be the preferred customs clearing and logistics partner in Namibia and Southern Africa, and our mission to deliver compliant, timely service.",
  alternates: { canonical: '/about/vision-mission' },
};

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Our Direction"
          title="Vision & Mission"
          description="The strategic horizon we navigate towards, and the operational principles that get us there."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Vision & Mission' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24 space-y-16">
            {/* Vision */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mb-4">Vision</p>
                <h2 className="font-display font-extrabold tracking-tight text-[var(--color-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                  Where we are headed.
                </h2>
                <p className="mt-6 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
                  {vision.statement}
                </p>
                <p className="mt-4 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
                  Becoming the preferred partner means more than winning tenders. It means being the
                  clearing agent that importers recommend to one another, the forwarder that
                  carriers want on their bills of lading, and the customs counterparty that
                  regulators trust to file accurately the first time, every time.
                </p>
              </div>
              <div className="p-10 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Icon name="globe" className="w-10 h-10 text-[var(--color-accent-text)] mb-6" />
                <p className="font-display font-bold text-2xl text-white leading-tight">
                  Namibia first, then the wider SADC region, then the global trade corridors that connect us.
                </p>
                <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)] mb-2">Geographic focus</p>
                  <p className="font-body text-sm text-white">{company.regions.join(' · ')} · Walvis Bay Corridor · Trans-Kalahari · Trans-Caprivi</p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ direction: 'rtl' }}>
              <div className="p-10 rounded-[var(--radius-card)]" style={{ backgroundColor: 'var(--color-accent)', direction: 'ltr' }}>
                <Icon name="anchor" className="w-10 h-10 text-white mb-6" />
                <p className="font-display font-bold text-2xl text-white leading-tight">
                  Professionalism, compliance, and exceptional customer satisfaction, in that order, every time.
                </p>
                <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.3)' }}>
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-white/80 mb-2">Operating discipline</p>
                  <p className="font-body text-sm text-white/90">Accurate declarations · Transparent fees · Daily shipment updates</p>
                </div>
              </div>
              <div style={{ direction: 'ltr' }}>
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mb-4">Mission</p>
                <h2 className="font-display font-extrabold tracking-tight text-[var(--color-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                  How we get there.
                </h2>
                <p className="mt-6 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
                  {mission.statement}
                </p>
                <p className="mt-4 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
                  We translate this mission into daily habits: documentation reviewed before submission, status
                  updates issued without prompting, fees disclosed before they are charged, and a willingness to
                  tell clients when a particular routing or service is not the right fit for their cargo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
