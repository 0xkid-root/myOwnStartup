import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col items-center justify-center text-center px-[5%] pt-32 pb-20 bg-gradient-to-b from-[#dce8ff] to-[#f0f4ff] relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 10%, rgba(59, 110, 248, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-3.5 py-1.5 font-medium text-xs text-muted mb-7 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        Applications open for Summer 2024
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-balance text-foreground font-bold text-5xl md:text-6xl leading-tight max-w-3xl mb-5 -tracking-wider">
        Go from Learning to Earning
      </h1>

      {/* Subheading */}
      <p className="relative z-10 text-muted text-base md:text-lg max-w-2xl mb-9">
        Skip the theory. Build real products with industry engineers, get paid while you learn, and launch your tech career in months, not years.
      </p>

      {/* CTA Buttons */}
      <div className="relative z-10 flex gap-3 flex-wrap justify-center">
        <Link href="/apply">
          <Button className="bg-primary text-primary-foreground font-semibold text-sm px-7 py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Apply Now
          </Button>
        </Link>
        <Link href="/programs">
          <Button
            variant="outline"
            className="bg-card text-foreground border-1.5 border-border font-semibold text-sm px-7 py-3 rounded-xl hover:border-accent transition-colors"
          >
            Explore Programs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
