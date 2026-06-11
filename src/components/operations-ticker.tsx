'use client';

export function OperationsTicker() {
  const items = [
    'WALVIS BAY PORT',
    'LÜDERITZ PORT',
    'OSHIKANGO BORDER POST',
    'ARIAMSVLEI',
    'NOORDOEWER',
    'HOSEA KUTAKO AIRPORT',
    'ALL INLAND CUSTOMS POSTS',
  ];

  const content = items.join(' · ');

  return (
    <div className="w-full overflow-hidden bg-[var(--navy-mid)] py-2.5 border-y border-white/5">
      <div className="ticker-animate flex whitespace-nowrap">
        <span
          className="inline-flex items-center gap-2 px-2 font-[var(--font-jetbrains-mono)] text-xs tracking-[0.15em] uppercase"
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            color: 'var(--port-sand)',
          }}
        >
          {content}
          <span className="text-[var(--signal-orange)] text-lg leading-none">→</span>
          {content}
          <span className="text-[var(--signal-orange)] text-lg leading-none">→</span>
        </span>
        <span
          className="inline-flex items-center gap-2 px-2 font-[var(--font-jetbrains-mono)] text-xs tracking-[0.15em] uppercase"
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            color: 'var(--port-sand)',
          }}
        >
          {content}
          <span className="text-[var(--signal-orange)] text-lg leading-none">→</span>
          {content}
          <span className="text-[var(--signal-orange)] text-lg leading-none">→</span>
        </span>
      </div>
    </div>
  );
}
