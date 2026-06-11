import Link from 'next/link';
import { Lock } from 'lucide-react';

interface ComingSoonProps {
  pageTitle: string;
}

export function ComingSoon({ pageTitle }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-[var(--navy-deep)] flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-[var(--navy-mid)] flex items-center justify-center border border-white/10">
            <Lock className="w-7 h-7 text-[var(--iron-grey)]" />
          </div>
        </div>

        <h1
          className="text-4xl sm:text-5xl text-[var(--manifest-white)]/40 uppercase tracking-wide"
          style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 800 }}
        >
          {pageTitle}
        </h1>

        <p
          className="text-lg text-[var(--manifest-white)]"
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
        >
          Full site coming soon.
        </p>

        <p
          className="text-sm text-[var(--iron-grey)]"
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
        >
          Interested in the complete website? Contact Tangison Studio.
        </p>

        <div className="pt-4">
          <a
            href="https://studio.tangison.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--signal-orange)] text-[var(--manifest-white)] text-sm uppercase tracking-[0.05em] px-7 py-3.5 rounded-[2px] hover:bg-[var(--signal-orange)]/90 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
          >
            Contact Tangison Studio
          </a>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="text-sm text-[var(--iron-grey)] hover:text-[var(--manifest-white)] transition-colors underline underline-offset-4"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
