import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProgramDetail } from '@/components/ProgramDetail';

export const metadata = {
  title: 'Blockchain Training - ZeroTwoCode',
  description: 'Master smart contracts, Web3, and decentralized applications. Build production-ready blockchain projects.',
};

export default function BlockchainTrainingPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <ProgramDetail id="blockchain-training" />
      <Footer />
    </main>
  );
}
