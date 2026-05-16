import { Card } from '@/components/ui/card';

export function Testimonials() {
  const testimonials = [
    {
      avatar: 'S',
      name: 'Sarah Chen',
      role: 'Frontend Engineer at Stripe',
      quote: 'The summer internship gave me the exact react and typescript skills I needed to pass my interviews.',
      bgColor: 'bg-yellow-200',
    },
    {
      avatar: 'M',
      name: 'Michael Rodriguez',
      role: 'Full Stack Developer',
      quote: 'Building a real SaaS product from scratch taught me more than my entire 4-year degree.',
      bgColor: 'bg-blue-200',
    },
    {
      avatar: 'A',
      name: 'Aisha Patel',
      role: 'AI Researcher',
      quote: 'The AI bootcamp was intense but the mentors actually work in the industry.',
      bgColor: 'bg-green-200',
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-background">
      <div className="text-center mb-12">
        <h2 className="text-balance text-foreground font-black text-4xl md:text-5xl mb-2.5 -tracking-wide">
          Student Success Stories
        </h2>
        <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
          Hear from our alumni who are now working at top tech companies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((testi, idx) => (
          <Card key={idx} className="bg-card border border-border rounded-2xl p-6">
            <div className="text-amber-500 font-bold text-sm mb-3.5">★★★★★</div>
            <blockquote className="text-sm text-foreground leading-relaxed mb-5">{testi.quote}</blockquote>
            <div className="flex items-center gap-3">
              <div
                className={`w-9.5 h-9.5 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${testi.bgColor}`}
              >
                {testi.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{testi.name}</div>
                <div className="text-xs text-muted">{testi.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
