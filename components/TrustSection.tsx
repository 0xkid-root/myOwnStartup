// components/TrustSection.tsx

import {
  ShieldCheck,
  BadgeCheck,
  Building2,
  Award,
  CheckCircle2,
} from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-28 px-[5%] bg-gradient-to-b from-[#f8fbff] to-white relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3b6ef8]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5b5ef8]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#3b6ef8] to-[#5b5ef8]"></span>

            <span className="text-sm font-bold tracking-[0.3em] text-[#3b6ef8]">
              TRUST & RECOGNITION
            </span>

            <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#5b5ef8] to-[#3b6ef8]"></span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-primary mb-6">
            Trusted Learning Platform
          </h2>

          <p className="text-[#4a5568] text-lg leading-relaxed max-w-3xl mx-auto">
            We focus on real-world learning, industry mentorship,
            and startup-level project experience to help students
            become job-ready developers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Startup India */}
          <div className="group rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3b6ef8]/10 transition-all duration-500">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b6ef8]/15 to-[#5b5ef8]/10 flex items-center justify-center mb-6">
              <BadgeCheck className="w-8 h-8 text-[#3b6ef8]" />
            </div>

            <h3 className="text-2xl font-black text-primary mb-4">
              Startup India
            </h3>

            <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
              Recognized under the Startup India initiative,
              supporting innovation and technology education.
            </p>

            <div className="flex items-center gap-2 text-[#3b6ef8] text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              Government Recognized
            </div>
          </div>

          {/* UP Startup */}
          <div className="group rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3b6ef8]/10 transition-all duration-500">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b6ef8]/15 to-[#5b5ef8]/10 flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-[#3b6ef8]" />
            </div>

            <h3 className="text-2xl font-black text-primary mb-4">
              UP Startup
            </h3>

            <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
              Registered under the UP Startup ecosystem focused
              on empowering future tech founders and developers.
            </p>

            <div className="flex items-center gap-2 text-[#3b6ef8] text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              State Startup Ecosystem
            </div>
          </div>

          {/* Real Projects */}
          <div className="group rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3b6ef8]/10 transition-all duration-500">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b6ef8]/15 to-[#5b5ef8]/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-[#3b6ef8]" />
            </div>

            <h3 className="text-2xl font-black text-primary mb-4">
              Real Projects
            </h3>

            <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
              Students build production-level projects with APIs,
              authentication, databases, and deployment workflows.
            </p>

            <div className="flex items-center gap-2 text-[#3b6ef8] text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              Industry Based Training
            </div>
          </div>

          {/* Certification */}
          <div className="group rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3b6ef8]/10 transition-all duration-500">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b6ef8]/15 to-[#5b5ef8]/10 flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-[#3b6ef8]" />
            </div>

            <h3 className="text-2xl font-black text-primary mb-4">
              Certification
            </h3>

            <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
              Receive internship and project completion certificates
              after successful program completion.
            </p>

            <div className="flex items-center gap-2 text-[#3b6ef8] text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              Verified Completion
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}