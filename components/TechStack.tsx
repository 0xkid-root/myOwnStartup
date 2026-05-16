export function TechStack() {
  const techs = ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Blockchain', 'AI', 'Python'];

  return (
    <div className="bg-gradient-to-b from-[#f0f4ff] to-[#e8eeff] py-16 px-[5%]">
      <p className="text-center text-muted text-sm font-semibold mb-6">Master Modern Technologies</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {techs.map((tech, idx) => (
          <span
            key={idx}
            className="bg-card border-1.5 border-border rounded-full px-5 py-2 text-sm font-semibold text-foreground hover:border-accent hover:bg-blue-50 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
