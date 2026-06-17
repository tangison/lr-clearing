'use client';

import { useState } from 'react';
import { company } from '@/lib/content';
import { Icon } from '@/lib/icons';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Unknown error');
    }
  }

  if (status === 'success') {
    return (
      <div
        className="p-10 rounded-[var(--radius-card)] text-center"
        style={{ backgroundColor: 'white', border: '1px solid var(--border-divider)' }}
      >
        <div className="inline-flex w-14 h-14 items-center justify-center rounded-full mb-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
          <Icon name="check" className="w-7 h-7" />
        </div>
        <h3 className="font-display font-bold text-2xl text-[var(--color-primary)] mb-2">Inquiry received.</h3>
        <p className="font-body text-[var(--color-primary)]/75 max-w-md mx-auto">
          Thank you. Our team will respond within one business hour during office hours. For urgent
          matters, message us on WhatsApp at {company.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-accent)] hover:underline"
        >
          Submit another inquiry →
        </button>
      </div>
    );
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
          className="w-full px-4 py-3 rounded-[var(--radius-btn)] border-0 font-body text-[var(--color-primary)]"
          style={{ backgroundColor: 'var(--color-light-bg)' }}
        >
          <option>Customs clearance</option>
          <option>Sea freight forwarding</option>
          <option>Air freight forwarding</option>
          <option>Road / cross-border freight</option>
          <option>Port &amp; border operations</option>
          <option>Documentation support</option>
          <option>Supply chain / 3PL</option>
          <option>Specialized cargo</option>
          <option>Not sure — please advise</option>
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

      {status === 'error' && (
        <p className="font-body text-sm text-red-600" role="alert">
          Could not submit: {error}. Please email us directly at {company.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 font-body font-medium px-7 py-4 text-xs tracking-widest uppercase transition-all duration-300 rounded-[var(--radius-btn)] disabled:opacity-60"
        style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Inquiry'}
        {status !== 'submitting' && <Icon name="arrow-right" className="w-4 h-4" />}
      </button>

      <p className="font-body text-xs text-[var(--color-secondary)] text-center">
        By submitting you agree to be contacted by {company.legalName} regarding your inquiry. We do not share your data with third parties.
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
