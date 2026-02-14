"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineOfficeBuilding, HiOutlineFire, HiOutlineTruck, HiOutlineSparkles, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import heroImage from "./image/hero.jpeg";

const quickLinks = [
  { href: "/rooms", label: "Rooms", desc: "AC & Non-AC", icon: HiOutlineOfficeBuilding },
  { href: "/food", label: "Food", desc: "Restaurant", icon: HiOutlineFire },
  { href: "/safari", label: "Safari Yala", desc: "Cab & tours", icon: HiOutlineTruck },
  { href: "/river", label: "Kirindi River", desc: "Bathing", icon: HiOutlineSparkles },
];

const highlights = [
  "Clean, comfortable AC & Non-AC rooms",
  "Restaurant with Sri Lankan & international food",
  "Safari cab & guided Yala trips",
  "Kirindi River bathing & nature",
];

const dayAtSayone = [
  { time: "Morning", icon: HiOutlineSun, text: "Wake up to a hearty breakfast at our restaurant or in your room. Head out early for a Yala safari — we arrange the cab and guide." },
  { time: "Afternoon", icon: HiOutlineSparkles, text: "Cool off at Kirindi River or relax at the hotel. Order lunch to your room or enjoy it at the restaurant." },
  { time: "Evening", icon: HiOutlineMoon, text: "Unwind with dinner and a quiet night. We deliver food anytime — just call or place your order online." },
];

export default function Home() {
  return (
    <>
      {/* Hero with SayONE logo from app/image/hero.jpeg */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex flex-col items-center justify-center overflow-hidden bg-black py-16 sm:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <div className="w-full max-w-2xl lg:max-w-3xl animate-fade-in opacity-0 animation-delay-100">
            <Image
              src={heroImage}
              alt="SayONE Chinese Hotel & Restaurant"
              width={heroImage.width}
              height={heroImage.height}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <p className="mt-6 max-w-xl mx-auto text-slate-300 text-sm sm:text-base animate-fade-in-up opacity-0 animation-delay-200">
            Stay in comfort, taste authentic flavours, and explore Yala safari & Kirindi River. We deliver food to your room or doorstep.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-300">
            <Link href="/rooms" className="w-full sm:w-auto">
              <PrimaryButton identifier="hero-cta" buttonText="Explore Rooms" className="min-w-[200px]" />
            </Link>
            <Link
              href="/food"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-white/80 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors min-w-[200px]"
            >
              Restaurant
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/90 text-sm">
            <a href="tel:0714147193" className="flex items-center gap-2 hover:text-[var(--gold-light)] transition-colors">
              <HiOutlinePhone size={18} />
              071 414 7193
            </a>
            <a href="tel:0716256498" className="flex items-center gap-2 hover:text-[var(--gold-light)] transition-colors">
              <HiOutlinePhone size={18} />
              071 625 6498
            </a>
          </div>
        </div>
      </section>

      {/* Why Sayone */}
      <section className="py-16 sm:py-20 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">
              Why Stay at Sayone
            </h2>
            <p className="mt-4 text-slate-600">
              One place for rest, food, and adventure — right at the gateway to Yala and Kirindi.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm">
              <h3 className="section-title font-bold text-lg text-[#0f172a]">Comfortable Rooms</h3>
              <p className="mt-2 text-slate-600 text-sm">AC or Non-AC, clean and cosy. Rest well after a day out.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm">
              <h3 className="section-title font-bold text-lg text-[#0f172a]">Restaurant & Delivery</h3>
              <p className="mt-2 text-slate-600 text-sm">Fresh Sri Lankan and international food. Dine in or get it delivered.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm">
              <h3 className="section-title font-bold text-lg text-[#0f172a]">Yala Safari</h3>
              <p className="mt-2 text-slate-600 text-sm">Cab and tours to Yala. We help you plan your safari trip.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm">
              <h3 className="section-title font-bold text-lg text-[#0f172a]">Kirindi River</h3>
              <p className="mt-2 text-slate-600 text-sm">Bathing and nature by the river. Relax and unwind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16 sm:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a]">
              Explore Sayone
            </h2>
            <p className="mt-2 text-slate-600">Choose where you want to go</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover-lift text-center"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#028EFC]/10 text-[#028EFC] mb-4 group-hover:bg-[#028EFC]/20 transition-colors">
                  <link.icon size={28} />
                </span>
                <span className="font-semibold text-[#0f172a]">{link.label}</span>
                <span className="text-sm text-slate-500 mt-1">{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer - bullet list */}
      <section className="py-12 sm:py-16 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-xl sm:text-2xl font-bold text-[#0f172a] text-center mb-8">
            What We Offer
          </h2>
          <ul className="max-w-2xl mx-auto space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#028EFC] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Your day at Sayone */}
      <section className="py-16 sm:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a]">
              A Day at Sayone
            </h2>
            <p className="mt-4 text-slate-600">
              From safari at dawn to dinner at your room — here’s how a typical day can look.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dayAtSayone.map((item) => (
              <div key={item.time} className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#028EFC]/10 text-[#028EFC]">
                    <item.icon size={24} />
                  </span>
                  <h3 className="section-title font-bold text-lg text-[#0f172a]">{item.time}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="py-16 sm:py-20 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a]">
              Get in Touch
            </h2>
            <p className="mt-4 text-slate-600">
              Book a room, arrange a safari, or dine with us — we’re here to help.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-700">
              <a href="tel:+94112345678" className="flex items-center gap-2 hover:text-[#028EFC] transition-colors">
                <HiOutlinePhone size={22} />
                <span>+94 11 234 5678</span>
              </a>
              <span className="flex items-center gap-2">
                <HiOutlineLocationMarker size={22} className="text-[#028EFC]" />
                <span>Near Yala, Sri Lanka</span>
              </span>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/rooms" className="w-full sm:w-auto">
                <PrimaryButton identifier="home-book" buttonText="View Rooms" className="min-w-[160px]" />
              </Link>
              <Link href="/food" className="text-slate-600 hover:text-[#028EFC] font-medium transition-colors">
                Restaurant →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
