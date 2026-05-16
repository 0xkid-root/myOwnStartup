import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ApplicationHero } from '@/src/features/application/components/ApplicationHero';
import { ApplicationForm } from '@/src/features/application/components/ApplicationForm';

export const metadata = {
  title: 'Apply Now | ZeroTwoCode',
  description: 'Apply to ZeroTwoCode programs and start your tech career journey today.',
};

export default function ApplyPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[5%] bg-gradient-to-b from-[#dce8ff] to-[#f0f4ff]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          <ApplicationHero />
          <ApplicationForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
