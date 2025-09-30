'use client';

import Link from "next/link";
import Image from "next/image";
import { colors, typography } from "@/lib/design-system";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/productos", label: "Productos" },
];

const navLinksRight = [
  { href: "/about", label: "Quienes Somos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm" role="navigation" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center items-center h-14 gap-32">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1a1a1a] hover:text-gray-600 font-inter transition"
              style={{ fontSize: typography.fontSize.sm }}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/" className="mx-8" aria-label="Ir a la página principal">
            <Image src="/logo.svg" alt="Logo de Isolla" width={120} height={60} priority />
          </Link>

          {navLinksRight.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1a1a1a] hover:text-gray-600 font-inter transition"
              style={{ fontSize: typography.fontSize.sm }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center h-14">
          <Link href="/" aria-label="Ir a la página principal">
            <Image src="/logo.svg" alt="Logo de Isolla" width={100} height={50} priority />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 p-2"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-14 bg-white z-50 flex flex-col items-center justify-center animate-fade-in">
            <div className="flex flex-col items-center gap-8">
              {[...navLinks, ...navLinksRight].map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#1a1a1a] hover:text-gray-600 font-inter transition text-2xl animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
