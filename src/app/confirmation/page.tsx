"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, ChevronRight, MapPin, Heart } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const restaurantName = searchParams.get("restaurant") ?? "Restaurant";
  const total = searchParams.get("total") ?? "0.00";

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 pt-12 text-center">
      {/* Success Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/5">
        <CheckCircle size={40} className="text-dime-green" />
      </div>

      <h1 className="mt-6 text-2xl font-bold">Order Confirmed</h1>
      <p className="mt-2 text-sm text-muted">
        Your order from {restaurantName} is being prepared
      </p>

      {/* Delivery ETA — primary focus like real Uber Eats */}
      <div className="mt-8 w-full rounded-2xl bg-surface p-5">
        <p className="text-xs text-muted">Estimated Delivery</p>
        <p className="mt-1 text-2xl font-bold">25-35 min</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted">
          <MapPin size={12} />
          <span>401 Bay Street, Toronto, ON</span>
        </div>
        <button className="mt-4 flex w-full items-center justify-center gap-1 rounded-xl bg-white/5 py-3 text-sm font-semibold transition-colors hover:bg-white/10">
          Track Order
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Order Total */}
      <div className="mt-3 w-full rounded-2xl bg-surface p-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted">Order Total</span>
          <span className="font-bold">${total}</span>
        </div>
      </div>

      {/* Impact — subtle, warm, one line at the bottom */}
      <Link
        href="/impact"
        className="mt-3 flex w-full items-center gap-3 rounded-2xl bg-surface p-4 text-left transition-colors hover:bg-surface-hover"
      >
        <Heart size={14} className="shrink-0 text-dime-teal/60" fill="rgba(6,182,212,0.6)" />
        <p className="flex-1 text-xs text-white/40">
          Your 10¢ is helping feed a child in Toronto through {restaurantName}
        </p>
        <ChevronRight size={14} className="shrink-0 text-white/20" />
      </Link>

      {/* Back to Home */}
      <button
        onClick={() => router.push("/")}
        className="mt-6 text-sm text-muted transition-colors hover:text-white"
      >
        Back to Home
      </button>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center pt-32 text-muted">Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
