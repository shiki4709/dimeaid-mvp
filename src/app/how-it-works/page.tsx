"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Building2,
  Heart,
  FileCheck,
  Smartphone,
  Monitor,
  Wifi,
  CheckCircle,
  Lock,
  User,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const auditEntries = [
  { id: "TXN-20260325-0847", time: "8:47 AM", recipient: "Daily Bread Food Bank", status: "Verified" },
  { id: "TXN-20260325-0832", time: "8:32 AM", recipient: "Second Harvest", status: "Verified" },
  { id: "TXN-20260325-0819", time: "8:19 AM", recipient: "Daily Bread Food Bank", status: "Verified" },
  { id: "TXN-20260325-0801", time: "8:01 AM", recipient: "North York Harvest", status: "Verified" },
  { id: "TXN-20260325-0748", time: "7:48 AM", recipient: "Second Harvest", status: "Verified" },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="min-h-dvh px-6 py-10 md:px-12">
      {/* Top nav */}
      <div className="flex items-center justify-between">
        <Link
          href="/account"
          className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to demo
        </Link>
        <Link
          href="/compare"
          className="flex items-center gap-2 text-sm text-dime-teal transition-colors hover:text-dime-teal/80"
        >
          Side-by-side comparison
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Hero */}
      <div className="mt-12 text-center">
        <p className="text-xs font-semibold tracking-widest text-dime-teal">DIMETECH</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          How the money flows
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-base text-white/40">
          Every transaction is automatically split, routed to certified charities,
          and logged with a complete audit trail — zero merchant effort.
        </p>
      </div>

      {/* ── FLOWCHART ────────────────────────────────── */}
      <div className="mx-auto mt-14 max-w-3xl">
        {/* Row 1: Customer → DIMETECH */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <User size={22} />
            </div>
            <div>
              <p className="font-semibold">Customer Places Order</p>
              <p className="mt-0.5 text-sm text-white/40">$18.73 total charged at checkout</p>
            </div>
          </div>

          <div className="hidden items-center md:flex">
            <div className="h-px w-12 bg-white/15" />
            <ArrowRight size={16} className="text-white/15" />
          </div>
          <div className="flex items-center justify-center md:hidden">
            <ArrowDown size={16} className="text-white/15" />
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-dime-teal/30 bg-dime-teal/5 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dime-teal/15">
              <ShieldCheck size={22} className="text-dime-teal" />
            </div>
            <div>
              <p className="font-semibold text-dime-teal">DIMETECH Layer</p>
              <p className="mt-0.5 text-sm text-white/40">11¢ auto-separated at payment processing</p>
            </div>
          </div>
        </div>

        {/* Connector down */}
        <div className="flex justify-center py-4 md:justify-end md:pr-[22%]">
          <ArrowDown size={16} className="text-white/15" />
        </div>

        {/* Row 2: Split — two destinations */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-dime-green/30 bg-dime-green/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-dime-green/15">
              <Heart size={24} className="text-dime-green" fill="#06C167" />
            </div>
            <p className="mt-4 text-2xl font-bold text-dime-green">$0.10</p>
            <p className="mt-1 text-sm font-semibold">Certified Food Bank</p>
            <p className="mt-2 text-xs text-white/40">
              Routed directly via secure transfer to verified charitable partners
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
              <Building2 size={24} className="text-white/40" />
            </div>
            <p className="mt-4 text-2xl font-bold text-white/50">$0.01</p>
            <p className="mt-1 text-sm font-semibold text-white/50">Platform Operations</p>
            <p className="mt-2 text-xs text-white/30">
              Compliance, audit infrastructure, and platform maintenance
            </p>
          </div>
        </div>

        {/* Connector down */}
        <div className="flex justify-center py-4">
          <ArrowDown size={16} className="text-white/15" />
        </div>

        {/* Row 3: Outputs — Audit + ESG */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-dime-teal/20 bg-surface p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dime-teal/10">
              <FileCheck size={22} className="text-dime-teal" />
            </div>
            <div>
              <p className="font-semibold">Immutable Audit Trail</p>
              <p className="mt-0.5 text-sm text-white/40">Every cent logged with timestamp, recipient & receipt ID</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <CreditCard size={22} className="text-white/60" />
            </div>
            <div>
              <p className="font-semibold">Automated ESG Reports</p>
              <p className="mt-0.5 text-sm text-white/40">Monthly reports generated for merchant compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIVE AUDIT TRAIL ─────────────────────────── */}
      <div className="mx-auto mt-16 max-w-3xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Live Audit Trail</h2>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-dime-green" />
            <span className="text-xs text-dime-green">Live</span>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-surface">
          <div className="flex items-center border-b border-white/5 px-5 py-3 text-xs font-semibold text-white/30">
            <span className="w-[180px]">Transaction ID</span>
            <span className="w-[80px]">Time</span>
            <span className="flex-1">Recipient</span>
            <span className="w-[80px] text-right">Status</span>
          </div>
          {auditEntries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center border-b border-white/5 px-5 py-3.5 last:border-0"
            >
              <span className="w-[180px] font-mono text-xs text-white/50">{entry.id}</span>
              <span className="w-[80px] text-xs text-white/40">{entry.time}</span>
              <span className="flex-1 text-sm text-white/70">{entry.recipient}</span>
              <span className="flex w-[80px] items-center justify-end gap-1.5 text-xs font-medium text-dime-green">
                <CheckCircle size={12} />
                {entry.status}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-white/25">
          142,300 transactions verified this month
        </p>
      </div>

      {/* ── SECURITY + POS ───────────────────────────── */}
      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Security */}
        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <Lock size={20} className="text-dime-teal" />
          <h3 className="mt-3 text-base font-bold">Bank-Grade Security</h3>
          <p className="mt-2 text-sm text-white/40">
            End-to-end encryption, immutable audit logs, and independently verifiable
            transaction records. Tax receipts generated automatically.
          </p>
        </div>

        {/* POS Integration */}
        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <ShieldCheck size={20} className="text-dime-teal" />
          <h3 className="mt-3 text-base font-bold">Works With Any POS</h3>
          <p className="mt-2 text-sm text-white/40">
            No hardware changes required. One SDK integration.
          </p>
          <div className="mt-4 space-y-2">
            {[
              { icon: Smartphone, label: "Mobile Apps", detail: "Uber Eats, DoorDash, SkipTheDishes" },
              { icon: Monitor, label: "Web Checkout", detail: "Any e-commerce platform" },
              { icon: Wifi, label: "In-Store POS", detail: "Square, Toast, Clover, Lightspeed" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <Icon size={14} className="shrink-0 text-white/30" />
                  <span className="text-xs text-white/50">
                    <span className="font-medium text-white/70">{item.label}</span> — {item.detail}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 3-STEP INTEGRATION ───────────────────────── */}
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <h2 className="text-lg font-bold">Integration in 3 Steps</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { num: "1", title: "Add SDK", desc: "One line of code in your checkout" },
            { num: "2", title: "Auto-Split", desc: "11¢ separated at the payment layer" },
            { num: "3", title: "Reports Flow", desc: "Charities funded, merchant gets ESG data" },
          ].map((step) => (
            <div key={step.num} className="rounded-2xl border border-dime-teal/20 bg-dime-teal/5 p-5">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-dime-teal/20 text-lg font-bold text-dime-teal">
                {step.num}
              </div>
              <p className="mt-3 font-semibold text-dime-teal">{step.title}</p>
              <p className="mt-1 text-xs text-white/40">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-16 max-w-3xl text-center">
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
