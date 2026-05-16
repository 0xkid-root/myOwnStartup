export function CoreValues() {
  const values = [
    {
      icon: '🔨',
      title: 'Build, Don\'t Just Learn',
      description: 'Theory is important, but we prioritize hands-on keyboards, building real features over watching endless tutorials.'
    },
    {
      icon: '👥',
      title: 'Community First',
      description: 'Software engineering is a team sport. We foster a collaborative environment where peers review each other\'s code and grow together.'
    },
    {
      icon: '⚙️',
      title: 'Industry Standards',
      description: 'We teach you the tools and practices used in real tech companies. Next.js, Node, Python, and AWS are modern stacks like Next.js, Node, Python, and AWS.'
    }
  ];

  return (
    <section className="py-20 px-[5%] bg-background">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Core Values
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          The principles that guide our curriculum, our community, and everything we build.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-card border border-border rounded-2xl p-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#dce8ff] to-[#c5d9ff] flex items-center justify-center mb-4">
              <span className="text-lg">{value.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
