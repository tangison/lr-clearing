'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company, services, nav as navData } from '@/lib/content';
import { Icon } from '@/lib/icons';

/**
 * Footer is a Client Component so it can mark the current page's nav link
 * with aria-current="page" for screen-reader users.
 */
function FooterLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isCurrent = pathname === href || (href !== '/' && pathname.startsWith(href));
  return (
    <Link
      href={href}
      aria-current={isCurrent ? 'page' : undefined}
      className="hover:text-[var(--color-accent-text)] transition-colors py-1 inline-block"
    >
      {label}
    </Link>
  );
}

export function Footer() {
  const pathname = usePathname();
  return (
    <footer style={{ backgroundColor: 'var(--color-near-black)' }}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Logo + tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="L&R Clearing Agency CC, Home">
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
            <h2 className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-body-light)]">
              Services
            </h2>
            <ul className="font-body font-normal text-sm space-y-2 text-[var(--color-secondary)]">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <FooterLink href={`/services/${s.slug}`} label={s.title} />
                </li>
              ))}
              <li>
                <FooterLink href="/services" label="View all →" />
              </li>
              <li>
                <FooterLink href="/permits" label="Permits & Licences" />
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="space-y-3">
            <h2 className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-body-light)]">
              Company
            </h2>
            <ul className="font-body font-normal text-sm space-y-2 text-[var(--color-secondary)]">
              {navData.company.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href} label={l.label} />
                </li>
              ))}
              <li>
                <FooterLink href="/industries" label="Industries We Serve" />
              </li>
              <li>
                <FooterLink href="/compliance/health-safety" label="Health & Safety" />
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="space-y-3">
            <h2 className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-body-light)]">
              Contact
            </h2>
            <div className="font-body font-normal text-sm space-y-3 text-[var(--color-secondary)]">
              <a href={`tel:${company.phone}`} className="flex items-start gap-2 hover:text-[var(--color-accent-text)] transition-colors">
                <Icon name="phone" className="w-4 h-4 mt-0.5 text-[var(--color-accent-text)]" />
                {company.phoneDisplay}
              </a>
              <a href={`tel:${company.phoneSecondary}`} className="flex items-start gap-2 hover:text-[var(--color-accent-text)] transition-colors">
                <Icon name="phone" className="w-4 h-4 mt-0.5 text-[var(--color-accent-text)]" />
                {company.phoneSecondaryDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-start gap-2 hover:text-[var(--color-accent-text)] transition-colors break-all">
                <Icon name="mail" className="w-4 h-4 mt-0.5 text-[var(--color-accent-text)]" />
                {company.email}
              </a>
              <p className="flex items-start gap-2">
                <Icon name="clock" className="w-4 h-4 mt-0.5 text-[var(--color-accent-text)]" />
                <span>{company.officeHours}</span>
              </p>
              <p className="flex items-start gap-2">
                <Icon name="map-pin" className="w-4 h-4 mt-0.5 text-[var(--color-accent-text)]" />
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
                className="inline-flex items-center gap-2 mt-2 hover:text-[var(--color-accent-text)] transition-colors"
              >
                <Icon name="whatsapp" className="w-4 h-4 text-[var(--color-accent-text)]" />
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
            <Link href="/terms" aria-current={pathname === '/terms' ? 'page' : undefined} className="hover:text-[var(--color-accent-text)] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" aria-current={pathname === '/privacy' ? 'page' : undefined} className="hover:text-[var(--color-accent-text)] transition-colors">Privacy Policy</Link>
            <Link href="/sitemap" aria-current={pathname === '/sitemap' ? 'page' : undefined} className="hover:text-[var(--color-accent-text)] transition-colors">Sitemap</Link>
            <span>© {new Date().getFullYear()} {company.legalName}</span>
          </div>
        </div>

        {/* Studio credit */}
        <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p className="font-body text-xs text-[var(--color-secondary)]/70 text-center md:text-left">
            Website by{' '}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-medium text-[var(--color-accent-text)] hover:underline"
            >
              Tangison Studio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
