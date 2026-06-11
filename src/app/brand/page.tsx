import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

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
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--port-sand)' }}>
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-[var(--navy-deep)] pt-12 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-sm text-[var(--iron-grey)] hover:text-[var(--manifest-white)] transition-colors mb-6 inline-block"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              ← Back to Home
            </Link>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-[var(--manifest-white)] uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
            >
              Brand Guidelines
            </h1>
            <p
              className="text-base text-[var(--iron-grey)] mt-4 max-w-2xl"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              The official brand system for L&amp;R Clearing Agency Close Corporation. Use these assets and guidelines to maintain consistent visual identity across all communications.
            </p>
            <div className="w-16 h-1 bg-[var(--signal-orange)] rounded-full mt-6" />
          </div>
        </section>

        {/* Logo Downloads */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl text-[var(--navy-deep)] uppercase tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
            >
              Logo Assets
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Light logo on dark */}
              <div className="bg-[var(--navy-deep)] rounded-[2px] p-8 sm:p-12 flex flex-col items-center justify-center gap-6 border border-white/5">
                <Image
                  src="/logo-light.png"
                  alt="L&R Clearing Agency Logo — Light variant"
                  width={200}
                  height={68}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
                <div className="text-center">
                  <p
                    className="text-xs uppercase tracking-[0.15em] text-[var(--manifest-white)] mb-1"
                    style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                  >
                    Logo — Light
                  </p>
                  <p
                    className="text-xs text-[var(--iron-grey)]"
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                  >
                    For use on dark backgrounds
                  </p>
                </div>
              </div>

              {/* Dark logo on light */}
              <div className="bg-white rounded-[2px] p-8 sm:p-12 flex flex-col items-center justify-center gap-6 border border-[var(--port-sand)]">
                <Image
                  src="/logo-dark.png"
                  alt="L&R Clearing Agency Logo — Dark variant"
                  width={200}
                  height={68}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
                <div className="text-center">
                  <p
                    className="text-xs uppercase tracking-[0.15em] text-[var(--navy-deep)] mb-1"
                    style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                  >
                    Logo — Dark
                  </p>
                  <p
                    className="text-xs text-[var(--iron-grey)]"
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                  >
                    For use on light backgrounds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Swatches */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl text-[var(--navy-deep)] uppercase tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
            >
              Color Palette
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {brandColors.map((color) => (
                <div key={color.hex} className="space-y-3">
                  <div
                    className="aspect-square rounded-[2px] border border-black/5"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <p
                      className="text-xs uppercase tracking-[0.1em] text-[var(--navy-deep)] font-medium"
                      style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                    >
                      {color.hex}
                    </p>
                    <p
                      className="text-sm text-[var(--navy-deep)] mt-0.5"
                      style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 700 }}
                    >
                      {color.name}
                    </p>
                    <p
                      className="text-xs text-[var(--iron-grey)] mt-0.5 leading-relaxed"
                      style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
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
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl text-[var(--navy-deep)] uppercase tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
            >
              Typography
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Barlow Condensed */}
              <div className="bg-white rounded-[2px] p-6 sm:p-8 border border-black/5">
                <p
                  className="text-xs uppercase tracking-[0.15em] text-[var(--signal-orange)] mb-4"
                  style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                >
                  Display — Headlines
                </p>
                <p
                  className="text-4xl sm:text-5xl text-[var(--navy-deep)] uppercase tracking-tight leading-none mb-3"
                  style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
                >
                  Barlow Condensed
                </p>
                <p
                  className="text-sm text-[var(--iron-grey)]"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  Weights: 700, 800. Used for all headlines, section titles, and display text. Always uppercase.
                </p>
                <div className="mt-6 space-y-2">
                  <p
                    className="text-3xl text-[var(--navy-deep)] uppercase"
                    style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 700 }}
                  >
                    Bold 700
                  </p>
                  <p
                    className="text-3xl text-[var(--navy-deep)] uppercase"
                    style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
                  >
                    Extra Bold 800
                  </p>
                </div>
              </div>

              {/* DM Sans */}
              <div className="bg-white rounded-[2px] p-6 sm:p-8 border border-black/5">
                <p
                  className="text-xs uppercase tracking-[0.15em] text-[var(--signal-orange)] mb-4"
                  style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                >
                  Body — Copy &amp; Navigation
                </p>
                <p
                  className="text-3xl sm:text-4xl text-[var(--navy-deep)] leading-tight mb-3"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
                >
                  DM Sans
                </p>
                <p
                  className="text-sm text-[var(--iron-grey)]"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  Weights: 400, 500. Used for all body copy, navigation labels, button text, and subheadings.
                </p>
                <div className="mt-6 space-y-2">
                  <p
                    className="text-xl text-[var(--navy-deep)]"
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}
                  >
                    Regular 400
                  </p>
                  <p
                    className="text-xl text-[var(--navy-deep)]"
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
                  >
                    Medium 500
                  </p>
                </div>
              </div>

              {/* JetBrains Mono */}
              <div className="bg-white rounded-[2px] p-6 sm:p-8 border border-black/5">
                <p
                  className="text-xs uppercase tracking-[0.15em] text-[var(--signal-orange)] mb-4"
                  style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                >
                  Mono — Metadata &amp; Ticker
                </p>
                <p
                  className="text-3xl sm:text-4xl text-[var(--navy-deep)] leading-tight mb-3"
                  style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontWeight: 400 }}
                >
                  JetBrains Mono
                </p>
                <p
                  className="text-sm text-[var(--iron-grey)]"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  Weight: 400. Used for ticker text, captions, registration numbers, metadata, and labels.
                </p>
                <div className="mt-6 space-y-2">
                  <p
                    className="text-lg text-[var(--navy-deep)]"
                    style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontWeight: 400 }}
                  >
                    Regular 400
                  </p>
                  <p
                    className="text-sm text-[var(--navy-deep)]/60 tracking-[0.15em] uppercase"
                    style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontWeight: 400 }}
                  >
                    TRACKING WIDE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl text-[var(--navy-deep)] uppercase tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
            >
              Usage Guidelines
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[var(--port-sand)] rounded-[2px] p-6 border border-black/5">
                <h3
                  className="text-lg text-[var(--navy-deep)] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 700 }}
                >
                  Logo Usage
                </h3>
                <ul
                  className="space-y-2 text-sm text-[var(--navy-deep)]/70"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  <li>• Always maintain clear space around the logo equal to the height of the &quot;L&quot; in the mark</li>
                  <li>• Never stretch, skew, or rotate the logo</li>
                  <li>• Use the light variant on Navy Deep or Navy Mid backgrounds</li>
                  <li>• Use the dark variant on Port Sand, white, or light backgrounds</li>
                  <li>• Minimum logo width: 80px for digital, 20mm for print</li>
                </ul>
              </div>

              <div className="bg-[var(--port-sand)] rounded-[2px] p-6 border border-black/5">
                <h3
                  className="text-lg text-[var(--navy-deep)] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 700 }}
                >
                  Color Rules
                </h3>
                <ul
                  className="space-y-2 text-sm text-[var(--navy-deep)]/70"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  <li>• Navy Deep is the dominant brand color — use it for large areas and primary backgrounds</li>
                  <li>• Signal Orange is for accents only — buttons, highlights, and hover states</li>
                  <li>• Never use Signal Orange as a background color for large sections</li>
                  <li>• Iron Grey for secondary text, never for headlines</li>
                  <li>• Port Sand for light sections that need warmth beyond plain white</li>
                </ul>
              </div>

              <div className="bg-[var(--port-sand)] rounded-[2px] p-6 border border-black/5">
                <h3
                  className="text-lg text-[var(--navy-deep)] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 700 }}
                >
                  Typography Rules
                </h3>
                <ul
                  className="space-y-2 text-sm text-[var(--navy-deep)]/70"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  <li>• Barlow Condensed is always uppercase in headlines</li>
                  <li>• DM Sans for all body copy — never use for display headlines</li>
                  <li>• JetBrains Mono for metadata, codes, and the ticker only</li>
                  <li>• Button text: DM Sans 500, 14px, uppercase, tracking 0.05em</li>
                  <li>• Never use Inter, Roboto, Arial, or system-ui as primary font</li>
                </ul>
              </div>

              <div className="bg-[var(--port-sand)] rounded-[2px] p-6 border border-black/5">
                <h3
                  className="text-lg text-[var(--navy-deep)] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 700 }}
                >
                  Design Principles
                </h3>
                <ul
                  className="space-y-2 text-sm text-[var(--navy-deep)]/70"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  <li>• One bold moment per section — everything else quiet</li>
                  <li>• Border-radius 2px on buttons — industrial, not bubbly</li>
                  <li>• Mobile-first: 375px base, responsive up</li>
                  <li>• WhatsApp preferred over email for CTAs</li>
                  <li>• All spacing and colors via CSS custom properties</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Assets */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl text-[var(--navy-deep)] uppercase tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
            >
              Need Brand Assets?
            </h2>
            <p
              className="text-base text-[var(--iron-grey)] mb-8 max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              For high-resolution logo files, brand guidelines PDF, or custom asset requests, contact our team.
            </p>
            <a
              href="mailto:ops.clearing@gmail.com"
              className="inline-flex items-center justify-center bg-[var(--signal-orange)] text-[var(--manifest-white)] text-sm uppercase tracking-[0.05em] px-7 py-3.5 rounded-[2px] hover:bg-[var(--signal-orange)]/90 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
            >
              ops.clearing@gmail.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
