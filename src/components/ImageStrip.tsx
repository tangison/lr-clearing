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
    if (imageRef.current && containerRef.current) {
      gsap.fromTo(
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
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(280px, 30vw, 400px)' }}
    >
      {/* Forklift Image */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <Image
          src="/images/forklift.jpeg"
          alt="Forklift unloading cargo vessel at Walvis Bay Port"
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
          opacity: 0.75,
        }}
      />

      {/* Text Overlay */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 h-full flex items-center">
        <div>
          <p
            className="leading-none"
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: 'white',
            }}
          >
            FROM WALVIS BAY TO THE BORDER —
          </p>
          <p
            className="leading-none mt-1"
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: 'var(--color-accent)',
            }}
          >
            WE CLEAR IT.
          </p>
        </div>
      </div>
    </section>
  );
}
