import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProgramDetail } from '@/components/ProgramDetail';

export const metadata = {
  title: 'Apprenticeship - ZeroTwoCode',
  description: 'Join our comprehensive 6-month Apprenticeship program. Get paid while learning from experienced engineers at top startups.',
};

export default function ApprenticeshipPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <ProgramDetail id="apprenticeship" />
      <Footer />
    </main>
  );
}
