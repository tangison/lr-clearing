'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'nav-scrolled bg-[var(--color-primary)]/95' : 'bg-[var(--color-primary)]'
        }`}
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo — Icon Mark Only */}
          <Link href="/" className="flex items-center gap-3 shrink-0 focus:outline-none group">
            <Image
              src="/brand/logo-icon.png"
              alt="L&R Logo"
              width={36}
              height={36}
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
            <span
              className="font-bold text-xl tracking-wider text-white hidden sm:block"
              style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
            >
              L&amp;R CLEARING
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest text-[var(--color-body-light)]/70 hover:text-[var(--color-accent)] transition-colors duration-200 uppercase"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/264813759901"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-white text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 500,
                backgroundColor: 'var(--color-accent)',
                borderRadius: 'var(--radius-btn)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              GET A QUOTE
            </a>
          </div>

          {/* Mobile Hamburger — accent color lines */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 focus:outline-none z-50 group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay — full screen, slides from top */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between p-12 mobile-menu-overlay ${
          mobileOpen ? 'open' : ''
        }`}
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="flex justify-between items-center mt-6">
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              color: 'var(--color-secondary)',
            }}
          >
            L&amp;R PORTAL
          </span>
        </div>
        <div className="flex flex-col gap-6 my-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white tracking-tight hover:text-[var(--color-accent)] transition-colors"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 700,
                fontSize: '48px',
              }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <a
            href="https://wa.me/264813759901"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center mt-8 text-white text-xs tracking-widest uppercase py-4 px-8"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 500,
              backgroundColor: 'var(--color-accent)',
              borderRadius: 'var(--radius-btn)',
              maxWidth: 'fit-content',
            }}
          >
            GET A QUOTE
          </a>
        </div>
        <div className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p
            className="text-[10px] uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              color: 'var(--color-secondary)',
            }}
          >
            Building your dream empire is our speciality
          </p>
        </div>
      </div>
    </>
  );
}
