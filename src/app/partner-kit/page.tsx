"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

/* ── Window Sticker Mockup ───────────────────────────── */
function WindowSticker() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-64 rounded-2xl border-2 border-dime-green/30 bg-gradient-to-b from-dime-green/10 to-transparent p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-dime-green/20">
          <Heart size={28} className="text-dime-green" fill="#06C167" />
        </div>
        <p className="mt-4 text-lg font-bold text-dime-green">DIME AID</p>
        <p className="mt-0.5 text-xs font-medium tracking-wider text-dime-green/70">PARTNER</p>
        <div className="mx-auto mt-4 h-px w-12 bg-dime-green/20" />
        <p className="mt-4 text-xs leading-relaxed text-white/40">
          Every order at this location<br />
          automatically helps feed<br />
          someone in your community.
        </p>
      </div>
      <p className="mt-3 text-xs text-white/30">Window / Door Sticker</p>
    </div>
  );
}

/* ── Counter Card Mockup ─────────────────────────────── */
function CounterCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-64 rounded-2xl bg-surface p-6 text-center">
        <Heart size={20} className="mx-auto text-dime-green" fill="#06C167" />
        <p className="mt-3 text-sm font-bold">Your order just helped<br />feed a child.</p>
        <div className="mx-auto mt-4 rounded-xl bg-dime-green/10 px-4 py-3">
          <p className="text-2xl font-bold text-dime-green">10¢</p>
          <p className="text-[11px] text-white/40">from this order went to a<br />local food bank</p>
        </div>
        <p className="mt-4 text-[10px] text-white/20">Powered by DIMETECH</p>
      </div>
      <p className="mt-3 text-xs text-white/30">Counter / Table Card</p>
    </div>
  );
}

/* ── Digital Badge Mockup ────────────────────────────── */
function DigitalBadge() {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-3">
        {/* Large badge */}
        <div className="flex items-center gap-2.5 rounded-full bg-dime-green/15 px-5 py-2.5">
          <Heart size={16} className="text-dime-green" fill="#06C167" />
          <span className="text-sm font-semibold text-dime-green">DIME AID Partner</span>
        </div>
        {/* Small badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
            <Heart size={10} className="text-dime-green" fill="#06C167" />
            <span className="text-xs font-medium text-dime-green">DIME AID</span>
          </div>
        </div>
        {/* Icon only */}
        <div className="flex justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dime-green/20">
            <Heart size={14} className="text-dime-green" fill="#06C167" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-white/30">Digital Badges (App / Web)</p>
    </div>
  );
}

/* ── Receipt Footer Mockup ───────────────────────────── */
function ReceiptFooter() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-56 rounded-xl bg-white px-5 py-4 font-mono text-black">
        <div className="space-y-0.5 text-[10px] text-black/40">
          <div className="flex justify-between">
            <span>Subtotal</span><span>$14.99</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span><span>$2.99</span>
          </div>
          <div className="flex justify-between">
            <span>Service Fee</span><span>$0.75</span>
          </div>
        </div>
        <div className="my-2 border-t border-dashed border-black/10" />
        <div className="flex justify-between text-[10px] text-emerald-700">
          <span>Hunger Relief</span><span>$0.10</span>
        </div>
        <div className="flex justify-between text-[10px] text-black/20">
          <span>Platform Fee</span><span>$0.01</span>
        </div>
        <div className="my-2 border-t border-black/10" />
        <div className="flex justify-between text-xs font-bold">
          <span>TOTAL</span><span>$18.84</span>
        </div>
        <div className="mt-3 border-t border-dashed border-black/10 pt-3 text-center">
          <p className="text-[9px] text-emerald-700">
            ♥ 10¢ from this order helps feed
          </p>
          <p className="text-[9px] text-emerald-700">
            someone in your community
          </p>
          <p className="mt-1 text-[8px] text-black/25">dimeaid.org</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-white/30">Receipt Footer</p>
    </div>
  );
}

