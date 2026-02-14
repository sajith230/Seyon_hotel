"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AnimateInView from "@/components/animations/AnimateInView";
import { HiOutlineOfficeBuilding, HiOutlineFire, HiOutlineTruck, HiOutlineSparkles, HiOutlineShoppingBag, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import heroImage from "./image/hero.jpeg";
import roomImage from "./image/room.jpg";
import foodImage from "./image/food1.webp";
import safariImage from "./image/yala.jpg";
import riverImage from "./image/kiridi2.jpg";
import orderImage from "./image/order4.webp";

const quickLinks = [
  { href: "/rooms", label: "Rooms", desc: "AC & Non-AC", icon: HiOutlineOfficeBuilding, image: roomImage },
  { href: "/food", label: "Food", desc: "Restaurant", icon: HiOutlineFire, image: foodImage },
  { href: "/safari", label: "Safari Yala", desc: "Cab & tours", icon: HiOutlineTruck, image: safariImage },
  { href: "/river", label: "Kirindi River", desc: "Bathing", icon: HiOutlineSparkles, image: riverImage },
  { href: "/order", label: "Order Food", desc: "We deliver", icon: HiOutlineShoppingBag, image: orderImage },
];

const whySayone = [
  { title: "Comfortable Rooms", text: "AC or Non-AC, clean and cosy. Rest well after a day out.", image: roomImage },
  { title: "Restaurant & Delivery", text: "Fresh Sri Lankan and international food. Dine in or get it delivered.", image: foodImage },
  { title: "Yala Safari", text: "Cab and tours to Yala. We help you plan your safari trip.", image: safariImage },
  { title: "Kirindi River", text: "Bathing and nature by the river. Relax and unwind.", image: riverImage },
];

const highlights = [
  "Clean, comfortable AC & Non-AC rooms",
  "Restaurant with Sri Lankan & international food",
  "Safari cab & guided Yala trips",
  "Kirindi River bathing & nature",
  "Food delivery to your room or address",
];

const dayAtSayone = [
  { time: "Morning", icon: HiOutlineSun, text: "Wake up to a hearty breakfast at our restaurant or in your room. Head out early for a Yala safari — we arrange the cab and guide." },
  { time: "Afternoon", icon: HiOutlineSparkles, text: "Cool off at Kirindi River or relax at the hotel. Order lunch to your room or enjoy it at the restaurant." },
  { time: "Evening", icon: HiOutlineMoon, text: "Unwind with dinner and a quiet night. We deliver food anytime — just call or place your order online." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900 py-20 sm:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={roomImage}
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <div className="w-full max-w-xl lg:max-w-2xl animate-fade-in opacity-0 animation-delay-100">
            <Image
              src={heroImage}
              alt="SayONE Chinese Hotel & Restaurant"
              width={heroImage.width}
              height={heroImage.height}
              className="w-full h-auto object-contain drop-shadow-lg"
              priority
            />
          </div>
          <p className="mt-6 max-w-xl mx-auto text-slate-200 text-base sm:text-lg animate-fade-in-up opacity-0 animation-delay-200">
            Stay in comfort, taste authentic flavours, and explore Yala safari & Kirindi River. We deliver food to your room or doorstep.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-300">
            <Link href="/rooms" className="w-full sm:w-auto">
              <PrimaryButton identifier="hero-cta" buttonText="Explore Rooms" className="min-w-[200px]" />
            </Link>
            <Link href="/order" className="w-full sm:w-auto">
              <PrimaryButton identifier="hero-order" buttonText="Order Food" className="min-w-[200px]" />
            </Link>
            <Link
              href="/food"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-white/80 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors min-w-[200px]"
            >
              Restaurant
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm">
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

      {/* Why Sayone — image cards */}
      <section className="py-16 sm:py-20 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] reveal-up">
                Why Stay at Sayone
              </h2>
              <p className="mt-4 text-slate-600 reveal-up reveal-delay-1">
                One place for rest, food, and adventure — right at the gateway to Yala and Kirindi.
              </p>
            </div>
          </AnimateInView>
          <AnimateInView className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stagger-children">
            {whySayone.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm reveal-up hover-lift group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="section-title font-bold text-lg text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </AnimateInView>
        </div>
      </section>

      {/* Explore Sayone — image cards with overlay */}
      <section className="py-16 sm:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <div className="text-center mb-14">
              <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a] reveal-up">
                Explore Sayone
              </h2>
              <p className="mt-2 text-slate-600 reveal-up reveal-delay-1">Choose where you want to go</p>
            </div>
          </AnimateInView>
          <AnimateInView className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 stagger-children">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover-lift reveal-up"
              >
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={link.image}
                    alt={link.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                    <span className="font-semibold text-white text-lg drop-shadow-md">{link.label}</span>
                    <span className="text-sm text-white/90 mt-0.5">{link.desc}</span>
                  </div>
                </div>
              </Link>
            ))}
          </AnimateInView>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-14 sm:py-16 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <h2 className="section-title text-xl sm:text-2xl font-bold text-[#0f172a] text-center mb-8 reveal-up">
              What We Offer
            </h2>
            <ul className="max-w-2xl mx-auto space-y-3 stagger-children">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 reveal-up">
                  <span className="w-2 h-2 rounded-full bg-[#028EFC] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateInView>
        </div>
      </section>

      {/* A Day at Sayone */}
      <section className="py-16 sm:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a] reveal-up">A Day at Sayone</h2>
              <p className="mt-4 text-slate-600 reveal-up reveal-delay-1">From safari at dawn to dinner at your room — here&apos;s how a typical day can look.</p>
            </div>
          </AnimateInView>
          <AnimateInView className="grid md:grid-cols-3 gap-8 stagger-children">
            {dayAtSayone.map((item) => (
              <div key={item.time} className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm reveal-up hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#028EFC]/10 text-[#028EFC]">
                    <item.icon size={24} />
                  </span>
                  <h3 className="section-title font-bold text-lg text-[#0f172a]">{item.time}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </AnimateInView>
        </div>
      </section>

      {/* Get in touch */}
      <section className="py-16 sm:py-20 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a] reveal-up">Get in Touch</h2>
              <p className="mt-4 text-slate-600 reveal-up reveal-delay-1">Book a room, order food, arrange a safari, or dine with us — we&apos;re here to help.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-700 reveal-up reveal-delay-2">
                <a href="tel:0714147193" className="flex items-center gap-2 hover:text-[#028EFC] transition-colors">
                  <HiOutlinePhone size={22} />
                  071 414 7193
                </a>
                <a href="tel:0716256498" className="flex items-center gap-2 hover:text-[#028EFC] transition-colors">
                  <HiOutlinePhone size={22} />
                  071 625 6498
                </a>
                <span className="flex items-center gap-2">
                  <HiOutlineLocationMarker size={22} className="text-[#028EFC]" />
                  Near Yala, Sri Lanka
                </span>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up reveal-delay-2">
                <Link href="/rooms" className="w-full sm:w-auto">
                  <PrimaryButton identifier="home-book" buttonText="View Rooms" className="min-w-[160px]" />
                </Link>
                <Link href="/order" className="text-slate-600 hover:text-[#028EFC] font-medium transition-colors">
                  Order Food →
                </Link>
                <Link href="/food" className="text-slate-600 hover:text-[#028EFC] font-medium transition-colors">
                  Restaurant →
                </Link>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
