"use client";

import React from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import FoodGrid from "@/components/food/FoodGrid";
import { dummyFoods } from "@/data/foods";
import { HiOutlineFire, HiOutlineCake, HiOutlineClock, HiOutlineLocationMarker, HiOutlineTruck, HiOutlineOfficeBuilding, HiOutlineSparkles } from "react-icons/hi";
import foodImage from "../image/food1.webp";

const diningOptions = [
  { title: "Dine in", desc: "Breakfast, lunch & dinner at our restaurant. Walk in or reserve.", icon: HiOutlineLocationMarker },
  { title: "Room service", desc: "Order to your room. We deliver to your door at Sayone.", icon: HiOutlineOfficeBuilding },
  { title: "Delivery", desc: "We deliver to your address. Call us to order.", icon: HiOutlineTruck },
];

const exploreMore = [
  { href: "/rooms", label: "Rooms", icon: HiOutlineOfficeBuilding },
  { href: "/safari", label: "Safari Yala", icon: HiOutlineTruck },
  { href: "/river", label: "Kirindi River", icon: HiOutlineSparkles },
];

export default function FoodPage() {
  return (
    <>
      <PageHero
        title="Restaurant"
        subtitle="Fresh food and local flavours — dine in or get it delivered."
        compact
        image={foodImage}
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
                <li className="flex items-center gap-3 text-slate-700">
                  <HiOutlineClock className="text-[#028EFC] shrink-0" size={22} />
                  <span>Breakfast, lunch & dinner — dine in or get it delivered</span>
                </li>
              </ul>
              <p className="mt-6 text-slate-600 text-sm">
                Call us to order for dine-in, room service, or delivery.
              </p>
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

          {/* How to eat */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a] text-center mb-2">
              How You Can Dine
            </h2>
            <p className="text-slate-600 text-center max-w-xl mx-auto mb-10">
              Choose dine-in, room service, or delivery. We’re here for every meal.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {diningOptions.map((opt) => (
                <div key={opt.title} className="bg-[var(--section-alt)] rounded-2xl p-6 border border-slate-100">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#028EFC]/10 text-[#028EFC] mb-4">
                    <opt.icon size={24} />
                  </span>
                  <h3 className="font-bold text-[#0f172a]">{opt.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Food menu section */}
          <div className="pt-8">
            <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a] text-center mb-2">
              Our Menu
            </h2>
            <p className="text-slate-600 text-center max-w-xl mx-auto mb-10">
              All items available for dine-in or delivery. Order via the button above or call us.
            </p>
            <FoodGrid foods={dummyFoods} showDescription />
          </div>

          {/* Explore more */}
          <section className="mt-20 pt-16 border-t border-slate-200">
            <h2 className="section-title text-xl sm:text-2xl font-bold text-[#0f172a] text-center mb-8">
              Explore More
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {exploreMore.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--section-alt)] border border-slate-100 hover-lift"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#028EFC]/10 text-[#028EFC] shrink-0">
                    <item.icon size={20} />
                  </span>
                  <span className="font-semibold text-[#0f172a] text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
