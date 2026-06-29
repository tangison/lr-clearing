export function TrustBar() {
  const items = [
    'REGISTERED NAMIBIAN CC',
    'VAT REGISTERED',
    'WALVIS BAY & LÜDERITZ PORTS',
    'SADC CROSS-BORDER',
  ];

  return (
    <section
      className="w-full"
      style={{ backgroundColor: 'var(--color-light-bg)', padding: '1.25rem 0' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item}
              className="flex items-center justify-center py-3"
              style={{
                borderRight:
                  i < items.length - 1 ? `1px solid var(--border-divider)` : 'none',
              }}
            >
              <span className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest text-[var(--color-muted-on-light)]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
