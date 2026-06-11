'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: 'NATIONWIDE',
    label: 'COVERAGE',
    description:
      'From Walvis Bay to Oshikango, Lüderitz to Katima Mulilo — we operate at every major customs post in Namibia. No border is too remote for our network.',
  },
  {
    number: '48HR',
    label: 'CLEARANCE SPEED',
    description:
      'Our established relationships with customs authorities and deep knowledge of processing workflows mean your goods clear faster. Time is money in logistics.',
  },
  {
    number: '12+',
    label: 'YEARS EXPERTISE',
    description:
      'Since 2012, we have built an unbroken track record in Namibian customs clearing. Our team understands the nuances of local regulation that only experience teaches.',
  },
];

export function WhyLR() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const numbers = sectionRef.current.querySelectorAll('.stat-number');
      numbers.forEach((num) => {
        gsap.fromTo(
          num,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: num,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40"
      style={{ backgroundColor: 'var(--color-light-bg)' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span
            className="block mb-3 uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontWeight: 400,
              fontSize: '11px',
              color: 'var(--color-accent)',
            }}
          >
            WHY L&amp;R
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-block ${i > 0 ? 'md:pl-10 lg:pl-16' : ''}`}
              style={{
                borderLeft:
                  i > 0 ? '1px solid rgba(27,42,74,0.15)' : 'none',
              }}
            >
              <div className="stat-number" style={{ lineHeight: 1 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    color: 'var(--color-primary)',
                    display: 'block',
                  }}
                >
                  {stat.number}
                </span>
              </div>
              <span
                className="block mt-1 uppercase tracking-widest"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontWeight: 400,
                  fontSize: '11px',
                  color: 'var(--color-accent)',
                }}
              >
                {stat.label}
              </span>
              <p
                className="mt-4 leading-relaxed"
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: '#4A5568',
                  lineHeight: '1.7',
                  maxWidth: '280px',
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
