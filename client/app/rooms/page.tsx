"use client";

import React from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineCloud, HiOutlineSun } from "react-icons/hi";

const rooms = [
  {
    type: "AC Room",
    description: "Cool, comfortable rooms with air conditioning. Perfect for a restful stay after a day of safari or river fun.",
    icon: HiOutlineCloud,
    features: ["King/ Twin beds", "Private bathroom", "AC", "Wi-Fi"],
    cta: "Book AC Room",
  },
  {
    type: "Non-AC Room",
    description: "Spacious, naturally ventilated rooms with ceiling fans. Ideal for guests who prefer a breezy, eco-friendly stay.",
    icon: HiOutlineSun,
    features: ["Comfortable beds", "Private bathroom", "Ceiling fan", "Wi-Fi"],
    cta: "Book Non-AC Room",
  },
];

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title="Rooms"
        subtitle="AC & Non-AC — choose what suits you."
        compact
      />
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">
              Rooms for Every Preference
            </h2>
            <p className="mt-4 text-slate-600">
              Choose between air-conditioned comfort or naturally cool non-AC rooms. Both come with clean facilities and a warm welcome.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {rooms.map((room, i) => (
              <div
                key={room.type}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift border border-slate-100"
              >
                <div className="p-8 sm:p-10">
                  <div className="w-14 h-14 rounded-xl bg-[#028EFC]/10 flex items-center justify-center text-[#028EFC] mb-6">
                    <room.icon size={28} />
                  </div>
                  <h3 className="section-title text-2xl font-bold text-[#0f172a]">
                    {room.type}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {room.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <PrimaryButton
                      identifier={`room-${i}`}
                      buttonText={room.cta}
                      className="min-w-[180px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
