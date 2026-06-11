'use client';

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

  const separator = ' · ';
  const content = items.join(separator) + separator;

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--color-primary-mid)',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="ticker-animate flex whitespace-nowrap">
        <span
          className="inline-flex items-center"
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontWeight: 400,
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-body-light)',
            opacity: 0.7,
            paddingRight: '2rem',
          }}
        >
          {content}
        </span>
        <span
          className="inline-flex items-center"
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontWeight: 400,
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-body-light)',
            opacity: 0.7,
            paddingRight: '2rem',
          }}
        >
          {content}
        </span>
      </div>
      <style jsx>{`
        .ticker-animate span {
          /* Accent color for separator dots */
        }
      `}</style>
    </div>
  );
}
