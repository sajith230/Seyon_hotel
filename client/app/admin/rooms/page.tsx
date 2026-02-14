"use client";

import React, { useState, useEffect, useRef } from "react";
import { getRooms, setRooms, generateId } from "@/lib/storage";
import type { RoomItem, RoomType } from "@/lib/storage";
import { HiOutlinePlus } from "react-icons/hi";

const ROOM_TYPES: { value: RoomType; label: string }[] = [
  { value: "ac", label: "AC Room" },
  { value: "non-ac", label: "Non-AC Room" },
];

export default function AdminRoomsPage() {
  const [rooms, setRoomsState] = useState<RoomItem[]>([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [roomType, setRoomType] = useState<RoomType>("ac");
  const [featuresText, setFeaturesText] = useState("");
  const [tagline, setTagline] = useState("");
  const [imageData, setImageData] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const load = () => setRoomsState(getRooms());
  useEffect(() => load(), []);

  const resetForm = () => {
    setName("");
    setDescription("");
    setRoomType("ac");
    setFeaturesText("");
    setTagline("");
    setImageData("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const features = featuresText
      .split(/[\n,]+/)
      .map((f) => f.trim())
      .filter(Boolean);
    const list = getRooms();
    list.push({
      id: generateId(),
      name: name.trim(),
      type: roomType,
      description: description.trim() || "",
      features,
      tagline: tagline.trim() || undefined,
      image: imageData || undefined,
    });
    setRooms(list);
    setRoomsState(list);
    resetForm();
    setOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => setImageData(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Remove this room from the list?")) return;
    const list = getRooms().filter((r) => r.id !== id);
    setRooms(list);
    setRoomsState(list);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Rooms</h1>
          <p className="text-slate-600">Add and manage rooms. They appear on the client Rooms page.</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#028EFC] text-white font-medium hover:bg-[#0270d4] shrink-0"
        >
          <HiOutlinePlus size={20} />
          Add room
        </button>
      </div>

      {/* Popup modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Add room</h2>
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setOpen(false);
                }}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleAdd} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. AC Room"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Type *</label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value as RoomType)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none"
                >
                  {ROOM_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short description of the room"
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tagline (optional)</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="e.g. Cool comfort"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Features</label>
                <textarea
                  value={featuresText}
                  onChange={(e) => setFeaturesText(e.target.value)}
                  placeholder="One per line or comma-separated (e.g. King bed, AC, Wi-Fi)"
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#028EFC] focus:ring-2 focus:ring-[#028EFC]/20 outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Image (optional)</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full text-sm text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
                />
                {imageData && (
                  <div className="mt-2 relative w-24 h-24 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                    <img src={imageData} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#028EFC] text-white font-medium hover:bg-[#0270d4]"
                >
                  Add room
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setOpen(false);
                  }}
                  className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Rooms table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 p-4 border-b border-slate-100">
          All rooms ({rooms.length})
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left p-3 font-semibold text-slate-700 w-20">Image</th>
                <th className="text-left p-3 font-semibold text-slate-700">Name</th>
                <th className="text-left p-3 font-semibold text-slate-700">Type</th>
                <th className="text-left p-3 font-semibold text-slate-700">Description</th>
                <th className="text-right p-3 font-semibold text-slate-700 w-24">Action</th>
              </tr>
            </thead>
            <tbody>
              {rooms.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    No rooms. Click &quot;Add room&quot; to add one.
                  </td>
                </tr>
              ) : (
                rooms.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="p-3">
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div
                            className={`w-full h-full ${
                              item.type === "ac"
                                ? "bg-gradient-to-br from-[#0d9488] to-[#0f766e]"
                                : "bg-gradient-to-br from-[#1e293b] to-[#334155]"
                            }`}
                          />
                        )}
                      </div>
                    </td>
                    <td className="p-3 font-medium text-slate-900">{item.name}</td>
                    <td className="p-3 text-slate-600">
                      {item.type === "ac" ? "AC" : "Non-AC"}
                    </td>
                    <td className="p-3 text-slate-600 max-w-[200px] truncate">
                      {item.description || "—"}
                    </td>
                    <td className="p-3 text-right">
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-700 font-medium text-xs"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
