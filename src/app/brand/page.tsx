import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Footer } from '@/components/Footer';

const brandColors = [
  { name: 'Navy Deep', hex: '#1B2A4A', usage: 'Primary backgrounds, headers, footers' },
  { name: 'Navy Mid', hex: '#243561', usage: 'Secondary backgrounds, cards, ticker' },
  { name: 'Signal Orange', hex: '#E8642A', usage: 'Accent, CTAs, highlights, hover states' },
  { name: 'Port Sand', hex: '#F0EBE1', usage: 'Light backgrounds, section fills' },
  { name: 'Manifest White', hex: '#FAFAF8', usage: 'Body text on dark, page backgrounds' },
  { name: 'Iron Grey', hex: '#8A9BB0', usage: 'Captions, secondary text, subtle copy' },
];

export default function BrandPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main className="flex-1" style={{ backgroundColor: 'var(--color-light-bg)' }}>
        {/* Header */}
        <section className="pt-24 pb-16" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <Link
              href="/"
              className="inline-block mb-6 transition-colors"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '14px',
                color: 'var(--color-secondary)',
              }}
            >
              ← Back to Home
            </Link>
            <h1
              className="uppercase tracking-tight"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-body-light)',
              }}
            >
              Brand Guidelines
            </h1>
            <p
              className="mt-4 max-w-2xl"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                color: 'var(--color-secondary)',
              }}
            >
              The official brand system for L&amp;R Clearing Agency Close Corporation. Use these assets and guidelines to maintain consistent visual identity across all communications.
            </p>
            <div className="mt-6" style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)' }} />
          </div>
        </section>

        {/* Logo Downloads */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2
              className="uppercase tracking-tight mb-8"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 800,
                fontSize: '28px',
                color: 'var(--color-primary)',
              }}
            >
              Logo Assets
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Logo on Dark */}
              <div className="p-8 md:p-12 flex flex-col items-center justify-center gap-6" style={{ backgroundColor: 'var(--color-primary)', borderRadius: '0px' }}>
                <Image
                  src="/brand/logo-full.png"
                  alt="L&R Clearing Agency Logo — Full variant"
                  width={200}
                  height={68}
                  className="h-16 md:h-20 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="text-center">
                  <p
                    className="uppercase tracking-widest mb-1"
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono), monospace',
                      fontWeight: 400,
                      fontSize: '11px',
                      color: 'var(--color-body-light)',
                    }}
                  >
                    Logo — Full (Light)
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '12px', color: 'var(--color-secondary)' }}>
                    For use on dark backgrounds
                  </p>
                </div>
                <a
                  href="/brand/logo-full.png"
                  download
                  className="text-white text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, backgroundColor: 'var(--color-accent)', borderRadius: 'var(--radius-btn)' }}
                >
                  DOWNLOAD PNG
                </a>
              </div>

              {/* Icon Mark on Light */}
              <div className="p-8 md:p-12 flex flex-col items-center justify-center gap-6 border" style={{ backgroundColor: 'white', borderRadius: '0px', borderColor: 'var(--color-light-bg)' }}>
                <Image
                  src="/brand/logo-icon.png"
                  alt="L&R Clearing Agency Logo — Icon mark"
                  width={80}
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain"
                />
                <div className="text-center">
                  <p
                    className="uppercase tracking-widest mb-1"
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono), monospace',
                      fontWeight: 400,
                      fontSize: '11px',
                      color: 'var(--color-primary)',
                    }}
                  >
                    Logo — Icon Mark
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '12px', color: 'var(--color-secondary)' }}>
                    For use on light backgrounds / navbar
                  </p>
                </div>
                <a
                  href="/brand/logo-icon.png"
                  download
                  className="text-white text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, backgroundColor: 'var(--color-accent)', borderRadius: 'var(--radius-btn)' }}
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
            <h2
              className="uppercase tracking-tight mb-8"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 800,
                fontSize: '28px',
                color: 'var(--color-primary)',
              }}
            >
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
                    <p
                      className="uppercase tracking-widest font-medium"
                      style={{
                        fontFamily: 'var(--font-jetbrains-mono), monospace',
                        fontWeight: 400,
                        fontSize: '11px',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {color.hex}
                    </p>
                    <p
                      className="mt-0.5"
                      style={{
                        fontFamily: 'var(--font-barlow-condensed), sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {color.name}
                    </p>
                    <p
                      className="mt-0.5 leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-dm-sans), sans-serif',
                        fontWeight: 400,
                        fontSize: '12px',
                        color: 'var(--color-secondary)',
                      }}
                    >
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
            <h2
              className="uppercase tracking-tight mb-8"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 800,
                fontSize: '28px',
                color: 'var(--color-primary)',
              }}
            >
              Typography
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Barlow Condensed */}
              <div className="p-6 md:p-8 bg-white border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <p
                  className="uppercase tracking-widest mb-4"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontWeight: 400,
                    fontSize: '11px',
                    color: 'var(--color-accent)',
                  }}
                >
                  Display — Headlines
                </p>
                <p
                  className="uppercase tracking-tight leading-none mb-3"
                  style={{
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontWeight: 800,
                    fontSize: '48px',
                    color: 'var(--color-primary)',
                  }}
                >
                  Barlow Condensed
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'var(--color-secondary)',
                  }}
                >
                  Weights: 700, 800. Used for all headlines, section titles, and display text. Always uppercase.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="uppercase" style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 700, fontSize: '28px', color: 'var(--color-primary)' }}>
                    Bold 700
                  </p>
                  <p className="uppercase" style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800, fontSize: '28px', color: 'var(--color-primary)' }}>
                    Extra Bold 800
                  </p>
                </div>
              </div>

              {/* DM Sans */}
              <div className="p-6 md:p-8 bg-white border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <p
                  className="uppercase tracking-widest mb-4"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontWeight: 400,
                    fontSize: '11px',
                    color: 'var(--color-accent)',
                  }}
                >
                  Body — Copy &amp; Navigation
                </p>
                <p
                  className="leading-tight mb-3"
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 500,
                    fontSize: '36px',
                    color: 'var(--color-primary)',
                  }}
                >
                  DM Sans
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'var(--color-secondary)',
                  }}
                >
                  Weights: 400, 500. Used for all body copy, navigation labels, button text, and subheadings.
                </p>
                <div className="mt-6 space-y-2">
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400, fontSize: '20px', color: 'var(--color-primary)' }}>
                    Regular 400
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, fontSize: '20px', color: 'var(--color-primary)' }}>
                    Medium 500
                  </p>
                </div>
              </div>

              {/* JetBrains Mono */}
              <div className="p-6 md:p-8 bg-white border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <p
                  className="uppercase tracking-widest mb-4"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontWeight: 400,
                    fontSize: '11px',
                    color: 'var(--color-accent)',
                  }}
                >
                  Mono — Metadata &amp; Ticker
                </p>
                <p
                  className="leading-tight mb-3"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontWeight: 400,
                    fontSize: '32px',
                    color: 'var(--color-primary)',
                  }}
                >
                  JetBrains Mono
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'var(--color-secondary)',
                  }}
                >
                  Weight: 400. Used for ticker text, captions, registration numbers, metadata, and labels.
                </p>
                <div className="mt-6 space-y-2">
                  <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontWeight: 400, fontSize: '18px', color: 'var(--color-primary)' }}>
                    Regular 400
                  </p>
                  <p className="uppercase tracking-widest" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontWeight: 400, fontSize: '14px', color: 'var(--color-primary)', opacity: 0.6 }}>
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
            <h2
              className="uppercase tracking-tight mb-4"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 800,
                fontSize: '28px',
                color: 'var(--color-primary)',
              }}
            >
              Need Brand Assets?
            </h2>
            <p
              className="mb-8 max-w-lg mx-auto"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                color: 'var(--color-secondary)',
              }}
            >
              For high-resolution logo files, brand guidelines PDF, or custom asset requests, contact our team.
            </p>
            <a
              href="mailto:ops.clearing@gmail.com"
              className="inline-flex items-center justify-center text-white text-sm tracking-widest uppercase px-7 py-3.5 transition-all duration-300"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 500,
                backgroundColor: 'var(--color-accent)',
                borderRadius: 'var(--radius-btn)',
              }}
            >
              ops.clearing@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
