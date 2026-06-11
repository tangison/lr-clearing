'use client';

import Link from 'next/link';

interface ComingSoonProps {
  pageTitle: string;
}

export function ComingSoon({ pageTitle }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-primary)' }}>
      {/* Page Name — oversized, very low opacity */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center relative">
        {/* Background page name */}
        <h1
          className="font-display font-extrabold absolute inset-0 flex items-center justify-center pointer-events-none select-none text-[var(--color-body-light)]"
          style={{ fontSize: '6rem', opacity: 0.08 }}
        >
          {pageTitle.toUpperCase()}
        </h1>

        {/* Lock icon */}
        <div className="relative z-10 mb-4 text-[var(--color-secondary)]">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="square"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>

        <p className="font-body font-normal text-lg relative z-10 text-[var(--color-body-light)]" style={{ marginTop: '1rem' }}>
          Full site coming soon.
        </p>

        <p className="font-body font-normal text-[0.9375rem] relative z-10 text-[var(--color-secondary)]" style={{ marginTop: '0.5rem' }}>
          Interested in the complete website?
        </p>

        <a
          href="https://studio.tangison.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-medium relative z-10 inline-flex items-center justify-center text-white text-xs tracking-widest uppercase mt-8 transition-all duration-300 bg-[var(--color-accent)] rounded-[var(--radius-btn)]"
          style={{ padding: '0.875rem 1.75rem' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'inset 0 0 0 1px white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          CONTACT TANGISON STUDIO →
        </a>

        <Link
          href="/"
          className="font-body font-normal text-sm relative z-10 mt-6 transition-colors text-[var(--color-secondary)]"
          style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
