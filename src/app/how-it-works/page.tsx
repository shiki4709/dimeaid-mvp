"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowDown,
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
} from "lucide-react";

const flowSteps = [
  {
    icon: CreditCard,
    label: "Customer Places Order",
    detail: "$18.73 total — includes $0.10 Hunger Relief + $0.01 Platform Fee",
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    icon: ShieldCheck,
    label: "DIMETECH Processes Payment",
    detail: "11¢ is automatically separated at the transaction layer — no merchant action required",
    color: "text-dime-teal",
    bg: "bg-dime-teal/10",
  },
  {
    icon: Heart,
    label: "$0.10 → Certified Food Bank",
    detail: "Funds routed directly to verified charitable partners via secure transfer",
    color: "text-dime-green",
    bg: "bg-dime-green/10",
  },
  {
    icon: Building2,
    label: "$0.01 → DIME AID Operations",
    detail: "Platform maintenance, compliance, audit infrastructure",
    color: "text-white/60",
    bg: "bg-white/5",
  },
  {
    icon: FileCheck,
    label: "Audit Trail Generated",
    detail: "Every transaction logged with timestamp, amount, recipient, and tax receipt ID",
    color: "text-dime-teal",
    bg: "bg-dime-teal/10",
  },
] as const;

const auditEntries = [
  { id: "TXN-20260325-0847", time: "8:47 AM", amount: "$0.10", recipient: "Daily Bread Food Bank", status: "Verified" },
  { id: "TXN-20260325-0832", time: "8:32 AM", amount: "$0.10", recipient: "Second Harvest", status: "Verified" },
  { id: "TXN-20260325-0819", time: "8:19 AM", amount: "$0.10", recipient: "Daily Bread Food Bank", status: "Verified" },
  { id: "TXN-20260325-0801", time: "8:01 AM", amount: "$0.10", recipient: "North York Harvest", status: "Verified" },
  { id: "TXN-20260325-0748", time: "7:48 AM", amount: "$0.10", recipient: "Second Harvest", status: "Verified" },
] as const;

const posIntegrations = [
  { icon: Smartphone, name: "Mobile App", desc: "Uber Eats, DoorDash, SkipTheDishes" },
  { icon: Monitor, name: "Web Checkout", desc: "Any e-commerce or ordering platform" },
  { icon: Wifi, name: "In-Store POS", desc: "Square, Toast, Clover, Lightspeed" },
] as const;

export default function HowItWorksPage() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-md px-4 pt-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface transition-colors hover:bg-surface-hover"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-lg font-bold">How DIMETECH Works</h1>
          <p className="text-xs text-muted">Money flow, audit trail & POS integration</p>
        </div>
      </div>

      {/* Money Flow */}
      <div className="mt-6">
        <h2 className="text-sm font-bold text-white/40">MONEY FLOW</h2>
        <div className="mt-3 space-y-0">
          {flowSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label}>
                <div className={`flex items-start gap-3 rounded-xl ${step.bg} p-3.5`}>
                  <div className={`mt-0.5 ${step.color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold ${step.color}`}>{step.label}</p>
                    <p className="mt-0.5 text-xs text-white/40">{step.detail}</p>
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown size={14} className="text-white/15" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Audit Trail */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white/40">LIVE AUDIT TRAIL</h2>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-dime-green" />
            <span className="text-[10px] text-dime-green">Live</span>
          </div>
        </div>
        <div className="mt-3 overflow-hidden rounded-xl bg-surface">
          {/* Header Row */}
          <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2 text-[10px] font-semibold text-white/30">
            <span className="w-[120px]">Transaction ID</span>
            <span className="w-[50px]">Time</span>
            <span className="flex-1">Recipient</span>
            <span className="w-[52px] text-right">Status</span>
          </div>
          {/* Entries */}
          {auditEntries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center gap-2 border-b border-white/5 px-3 py-2.5 last:border-0"
            >
              <span className="w-[120px] font-mono text-[10px] text-white/50">{entry.id}</span>
              <span className="w-[50px] text-[10px] text-white/40">{entry.time}</span>
              <span className="flex-1 text-[11px] text-white/70">{entry.recipient}</span>
              <span className="flex w-[52px] items-center justify-end gap-1 text-[10px] text-dime-green">
                <CheckCircle size={10} />
                {entry.status}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-[10px] text-white/20">
          142,300 transactions verified this month
        </p>
      </div>

      {/* Security */}
      <div className="mt-8 flex items-start gap-3 rounded-xl bg-surface p-4">
        <Lock size={16} className="mt-0.5 shrink-0 text-dime-teal" />
        <div>
          <p className="text-sm font-semibold">Bank-Grade Security</p>
          <p className="mt-1 text-xs text-white/40">
            Every transaction is encrypted end-to-end, logged with an immutable audit trail,
            and independently verifiable. Tax receipts are generated automatically for merchant
            ESG reporting.
          </p>
        </div>
      </div>

      {/* POS Integration */}
      <div className="mt-8">
        <h2 className="text-sm font-bold text-white/40">POS INTEGRATION</h2>
        <p className="mt-1 text-xs text-white/30">
          DIMETECH works with any payment system — no hardware changes required
        </p>
        <div className="mt-3 space-y-2">
          {posIntegrations.map((pos) => {
            const Icon = pos.icon;
            return (
              <div key={pos.name} className="flex items-center gap-3 rounded-xl bg-surface p-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  <Icon size={18} className="text-white/60" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{pos.name}</p>
                  <p className="text-xs text-white/40">{pos.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* How Integration Works */}
      <div className="mt-6 rounded-xl bg-dime-teal/5 p-4">
        <p className="text-sm font-semibold text-dime-teal">3-Step Integration</p>
        <div className="mt-3 space-y-3">
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dime-teal/20 text-xs font-bold text-dime-teal">
              1
            </div>
            <p className="text-xs text-white/50">
              Add DIMETECH SDK to your checkout — one line of code
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dime-teal/20 text-xs font-bold text-dime-teal">
              2
            </div>
            <p className="text-xs text-white/50">
              11¢ is automatically added and split at the payment layer
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dime-teal/20 text-xs font-bold text-dime-teal">
              3
            </div>
            <p className="text-xs text-white/50">
              Funds flow to certified charities with full audit trail — merchant gets ESG reports automatically
            </p>
          </div>
        </div>
      </div>

      {/* Simulated disclaimer */}
      <p className="mt-6 text-center text-[10px] text-white/15">
        Simulated data for demonstration purposes
      </p>
    </div>
  );
}
