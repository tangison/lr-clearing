'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Focus trap + Escape for mobile menu
  const handleMenuKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileOpen(false);
      hamburgerRef.current?.focus();
      return;
    }
    if (e.key !== 'Tab' || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.addEventListener('keydown', handleMenuKeyDown);
      // Focus first link when menu opens
      requestAnimationFrame(() => {
        const firstLink = menuRef.current?.querySelector<HTMLElement>('a[href]');
        firstLink?.focus();
      });
    }
    return () => document.removeEventListener('keydown', handleMenuKeyDown);
  }, [mobileOpen, handleMenuKeyDown]);

  // Return focus to hamburger when menu closes
  useEffect(() => {
    if (!mobileOpen) {
      hamburgerRef.current?.focus();
    }
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'nav-scrolled bg-[var(--color-primary)]/95' : 'bg-[var(--color-primary)]'
        }`}
        style={{ borderBottom: `1px solid var(--border-subtle)` }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12" aria-label="Main navigation">
          {/* Logo — Icon Mark Only */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="L&R Clearing — Home">
            <Image
              src="/brand/logo-icon.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
            <span className="font-display font-extrabold text-xl tracking-wider text-white hidden sm:block">
              L&amp;R CLEARING
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-body font-medium text-sm tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-body-light)]/70 hover:text-[var(--color-accent)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://wa.me/264813759901"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-medium px-5 py-2.5 text-white text-xs tracking-widest uppercase transition-all duration-300 bg-[var(--color-accent)] rounded-[var(--radius-btn)]"
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
            ref={hamburgerRef}
            type="button"
            className="md:hidden flex flex-col gap-1.5 z-50 group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
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
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 flex flex-col justify-between p-12 mobile-menu-overlay ${
          mobileOpen ? 'open' : ''
        }`}
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="flex justify-between items-center mt-6">
          <span className="font-mono font-normal text-[0.6875rem] tracking-widest uppercase text-[var(--color-secondary)]">
            L&amp;R PORTAL
          </span>
        </div>
        <div className="flex flex-col gap-6 my-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                aria-current={isActive ? 'page' : undefined}
                className={`font-display font-bold tracking-tight transition-colors ${
                  isActive ? 'text-[var(--color-accent)]' : 'text-white hover:text-[var(--color-accent)]'
                }`}
                style={{ fontSize: '3rem' }}
              >
                {link.label.toUpperCase()}
              </Link>
            );
          })}
          <a
            href="https://wa.me/264813759901"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="font-body font-medium inline-flex items-center justify-center mt-8 text-white text-xs tracking-widest uppercase py-4 px-8 bg-[var(--color-accent)] rounded-[var(--radius-btn)]"
            style={{ maxWidth: 'fit-content' }}
          >
            GET A QUOTE
          </a>
        </div>
        <div className="border-t pt-6" style={{ borderColor: 'var(--border-subtle)' }}>
          <p className="font-mono font-normal text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
            Building your dream empire is our speciality
          </p>
        </div>
      </div>
    </>
  );
}
