"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiOutlineTruck,
  HiOutlineSparkles,
  HiOutlineHome,
  HiOutlineFire,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/admin", label: "Dashboard", icon: HiOutlineViewGrid },
  { href: "/admin/rooms", label: "Rooms", icon: HiOutlineOfficeBuilding },
  { href: "/admin/foods", label: "Menu / Foods", icon: HiOutlineFire },
  { href: "/admin/orders", label: "Food Orders", icon: HiOutlineClipboardList },
  { href: "/admin/safari", label: "Safari Bookings", icon: HiOutlineTruck },
  { href: "/admin/river", label: "River Visit Bookings", icon: HiOutlineSparkles },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h1 className="font-bold text-lg text-white">Sayone Admin</h1>
          <p className="text-slate-400 text-sm mt-0.5">Hotel & Restaurant</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {nav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive ? "bg-[#028EFC] text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon size={20} className="shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-700">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <HiOutlineHome size={20} />
            Back to site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 sm:p-8 lg:p-10">{children}</div>
      </main>
    </div>
  );
}
