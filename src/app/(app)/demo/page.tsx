import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Clock, Search, ChevronDown, UtensilsCrossed, ShoppingCart, Wine, Pill, Flower2, ShoppingBag, Heart } from "lucide-react";
import { restaurants, groceryStores } from "@/lib/data";
import DimeAidBadge from "@/components/DimeAidBadge";

const uberCategories = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: ShoppingCart, label: "Grocery" },
  { icon: Wine, label: "Alcohol" },
  { icon: Pill, label: "Pharmacy" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Flower2, label: "Flowers" },
] as const;

const foodCategories = ["Pizza", "Chicken", "Tacos", "Burgers", "Sushi", "Grocery", "Convenience"];

function StoreCard({ store }: { store: import("@/lib/data").Restaurant }) {
  return (
    <Link
      href={`/restaurant/${store.id}`}
      className="group block overflow-hidden rounded-2xl bg-surface transition-colors hover:bg-surface-hover"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={store.image}
          alt={store.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 448px) 100vw, 448px"
        />
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
          <Heart size={16} className="text-white" />
        </button>
        <div className="absolute bottom-3 left-3">
          <DimeAidBadge />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-bold">{store.name}</h3>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
            {store.rating}
          </div>
        </div>
        <div className="mt-1.5 flex items-center gap-2 text-xs text-muted">
          <span>{store.deliveryTime}</span>
          <span className="text-white/20">·</span>
          <span>
            {store.deliveryFee === 0
              ? "Free Delivery"
              : `$${store.deliveryFee.toFixed(2)} Delivery Fee`}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 pt-4">
      {/* Location Header */}
      <div className="flex items-center gap-1.5">
        <p className="text-sm font-medium text-muted">Deliver now</p>
        <span className="text-sm text-white/30">·</span>
        <div className="flex items-center gap-0.5">
          <p className="text-sm font-semibold">Toronto, ON</p>
          <ChevronDown size={14} className="text-white/50" />
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3">
        <Search size={18} className="text-muted" />
        <span className="text-sm text-muted">Search Uber Eats...</span>
      </div>

      {/* Uber Category Icons */}
      <div className="hide-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4">
        {uberCategories.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex shrink-0 flex-col items-center gap-1.5 rounded-xl px-4 py-2.5 transition-colors hover:bg-surface"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
              <Icon size={18} className="text-white/70" />
            </div>
            <span className="text-[11px] text-white/60">{label}</span>
          </button>
        ))}
      </div>

      {/* Food Categories */}
      <div className="hide-scrollbar -mx-4 flex gap-2.5 overflow-x-auto px-4">
        {foodCategories.map((cat) => (
          <button
            key={cat}
            className="shrink-0 rounded-full bg-surface px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-surface-hover"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Restaurant Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Nearby Restaurants</h2>
        {restaurants.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>

      {/* Grocery Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Grocery & Essentials</h2>
        {groceryStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
