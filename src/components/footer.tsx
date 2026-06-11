import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--navy-deep)] to-[#0F1A2E] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-light.png"
                alt="L&R Clearing Agency CC"
                width={140}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p
              className="text-[var(--iron-grey)] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              Building your dream empire is our speciality.
            </p>
          </div>

          {/* Registration */}
          <div className="space-y-3">
            <h4
              className="text-[var(--manifest-white)] text-xs uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
            >
              Registration
            </h4>
            <div className="space-y-2 text-sm text-[var(--iron-grey)]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p>CC Registration: CC/2012/1572</p>
              <p>VAT Number: 05757590615</p>
              <p>Est. 2012</p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-3">
            <h4
              className="text-[var(--manifest-white)] text-xs uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
            >
              Address
            </h4>
            <div className="space-y-2 text-sm text-[var(--iron-grey)]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p>Cnr 10th Road &amp; Sam Nujoma Ave</p>
              <p>Walvis Bay, Namibia</p>
              <p className="pt-2">
                <a
                  href="tel:+264813759901"
                  className="hover:text-[var(--signal-orange)] transition-colors"
                >
                  +264 81 375 9901
                </a>
              </p>
              <p>
                <a
                  href="mailto:ops.clearing@gmail.com"
                  className="hover:text-[var(--signal-orange)] transition-colors"
                >
                  ops.clearing@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[var(--iron-grey)]"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            &copy; {new Date().getFullYear()} L&amp;R Clearing Agency Close Corporation. All rights reserved.
          </p>
          <p
            className="text-xs text-[var(--iron-grey)]"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Built by{' '}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--signal-orange)] transition-colors"
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
