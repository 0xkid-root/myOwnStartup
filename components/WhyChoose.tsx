import { Check, GitPullRequest, FolderKanban, Users, Rocket } from 'lucide-react';

export function WhyChoose() {
  const features = [
    {
      title: 'Real Projects',
      desc: 'Build products used in real-world scenarios.',
    },
    {
      title: 'Industry Mentorship',
      desc: 'Learn directly from working engineers.',
    },
    {
      title: 'Real Startup Workflow',
      desc: 'Experience how modern tech teams actually work.',
    },
    {
      title: 'Industry Certificate',
      desc: 'Receive verified proof of your skills and work.',
    },
    {
      title: 'GitHub Portfolio',
      desc: 'Create projects recruiters can actually review.',
    },
    {
      title: 'Placement Guidance',
      desc: 'Get career support, resume reviews, and guidance.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-[5%] bg-gradient-to-b from-[#f0f4ff] to-[#eaf2ff]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf4ff] border border-[#dbeafe] text-[#2563eb] text-xs font-semibold mb-5">
            Why Students Choose Us
          </div>

          <h2 className="text-[#0f172a] font-black text-4xl md:text-5xl leading-tight -tracking-wide mb-5">
            Learn by Building Real Products
          </h2>

          <p className="text-[#64748b] text-base md:text-lg max-w-lg mb-10 leading-relaxed">
            We focus on practical learning, real-world experience, and industry
            workflows so students can confidently move from learning to earning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="
                  bg-white
                  border border-[#e2e8f0]
                  rounded-2xl
                  p-5
                  hover:-translate-y-1
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#edf4ff] flex items-center justify-center flex-shrink-0">
                    <Check
                      className="h-4 w-4 text-[#2563eb]"
                      strokeWidth={3}
                    />
                  </div>

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
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] blur-3xl opacity-70 rounded-full" />

          <div
            className="
              relative
              bg-white
              border border-[#dbeafe]
              rounded-3xl
              shadow-xl
              p-7
              max-w-md
              mx-auto
            "
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-6">
              <div>
                {/* <p className="text-xs font-semibold text-[#64748b]">
                  Internship Dashboard
                </p> */}

                <h3 className="text-xl font-bold text-[#0f172a] mt-1">
                  Full Stack Internship
                </h3>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#edf4ff] flex items-center justify-center">
                <Rocket className="h-5 w-5 text-[#2563eb]" />
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-4">
              <div className="border border-[#e2e8f0] rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <FolderKanban className="h-5 w-5 text-[#2563eb]" />

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

              <div className="border border-[#e2e8f0] rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <GitPullRequest className="h-5 w-5 text-[#2563eb]" />

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

              <div className="border border-[#e2e8f0] rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#2563eb]" />

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
            <div className="mt-6 pt-5 border-t border-[#e2e8f0] flex items-center justify-between">
              <div>
                <p className="text-xs text-[#64748b]">Program Progress</p>

                <p className="text-sm font-bold text-[#0f172a] mt-1">
                  Internship Active
                </p>
              </div>

              <div className="px-3 py-1 rounded-full bg-[#dcfce7] text-[#15803d] text-xs font-semibold">
                Live
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}