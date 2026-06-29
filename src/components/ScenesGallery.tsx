'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    src: '/images/services/walvis-bay-port.jpeg',
    alt: 'Aerial view of Walvis Bay port container terminal',
    caption: 'Walvis Bay Port',
    sub: 'Primary port of operation',
  },
  {
    src: '/images/services/freight-forwarding.jpeg',
    alt: 'Container ship being loaded at a port terminal',
    caption: 'Sea Freight',
    sub: 'FCL & LCL coordination',
  },
  {
    src: '/images/services/customs-clearing.jpeg',
    alt: 'Customs officer inspecting cargo documents at a border crossing',
    caption: 'Customs Clearance',
    sub: 'Import, export & transit',
  },
  {
    src: '/images/scenes/truck-highway.jpeg',
    alt: 'Long-haul truck on highway carrying cargo',
    caption: 'Cross-Border Road',
    sub: 'SADC corridor coverage',
  },
  {
    src: '/images/services/warehouse.jpeg',
    alt: 'Warehouse interior with storage racks at a distribution center',
    caption: 'Warehousing',
    sub: 'Bonded & general storage',
  },
  {
    src: '/images/scenes/port-aerial.jpeg',
    alt: 'Aerial view of port logistics infrastructure',
    caption: 'Port Operations',
    sub: 'Container coordination',
  },
];

export function ScenesGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.scene-item');
      const triggers: ScrollTrigger[] = [];
      items.forEach((item) => {
        const tween = gsap.fromTo(
          item,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
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
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <span className="font-mono font-normal text-[0.6875rem] block mb-3 uppercase tracking-widest text-[var(--color-accent-text)]">
            Operations Gallery
          </span>
          <h2
            className="font-display font-extrabold tracking-tight text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            Where we work, what we move.
          </h2>
          <p className="mt-5 font-body text-[1.0625rem] leading-relaxed text-[var(--color-secondary)]">
            A look at the ports, vessels, and infrastructure that frame our daily operations
            across Namibia and the Southern African region.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {scenes.map((scene, i) => (
            <div
              key={scene.caption}
              className={`scene-item group relative overflow-hidden rounded-[var(--radius-card)] ${
                i === 0 ? 'col-span-2 lg:col-span-1' : ''
              }`}
              style={{ aspectRatio: '4 / 3' }}
            >
              <Image
                src={scene.src}
                alt={scene.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(27,42,74,0) 50%, rgba(27,42,74,0.9) 100%)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="font-display font-bold text-white text-base md:text-lg leading-tight">
                  {scene.caption}
                </p>
                <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent-text)] mt-1">
                  {scene.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
