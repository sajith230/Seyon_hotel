"use client";

import React from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineTruck } from "react-icons/hi";

export default function Safari() {
  return (
    <section id="safari" className="py-16 sm:py-20 lg:py-24 bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-r from-[#0d9488] to-[#1e293b] flex items-center justify-center">
              <HiOutlineTruck size={120} className="text-white/30" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[var(--gold-light)] font-medium uppercase tracking-widest text-sm mb-2">
              Adventure
            </p>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Safari Yala — Cab Ready
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Experience Yala National Park with our safari cab. We arrange comfortable, guided trips so you can spot leopards, elephants, and more. Book your safari with us and we&apos;ll take care of the rest.
            </p>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li>• Safari cab with experienced driver</li>
              <li>• Half-day and full-day options</li>
              <li>• Pick-up from hotel</li>
            </ul>
            <div className="mt-8">
              <PrimaryButton
                identifier="safari-cta"
                buttonText="Book Safari Cab"
                className="min-w-[200px] bg-[#028EFC] hover:opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
