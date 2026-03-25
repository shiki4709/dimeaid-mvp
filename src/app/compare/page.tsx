"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

function RoundUpPanel() {
  const [showDismiss, setShowDismiss] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDismiss(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col rounded-2xl bg-surface">
      {/* Header */}
      <div className="rounded-t-2xl bg-red-500/10 px-5 py-3">
        <p className="text-center text-sm font-bold text-red-400">Today&apos;s Checkout</p>
      </div>

      {/* Order Summary */}
      <div className="space-y-2 px-5 py-4 text-sm">
        <div className="flex justify-between">
          <span className="text-white/50">Subtotal</span>
          <span>$14.99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Delivery Fee</span>
          <span>$2.99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Service Fee</span>
          <span>$0.75</span>
        </div>
        <div className="border-t border-white/10 pt-2">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$18.73</span>
          </div>
        </div>
      </div>

      {/* Round-up Modal Overlay */}
      <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 backdrop-blur-[2px]">
        <div className="mx-4 w-full max-w-xs rounded-xl bg-[#1C1C1E] p-5 shadow-2xl">
          <p className="text-center text-base font-bold">
            Would you like to round up $0.37 for hunger relief?
          </p>
          <p className="mt-2 text-center text-xs text-white/40">
            Your spare change can make a difference
          </p>
          <button className="mt-4 w-full rounded-xl bg-[#06C167] py-3 text-sm font-bold transition-colors">
            Yes, Round Up
          </button>
          <div className="mt-2 flex h-10 items-center justify-center">
            {showDismiss ? (
              <button
                className="animate-fade-in text-xs text-white/30 transition-colors hover:text-white/50"
              >
                No Thanks
              </button>
            ) : (
              <div className="h-4" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DimeAidPanel() {
  return (
    <div className="flex flex-col rounded-2xl bg-surface">
      {/* Header */}
      <div className="rounded-t-2xl bg-dime-teal/10 px-5 py-3">
        <p className="text-center text-sm font-bold text-dime-teal">With DIME AID</p>
      </div>

      {/* Order Summary — clean, no interruptions */}
      <div className="space-y-2 px-5 py-4 text-sm">
        <div className="flex justify-between">
          <span className="text-white/50">Subtotal</span>
          <span>$14.99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Delivery Fee</span>
          <span>$2.99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Service Fee</span>
          <span>$0.75</span>
        </div>
        <div className="flex justify-between">
          <span className="text-dime-teal/70">Hunger Relief</span>
          <span className="text-dime-teal/70">$0.10</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-white/25">Platform Fee</span>
          <span className="text-white/25">$0.01</span>
        </div>
        <div className="border-t border-white/10 pt-2">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$18.84</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComparePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="text-lg font-bold">View this comparison on a larger screen</p>
        <p className="mt-2 text-sm text-muted">
          The side-by-side comparison is designed for laptops and tablets.
        </p>
        <Link
          href="/"
          className="mt-6 flex items-center gap-2 rounded-full bg-dime-green px-6 py-3 text-sm font-semibold transition-transform active:scale-95"
        >
          Skip to demo
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-8">
      {/* Title */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Two checkouts. One difference.
        </h1>
        <p className="mt-3 text-base text-white/50">
          Same order. Same restaurant. Same price. Only one removes the ask.
        </p>
      </div>

      {/* Side-by-Side Panels */}
      <div className="grid w-full max-w-3xl grid-cols-2 gap-6">
        <RoundUpPanel />
        <DimeAidPanel />
      </div>

      {/* Key Stat */}
      <div className="mt-8 rounded-xl bg-white/5 px-6 py-3 text-center">
        <p className="text-sm text-white/60">
          Food delivery round-up campaigns:{" "}
          <span className="font-bold text-red-400">~15-30% opt-in</span>
          {"  "}→{"  "}
          DIME AID:{" "}
          <span className="font-bold text-dime-green">100% participation</span>
        </p>
      </div>

      {/* CTA */}
      <Link
        href="/"
        className="mt-8 flex items-center gap-2 rounded-full bg-dime-green px-8 py-3.5 text-base font-bold transition-transform active:scale-95"
      >
        See the full experience
        <ArrowRight size={18} />
      </Link>

      {/* Disclaimer */}
      <p className="mt-6 text-xs text-white/20">
        Simulated data for demonstration purposes
      </p>
    </div>
  );
}
