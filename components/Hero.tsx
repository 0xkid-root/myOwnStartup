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
        Applications open for Summer Intership 2026
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-balance text-foreground font-bold text-5xl md:text-6xl leading-tight max-w-3xl mb-5 -tracking-wider">
        Go from Learning to Earning
      </h1>

      {/* Subheading */}
      <p className="relative z-10 text-muted text-base md:text-lg max-w-2xl mb-9">
        Learn by building real products, work with industry engineers, and launch your tech career faster than traditional education.
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
  className="
    bg-white
    text-[#1e293b]
    border border-[#dbe4ff]
    font-semibold
    text-sm
    px-7 py-3
    rounded-xl
    shadow-sm
    hover:bg-[#edf4ff]
    hover:border-[#6ea8fe]
    hover:text-[#2563eb]
    hover:shadow-md
    transition-all
    duration-300
  "
>
  Explore Programs
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
</Button>
        </Link>
      </div>
    </section>
  );
}
