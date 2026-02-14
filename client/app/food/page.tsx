"use client";

import React from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import PrimaryButton from "@/components/ui/PrimaryButton";
import FoodGrid from "@/components/food/FoodGrid";
import { dummyFoods } from "@/data/foods";
import { HiOutlineFire, HiOutlineCake } from "react-icons/hi";

export default function FoodPage() {
  return (
    <>
      <PageHero
        title="Restaurant"
        subtitle="Fresh food and local flavours — dine in or get it delivered."
        compact
      />
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">
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
                <Link href="/order">
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
                <span className="section-title text-5xl sm:text-6xl font-bold opacity-50">
                  Sayone
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[var(--gold)]/20 border-2 border-[var(--gold)]/40 flex items-center justify-center">
                <span className="text-[var(--gold)] font-bold text-sm">Fresh</span>
              </div>
            </div>
          </div>

          {/* Food menu section - same data source as order page; when admin adds food, it shows here */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a] text-center mb-2">
              Our Menu
            </h2>
            <p className="text-slate-600 text-center max-w-xl mx-auto mb-10">
              All items available for dine-in or delivery. Order via the button above or call us.
            </p>
            <FoodGrid foods={dummyFoods} showDescription showOrderButton />
          </div>
        </div>
      </section>
    </>
  );
}
