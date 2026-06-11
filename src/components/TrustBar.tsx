export function TrustBar() {
  const items = ['REGISTERED CC', 'VAT REGISTERED', 'NATIONWIDE COVERAGE', 'EST. 2012'];

  return (
    <section
      className="w-full"
      style={{ backgroundColor: 'var(--color-light-bg)', padding: '20px 0' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item}
              className="flex items-center justify-center py-3"
              style={{
                borderRight:
                  i < items.length - 1 ? '1px solid rgba(27,42,74,0.15)' : 'none',
              }}
            >
              <span
                className="uppercase tracking-widest"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontWeight: 400,
                  fontSize: '11px',
                  color: 'var(--color-primary)',
                  opacity: 0.6,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
