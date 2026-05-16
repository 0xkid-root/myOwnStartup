'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { PROGRAMS_DATA } from '@/src/features/programs/constants/program.constants';

interface ProgramDetailProps {
  id: string;
}

export function ProgramDetail({ id }: ProgramDetailProps) {
  // Find the program from the data
  const programData = PROGRAMS_DATA.find(p => p.slug === id);

  if (!programData) {
    return (
      <section className="pt-24 pb-12 px-[5%] bg-gradient-to-b from-[#dce8ff] to-[#f0f4ff]">
        <Link href="/programs" className="text-accent font-medium text-sm mb-8 inline-block hover:text-primary transition-colors">
          ← Back to Programs
        </Link>
        <div className="text-center">
          <h1 className="text-balance text-primary font-black text-4xl md:text-5xl mb-4">
            Program Not Found
          </h1>
          <p className="text-muted text-base mb-8">The program you&apos;s looking for doesn&apos;t exist.</p>
          <Link href="/programs">
            <button className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
              View All Programs
            </button>
          </Link>
        </div>
      </section>
    );
  }

  // Icon mapping for different learning outcomes
  const getIconForOutcome = (title: string) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('programming') || lowerTitle.includes('fundamentals')) {
      return '⚙️';
    } else if (lowerTitle.includes('frontend') || lowerTitle.includes('react') || lowerTitle.includes('ui')) {
      return '✨';
    } else if (lowerTitle.includes('backend') || lowerTitle.includes('server') || lowerTitle.includes('node')) {
      return '🔧';
    } else if (lowerTitle.includes('database') || lowerTitle.includes('sql') || lowerTitle.includes('data')) {
      return '💾';
    } else if (lowerTitle.includes('devops') || lowerTitle.includes('deployment') || lowerTitle.includes('deploy') || lowerTitle.includes('docker') || lowerTitle.includes('cloud')) {
      return '🚀';
    } else if (lowerTitle.includes('security') || lowerTitle.includes('auth')) {
      return '🔐';
    } else if (lowerTitle.includes('testing') || lowerTitle.includes('test')) {
      return '✅';
    } else if (lowerTitle.includes('ai') || lowerTitle.includes('llm') || lowerTitle.includes('machine')) {
      return '🤖';
    } else if (lowerTitle.includes('workflow') || lowerTitle.includes('professional') || lowerTitle.includes('git')) {
      return '📋';
    } else if (lowerTitle.includes('integration') || lowerTitle.includes('api')) {
      return '🔌';
    } else if (lowerTitle.includes('smart') || lowerTitle.includes('contract')) {
      return '📜';
    } else if (lowerTitle.includes('token') || lowerTitle.includes('defi')) {
      return '💰';
    }
    return '📚';
  };

  // Map program data to display structure
  const program = {
    badge: `${programData.title.split(' ')[0]} Cohort 2024`,
    title: `${programData.title} Program`,
    description: programData.description,
    ctaTitle: `Join ${programData.title}`,
    ctaText: `Start your journey with our ${programData.title.toLowerCase()}. Limited spots available.`,
    applyText: `Apply Now`,
    details: {
      duration: programData.duration,
      commitment: programData.commitment,
      location: programData.location,
      techStack: programData.techStack.join(', '),
    },
    learningOutcomes: (programData.outcomes || []).map((outcome, index) => ({
      id: String(index + 1).padStart(2, '0'),
      title: outcome.title,
      desc: outcome.description,
      color: programData.circleColor.replace('bg-', 'text-'),
      icon: getIconForOutcome(outcome.title),
    })),
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-[5%] bg-gradient-to-br from-[#dce8ff] via-[#e8f0ff] to-[#f0f4ff] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#3b6ef8]/10 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#5b5ef8]/10 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <Link href="/programs" className="text-[#3b6ef8] font-medium text-sm mb-12 inline-flex items-center gap-2 hover:gap-3 transition-all">
            <span>←</span> Back to Programs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <div className="inline-block bg-white/60 backdrop-blur-sm text-[#3b6ef8] px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-[#3b6ef8]/20">
                {program.badge}
              </div>
              
              <h1 className="text-balance text-primary font-black text-5xl md:text-6xl mb-8 leading-tight">
                {program.title}
              </h1>
              
              <p className="text-[#4a5568] text-lg leading-relaxed mb-12 max-w-xl">
                {program.description}
              </p>

              {/* CTA Buttons with Enhanced Styling */}
              <div className="flex flex-wrap gap-4 mb-16">
                <Link href="/apply">
                  <button className="group relative bg-gradient-to-r from-[#3b6ef8] to-[#2452d4] text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#3b6ef8]/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">{program.applyText}</span>
                  </button>
                </Link>
                <button className="group relative border-2 border-[#3b6ef8] text-[#3b6ef8] font-semibold px-8 py-4 rounded-full hover:border-[#2452d4] transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-[#3b6ef8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Download Syllabus</span>
                </button>
              </div>

              {/* Enhanced Tech Stack Preview - Show ALL technologies */}
              <div className="flex flex-wrap gap-3">
                {program.details.techStack.split(', ').map((tech, idx) => (
                  <span key={idx} className="group relative inline-block bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-md text-[#3b6ef8] px-4 py-2 rounded-xl text-sm font-bold border border-[#3b6ef8]/20 hover:border-[#3b6ef8]/50 transition-all duration-300 hover:-translate-y-1 cursor-default">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8]/0 to-[#3b6ef8]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Program Details Card */}
            <div className="lg:sticky lg:top-24">
              <Card className="bg-white/95 backdrop-blur-md border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-primary font-bold text-xl mb-8 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#3b6ef8] to-[#5b5ef8] rounded-full"></div>
                  Program Details
                </h3>
                
                <div className="space-y-8">
                  <div className="group">
                    <p className="text-[#718096] text-xs uppercase font-bold tracking-wider mb-2 group-hover:text-[#3b6ef8] transition-colors">Duration</p>
                    <p className="text-primary font-bold text-lg group-hover:text-[#3b6ef8] transition-colors">{program.details.duration}</p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-[#3b6ef8]/20 to-transparent"></div>
                  
                  <div className="group">
                    <p className="text-[#718096] text-xs uppercase font-bold tracking-wider mb-2 group-hover:text-[#3b6ef8] transition-colors">Commitment</p>
                    <p className="text-primary font-bold text-lg group-hover:text-[#3b6ef8] transition-colors">{program.details.commitment}</p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-[#3b6ef8]/20 to-transparent"></div>
                  
                  <div className="group">
                    <p className="text-[#718096] text-xs uppercase font-bold tracking-wider mb-2 group-hover:text-[#3b6ef8] transition-colors">Location</p>
                    <p className="text-primary font-bold text-lg group-hover:text-[#3b6ef8] transition-colors">{program.details.location}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Learn Section */}
      <section className="py-32 px-[5%] bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b6ef8]/5 to-transparent opacity-30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="inline-block h-1 w-12 bg-gradient-to-r from-[#3b6ef8] to-[#5b5ef8] rounded-full"></span>
                <div className="text-sm font-bold text-[#3b6ef8] tracking-widest">CURRICULUM</div>
                <span className="inline-block h-1 w-12 bg-gradient-to-r from-[#5b5ef8] to-[#3b6ef8] rounded-full"></span>
              </div>
            </div>
            <h2 className="text-balance text-primary font-black text-6xl md:text-7xl mb-8 leading-tight">
              What You Will Learn
            </h2>
            <p className="text-[#4a5568] text-lg max-w-3xl mx-auto leading-relaxed font-medium">
              Master industry-standard practices, tools, and workflows. We skip toy problems and jump straight into building real products with experienced mentors.
            </p>
          </div>

          {/* Learning Outcomes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.learningOutcomes.map((outcome, index) => (
              <div 
                key={outcome.id}
                className="group relative overflow-hidden bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-10 hover:shadow-2xl hover:shadow-[#3b6ef8]/15 transition-all duration-400 hover:-translate-y-3"
              >
                {/* Enhanced Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b6ef8]/0 via-transparent to-[#5b5ef8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                
                {/* Decorative Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b6ef8]/0 via-[#3b6ef8] to-[#3b6ef8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                {/* Number Badge & Topic Icon */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className={`text-6xl font-black bg-gradient-to-br from-[#3b6ef8] via-[#2452d4] to-[#5b5ef8] bg-clip-text text-transparent group-hover:from-[#2452d4] group-hover:via-[#3b6ef8] group-hover:to-[#2452d4] transition-all duration-400`}>
                    {outcome.id}
                  </div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3b6ef8]/15 to-[#5b5ef8]/10 group-hover:from-[#3b6ef8]/30 group-hover:to-[#5b5ef8]/20 transition-all duration-400 ring-1 ring-[#3b6ef8]/20 group-hover:ring-[#3b6ef8]/40 flex items-center justify-center text-2xl">
                    {outcome.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-primary font-bold text-2xl mb-4 group-hover:text-[#2452d4] transition-colors duration-300 relative z-10">
                  {outcome.title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed text-base group-hover:text-[#2d3748] transition-colors duration-300 relative z-10">
                  {outcome.desc}
                </p>

                {/* Bottom accent elements */}
                <div className="mt-8 flex items-center gap-2 relative z-10">
                  <div className="h-1 w-0 bg-gradient-to-r from-[#3b6ef8] to-[#5b5ef8] group-hover:w-12 transition-all duration-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3b6ef8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-[5%] bg-gradient-to-b from-background to-[#f0f4ff] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#3b6ef8]/10 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#5b5ef8]/10 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Enhanced background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f1a] via-[#1a1f3a] to-[#0d0f1a] rounded-3xl opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8]/20 via-[#2452d4]/10 to-[#3b6ef8]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b6ef8] via-[#5b5ef8] to-[#3b6ef8] rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>

            {/* Border */}
            <div className="absolute inset-0 border border-[#3b6ef8]/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10 p-16 md:p-20 text-center text-white">
              <div className="mb-8">
                <span className="inline-block text-xs font-bold text-[#3b6ef8] tracking-widest mb-4">LIMITED SPOTS</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-white group-hover:via-[#3b6ef8] group-hover:to-white transition-all duration-300">
                {program.ctaTitle}
              </h2>

              <p className="text-gray-300 mb-12 text-lg leading-relaxed max-w-2xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
                {program.ctaText}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply">
                  <button className="group/btn relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white text-[#0d0f1a] font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8] to-[#5b5ef8] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative">Start Your Application</span>
                  </button>
                </Link>
                <button className="group/btn relative border-2 border-white/40 text-white font-bold px-10 py-4 rounded-full hover:border-white/80 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
