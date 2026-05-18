import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProgramDetail } from '@/components/ProgramDetail';

export const metadata = {
  title: 'Winter Internship - piecodingschools',
  description: 'Join our focused 4-week Winter Internship program. Master modern web technologies during your winter break.',
};

export default function WinterInternshipPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <ProgramDetail id="winter-internship" />
      <Footer />
    </main>
  );
}
