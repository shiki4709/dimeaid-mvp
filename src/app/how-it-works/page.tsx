"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

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
        <Link href="/account" className="flex items-center gap-2 text-sm text-white/40 hover:text-white">
          <ArrowLeft size={16} /> Back
        </Link>
        <Link href="/compare" className="flex items-center gap-2 text-sm text-white/40 hover:text-white">
          Side-by-side demo <ArrowRight size={14} />
        </Link>
      </div>

      {/* Hero */}
      <div className="mx-auto mt-16 max-w-lg text-center">
        <p className="text-xs font-semibold tracking-widest text-dime-teal">DIMETECH</p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">Where does the 11¢ go?</h1>
      </div>

      {/* ── THE FLOW — single visual ─────────────────── */}
      <div className="mx-auto mt-14 max-w-xs">

        {/* Order amount */}
        <div className="text-center">
          <p className="text-4xl font-bold">$18.73</p>
          <p className="mt-1 text-sm text-white/40">Customer pays at checkout</p>
        </div>

        {/* Line down */}
        <div className="mx-auto my-4 h-10 w-px bg-gradient-to-b from-white/20 to-dime-teal/40" />

        {/* DIMETECH moment */}
        <div className="rounded-2xl bg-dime-teal/10 py-4 text-center">
          <p className="text-xs font-semibold tracking-wider text-dime-teal">DIMETECH</p>
          <p className="mt-1 text-sm text-white/50">automatically separates</p>
          <p className="mt-1 text-2xl font-bold text-dime-teal">11¢</p>
        </div>

        {/* Split lines */}
        <div className="relative h-12">
          <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-dime-teal/30" />
          <div className="absolute top-3 left-[15%] right-[15%] h-px bg-white/10" />
          <div className="absolute left-[15%] top-3 h-9 w-px bg-dime-green/50" />
          <div className="absolute right-[15%] top-3 h-9 w-px bg-white/10" />
        </div>

        {/* The split — big and obvious */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-dime-green">10¢</p>
            <p className="mt-1 text-sm font-medium">Food Bank</p>
            <p className="mt-0.5 text-[11px] text-white/30">Direct to charity</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white/30">1¢</p>
            <p className="mt-1 text-sm font-medium text-white/40">Operations</p>
            <p className="mt-0.5 text-[11px] text-white/20">Audit & compliance</p>
          </div>
        </div>

        {/* Merge line */}
        <div className="relative h-10">
          <div className="absolute left-[15%] top-0 h-3 w-px bg-dime-green/50" />
          <div className="absolute right-[15%] top-0 h-3 w-px bg-white/10" />
          <div className="absolute top-3 left-[15%] right-[15%] h-px bg-white/10" />
          <div className="absolute left-1/2 top-3 h-7 w-px -translate-x-1/2 bg-white/15" />
        </div>

        {/* Receipt */}
        <div className="flex items-center justify-center gap-2 rounded-2xl bg-dime-green/10 py-4">
          <CheckCircle size={18} className="text-dime-green" />
          <p className="text-sm font-semibold text-dime-green">Tax receipt issued instantly</p>
        </div>
      </div>

      {/* ── Key point ────────────────────────────────── */}
      <p className="mx-auto mt-10 max-w-sm text-center text-sm text-white/30">
        No action from the merchant. No prompt for the customer.<br />
        Every cent tracked. Every receipt verifiable.
      </p>

      {/* ── THE PROOF ────────────────────────────────── */}
      <div className="mx-auto mt-16 max-w-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">The proof</h2>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-dime-green" />
            <span className="text-xs text-dime-green">Live</span>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {auditEntries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between rounded-xl bg-surface px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <CheckCircle size={14} className="shrink-0 text-dime-green" />
                <div>
                  <p className="text-sm">{entry.recipient}</p>
                  <p className="text-[11px] text-white/30">{entry.time} · {entry.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-dime-green">$0.10</p>
                <p className="text-[10px] text-white/20">{entry.receipt}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-white/20">
          142,300 verified this month
        </p>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-14 max-w-2xl text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-black transition-transform active:scale-95"
        >
          See the consumer experience
          <ArrowRight size={18} />
        </Link>
        <p className="mt-4 text-xs text-white/15">Simulated data for demonstration purposes</p>
      </div>
    </div>
  );
}
