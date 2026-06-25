"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dp-bg/95 backdrop-blur-md border-b border-dp-border"
            : "bg-transparent"
        }`}
        style={{ height: "72px" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="DustPro"
              width={175}
              height={44}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-dp-amber"
                    : "text-dp-muted hover:text-dp-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary text-[13px] py-2.5 px-5"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-dp-text p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-dp-bg pt-[72px] flex flex-col md:hidden">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-semibold tracking-tight transition-colors ${
                  pathname === link.href ? "text-dp-amber" : "text-dp-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-4 justify-center">
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
