import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-near-black)' }}>
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Logo Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="L&R Clearing — Home">
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
              Building your dream empire is our speciality.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-body-light)]">
              SERVICES
            </h4>
            <ul className="font-body font-normal text-sm space-y-2 text-[var(--color-secondary)]">
              <li>Import & Export Clearance</li>
              <li>Sea, Air & Road Freight</li>
              <li>Trade & Regulatory Support</li>
              <li>Supply Chain Solutions</li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-body-light)]">
              COMPANY
            </h4>
            <ul className="font-body font-normal text-sm space-y-2 text-[var(--color-secondary)]">
              <li>
                <Link href="/about" className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/brand" className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block">
                  Brand
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-body-light)]">
              CONTACT
            </h4>
            <div className="font-body font-normal text-sm space-y-2 text-[var(--color-secondary)]">
              <p>
                <a href="tel:+264813759901" className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block">
                  +264 81 375 9901
                </a>
              </p>
              <p>
                <a href="mailto:ops.clearing@gmail.com" className="hover:text-[var(--color-accent)] transition-colors py-1 inline-block">
                  ops.clearing@gmail.com
                </a>
              </p>
              <p>Cnr 10th Road &amp; Sam Nujoma Ave</p>
              <p>Walvis Bay, Namibia</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12" style={{ borderTop: `1px solid var(--border-subtle)` }} />

        {/* Bottom Bar */}
        <div className="mt-8 text-center space-y-2">
          <p className="font-mono font-normal text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
            CC/2012/1572 · VAT 05757590615 · Cnr 10th Road &amp; Sam Nujoma Ave, Walvis Bay, Namibia
          </p>
          <p className="font-body font-normal text-xs text-[var(--color-secondary)]">
            © 2026 L&amp;R Clearing Agency Close Corporation. All rights reserved. Built by{' '}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
