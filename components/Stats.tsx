export function Stats() {
  const stats = [
    { num: '100+', label: 'Students Joined' },
    { num: '10+', label: 'Real Projects Built' },
    { num: '10+', label: 'Industry Mentors' },
    { num: '15+', label: 'Technologies Covered' },
  ];

  return (
    <section className="px-[5%] bg-gradient-to-b from-[#dce8ff] to-[#f0f4ff] pb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[#dbe4ff] rounded-2xl overflow-hidden shadow-sm bg-[#dbe4ff]">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="
              bg-white
              p-8
              text-center
              hover:bg-[#f8fbff]
              transition-all
              duration-300
            "
          >
            <div className="text-3xl md:text-4xl font-black text-[#0f172a] leading-none">
              {stat.num}
            </div>

            <div className="text-sm text-[#64748b] font-medium mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}