import {
  Rocket,
  Code2,
  Target,
  Briefcase,
} from "lucide-react";

export function WhyPieCodingSchools() {
  const features = [
    {
      title: "Industry-Focused Learning",
      description:
        "We teach the exact skills companies expect from modern developers.",
      icon: Rocket,
    },
    {
      title: "Build Real Projects",
      description:
        "Students work on real-world projects instead of only theory and notes.",
      icon: Code2,
    },
    {
      title: "Step-by-Step Mentorship",
      description:
        "From programming basics to advanced development with personal guidance.",
      icon: Target,
    },
    {
      title: "Career & Placement Support",
      description:
        "Resume building, GitHub guidance, interview prep, and career roadmap.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-[#dbeafe] text-[#2563eb] text-sm font-semibold border border-[#bfdbfe]">
            WHY PIE CODING SCHOOLS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-6 leading-tight">
            We Don&apos;t Just Teach Code,
            <span className="text-[#2563eb]"> We Build Careers</span>
          </h2>

          <p className="text-[#64748b] text-lg mt-5 leading-relaxed">
            PIE Coding Schools focuses on practical learning, real projects,
            mentorship, and industry-level skills that help students become
            confident developers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#f8fbff] border border-[#dbeafe] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#64748b] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}