import { Navigation } from '@/components/Navigation';
import { AboutMission } from '@/components/AboutMission';
import { AboutStory } from '@/components/AboutStory';
import { CoreValues } from '@/components/CoreValues';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhyPieCodingSchools } from '@/components/WhyPieCodingSchools';

export default function About() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <AboutMission />
      <AboutStory />
      <CoreValues />
      <WhyPieCodingSchools />
      <CTA />
      <Footer />
    </main>
  );
}
