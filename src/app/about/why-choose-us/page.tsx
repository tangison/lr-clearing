import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { competitiveAdvantages } from '@/lib/content';
import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: "Why Choose Us, L&R Clearing Agency CC",
  description: "Professional and responsive service, deep customs regulatory knowledge, efficient cargo processing, competitive pricing, and reliable communication on every shipment.",
  alternates: { canonical: '/about/why-choose-us' },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="Competitive Advantage"
          title="Why choose L&R Clearing Agency CC."
          description="A clearing agent is a long-term partner, not a transactional vendor. The reasons below are why clients stay with us, and why they refer us to others."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Why Choose Us' }]}
        />

        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-5">
              {competitiveAdvantages.map((adv, i) => (
                <div
                  key={adv}
                  className="p-8 rounded-[var(--radius-card)] flex items-start gap-5"
                  style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}
                >
                  <span className="shrink-0 inline-flex w-10 h-10 items-center justify-center rounded-[var(--radius-btn)]" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                    <Icon name="check" className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-1">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="font-display font-bold text-lg text-[var(--color-primary)]">{adv}</p>
                    <p className="font-body text-sm text-[var(--color-primary)]/70 mt-2 leading-relaxed">
                      {getAdvantageDetail(adv)}
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

function getAdvantageDetail(adv: string): string {
  const map: Record<string, string> = {
    'Professional and responsive service': 'Phone, email, and WhatsApp answered during office hours; after-hours queries acknowledged first thing the next morning.',
    'Strong understanding of customs regulations': 'Daily engagement with Customs & Excise keeps us current on tariff changes, permit requirements, and procedural updates.',
    'Efficient cargo processing': 'We batch our documentation reviews daily and file electronically via ASYCUDA World, no paper, no overnight queues.',
    'Customer-focused approach': 'Each client is assigned a primary contact who knows your commodities, your suppliers, and your typical routing.',
    'Competitive and cost-effective solutions': 'Transparent per-line or per-shipment pricing. No hidden disbursements. We quote the full landed cost before you commit.',
    'Commitment to compliance and excellence': 'We will not file a declaration we believe to be incorrect, and we will tell you why.',
    'Reliable communication and shipment updates': 'Status updates at booking, dispatch, arrival, assessment, release, and delivery, without being asked.',
  };
  return map[adv] ?? '';
}
