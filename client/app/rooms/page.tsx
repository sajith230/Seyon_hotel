"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import AnimateInView from "@/components/animations/AnimateInView";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineCloud, HiOutlineSun, HiOutlineCheck, HiOutlineSparkles, HiOutlineTruck, HiOutlineFire } from "react-icons/hi";
import roomImage from "../image/room.jpg";
import { getRooms } from "@/lib/storage";
import type { RoomItem } from "@/lib/storage";

function getRoomStyle(item: RoomItem) {
  if (item.type === "ac") {
    return { icon: HiOutlineCloud, gradient: "from-[#0d9488] via-[#0f766e] to-[#0f172a]" as const };
  }
  return { icon: HiOutlineSun, gradient: "from-[#1e293b] via-[#334155] to-[#0f172a]" as const };
}

const allAmenities = [
  "Private bathroom",
  "Wi-Fi",
  "Clean linen & towels",
  "24/7 hot water",
  "Room service",
  "Safe & secure",
];

const exploreMore = [
  { href: "/safari", label: "Safari Yala", desc: "Cab & tours", icon: HiOutlineTruck },
  { href: "/river", label: "Kirindi River", desc: "Bathing & nature", icon: HiOutlineSparkles },
  { href: "/food", label: "Restaurant", desc: "Dine in or delivery", icon: HiOutlineFire },
];

export default function RoomsPage() {
  const [rooms, setRooms] = useState<RoomItem[]>([]);
  useEffect(() => setRooms(getRooms()), []);

  return (
    <>
      <PageHero
        title="Rooms"
        subtitle="AC & Non-AC — choose what suits you. Clean, comfortable, and ready for your stay."
        compact
        image={roomImage}
      />

      {/* Intro */}
      <section className="py-12 sm:py-16 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-slate-600 leading-relaxed text-lg reveal-up">
              Whether you prefer air-conditioned comfort or naturally cool rooms, we’ve got you covered. 
              Both options include clean facilities, a warm welcome, and easy access to safari, river, and our restaurant.
              </p>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Room cards */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] reveal-up">Rooms for Every Preference</h2>
              <p className="mt-4 text-slate-600 reveal-up reveal-delay-1">Choose between air-conditioned comfort or naturally cool non-AC rooms. Both come with clean facilities and a warm welcome.</p>
            </div>
          </AnimateInView>
          <AnimateInView className="grid md:grid-cols-2 gap-8 lg:gap-12 stagger-children">
            {rooms.length === 0 ? (
              <p className="col-span-full text-center text-slate-500 py-12">No rooms listed yet. Check back soon.</p>
            ) : rooms.map((room) => {
              const { icon: RoomIcon, gradient } = getRoomStyle(room);
              return (
                <div
                  key={room.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift border border-slate-100 flex flex-col reveal-up"
                >
                  {/* Visual block */}
                  <div className={`h-40 sm:h-48 flex-shrink-0 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
                    {room.image ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={room.image}
                          alt={room.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 20V40H20L40 20z'/%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                      </>
                    )}
                    <span className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm text-white">
                      <RoomIcon size={40} />
                    </span>
                    {(room.tagline || room.name) && (
                      <span className="absolute bottom-3 right-4 text-white/90 text-sm font-medium drop-shadow">
                        {room.tagline || room.name}
                      </span>
                    )}
                  </div>
                  <div className="p-8 sm:p-10 flex flex-col flex-1">
                    <h3 className="section-title text-2xl font-bold text-[#0f172a]">
                      {room.name}
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed flex-1">
                      {room.description || "Comfortable room for your stay."}
                    </p>
                    {room.features.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {room.features.map((f) => (
                          <li
                            key={f}
                            className="text-sm bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-6">
                      <PrimaryButton
                        identifier={`room-${room.id}`}
                        buttonText={`Book ${room.name}`}
                        className="min-w-[180px]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimateInView>
        </div>
      </section>

      {/* Amenities strip */}
      <section className="py-12 sm:py-16 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <h2 className="section-title text-xl sm:text-2xl font-bold text-[#0f172a] text-center mb-8 reveal-up">Amenities at a Glance</h2>
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 stagger-children">
            {allAmenities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm text-slate-700 font-medium reveal-up"
              >
                <HiOutlineCheck className="text-[#028EFC] shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
          </AnimateInView>
        </div>
      </section>

      {/* Good to know */}
      <section className="py-12 sm:py-16 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto stagger-children">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm reveal-up">
              <h3 className="section-title text-lg font-bold text-[#0f172a] mb-3">Check-in & stay</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Check-in is flexible — just let us know your arrival time. All rooms are cleaned daily. 
                Need extra towels or room service? Ask at reception or call us.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm reveal-up">
              <h3 className="section-title text-lg font-bold text-[#0f172a] mb-3">Location</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We’re near Yala National Park and Kirindi River — ideal for safari and river visits. 
                Our restaurant is on-site, and we deliver food to your room or arrange safari and river trips.
              </p>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Explore more */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a] reveal-up">What to Do Next</h2>
              <p className="mt-3 text-slate-600 reveal-up reveal-delay-1">Make the most of your stay — safari, river, and great food are just a click away.</p>
            </div>
          </AnimateInView>
          <AnimateInView className="grid sm:grid-cols-3 gap-6 stagger-children">
            {exploreMore.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover-lift text-center reveal-up"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#028EFC]/10 text-[#028EFC] mb-4 group-hover:bg-[#028EFC]/20 transition-colors">
                  <item.icon size={28} />
                </span>
                <span className="font-semibold text-[#0f172a]">{item.label}</span>
                <span className="text-sm text-slate-500 mt-1">{item.desc}</span>
              </Link>
            ))}
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
