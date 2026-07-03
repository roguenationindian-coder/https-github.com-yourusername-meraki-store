"use client";

import { Heart, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        {/* Logo */}
        <h1 className="font-heading text-3xl tracking-[6px] text-white">
          MERAKI & CO
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 uppercase text-sm tracking-widest text-white">
          <li className="cursor-pointer hover:text-gray-300 transition">Home</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Shop</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Oversized</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Regular</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Hoodies</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 text-white">
          <Heart size={22} className="cursor-pointer hover:scale-110 transition" />
          <ShoppingCart size={22} className="cursor-pointer hover:scale-110 transition" />
          <User size={22} className="cursor-pointer hover:scale-110 transition" />
        </div>

      </nav>
    </header>
  );
}