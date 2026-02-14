"use client";

import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import AnimateInView from "@/components/animations/AnimateInView";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  compact?: boolean;
  image?: StaticImageData;
  /** "cover" fills the hero (may crop). "contain" shows the full image (no crop). */
  imageFit?: "cover" | "contain";
}

export default function PageHero({ title, subtitle, className, compact, image, imageFit = "cover" }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden text-white flex flex-col min-h-[60vh] sm:min-h-[65vh]",
        compact ? "py-12 sm:py-16" : "py-16 sm:py-20 lg:py-24",
        !image && "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d9488]",
        className
      )}
    >
      {image && (
        <div className={cn("absolute inset-0 z-0", imageFit === "contain" ? "bg-neutral-900" : "bg-black")}>
          <Image
            src={image}
            alt=""
            fill
            className={imageFit === "contain" ? "object-contain" : "object-cover"}
            priority
            sizes="100vw"
          />
        </div>
      )}
      <div
        className={cn(
          "absolute inset-0 z-0",
          !image && "bg-black/30",
          image && imageFit === "contain" && "bg-black/25",
          image && imageFit !== "contain" && "bg-black/50"
        )}
      />
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center">
        <AnimateInView rootMargin="0px" threshold={0.2} className="w-full">
          <h1 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold reveal-up">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl mx-auto text-slate-200 text-lg reveal-up reveal-delay-1">
              {subtitle}
            </p>
          )}
        </AnimateInView>
      </div>
    </section>
  );
}
