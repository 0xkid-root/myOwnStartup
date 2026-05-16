import Link from "next/link";
import {
  Code2,
  Brain,
  Blocks,
  Snowflake,
  Briefcase,
  Rocket,
  ArrowRight,
} from "lucide-react";

export function ProgramsPreview() {
  const programs = [
    {
      icon: Rocket,
      title: "Summer Internship",
      slug: "programs/summer-internship",
      desc: "Intensive 8-week program building real products from scratch. Includes mentorship and job placement support.",
      badge: "8 Weeks",
    },
    {
      icon: Snowflake,
      title: "Winter Internship",
      slug: "programs/winter-internship",
      desc: "A focused 4-week intensive sprint designed to transform your web development skills during the holiday break.",
      badge: "4 Weeks",
    },
    {
      icon: Briefcase,
      title: "Apprenticeship Program",
      slug: "programs/apprenticeship-program",
      desc: "A comprehensive 6-month paid placement with early-stage startups. Work on real products while earning.",
      badge: "6 Months",
    },
    {
      icon: Brain,
      title: "AI & Full Stack Bootcamp",
      slug: "programs/ai-bootcamp",
      desc: "Build production-ready AI applications using LLMs, RAG systems, and modern full-stack technologies.",
      badge: "12 Weeks",
    },
    {
      icon: Blocks,
      title: "Blockchain Training",
      slug: "programs/blockchain-training",
      desc: "Master Solidity, smart contracts, Web3 development, and build decentralized applications from scratch.",
      badge: "Web3",
    },
    {
      icon: Code2,
      title: "Full Stack Bootcamp",
      slug: "programs/full-stack-bootcamp",
      desc: "Learn React, Next.js, Node.js, databases, deployment, APIs, and complete modern web development.",
      badge: "10 Weeks",
    },
  ];

  return (
    <section className="py-24 px-[5%] bg-gradient-to-b from-[#edf4ff] to-[#f8fbff] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#dbeafe] opacity-30 blur-3xl rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative text-center mb-14">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#dbeafe] text-[#2563eb] text-xs font-semibold mb-5">
          Internship & Training Programs
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] -tracking-wide mb-4">
          Discover Our Programs
        </h2>

        <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Practical internship and bootcamp programs designed to help students
          build real-world skills and launch their tech careers faster.
        </p>
      </div>

      {/* Program Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {programs.map((program, idx) => {
          const Icon = program.icon;

          return (
            <Link
              key={idx}
              href={`/${program.slug}`}
              className="
    group
    bg-white
    border border-[#dbeafe]
    rounded-3xl
    p-7
    hover:-translate-y-1
    hover:shadow-[0_20px_60px_rgba(37,99,235,0.10)]
    transition-all
    duration-300
    block
  "
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#edf4ff] flex items-center justify-center">
                  <Icon className="h-6 w-6 text-[#2563eb]" />
                </div>

                <div className="px-3 py-1 rounded-full bg-[#f1f5f9] text-[#475569] text-xs font-semibold">
                  {program.badge}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                {program.title}
              </h3>

              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                {program.desc}
              </p>

              {/* CTA */}
              <button className="flex items-center gap-2 text-[#2563eb] text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="relative flex justify-center mt-12">
        <Link
          href="/programs"
          className="
            inline-flex
            items-center
            gap-2
            bg-[#0f172a]
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            hover:opacity-90
            transition-all
          "
        >
          View All Programs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
