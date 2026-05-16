import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-20 px-[5%] bg-background">
      <div className="bg-[#0d0f1a] rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center">
        <h2 className="text-balance text-white font-black text-3xl md:text-4xl mb-4">
          Not sure which path to take?
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8">
          Schedule a free 15-minute call with our career advisors to find the program
          <br />
          that perfectly aligns with your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-primary font-semibold px-8 py-2.5 rounded-full hover:bg-gray-100 transition-colors">
            Talk to an Advisor
          </Button>
          <Button
            variant="outline"
            className="border border-gray-600 text-white hover:bg-gray-900 px-8 py-2.5 rounded-full transition-colors"
          >
            View FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}
