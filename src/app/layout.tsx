import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "L&R Clearing Agency CC — Customs Clearing & Freight Forwarding in Namibia",
  description:
    "L&R Clearing Agency Close Corporation provides professional customs clearing, freight forwarding, and trade compliance services across Namibia. Operating from Walvis Bay with nationwide coverage since 2012.",
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
  authors: [{ name: "L&R Clearing Agency CC" }],
  icons: {
    icon: "/brand/logo-icon.png",
  },
  openGraph: {
    title: "L&R Clearing Agency CC — Customs Clearing & Freight Forwarding",
    description:
      "Professional customs clearing, freight forwarding, and trade compliance services across Namibia since 2012.",
    siteName: "L&R Clearing Agency CC",
    type: "website",
    locale: "en_NA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
