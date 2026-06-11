import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { ComingSoon } from '@/components/ComingSoon';

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <ComingSoon pageTitle="Portfolio" />
    </>
  );
}
