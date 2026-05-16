export function LearnFromBest() {
  const mentors = [
    {
      name: 'David Kim',
      role: 'Lead Instructor',
      company: 'ex-Google',
      image: '👨‍💼'
    },
    {
      name: 'Elena Rostova',
      role: 'AI & ML Mentor',
      company: 'OpenAI',
      image: '👩‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'Full Stack Mentor',
      company: 'Stripe',
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Blockchain Mentor',
      company: 'Coinbase',
      image: '👩‍💼'
    }
  ];

  return (
    <section className="py-20 px-[5%] bg-background">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Learn from the Best
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Our mentors are senior engineers from top tech companies who are passionate about teaching.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {mentors.map((mentor, index) => (
          <div key={index} className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#06c5d3] to-[#0099b8] flex items-center justify-center mx-auto mb-4 text-4xl">
              {mentor.image}
            </div>
            <h3 className="text-lg font-bold text-primary mb-1">{mentor.name}</h3>
            <p className="text-sm text-accent font-medium mb-1">{mentor.role}</p>
            <p className="text-xs text-muted">{mentor.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
