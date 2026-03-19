"use client";

import React, { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import AnimateInView from "@/components/animations/AnimateInView";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HiMail, HiPhone, HiLocationMarker, HiOutlineCheck } from "react-icons/hi";

const CONTACT_EMAIL = "Surath028@gmail.com";
const CONTACT_PHONE = "0714147193";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Questions, bookings, or custom requests — reach out and we’ll help."
        compact
      />

      <section className="py-12 sm:py-16 bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateInView className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="reveal-up">
              <h2 className="section-title text-2xl sm:text-3xl font-bold text-[#0f172a]">
                Get in touch
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Contact us for room bookings, food delivery, safari cab, and Kirindi River visits.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <HiLocationMarker className="mt-0.5 shrink-0 text-[#028EFC]" size={20} />
                  <div>
                    <p className="font-semibold text-[#0f172a]">Address</p>
                    <p className="text-slate-600">Wellawaya Road, Thanamalwila</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HiPhone className="mt-0.5 shrink-0 text-[#028EFC]" size={20} />
                  <div>
                    <p className="font-semibold text-[#0f172a]">Phone</p>
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="text-slate-600 hover:text-[#028EFC] transition-colors"
                    >
                      071 414 7193
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HiMail className="mt-0.5 shrink-0 text-[#028EFC]" size={20} />
                  <div>
                    <p className="font-semibold text-[#0f172a]">Email</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-slate-600 hover:text-[#028EFC] transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8 reveal-up reveal-delay-1">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-[#0d9488]/20 flex items-center justify-center mx-auto mb-5">
                    <HiOutlineCheck className="text-[#0d9488]" size={34} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message received</h3>
                  <p className="mt-2 text-slate-600">We’ll contact you soon.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setName("");
                      setPhone("");
                      setMessage("");
                      setSubmitted(false);
                    }}
                    className="mt-5 text-sm font-medium text-[#028EFC] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-slate-900">Send a message</h3>
                  <p className="mt-1 text-sm text-slate-500">We usually respond quickly during the day.</p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none"
                        placeholder="07xxxxxxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
                      <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none resize-none"
                        placeholder="How can we help?"
                      />
                    </div>

                    <PrimaryButton
                      identifier="contact-submit"
                      type="submit"
                      buttonText="Send message"
                      className="w-full py-4 text-base"
                    />
                  </form>
                </>
              )}
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}

