// Server Component — no hooks, no event handlers, no browser APIs.
// The marquee animation is pure CSS (see .ticker-animate in globals.css).

export function Ticker() {
  const items = [
    'WALVIS BAY PORT',
    'LÜDERITZ PORT',
    'OSHIKANGO BORDER POST',
    'ARIAMSVLEI',
    'NOORDOEWER',
    'HOSEA KUTAKO INTERNATIONAL AIRPORT',
    'ALL INLAND CUSTOMS POSTS',
  ];

  const separator = ' \u00B7 ';
  const content = items.join(separator) + separator;

  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--color-primary-mid)',
        height: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid var(--border-faint)`,
      }}
    >
      <div className="ticker-animate flex whitespace-nowrap">
        <span
          className="inline-flex items-center font-mono font-normal text-[0.6875rem] uppercase tracking-widest text-[var(--color-body-light)] opacity-70"
          style={{ paddingRight: '2rem' }}
        >
          {content}
        </span>
        <span
          className="inline-flex items-center font-mono font-normal text-[0.6875rem] uppercase tracking-widest text-[var(--color-body-light)] opacity-70"
          style={{ paddingRight: '2rem' }}
        >
          {content}
        </span>
      </div>
    </div>
  );
}
