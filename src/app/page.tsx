'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Ship,
  Plane,
  Truck,
  FileCheck,
  Globe,
  Clock,
  Award,
  MessageCircle,
  Mail,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { OperationsTicker } from '@/components/operations-ticker';
import { Footer } from '@/components/footer';

const services = [
  {
    icon: FileCheck,
    title: 'Import & Export Clearance',
    description:
      'Full customs declaration processing for all Namibian ports and border posts. We handle documentation, tariff classification, duty assessments, and MRA compliance from start to finish.',
  },
  {
    icon: Ship,
    title: 'Sea, Air & Road Freight',
    description:
      'End-to-end freight coordination across Walvis Bay port, Lüderitz, Hosea Kutako Airport, and all major cross-border road corridors. FCL, LCL, and breakbulk handled.',
  },
  {
    icon: Globe,
    title: 'Trade & Regulatory Support',
    description:
      "Navigate Namibia's trade agreements, SACU regulations, import permits, and SADC certificates of origin. We ensure every shipment meets the regulatory framework.",
  },
  {
    icon: Truck,
    title: 'Supply Chain Solutions',
    description:
      'Warehousing coordination, inland transport, and distribution management across Namibia. From port to final destination — seamless, tracked, and on schedule.',
  },
];

const whyItems = [
  {
    stat: 'Nationwide',
    label: 'Coverage',
    description:
      'From Walvis Bay to Oshikango, Lüderitz to Katima Mulilo — we operate at every major customs post in Namibia. No border is too remote for our network.',
  },
  {
    stat: '48hr',
    label: 'Clearance Speed',
    description:
      'Our established relationships with customs authorities and deep knowledge of processing workflows mean your goods clear faster. Time is money in logistics.',
  },
  {
    stat: '12+',
    label: 'Years of Expertise',
    description:
      'Since 2012, we have built an unbroken track record in Namibian customs clearing. Our team understands the nuances of local regulation that only experience teaches.',
  },
];

const trustFacts = [
  'REGISTERED CC',
  'VAT REGISTERED',
  'EST. 2012',
  'NATIONWIDE COVERAGE',
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--navy-deep)' }}>
      <Navigation />
      <OperationsTicker />

      <main className="flex-1">
        {/* ====== [3] HERO SECTION ====== */}
        <section className="relative bg-[var(--navy-deep)] overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Copy */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--manifest-white)] uppercase leading-[0.95] tracking-tight"
                  style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
                >
                  Customs Clearing &amp; Freight Forwarding in Namibia.
                </h1>
                <p
                  className="text-base sm:text-lg text-[var(--iron-grey)] max-w-lg leading-relaxed"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  L&amp;R Clearing Agency CC delivers professional customs clearance, freight coordination, and trade compliance across every Namibian port and border post. Since 2012.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="https://wa.me/264813759901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[var(--signal-orange)] text-[var(--manifest-white)] text-sm uppercase tracking-[0.05em] px-7 py-3.5 rounded-[2px] hover:bg-[var(--signal-orange)]/90 transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
                  >
                    Get a Quote
                    <ArrowRight size={16} />
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 border border-[var(--manifest-white)]/30 text-[var(--manifest-white)] text-sm uppercase tracking-[0.05em] px-7 py-3.5 rounded-[2px] hover:border-[var(--manifest-white)]/60 hover:bg-[var(--manifest-white)]/5 transition-all duration-200"
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
                  >
                    Our Services
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-[2px]">
                  <Image
                    src="/images/hero-container.jpeg"
                    alt="L&R branded container being moved by straddle carrier at Walvis Bay Port"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/40 to-transparent" />
                </div>
                {/* Accent line */}
                <div className="absolute -bottom-3 left-6 w-24 h-1 bg-[var(--signal-orange)] rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* ====== [4] TRUST BAR ====== */}
        <section className="bg-[var(--port-sand)] border-y border-[var(--port-sand)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {trustFacts.map((fact) => (
                <div
                  key={fact}
                  className="text-center py-3"
                >
                  <span
                    className="text-[var(--navy-deep)] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium"
                    style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                  >
                    {fact}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== [5] SERVICES GRID ====== */}
        <section className="bg-[var(--navy-mid)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="mb-12 sm:mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[var(--manifest-white)] uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
              >
                What We Do
              </h2>
              <div className="w-16 h-1 bg-[var(--signal-orange)] rounded-full mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group bg-[var(--navy-deep)] border border-white/5 rounded-[2px] p-6 sm:p-8 hover:border-l-[3px] hover:border-l-[var(--signal-orange)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 w-11 h-11 rounded-[2px] bg-[var(--signal-orange)]/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-[var(--signal-orange)]" />
                    </div>
                    <h3
                      className="text-lg sm:text-xl text-[var(--manifest-white)] uppercase tracking-tight mt-1"
                      style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 700 }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm text-[var(--iron-grey)] leading-relaxed pl-0 sm:pl-[60px]"
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== [6] WHY L&R ====== */}
        <section className="bg-[var(--port-sand)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="mb-12 sm:mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[var(--navy-deep)] uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
              >
                Why L&amp;R
              </h2>
              <div className="w-16 h-1 bg-[var(--signal-orange)] rounded-full mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
              {whyItems.map((item) => (
                <div key={item.label} className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy-deep)] uppercase leading-none"
                      style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
                    >
                      {item.stat}
                    </span>
                  </div>
                  <span
                    className="block text-xs tracking-[0.2em] uppercase text-[var(--signal-orange)] font-medium"
                    style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                  >
                    {item.label}
                  </span>
                  <p
                    className="text-sm text-[var(--navy-deep)]/70 leading-relaxed pt-1"
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== [7] PORT OPERATIONS IMAGE STRIP ====== */}
        <section className="relative w-full h-64 sm:h-80 lg:h-[420px] overflow-hidden">
          <Image
            src="/images/forklift-port.jpeg"
            alt="Forklift unloading cargo vessel at Walvis Bay Port"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--navy-deep)]/70" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <p
              className="text-2xl sm:text-3xl lg:text-4xl text-[var(--manifest-white)] uppercase tracking-tight text-center max-w-3xl"
              style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
            >
              From Walvis Bay to the border — we clear it.
            </p>
          </div>
        </section>

        {/* ====== [8] CONTACT CTA ====== */}
        <section className="bg-[var(--navy-deep)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[var(--manifest-white)] uppercase tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
            >
              Ready to clear your next shipment?
            </h2>
            <p
              className="text-base text-[var(--iron-grey)] mb-10 max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              Get in touch with our operations team — we respond fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/264813759901"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--signal-orange)] text-[var(--manifest-white)] text-sm uppercase tracking-[0.05em] px-7 py-3.5 rounded-[2px] hover:bg-[var(--signal-orange)]/90 transition-colors duration-200 min-w-[220px]"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
              >
                <MessageCircle size={18} />
                WhatsApp
                <span className="text-[var(--manifest-white)]/60 text-xs normal-case tracking-normal ml-1">+264 81 375 9901</span>
              </a>
              <a
                href="mailto:ops.clearing@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 border border-[var(--manifest-white)]/30 text-[var(--manifest-white)] text-sm uppercase tracking-[0.05em] px-7 py-3.5 rounded-[2px] hover:border-[var(--manifest-white)]/60 hover:bg-[var(--manifest-white)]/5 transition-all duration-200 min-w-[220px]"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
              >
                <Mail size={18} />
                Email
                <span className="text-[var(--manifest-white)]/60 text-xs normal-case tracking-normal ml-1">ops.clearing@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
