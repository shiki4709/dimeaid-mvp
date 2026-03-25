"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  Building2,
  Heart,
  CheckCircle,
  User,
} from "lucide-react";

const auditEntries = [
  { id: "TXN-20260325-0847", time: "8:47 AM", amount: "$0.10", recipient: "Daily Bread Food Bank", receipt: "TR-847291" },
  { id: "TXN-20260325-0832", time: "8:32 AM", amount: "$0.10", recipient: "Second Harvest", receipt: "TR-832104" },
  { id: "TXN-20260325-0819", time: "8:19 AM", amount: "$0.10", recipient: "Daily Bread Food Bank", receipt: "TR-819473" },
  { id: "TXN-20260325-0801", time: "8:01 AM", amount: "$0.10", recipient: "North York Harvest", receipt: "TR-801055" },
  { id: "TXN-20260325-0748", time: "7:48 AM", amount: "$0.10", recipient: "Second Harvest", receipt: "TR-748392" },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="min-h-dvh px-6 py-10 md:px-12">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <Link
          href="/account"
          className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <Link
          href="/compare"
          className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          Side-by-side demo
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Hero — the one question this page answers */}
      <div className="mx-auto mt-16 max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-widest text-dime-teal">DIMETECH</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Where does the 11¢ go?
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-white/40">
          Every cent is tracked, verified, and receipted automatically.
        </p>
      </div>

      {/* ── THE FLOW ─────────────────────────────────── */}
      <div className="mx-auto mt-14 max-w-sm">

        {/* Customer */}
        <div className="rounded-2xl border border-white/10 bg-surface p-5 text-center">
          <User size={24} className="mx-auto text-white/60" />
          <p className="mt-2 text-lg font-bold">$18.73</p>
          <p className="text-sm text-white/40">Customer places order</p>
        </div>

        <div className="flex justify-center py-3">
          <ArrowDown size={18} className="text-white/20" />
        </div>

        {/* DIMETECH splits */}
        <div className="rounded-2xl border border-dime-teal/30 bg-dime-teal/5 p-5 text-center">
          <ShieldCheck size={24} className="mx-auto text-dime-teal" />
          <p className="mt-2 text-sm font-bold text-dime-teal">DIMETECH auto-separates 11¢</p>
          <p className="text-xs text-white/30 mt-1">No merchant action. No customer prompt.</p>
        </div>

        {/* Split connector */}
        <div className="relative h-10">
          <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white/15" />
          <div className="absolute top-3 left-[20%] right-[20%] h-px bg-white/15" />
          <div className="absolute left-[20%] top-3 h-7 w-px bg-dime-green/50" />
          <div className="absolute right-[20%] top-3 h-7 w-px bg-white/10" />
        </div>

        {/* Two destinations */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-dime-green/30 bg-dime-green/5 p-4 text-center">
            <Heart size={20} className="mx-auto text-dime-green" fill="#06C167" />
            <p className="mt-2 text-xl font-bold text-dime-green">10¢</p>
            <p className="mt-1 text-xs text-white/50">Food Bank</p>
            <p className="mt-0.5 text-[10px] text-white/25">Direct secure transfer</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
            <Building2 size={20} className="mx-auto text-white/30" />
            <p className="mt-2 text-xl font-bold text-white/40">1¢</p>
            <p className="mt-1 text-xs text-white/30">Operations</p>
            <p className="mt-0.5 text-[10px] text-white/15">Compliance & audit</p>
          </div>
        </div>

        {/* Merge back */}
        <div className="relative h-8">
          <div className="absolute left-[20%] top-0 h-3 w-px bg-dime-green/50" />
          <div className="absolute right-[20%] top-0 h-3 w-px bg-white/10" />
          <div className="absolute top-3 left-[20%] right-[20%] h-px bg-white/15" />
          <div className="absolute left-1/2 top-3 h-5 w-px -translate-x-1/2 bg-white/15" />
        </div>

        {/* Receipt */}
        <div className="rounded-2xl border border-white/10 bg-surface p-5 text-center">
          <CheckCircle size={24} className="mx-auto text-dime-green" />
          <p className="mt-2 text-sm font-bold">Tax receipt issued</p>
          <p className="text-xs text-white/30">Timestamped, immutable, independently verifiable</p>
        </div>
      </div>

      {/* ── THE PROOF ────────────────────────────────── */}
      <div className="mx-auto mt-16 max-w-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">The proof</h2>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-dime-green" />
            <span className="text-xs text-dime-green">Live</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-white/30">
          Every transaction generates a verifiable record. Here are the last 5.
        </p>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-surface">
          <div className="flex items-center border-b border-white/5 px-5 py-3 text-xs font-semibold text-white/25">
            <span className="w-[160px]">Transaction</span>
            <span className="w-[60px]">Time</span>
            <span className="flex-1">Recipient</span>
            <span className="w-[90px] text-right">Tax Receipt</span>
          </div>
          {auditEntries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center border-b border-white/5 px-5 py-3 last:border-0"
            >
              <span className="w-[160px] font-mono text-xs text-white/40">{entry.id}</span>
              <span className="w-[60px] text-xs text-white/35">{entry.time}</span>
              <span className="flex-1 text-sm text-white/60">{entry.recipient}</span>
              <span className="flex w-[90px] items-center justify-end gap-1.5 text-xs text-dime-green">
                <CheckCircle size={11} />
                {entry.receipt}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-white/20">
          142,300 verified transactions this month
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto mt-16 max-w-2xl text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-black transition-transform active:scale-95"
        >
          See the consumer experience
          <ArrowRight size={18} />
        </Link>
        <p className="mt-4 text-xs text-white/15">
          Simulated data for demonstration purposes
        </p>
      </div>
    </div>
  );
}
