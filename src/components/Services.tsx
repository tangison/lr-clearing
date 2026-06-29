'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
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
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.service-card');
      const tween = gsap.fromTo(
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
      const trigger = tween.scrollTrigger;
      return () => {
        trigger?.kill();
      };
    }
  }, []);

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
            <span className="font-mono font-normal text-[0.6875rem] block mb-3 uppercase tracking-widest text-[var(--color-accent-text)]">
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
            className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent-text)] hover:underline"
          >
            View all services →
          </Link>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homeServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-card group relative overflow-hidden rounded-[var(--radius-card)] block transition-all duration-300 hover:translate-y-1"
              style={{
                backgroundColor: 'var(--color-primary-mid)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {/* Background image */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(27,42,74,0.2) 0%, rgba(27,42,74,0.95) 100%)',
                  }}
                />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex w-9 h-9 items-center justify-center rounded-[var(--radius-card)] backdrop-blur-sm" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-accent)' }}>
                    <Icon name={service.icon} className="w-5 h-5" />
                  </span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary-strong)]">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[1.375rem] mb-2 text-white group-hover:text-[var(--color-accent-text)] transition-colors">
                  {service.title}
                </h3>
                <p className="font-body font-normal text-[0.9375rem] leading-[1.6] text-[var(--color-secondary-strong)] line-clamp-2">
                  {service.shortDescription}
                </p>
                <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent-text)] mt-4 inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
