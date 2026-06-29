'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ImageStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (imageRef.current && containerRef.current) {
      const tween = gsap.fromTo(
        imageRef.current,
        { scale: 1.08 },
        {
          scale: 1.0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
      const trigger = tween.scrollTrigger;
      return () => {
        trigger?.kill();
      };
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden will-change-transform"
      style={{ height: 'clamp(280px, 30vw, 400px)' }}
    >
      {/* Port sunset image */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <Image
          src="/images/scenes/port-sunset.jpeg"
          alt="Commercial cargo ship docked at container terminal at sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Left-side gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, var(--color-primary) 40%, transparent 100%)',
          opacity: 0.85,
        }}
      />

      {/* Text Overlay */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 h-full flex items-center">
        <div>
          <p
            className="font-display font-extrabold leading-none text-white"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            FROM WALVIS BAY TO THE BORDER —
          </p>
          <p
            className="font-display font-extrabold leading-none mt-1 text-[var(--color-accent-text)]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            WE CLEAR IT.
          </p>
        </div>
      </div>
    </section>
  );
}
