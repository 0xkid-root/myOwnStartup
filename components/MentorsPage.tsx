"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
import Avatar from "boring-avatars";

const mentorsData = [
  {
    id: 1,
    slug: "sushil-patel",
    name: "Sushil Patel",
    role: "Blockchain Developer | Backend Engineer",
    specialty: "blockchain",
    company: "Livegage Inc",
    bio: "Blockchain developer focused on smart contracts and scalable backend systems.",
    expertise: ["Blockchain", "Smart Contracts", "Node.js"],
    social: {
      linkedin: "https://www.linkedin.com/in/xaini/",
      github: "https://github.com/xaini",
    },
  },

  {
    id: 2,
    slug: "shubham-gupta",
    name: "Shubham Gupta",
    role: "AI & ML Mentor",
    specialty: "ai-ml",
    company: "Dojima Foundation",
    bio: "Helping students build modern AI applications using LLMs and ML systems.",
    expertise: ["Machine Learning", "Python", "LLMs"],
    social: {
      linkedin: "https://www.linkedin.com/in/0xshubham/",
    },
  },

  {
    id: 3,
    slug: "govind-prasad",
    name: "Govind Prasad",
    role: "Backend Developer",
    specialty: "backend",
    company: "Ex-HPCL",
    bio: "Backend engineer specializing in APIs, databases, and cloud infrastructure.",
    expertise: ["Node.js", "Java", "MySQL"],
    social: {
      linkedin: "https://www.linkedin.com/in/iamgovindp/",
    },
  },

  {
    id: 4,
    slug: "rishav-singh",
    name: "Rishav Singh",
    role: "Marketing Mentor",
    specialty: "marketing",
    company: "GrowX",
    bio: "Growth strategist helping startups scale products and communities.",
    expertise: ["Marketing", "Growth", "Branding"],
    social: {
      linkedin: "#",
    },
  },

  {
    id: 5,
    slug: "abhinav-ladole",
    name: "Abhinav Ladole",
    role: "Product Manager",
    specialty: "product",
    company: "Ex-Airpay",
    bio: "Product manager with expertise in fintech and startup product strategy.",
    expertise: ["Product", "Strategy", "Management"],
    social: {
      linkedin: "https://www.linkedin.com/in/ladoleabhinav/",
    },
  },

  {
    id: 6,
    slug: "gaurav-kumar",
    name: "Gaurav Kumar",
    role: "Full Stack Developer",
    specialty: "backend",
    company: "Ryzer, AtMoon Ventures",
    bio: "Full stack engineer building scalable web and blockchain applications.",
    expertise: ["Next.js", "React", "Node.js"],
    social: {
      linkedin: "https://www.linkedin.com/in/0xkid-root/",
    },
  },
];

