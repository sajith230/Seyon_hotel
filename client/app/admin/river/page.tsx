"use client";

import React, { useState, useEffect } from "react";
import { getRiverBookings } from "@/lib/storage";

export default function AdminRiverPage() {
  const [bookings, setBookings] = useState(getRiverBookings());

  useEffect(() => {
    const load = () => setBookings(getRiverBookings());
    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">River Visit Bookings</h1>
      <p className="text-slate-600 mb-8">All Kirindi River visit requests from customers.</p>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="text-left p-4 font-semibold text-slate-700">Submitted</th>
              <th className="text-left p-4 font-semibold text-slate-700">Name</th>
              <th className="text-left p-4 font-semibold text-slate-700">Phone</th>
              <th className="text-left p-4 font-semibold text-slate-700">Visit date</th>
              <th className="text-left p-4 font-semibold text-slate-700">Guests</th>
              <th className="text-left p-4 font-semibold text-slate-700">Notes</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-500">
                  No river visit bookings yet
                </td>
              </tr>
            ) : (
              [...bookings].reverse().map((b) => (
                <tr key={b.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="p-4 text-slate-600">{new Date(b.createdAt).toLocaleString()}</td>
                  <td className="p-4 font-medium text-slate-900">{b.name}</td>
                  <td className="p-4 text-slate-600">{b.phone}</td>
                  <td className="p-4 text-slate-600">{b.date}</td>
                  <td className="p-4 text-slate-600">{b.guests}</td>
                  <td className="p-4 text-slate-600 max-w-[200px]">{b.notes || "—"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
