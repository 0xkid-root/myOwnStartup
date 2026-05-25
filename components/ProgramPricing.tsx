// components/ProgramPricing.tsx

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProgramPricing() {
  return (
    <section className="py-20 px-[5%] bg-gradient-to-b from-[#f8fbff] to-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#3b6ef8]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5b5ef8]/10 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-[#dbeafe]
            bg-white
            p-8
            md:p-12
            transition-all
            duration-500
            hover:shadow-[0_30px_80px_rgba(59,110,248,0.15)]
            hover:-translate-y-1
            group
          "
        >

          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8]/5 via-transparent to-[#5b5ef8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Soft Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#2563eb]/5 blur-3xl rounded-full" />

          <div className="relative z-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#bfdbfe] text-[#3b6ef8] text-sm font-semibold mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Limited Seats Available
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4 leading-tight">
              Full Stack Summer Internship
            </h2>

            <p className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Learn MERN stack, Next.js, backend APIs, authentication,
              deployment, GitHub workflow, and build production-level
              real-world projects with mentorship and career guidance.
            </p>

            {/* Price */}
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-10">

              <div className="flex items-end gap-3">

                <span
                  className="
                    text-5xl
                    md:text-6xl
                    font-black
                    bg-gradient-to-r
                    from-[#3b6ef8]
                    to-[#5b5ef8]
                    bg-clip-text
                    text-transparent
                  "
                >
                  ₹2,999
                </span>

                <span className="text-[#64748b] mb-2 text-sm font-medium">
                  one-time fee
                </span>
              </div>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#eff6ff] text-[#3b6ef8] text-sm font-semibold border border-[#bfdbfe] w-fit">
                Job Oriented Learning
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">

              {[
                "Live Classes",
                "Real Projects",
                "Certificate",
                "GitHub Guidance",
                "Interview Prep",
                "Mentorship",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#334155]
                    text-sm
                    font-medium
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-[#3b6ef8]" />
                  {item}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Primary Button */}
              <Link
                href="/apply"
                className="
                  group/btn
                  relative
                  overflow-hidden
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-gradient-to-r
                  from-[#3b6ef8]
                  via-[#2563eb]
                  to-[#5b5ef8]
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(59,110,248,0.35)]
                "
              >
                {/* Hover Layer */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                <span className="relative">
                  Apply Now
                </span>

                <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>

              {/* Secondary Button */}
              {/* <button
                className="
                  group/btn
                  relative
                  overflow-hidden
                  px-8
                  py-4
                  rounded-2xl
                  border
                  border-[#dbeafe]
                  bg-[#f8fbff]
                  text-[#0f172a]
                  font-bold
                  transition-all
                  duration-300
                  hover:border-[#3b6ef8]/30
                  hover:bg-[#eff6ff]
                  hover:-translate-y-1
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8]/5 to-[#5b5ef8]/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                <span className="relative">
                  Download Syllabus
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}