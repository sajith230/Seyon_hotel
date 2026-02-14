"use client";

import React from "react";
import Link from "next/link";
import type { FoodItem } from "@/data/foods";
import { FOOD_CATEGORIES } from "@/data/foods";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";

interface FoodGridProps {
  foods: FoodItem[];
  showDescription?: boolean;
  /** Use "list" for sidebar / compact layout (single column). */
  layout?: "grid" | "list";
  /** Show image + Order button on each card (grid only). */
  showOrderButton?: boolean;
  className?: string;
}

export default function FoodGrid({
  foods,
  showDescription = true,
  layout = "grid",
  showOrderButton = false,
  className,
}: FoodGridProps) {
  const byCategory = foods.reduce<Record<string, FoodItem[]>>((acc, item) => {
    const cat = item.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  const order: FoodItem["category"][] = ["breakfast", "main", "sides", "drinks", "desserts"];

  return (
    <div className={cn("space-y-10", className)}>
      {order.map(
        (cat) =>
          byCategory[cat]?.length > 0 && (
            <div key={cat}>
              <h3 className="section-title text-xl font-bold text-[#0f172a] mb-4">
                {FOOD_CATEGORIES[cat]}
              </h3>
              <div
                className={
                  layout === "list"
                    ? "space-y-2"
                    : "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                }
              >
                {byCategory[cat].map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      layout === "grid"
                        ? "bg-white rounded-xl border border-slate-100 overflow-hidden hover-lift flex flex-col"
                        : "flex justify-between items-center gap-2 py-2 border-b border-slate-100 last:border-0"
                    )}
                  >
                    {layout === "grid" && (
                      <>
                        <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-4 sm:p-5 flex flex-col flex-1">
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-semibold text-[#0f172a]">{item.name}</h4>
                            <span className="text-[#028EFC] font-semibold shrink-0">
                              LKR {item.price}
                            </span>
                          </div>
                          {showDescription && (
                            <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                              {item.description}
                            </p>
                          )}
                          {showOrderButton && (
                            <Link href={`/order?item=${item.id}`} className="mt-4">
                              <PrimaryButton
                                identifier={`order-${item.id}`}
                                buttonText="Order"
                                className="w-full mt-auto"
                              />
                            </Link>
                          )}
                        </div>
                      </>
                    )}
                    {layout === "list" && (
                      <>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-[#0f172a]">{item.name}</h4>
                        </div>
                        <span className="text-[#028EFC] font-semibold shrink-0">
                          LKR {item.price}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
}
