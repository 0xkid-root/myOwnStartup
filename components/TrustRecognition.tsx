// components/TrustRecognition.tsx

export function TrustRecognition() {
  const items = [
    {
      title: "MCA Registered Company",
      image: "/certificate/MCA.jpeg",
    },
    // {
    //   title: "Government e-Marketplace",
    //   image: "/certificate/gem.jpeg",
    // },
    {
      title: "ISO 9001:2015 Certified",
      image: "/certificate/iso.jpeg",
    },
    {
      title: "Startup India Recognized",
      image: "/certificate/startup-india.jpeg",
    },
    {
      title: "MSME Registered",
      image: "/certificate/msme.jpeg",
    },
    {
      title: "StartIn Up",
      image: "/certificate/startup-up.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 px-[5%] bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4ff]">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3b6ef8]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5b5ef8]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-4 mb-7">

            <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#3b6ef8] to-[#5b5ef8]"></span>

            <span className="text-sm font-black tracking-[0.35em] uppercase text-[#3b6ef8]">
              TRUST & RECOGNITION
            </span>

            <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#5b5ef8] to-[#3b6ef8]"></span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black text-primary mb-6">
            Recognized & Trusted
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#4a5568]">
            Recognized by leading government and industry initiatives
            supporting innovation, startups, and digital transformation.
          </p>

        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-10 items-start">

          {items.map((item, index) => (
            <div
              key={index}
              className="group text-center"
            >

              {/* Logo */}
              <div className="h-28 flex items-center justify-center mb-5 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-20 object-contain grayscale opacity-80
                    transition-all duration-700
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    group-hover:-translate-y-2
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-primary leading-snug max-w-[220px] mx-auto transition-all duration-500 group-hover:text-[#3b6ef8]">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}