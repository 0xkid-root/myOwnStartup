'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col items-center justify-center text-center px-[5%] pt-32 pb-20 bg-gradient-to-b from-[#dce8ff] to-[#f0f4ff] relative overflow-hidden">
      
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 10%, rgba(59, 110, 248, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-1.5 bg-white border border-[#dbeafe] rounded-full px-4 py-1.5 font-medium text-xs text-[#475569] mb-7 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        Applications Open for Summer Internship 2026
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-balance font-black text-5xl md:text-6xl leading-tight max-w-4xl mb-5 text-[#0f172a]">
        Build Real{' '}

        <motion.span
          animate={{
            opacity: [0.4, 1, 1, 0.4],
            y: [10, 0, 0, -5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="inline-block text-[#2563eb]"
        >
          Products
        </motion.span>

         Launch Your{' '}

        <motion.span
          animate={{
            opacity: [0.4, 1, 1, 0.4],
            y: [10, 0, 0, -5],
          }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="inline-block text-[#1d4ed8]"
        >
          Tech Career
        </motion.span>

        
      </h1>

      {/* Subheading */}
      <p className="relative z-10 text-[#64748b] text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
        Learn by building real products, work with industry engineers, and
        launch your tech career faster than traditional education.
      </p>

      {/* CTA Buttons */}
      <div className="relative z-10 flex gap-3 flex-wrap justify-center">
        <Link href="/apply">
          <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-7 py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
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
              group
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