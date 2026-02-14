"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineShoppingBag, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";

export default function OrderPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHero title="Order Food" subtitle="We deliver to your address." compact />
        <section className="py-16 sm:py-20 bg-[var(--background)]">
          <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-10">
              <div className="w-16 h-16 rounded-full bg-[#0d9488]/20 flex items-center justify-center mx-auto mb-6">
                <HiOutlineShoppingBag className="text-[#0d9488]" size={32} />
              </div>
              <h2 className="section-title text-2xl font-bold text-[#0f172a]">Order received</h2>
              <p className="mt-3 text-slate-600">
                We have your order and delivery details. We&apos;ll confirm by phone shortly. For immediate help, call us at{" "}
                <a href="tel:+94112345678" className="text-[#028EFC] font-medium">+94 11 234 5678</a>.
              </p>
              <Link href="/" className="inline-block mt-8">
                <PrimaryButton identifier="back-home" buttonText="Back to Home" className="min-w-[180px]" />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Order Food"
        subtitle="We deliver to your room or address. Enter your details below."
        compact
      />
      <section className="py-12 sm:py-16 lg:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Delivery form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="px-6 sm:px-8 py-5 border-b border-slate-100">
                  <h2 className="section-title text-xl font-bold text-[#0f172a] flex items-center gap-2">
                    <HiOutlineLocationMarker className="text-[#028EFC]" size={22} />
                    Delivery details
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">Where should we deliver your order?</p>
                </div>
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <HiOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 07X XXX XXXX"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">
                      Street / Building / Room no. <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. Room 12, Sayone Hotel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-slate-700 mb-1">
                      Area / City
                    </label>
                    <input
                      id="area"
                      type="text"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="e.g. Near Yala"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="landmark" className="block text-sm font-medium text-slate-700 mb-1">
                      Landmark (optional)
                    </label>
                    <input
                      id="landmark"
                      type="text"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                      placeholder="e.g. Next to the temple"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">
                      Delivery notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any special instructions?"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all resize-none"
                    />
                  </div>
                  <PrimaryButton
                    identifier="order-submit"
                    buttonText="Place order"
                    type="submit"
                    className="w-full"
                  />
                </form>
              </div>
            </div>

            {/* Help / contact - no menu here; customer already chose on Food page */}
            <div className="lg:col-span-2">
              <div className="bg-[var(--section-alt)] rounded-2xl p-6 sm:p-8 border border-slate-100 sticky top-24">
                <h3 className="section-title text-lg font-bold text-[#0f172a] mb-2">Need help?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Enter your delivery details and place order. We&apos;ll call you to confirm items and delivery time.
                </p>
                <p className="mt-4 text-slate-600 text-sm">
                  Call us:{" "}
                  <a href="tel:+94112345678" className="text-[#028EFC] font-medium">+94 11 234 5678</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
