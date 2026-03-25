"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

/* ── Window Sticker ──────────────────────────────────── */
function WindowSticker() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-72 rounded-2xl border-2 border-dime-green/30 bg-gradient-to-b from-dime-green/10 to-transparent p-10 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-dime-green/20">
          <Heart size={32} className="text-dime-green" fill="#06C167" />
        </div>
        <p className="mt-5 text-xl font-bold text-dime-green">DIME AID</p>
        <p className="mt-1 text-sm font-medium tracking-wider text-dime-green/80">PARTNER</p>
        <div className="mx-auto mt-5 h-px w-16 bg-dime-green/25" />
        <p className="mt-5 text-sm leading-relaxed text-white/50">
          Every order at this location<br />
          automatically helps feed<br />
          someone in your community.
        </p>
      </div>
      <p className="mt-4 text-sm text-white/50">Window / Door Sticker</p>
    </div>
  );
}

/* ── Counter Card ────────────────────────────────────── */
function CounterCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-72 rounded-2xl bg-surface p-8 text-center">
        <Heart size={24} className="mx-auto text-dime-green" fill="#06C167" />
        <p className="mt-4 text-base font-bold">Your order just helped<br />feed a child.</p>
        <div className="mx-auto mt-5 rounded-xl bg-dime-green/10 px-5 py-4">
          <p className="text-3xl font-bold text-dime-green">10¢</p>
          <p className="mt-1 text-sm text-white/50">from this order went to a<br />local food bank</p>
        </div>
        <p className="mt-5 text-xs text-white/30">Powered by DIMETECH</p>
      </div>
      <p className="mt-4 text-sm text-white/50">Counter / Table Card</p>
    </div>
  );
}

/* ── Digital Badges ──────────────────────────────────── */
function DigitalBadge() {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 rounded-full bg-dime-green/15 px-6 py-3">
          <Heart size={18} className="text-dime-green" fill="#06C167" />
          <span className="text-base font-semibold text-dime-green">DIME AID Partner</span>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1.5 backdrop-blur-sm">
            <Heart size={12} className="text-dime-green" fill="#06C167" />
            <span className="text-sm font-medium text-dime-green">DIME AID</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dime-green/20">
            <Heart size={18} className="text-dime-green" fill="#06C167" />
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-white/50">Digital Badges (App / Web)</p>
    </div>
  );
}

/* ── Receipt Footer ──────────────────────────────────── */
function ReceiptFooter() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-64 rounded-xl bg-white px-6 py-5 font-mono text-black">
        <div className="space-y-1 text-sm text-black/50">
          <div className="flex justify-between"><span>Subtotal</span><span>$14.99</span></div>
          <div className="flex justify-between"><span>Delivery</span><span>$2.99</span></div>
          <div className="flex justify-between"><span>Service Fee</span><span>$0.75</span></div>
        </div>
        <div className="my-2.5 border-t border-dashed border-black/15" />
        <div className="flex justify-between text-sm font-medium text-emerald-700">
          <span>Hunger Relief</span><span>$0.10</span>
        </div>
        <div className="flex justify-between text-xs text-black/30">
          <span>Platform Fee</span><span>$0.01</span>
        </div>
        <div className="my-2.5 border-t border-black/15" />
        <div className="flex justify-between text-base font-bold">
          <span>TOTAL</span><span>$18.84</span>
        </div>
        <div className="mt-4 border-t border-dashed border-black/15 pt-4 text-center">
          <p className="text-xs text-emerald-700">
            ♥ 10¢ from this order helps feed<br />
            someone in your community
          </p>
          <p className="mt-2 text-xs text-black/30">dimeaid.org</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-white/50">Receipt Footer</p>
    </div>
  );
}

