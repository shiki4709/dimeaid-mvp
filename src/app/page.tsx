import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Clock, Search, ChevronDown } from "lucide-react";
import { restaurants } from "@/lib/data";
import DimeAidBadge from "@/components/DimeAidBadge";

const categories = ["Pizza", "Chicken", "Tacos", "Burgers", "Sushi", "Chinese", "Indian"];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 pt-4">
      {/* Location Header */}
      <div className="flex items-center gap-1.5">
        <p className="text-sm font-medium text-muted">Deliver now</p>
        <span className="text-sm text-white/30">·</span>
        <div className="flex items-center gap-0.5">
          <p className="text-sm font-semibold">Dallas, TX</p>
          <ChevronDown size={14} className="text-white/50" />
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3">
        <Search size={18} className="text-muted" />
        <span className="text-sm text-muted">Search restaurants, food...</span>
      </div>

      {/* Categories */}
      <div className="hide-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4">
        {categories.map((cat) => (
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
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            href={`/restaurant/${restaurant.id}`}
            className="group block overflow-hidden rounded-2xl bg-surface transition-colors hover:bg-surface-hover"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 448px) 100vw, 448px"
              />
              <div className="absolute bottom-3 right-3">
                <DimeAidBadge />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-bold">{restaurant.name}</h3>
                <div className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium">
                  <Star size={12} fill="white" />
                  {restaurant.rating}
                </div>
              </div>
              <div className="mt-1.5 flex items-center gap-3 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {restaurant.deliveryTime}
                </span>
                <span>
                  {restaurant.deliveryFee === 0
                    ? "Free Delivery"
                    : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
