import Image from 'next/image';
import Link from 'next/link';
import { company, services, nav as navData } from '@/lib/content';
import { Icon } from '@/lib/icons';

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-near-black)' }}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Logo + tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="L&R Clearing Agency CC — Home">
              <Image
                src="/brand/logo-full.png"
                alt="L&R Clearing Agency CC"
                width={160}
                height={64}
                className="h-16 w-auto object-contain"
                style={{ maxHeight: '4rem' }}
              />
            </Link>
            <p className="font-body font-normal text-sm leading-relaxed max-w-xs text-[var(--color-secondary)]">
              {company.tagline}
            </p>
            <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
              {company.registration} · VAT {company.vat}
            </p>
          </div>

          {/* Services column */}
          <div className="space-y-3">
            <h4 className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-body-light)]">
              Services
            </h4>
            <ul className="font-body font-normal text-sm space-y-2 text-[var(--color-secondary)]">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block font-mono text-[0.625rem] uppercase tracking-widest">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="space-y-3">
            <h4 className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-body-light)]">
              Company
            </h4>
            <ul className="font-body font-normal text-sm space-y-2 text-[var(--color-secondary)]">
              {navData.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/compliance/health-safety" className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block">
                  Health &amp; Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="space-y-3">
            <h4 className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-body-light)]">
              Contact
            </h4>
            <div className="font-body font-normal text-sm space-y-3 text-[var(--color-secondary)]">
              <a href={`tel:${company.phone}`} className="flex items-start gap-2 hover:text-[var(--color-accent)] transition-colors">
                <Icon name="phone" className="w-4 h-4 mt-0.5 text-[var(--color-accent)]" />
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-start gap-2 hover:text-[var(--color-accent)] transition-colors break-all">
                <Icon name="mail" className="w-4 h-4 mt-0.5 text-[var(--color-accent)]" />
                {company.email}
              </a>
              <p className="flex items-start gap-2">
                <Icon name="map-pin" className="w-4 h-4 mt-0.5 text-[var(--color-accent)]" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.city}, {company.address.country}
                </span>
              </p>
              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 hover:text-[var(--color-accent)] transition-colors"
              >
                <Icon name="whatsapp" className="w-4 h-4 text-[var(--color-accent)]" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12" style={{ borderTop: `1px solid var(--border-subtle)` }} />

        {/* Bottom bar */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 md:items-center">
          <p className="font-mono font-normal text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
            {company.registration} · VAT {company.vat} · {company.address.line1}, {company.address.city}, {company.address.country}
          </p>
          <div className="flex flex-wrap gap-4 md:justify-end font-body font-normal text-xs text-[var(--color-secondary)]">
            <Link href="/terms" className="hover:text-[var(--color-accent)] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-[var(--color-accent)] transition-colors">Sitemap</Link>
            <span>© {new Date().getFullYear()} {company.legalName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
