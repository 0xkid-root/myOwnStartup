import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProgramDetail } from '@/components/ProgramDetail';
import { Bot, CheckSquare, CloudSun, Film, GraduationCap, Layers3, MessageCircle, Rocket, ShieldCheck, ShoppingCart, Sparkles, Store, User, Users, Wallet } from 'lucide-react';
import { ProgramPricing } from '@/components/ProgramPricing';

export const metadata = {
  title: 'Full Stack Summer Internship - piecodingschools',
  description:
    'Master MERN Stack, Next.js, Backend APIs, Authentication, Deployment, and build real-world production-level projects.',
};

export default function FullStackSummerInternshipPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />

      <ProgramDetail id="full-stack-summer-internship" />
      <ProgramPricing />
      {/* Projects Section */}
<section className="py-28 px-[5%] bg-gradient-to-b from-[#f8fbff] to-white relative overflow-hidden">
  
  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#dbeafe] opacity-30 blur-3xl rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">
    
    {/* Section Heading */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#dbeafe] text-[#2563eb] text-xs font-semibold mb-5 shadow-sm">
        Real-world Project Building
      </div>

      <h2 className="text-5xl md:text-6xl font-black text-[#0f172a] mb-6">
        Projects You Will Build
      </h2>

      <p className="text-[#64748b] text-lg max-w-3xl mx-auto leading-relaxed">
        Build beginner to advanced production-level applications during the internship.
        Every project focuses on practical development, APIs, authentication,
        databases, deployment, and real engineering workflows.
      </p>
    </div>

    {/* Mini Projects */}
    <div className="mb-24">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-[#3b6ef8]/10 flex items-center justify-center">
          <Layers3 className="w-5 h-5 text-[#3b6ef8]" />
        </div>

        <h3 className="text-3xl font-black text-[#0f172a]">
          Beginner & Intermediate Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {[
          {
            title: "Modern Portfolio Website",
            desc: "Build a responsive developer portfolio with animations, dark mode, project showcase, and contact form.",
            icon: User,
          },
          {
            title: "Weather Forecast App",
            desc: "Fetch live weather APIs, manage async data, and create dynamic UI components.",
            icon: CloudSun,
          },
          {
            title: "Task Management System",
            desc: "Create CRUD-based productivity application with authentication and protected routes.",
            icon: CheckSquare,
          },
          {
            title: "Real-time Chat Application",
            desc: "Build Socket.io powered chat system with rooms, typing indicators, and live messaging.",
            icon: MessageCircle,
          },
          {
            title: "Expense Tracker",
            desc: "Track expenses, analytics, monthly reports, and data visualization dashboards.",
            icon: Wallet,
          },
          {
            title: "Movie Streaming UI",
            desc: "Build Netflix-style frontend using React, reusable components, and API integration.",
            icon: Film,
          },
          {
            title: "AI Content Generator",
            desc: "Integrate OpenAI APIs for text generation, summaries, and AI-powered workflows.",
            icon: Bot,
          },
          {
            title: "Authentication System",
            desc: "Implement JWT authentication, role-based access, protected APIs, and secure backend flows.",
            icon: ShieldCheck,
          },
          {
            title: "E-commerce Frontend",
            desc: "Create shopping cart, product filtering, payment UI, and responsive product pages.",
            icon: ShoppingCart,
          },
        ].map((project, index) => {
          const Icon = project.icon;

          return (
            <div
              key={index}
              className="
                group
                bg-white
                border border-[#dbeafe]
                rounded-[28px]
                p-7
                hover:-translate-y-1.5
                hover:border-[#bfdbfe]
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)]
                transition-all
                duration-500
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-6 group-hover:bg-[#dbeafe] transition-colors">
                <Icon className="w-6 h-6 text-[#2563eb]" />
              </div>

              <h4 className="text-xl font-bold text-[#0f172a] mb-3">
                {project.title}
              </h4>

              <p className="text-[#64748b] text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>

    {/* Major Projects */}
    <div>
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-[#3b6ef8]/10 flex items-center justify-center">
          <Rocket className="w-5 h-5 text-[#3b6ef8]" />
        </div>

        <h3 className="text-3xl font-black text-[#0f172a]">
          Advanced Production-Level Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

{[
  {
    title: "AI Notes Generator SaaS",
    desc: "Build an AI-powered platform where users upload PDFs, YouTube links, or notes and get AI-generated summaries, flashcards, quizzes, and explanations.",
    tech: "Next.js • OpenAI • MongoDB • Node.js",
    icon: Sparkles,
  },
  {
    title: "Advanced LMS Platform",
    desc: "Create a production-level Learning Management System with admin panel, course uploads, video streaming, certificates, progress tracking, and student analytics.",
    tech: "React • Express • MongoDB • JWT",
    icon: GraduationCap,
  },
  {
    title: "Real-time Team Collaboration App",
    desc: "Develop a collaborative platform like Slack with live chat, workspaces, notifications, file sharing, and realtime communication using Socket.io.",
    tech: "Next.js • Socket.io • Node.js • Redis",
    icon: Users,
  },
].map((project, index) => {
  const Icon = project.icon;

  return (
    <div
      key={index}
      className="
        relative
        overflow-hidden
        group
        bg-gradient-to-br
        from-[#0f172a]
        via-[#111827]
        to-[#1e293b]
        rounded-[32px]
        p-9
        border border-[#2563eb]/20
        hover:border-[#3b82f6]/40
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(37,99,235,0.18)]
        transition-all
        duration-500
      "
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-[#2563eb]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
            w-16
            h-16
            rounded-2xl
            bg-[#2563eb]/15
            border border-[#3b82f6]/20
            flex
            items-center
            justify-center
            mb-7
          "
        >
          <Icon className="w-7 h-7 text-[#60a5fa]" />
        </div>

        {/* Title */}
        <h4 className="text-2xl font-black text-white mb-4">
          {project.title}
        </h4>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6 text-[15px]">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div
          className="
            inline-flex
            items-center
            px-4
            py-2
            rounded-full
            bg-[#2563eb]/10
            border border-[#3b82f6]/20
            text-[#93c5fd]
            text-sm
            font-medium
          "
        >
          {project.tech}
        </div>
      </div>
    </div>
  );
})}


      </div>
    </div>
    <div className="group">
  <p className="text-[#718096] text-xs uppercase font-bold tracking-wider mb-2">
    Program Fees
  </p>

  <div className="flex items-end gap-2">
    <span className="text-4xl font-black text-[#3b6ef8]">
      ₹2,899
    </span>

    <span className="text-sm text-[#64748b] mb-1">
      Limited Offer
    </span>
  </div>

  <p className="text-sm text-[#64748b] mt-2 leading-relaxed">
    Includes mentorship, projects, recordings, certificates,
    GitHub guidance, and interview preparation.
  </p>
</div>
  </div>
</section>

      <Footer />
    </main>
  );
}