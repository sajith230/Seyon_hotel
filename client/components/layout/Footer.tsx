"use client";

import React from "react";
import Link from "next/link";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const footerLinks = {
  explore: [
    { href: "/rooms", label: "Rooms" },
    { href: "/food", label: "Restaurant" },
    { href: "/safari", label: "Safari Yala" },
    { href: "/river", label: "Kirindi River" },
    { href: "/order", label: "Order Food" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="section-title text-3xl font-bold text-white">
                Sayone
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              Your gateway to comfort, cuisine, and adventure. Stay, dine, and
              explore Yala and Kirindi with us.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#028EFC] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>AC & Non-AC Rooms</li>
              <li>Restaurant & Room Service</li>
              <li>Yala Safari Cab</li>
              <li>Kirindi River Bathing</li>
              <li>Food Delivery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="mt-0.5 shrink-0 text-[#028EFC]" size={18} />
                <span>Near Yala, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="shrink-0 text-[#028EFC]" size={18} />
                <a href="tel:+94112345678" className="hover:text-[#028EFC] transition-colors">
                  +94 11 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="shrink-0 text-[#028EFC]" size={18} />
                <a href="mailto:hello@sayone.lk" className="hover:text-[#028EFC] transition-colors">
                  hello@sayone.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Sayone. All rights reserved.
          </p>
          <p className="text-sm opacity-60">
            Hotel · Restaurant · Safari · Adventure
          </p>
        </div>
      </div>
    </footer>
  );
}
