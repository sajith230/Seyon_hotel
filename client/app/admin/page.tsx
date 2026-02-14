"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getFoodOrders, getSafariBookings, getRiverBookings, getFoods, getRooms } from "@/lib/storage";
import { HiOutlineClipboardList, HiOutlineTruck, HiOutlineSparkles, HiOutlineFire, HiOutlineOfficeBuilding } from "react-icons/hi";

export default function AdminDashboard() {
  const [pendingOrders, setPendingOrders] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [foodCount, setFoodCount] = useState(0);
  const [safariCount, setSafariCount] = useState(0);
  const [riverCount, setRiverCount] = useState(0);

  useEffect(() => {
    const orders = getFoodOrders();
    setPendingOrders(orders.filter((o) => o.status === "pending").length);
    setRoomCount(getRooms().length);
    setFoodCount(getFoods().length);
    setSafariCount(getSafariBookings().length);
    setRiverCount(getRiverBookings().length);
  }, []);

  const cards = [
    { href: "/admin/orders", label: "Pending food orders", value: pendingOrders, icon: HiOutlineClipboardList, color: "bg-amber-500" },
    { href: "/admin/rooms", label: "Rooms", value: roomCount, icon: HiOutlineOfficeBuilding, color: "bg-emerald-500" },
    { href: "/admin/foods", label: "Menu items", value: foodCount, icon: HiOutlineFire, color: "bg-orange-500" },
    { href: "/admin/safari", label: "Safari bookings", value: safariCount, icon: HiOutlineTruck, color: "bg-teal-500" },
    { href: "/admin/river", label: "River visit bookings", value: riverCount, icon: HiOutlineSparkles, color: "bg-blue-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Dashboard</h1>
      <p className="text-slate-600 mb-8">Overview of orders and bookings (frontend-only data).</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-[#028EFC]/30 transition-all flex items-start gap-4"
          >
            <span className={`flex items-center justify-center w-12 h-12 rounded-xl ${card.color} text-white shrink-0`}>
              <card.icon size={24} />
            </span>
            <div>
              <p className="text-slate-600 text-sm">{card.label}</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{card.value}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
