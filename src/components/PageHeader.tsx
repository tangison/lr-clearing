/**
 * PageHeader — consistent hero header for interior pages.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section
      className="relative pt-32 pb-16 md:pt-40 md:pb-24"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Subtle top divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--border-subtle)" }}
      />
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)]">
              {breadcrumb.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.href ? (
                    <a href={c.href} className="hover:text-[var(--color-accent)] transition-colors">
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-[var(--color-body-light)]">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="font-mono font-normal text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">
            {eyebrow}
          </p>
        )}
        <h1
          className="font-display font-extrabold tracking-tight text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05 }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="mt-6 max-w-2xl font-body font-normal text-[var(--color-secondary)]"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
