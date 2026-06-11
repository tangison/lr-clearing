'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-md bg-[var(--navy-deep)]/95">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-light.png"
            alt="L&R Clearing Agency CC"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--manifest-white)]/80 hover:text-[var(--manifest-white)] text-sm tracking-wide uppercase transition-colors duration-200"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/264813759901"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--signal-orange)] text-[var(--manifest-white)] text-sm uppercase tracking-[0.05em] px-7 py-3.5 rounded-[2px] hover:bg-[var(--signal-orange)]/90 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-[var(--manifest-white)] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[var(--navy-deep)]">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[var(--manifest-white)]/80 hover:text-[var(--manifest-white)] text-sm tracking-wide uppercase py-2"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/264813759901"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[var(--signal-orange)] text-[var(--manifest-white)] text-sm uppercase tracking-[0.05em] px-7 py-3.5 rounded-[2px] hover:bg-[var(--signal-orange)]/90 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
