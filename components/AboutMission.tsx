'use client';

import { motion } from 'framer-motion';

export function AboutMission() {
  return (
    <section className="pt-24 pb-12 px-[5%] bg-gradient-to-b from-[#dce8ff] to-[#f0f4ff] overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#dbeafe] text-[#2563eb] text-xs font-semibold mb-6 shadow-sm">
          Our Mission
        </div>

        {/* Heading */}
        <h1 className="text-balance font-black text-4xl md:text-6xl leading-tight text-[#0f172a] mb-6">
          Bridging the Gap Between{' '}

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
            Learning
          </motion.span>

          {' '}and{' '}

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
            Industry
          </motion.span>
        </h1>

        {/* Description */}
        <p className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          We founded piecodingschools to help students gain practical startup
          experience, build real-world projects, and become industry-ready
          developers through mentorship and hands-on learning.
        </p>
      </div>
    </section>
  );
}