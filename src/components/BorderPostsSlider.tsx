'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { borderPosts } from '@/lib/content';
import { Icon } from '@/lib/icons';

/**
 * BorderPostsSlider — horizontally-scrollable carousel of the six border posts
 * L&R Clearing Agency CC operates through.
 *
 * Placement: Home page, between ScenesGallery and WhyLR.
 *
 * Behaviour:
 *   - Desktop: shows ~2.3 cards (peek of next card signals scrollability).
 *   - Tablet: shows ~1.5 cards.
 *   - Mobile: shows 1 card + peek.
 *   - Arrow buttons (prev/next) move one card at a time.
 *   - Native scroll-snap for touch/swipe.
 *   - `prefers-reduced-motion: reduce` -> no auto-advance (we never auto-advance
 *     anyway, but the focus ring + arrow buttons remain accessible).
 *
 * Accessibility:
 *   - Each card is a real <a href> to /about/operational-coverage.
 *   - Arrow buttons have aria-labels.
 *   - The scroll container is focusable and keyboard-navigable (left/right
 *     arrow keys scroll thanks to scroll-snap + native behaviour).
 */
export function BorderPostsSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth - 2; // 2px tolerance
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    // Each card is roughly (clientWidth / cardsVisible) wide. Scroll by ~85%
    // of one card width so the next card peeks cleanly.
    const approxCardWidth = el.clientWidth * 0.42; // ~2.3 cards visible on desktop
    el.scrollBy({ left: dir * approxCardWidth, behavior: 'smooth' });
  };

  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-body-light)' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <span className="font-mono font-normal text-[0.6875rem] block mb-3 uppercase tracking-widest text-[var(--color-accent)]">
              Border Posts Covered
            </span>
            <h2
              className="font-display font-extrabold tracking-tight text-[var(--color-primary)]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Six crossings. One handover.
            </h2>
            <p className="mt-5 font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/75">
              From the Atlantic ports to the SADC interior, we clear cargo through every
              major Namibian border post. Swipe through to see the actual facilities.
            </p>
          </div>
          {/* Arrow controls (hidden on mobile — native swipe is more natural) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              disabled={!canPrev}
              aria-label="Previous border post"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:bg-[var(--color-primary)] enabled:hover:text-white"
              style={{
                border: '1px solid var(--border-divider)',
                backgroundColor: 'white',
                color: 'var(--color-primary)',
              }}
            >
              <Icon name="arrow-left" className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              disabled={!canNext}
              aria-label="Next border post"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:bg-[var(--color-primary)] enabled:hover:text-white"
              style={{
                border: '1px solid var(--border-divider)',
                backgroundColor: 'white',
                color: 'var(--color-primary)',
              }}
            >
              <Icon name="arrow-right" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroller */}
        <div
          ref={scrollerRef}
          className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
            scrollPaddingLeft: '1.5rem',
            scrollPaddingRight: '1.5rem',
            // Touch-friendly: native momentum scrolling
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {borderPosts.map((b) => (
            <Link
              key={b.name}
              href="/about/operational-coverage"
              className="group snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] xl:w-[28vw] block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              style={{ borderRadius: 'var(--radius-card)' }}
            >
              <article
                className="overflow-hidden h-full"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--border-divider)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: '0 2px 12px -6px rgba(27,42,74,0.10)',
                }}
              >
                {/* 16:9 image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                  <Image
                    src={b.image}
                    alt={b.imageAlt}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 42vw, 32vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom gradient for legibility of the name overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(27,42,74,0) 55%, rgba(27,42,74,0.85) 100%)',
                    }}
                  />
                  {/* Name + country overlay (always visible) */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <p className="font-display font-bold text-white text-lg md:text-xl leading-tight">
                      {b.name}
                    </p>
                    <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent)] mt-0.5">
                      {b.country}
                    </p>
                  </div>
                </div>
                {/* Body */}
                <div className="p-4 md:p-5">
                  <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                    Corridor
                  </p>
                  <p className="font-body text-sm text-[var(--color-primary)]/85 leading-relaxed">
                    {b.corridor}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* "View all" link */}
        <div className="mt-8 md:mt-10 text-center md:text-left">
          <Link
            href="/about/operational-coverage"
            className="inline-flex items-center gap-2 font-display font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            See all border posts and corridors
            <Icon name="arrow-right" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
