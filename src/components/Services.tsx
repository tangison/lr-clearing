'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="square">
        <path d="M9 12h6M9 8h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <path d="M9 3v18M3 9h6" />
      </svg>
    ),
    title: 'Import & Export Clearance',
    description:
      'Full customs declaration processing for all Namibian ports and border posts. We handle documentation, tariff classification, duty assessments, and MRA compliance from start to finish.',
  },
  {
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="square">
        <path d="M2 21l10-10M12 11l4-4M16 7l2 2M18 9l-4 4M14 13l-2 2" />
        <circle cx="18" cy="6" r="3" />
        <path d="M3 3l18 18" />
      </svg>
    ),
    title: 'Sea, Air & Road Freight',
    description:
      'End-to-end freight coordination across Walvis Bay port, Lüderitz, Hosea Kutako Airport, and all major cross-border road corridors. FCL, LCL, and breakbulk handled.',
  },
  {
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="square">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Trade & Regulatory Support',
    description:
      "Navigate Namibia's trade agreements, SACU regulations, import permits, and SADC certificates of origin. We ensure every shipment meets the regulatory framework.",
  },
  {
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="square">
        <path d="M1 3h15v13H1zM16 8h4l3 4v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Supply Chain Solutions',
    description:
      'Warehousing coordination, inland transport, and distribution management across Namibia. From port to final destination — seamless, tracked, and on schedule.',
  },
];

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
          stagger: 0.1,
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

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono font-normal text-[0.6875rem] block mb-3 uppercase tracking-widest text-[var(--color-accent)]">
            WHAT WE DO
          </span>
          <h2
            className="font-display font-bold uppercase tracking-tight text-[var(--color-body-light)]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            CORE SERVICES
          </h2>
          <div
            className="mt-4"
            style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)' }}
          />
        </div>

        {/* Cards Grid — gap-1px industrial */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '1px', backgroundColor: 'var(--border-faint)' }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative p-8 md:p-10 transition-all duration-200"
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
              {/* Icon */}
              <div className="mb-6 text-[var(--color-accent)]">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-[1.375rem] uppercase mb-3 text-[var(--color-body-light)]">
                {service.title}
              </h3>

              {/* Body */}
              <p className="font-body font-normal text-[0.9375rem] leading-[1.7] text-[var(--color-secondary)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
