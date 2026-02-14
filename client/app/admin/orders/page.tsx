"use client";

import React, { useState, useEffect } from "react";
import { getFoodOrders, setFoodOrders, type FoodOrder } from "@/lib/storage";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<FoodOrder[]>([]);

  const load = () => setOrders(getFoodOrders());
  useEffect(() => load(), []);

  const pending = orders.filter((o) => o.status === "pending");
  const accepted = orders.filter((o) => o.status === "accepted");

  const acceptOrder = (id: string) => {
    const next = orders.map((o) => (o.id === id ? { ...o, status: "accepted" as const } : o));
    setFoodOrders(next);
    setOrders(next);
  };

  const Table = ({ list, showAccept }: { list: FoodOrder[]; showAccept?: boolean }) => (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="text-left p-4 font-semibold text-slate-700">Date</th>
            <th className="text-left p-4 font-semibold text-slate-700">Name</th>
            <th className="text-left p-4 font-semibold text-slate-700">Phone</th>
            <th className="text-left p-4 font-semibold text-slate-700">Address</th>
            <th className="text-left p-4 font-semibold text-slate-700">Order</th>
            <th className="text-right p-4 font-semibold text-slate-700">Total</th>
            {showAccept && <th className="text-right p-4 font-semibold text-slate-700">Action</th>}
          </tr>
        </thead>
        <tbody>
          {list.length === 0 ? (
            <tr>
              <td colSpan={showAccept ? 7 : 6} className="p-8 text-center text-slate-500">
                No orders
              </td>
            </tr>
          ) : (
            list.map((o) => (
              <tr key={o.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                <td className="p-4 text-slate-600">{new Date(o.createdAt).toLocaleString()}</td>
                <td className="p-4 font-medium text-slate-900">{o.name}</td>
                <td className="p-4 text-slate-600">{o.phone}</td>
                <td className="p-4 text-slate-600 max-w-[180px] truncate" title={o.address}>{o.address}</td>
                <td className="p-4 text-slate-600">
                  <ul className="space-y-0.5">
                    {o.lines.map((l) => (
                      <li key={l.name}>{l.qty}× {l.name}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-4 text-right font-semibold text-slate-900">LKR {o.total}</td>
                {showAccept && (
                  <td className="p-4 text-right">
                    <button
                      type="button"
                      onClick={() => acceptOrder(o.id)}
                      className="px-4 py-2 rounded-lg bg-[#028EFC] text-white text-sm font-medium hover:bg-[#0270d4]"
                    >
                      Accept
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Food Orders</h1>
      <p className="text-slate-600 mb-8">Accept pending orders; accepted orders are listed below.</p>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Pending ({pending.length})</h2>
        <Table list={pending} showAccept />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Accepted ({accepted.length})</h2>
        <Table list={accepted} />
      </section>
    </div>
  );
}
