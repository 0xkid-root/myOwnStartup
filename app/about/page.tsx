import { Navigation } from '@/components/Navigation';
import { AboutMission } from '@/components/AboutMission';
import { AboutStory } from '@/components/AboutStory';
import { CoreValues } from '@/components/CoreValues';
import { LearnFromBest } from '@/components/LearnFromBest';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <AboutMission />
      <AboutStory />
      <CoreValues />
      <LearnFromBest />
      <CTA />
      <Footer />
    </main>
  );
}
