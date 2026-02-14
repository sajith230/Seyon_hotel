"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import AnimateInView from "@/components/animations/AnimateInView";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineTruck, HiOutlineCheck, HiOutlineSparkles, HiOutlineOfficeBuilding, HiOutlineFire } from "react-icons/hi";
import yalaImage from "../image/yala.jpg";
import safaricabImage from "../image/safaricab.png";

const whatToBring = ["Comfortable clothes & hat", "Sunscreen", "Water bottle", "Camera or phone"];
const exploreMore = [
  { href: "/rooms", label: "Rooms", icon: HiOutlineOfficeBuilding },
  { href: "/river", label: "Kirindi River", icon: HiOutlineSparkles },
  { href: "/food", label: "Restaurant", icon: HiOutlineFire },
];

export default function SafariPage() {
  return (
    <>
      <PageHero
        title="Safari Yala"
        subtitle="Cab ready — we arrange comfortable, guided trips to Yala National Park."
        compact
        image={yalaImage}
      />

      {/* Intro */}
      <section className="py-10 sm:py-12 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <p className="max-w-3xl mx-auto text-center text-slate-600 leading-relaxed text-lg reveal-up">
            Yala is one of Sri Lanka’s best-known national parks, home to leopards, elephants, sloth bears, and countless birds. 
            We arrange safari cabs and guided trips so you can focus on the experience — we handle the rest.
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 reveal-up">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[#0d9488] shadow-xl ring-2 ring-[#0d9488]/30">
                <Image
                  src={safaricabImage}
                  alt="Safari cab — Yala National Park"
                  width={safaricabImage.width}
                  height={safaricabImage.height}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal-up reveal-delay-1">
              <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">
                Safari Yala — Cab Ready
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Experience Yala National Park with our safari cab. We arrange comfortable, guided trips so you can spot leopards, elephants, and more. Book your safari with us and we&apos;ll take care of the rest.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><HiOutlineCheck className="text-[#028EFC] shrink-0" size={20} /> Safari cab with experienced driver</li>
                <li className="flex items-center gap-2"><HiOutlineCheck className="text-[#028EFC] shrink-0" size={20} /> Half-day and full-day options</li>
                <li className="flex items-center gap-2"><HiOutlineCheck className="text-[#028EFC] shrink-0" size={20} /> Pick-up from hotel</li>
                <li className="flex items-center gap-2"><HiOutlineCheck className="text-[#028EFC] shrink-0" size={20} /> Park entry support when needed</li>
              </ul>
              <div className="mt-8">
                <Link href="/safari/book">
                  <PrimaryButton
                    identifier="safari-cta"
                    buttonText="Book Safari Cab"
                    className="min-w-[200px]"
                  />
                </Link>
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#028EFC]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm reveal-up">
              <h3 className="section-title text-xl font-bold text-[#0f172a] mb-4">Good to Know</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Early morning and late afternoon drives often offer the best wildlife sightings. We recommend booking in advance, especially in peak season. 
                Our team will confirm timing and pick-up with you the day before.
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
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#028EFC]/10 text-[#028EFC] shrink-0">
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
