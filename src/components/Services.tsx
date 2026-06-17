'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '@/lib/content';
import { Icon } from '@/lib/icons';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.service-card');
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Show first 4 services on home; rest on /services
  const homeServices = services.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono font-normal text-[0.6875rem] block mb-3 uppercase tracking-widest text-[var(--color-accent)]">
              What We Do
            </span>
            <h2
              className="font-display font-extrabold uppercase tracking-tight text-[var(--color-body-light)]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Core Services
            </h2>
            <div
              className="mt-4"
              style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)' }}
            />
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] hover:underline"
          >
            View all services →
          </Link>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '1px', backgroundColor: 'var(--border-faint)' }}
        >
          {homeServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-card group relative p-8 md:p-10 transition-all duration-200 block"
              style={{
                backgroundColor: 'var(--color-primary-mid)',
                borderRadius: '0px',
                borderLeft: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = 'var(--color-accent)';
                e.currentTarget.style.transform = 'translateX(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[var(--color-accent)]">
                  <Icon name={service.icon} className="w-8 h-8" />
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
                  {service.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-[1.375rem] mb-3 text-[var(--color-body-light)]">
                {service.title}
              </h3>
              <p className="font-body font-normal text-[0.9375rem] leading-[1.7] text-[var(--color-secondary)]">
                {service.shortDescription}
              </p>
              <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent)] mt-6 inline-block group-hover:translate-x-1 transition-transform">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
