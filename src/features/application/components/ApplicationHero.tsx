import { BENEFITS } from '../constants/application.constants';

export function ApplicationHero() {
  return (
    <div className="w-full lg:w-1/3">
      {/* Cohort Badge */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#3b6ef8]">
          <span className="h-2 w-2 rounded-full bg-[#3b6ef8]"></span>
          Next Cohort: Summer 2024
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-balance font-black text-4xl md:text-5xl text-primary mb-6">
        Launch Your
      </h1>

      {/* Description */}
      <p className="text-muted text-base leading-relaxed mb-12">
        Join our intensive programs to build real-world products, get mentored by industry experts, and
        land your dream job.
      </p>

      {/* Benefits */}
      <div className="space-y-8">
        {BENEFITS.map((benefit, index) => (
          <div key={index}>
            <h3 className="font-bold text-foreground text-lg mb-2">{benefit.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
