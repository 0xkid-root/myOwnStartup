"use client";

import { motion } from "framer-motion";
import { BENEFITS } from "../constants/application.constants";

export function ApplicationHero() {
  return (
    <div className="w-full lg:w-[38%]">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#dbeafe] shadow-sm mb-6">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

        <span className="text-xs font-bold tracking-wide text-[#2563eb]">
          SUMMER • WINTER • APPRENTICESHIP
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-black leading-tight text-[#0f172a] mb-6">

        Build Your{" "}

        <motion.span
          animate={{
            opacity: [0.5, 1, 1, 0.5],
            y: [8, 0, 0, -4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="bg-gradient-to-r from-[#2563eb] to-[#4338ca] bg-clip-text text-transparent inline-block"
        >
          Startup Career
        </motion.span>

      </h1>

      {/* Description */}
      <p className="text-[#64748b] text-lg leading-relaxed mb-10 max-w-lg">
        Work on real-world startup products, learn from mentors,
        and gain practical experience through our internship
        and apprenticeship programs.
      </p>

      {/* Benefits */}
      <div className="space-y-5 mb-10">

        {BENEFITS.slice(0, 3).map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5 hover:border-[#bfdbfe] hover:shadow-md transition-all duration-300"
          >

            {/* Number */}
            <div className="w-11 h-11 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center font-black shrink-0">
              0{index + 1}
            </div>

            {/* Content */}
            <div>
              <h3 className="font-bold text-[#0f172a] mb-1">
                {benefit.title}
              </h3>

              <p className="text-sm text-[#64748b] leading-relaxed">
                {benefit.description}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Bottom Card */}
      {/* <div className="rounded-3xl bg-[#0f172a] p-6 text-white">

        <p className="text-xs uppercase tracking-widest text-[#93c5fd] font-bold mb-3">
          APPLICATIONS OPEN
        </p>

        <h3 className="text-2xl font-black mb-3">
          Limited Seats Available 🚀
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed">
          Selected students will collaborate on real startup projects
          and gain industry-level development experience.
        </p>

      </div> */}
    </div>
  );
}