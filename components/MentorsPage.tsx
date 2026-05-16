'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

const mentorsData = [
  {
    id: 1,
    slug: 'david-kim',
    name: 'David Kim',
    role: 'Lead Instructor',
    specialty: 'Frontend',
    company: 'ex-Netflix, Google',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    bio: 'David is a lead instructor with 12+ years of experience building large-scale web applications at Netflix and Google.',
    expertise: ['React', 'Node.js', 'System Design', 'Web Architecture'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 2,
    slug: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'AI & ML Mentor',
    specialty: 'AI/ML',
    company: 'OpenAI',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    bio: 'Elena leads machine learning initiatives at OpenAI and has published multiple papers on neural networks.',
    expertise: ['Machine Learning', 'Python', 'TensorFlow', 'LLMs'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 3,
    slug: 'marcus-johnson',
    name: 'Marcus Johnson',
    role: 'Full Stack Mentor',
    specialty: 'Backend',
    company: 'Stripe',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    bio: 'Marcus specializes in backend architecture and has designed payment systems serving millions of users at Stripe.',
    expertise: ['Backend Systems', 'PostgreSQL', 'DevOps', 'Microservices'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 4,
    slug: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Blockchain Mentor',
    specialty: 'Founders',
    company: 'Coinbase',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    bio: 'Priya is a blockchain architect at Coinbase with expertise in crypto protocols and smart contract security.',
    expertise: ['Blockchain', 'Solidity', 'Web3', 'DeFi'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 5,
    slug: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Frontend Engineer',
    specialty: 'Frontend',
    company: 'Vercel',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    bio: 'Sarah builds performant frontend systems at Vercel and is passionate about web performance optimization.',
    expertise: ['Next.js', 'TypeScript', 'Performance', 'CSS'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 6,
    slug: 'james-wilson',
    name: 'James Wilson',
    role: 'Backend Architecture',
    specialty: 'Backend',
    company: 'Amazon',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    bio: 'James leads backend infrastructure teams at Amazon with expertise in distributed systems.',
    expertise: ['AWS', 'Distributed Systems', 'Java', 'Kubernetes'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 7,
    slug: 'anita-desai',
    name: 'Anita Desai',
    role: 'Data Scientist',
    specialty: 'AI/ML',
    company: 'Meta',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anita',
    bio: 'Anita is a data scientist at Meta working on recommendation systems and data analytics at scale.',
    expertise: ['Data Science', 'Python', 'Analytics', 'Machine Learning'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 8,
    slug: 'carlos-mendez',
    name: 'Carlos Mendez',
    role: 'Startup Founder',
    specialty: 'Founders',
    company: 'Y Combinator Alum',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    bio: 'Carlos is a serial entrepreneur who founded multiple startups and now mentors early-stage founders.',
    expertise: ['Startups', 'Fundraising', 'Product Strategy', 'Growth'],
    social: { linkedin: '#', twitter: '#' }
  },
];

export function MentorsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const specialties = [
    { id: 'all', label: 'All Mentors' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'founders', label: 'Founders' },
  ];

  const filtered = activeFilter === 'all'
    ? mentorsData
    : mentorsData.filter(m => m.specialty.toLowerCase().replace(/\//g, '') === activeFilter.toLowerCase().replace(/\//g, ''));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#dce8ff] via-[#e8f0ff] to-[#f0f4ff] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#3b6ef8]/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#5b5ef8]/10 to-transparent rounded-full blur-3xl -z-10"></div>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-[5%] relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="inline-block text-xs font-bold text-[#3b6ef8] tracking-widest bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3b6ef8]/20">
              EXPERT MENTORSHIP
            </span>
          </div>
          <h1 className="text-balance text-primary font-black text-6xl md:text-7xl mb-8 leading-tight">
            Learn from Industry Leaders
          </h1>
          <p className="text-[#4a5568] text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Get mentored by senior engineers, technical leads, and founders from top tech companies. Learn real-world best practices and accelerate your career growth.
          </p>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section className="px-[5%] pb-16">
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {specialties.map(specialty => (
            <button
              key={specialty.id}
              onClick={() => setActiveFilter(specialty.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === specialty.id
                  ? 'bg-gradient-to-r from-[#3b6ef8] to-[#2452d4] text-white shadow-lg shadow-[#3b6ef8]/30 transform -translate-y-1'
                  : 'bg-white/60 backdrop-blur-sm border border-[#3b6ef8]/20 text-primary hover:border-[#3b6ef8]/50 hover:bg-white/80 transition-all duration-300'
              }`}
            >
              {specialty.label}
            </button>
          ))}
        </div>
      </section>

      {/* Enhanced Mentors Grid */}
      <section className="px-[5%] pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map(mentor => (
            <Link key={mentor.id} href={`/mentors/${mentor.slug}`}>
              <Card className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md border border-white/60 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-[#3b6ef8]/15 transition-all duration-400 hover:-translate-y-4 cursor-pointer h-full flex flex-col items-center overflow-hidden">
                {/* Enhanced background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b6ef8]/0 via-transparent to-[#5b5ef8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b6ef8]/0 via-[#3b6ef8] to-[#3b6ef8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                <div className="relative z-10">
                  {/* Avatar with enhanced styling */}
                  <div className="mb-6 relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3b6ef8]/20 to-[#5b5ef8]/20 flex items-center justify-center ring-2 ring-[#3b6ef8]/30 group-hover:ring-[#3b6ef8]/60 transition-all duration-300">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-20 h-20 rounded-full border-2 border-white"
                      />
                    </div>
                  </div>

                  {/* Name and title */}
                  <h3 className="font-black text-xl text-primary mb-2 group-hover:text-[#2452d4] transition-colors duration-300">
                    {mentor.name}
                  </h3>
                  <p className="text-sm font-bold text-[#3b6ef8] mb-1 group-hover:text-[#2452d4] transition-colors duration-300">
                    {mentor.role}
                  </p>
                  <p className="text-xs font-medium text-[#4a5568] mb-6 group-hover:text-primary transition-colors duration-300">
                    {mentor.company}
                  </p>

                  {/* Expertise preview */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6 h-8 overflow-hidden">
                    {mentor.expertise.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold text-[#3b6ef8] bg-[#3b6ef8]/10 px-2 py-1 rounded-lg group-hover:bg-[#3b6ef8]/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex gap-3 justify-center mt-auto pt-4 border-t border-[#3b6ef8]/10 group-hover:border-[#3b6ef8]/30 transition-colors duration-300">
                    <a href={mentor.social.linkedin} className="text-[#4a5568] hover:text-[#3b6ef8] transition-colors duration-300 hover:scale-110 transform">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <button className="text-[#4a5568] hover:text-[#3b6ef8] transition-colors duration-300 hover:scale-110 transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v10m-6 0l-4-4m0 0l4 4m-4-4h12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="px-[5%] pb-24">
        <div className="relative group">
          {/* Enhanced background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f1a] via-[#1a1f3a] to-[#0d0f1a] rounded-3xl opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8]/20 via-[#2452d4]/10 to-[#3b6ef8]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b6ef8] via-[#5b5ef8] to-[#3b6ef8] rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>

          {/* Border */}
          <div className="absolute inset-0 border border-[#3b6ef8]/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Content */}
          <div className="relative z-10 py-20 px-12 text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold text-[#3b6ef8] tracking-widest mb-6 bg-[#3b6ef8]/10 px-4 py-2 rounded-full">
              JOIN OUR COMMUNITY
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-white group-hover:via-[#3b6ef8] group-hover:to-white transition-all duration-300">
              Want to Mentor Next?
            </h2>
            <p className="text-gray-300 mb-12 text-lg leading-relaxed max-w-2xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
              We are always looking for passionate engineers and technical leaders who want to give back to the community and shape the next generation of developers.
            </p>
            <button className="group/btn relative inline-block overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white text-[#0d0f1a] font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8] to-[#5b5ef8] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
              <span className="relative">Apply to Mentor</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
