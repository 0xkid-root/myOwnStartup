import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProgramDetail } from '@/components/ProgramDetail';

export const metadata = {
  title: 'Summer Internship - ZeroTwoCode',
  description: 'Join our intensive 8-week Summer Internship program. Build real products from scratch with mentorship and job placement support.',
};

export default function SummerInternshipPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <ProgramDetail id="summer-internship" />
      <Footer />
    </main>
  );
}
