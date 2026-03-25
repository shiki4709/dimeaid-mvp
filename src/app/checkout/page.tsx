"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, CreditCard, Apple, ChevronRight, MapPin, Clock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { DIME_AID_FEE, restaurants, groceryStores } from "@/lib/data";
import OrderSummary from "@/components/OrderSummary";
import { useState } from "react";

const paymentMethods = [
  { id: "apple-pay", label: "Apple Pay", icon: Apple, selected: true },
  { id: "visa", label: "Visa •••• 4242", icon: CreditCard, selected: false },
  { id: "mastercard", label: "Mastercard •••• 8831", icon: CreditCard, selected: false },
] as const;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, restaurantId, restaurantName, subtotal, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("apple-pay");

  const allStores = [...restaurants, ...groceryStores];
  const restaurant = allStores.find((r) => r.id === restaurantId);
  const deliveryFee = restaurant?.deliveryFee ?? 2.99;
  const serviceFee = Math.round(subtotal * 0.05 * 100) / 100;
  const total = subtotal + deliveryFee + serviceFee + DIME_AID_FEE.total;

  const [isOrdering, setIsOrdering] = useState(false);

  if (items.length === 0 && !isOrdering) {
    router.push("/");
    return null;
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
        <h1 className="text-lg font-bold">Checkout</h1>
      </div>

      {/* Delivery Address */}
      <div className="mt-6 flex items-center justify-between rounded-2xl bg-surface p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
            <MapPin size={18} className="text-white/60" />
          </div>
          <div>
            <p className="text-sm font-semibold">401 Bay Street</p>
            <p className="text-xs text-muted">Toronto, ON M5H 2Y4</p>
          </div>
        </div>
        <ChevronRight size={16} className="text-white/30" />
      </div>

      {/* Delivery Time */}
      <div className="mt-3 flex items-center justify-between rounded-2xl bg-surface p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
            <Clock size={18} className="text-white/60" />
          </div>
          <div>
            <p className="text-sm font-semibold">{restaurant?.deliveryTime ?? "25-35 min"}</p>
            <p className="text-xs text-muted">Standard delivery</p>
          </div>
        </div>
        <ChevronRight size={16} className="text-white/30" />
      </div>

      {/* Payment Method */}
      <div className="mt-6">
        <h2 className="text-sm font-bold text-white/60">Payment method</h2>
        <div className="mt-3 space-y-2">
          {paymentMethods.map((pm) => {
            const Icon = pm.icon;
            const isSelected = selectedPayment === pm.id;
            return (
              <button
                key={pm.id}
                onClick={() => setSelectedPayment(pm.id)}
                className={`flex w-full items-center gap-3 rounded-xl p-3.5 transition-colors ${
                  isSelected
                    ? "bg-white/10 ring-1 ring-white/20"
                    : "bg-surface hover:bg-surface-hover"
                }`}
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  isSelected ? "bg-white/10" : "bg-white/5"
                }`}>
                  <Icon size={18} className={isSelected ? "text-white" : "text-white/50"} />
                </div>
                <span className={`flex-1 text-left text-sm ${isSelected ? "font-semibold" : "text-white/70"}`}>
                  {pm.label}
                </span>
                <div className={`h-5 w-5 rounded-full border-2 ${
                  isSelected
                    ? "border-dime-green bg-dime-green"
                    : "border-white/20"
                }`}>
                  {isSelected && (
                    <div className="flex h-full items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-6 rounded-2xl bg-surface p-4">
        <h2 className="mb-3 text-sm font-bold text-white/60">Order summary</h2>
        <OrderSummary subtotal={subtotal} deliveryFee={deliveryFee} />
      </div>

      {/* Place Order */}
      <button
        onClick={() => {
          setIsOrdering(true);
          const orderRestaurant = restaurantName ?? "";
          const orderTotal = total.toFixed(2);
          clearCart();
          router.push(`/confirmation?restaurant=${encodeURIComponent(orderRestaurant)}&total=${orderTotal}`);
        }}
        className="mt-6 w-full rounded-2xl bg-white py-4 text-center text-base font-bold text-black transition-transform active:scale-[0.98]"
      >
        Place Order
      </button>
    </div>
  );
}
