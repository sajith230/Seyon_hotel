"use client";

import React from "react";
import PageHero from "@/components/layout/PageHero";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineSparkles } from "react-icons/hi";

export default function RiverPage() {
  return (
    <>
      <PageHero
        title="Kirindi River"
        subtitle="Bathe in cool, clear waters — we arrange your visit."
        compact
      />
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">
                Bathe in Kirindi River
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Take a refreshing dip in the Kirindi River. We can arrange your visit—cool, clear waters and the sounds of nature make it an unforgettable experience right from your stay at Sayone.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <HiOutlineSparkles className="text-[#0d9488] shrink-0" size={32} />
                <span className="text-slate-600">
                  Safe, guided access to the river when you book with us.
                </span>
              </div>
              <div className="mt-8">
                <PrimaryButton
                  identifier="river-cta"
                  buttonText="Arrange River Visit"
                  className="min-w-[200px]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0d9488]/80 to-[#0f172a]/80 flex items-center justify-center">
                <span className="section-title text-5xl sm:text-6xl font-bold text-white/30">
                  Kirindi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
