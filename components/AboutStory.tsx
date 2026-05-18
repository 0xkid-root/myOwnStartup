import Image from 'next/image';

export function AboutStory() {
  return (
    <section className="py-20 px-[5%] bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-2xl aspect-square shadow-lg">
            <Image
              src="/images/aboutUs.png"
              alt="piecodingschools team collaborating"
              fill
              className="object-contain p-6"
              priority
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              The Story Behind piecodingschools
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Millions of students graduate with computer science degrees, but lack the practical skills that modern tech companies demand. They know algorithms, but they&apos;ve never deployed a full-stack application to AWS or collaborated on a sprawling codebase.
              </p>
              <p>
                That&apos;s why we built piecodingschools. We believe the best way to learn software engineering is by actually building software. Not toy projects, but real products with real users.
              </p>
              <p>
                Our programs simulate a fast-paced startup environment, surrounded by senior engineers who act as mentors. You write code, you review PRs, you attend standups, and you ship.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold text-primary">2025</p>
                <p className="text-sm text-muted">Year Founded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">85%</p>
                <p className="text-sm text-muted">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
