"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { setRiverBookings, getRiverBookings, generateId } from "@/lib/storage";
import { HiOutlineCheck } from "react-icons/hi";
import riverImage from "../../image/ella.jpg";

export default function RiverBookPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const list = getRiverBookings();
    list.push({
      id: generateId(),
      name,
      phone,
      date,
      guests,
      notes: notes || undefined,
      createdAt: new Date().toISOString(),
    });
    setRiverBookings(list);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHero title="Kirindi River" subtitle="Arrange your visit." compact image={riverImage} />
        <section className="py-16 sm:py-20 bg-[var(--background)]">
          <div className="mx-auto max-w-xl px-4 text-center">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-12">
              <div className="w-20 h-20 rounded-full bg-[#0d9488]/20 flex items-center justify-center mx-auto mb-6">
                <HiOutlineCheck className="text-[#0d9488]" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Request received</h2>
              <p className="mt-4 text-slate-600">
                We have your Kirindi River visit request. We&apos;ll call you to confirm the date and arrangements.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/river">
                  <PrimaryButton identifier="river-back" buttonText="Back to River" className="min-w-[180px]" />
                </Link>
                <Link href="/" className="text-slate-600 hover:text-[#028EFC] font-medium">
                  Home →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Arrange River Visit" subtitle="Fill in the form and we'll confirm your Kirindi River visit." compact image={riverImage} />
      <section className="py-12 sm:py-16 bg-[var(--background)]">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your name <span className="text-red-500">*</span></label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone <span className="text-red-500">*</span></label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 071 XXX XXXX"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">Preferred visit date <span className="text-red-500">*</span></label>
              <input
                id="date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none"
              />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-slate-700 mb-1">Number of guests <span className="text-red-500">*</span></label>
              <input
                id="guests"
                type="number"
                min={1}
                max={20}
                required
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none"
              />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">Notes (optional)</label>
              <textarea
                id="notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special requests or questions"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none resize-none"
              />
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <PrimaryButton type="submit" identifier="river-submit" buttonText="Submit request" className="min-w-[200px]" />
              <Link href="/river" className="sm:ml-2 text-slate-600 hover:text-[#028EFC] font-medium py-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
