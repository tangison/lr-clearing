import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Security headers — applied to all routes.
  // CSP allows: self, Vercel CDN assets, inline styles (Next.js requires),
  // inline scripts (Next.js hydration), wa.me / api.whatsapp.com (WhatsApp links),
  // Google Fonts (preloaded by next/font).
  // TODO: tighten script-src to nonce-based CSP once Next.js nonce support is wired.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' data: https://fonts.gstatic.com",
            "img-src 'self' data: blob: https:",
            "connect-src 'self' https://wa.me https://api.whatsapp.com",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self' https://wa.me",
          ].join("; ") },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
