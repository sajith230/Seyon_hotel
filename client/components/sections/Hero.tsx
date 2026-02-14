"use client";

import React from "react";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d9488]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Background pattern */}
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
          <Link href="#rooms" className="w-full sm:w-auto">
            <PrimaryButton
              identifier="hero-cta"
              buttonText="Explore Rooms"
              className="min-w-[200px]"
            />
          </Link>
          <Link
            href="#order"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-white/80 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors min-w-[200px]"
          >
            Order Food
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#rooms"
          className="flex w-10 h-10 rounded-full border-2 border-white/60 items-center justify-center text-white/80 hover:border-white hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to rooms"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-1" aria-hidden>
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
