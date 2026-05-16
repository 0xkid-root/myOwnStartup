import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { TechStack } from '@/components/TechStack';
import { WhyChoose } from '@/components/WhyChoose';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { ProgramsPreview } from '@/components/ProgramsPreview';

export default function Home() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <Stats />
      <TechStack />
      <ProgramsPreview />
      <WhyChoose />
      <Projects />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
