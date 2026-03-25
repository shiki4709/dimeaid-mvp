"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function FloatingCart() {
  const { totalItems, subtotal } = useCart();

  if (totalItems === 0) return null;

  return (
    <Link
      href="/cart"
      className="fixed bottom-20 left-4 right-4 z-40 mx-auto flex max-w-md items-center justify-between rounded-2xl bg-[#06C167] px-5 py-3.5 shadow-lg shadow-[#06C167]/25 transition-transform active:scale-[0.98]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
          {totalItems}
        </div>
        <span className="font-semibold text-white">View Cart</span>
      </div>
      <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
    </Link>
  );
}
