import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Projects() {
  const projects = [
    {
      icon: '🔗',
      tag: 'BLOCKCHAIN',
      title: 'DeFi Exchange',
      desc: 'A complete full-stack solution built during the summer internship program with real users.',
      tagColor: 'text-purple-400',
    },
    {
      icon: '🤖',
      tag: 'ARTIFICIAL INTELLIGENCE',
      title: 'AI Content Generator',
      desc: 'A complete full-stack solution built during the summer internship program with real users.',
      tagColor: 'text-cyan-400',
    },
    {
      icon: '🛒',
      tag: 'FULL STACK',
      title: 'E-Commerce Dashboard',
      desc: 'A complete full-stack solution built during the summer internship program with real users.',
      tagColor: 'text-green-400',
    },
  ];

  return (
    <section id="projects" className="py-20 px-[5%] bg-primary text-white">
      <div className="mb-9 flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-balance text-white font-black text-3xl md:text-4xl mb-1.5 -tracking-wide">
            Student Projects
          </h2>
          <p className="text-sm text-muted max-w-lg">
            Check out some of the amazing products our students have built during their internships.
          </p>
        </div>
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
  "
        >
          View All Projects
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="bg-[#1a1d2e] border border-[#2d3148] rounded-2xl overflow-hidden hover:border-accent transition-colors"
          >
            <div className="h-44 bg-[#252840] flex items-center justify-center text-5xl">{project.icon}</div>
            <div className="p-5">
              <div className={`text-xs font-black tracking-wide mb-2 ${project.tagColor}`}>{project.tag}</div>
              <h3 className="text-white text-sm font-bold mb-1.5">{project.title}</h3>
              <p className="text-muted text-xs mb-4">{project.desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 border border-[#3d4168] rounded-lg px-3.5 py-1.75 text-white text-xs font-semibold hover:border-accent transition-colors"
              >
                View Case Study <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
