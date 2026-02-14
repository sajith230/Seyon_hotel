"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import AnimateInView from "@/components/animations/AnimateInView";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineSparkles, HiOutlineCheck, HiOutlineTruck, HiOutlineOfficeBuilding, HiOutlineFire } from "react-icons/hi";
import riverImage from "../image/ella.jpg";
import kiridi2Image from "../image/kiridi2.jpg";

const whatToBring = ["Swimwear & towel", "Sunscreen", "Water shoes (optional)", "Change of clothes"];
const exploreMore = [
  { href: "/safari", label: "Safari Yala", icon: HiOutlineTruck },
  { href: "/rooms", label: "Rooms", icon: HiOutlineOfficeBuilding },
  { href: "/food", label: "Restaurant", icon: HiOutlineFire },
];

export default function RiverPage() {
  return (
    <>
      <PageHero
        title="Kirindi River"
        subtitle="Bathe in cool, clear waters — we arrange your visit."
        compact
        image={riverImage}
      />

      {/* Intro */}
      <section className="py-10 sm:py-12 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <p className="max-w-3xl mx-auto text-center text-slate-600 leading-relaxed text-lg reveal-up">
            Kirindi River is a peaceful spot near Yala where you can cool off in clear water, listen to birds, and enjoy the shade of the trees. 
            We help you get there safely and can combine it with a safari or a relaxed day at the hotel.
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-up">
              <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">
                Bathe in Kirindi River
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Take a refreshing dip in the Kirindi River. We can arrange your visit—cool, clear waters and the sounds of nature make it an unforgettable experience right from your stay at Sayone.
              </p>
              <ul className="mt-6 space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><HiOutlineCheck className="text-[#0d9488] shrink-0" size={20} /> Safe, guided access when you book with us</li>
                <li className="flex items-center gap-2"><HiOutlineCheck className="text-[#0d9488] shrink-0" size={20} /> Ideal for families and small groups</li>
                <li className="flex items-center gap-2"><HiOutlineCheck className="text-[#0d9488] shrink-0" size={20} /> Combine with a safari or rest day</li>
              </ul>
              <div className="mt-8">
                <PrimaryButton
                  identifier="river-cta"
                  buttonText="Arrange River Visit"
                  className="min-w-[200px]"
                />
              </div>
            </div>
            <div className="relative reveal-up reveal-delay-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[#0d9488] shadow-xl ring-2 ring-[#0d9488]/30">
                <Image
                  src={kiridi2Image}
                  alt="Kirindi River — bathing and nature"
                  width={kiridi2Image.width}
                  height={kiridi2Image.height}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* What to bring & good to know */}
      <section className="py-12 sm:py-16 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView className="grid md:grid-cols-2 gap-10 lg:gap-12 stagger-children">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm reveal-up">
              <h3 className="section-title text-xl font-bold text-[#0f172a] mb-4">What to Bring</h3>
              <ul className="space-y-2 text-slate-600">
                {whatToBring.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm reveal-up">
              <h3 className="section-title text-xl font-bold text-[#0f172a] mb-4">Good to Know</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                River conditions can vary with the season. We’ll advise on the best time to visit and any safety tips. 
                Perfect for a half-day trip — pair it with lunch at our restaurant or a relaxed afternoon at the hotel.
              </p>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Explore more */}
      <section className="py-12 sm:py-16 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <h2 className="section-title text-xl sm:text-2xl font-bold text-[#0f172a] text-center mb-8 reveal-up">Explore More</h2>
          </AnimateInView>
          <AnimateInView className="grid sm:grid-cols-3 gap-6 stagger-children">
            {exploreMore.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover-lift reveal-up"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0d9488]/10 text-[#0d9488] shrink-0">
                  <item.icon size={24} />
                </span>
                <span className="font-semibold text-[#0f172a]">{item.label}</span>
              </Link>
            ))}
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
