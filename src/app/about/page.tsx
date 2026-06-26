import type { Metadata } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { PageHeader } from '@/components/PageHeader';
import { about, vision, mission, coreValues, commitment, company } from '@/lib/content';
import { Icon } from '@/lib/icons';
import { TeamSection } from '@/components/TeamSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About — L&R Clearing Agency CC",
  description:
    "A proudly Namibian-owned customs clearing and forwarding company delivering professional, efficient, and reliable logistics solutions across Namibia and Southern Africa.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About — L&R Clearing Agency CC",
    description:
      "A proudly Namibian-owned customs clearing and forwarding company delivering professional, efficient, and reliable logistics solutions across Namibia and Southern Africa.",
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <PageHeader
          eyebrow="About Us"
          title="A proudly Namibian clearing & forwarding partner."
          description={about.intro}
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        />

        {/* About body with image */}
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {about.body.map((p, i) => (
                  <p
                    key={i}
                    className="font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/85"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <aside className="space-y-6">
                {/* Hero image of port operations */}
                <div
                  className="relative w-full overflow-hidden rounded-[var(--radius-card)]"
                  style={{ aspectRatio: '4 / 5' }}
                >
                  <Image
                    src="/images/scenes/port-sunset.jpeg"
                    alt="Commercial cargo ship docked at container terminal at sunset"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(27,42,74,0) 40%, rgba(27,42,74,0.95) 100%)',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent)] mb-2">
                      Based in
                    </p>
                    <p className="font-display font-bold text-white text-2xl leading-tight">
                      {company.address.city}, {company.address.country}
                    </p>
                  </div>
                </div>

                {/* At a Glance card */}
                <div
                  className="rounded-[var(--radius-card)] p-8"
                  style={{ backgroundColor: 'var(--color-light-bg)', border: '1px solid var(--border-divider)' }}
                >
                  <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">
                    At a Glance
                  </p>
                  <dl className="space-y-4 font-body text-sm">
                    <div>
                      <dt className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">Legal Name</dt>
                      <dd className="font-display font-bold text-[var(--color-primary)] mt-1">{company.legalName}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">Registration</dt>
                      <dd className="font-display font-bold text-[var(--color-primary)] mt-1">{company.registration}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">VAT Number</dt>
                      <dd className="font-display font-bold text-[var(--color-primary)] mt-1">{company.vat}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">Country</dt>
                      <dd className="font-display font-bold text-[var(--color-primary)] mt-1">{company.country}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">Ports Served</dt>
                      <dd className="font-display font-bold text-[var(--color-primary)] mt-1">{company.ports.join(' · ')}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">Region</dt>
                      <dd className="font-display font-bold text-[var(--color-primary)] mt-1">{company.regions.join(' · ')}</dd>
                    </div>
                  </dl>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Team */}
        <TeamSection />

        {/* Vision + Mission */}
        <section style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8">
              <div
                className="p-10 rounded-[var(--radius-card)]"
                style={{ backgroundColor: 'var(--color-primary-mid)', border: '1px solid var(--border-subtle)' }}
              >
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">Vision</p>
                <p className="font-display font-bold text-2xl md:text-3xl text-white leading-tight">
                  {vision.statement}
                </p>
              </div>
              <div
                className="p-10 rounded-[var(--radius-card)]"
                style={{ backgroundColor: 'var(--color-primary-mid)', border: '1px solid var(--border-subtle)' }}
              >
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">Mission</p>
                <p className="font-display font-bold text-2xl md:text-3xl text-white leading-tight">
                  {mission.statement}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/about/vision-mission"
                className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] hover:underline"
              >
                Read the full vision & mission →
              </Link>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section style={{ backgroundColor: 'var(--color-body-light)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">
                Core Values
              </p>
              <h2
                className="font-display font-extrabold tracking-tight text-[var(--color-primary)]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
              >
                The principles that guide every declaration we file.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((v, i) => (
                <div
                  key={v.name}
                  className="p-8 rounded-[var(--radius-card)] transition-all duration-300"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-divider)',
                    borderLeft: '3px solid var(--color-accent)',
                  }}
                >
                  <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--color-primary)] mt-2 mb-3">{v.name}</h3>
                  <p className="font-body text-[0.9375rem] leading-relaxed text-[var(--color-primary)]/75">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section style={{ backgroundColor: 'var(--color-light-bg)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">
                  {commitment.title}
                </p>
                <h2
                  className="font-display font-extrabold tracking-tight text-[var(--color-primary)]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
                >
                  Building long-term relationships founded on trust.
                </h2>
                <p className="mt-6 font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/80">
                  {commitment.body}
                </p>
              </div>
              <div
                className="p-10 rounded-[var(--radius-card)]"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Icon name="shield" className="w-10 h-10 text-[var(--color-accent)] mb-6" />
                <p className="font-display font-bold text-2xl text-white leading-tight">
                  {company.tagline}
                </p>
                <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                    Registered &amp; compliant
                  </p>
                  <p className="font-body text-sm text-white">
                    {company.registration} · VAT {company.vat}
                    <br />
                    {company.address.line1}, {company.address.city}, {company.address.country}
                  </p>
                </div>
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
