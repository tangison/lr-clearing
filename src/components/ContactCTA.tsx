'use client';

import Link from 'next/link';
import { company } from '@/lib/content';
import { Icon } from '@/lib/icons';

/**
 * ContactCTA — strong call-to-action band, used on home + bottom of interior pages.
 */
export function ContactCTA({
  title = 'Ready to move your cargo with confidence?',
  description = 'Talk to our customs clearing team today. We will respond within one business hour during office hours, 07:30–17:00 CAT, Monday to Friday.',
  primaryLabel = 'Get a Quote on WhatsApp',
  primaryHref = company.social.whatsapp,
  secondaryLabel = 'View Our Services',
  secondaryHref = '/services',
  variant = 'default',
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'default' | 'accent';
}) {
  const bg = variant === 'accent' ? 'var(--color-accent)' : 'var(--color-primary-mid)';
  const titleColor = variant === 'accent' ? 'white' : 'white';
  const descColor = variant === 'accent' ? 'rgba(255,255,255,0.85)' : 'var(--color-secondary)';

  return (
    <section style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="font-display font-extrabold tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, color: titleColor }}
            >
              {title}
            </h2>
            <p
              className="mt-5 max-w-lg font-body font-normal"
              style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: descColor }}
            >
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a
              href={primaryHref}
              target={primaryHref.startsWith('http') ? '_blank' : undefined}
              rel={primaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center gap-2 font-body font-medium px-7 py-4 text-xs tracking-widest uppercase transition-all duration-300 rounded-[var(--radius-btn)]"
              style={{
                backgroundColor: variant === 'accent' ? 'var(--color-primary)' : 'var(--color-accent)',
                color: 'white',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <Icon name="whatsapp" className="w-4 h-4" />
              {primaryLabel}
            </a>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 font-body font-medium px-7 py-4 text-xs tracking-widest uppercase transition-all duration-300 rounded-[var(--radius-btn)]"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              {secondaryLabel}
              <Icon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
