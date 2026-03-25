"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { DIME_AID_FEE, restaurants } from "@/lib/data";
import OrderSummary from "@/components/OrderSummary";

export default function CartPage() {
  const router = useRouter();
  const { items, restaurantId, restaurantName, subtotal, updateQuantity, removeItem, clearCart } = useCart();

  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const deliveryFee = restaurant?.deliveryFee ?? 2.99;
  const serviceFee = Math.round(subtotal * 0.05 * 100) / 100;
  const total = subtotal + deliveryFee + serviceFee + DIME_AID_FEE.total;

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center justify-center px-4 pt-32 text-center">
        <div className="text-5xl">🛒</div>
        <h2 className="mt-4 text-lg font-bold">Your cart is empty</h2>
        <p className="mt-1 text-sm text-muted">Add items from a restaurant to get started</p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 rounded-full bg-dime-green px-6 py-3 text-sm font-semibold transition-transform active:scale-95"
        >
          Browse Restaurants
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 pt-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface transition-colors hover:bg-surface-hover"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold">Your Order</h1>
          <p className="text-xs text-muted">{restaurantName}</p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-red-400 transition-colors hover:text-red-300"
        >
          Clear
        </button>
      </div>

      {/* Items */}
      <div className="mt-6 space-y-3">
        {items.map((ci) => (
          <div key={ci.item.id} className="flex items-center gap-3 rounded-xl bg-surface p-3">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
              <Image src={ci.item.image} alt={ci.item.name} fill className="object-cover" sizes="64px" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold">{ci.item.name}</h3>
              <p className="text-sm font-bold text-white/80">${(ci.item.price * ci.quantity).toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                {ci.quantity === 1 ? <Trash2 size={13} className="text-red-400" /> : <Minus size={13} />}
              </button>
              <span className="w-5 text-center text-sm font-bold">{ci.quantity}</span>
              <button
                onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-dime-green transition-colors"
              >
                <Plus size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-6 rounded-2xl bg-surface p-4">
        <OrderSummary subtotal={subtotal} deliveryFee={deliveryFee} />
      </div>

      {/* Go to Checkout */}
      <button
        onClick={() => router.push("/checkout")}
        className="mt-6 w-full rounded-2xl bg-white py-4 text-center text-base font-bold text-black transition-transform active:scale-[0.98]"
      >
        Go to Checkout — ${total.toFixed(2)}
      </button>
    </div>
  );
}
