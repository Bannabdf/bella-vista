"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Reservations" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#FDFAF5] border-b border-[#1C1008]/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-[family-name:var(--font-playfair-display)] italic text-[#8B1A1A] tracking-tight"
          >
            Bella Vista
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1C1008] hover:text-[#8B1A1A] transition-colors text-sm font-[family-name:var(--font-lato)] tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-[#8B1A1A] text-white px-5 py-2 rounded text-sm font-[family-name:var(--font-lato)] font-bold tracking-wide hover:bg-[#6e1414] transition-colors"
          >
            Reserve a Table
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#1C1008]"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FDFAF5] border-t border-[#1C1008]/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[#1C1008] hover:text-[#8B1A1A] transition-colors text-sm font-[family-name:var(--font-lato)] tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-[#8B1A1A] text-white px-5 py-2 rounded text-sm font-[family-name:var(--font-lato)] font-bold tracking-wide hover:bg-[#6e1414] transition-colors"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
