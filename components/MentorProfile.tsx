'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';

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

interface MentorProfileProps {
  slug: string;
}

export function MentorProfile({ slug }: MentorProfileProps) {
  const mentor = mentorsData.find(m => m.slug === slug);

  if (!mentor) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#dce8ff] to-[#f0f4ff] flex items-center justify-center">
        <p className="text-primary text-lg">Mentor not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#dce8ff] via-[#e8f0ff] to-[#f0f4ff] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#3b6ef8]/10 to-transparent rounded-full blur-3xl -z-10"></div>

      {/* Back Button */}
      <section className="pt-12 px-[5%]">
        <Link href="/mentors" className="text-[#3b6ef8] font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
          <span>←</span> Back to Mentors
        </Link>
      </section>

      {/* Enhanced Hero Section */}
      <section className="pt-16 pb-20 px-[5%]">
        <div className="max-w-4xl">
          {/* Mentor Avatar */}
          <div className="mb-10">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-[#3b6ef8]/20 to-[#5b5ef8]/20 flex items-center justify-center ring-2 ring-[#3b6ef8]/30">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-36 h-36 rounded-xl border-2 border-white"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-6xl md:text-7xl font-black text-primary mb-3 leading-tight">
              {mentor.name}
            </h1>
            <p className="text-[#3b6ef8] font-bold text-2xl mb-2">{mentor.role}</p>
            <p className="text-[#4a5568] font-semibold text-lg mb-8">{mentor.company}</p>
            
            <p className="text-[#4a5568] text-lg leading-relaxed max-w-3xl mb-10">
              {mentor.bio}
            </p>

            {/* CTA Button */}
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#3b6ef8] to-[#2452d4] text-white font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-[#3b6ef8]/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Schedule a Mentoring Session</span>
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-[5%] pb-24">
        <div className="max-w-4xl">
          <div className="inline-block mb-8">
            <span className="inline-block text-xs font-bold text-[#3b6ef8] tracking-widest bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3b6ef8]/20">
              AREAS OF EXPERTISE
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            {mentor.expertise.map((skill, index) => (
              <span
                key={index}
                className="group relative inline-block bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-md text-[#3b6ef8] px-6 py-3 rounded-xl text-sm font-bold border border-[#3b6ef8]/20 hover:border-[#3b6ef8]/50 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8]/0 to-[#3b6ef8]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Mentors */}
      <section className="px-[5%] pb-24">
        <h2 className="text-4xl md:text-5xl font-black text-primary mb-12">Meet Other Mentors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentorsData.filter(m => m.slug !== slug).slice(0, 4).map(otherMentor => (
            <Link key={otherMentor.id} href={`/mentors/${otherMentor.slug}`}>
              <Card className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md border border-white/60 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-[#3b6ef8]/15 transition-all duration-400 hover:-translate-y-4 cursor-pointer h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b6ef8]/0 via-[#3b6ef8] to-[#3b6ef8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3b6ef8]/20 to-[#5b5ef8]/20 flex items-center justify-center ring-2 ring-[#3b6ef8]/30 group-hover:ring-[#3b6ef8]/60 transition-all duration-300 mx-auto">
                      <img
                        src={otherMentor.image}
                        alt={otherMentor.name}
                        className="w-16 h-16 rounded-full border-2 border-white"
                      />
                    </div>
                  </div>
                  <h3 className="font-black text-lg text-primary mb-1 group-hover:text-[#2452d4] transition-colors">{otherMentor.name}</h3>
                  <p className="text-sm font-bold text-[#3b6ef8] mb-1 group-hover:text-[#2452d4] transition-colors">{otherMentor.role}</p>
                  <p className="text-xs font-medium text-[#4a5568]">{otherMentor.company}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[5%] pb-24">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f1a] via-[#1a1f3a] to-[#0d0f1a] rounded-3xl opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8]/20 via-[#2452d4]/10 to-[#3b6ef8]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b6ef8] via-[#5b5ef8] to-[#3b6ef8] rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
          <div className="absolute inset-0 border border-[#3b6ef8]/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10 py-20 px-12 text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold text-[#3b6ef8] tracking-widest mb-6 bg-[#3b6ef8]/10 px-4 py-2 rounded-full">
              JOIN OUR COMMUNITY
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-white group-hover:via-[#3b6ef8] group-hover:to-white transition-all duration-300">
              Ready to Mentor?
            </h2>
            <p className="text-gray-300 mb-12 text-lg leading-relaxed max-w-2xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
              Join our network of experienced mentors and help shape the next generation of software engineers.
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
