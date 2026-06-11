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
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontWeight: 800,
            fontSize: '96px',
            color: 'var(--color-body-light)',
            opacity: 0.08,
          }}
        >
          {pageTitle.toUpperCase()}
        </h1>

        {/* Lock icon */}
        <div className="relative z-10 mb-4">
          <svg
            className="w-6 h-6"
            style={{ color: 'var(--color-secondary)' }}
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

        <p
          className="relative z-10"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            color: 'var(--color-body-light)',
            marginTop: '16px',
          }}
        >
          Full site coming soon.
        </p>

        <p
          className="relative z-10"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 400,
            fontSize: '15px',
            color: 'var(--color-secondary)',
            marginTop: '8px',
          }}
        >
          Interested in the complete website?
        </p>

        <a
          href="https://studio.tangison.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center justify-center text-white text-xs tracking-widest uppercase mt-8 transition-all duration-300"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 500,
            backgroundColor: 'var(--color-accent)',
            borderRadius: 'var(--radius-btn)',
            padding: '14px 28px',
          }}
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
          className="relative z-10 mt-6 transition-colors"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '14px',
            color: 'var(--color-secondary)',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
