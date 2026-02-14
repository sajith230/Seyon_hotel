"use client";

import React from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function OrderFood() {
  return (
    <section id="order" className="py-16 sm:py-20 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#028EFC]/10 text-[#028EFC] mb-6">
            <HiOutlineShoppingBag size={32} />
          </div>
          <p className="text-[#028EFC] font-medium uppercase tracking-widest text-sm mb-2">
            Delivery
          </p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a]">
            Order Food — We Deliver
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Staying in your room or at the river? Order from our restaurant and we&apos;ll deliver to your room or wherever you are. Just let us know your order and location.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton
              identifier="order-cta"
              buttonText="Order Now"
              className="min-w-[200px]"
            />
            <a
              href="tel:+94112345678"
              className="text-slate-600 hover:text-[#028EFC] font-medium transition-colors"
            >
              Or call: +94 11 234 5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
