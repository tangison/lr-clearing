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
