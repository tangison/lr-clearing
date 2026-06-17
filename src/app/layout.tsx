import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/content";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lr-clearing.vercel.app"),
  title: {
    default: "L&R Clearing Agency CC — Customs Clearing, Freight Forwarding & Logistics",
    template: "%s",
  },
  description:
    "L&R Clearing Agency CC is a proudly Namibian-owned customs clearing and forwarding company delivering professional, efficient, and reliable logistics solutions across Namibia and Southern Africa.",
  keywords: [
    "customs clearing",
    "freight forwarding",
    "Namibia",
    "Walvis Bay",
    "Lüderitz",
    "import export",
    "trade compliance",
    "supply chain",
    "clearing agent",
    "Namibia customs",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  applicationName: company.legalName,
  icons: {
    icon: "/brand/logo-icon.png",
    apple: "/brand/logo-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "L&R Clearing Agency CC — Customs Clearing & Freight Forwarding",
    description:
      "Proudly Namibian-owned customs clearing and forwarding company. Professional, efficient, and reliable logistics solutions across Namibia and Southern Africa.",
    siteName: company.legalName,
    type: "website",
    locale: "en_NA",
    url: "https://lr-clearing.vercel.app",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Port straddle carrier moving L&R branded container at Walvis Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L&R Clearing Agency CC — Customs Clearing & Freight Forwarding",
    description:
      "Proudly Namibian-owned customs clearing and forwarding company operating across Namibia and Southern Africa.",
    images: ["/images/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://lr-clearing.vercel.app",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: "L&R Clearing",
  description: company.tagline,
  url: "https://lr-clearing.vercel.app",
  logo: "https://lr-clearing.vercel.app/brand/logo-full.png",
  image: "https://lr-clearing.vercel.app/images/hero.jpeg",
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: company.address.city,
    addressCountry: "NA",
  },
  areaServed: [
    { "@type": "Country", name: "Namibia" },
    { "@type": "Place", name: "Southern Africa" },
  ],
  knowsAbout: [
    "Customs clearance",
    "Freight forwarding",
    "Sea freight",
    "Air freight",
    "Road freight",
    "Cross-border logistics",
    "Walvis Bay Port",
    "Lüderitz Port",
    "ASYCUDA World",
    "SACU customs",
    "SADC trade",
  ],
  sameAs: [],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.legalName,
  url: "https://lr-clearing.vercel.app",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: company.legalName },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={`${barlowCondensed.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased font-body`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
