"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import AnimateInView from "@/components/animations/AnimateInView";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiOutlineShoppingBag, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineUser, HiOutlineClipboardList } from "react-icons/hi";
import orderImage from "../image/order4.webp";
import { dummyFoods, FOOD_CATEGORIES } from "@/data/foods";
import type { FoodItem } from "@/data/foods";

const PHONE_1 = "0714147193";
const PHONE_2 = "0716256498";

const CATEGORY_ORDER: FoodItem["category"][] = ["breakfast", "main", "sides", "drinks", "desserts"];

function getOrderSummary(cart: Record<string, number>) {
  const lines: { name: string; qty: number; price: number }[] = [];
  let total = 0;
  dummyFoods.forEach((item) => {
    const qty = cart[item.id] || 0;
    if (qty > 0) {
      lines.push({ name: item.name, qty, price: item.price });
      total += item.price * qty;
    }
  });
  return { lines, total };
}

export default function OrderPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [orderItems, setOrderItems] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedOrderSummary, setSubmittedOrderSummary] = useState<{ lines: { name: string; qty: number; price: number }[]; total: number } | null>(null);

  const { lines: orderLines, total: orderTotal } = useMemo(() => getOrderSummary(cart), [cart]);
  const hasCartItems = orderLines.length > 0;

  const setQuantity = (id: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedOrderSummary(getOrderSummary(cart));
    setSubmitted(true);
  };

  if (submitted) {
    const summary = submittedOrderSummary;
    return (
      <>
        <PageHero title="Order Food" subtitle="We deliver to your address." compact />
        <section className="py-16 sm:py-20 bg-[var(--background)]">
          <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-12">
              <div className="w-20 h-20 rounded-full bg-[#0d9488]/20 flex items-center justify-center mx-auto mb-6">
                <HiOutlineShoppingBag className="text-[#0d9488]" size={40} />
              </div>
              <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a]">Order received</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Thank you! We have your delivery details and order. We&apos;ll call you shortly to confirm and then deliver.
              </p>
              {summary && summary.lines.length > 0 && (
                <div className="mt-6 text-left bg-[var(--section-alt)] rounded-xl p-4">
                  <p className="font-semibold text-[#0f172a] mb-2">Your order:</p>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    {summary.lines.map((line) => (
                      <li key={line.name}>
                        {line.qty}× {line.name} — LKR {line.price * line.qty}
                      </li>
                    ))}
                    <li className="pt-2 border-t border-slate-200 font-semibold">Total: LKR {summary.total}</li>
                  </ul>
                </div>
              )}
              <p className="mt-6 text-slate-700 font-medium">Need to reach us?</p>
              <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`tel:${PHONE_1}`} className="inline-flex items-center gap-2 text-[#028EFC] font-medium hover:underline">
                  <HiOutlinePhone size={20} /> 071 414 7193
                </a>
                <a href={`tel:${PHONE_2}`} className="inline-flex items-center gap-2 text-[#028EFC] font-medium hover:underline">
                  <HiOutlinePhone size={20} /> 071 625 6498
                </a>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/">
                  <PrimaryButton identifier="back-home" buttonText="Back to Home" className="min-w-[180px]" />
                </Link>
                <Link href="/food" className="text-slate-600 hover:text-[#028EFC] font-medium transition-colors">View menu →</Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const foodsByCategory = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    label: FOOD_CATEGORIES[cat],
    items: dummyFoods.filter((f) => f.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        title="Order Food"
        subtitle="Select items from the menu, then fill in your delivery details. We’ll confirm & deliver."
        compact
        image={orderImage}
      />

      {/* How it works */}
      <section className="py-10 sm:py-12 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <h2 className="section-title text-xl sm:text-2xl font-bold text-[#0f172a] text-center mb-2 reveal-up">How ordering works</h2>
            <p className="text-slate-600 text-center max-w-xl mx-auto reveal-up reveal-delay-1">
            <strong>1.</strong> Select your items below. <strong>2.</strong> Fill in where to deliver. <strong>3.</strong> We’ll call to confirm and deliver.
            </p>
          </AnimateInView>
        </div>
      </section>

      {/* Menu + Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateInView className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left: Menu + Delivery form */}
            <div className="lg:col-span-3 space-y-8">
              {/* Select from menu */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden reveal-up">
                <div className="px-6 sm:px-8 py-5 border-b border-slate-100 bg-[var(--section-alt)]/50">
                  <h2 className="section-title text-xl font-bold text-[#0f172a] flex items-center gap-2">
                    <HiOutlineClipboardList className="text-[#028EFC]" size={22} />
                    Select from menu
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">Choose quantity for each item. You can add more in the notes below.</p>
                </div>
                <div className="p-6 sm:p-8">
                  {foodsByCategory.map(({ category, label, items }) => (
                    <div key={category} className="mb-8 last:mb-0">
                      <h3 className="section-title text-lg font-bold text-[#0f172a] mb-4">{label}</h3>
                      <ul className="space-y-3">
                        {items.map((item) => (
                          <li
                            key={item.id}
                            className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-slate-100 last:border-0"
                          >
                            <div className="min-w-0">
                              <span className="font-medium text-[#0f172a]">{item.name}</span>
                              <span className="ml-2 text-slate-500 text-sm">LKR {item.price}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => setQuantity(item.id, Math.max(0, (cart[item.id] || 0) - 1))}
                                className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
                              >
                                −
                              </button>
                              <span className="w-8 text-center font-medium text-[#0f172a]">{cart[item.id] || 0}</span>
                              <button
                                type="button"
                                onClick={() => setQuantity(item.id, (cart[item.id] || 0) + 1)}
                                className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
                              >
                                +
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery form */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="px-6 sm:px-8 py-6 border-b border-slate-100 bg-[var(--section-alt)]/50">
                  <h2 className="section-title text-xl font-bold text-[#0f172a] flex items-center gap-2">
                    <HiOutlineLocationMarker className="text-[#028EFC]" size={22} />
                    Delivery details
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">Where should we deliver your order?</p>
                </div>
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your name <span className="text-red-500">*</span></label>
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
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone number <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <HiOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 071 XXX XXXX"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Delivery address / Room no. <span className="text-red-500">*</span></label>
                    <input
                      id="address"
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. Room 12, Sayone Hotel or street address"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-slate-700 mb-1">Area / City</label>
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
                    <label htmlFor="landmark" className="block text-sm font-medium text-slate-700 mb-1">Landmark (optional)</label>
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
                    <label htmlFor="orderItems" className="block text-sm font-medium text-slate-700 mb-1">Additional items or notes (optional)</label>
                    <textarea
                      id="orderItems"
                      rows={2}
                      value={orderItems}
                      onChange={(e) => setOrderItems(e.target.value)}
                      placeholder="Anything not in the menu or special requests"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all resize-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">Delivery instructions (optional)</label>
                    <textarea
                      id="notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Leave at reception / Call when you arrive"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none transition-all resize-none"
                    />
                  </div>
                  <PrimaryButton
                    identifier="order-submit"
                    buttonText={hasCartItems ? "Place order — we'll call to confirm" : "Place order (add items above or in notes)"}
                    type="submit"
                    className="w-full py-4 text-base"
                  />
                </form>
              </div>
            </div>

            {/* Right: Order summary + Help */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden sticky top-24">
                <div className="px-6 py-4 border-b border-slate-100 bg-[#028EFC]/10">
                  <h3 className="section-title font-bold text-[#0f172a]">Your order</h3>
                </div>
                <div className="p-6">
                  {orderLines.length === 0 ? (
                    <p className="text-slate-500 text-sm">No items selected. Use the menu on the left to add items.</p>
                  ) : (
                    <>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {orderLines.map((line) => (
                          <li key={line.name} className="flex justify-between gap-2">
                            <span>{line.qty}× {line.name}</span>
                            <span className="shrink-0">LKR {line.price * line.qty}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 pt-4 border-t border-slate-200 font-bold text-[#0f172a] flex justify-between">
                        <span>Total</span>
                        <span>LKR {orderTotal}</span>
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="bg-[var(--section-alt)] rounded-2xl p-6 sm:p-8 border border-slate-100">
                <h3 className="section-title text-lg font-bold text-[#0f172a] mb-2">Need help?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We’ll call you to confirm items and delivery time. You can also order by phone.
                </p>
                <div className="mt-4 space-y-2">
                  <a href={`tel:${PHONE_1}`} className="flex items-center gap-2 text-[#028EFC] font-medium text-sm hover:underline">
                    <HiOutlinePhone size={18} /> 071 414 7193
                  </a>
                  <a href={`tel:${PHONE_2}`} className="flex items-center gap-2 text-[#028EFC] font-medium text-sm hover:underline">
                    <HiOutlinePhone size={18} /> 071 625 6498
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-[#0f172a] mb-2">Delivery</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We deliver to rooms at Sayone and to nearby addresses. Typical time 30–45 minutes.
                </p>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
