"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { setSafariBookings, getSafariBookings, generateId } from "@/lib/storage";
import { HiOutlineCheck } from "react-icons/hi";
import yalaImage from "../../image/yala.jpg";

export default function SafariBookPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const list = getSafariBookings();
    list.push({
      id: generateId(),
      name,
      phone,
      email: email || undefined,
      date,
      time,
      guests,
      notes: notes || undefined,
      createdAt: new Date().toISOString(),
    });
    setSafariBookings(list);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHero title="Safari Yala" subtitle="Book your safari cab." compact image={yalaImage} />
        <section className="py-16 sm:py-20 bg-[var(--background)]">
          <div className="mx-auto max-w-xl px-4 text-center">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-12">
              <div className="w-20 h-20 rounded-full bg-[#0d9488]/20 flex items-center justify-center mx-auto mb-6">
                <HiOutlineCheck className="text-[#0d9488]" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Booking received</h2>
              <p className="mt-4 text-slate-600">
                We have your safari request. We will call you to confirm the date, time, and pick-up.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/safari">
                  <PrimaryButton identifier="safari-back" buttonText="Back to Safari" className="min-w-[180px]" />
                </Link>
                <Link href="/" className="text-slate-600 hover:text-[#028EFC] font-medium">
                  Home
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
      <PageHero title="Book Safari Cab" subtitle="Fill in the form and we will confirm your Yala safari trip." compact image={yalaImage} />
      <section className="py-12 sm:py-16 bg-[var(--background)]">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your name *</label>
              <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. John" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
              <input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. 071 XXX XXXX" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email (optional)</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">Preferred date *</label>
                <input id="date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none" />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-1">Preferred time *</label>
                <select id="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none">
                  <option value="">Select</option>
                  <option value="Early morning (5-6 AM)">Early morning (5-6 AM)</option>
                  <option value="Morning (6-9 AM)">Morning (6-9 AM)</option>
                  <option value="Late morning (9-12 PM)">Late morning (9-12 PM)</option>
                  <option value="Afternoon (12-3 PM)">Afternoon (12-3 PM)</option>
                  <option value="Late afternoon (3-6 PM)">Late afternoon (3-6 PM)</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-slate-700 mb-1">Number of guests *</label>
              <input id="guests" type="number" min={1} max={20} required value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none" />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">Notes (optional)</label>
              <textarea id="notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Half-day / full-day, pick-up location, etc." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none resize-none" />
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <PrimaryButton type="submit" identifier="safari-submit" buttonText="Submit booking" className="min-w-[200px]" />
              <Link href="/safari" className="sm:ml-2 text-slate-600 hover:text-[#028EFC] font-medium py-3">Cancel</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