/* ── Uber Ride Receipt ───────────────────────────────── */
function RideScreen() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-64 rounded-2xl bg-surface p-5">
        <p className="text-sm text-white/50">Trip Complete</p>
        <p className="mt-1 text-xl font-bold">$23.40</p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between text-white/50"><span>Base fare</span><span>$18.50</span></div>
          <div className="flex justify-between text-white/50"><span>Booking fee</span><span>$3.80</span></div>
          <div className="flex justify-between text-white/50"><span>HST</span><span>$0.99</span></div>
          <div className="flex justify-between text-dime-teal"><span>Hunger Relief</span><span>$0.10</span></div>
          <div className="flex justify-between text-xs text-white/35"><span>Platform Fee</span><span>$0.01</span></div>
        </div>
        <div className="mt-3 border-t border-white/15 pt-3">
          <div className="flex justify-between text-base font-bold">
            <span>Total</span><span>$23.40</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-dime-teal/10 px-3 py-2">
          <Heart size={12} className="text-dime-teal" fill="rgba(6,182,212,0.8)" />
          <p className="text-sm text-white/50">
            Your 10¢ is feeding someone in Toronto
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-white/50">Uber Rides Receipt</p>
    </div>
  );
}

/* ── Grocery Bag Sticker ─────────────────────────────── */
function GrocerySticker() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-56 w-52 flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/20 bg-surface/50 p-5 text-center">
        <Heart size={26} className="text-dime-green" fill="#06C167" />
        <p className="mt-3 text-sm font-bold text-dime-green">DIME AID</p>
        <p className="mt-3 text-sm leading-relaxed text-white/50">
          This delivery helped<br />
          feed a family in<br />
          your neighbourhood.
        </p>
        <p className="mt-4 text-xs text-white/30">dimeaid.org</p>
      </div>
      <p className="mt-4 text-sm text-white/50">Delivery Bag Sticker</p>
    </div>
  );
}

export default function PartnerKitPage() {
  return (
    <div className="min-h-dvh px-6 py-10 md:px-12">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/50 hover:text-white">
          <ArrowLeft size={16} /> Back
        </Link>
        <Link href="/how-it-works" className="flex items-center gap-2 text-sm text-white/50 hover:text-white">
          How DIMETECH works <ArrowRight size={14} />
        </Link>
      </div>

      {/* Hero */}
      <div className="mx-auto mt-16 max-w-lg text-center">
        <p className="text-sm font-semibold tracking-widest text-dime-green">DIME AID</p>
        <h1 className="mt-3 text-4xl font-bold">Partner Materials</h1>
        <p className="mt-4 text-lg text-white/50">
          Everything a partner gets to show their customers they&apos;re making a difference.
        </p>
      </div>

      {/* ── IN-STORE ─────────────────────────────────── */}
      <div className="mx-auto mt-16 max-w-4xl">
        <h2 className="text-base font-bold text-white/50">IN-STORE</h2>
        <div className="mt-8 grid grid-cols-1 justify-items-center gap-12 md:grid-cols-3">
          <WindowSticker />
          <CounterCard />
          <GrocerySticker />
        </div>
      </div>

      {/* ── DIGITAL ──────────────────────────────────── */}
      <div className="mx-auto mt-20 max-w-4xl">
        <h2 className="text-base font-bold text-white/50">DIGITAL</h2>
        <div className="mt-8 grid grid-cols-1 justify-items-center gap-12 md:grid-cols-3">
          <DigitalBadge />
          <ReceiptFooter />
          <RideScreen />
        </div>
      </div>

      {/* ── KEY MESSAGE ──────────────────────────────── */}
      <div className="mx-auto mt-20 max-w-md text-center">
        <p className="text-base text-white/50">
          Every touchpoint reinforces the same message:
        </p>
        <p className="mt-3 text-xl font-semibold text-white/80">
          &ldquo;Your order helped feed someone.<br />You didn&apos;t have to do a thing.&rdquo;
        </p>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-14 max-w-4xl text-center">
        <Link
          href="/compare"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-transform active:scale-95"
        >
          See the checkout comparison
          <ArrowRight size={20} />
        </Link>
        <p className="mt-4 text-sm text-white/30">Mockups for demonstration purposes</p>
      </div>
    </div>
  );
}
