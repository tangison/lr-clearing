import Image from 'next/image';
import { team } from '@/lib/content';
import { Icon } from '@/lib/icons';

/**
 * TeamSection, side-by-side team cards for the About page.
 * Server Component (no hooks, no event handlers, no browser APIs).
 *
 * Layout:
 *  - Desktop: 2-column grid of cards (one per team member).
 *  - Mobile:  single column stack.
 *
 * Each card has:
 *  - Portrait (3:4) photo, object-cover object-top, sharp corners.
 *  - Name (display bold navy), Title (accent orange medium), Credentials (italic gray small).
 *  - Bio paragraph (gray-700 body).
 *  - Email + WhatsApp contact links with icons, hover underline, WhatsApp opens new tab.
 */
export function TeamSection() {
  return (
    <section style={{ backgroundColor: 'var(--color-body-light)' }}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
        {/* Section header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] mb-4">
            Meet the Team
          </p>
          <h2
            className="font-display font-extrabold tracking-tight text-[var(--color-primary)]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            The people behind your clearance.
          </h2>
          <p className="mt-5 font-body text-[1.0625rem] leading-relaxed text-[var(--color-primary)]/75">
            L&amp;R Clearing Agency CC is led by a small, hands-on team that combines academic
            depth in logistics with day-to-day operational discipline. You will work directly
            with the directors below, not a call centre.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {team.map((member) => {
            // Normalize WhatsApp number: strip leading +, spaces, and any non-digit prefix
            const waDigits = member.whatsapp.replace(/[^\d]/g, '');
            const waHref = `https://wa.me/${waDigits}`;
            const mailHref = `mailto:${member.email}`;
            const telHref = `tel:${member.phone.replace(/[^\d+]/g, '')}`;

            return (
              <article
                key={member.name}
                className="flex flex-col bg-white"
                style={{
                  border: '1px solid var(--border-divider)',
                  boxShadow: '0 4px 20px -8px rgba(27,42,74,0.12)',
                }}
              >
                {/* Portrait photo (3:4) */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-8 md:p-10">
                  <h3
                    className="font-display font-extrabold tracking-tight"
                    style={{
                      fontSize: '1.75rem',
                      lineHeight: 1.15,
                      color: 'var(--color-primary)',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-display font-medium mt-2"
                    style={{
                      fontSize: '1.0625rem',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {member.title}
                  </p>
                  {member.credentials && (
                    <p
                      className="font-body italic mt-2"
                      style={{
                        fontSize: '0.9375rem',
                        color: 'var(--color-secondary)',
                      }}
                    >
                      {member.credentials}
                    </p>
                  )}

                  {/* Divider */}
                  <div
                    aria-hidden="true"
                    className="my-6"
                    style={{
                      height: '1px',
                      backgroundColor: 'var(--border-divider)',
                    }}
                  />

                  {/* Bio */}
                  <p
                    className="font-body leading-relaxed flex-1"
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: 'var(--color-primary)',
                      opacity: 0.85,
                    }}
                  >
                    {member.bio}
                  </p>

                  {/* Contact row */}
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={mailHref}
                      className="inline-flex items-center gap-2 font-body text-sm transition-colors hover:underline"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      <Icon name="mail" className="w-4 h-4 text-[var(--color-accent)]" />
                      Email
                    </a>
                    <a
                      href={telHref}
                      className="inline-flex items-center gap-2 font-body text-sm transition-colors hover:underline"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      <Icon name="phone" className="w-4 h-4 text-[var(--color-accent)]" />
                      {member.phone}
                    </a>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm transition-colors hover:underline"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      <Icon name="whatsapp" className="w-4 h-4 text-[var(--color-accent)]" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
