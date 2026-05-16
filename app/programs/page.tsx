import { Navigation } from '@/components/Navigation';
import { Programs } from '@/components/Programs';
import { HowItWorks } from '@/components/HowItWorks';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Programs - ZeroTwoCode',
  description: 'Explore our programs: Internships, Bootcamps, and Apprenticeships',
};

export default function ProgramsPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <section className="pt-24 pb-12 px-[5%] bg-gradient-to-b from-[#dce8ff] to-[#f0f4ff]">
        <div className="text-center">
          <h1 className="text-balance text-primary font-black text-4xl md:text-5xl mb-4">
            Discover Our
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
            From short-term bootcamps to immersive 6-month apprenticeships.
            <br />
            Find the perfect path to launch your tech career.
          </p>
        </div>
      </section>
      <Programs />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
