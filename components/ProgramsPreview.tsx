import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ProgramsPreview() {
  const programs = [
    {
      image: "/images/summar-intership.png",
      title: "Summer Internship",
      slug: "programs/summer-internship",
      desc: "Intensive 8-week program building real products from scratch with mentorship and placement guidance.",
      badge: "8 Weeks",
    },
 {
  image: "/images/full-stack-summer.png",
  title: "Full Stack Summer Internship",
  slug: "programs/full-stack-summer-internship",
  desc: "Master HTML, CSS, JavaScript, React, MERN stack, backend APIs, authentication, deployment, and build production-level applications with job-oriented learning and mentorship.",
  badge: "2 Months",
},
    {
      image: "/images/winter-intership.png",
      title: "Winter Internship",
      slug: "programs/winter-internship",
      desc: "A focused 4-week intensive sprint designed to transform your development skills during the holiday break.",
      badge: "4 Weeks",
    },
    {
      image: "/images/apprenticeship-program.png",
      title: "Apprenticeship Program",
      slug: "programs/apprenticeship-program",
      desc: "Work with early-stage startups, contribute to real products, and gain practical engineering experience.",
      badge: "6 Months",
    },
    {
      image: "/images/Ai-ml-traning.png",
      title: "AI & Full Stack Bootcamp",
      slug: "programs/ai-bootcamp",
      desc: "Build AI-powered full-stack applications using LLMs, RAG systems, and modern web technologies.",
      badge: "12 Weeks",
    },
    {
      image: "/images/blocckhain-traning.png",
      title: "Blockchain Training",
      slug: "programs/blockchain-training",
      desc: "Master Solidity, smart contracts, Web3 development, and build decentralized applications.",
      badge: "Web3",
    },
    {
      image: "/images/vops-traning.png",
      title: "DevOps & Cloud Engineering",
      slug: "programs/devops-training",
      desc: "Learn CI/CD, Docker, Kubernetes, AWS, monitoring, and scalable cloud infrastructure deployment.",
      badge: "Cloud & DevOps",
    },
  ];

  return (
    <section className="py-24 px-[5%] bg-gradient-to-b from-[#edf4ff] to-[#f8fbff] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#dbeafe] opacity-30 blur-3xl rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative text-center mb-16">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#dbeafe] text-[#2563eb] text-xs font-semibold mb-5 shadow-sm">
          Internship & Training Programs
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] -tracking-wide mb-4">
          Discover Our Programs
        </h2>

        <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Practical internship and bootcamp programs designed to help students
          gain real-world experience and launch successful tech careers.
        </p>
      </div>

      {/* Program Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {programs.map((program, idx) => {
          return (
            <Link
              key={idx}
              href={`/${program.slug}`}
              className="
                group
                bg-white/90
                backdrop-blur-sm
                border border-[#dbeafe]
                rounded-[28px]
                overflow-hidden
                hover:-translate-y-1.5
                hover:border-[#bfdbfe]
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)]
                transition-all
                duration-500
                block
              "
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-[#edf4ff] via-[#eff6ff] to-[#dbeafe] overflow-hidden">
                
                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.10),transparent_70%)]" />

                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="
                    object-contain
                    p-6
                    group-hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#dbeafe] text-[#2563eb] text-xs font-semibold shadow-sm">
                  {program.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-[#2563eb] transition-colors">
                  {program.title}
                </h3>

                <p className="text-[#64748b] text-sm leading-relaxed mb-7">
                  {program.desc}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#2563eb] text-sm font-semibold">
                  Learn More

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="relative flex justify-center mt-14">
        <Link
          href="/programs"
          className="
            inline-flex
            items-center
            gap-2
            bg-[#0f172a]
            text-white
            px-7
            py-3.5
            rounded-2xl
            font-semibold
            hover:-translate-y-0.5
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          View All Programs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}