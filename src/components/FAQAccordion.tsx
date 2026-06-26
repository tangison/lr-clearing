'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/content';

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y" style={{ borderColor: 'var(--border-divider)' }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderColor: 'var(--border-divider)' }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full text-left py-6 flex items-start justify-between gap-6 group"
            >
              <div className="flex-1">
                <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  {item.category}
                </p>
                <h3
                  className={`font-display font-bold tracking-tight transition-colors ${
                    isOpen ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'
                  }`}
                  style={{ fontSize: '1.25rem', lineHeight: 1.3 }}
                >
                  {item.question}
                </h3>
              </div>
              <span
                className={`shrink-0 mt-1 transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                style={{ color: 'var(--color-accent)' }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p
                  className="pb-6 pr-12 font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/80"
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
