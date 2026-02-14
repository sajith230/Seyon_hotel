"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  compact?: boolean;
}

export default function PageHero({ title, subtitle, className, compact }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d9488] text-white",
        compact ? "py-12 sm:py-16" : "py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl mx-auto text-slate-200 text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
