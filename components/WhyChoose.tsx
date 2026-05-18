import {
  Code2,
  Users,
  Rocket,
  Award,
  Github,
  Briefcase,
  GitPullRequest,
  FolderKanban,
} from "lucide-react";

export function WhyChoose() {
  const features = [
    {
      title: "Real Projects",
      desc: "Build products used in real-world startup scenarios.",
      icon: Code2,
    },
    {
      title: "Industry Mentorship",
      desc: "Learn directly from experienced software engineers.",
      icon: Users,
    },
    {
      title: "Startup Workflow",
      desc: "Experience agile teamwork, reviews, and deployments.",
      icon: Rocket,
    },
    {
      title: "Industry Certificate",
      desc: "Receive verified proof of your practical skills.",
      icon: Award,
    },
    {
      title: "GitHub Portfolio",
      desc: "Create projects recruiters can actually review.",
      icon: Github,
    },
    {
      title: "Placement Guidance",
      desc: "Get resume reviews, mock interviews, and career support.",
      icon: Briefcase,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-[5%] bg-gradient-to-b from-[#f8fbff] via-[#eef5ff] to-[#edf4ff] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dbeafe] opacity-30 blur-3xl rounded-full pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#dbeafe] text-[#2563eb] text-xs font-semibold mb-5 shadow-sm">
            Why Students Choose Us
          </div>

          <h2 className="text-[#0f172a] font-black text-4xl md:text-5xl leading-tight -tracking-wide mb-5">
            Build Real Products with Industry Engineers
          </h2>

          <p className="text-[#64748b] text-base md:text-lg max-w-lg mb-10 leading-relaxed">
            We focus on practical learning, real-world projects, and startup
            workflows so students can confidently move from learning to earning.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <div
                  key={idx}
                  className="
                    bg-white/90
                    backdrop-blur-sm
                    border border-[#e2e8f0]
                    rounded-2xl
                    p-5
                    hover:-translate-y-1
                    hover:border-[#bfdbfe]
                    hover:shadow-[0_10px_40px_rgba(37,99,235,0.08)]
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-start gap-3">
                    
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#edf4ff] to-[#dbeafe] flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="h-5 w-5 text-[#2563eb]"
                        strokeWidth={2.3}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-sm font-bold text-[#0f172a] mb-1">
                        {feature.title}
                      </h4>

                      <p className="text-sm text-[#64748b] leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] blur-3xl opacity-70 rounded-full" />

          {/* Main Card */}
          <div
            className="
              relative
              bg-white/90
              backdrop-blur-sm
              border border-[#dbeafe]
              rounded-3xl
              shadow-[0_20px_60px_rgba(37,99,235,0.10)]
              p-7
              max-w-md
              mx-auto
              overflow-hidden
            "
          >
            {/* Small Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#dbeafe] opacity-30 blur-3xl rounded-full" />

            {/* Top */}
            <div className="relative flex items-center justify-between mb-7">
              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mt-1">
                  Full Stack Internship
                </h3>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#edf4ff] to-[#dbeafe] flex items-center justify-center shadow-sm">
                <Rocket className="h-6 w-6 text-[#2563eb]" />
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-4 relative">
              
              {/* Project */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 hover:border-[#bfdbfe] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#edf4ff] flex items-center justify-center">
                    <FolderKanban className="h-5 w-5 text-[#2563eb]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">
                      Project Assigned
                    </p>

                    <p className="text-xs text-[#64748b]">
                      Build a real-world startup dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Review */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 hover:border-[#bfdbfe] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#edf4ff] flex items-center justify-center">
                    <GitPullRequest className="h-5 w-5 text-[#2563eb]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">
                      Mentor Review
                    </p>

                    <p className="text-xs text-[#64748b]">
                      Code reviewed by industry engineers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Collaboration */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 hover:border-[#bfdbfe] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#edf4ff] flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#2563eb]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">
                      Team Collaboration
                    </p>

                    <p className="text-xs text-[#64748b]">
                      Work with students in agile project teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-7 pt-6 border-t border-[#e2e8f0] relative">
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-[#64748b]">
                    Program Status
                  </p>

                  <p className="text-sm font-bold text-[#0f172a] mt-1">
                    Internship Active
                  </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-[#dcfce7] text-[#15803d] text-xs font-semibold">
                  Live
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#64748b]">
                    Progress
                  </span>

                  <span className="text-xs font-semibold text-[#2563eb]">
                    78%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-[#e2e8f0] overflow-hidden">
                  <div className="h-full w-[78%] bg-gradient-to-r from-[#2563eb] to-[#06b6d4] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}