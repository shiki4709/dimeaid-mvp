"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const hiddenPaths = ["/compare", "/how-it-works"];

export default function FloatingCart() {
  const { totalItems, subtotal } = useCart();
  const pathname = usePathname();

  if (totalItems === 0) return null;
  if (hiddenPaths.some((p) => pathname.startsWith(p))) return null;

  return (
    <Link
      href="/cart"
      className="fixed bottom-20 left-4 right-4 z-40 mx-auto flex max-w-md items-center justify-between rounded-2xl bg-white px-5 py-3.5 shadow-lg shadow-black/25 transition-transform active:scale-[0.98]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
          {totalItems}
        </div>
        <span className="font-semibold text-black">View Cart</span>
      </div>
      <span className="font-semibold text-black">${subtotal.toFixed(2)}</span>
    </Link>
  );
}
