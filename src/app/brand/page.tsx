import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';
import { company } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Brand Guidelines, L&R Clearing Agency CC',
  description:
    'Official L&R Clearing Agency CC brand assets, colours, typography, and logo variants. For partners, media, and suppliers requiring branded materials.',
  alternates: { canonical: '/brand' },
  openGraph: {
    title: 'Brand Guidelines, L&R Clearing Agency CC',
    description:
      'Official brand assets, colours, typography, and logo variants for L&R Clearing Agency CC.',
    type: 'website',
  },
};

const brandColors = [
  { name: 'Navy Deep', hex: '#1B2A4A', usage: 'Primary backgrounds, headers, footers' },
  { name: 'Navy Mid', hex: '#243561', usage: 'Secondary backgrounds, cards, ticker' },
  { name: 'Signal Orange', hex: '#E8642A', usage: 'Accent, CTAs, highlights, hover states' },
  { name: 'Port Sand', hex: '#F0EBE1', usage: 'Light backgrounds, section fills' },
  { name: 'Manifest White', hex: '#FAFAF8', usage: 'Body text on dark, page backgrounds' },
  { name: 'Iron Grey', hex: '#9DB0C8', usage: 'Captions, secondary text, subtle copy' },
];

export default function BrandPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content" className="flex-1" style={{ backgroundColor: 'var(--color-light-bg)' }}>
        {/* Header */}
        <section className="pt-24 pb-16" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <Link
              href="/"
              className="font-body font-normal inline-block mb-6 transition-colors text-sm text-[var(--color-secondary-strong)]"
            >
              ← Back to Home
            </Link>
            <h1
              className="font-display font-extrabold uppercase tracking-tight text-[var(--color-body-light)]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Brand Guidelines
            </h1>
            <p className="font-body font-normal text-base mt-4 max-w-2xl text-[var(--color-secondary-strong)]">
              The official brand system for L&amp;R Clearing Agency Close Corporation. Use these assets and guidelines to maintain consistent visual identity across all communications.
            </p>
            <div className="mt-6" style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)' }} />
          </div>
        </section>

        {/* Logo Downloads */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="font-display font-extrabold text-[1.75rem] uppercase tracking-tight mb-8 text-[var(--color-primary)]">
              Logo Assets
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Logo on Dark */}
              <div className="p-8 md:p-12 flex flex-col items-center justify-center gap-6" style={{ backgroundColor: 'var(--color-primary)', borderRadius: '0px' }}>
                <Image
                  src="/brand/logo-full.png"
                  alt="L&R Clearing Agency Logo, Full variant"
                  width={200}
                  height={68}
                  className="h-16 md:h-20 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="text-center">
                  <p className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-1 text-[var(--color-body-light)]">
                    Logo, Full (Light)
                  </p>
                  <p className="font-body font-normal text-xs text-[var(--color-secondary-strong)]">
                    For use on dark backgrounds
                  </p>
                </div>
                <a
                  href="/brand/logo-full.png"
                  download
                  className="font-body font-medium text-white text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 bg-[var(--color-accent-button)] rounded-[var(--radius-btn)]"
                >
                  DOWNLOAD PNG
                </a>
              </div>

              {/* Icon Mark on Light */}
              <div className="p-8 md:p-12 flex flex-col items-center justify-center gap-6 border" style={{ backgroundColor: 'white', borderRadius: '0px', borderColor: 'var(--color-light-bg)' }}>
                <Image
                  src="/brand/logo-icon.png"
                  alt="L&R Clearing Agency Logo, Icon mark"
                  width={80}
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain"
                />
                <div className="text-center">
                  <p className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-1 text-[var(--color-primary)]">
                    Logo, Icon Mark
                  </p>
                  <p className="font-body font-normal text-xs text-[var(--color-secondary-strong)]">
                    For use on light backgrounds / navbar
                  </p>
                </div>
                <a
                  href="/brand/logo-icon.png"
                  download
                  className="font-body font-medium text-white text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 bg-[var(--color-accent-button)] rounded-[var(--radius-btn)]"
                >
                  DOWNLOAD PNG
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Color Swatches */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="font-display font-extrabold text-[1.75rem] uppercase tracking-tight mb-8 text-[var(--color-primary)]">
              Color Palette
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {brandColors.map((color) => (
                <div key={color.hex} className="space-y-3">
                  <div
                    className="aspect-square"
                    style={{ backgroundColor: color.hex, borderRadius: '0px', border: '1px solid rgba(0,0,0,0.05)' }}
                  />
                  <div>
                    <p className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest font-medium text-[var(--color-primary)]">
                      {color.hex}
                    </p>
                    <p className="font-display font-bold text-sm mt-0.5 text-[var(--color-primary)]">
                      {color.name}
                    </p>
                    <p className="font-body font-normal text-xs mt-0.5 leading-relaxed text-[var(--color-secondary-strong)]">
                      {color.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="font-display font-extrabold text-[1.75rem] uppercase tracking-tight mb-8 text-[var(--color-primary)]">
              Typography
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Barlow Condensed */}
              <div className="p-6 md:p-8 bg-white border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <p className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-accent-text)]">
                  Display, Headlines
                </p>
                <p className="font-display font-extrabold text-[3rem] uppercase tracking-tight leading-none mb-3 text-[var(--color-primary)]">
                  Barlow Condensed
                </p>
                <p className="font-body font-normal text-sm text-[var(--color-secondary-strong)]">
                  Weights: 700, 800. Used for all headlines, section titles, and display text. Always uppercase.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="font-display font-bold text-[1.75rem] uppercase text-[var(--color-primary)]">
                    Bold 700
                  </p>
                  <p className="font-display font-extrabold text-[1.75rem] uppercase text-[var(--color-primary)]">
                    Extra Bold 800
                  </p>
                </div>
              </div>

              {/* DM Sans */}
              <div className="p-6 md:p-8 bg-white border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <p className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-accent-text)]">
                  Body, Copy &amp; Navigation
                </p>
                <p className="font-body font-medium text-[2.25rem] leading-tight mb-3 text-[var(--color-primary)]">
                  DM Sans
                </p>
                <p className="font-body font-normal text-sm text-[var(--color-secondary-strong)]">
                  Weights: 400, 500. Used for all body copy, navigation labels, button text, and subheadings.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="font-body font-normal text-[1.25rem] text-[var(--color-primary)]">
                    Regular 400
                  </p>
                  <p className="font-body font-medium text-[1.25rem] text-[var(--color-primary)]">
                    Medium 500
                  </p>
                </div>
              </div>

              {/* JetBrains Mono */}
              <div className="p-6 md:p-8 bg-white border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <p className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest mb-4 text-[var(--color-accent-text)]">
                  Mono, Metadata &amp; Ticker
                </p>
                <p className="font-mono font-normal text-[2rem] leading-tight mb-3 text-[var(--color-primary)]">
                  JetBrains Mono
                </p>
                <p className="font-body font-normal text-sm text-[var(--color-secondary-strong)]">
                  Weight: 400. Used for ticker text, captions, registration numbers, metadata, and labels.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="font-mono font-normal text-[1.125rem] text-[var(--color-primary)]">
                    Regular 400
                  </p>
                  <p className="font-mono font-normal text-sm uppercase tracking-widest text-[var(--color-primary)] opacity-60">
                    TRACKING WIDE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Assets */}
        <section className="py-16 md:py-20 text-center">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="font-display font-extrabold text-[1.75rem] uppercase tracking-tight mb-4 text-[var(--color-primary)]">
              Need Brand Assets?
            </h2>
            <p className="font-body font-normal text-base mb-8 max-w-lg mx-auto text-[var(--color-secondary-strong)]">
              For high-resolution logo files, brand guidelines PDF, or custom asset requests, contact our team.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="font-body font-medium inline-flex items-center justify-center text-white text-sm tracking-widest uppercase px-7 py-3.5 transition-all duration-300 bg-[var(--color-accent-button)] rounded-[var(--radius-btn)]"
            >
              {company.email}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
