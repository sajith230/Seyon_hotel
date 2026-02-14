"use client";

import React from "react";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineFire, HiOutlineCake } from "react-icons/hi";

export default function Food() {
  return (
    <section id="food" className="py-16 sm:py-20 lg:py-24 bg-[var(--section-alt)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#028EFC] font-medium uppercase tracking-widest text-sm mb-2">
              Restaurant
            </p>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Fresh Food, Local Flavours
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our restaurant serves hearty Sri Lankan and international dishes. Breakfast, lunch, and dinner—dine in with a view or get it delivered to your room.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <HiOutlineFire className="text-[#028EFC] shrink-0" size={22} />
                <span>Freshly prepared daily</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <HiOutlineCake className="text-[#028EFC] shrink-0" size={22} />
                <span>Local & international menu</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="#order">
                <PrimaryButton
                  identifier="food-order"
                  buttonText="Order Food Now"
                  className="min-w-[200px]"
                />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0d9488] to-[#0f172a] flex items-center justify-center text-white/80">
              <span className="section-title text-6xl sm:text-7xl font-bold opacity-50">
                Sayone
              </span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[var(--gold)]/20 border-2 border-[var(--gold)]/40 flex items-center justify-center">
              <span className="text-[var(--gold)] font-bold text-sm">Fresh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
