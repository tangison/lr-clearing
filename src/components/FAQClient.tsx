'use client';

import { useMemo, useState } from 'react';
import type { FAQItem } from '@/lib/content';
import { faqCategories } from '@/lib/content';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Icon } from '@/lib/icons';

export function FAQClient({ items }: { items: FAQItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = items;
    if (activeCategory !== 'All') {
      list = list.filter((i) => i.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (i) => i.question.toLowerCase().includes(q) || i.answer.toLowerCase().includes(q)
      );
    }
    return list;
  }, [items, activeCategory, query]);

  return (
    <div>
      {/* Search */}
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-[var(--radius-card)] mb-8"
        style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}
      >
        <Icon name="search" className="w-5 h-5 text-[var(--color-accent-text)]" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs..."
          className="flex-1 bg-transparent outline-none font-body text-base text-[var(--color-primary)] placeholder:text-[var(--color-secondary-strong)]"
          aria-label="Search frequently asked questions"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <CategoryChip
          label="All"
          active={activeCategory === 'All'}
          onClick={() => setActiveCategory('All')}
        />
        {faqCategories.map((c) => (
          <CategoryChip
            key={c}
            label={c}
            active={activeCategory === c}
            onClick={() => setActiveCategory(c)}
          />
        ))}
      </div>

      {/* Results — aria-live region announces result count changes to screen readers */}
      <div role="status" aria-live="polite" className="sr-only">
        {filtered.length} {filtered.length === 1 ? 'question' : 'questions'} available
      </div>
      {filtered.length === 0 ? (
        <div
          className="p-10 rounded-[var(--radius-card)] text-center"
          style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}
        >
          <p className="font-display font-bold text-xl text-[var(--color-primary)] mb-2">No matches found.</p>
          <p className="font-body text-[var(--color-primary)]/70">
            Try a different search term or browse all FAQs by category.
          </p>
        </div>
      ) : (
        <div
          className="p-6 md:p-10 rounded-[var(--radius-card)]"
          style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}
        >
          <FAQAccordion items={filtered} />
        </div>
      )}
    </div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="font-mono text-[0.6875rem] uppercase tracking-widest px-4 py-2 rounded-[var(--radius-btn)] transition-all"
      style={{
        backgroundColor: active ? 'var(--color-accent-button)' : 'transparent',
        color: active ? 'white' : 'var(--color-primary)',
        border: `1px solid ${active ? 'var(--color-accent-button)' : 'var(--border-divider)'}`,
      }}
    >
      {label}
    </button>
  );
}
