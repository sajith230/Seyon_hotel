"use client";

import React from "react";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineOfficeBuilding, HiOutlineFire, HiOutlineTruck, HiOutlineSparkles, HiOutlineShoppingBag } from "react-icons/hi";

const quickLinks = [
  { href: "/rooms", label: "Rooms", desc: "AC & Non-AC", icon: HiOutlineOfficeBuilding },
  { href: "/food", label: "Food", desc: "Restaurant", icon: HiOutlineFire },
  { href: "/safari", label: "Safari Yala", desc: "Cab & tours", icon: HiOutlineTruck },
  { href: "/river", label: "Kirindi River", desc: "Bathing", icon: HiOutlineSparkles },
  { href: "/order", label: "Order Food", desc: "We deliver", icon: HiOutlineShoppingBag },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d9488]">
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--gold-light)] font-medium tracking-widest uppercase text-sm sm:text-base mb-4 animate-fade-in opacity-0 animation-delay-100">
            Hotel · Restaurant · Safari
          </p>
          <h1 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up opacity-0 animation-delay-200">
            Welcome to <span className="text-[var(--gold-light)]">Sayone</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-200 animate-fade-in-up opacity-0 animation-delay-300">
            Stay in comfort, taste authentic flavours, and explore Yala safari &
            Kirindi River. We deliver food to your room or doorstep.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-400">
            <Link href="/rooms" className="w-full sm:w-auto">
              <PrimaryButton identifier="hero-cta" buttonText="Explore Rooms" className="min-w-[200px]" />
            </Link>
            <Link
              href="/order"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-white/80 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors min-w-[200px]"
            >
              Order Food
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16 sm:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a]">
              Explore Sayone
            </h2>
            <p className="mt-2 text-slate-600">Choose where you want to go</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {quickLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover-lift text-center"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#028EFC]/10 text-[#028EFC] mb-4 group-hover:bg-[#028EFC]/20 transition-colors">
                  <link.icon size={28} />
                </span>
                <span className="font-semibold text-[#0f172a]">{link.label}</span>
                <span className="text-sm text-slate-500 mt-1">{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
