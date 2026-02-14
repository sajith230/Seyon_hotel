"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/food", label: "Food" },
  { href: "/safari", label: "Safari Yala" },
  { href: "/river", label: "Kirindi River" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // At top of any page (over dark hero), use light text so navbar is visible on all pages
  const isOverHero = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "navbar-glass shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "section-title text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-200",
              isOverHero ? "text-white hover:text-[var(--gold-light)]" : "text-[#0f172a]"
            )}
          >
            Sayone
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors duration-200",
                    isOverHero
                      ? pathname === link.href
                        ? "text-[var(--gold-light)]"
                        : "text-white/90 hover:text-[var(--gold-light)]"
                      : pathname === link.href
                        ? "text-[#028EFC]"
                        : "text-[#334155] hover:text-[#028EFC]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isOverHero ? "text-white hover:bg-white/20" : "text-[#0f172a] hover:bg-white/80"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="navbar-glass mx-4 mt-2 rounded-xl py-4 px-4 shadow-lg">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block py-3 px-4 rounded-lg font-medium transition-colors",
                    pathname === link.href
                      ? "bg-[#028EFC]/10 text-[#028EFC]"
                      : "text-[#334155] hover:bg-[#028EFC]/10 hover:text-[#028EFC]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
