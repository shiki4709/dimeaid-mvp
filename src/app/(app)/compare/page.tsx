"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function RoundUpPanel() {
  const [showDismiss, setShowDismiss] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDismiss(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col rounded-2xl bg-surface">
      <div className="rounded-t-2xl bg-red-500/15 px-6 py-4">
        <p className="text-center text-base font-bold text-red-400">Today&apos;s Checkout</p>
      </div>

      <div className="space-y-2.5 px-6 py-5 text-base">
        <div className="flex justify-between">
          <span className="text-white/60">Subtotal</span>
          <span>$14.99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Delivery Fee</span>
          <span>$2.99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Service Fee</span>
          <span>$0.75</span>
        </div>
        <div className="border-t border-white/15 pt-2.5">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>$18.73</span>
          </div>
        </div>
      </div>

      {/* Round-up Modal Overlay */}
      <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 backdrop-blur-[2px]">
        <div className="mx-4 w-full max-w-xs rounded-xl bg-[#1C1C1E] p-6 shadow-2xl">
          <p className="text-center text-lg font-bold">
            Would you like to round up $0.37 for hunger relief?
          </p>
          <p className="mt-2 text-center text-sm text-white/50">
            Your spare change can make a difference
          </p>
          <button className="mt-5 w-full rounded-xl bg-[#06C167] py-3.5 font-bold transition-colors">
            Yes, Round Up
          </button>
          <div className="mt-3 flex h-10 items-center justify-center">
            {showDismiss ? (
              <button className="animate-fade-in text-sm text-white/40 transition-colors hover:text-white/60">
                No Thanks
              </button>
            ) : (
              <div className="h-5" />
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
      <div className="rounded-t-2xl bg-dime-teal/15 px-6 py-4">
        <p className="text-center text-base font-bold text-dime-teal">With DIME AID</p>
      </div>

      <div className="space-y-2.5 px-6 py-5 text-base">
        <div className="flex justify-between">
          <span className="text-white/60">Subtotal</span>
          <span>$14.99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Delivery Fee</span>
          <span>$2.99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Service Fee</span>
          <span>$0.75</span>
        </div>
        <div className="flex justify-between">
          <span className="text-dime-teal">Hunger Relief</span>
          <span className="text-dime-teal">$0.10</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-white/40">Platform Fee</span>
          <span className="text-white/40">$0.01</span>
        </div>
        <div className="border-t border-white/15 pt-2.5">
          <div className="flex justify-between text-lg font-bold">
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
        <p className="text-xl font-bold">View this on a larger screen</p>
        <p className="mt-2 text-base text-white/60">
          The side-by-side comparison needs a laptop or tablet.
        </p>
        <Link
          href="/"
          className="mt-6 flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-transform active:scale-95"
        >
          Skip to demo
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Two checkouts. One difference.
        </h1>
        <p className="mt-4 text-lg text-white/60">
          Same order. Same restaurant. Same price. Only one removes the ask.
        </p>
      </div>

      <div className="grid w-full max-w-3xl grid-cols-2 gap-8">
        <RoundUpPanel />
        <DimeAidPanel />
      </div>

      <div className="mt-10 rounded-xl bg-white/5 px-8 py-4 text-center">
        <p className="text-base text-white/70">
          Round-up campaigns:{" "}
          <span className="font-bold text-red-400">~15-30% opt-in</span>
          {"  →  "}
          DIME AID:{" "}
          <span className="font-bold text-dime-green">100% participation</span>
        </p>
      </div>

      <Link
        href="/"
        className="mt-10 flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-transform active:scale-95"
      >
        See the full experience
        <ArrowRight size={20} />
      </Link>

      <p className="mt-6 text-sm text-white/30">
        Simulated data for demonstration purposes
      </p>
    </div>
  );
}
