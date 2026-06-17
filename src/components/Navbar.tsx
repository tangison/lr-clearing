'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { services, company, nav as navData } from '@/lib/content';
import { Icon } from '@/lib/icons';

const primaryLinks = navData.primary;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ title: string; href: string; type: string }[]>([]);
  const pathname = usePathname();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSearchOpen(false);
  }, [pathname]);

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
      requestAnimationFrame(() => {
        menuRef.current?.querySelector<HTMLElement>('a[href]')?.focus();
      });
    }
    return () => document.removeEventListener('keydown', handleMenuKeyDown);
  }, [mobileOpen, handleMenuKeyDown]);

  // Close services dropdown on outside click
  useEffect(() => {
    if (!servicesOpen) return;
    const handler = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [servicesOpen]);

  // Search logic — instant client-side search across declared content
  const searchableIndex = [
    ...services.map((s) => ({ title: s.title, href: `/services/${s.slug}`, type: 'Service' })),
    ...services.flatMap((s) =>
      s.items.map((item) => ({ title: item, href: `/services/${s.slug}`, type: `Service · ${s.title}` }))
    ),
    ...navData.primary.map((n) => ({ title: n.label, href: n.href, type: 'Page' })),
    ...navData.company.map((n) => ({ title: n.label, href: n.href, type: 'About' })),
    ...navData.compliance.map((n) => ({ title: n.label, href: n.href, type: 'Compliance' })),
  ];

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    const matches = searchableIndex
      .filter((item) => item.title.toLowerCase().includes(q))
      .slice(0, 8);
    setSearchResults(matches);
  }, [query]);

  useEffect(() => {
    if (searchOpen) {
      requestAnimationFrame(() => searchInputRef.current?.focus());
    }
  }, [searchOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'nav-scrolled bg-[var(--color-primary)]/95' : 'bg-[var(--color-primary)]'
        }`}
        style={{ borderBottom: `1px solid var(--border-subtle)` }}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="L&R Clearing Agency CC — Home"
          >
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
          <div className="hidden lg:flex items-center gap-8">
            {primaryLinks.map((link) => {
              const active = isActive(link.href);
              if (link.href === '/services') {
                return (
                  <div key={link.href} ref={servicesDropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={`font-body font-medium text-sm tracking-widest uppercase transition-colors duration-200 flex items-center gap-1 ${
                        active || servicesOpen
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-body-light)]/70 hover:text-[var(--color-accent)]'
                      }`}
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div
                        className="absolute right-0 top-full mt-2 w-80 rounded-[var(--radius-card)] overflow-hidden shadow-2xl"
                        style={{ backgroundColor: 'var(--color-primary-mid)', border: '1px solid var(--border-subtle)' }}
                      >
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block px-5 py-3 hover:bg-[var(--color-primary)] transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <span className="font-mono text-[0.625rem] text-[var(--color-accent)] mt-1">{s.number}</span>
                              <div>
                                <p className="font-display font-bold text-sm text-white tracking-wide">{s.title}</p>
                                <p className="font-body text-xs text-[var(--color-secondary)] mt-0.5 leading-snug">{s.shortDescription}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="block px-5 py-3 font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] hover:bg-[var(--color-primary)] transition-colors"
                        >
                          View all services →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-body font-medium text-sm tracking-widest uppercase transition-colors duration-200 ${
                    active
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-body-light)]/70 hover:text-[var(--color-accent)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Search button */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the website"
              className="text-[var(--color-body-light)]/70 hover:text-[var(--color-accent)] transition-colors"
            >
              <Icon name="search" className="w-5 h-5" />
            </button>

            {/* WhatsApp CTA */}
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-medium px-5 py-2.5 text-white text-xs tracking-widest uppercase transition-all duration-300 bg-[var(--color-accent)] rounded-[var(--radius-btn)]"
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile right-side controls */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the website"
              className="text-[var(--color-body-light)]/70 hover:text-[var(--color-accent)] transition-colors"
            >
              <Icon name="search" className="w-5 h-5" />
            </button>
            <button
              ref={hamburgerRef}
              type="button"
              className="flex flex-col gap-1.5 z-50 group"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 flex flex-col p-8 overflow-y-auto mobile-menu-overlay lg:hidden ${mobileOpen ? 'open' : ''}`}
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="flex justify-between items-center mt-4 mb-12">
          <span className="font-mono font-normal text-[0.6875rem] tracking-widest uppercase text-[var(--color-secondary)]">
            L&amp;R Clearing Agency CC
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="text-[var(--color-body-light)]"
          >
            <Icon name="close" className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {primaryLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`font-display font-bold tracking-tight transition-colors ${
                  active ? 'text-[var(--color-accent)]' : 'text-white hover:text-[var(--color-accent)]'
                }`}
                style={{ fontSize: '2.25rem', lineHeight: 1.1 }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile services quick links */}
        <div className="mt-10 pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-4">
            Service Quick Links
          </p>
          <div className="grid grid-cols-1 gap-3">
            {services.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="font-body text-sm text-[var(--color-body-light)]/80 hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
              >
                <span className="font-mono text-[0.625rem] text-[var(--color-accent)]">{s.number}</span>
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile contact shortcuts */}
        <div className="mt-10 pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-4">
            Contact
          </p>
          <div className="flex flex-col gap-3">
            <a href={`tel:${company.phone}`} className="flex items-center gap-3 font-body text-sm text-white">
              <Icon name="phone" className="w-4 h-4 text-[var(--color-accent)]" />
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 font-body text-sm text-white">
              <Icon name="mail" className="w-4 h-4 text-[var(--color-accent)]" />
              {company.email}
            </a>
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-medium inline-flex items-center justify-center mt-4 text-white text-xs tracking-widest uppercase py-4 px-8 bg-[var(--color-accent)] rounded-[var(--radius-btn)]"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="mt-auto pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p className="font-mono font-normal text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] text-center">
            {company.shortTagline}
          </p>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-6"
          style={{ backgroundColor: 'rgba(17,24,39,0.92)' }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-[var(--radius-card)] overflow-hidden shadow-2xl"
            style={{ backgroundColor: 'var(--color-primary)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <Icon name="search" className="w-5 h-5 text-[var(--color-accent)]" />
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, industries, FAQs..."
                className="flex-1 bg-transparent text-white font-body text-base outline-none placeholder:text-[var(--color-secondary)]"
                aria-label="Search the website"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="text-[var(--color-secondary)] hover:text-white"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {query.trim() === '' && (
                <p className="px-5 py-8 text-center font-body text-sm text-[var(--color-secondary)]">
                  Start typing to search services, industries, and pages.
                </p>
              )}
              {query.trim() !== '' && searchResults.length === 0 && (
                <p className="px-5 py-8 text-center font-body text-sm text-[var(--color-secondary)]">
                  No results for “{query}”.
                </p>
              )}
              {searchResults.length > 0 && (
                <ul>
                  {searchResults.map((r, i) => (
                    <li key={i}>
                      <Link
                        href={r.href}
                        className="flex items-center justify-between px-5 py-3 hover:bg-[var(--color-primary-mid)] transition-colors"
                      >
                        <span className="font-body text-sm text-white">{r.title}</span>
                        <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
                          {r.type}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
