"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useState } from "react";

import {
  Sun,
  Snowflake,
  Users,
  Zap,
  Link2,
  Cloud,
} from "lucide-react";

export function Programs() {
  const [activeFilter, setActiveFilter] = useState("all");

  const programs = [
    {
      id: 1,
      slug: "summer-internship",
      image: "/images/summar-intership.png",
      title: "Summer Internship",
      desc: "Intensive 8-week program building real products from scratch. Includes mentorship and job placement support.",
      category: "internship",
      circleColor: "bg-[#3b6ef8]",
    },
    {
  id: 7,
  slug: "full-stack-summer-internship",
  image: "/images/full-stack-summer.png",
  title: "Full Stack Summer Internship",
  desc: "Master HTML, CSS, JavaScript, React, MERN stack, backend APIs, authentication, deployment, and build production-level applications with job-oriented learning.",
  category: "internship",
  circleColor: "bg-[#3b6ef8]",
},
    {
      id: 2,
      slug: "winter-internship",
      image: "/images/winter-intership.png",
      title: "Winter Internship",
      desc: "Focused 4-week sprint mastering modern web technologies. Perfect for college winter breaks.",
      category: "internship",
      circleColor: "bg-[#06c5d3]",
    },
    {
      id: 3,
      slug: "apprenticeship",
      image: "/images/apprenticeship-program.png",
      title: "Apprenticeship",
      desc: "Long-term 6-month placement with our startup partners. Get paid while learning on the job.",
      category: "apprenticeship",
      circleColor: "bg-[#0d0f1a]",
    },
    {
      id: 4,
      slug: "ai-bootcamp",
      image: "/images/Ai-ml-traning.png",
      title: "AI & Full Stack Bootcamp",
      desc: "Deep dive into LLMs, RAG, and AI application development. Build 3 production-ready AI apps.",
      category: "bootcamp",
      circleColor: "bg-[#3b6ef8]",
    },
    {
      id: 5,
      slug: "blockchain-training",
      image: "/images/blocckhain-traning.png",
      title: "Blockchain Training",
      desc: "Master smart contracts, Web3, and decentralized applications. Build your own token and exchange.",
      category: "bootcamp",
      circleColor: "bg-[#06c5d3]",
    },
    {
      id: 6,
      slug: "devops-training",
      image: "/images/vops-traning.png",
      title: "DevOps & Cloud Engineering",
      desc: "Learn CI/CD, Docker, Kubernetes, AWS, monitoring, and scalable cloud infrastructure deployment.",
      category: "bootcamp",
      circleColor: "bg-[#111827]",
    },
  ];

  const filters = [
    { id: "all", label: "All Programs" },
    { id: "internship", label: "Internships" },
    { id: "bootcamp", label: "Bootcamps" },
    { id: "apprenticeship", label: "Apprenticeships" },
  ];

  const filtered =
    activeFilter === "all"
      ? programs
      : programs.filter((p) => p.category === activeFilter);

  return (
    <section id="programs" className="py-20 px-[5%] bg-background">
      <div className="text-center mb-12">
        <h2 className="text-balance text-primary font-black text-4xl md:text-5xl mb-3">
          Discover Our Programs
        </h2>

        <p className="text-muted text-sm md:text-base max-w-2xl mx-auto mb-8">
          From short-term bootcamps to immersive 6-month apprenticeships.
          <br />
          Find the perfect path to launch your tech career.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-border hover:border-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((program) => {

          return (
            <Link key={program.id} href={`/programs/${program.slug}`}>
              <Card className="overflow-hidden bg-white border border-border rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer h-full group">

                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon */}
                  

                  <h3 className="font-bold text-xl text-primary mb-3">
                    {program.title}
                  </h3>

                  <p className="text-sm text-muted mb-5 leading-relaxed">
                    {program.desc}
                  </p>

                  <span className="text-primary font-semibold text-sm hover:text-accent transition-colors">
                    Learn more →
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}