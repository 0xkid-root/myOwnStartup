import { Button } from '@/components/ui/button';

export function CTA() {
  return (
      <section className="px-[5%] pb-24 pt-12">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-white group-hover:via-[#3b6ef8] group-hover:to-white transition-all duration-300">
              Start Building Your Tech Career Today
            </h2>
            <p className="text-gray-300 mb-12 text-lg leading-relaxed max-w-2xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
Join practical internship and bootcamp programs designed to help students gain real-world experience, build strong portfolios, and launch successful tech careers.            </p>
            <button className="group/btn relative inline-block overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white text-[#0d0f1a] font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b6ef8] to-[#5b5ef8] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
              <span className="relative">Apply Now</span>
            </button>
          </div>
        </div>
      </section>
  );
}
