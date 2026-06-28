'use client';

import { useState } from 'react';
import { company } from '@/lib/content';
import { siteUrl } from '@/lib/siteConfig';
import { Icon } from '@/lib/icons';

type Status = 'idle' | 'submitting';

/**
 * ContactForm, gathers inquiry details, then redirects to WhatsApp
 * with a pre-filled message addressed to the L&R ops team.
 *
 * Rationale: the client requested that all contact form submissions
 * land directly in WhatsApp, where the team already operates and
 * responds fastest. No backend endpoint is needed.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get('name') || '').trim();
    const company_name = String(fd.get('company') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const cargo = String(fd.get('cargo') || '').trim();
    const origin = String(fd.get('origin') || '').trim();
    const destination = String(fd.get('destination') || '').trim();
    const serviceType = String(fd.get('serviceType') || '').trim();
    const message = String(fd.get('message') || '').trim();

    // Build a clean WhatsApp message
    const lines: string[] = [];
    lines.push('*L&R Clearing, New Inquiry*');
    lines.push('');
    if (name) lines.push(`*Name:* ${name}`);
    if (company_name) lines.push(`*Company:* ${company_name}`);
    if (email) lines.push(`*Email:* ${email}`);
    if (phone) lines.push(`*Phone:* ${phone}`);
    if (serviceType) lines.push(`*Service:* ${serviceType}`);
    if (cargo) lines.push(`*Cargo:* ${cargo}`);
    if (origin) lines.push(`*Origin:* ${origin}`);
    if (destination) lines.push(`*Destination:* ${destination}`);
    if (message) {
      lines.push('');
      lines.push('*Message:*');
      lines.push(message);
    }
    lines.push('');
    lines.push(`_Sent from ${siteUrl}_`);

    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${company.whatsapp}?text=${text}`;

    // Brief delay so the user sees the "Sending…" state, then redirect
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setStatus('idle');
      form.reset();
    }, 400);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-[var(--radius-card)] space-y-5"
      style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Company (optional)" name="company" autoComplete="organization" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <Field label="Cargo description" name="cargo" placeholder="e.g. 1×40ft container of mining consumables" />
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Origin" name="origin" placeholder="e.g. Shanghai" />
        <Field label="Destination" name="destination" placeholder="e.g. Walvis Bay" />
      </div>
      <div>
        <label htmlFor="serviceType" className="block font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-2">
          Service required
        </label>
        <select
          id="serviceType"
          name="serviceType"
          defaultValue=""
          className="w-full px-4 py-3 rounded-[var(--radius-btn)] border-0 font-body text-[var(--color-primary)]"
          style={{ backgroundColor: 'var(--color-light-bg)' }}
        >
          <option value="" disabled>Select a service…</option>
          <option value="Customs clearance">Customs clearance</option>
          <option value="Sea freight forwarding">Sea freight forwarding</option>
          <option value="Air freight forwarding">Air freight forwarding</option>
          <option value="Road / cross-border freight">Road / cross-border freight</option>
          <option value="Port & border operations">Port &amp; border operations</option>
          <option value="Documentation support">Documentation support</option>
          <option value="Supply chain / 3PL">Supply chain / 3PL</option>
          <option value="Specialized cargo">Specialized cargo</option>
          <option value="Not sure, please advise">Not sure, please advise</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-[var(--radius-btn)] border-0 font-body text-[var(--color-primary)]"
          style={{ backgroundColor: 'var(--color-light-bg)' }}
          placeholder="Share shipment dates, HS code if known, special handling requirements, etc."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 font-body font-medium px-7 py-4 text-xs tracking-widest uppercase transition-all duration-300 rounded-[var(--radius-btn)] disabled:opacity-60"
        style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
      >
        <Icon name="whatsapp" className="w-4 h-4" />
        {status === 'submitting' ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
      </button>

      <p className="font-body text-xs text-[var(--color-secondary)] text-center leading-relaxed">
        Submitting opens WhatsApp with your details pre-filled, just hit send. We respond within one business hour during office hours (07:30–17:00 CAT, Mon–Fri).
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-[0.625rem] uppercase tracking-widest text-[var(--color-secondary)] mb-2">
        {label}{required && <span className="text-[var(--color-accent)] ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full px-4 py-3 rounded-[var(--radius-btn)] border-0 font-body text-[var(--color-primary)]"
        style={{ backgroundColor: 'var(--color-light-bg)' }}
      />
    </div>
  );
}
