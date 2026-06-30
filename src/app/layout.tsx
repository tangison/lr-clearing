import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/content";
import { siteUrl } from "@/lib/siteConfig";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "L&R Clearing Agency CC, Customs Clearing, Freight Forwarding & Logistics",
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
    // TODO: export a 180×180 square apple-touch-icon from the logo source.
    // logo-icon.png is 669×373, works but not ideal for iOS home screen.
    icon: "/brand/logo-icon.png",
    apple: "/brand/logo-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "L&R Clearing Agency CC, Customs Clearing & Freight Forwarding",
    description:
      "Proudly Namibian-owned customs clearing and forwarding company. Professional, efficient, and reliable logistics solutions across Namibia and Southern Africa.",
    siteName: company.legalName,
    type: "website",
    locale: "en_NA",
    url: siteUrl,
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 896,
        alt: "Port straddle carrier moving L&R branded container at Walvis Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L&R Clearing Agency CC, Customs Clearing & Freight Forwarding",
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
    canonical: siteUrl,
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: "L&R Clearing",
  description: company.tagline,
  url: siteUrl,
  logo: `${siteUrl}/brand/logo-full.png`,
  image: `${siteUrl}/images/hero.jpeg`,
  email: company.email,
  telephone: company.phone,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: ["Namibia", "Southern Africa"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        opens: "00:00",
        closes: "23:59",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    },
    {
      "@type": "ContactPoint",
      telephone: company.phoneSecondary,
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: ["Namibia", "Southern Africa"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        opens: "00:00",
        closes: "23:59",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    },
  ],
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
    "Transport permits",
    "Abnormal load permits",
    "ITAC permits",
    "Aviation operating licences",
    "Hazardous goods transport permits",
  ],
  // TODO: add LinkedIn, Facebook, and Instagram URLs when available.
  sameAs: ['https://studio.tangison.com'],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.legalName,
  url: siteUrl,
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
