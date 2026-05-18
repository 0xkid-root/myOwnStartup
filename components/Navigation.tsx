"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-[5%] h-[60px] flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/piecodingschool1.png"
            alt="piecodingschools"
            width={186}
            height={120}
            className="object-contain"
            priority
          />

          {/* <span className="font-black text-[17px] text-[#0f172a] tracking-tight">
            piecodingschools
          </span> */}
        </Link>
        {/* Desktop Menu - Center */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <Link
              href="/"
              className="text-muted font-medium text-sm hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className="text-muted font-medium text-sm hover:text-foreground transition-colors"
            >
              Programs
            </Link>
          </li>
          <li>
            <a
              href="#projects"
              className="text-muted font-medium text-sm hover:text-foreground transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <Link
              href="/mentors"
              className="text-muted font-medium text-sm hover:text-foreground transition-colors"
            >
              Mentors
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-muted font-medium text-sm hover:text-foreground transition-colors"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Desktop CTA - Right */}
        <Link href="/apply" className="hidden md:inline-flex flex-shrink-0">
          <Button className="bg-primary text-primary-foreground font-semibold text-sm px-6 py-2 rounded-lg">
            Apply Now
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] bg-white/95 backdrop-blur-md z-40 flex flex-col p-[5%] md:hidden">
          <Link
            href="/"
            className="py-3.5 border-b border-border text-foreground font-medium text-base"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/programs"
            className="py-3.5 border-b border-border text-foreground font-medium text-base"
            onClick={() => setIsOpen(false)}
          >
            Programs
          </Link>
          <a
            href="#projects"
            className="py-3.5 border-b border-border text-foreground font-medium text-base"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <Link
            href="/mentors"
            className="py-3.5 border-b border-border text-foreground font-medium text-base"
            onClick={() => setIsOpen(false)}
          >
            Mentors
          </Link>
          <Link
            href="/about"
            className="py-3.5 border-b border-border text-foreground font-medium text-base"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link href="/apply" onClick={() => setIsOpen(false)} className="mt-5">
            <Button className="bg-primary text-primary-foreground font-semibold text-sm px-7 py-3 rounded-lg w-full">
              Apply Now
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