/* ── Uber Ride Screen Mockup ─────────────────────────── */
function RideScreen() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-56 rounded-2xl bg-surface p-4">
        <p className="text-xs text-white/40">Trip Complete</p>
        <p className="mt-1 text-lg font-bold">$23.40</p>
        <div className="mt-3 space-y-1.5 text-[11px]">
          <div className="flex justify-between text-white/40">
            <span>Base fare</span><span>$18.50</span>
          </div>
          <div className="flex justify-between text-white/40">
            <span>Booking fee</span><span>$3.80</span>
          </div>
          <div className="flex justify-between text-white/40">
            <span>HST</span><span>$0.99</span>
          </div>
          <div className="flex justify-between text-dime-teal/70">
            <span>Hunger Relief</span><span>$0.10</span>
          </div>
          <div className="flex justify-between text-white/20 text-[10px]">
            <span>Platform Fee</span><span>$0.01</span>
          </div>
        </div>
        <div className="mt-3 border-t border-white/10 pt-2">
          <div className="flex justify-between text-sm font-bold">
            <span>Total</span><span>$23.40</span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-dime-teal/10 px-2 py-1.5">
          <Heart size={10} className="text-dime-teal" fill="rgba(6,182,212,0.8)" />
          <p className="text-[10px] text-white/40">
            Your 10¢ is feeding someone in Toronto
          </p>
        </div>
      </div>
      <p className="mt-3 text-xs text-white/30">Uber Rides Receipt</p>
    </div>
  );
}

/* ── Grocery Bag Sticker Mockup ──────────────────────── */
function GrocerySticker() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-48 w-44 flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/15 bg-surface/50 p-4 text-center">
        <Heart size={22} className="text-dime-green" fill="#06C167" />
        <p className="mt-2 text-xs font-bold text-dime-green">DIME AID</p>
        <p className="mt-2 text-[10px] leading-relaxed text-white/40">
          This delivery helped<br />
          feed a family in<br />
          your neighbourhood.
        </p>
        <p className="mt-3 text-[9px] text-white/20">dimeaid.org</p>
      </div>
      <p className="mt-3 text-xs text-white/30">Delivery Bag Sticker</p>
    </div>
  );
}

export default function PartnerKitPage() {
  return (
    <div className="min-h-dvh px-6 py-10 md:px-12">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white">
          <ArrowLeft size={16} /> Back
        </Link>
        <Link href="/how-it-works" className="flex items-center gap-2 text-sm text-white/40 hover:text-white">
          How DIMETECH works <ArrowRight size={14} />
        </Link>
      </div>

      {/* Hero */}
      <div className="mx-auto mt-16 max-w-lg text-center">
        <p className="text-xs font-semibold tracking-widest text-dime-green">DIME AID</p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">Partner Materials</h1>
        <p className="mt-3 text-base text-white/40">
          Everything a partner gets to show their customers they&apos;re making a difference.
        </p>
      </div>

      {/* ── PHYSICAL MATERIALS ───────────────────────── */}
      <div className="mx-auto mt-14 max-w-3xl">
        <h2 className="text-sm font-bold text-white/40">IN-STORE</h2>
        <div className="mt-6 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-3">
          <WindowSticker />
          <CounterCard />
          <GrocerySticker />
        </div>
      </div>

      {/* ── DIGITAL MATERIALS ────────────────────────── */}
      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-sm font-bold text-white/40">DIGITAL</h2>
        <div className="mt-6 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-3">
          <DigitalBadge />
          <ReceiptFooter />
          <RideScreen />
        </div>
      </div>

      {/* ── KEY MESSAGE ──────────────────────────────── */}
      <div className="mx-auto mt-16 max-w-md text-center">
        <p className="text-sm text-white/30">
          Every touchpoint reinforces the same message:<br />
          <span className="mt-1 block text-base font-semibold text-white/70">
            &ldquo;Your order helped feed someone. You didn&apos;t have to do a thing.&rdquo;
          </span>
        </p>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-12 max-w-3xl text-center">
        <Link
          href="/compare"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-black transition-transform active:scale-95"
        >
          See the checkout comparison
          <ArrowRight size={18} />
        </Link>
        <p className="mt-4 text-xs text-white/15">Mockups for demonstration purposes</p>
      </div>
    </div>
  );
}
