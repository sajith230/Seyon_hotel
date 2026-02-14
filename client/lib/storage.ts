/**
 * Frontend-only storage keys and helpers for admin/customer data.
 * Replace with API calls when backend is ready.
 */

import type { FoodItem } from "@/data/foods";
import { dummyFoods } from "@/data/foods";

export const STORAGE_KEYS = {
  FOOD_ORDERS: "sayone_food_orders",
  SAFARI_BOOKINGS: "sayone_safari_bookings",
  RIVER_BOOKINGS: "sayone_river_bookings",
  FOODS: "sayone_foods",
  ROOMS: "sayone_rooms",
} as const;

export type FoodOrderLine = { name: string; qty: number; price: number };

export interface FoodOrder {
  id: string;
  name: string;
  phone: string;
  address: string;
  area?: string;
  landmark?: string;
  lines: FoodOrderLine[];
  total: number;
  status: "pending" | "accepted";
  notes?: string;
  createdAt: string;
}

export interface SafariBooking {
  id: string;
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  createdAt: string;
}

export interface RiverBooking {
  id: string;
  name: string;
  phone: string;
  date: string;
  guests: number;
  notes?: string;
  createdAt: string;
}

export type RoomType = "ac" | "non-ac";

export interface RoomItem {
  id: string;
  name: string;
  type: RoomType;
  description: string;
  features: string[];
  image?: string;
  tagline?: string;
}

function safeJsonParse<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function safeJsonSet(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (_) {}
}

export function getFoodOrders(): FoodOrder[] {
  return safeJsonParse(STORAGE_KEYS.FOOD_ORDERS, []);
}

export function setFoodOrders(orders: FoodOrder[]) {
  safeJsonSet(STORAGE_KEYS.FOOD_ORDERS, orders);
}

export function getSafariBookings(): SafariBooking[] {
  return safeJsonParse(STORAGE_KEYS.SAFARI_BOOKINGS, []);
}

export function setSafariBookings(bookings: SafariBooking[]) {
  safeJsonSet(STORAGE_KEYS.SAFARI_BOOKINGS, bookings);
}

export function getRiverBookings(): RiverBooking[] {
  return safeJsonParse(STORAGE_KEYS.RIVER_BOOKINGS, []);
}

export function setRiverBookings(bookings: RiverBooking[]) {
  safeJsonSet(STORAGE_KEYS.RIVER_BOOKINGS, bookings);
}

export function generateId(): string {
  return `id_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

/** Get all food items; seeds from dummyFoods if localStorage is empty. */
export function getFoods(): FoodItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FOODS);
    if (raw) {
      const parsed = JSON.parse(raw) as FoodItem[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    const seed = [...dummyFoods];
    safeJsonSet(STORAGE_KEYS.FOODS, seed);
    return seed;
  } catch {
    const seed = [...dummyFoods];
    safeJsonSet(STORAGE_KEYS.FOODS, seed);
    return seed;
  }
}

export function setFoods(items: FoodItem[]) {
  safeJsonSet(STORAGE_KEYS.FOODS, items);
}

const seedRooms: RoomItem[] = [
  {
    id: "room_ac",
    name: "AC Room",
    type: "ac",
    description: "Cool, comfortable rooms with air conditioning. Perfect for a restful stay after a day of safari or river fun.",
    features: ["King/ Twin beds", "Private bathroom", "AC", "Wi-Fi"],
    tagline: "Cool comfort",
  },
  {
    id: "room_nonac",
    name: "Non-AC Room",
    type: "non-ac",
    description: "Spacious, naturally ventilated rooms with ceiling fans. Ideal for guests who prefer a breezy, eco-friendly stay.",
    features: ["Comfortable beds", "Private bathroom", "Ceiling fan", "Wi-Fi"],
    tagline: "Natural breeze",
  },
];

/** Get all rooms; seeds default AC/Non-AC if localStorage is empty. */
export function getRooms(): RoomItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ROOMS);
    if (raw) {
      const parsed = JSON.parse(raw) as RoomItem[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    const seed = [...seedRooms];
    safeJsonSet(STORAGE_KEYS.ROOMS, seed);
    return seed;
  } catch {
    const seed = [...seedRooms];
    safeJsonSet(STORAGE_KEYS.ROOMS, seed);
    return seed;
  }
}

export function setRooms(rooms: RoomItem[]) {
  safeJsonSet(STORAGE_KEYS.ROOMS, rooms);
}
