import { Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="bg-background border-t border-border py-16 px-[5%]">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand Section */}
        <div>
          <div className="font-bold text-lg text-foreground mb-3">
            ZeroTwoCode
          </div>
          <p className="text-xs text-muted leading-relaxed max-w-xs mb-4">
            Empowering the next generation of developers with industry-ready
            skills and real-world experience.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-sm text-muted hover:border-accent transition-colors"
            >
              𝕏
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-sm text-muted hover:border-accent transition-colors"
            >
              in
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-sm text-muted hover:border-accent transition-colors"
            >
              gh
            </a>
          </div>
        </div>

        {/* Programs Links */}
        <div>
          <h4 className="font-bold text-sm text-foreground mb-3.5">Programs</h4>
          <ul className="space-y-2">
            {programLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.slug}
                  className="text-xs text-muted hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-sm text-foreground mb-3.5">Company</h4>
          <ul className="space-y-2">
            {["About Us", "Student Projects", "Mentors", "Careers"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs text-muted hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-sm text-foreground mb-3.5">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:hello@zerotwocode.com"
                className="text-xs text-muted hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="h-3 w-3" />
                hello@zerotwocode.com
              </a>
            </li>
            <li>
              <a
                href="tel:+15550000000"
                className="text-xs text-muted hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Phone className="h-3 w-3" />
                +1 (555) 000-0000
              </a>
            </li>
            <li className="text-xs text-muted flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              San Francisco, CA
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center pt-6 border-t border-border flex-wrap gap-3 text-xs text-muted-foreground">
        <span>© 2024 ZeroTwoCode Technologies. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
