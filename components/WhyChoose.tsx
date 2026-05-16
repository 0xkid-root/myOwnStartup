import { Check } from 'lucide-react';

export function WhyChoose() {
  const features = [
    'Real Projects',
    'Industry Mentorship',
    'Startup Experience',
    'Verified Certificate',
    'GitHub Portfolio',
    'Placement Guidance',
  ];

  return (
    <section id="about" className="py-20 px-[5%] bg-card">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Text Content */}
        <div>
          <h2 className="text-balance text-foreground font-black text-4xl md:text-5xl mb-3 -tracking-wide">
            Why Choose ZeroTwoCode?
          </h2>
          <p className="text-muted text-base mb-9 max-w-sm">
            We don&apos;t just teach theory. We build real products that solve real problems, giving you the experience companies actually hire for.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-bold text-foreground mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
                  </span>
                  {feature}
                </h4>
                <p className="text-xs text-muted">
                  Experience hands-on learning with industry standard tools and practices.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Card */}
        <div className="bg-gradient-to-br from-[#e8eeff] to-[#dbeafe] rounded-3xl min-h-80 flex items-center justify-center relative overflow-hidden">
          <div className="bg-card rounded-2xl p-6 w-52 shadow-lg">
            <div className="text-xs text-muted font-semibold mb-1.5">Certificate of Completion</div>
            <div className="text-sm font-bold text-foreground">Full Stack Development</div>
            <div className="text-xs text-orange-500 font-bold mt-2">★★★★★</div>
            <div className="mt-3 h-1 bg-border rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-accent rounded-full" />
            </div>
            <div className="text-xs text-text-light mt-1.5">78% complete</div>
          </div>
        </div>
      </div>
    </section>
  );
}
