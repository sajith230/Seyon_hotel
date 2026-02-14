"use client";

import React from "react";
import PageHero from "@/components/layout/PageHero";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineTruck } from "react-icons/hi";

export default function SafariPage() {
  return (
    <>
      <PageHero
        title="Safari Yala"
        subtitle="Cab ready — we arrange comfortable, guided trips."
        compact
      />
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-r from-[#0d9488] to-[#1e293b] flex items-center justify-center">
                <HiOutlineTruck size={120} className="text-white/30" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">
                Safari Yala — Cab Ready
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Experience Yala National Park with our safari cab. We arrange comfortable, guided trips so you can spot leopards, elephants, and more. Book your safari with us and we&apos;ll take care of the rest.
              </p>
              <ul className="mt-6 space-y-2 text-slate-600">
                <li>• Safari cab with experienced driver</li>
                <li>• Half-day and full-day options</li>
                <li>• Pick-up from hotel</li>
              </ul>
              <div className="mt-8">
                <PrimaryButton
                  identifier="safari-cta"
                  buttonText="Book Safari Cab"
                  className="min-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
