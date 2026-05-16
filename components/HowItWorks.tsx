'use client';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Apply & Interview',
      desc: 'Submit your application and complete a short technical or behavioral interview.',
      circleColor: 'bg-[#3b6ef8]',
    },
    {
      number: 2,
      title: 'Build Real Projects',
      desc: 'Work on real-world startup projects with industry mentors guiding you.',
      circleColor: 'bg-[#06c5d3]',
    },
    {
      number: 3,
      title: 'Get Certified & Hired',
      desc: 'Receive your certificate and get direct referrals to our hiring partners.',
      circleColor: 'bg-[#0d0f1a]',
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-background">
      <div className="text-center mb-12">
        <h2 className="text-balance text-primary font-black text-4xl md:text-5xl mb-3">
          How It Works
        </h2>
        <p className="text-muted text-sm md:text-base">
          A straightforward process to get you from application to your dream job.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map(step => (
          <div key={step.number} className="text-center flex flex-col items-center">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 ${step.circleColor}`}
            >
              {step.number}
            </div>
            <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
