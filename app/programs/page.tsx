import { Navigation } from '@/components/Navigation';
import { Programs } from '@/components/Programs';
import { HowItWorks } from '@/components/HowItWorks';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhatYouBuild } from '@/components/WhatYouBuild';

export const metadata = {
  title: 'Programs - piecodingschools',
  description: 'Explore our programs: Internships, Bootcamps, and Apprenticeships',
};

export default function ProgramsPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <Programs />
      <WhatYouBuild />
      {/* <HowItWorks /> */}
      <CTA />
      <Footer />
    </main>
  );
}
