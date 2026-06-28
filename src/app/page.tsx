import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Services } from '@/components/Services';
import { WhyLR } from '@/components/WhyLR';
import { ImageStrip } from '@/components/ImageStrip';
import { ScenesGallery } from '@/components/ScenesGallery';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'L&R Clearing Agency CC, Customs Clearing, Freight Forwarding & Logistics',
  description:
    'Proudly Namibian customs clearing and freight forwarding company at Walvis Bay and Lüderitz. Imports, exports, cross-border logistics across SACU and SADC.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'L&R Clearing Agency CC, Customs Clearing & Freight Forwarding',
    description:
      'Proudly Namibian customs clearing and freight forwarding at Walvis Bay and Lüderitz. Cross-border logistics across SACU and SADC.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <ScenesGallery />
        <WhyLR />
        <ImageStrip />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
