"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Star, Clock, Plus, Minus, Heart } from "lucide-react";
import { restaurants } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import DimeAidBadge from "@/components/DimeAidBadge";
import { useState } from "react";

export default function RestaurantPage() {
  const params = useParams();
  const router = useRouter();
  const { items, addItem, updateQuantity } = useCart();
  const [showTooltip, setShowTooltip] = useState(false);

  const restaurant = restaurants.find((r) => r.id === params.id);
  if (!restaurant) return null;

  const getItemQuantity = (itemId: string) =>
    items.find((ci) => ci.item.id === itemId)?.quantity ?? 0;

  return (
    <div className="mx-auto max-w-md">
      {/* Hero Image */}
      <div className="relative h-52 w-full">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          sizes="(max-width: 448px) 100vw, 448px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent" />
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <ArrowLeft size={18} />
        </button>
      </div>

      {/* Restaurant Info */}
      <div className="space-y-4 px-4 pt-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{restaurant.name}</h1>
            <div className="mt-1 flex items-center gap-3 text-sm text-muted">
              <span className="flex items-center gap-1">
                <Star size={14} fill="white" className="text-white" />
                {restaurant.rating}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {restaurant.deliveryTime}
              </span>
            </div>
          </div>
          <DimeAidBadge size="md" />
        </div>

        {/* DIME AID subtle note */}
        <button
          className="flex items-center gap-2 text-left"
          onClick={() => setShowTooltip(!showTooltip)}
        >
          <Heart size={12} className="shrink-0 text-white/30" fill="rgba(255,255,255,0.3)" />
          <span className="text-xs text-white/40">
            10¢ from each order supports local hunger relief
          </span>
        </button>
        {showTooltip && (
          <div className="rounded-lg bg-surface px-3 py-2 text-xs text-white/50">
            10¢ goes directly to certified food banks in your area. 1¢ to platform operations.
          </div>
        )}

        {/* Menu */}
        <div className="space-y-3 pb-4">
          <h2 className="text-lg font-bold">Menu</h2>
          {restaurant.menu.map((item) => {
            const qty = getItemQuantity(item.id);
            return (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl bg-surface p-3 transition-colors"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  {item.popular && (
                    <span className="absolute left-1 top-1 rounded-full bg-dime-green px-1.5 py-0.5 text-[10px] font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p className="mt-0.5 text-xs text-muted line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">${item.price.toFixed(2)}</span>
                    {qty === 0 ? (
                      <button
                        onClick={() => addItem(item, restaurant.id, restaurant.name)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-dime-green text-white transition-transform active:scale-90"
                      >
                        <Plus size={18} />
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, qty - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-5 text-center text-sm font-bold">{qty}</span>
                        <button
                          onClick={() => addItem(item, restaurant.id, restaurant.name)}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-dime-green transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
