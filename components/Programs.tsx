'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Sun, Snowflake, Users, Zap, Link2, Github } from 'lucide-react';

export function Programs() {
  const [activeFilter, setActiveFilter] = useState('all');

  const programs = [
    {
      id: 1,
      slug: 'summer-internship',
      title: 'Summer Internship',
      desc: 'Intensive 8-week program building real products from scratch. Includes mentorship and job placement support.',
      category: 'internship',
      circleColor: 'bg-[#3b6ef8]',
      icon: Sun,
    },
    {
      id: 2,
      slug: 'winter-internship',
      title: 'Winter Internship',
      desc: 'Focused 4-week sprint mastering modern web technologies. Perfect for college winter breaks.',
      category: 'internship',
      circleColor: 'bg-[#06c5d3]',
      icon: Snowflake,
    },
    {
      id: 3,
      slug: 'apprenticeship',
      title: 'Apprenticeship',
      desc: 'Long-term 6-month placement with our startup partners. Get paid while learning on the job.',
      category: 'apprenticeship',
      circleColor: 'bg-[#0d0f1a]',
      icon: Users,
    },
    {
      id: 4,
      slug: 'ai-bootcamp',
      title: 'AI & Full Stack Bootcamp',
      desc: 'Deep dive into LLMs, RAG, and AI application development. Build 3 production-ready AI apps.',
      category: 'bootcamp',
      circleColor: 'bg-[#3b6ef8]',
      icon: Zap,
    },
    {
      id: 5,
      slug: 'blockchain-training',
      title: 'Blockchain Training',
      desc: 'Master smart contracts, Web3, and decentralized applications. Build your own token and exchange.',
      category: 'bootcamp',
      circleColor: 'bg-[#06c5d3]',
      icon: Link2,
    },
    {
      id: 6,
      slug: 'full-stack-bootcamp',
      title: 'Full Stack Bootcamp',
      desc: 'Complete web development from frontend to backend. Build and deploy full-stack applications.',
      category: 'bootcamp',
      circleColor: 'bg-[#3b6ef8]',
      icon: Zap,
    },
    {
      id: 7,
      slug: 'open-source-track',
      title: 'Open Source Track',
      desc: 'Learn how to contribute to massive open source projects. Build your public GitHub portfolio.',
      category: 'apprenticeship',
      circleColor: 'bg-[#0d0f1a]',
      icon: Github,
    },
  ];

  const filters = [
    { id: 'all', label: 'All Programs' },
    { id: 'internship', label: 'Internships' },
    { id: 'bootcamp', label: 'Bootcamps' },
    { id: 'apprenticeship', label: 'Apprenticeships' },
  ];

  const filtered = activeFilter === 'all' ? programs : programs.filter(p => p.category === activeFilter);

  return (
    <section id="programs" className="py-20 px-[5%] bg-background">
      <div className="text-center mb-12">
        <h2 className="text-balance text-primary font-black text-4xl md:text-5xl mb-3">
          Discover Our
        </h2>
        <p className="text-muted text-sm md:text-base max-w-2xl mx-auto mb-8">
          From short-term bootcamps to immersive 6-month apprenticeships.
          <br />
          Find the perfect path to launch your tech career.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border border-border hover:border-primary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {filtered.map(program => {
          const IconComponent = program.icon;
          return (
            <Link key={program.id} href={`/programs/${program.slug}`}>
              <Card className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200 cursor-pointer h-full">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${program.circleColor}`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">{program.title}</h3>
                <p className="text-sm text-muted mb-5 leading-relaxed">{program.desc}</p>
                <span className="text-primary font-semibold text-sm hover:text-accent transition-colors">
                  Learn more →
                </span>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
