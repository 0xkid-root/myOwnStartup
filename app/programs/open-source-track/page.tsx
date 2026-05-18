import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProgramDetail } from '@/components/ProgramDetail';

export const metadata = {
  title: 'Open Source Track - piecodingschools',
  description: 'Learn to contribute to massive open source projects. Build your public GitHub portfolio in 10 weeks.',
};

export default function OpenSourceTrackPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <ProgramDetail id="open-source-track" />
      <Footer />
    </main>
  );
}