export function MentorsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const specialties = [
    { id: "all", label: "All Mentors" },
    { id: "backend", label: "Backend" },
    { id: "ai-ml", label: "AI / ML" },
    { id: "blockchain", label: "Blockchain" },
    { id: "marketing", label: "Marketing" },
    { id: "product", label: "Product" },
  ];

  const filtered =
    activeFilter === "all"
      ? mentorsData
      : mentorsData.filter(
          (mentor) => mentor.specialty === activeFilter
        );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#dce8ff] via-[#e8f0ff] to-[#f0f4ff] relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b6ef8]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5b5ef8]/10 rounded-full blur-3xl -z-10" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-[5%] relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#dbeafe] text-[#2563eb] text-xs font-bold mb-6 shadow-sm">
            EXPERT MENTORSHIP
          </div>

          {/* Heading */}
          <h1 className="text-balance font-black text-5xl md:text-7xl leading-tight text-[#0f172a] mb-8">

            Learn from{" "}

            <motion.span
              animate={{
                opacity: [0.4, 1, 1, 0.4],
                y: [10, 0, 0, -5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="inline-block bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent"
            >
              Industry
            </motion.span>

            {" "}

            <motion.span
              animate={{
                opacity: [0.4, 1, 1, 0.4],
                y: [10, 0, 0, -5],
              }}
              transition={{
                duration: 5,
                delay: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="inline-block bg-gradient-to-r from-[#1d4ed8] to-[#4338ca] bg-clip-text text-transparent"
            >
              Leaders
            </motion.span>

          </h1>

          {/* Description */}
          <p className="text-[#4a5568] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Learn directly from experienced engineers, startup founders,
            and technical mentors working in modern technology companies.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-[5%] pb-16">
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">

          {specialties.map((specialty) => (
            <button
              key={specialty.id}
              onClick={() => setActiveFilter(specialty.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === specialty.id
                  ? "bg-gradient-to-r from-[#3b6ef8] to-[#2452d4] text-white shadow-lg shadow-[#3b6ef8]/30 -translate-y-1"
                  : "bg-white/70 backdrop-blur-sm border border-[#3b6ef8]/20 text-[#0f172a] hover:border-[#3b6ef8]/50 hover:bg-white"
              }`}
            >
              {specialty.label}
            </button>
          ))}

        </div>
      </section>

      {/* Mentors Grid */}
      <section className="px-[5%] pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((mentor) => (
            <Link key={mentor.id} href={`/mentors/${mentor.slug}`}>

              <Card className="group relative bg-white/70 backdrop-blur-md border border-white/70 rounded-[30px] p-8 overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#3b6ef8]/10 transition-all duration-500 cursor-pointer h-full">

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b6ef8]/0 via-transparent to-[#5b5ef8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3b6ef8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-center">

                  {/* Avatar */}
                  <div className="mb-6 flex justify-center">

                    <div
                      className="
                        relative
                        w-28
                        h-28
                        rounded-full
                        bg-gradient-to-br
                        from-[#3b6ef8]/20
                        via-[#5b5ef8]/20
                        to-[#7c3aed]/20
                        flex
                        items-center
                        justify-center
                        ring-2
                        ring-white/60
                        shadow-lg
                        shadow-[#3b6ef8]/20
                        group-hover:scale-105
                        transition-all
                        duration-300
                      "
                    >

                      <Avatar
                        size={96}
                        name={mentor.name}
                        variant="beam"
                        colors={[
                          "#2563eb",
                          "#7c3aed",
                          "#06b6d4",
                          "#0f172a",
                          "#dbeafe",
                        ]}
                      />

                    </div>

                  </div>

                  {/* Name */}
                  <h3 className="font-black text-2xl text-[#0f172a] mb-2 group-hover:text-[#2452d4] transition-colors duration-300">
                    {mentor.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm font-bold text-[#2563eb] mb-1">
                    {mentor.role}
                  </p>

                  {/* Company */}
                  <p className="text-sm text-[#64748b] mb-5">
                    {mentor.company}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {mentor.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">

                    {mentor.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-[#3b6ef8]/10 text-[#2563eb]"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  {/* Social */}
                  <div className="flex justify-center gap-4 pt-4 border-t border-[#e2e8f0]">

                    <a
                      href={mentor.social.linkedin}
                      target="_blank"
                      className="text-[#64748b] hover:text-[#2563eb] transition-colors duration-300"
                    >
                      LinkedIn
                    </a>

                    {mentor.social.github && (
                      <a
                        href={mentor.social.github}
                        target="_blank"
                        className="text-[#64748b] hover:text-[#2563eb] transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    )}

                  </div>

                </div>

              </Card>

            </Link>
          ))}

        </div>
      </section>

            <section className="px-[5%] pb-24">
        <div className="relative group">
          {/* Enhanced background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f1a] via-[#1a1f3a] to-[#0d0f1a] rounded-3xl opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8]/20 via-[#2452d4]/10 to-[#3b6ef8]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b6ef8] via-[#5b5ef8] to-[#3b6ef8] rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>

          {/* Border */}
          <div className="absolute inset-0 border border-[#3b6ef8]/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Content */}
          <div className="relative z-10 py-20 px-12 text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold text-[#3b6ef8] tracking-widest mb-6 bg-[#3b6ef8]/10 px-4 py-2 rounded-full">
              JOIN OUR COMMUNITY
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-white group-hover:via-[#3b6ef8] group-hover:to-white transition-all duration-300">
              Want to Mentor Next?
            </h2>
            <p className="text-gray-300 mb-12 text-lg leading-relaxed max-w-2xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
              We are always looking for passionate engineers and technical
              leaders who want to give back to the community and shape the next
              generation of developers.
            </p>
            <button className="group/btn relative inline-block overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white text-[#0d0f1a] font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8] to-[#5b5ef8] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
              <span className="relative">Apply to Mentor</span>
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}