import Image from "next/image";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const programLinks = [
    {
      name: "Summer Internship",
      slug: "/programs/summer-internship",
    },
    {
      name: "Winter Internship",
      slug: "/programs/winter-internship",
    },
    {
      name: "Apprenticeship Program",
      slug: "/programs/apprenticeship-program",
    },
    {
      name: "AI Bootcamp",
      slug: "/programs/ai-bootcamp",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#f8fbff] to-[#edf4ff] border-t border-[#dbeafe] py-16 px-[5%]">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Section */}
        <div>
          {/* Logo */}
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/piecodingschool.png"
              alt="piecodingschools"
              width={170}
              height={55}
              className="object-contain"
            />
          </Link>

          <p className="text-sm text-[#64748b] leading-relaxed max-w-xs mb-5">
            piecodingschools helps students learn modern development through
            real-world projects, internships, mentorship, and industry-focused
            training programs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://x.com/piecodingschool"
              className="w-10 h-10 rounded-xl border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:bg-[#edf4ff] hover:text-[#2563eb] transition-all"
            >
              <Twitter className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/company/piecodingschool/"
              className="w-10 h-10 rounded-xl border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:bg-[#edf4ff] hover:text-[#2563eb] transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/piecodingschools/"
              className="w-10 h-10 rounded-xl border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:bg-[#edf4ff] hover:text-[#2563eb] transition-all"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-bold text-sm text-[#0f172a] mb-4">
            Programs
          </h4>

          <ul className="space-y-3">
            {programLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.slug}
                  className="text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-sm text-[#0f172a] mb-4">
            Company
          </h4>

          <ul className="space-y-3">
            <li>
              <Link
                href="/about"
                className="text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
              >
                Student Projects
              </Link>
            </li>

            <li>
              <Link
                href="/mentors"
                className="text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
              >
                Mentors
              </Link>
            </li>

            <li>
              <Link
                href="/careers"
                className="text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-sm text-[#0f172a] mb-4">
            Contact
          </h4>

          <ul className="space-y-4">
            <li>
              <a
                href="mailto:tech@piecodingschools.com"
                className="flex items-center gap-3 text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
              >
                <Mail className="h-4 w-4" />
                tech@piecodingschools.com
              </a>
            </li>

            <li>
              <a
                href="tel:+916299349073"
                className="flex items-center gap-3 text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 6299349073
              </a>
            </li>

            <li className="flex items-start gap-3 text-sm text-[#64748b] leading-relaxed">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              Lucknow, Uttar Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-6 border-t border-[#e2e8f0] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#94a3b8] text-center md:text-left">
          © 2025 piecodingschools Technologies. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}