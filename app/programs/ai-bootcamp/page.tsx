import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProgramDetail } from '@/components/ProgramDetail';

export const metadata = {
  title: 'AI & Full Stack Bootcamp - ZeroTwoCode',
  description: 'Master LLMs, RAG, and AI development. Build 3 production-ready AI applications in 12 weeks.',
};

export default function AIBootcampPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <ProgramDetail id="ai-bootcamp" />
      <Footer />
    </main>
  );
}
