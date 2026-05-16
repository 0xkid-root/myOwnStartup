export function Stats() {
  const stats = [
    { num: '1K+', label: 'Students' },
    { num: '50+', label: 'Projects' },
    { num: '20+', label: 'Mentors' },
    { num: '10+', label: 'Tech Stacks' },
  ];

  return (
    <div className="px-[5%] bg-gradient-to-b from-[#dce8ff] to-[#f0f4ff] pb-px">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden shadow-sm">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-card p-7 text-center">
            <div className="text-3xl font-black text-foreground leading-none">{stat.num}</div>
            <div className="text-xs text-muted mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
