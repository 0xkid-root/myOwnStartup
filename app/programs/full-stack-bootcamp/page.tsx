import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProgramDetail } from '@/components/ProgramDetail';

export const metadata = {
  title: 'Full Stack Bootcamp - ZeroTwoCode',
  description: 'Learn complete web development from frontend to backend. Build and deploy full-stack applications in 10 weeks.',
};

export default function FullStackBootcampPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <ProgramDetail id="full-stack-bootcamp" />
      <Footer />
    </main>
  );
}
