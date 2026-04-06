"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowDown, CheckCircle } from "lucide-react";

const auditEntries = [
  { id: "TXN-0847", time: "8:47 AM", recipient: "Daily Bread Food Bank", receipt: "TR-847291" },
  { id: "TXN-0832", time: "8:32 AM", recipient: "Second Harvest", receipt: "TR-832104" },
  { id: "TXN-0819", time: "8:19 AM", recipient: "Daily Bread Food Bank", receipt: "TR-819473" },
  { id: "TXN-0801", time: "8:01 AM", recipient: "North York Harvest", receipt: "TR-801055" },
  { id: "TXN-0748", time: "7:48 AM", recipient: "Second Harvest", receipt: "TR-748392" },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="min-h-dvh px-6 py-10 md:px-12">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <Link href="/account" className="flex items-center gap-2 text-sm text-white/50 hover:text-white">
          <ArrowLeft size={16} /> Back
        </Link>
        <Link href="/compare" className="flex items-center gap-2 text-sm text-white/50 hover:text-white">
          Side-by-side demo <ArrowRight size={14} />
        </Link>
      </div>

      {/* Hero */}
      <div className="mx-auto mt-16 max-w-lg text-center">
        <p className="text-sm font-semibold tracking-widest text-dime-teal">DIMETECH</p>
        <h1 className="mt-3 text-4xl font-bold">Where does the 11¢ go?</h1>
      </div>

      {/* ── THE FLOW ─────────────────────────────────── */}
      <div className="mx-auto mt-16 max-w-sm">

        {/* Customer */}
        <div className="text-center">
          <p className="text-5xl font-bold">$18.73</p>
          <p className="mt-2 text-base text-white/60">Customer pays at checkout</p>
        </div>

        {/* Line */}
        <div className="mx-auto my-5 h-12 w-px bg-gradient-to-b from-white/30 to-dime-teal/50" />

        {/* DIMETECH */}
        <div className="rounded-2xl bg-dime-teal/10 py-5 text-center">
          <p className="text-sm font-bold tracking-wider text-dime-teal">DIMETECH</p>
          <p className="mt-1 text-base text-white/60">automatically separates</p>
          <p className="mt-1 text-3xl font-bold text-dime-teal">11¢</p>
        </div>

        {/* Split */}
        <div className="relative h-14">
          <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-dime-teal/40" />
          <div className="absolute top-4 left-[12%] right-[12%] h-px bg-white/20" />
          <div className="absolute left-[12%] top-4 h-10 w-px bg-dime-green/60" />
          <div className="absolute right-[12%] top-4 h-10 w-px bg-white/20" />
        </div>

        {/* Two destinations */}
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-dime-green">10¢</p>
            <p className="mt-2 text-base font-semibold">Food Bank</p>
            <p className="mt-1 text-sm text-white/50">Direct to charity</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white/40">1¢</p>
            <p className="mt-2 text-base font-semibold text-white/50">Operations</p>
            <p className="mt-1 text-sm text-white/40">Audit & compliance</p>
          </div>
        </div>

        {/* Merge */}
        <div className="relative h-12">
          <div className="absolute left-[12%] top-0 h-4 w-px bg-dime-green/60" />
          <div className="absolute right-[12%] top-0 h-4 w-px bg-white/20" />
          <div className="absolute top-4 left-[12%] right-[12%] h-px bg-white/20" />
          <div className="absolute left-1/2 top-4 h-8 w-px -translate-x-1/2 bg-white/25" />
        </div>

        {/* Receipt */}
        <div className="flex items-center justify-center gap-2.5 rounded-2xl bg-dime-green/10 py-5">
          <CheckCircle size={20} className="text-dime-green" />
          <p className="text-base font-semibold text-dime-green">Tax receipt issued instantly</p>
        </div>
      </div>

      {/* Key point */}
      <p className="mx-auto mt-12 max-w-md text-center text-base text-white/50">
        No action from the merchant. No prompt for the customer.<br />
        Every cent tracked. Every receipt verifiable.
      </p>

      {/* ── THE PROOF ────────────────────────────────── */}
      <div className="mx-auto mt-16 max-w-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">The proof</h2>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-dime-green" />
            <span className="text-sm text-dime-green">Live</span>
          </div>
        </div>

        <div className="mt-5 space-y-2.5">
          {auditEntries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between rounded-xl bg-surface px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="shrink-0 text-dime-green" />
                <div>
                  <p className="text-base font-medium">{entry.recipient}</p>
                  <p className="text-sm text-white/50">{entry.time} · {entry.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-base font-bold text-dime-green">$0.10</p>
                <p className="text-sm text-white/40">{entry.receipt}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-white/40">
          142,300 verified this month
        </p>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-16 max-w-2xl text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-transform active:scale-95"
        >
          See the consumer experience
          <ArrowRight size={20} />
        </Link>
        <p className="mt-4 text-sm text-white/30">Simulated data for demonstration purposes</p>
      </div>
    </div>
  );
}
