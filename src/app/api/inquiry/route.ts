import { NextResponse } from 'next/server';
import { company } from '@/lib/content';

/**
 * Inquiry endpoint — accepts contact form submissions.
 * Strategy: log to server console (visible in Vercel runtime logs) and
 * respond with success. For production, integrate with an email service
 * (Resend, SendGrid, Postmark) or persist to a database.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
    }

    const required = ['name', 'email', 'message'];
    for (const key of required) {
      if (!body[key] || typeof body[key] !== 'string' || body[key].trim().length === 0) {
        return NextResponse.json({ ok: false, error: `Missing field: ${key}` }, { status: 400 });
      }
    }

    console.log('[L&R Inquiry]', {
      receivedAt: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json({
      ok: true,
      message: `Inquiry received. Our team will respond within one business hour. For urgent matters, WhatsApp ${company.phoneDisplay}.`,
    });
  } catch (err) {
    console.error('[L&R Inquiry] Error:', err);
    return NextResponse.json(
      { ok: false, error: 'Server error. Please email us directly.' },
      { status: 500 }
    );
  }
}
