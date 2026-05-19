import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProgramDetail } from '@/components/ProgramDetail';
import {
  Code2,
  Braces,
  Rocket,
  Database,
} from "lucide-react";

export const metadata = {
  title: 'Summer Internship - piecodingschools',
  description: 'Join our intensive 8-week Summer Internship program. Build real products from scratch with mentorship and job placement support.',
};

export default function SummerInternshipPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <ProgramDetail id="summer-internship" />

      <section className="py-32 px-[5%] bg-gradient-to-b from-background via-[#f8fbff] to-[#eef4ff] relative overflow-hidden">

  {/* Background Blur */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#3b6ef8]/10 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5b5ef8]/10 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-3 mb-6">
        <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#3b6ef8] to-[#5b5ef8]"></span>

        <span className="text-sm font-bold tracking-[0.3em] text-[#3b6ef8]">
          PRACTICAL TRAINING
        </span>

        <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#5b5ef8] to-[#3b6ef8]"></span>
      </div>

      <h2 className="text-5xl md:text-6xl font-black text-primary mb-6">
        Projects & Practice
      </h2>

      <p className="text-[#4a5568] text-lg leading-relaxed max-w-3xl mx-auto">
        Learn by building real projects, solving coding problems,
        and working on practical full stack applications.
      </p>
    </div>

    {/* Cards */}

    {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

  {/* C Programming */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3b6ef8]/10 transition-all duration-500">

    <div className="absolute inset-0 bg-gradient-to-br from-[#3b6ef8]/0 to-[#5b5ef8]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b6ef8]/15 to-[#5b5ef8]/10 flex items-center justify-center mb-6">
        <Code2 className="w-8 h-8 text-[#3b6ef8]" />
      </div>

      <h3 className="text-2xl font-black text-primary mb-4">
        C Programming
      </h3>

      <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
        Build strong programming fundamentals and problem-solving skills.
      </p>

      <ul className="space-y-3 text-sm text-[#2d3748]">
        <li>• 50+ Logic Questions</li>
        <li>• Arrays & Strings</li>
        <li>• Functions & Pointers</li>
        <li>• Recursion Practice</li>
      </ul>
    </div>
  </div>

  {/* JavaScript */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3b6ef8]/10 transition-all duration-500">

    <div className="absolute inset-0 bg-gradient-to-br from-[#3b6ef8]/0 to-[#5b5ef8]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b6ef8]/15 to-[#5b5ef8]/10 flex items-center justify-center mb-6">
        <Braces className="w-8 h-8 text-[#3b6ef8]" />
      </div>

      <h3 className="text-2xl font-black text-primary mb-4">
        JavaScript Projects
      </h3>

      <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
        Create interactive frontend applications using JavaScript.
      </p>

      <ul className="space-y-3 text-sm text-[#2d3748]">
        <li>• Calculator App</li>
        <li>• Weather App</li>
        <li>• Todo App</li>
        <li>• Portfolio Website</li>
      </ul>
    </div>
  </div>

  {/* React */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3b6ef8]/10 transition-all duration-500">

    <div className="absolute inset-0 bg-gradient-to-br from-[#3b6ef8]/0 to-[#5b5ef8]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b6ef8]/15 to-[#5b5ef8]/10 flex items-center justify-center mb-6">
        <Database className="w-8 h-8 text-[#3b6ef8]" />
      </div>

      <h3 className="text-2xl font-black text-primary mb-4">
        React Projects
      </h3>

      <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
        Learn component-based frontend development with React.
      </p>

      <ul className="space-y-3 text-sm text-[#2d3748]">
        <li>• Notes App</li>
        <li>• Recipe AI App</li>
        <li>• Movie Search App</li>
        <li>• API Integration</li>
      </ul>
    </div>
  </div>
</div>

{/* Major Projects Full Width */}
<div className="mt-10">

  <div className="group relative overflow-hidden rounded-[32px] border border-[#3b6ef8]/20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#172554] p-10 md:p-14 hover:shadow-2xl hover:shadow-[#3b6ef8]/20 transition-all duration-500">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#3b6ef8]/10 via-transparent to-[#5b5ef8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10">

      {/* Top */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-12">

        {/* Left */}
        <div className="max-w-2xl">
          <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-md mb-8">
            <Rocket className="w-10 h-10 text-[#60a5fa]" />
          </div>

          <span className="inline-block text-sm tracking-[0.3em] font-bold text-[#60a5fa] mb-5">
            FINAL PROJECTS
          </span>

          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Build Real Production-Level Applications
          </h3>

          <p className="text-white/70 text-lg leading-relaxed">
            Students work on modern full stack applications with
            authentication, APIs, AI integration, deployment,
            dashboards, and real-world workflows.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h4 className="text-3xl font-black text-white mb-2">
              2
            </h4>

            <p className="text-white/60 text-sm">
              Major Projects
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h4 className="text-3xl font-black text-white mb-2">
              Full Stack
            </h4>

            <p className="text-white/60 text-sm">
              Real Development
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* DevConnect */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#3b6ef8]/20 flex items-center justify-center text-2xl">
              💼
            </div>

            <div>
              <h4 className="text-2xl font-black text-white">
                DevConnect Platform
              </h4>

              <p className="text-white/50 text-sm">
                Developer Social Network
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-white/80">
            <li>• Developer Profiles</li>
            <li>• Posts & Feed System</li>
            <li>• GitHub Integration</li>
            <li>• Authentication</li>
          </ul>
        </div>

        {/* AI Resume */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#5b5ef8]/20 flex items-center justify-center text-2xl">
              🤖
            </div>

            <div>
              <h4 className="text-2xl font-black text-white">
                AI Resume Analyzer
              </h4>

              <p className="text-white/50 text-sm">
                AI Powered Resume Review
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-white/80">
            <li>• Resume Upload</li>
            <li>• ATS Score</li>
            <li>• AI Feedback</li>
            <li>• Dashboard System</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</div>
    
  </div>
</section>

      <Footer />
    </main>
  );
}
