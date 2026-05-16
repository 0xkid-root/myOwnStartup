'use client';

import {
  Brain,
  LayoutDashboard,
  Blocks,
  MessageSquare,
} from 'lucide-react';

export function WhatYouBuild() {
  const projects = [
    {
      icon: LayoutDashboard,
      title: 'Startup SaaS Dashboard',
      desc: 'Build a modern admin dashboard with authentication, analytics, APIs, and responsive UI.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Brain,
      title: 'AI Powered Applications',
      desc: 'Create production-ready AI apps using LLMs, RAG systems, and modern AI workflows.',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Blocks,
      title: 'Blockchain dApps',
      desc: 'Develop decentralized applications, smart contracts, and Web3 integrations.',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: MessageSquare,
      title: 'Real-Time Collaboration Tools',
      desc: 'Build chat systems, team collaboration apps, and real-time web platforms.',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <section className="py-24 px-[5%] bg-gradient-to-b from-[#f8fbff] to-[#edf4ff] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#dbeafe] opacity-30 blur-3xl rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative text-center mb-14">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#dbeafe] text-[#2563eb] text-xs font-semibold mb-5">
          Real Project Experience
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] -tracking-wide mb-4">
          What You’ll Build
        </h2>

        <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Work on real-world projects designed to help you gain practical
          experience and build a strong developer portfolio.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const Icon = project.icon;

          return (
            <div
              key={idx}
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
              "
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${project.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                {project.title}
              </h3>

              <p className="text-[#64748b] text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}