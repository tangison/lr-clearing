'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { company, stats } from '@/lib/content';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.hero-word');
      gsap.fromTo(
        words,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power2.out', delay: 0.3 }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      {/* Subtle radial warm glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            `radial-gradient(circle at center, var(--glow-accent) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 pt-24 pb-12 lg:pt-0 lg:pb-0">
        {/* Left Column — Text */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          {/* Eyebrow */}
          <div
            className="pl-3 mb-6"
            style={{ borderLeft: '2px solid var(--color-accent)' }}
          >
            <span className="font-mono font-normal text-xs md:text-sm tracking-widest uppercase text-[var(--color-accent)]">
              NAMIBIA · WALVIS BAY · LÜDERITZ
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display font-extrabold mb-6 uppercase leading-[0.95] tracking-tight text-[var(--color-body-light)]"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              letterSpacing: '-0.5px',
            }}
          >
            <span className="hero-word">CUSTOMS </span>
            <span className="hero-word">CLEARING </span>
            <span className="hero-word">&amp; </span>
            <span className="hero-word">FREIGHT </span>
            <span className="hero-word">FORWARDING </span>
            <span className="hero-word">IN </span>
            <span className="hero-word text-[var(--color-accent)]">NAMIBIA.</span>
          </h1>

          {/* Subtext */}
          <p className="font-body font-normal text-base max-w-xl leading-relaxed mb-10 text-[var(--color-secondary)]">
            Your trusted partner in customs clearing, freight forwarding, and logistics solutions — operating across Namibia and the Southern African region.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center mb-12">
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="lr-btn-quote font-body font-medium px-8 py-4 text-white text-sm tracking-widest uppercase transition-all duration-300 bg-[var(--color-accent)] rounded-[var(--radius-btn)]"
            >
              GET A QUOTE →
            </a>
            <Link
              href="/services"
              className="lr-btn-services font-body font-medium px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 text-[var(--color-body-light)] rounded-[var(--radius-btn)]"
              style={{ border: `1px solid var(--border-ghost)` }}
            >
              OUR SERVICES
            </Link>
          </div>

          {/* Micro-stats Row — driven by stats[] in content.ts (single source of truth) */}
          <div
            className="grid grid-cols-3 pt-8 gap-4"
            style={{ borderTop: `1px solid var(--border-faint)` }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={i > 0 ? 'pl-4 md:pl-6' : ''}
                style={i > 0 ? { borderLeft: `1px solid var(--border-subtle)` } : undefined}
              >
                <p className="font-display font-bold text-[1.75rem] mb-1 text-[var(--color-body-light)]">
                  {s.value}{s.suffix}
                </p>
                <p className="font-mono font-normal text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Hero Image */}
        <div className="relative order-1 lg:order-2 h-[260px] lg:h-[650px] overflow-hidden lg:min-h-screen">
          <Image
            src="/images/hero.jpeg"
            alt="Port Straddle Carrier moving L&R branded container at Walvis Bay"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Bottom vignette on mobile */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: 'linear-gradient(to top, var(--color-primary) 0%, transparent 50%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
