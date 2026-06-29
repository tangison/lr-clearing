'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { competitiveAdvantages } from '@/lib/content';
import { Icon } from '@/lib/icons';

gsap.registerPlugin(ScrollTrigger);

export function WhyLR() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (sectionRef.current) {
      const blocks = sectionRef.current.querySelectorAll('.advantage-block');
      const triggers: ScrollTrigger[] = [];
      blocks.forEach((block) => {
        const tween = gsap.fromTo(
          block,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });
      return () => {
        triggers.forEach((t) => t.kill());
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-light-bg)' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="font-mono font-normal text-[0.6875rem] block mb-3 uppercase tracking-widest text-[var(--color-accent-text)]">
            Our Competitive Advantage
          </span>
          <h2
            className="font-display font-extrabold tracking-tight text-[var(--color-primary)]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            Seven reasons clients stay with L&R Clearing.
          </h2>
          <p className="mt-5 font-body text-[1.0625rem] leading-relaxed text-[var(--color-body-text)]">
            We compete on professionalism, not price alone. The advantages below are the ones our
            clients cite when they refer us, and the ones we hold ourselves to on every shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {competitiveAdvantages.map((adv, i) => (
            <div
              key={adv}
              className="advantage-block p-6 rounded-[var(--radius-card)] flex items-start gap-4"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--border-divider)',
              }}
            >
              <span
                className="shrink-0 inline-flex w-8 h-8 items-center justify-center rounded-[var(--radius-btn)]"
                style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
              >
                <Icon name="check" className="w-4 h-4" />
              </span>
              <div>
                <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)] mb-1">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-display font-bold text-[var(--color-primary)] leading-tight" style={{ fontSize: '1.0625rem' }}>
                  {adv}
                </p>
              </div>
            </div>
          ))}

          {/* 8th tile, link to Why Choose Us page */}
          <a
            href="/about/why-choose-us"
            className="advantage-block p-6 rounded-[var(--radius-card)] flex flex-col justify-between transition-all duration-300 hover:translate-x-1 group"
            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
          >
            <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent-text)]">
              Learn more
            </span>
            <p className="font-display font-bold text-lg mt-3 leading-tight">
              Read the full case for choosing L&R.
            </p>
            <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] mt-4 group-hover:translate-x-1 transition-transform inline-block">
              Why Choose Us →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
