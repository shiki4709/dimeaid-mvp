"use client";

import { useRouter } from "next/navigation";
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
} from "lucide-react";

const auditEntries = [
  { id: "TXN-20260325-0847", time: "8:47 AM", recipient: "Daily Bread Food Bank", status: "Verified" },
  { id: "TXN-20260325-0832", time: "8:32 AM", recipient: "Second Harvest", status: "Verified" },
  { id: "TXN-20260325-0819", time: "8:19 AM", recipient: "Daily Bread Food Bank", status: "Verified" },
  { id: "TXN-20260325-0801", time: "8:01 AM", recipient: "North York Harvest", status: "Verified" },
  { id: "TXN-20260325-0748", time: "7:48 AM", recipient: "Second Harvest", status: "Verified" },
] as const;

const posIntegrations = [
  { icon: Smartphone, name: "Mobile App", desc: "Uber Eats, DoorDash, SkipTheDishes" },
  { icon: Monitor, name: "Web Checkout", desc: "Any e-commerce or ordering platform" },
  { icon: Wifi, name: "In-Store POS", desc: "Square, Toast, Clover, Lightspeed" },
] as const;

/* ── Flow chart node ─────────────────────────────────── */
function FlowNode({
  icon: Icon,
  label,
  detail,
  color,
  amount,
}: {
  icon: typeof CreditCard;
  label: string;
  detail: string;
  color: string;
  amount?: string;
}) {
  return (
    <div className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-surface p-3">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${color}`}>
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-[11px] text-white/40">{detail}</p>
      </div>
      {amount && (
        <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-xs font-bold">
          {amount}
        </span>
      )}
    </div>
  );
}

/* ── Connector line ──────────────────────────────────── */
function Connector({ split }: { split?: boolean }) {
  if (split) {
    return (
      <div className="relative flex h-12 items-center justify-center">
        {/* Vertical trunk */}
        <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white/15" />
        {/* Horizontal bar */}
        <div className="absolute top-3 left-[25%] right-[25%] h-px bg-white/15" />
        {/* Left branch */}
        <div className="absolute left-[25%] top-3 h-9 w-px bg-dime-green/40" />
        {/* Right branch */}
        <div className="absolute right-[25%] top-3 h-9 w-px bg-white/10" />
      </div>
    );
  }
  return (
    <div className="flex h-6 items-center justify-center">
      <div className="h-full w-px bg-white/15" />
    </div>
  );
}

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

      {/* ── MONEY FLOW CHART ─────────────────────────── */}
      <div className="mt-6">
        <h2 className="text-sm font-bold text-white/40">MONEY FLOW</h2>

        <div className="mt-4">
          {/* Step 1: Customer */}
          <FlowNode
            icon={User}
            label="Customer Places Order"
            detail="$18.73 total charged"
            color="bg-white/10 text-white"
            amount="$18.73"
          />

          <Connector />

          {/* Step 2: DIMETECH */}
          <FlowNode
            icon={ShieldCheck}
            label="DIMETECH Payment Layer"
            detail="11¢ auto-separated — no merchant action required"
            color="bg-dime-teal/15 text-dime-teal"
            amount="$0.11"
          />

          {/* Split into two branches */}
          <Connector split />

          {/* Two branches side by side */}
          <div className="grid grid-cols-2 gap-3">
            {/* Left: Charity */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-dime-green/20 bg-dime-green/5 p-3 text-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-dime-green/15">
                <Heart size={16} className="text-dime-green" fill="#06C167" />
              </div>
              <p className="text-xs font-semibold text-dime-green">$0.10</p>
              <p className="text-[10px] text-white/40">Certified Food Bank</p>
            </div>

            {/* Right: Operations */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Building2 size={16} className="text-white/50" />
              </div>
              <p className="text-xs font-semibold text-white/50">$0.01</p>
              <p className="text-[10px] text-white/30">Platform Ops</p>
            </div>
          </div>

          {/* Converge back */}
          <div className="relative flex h-10 items-center justify-center">
            <div className="absolute left-[25%] top-0 h-4 w-px bg-dime-green/40" />
            <div className="absolute right-[25%] top-0 h-4 w-px bg-white/10" />
            <div className="absolute top-4 left-[25%] right-[25%] h-px bg-white/15" />
            <div className="absolute left-1/2 top-4 h-6 w-px -translate-x-1/2 bg-white/15" />
          </div>

          {/* Step 4: Audit */}
          <FlowNode
            icon={FileCheck}
            label="Audit Trail Generated"
            detail="Transaction logged with timestamp, amount, recipient & tax receipt ID"
            color="bg-dime-teal/15 text-dime-teal"
          />

          <Connector />

          {/* Step 5: Merchant gets report */}
          <FlowNode
            icon={CreditCard}
            label="Merchant Receives ESG Report"
            detail="Automated monthly reports for compliance and public reporting"
            color="bg-white/10 text-white"
          />
        </div>
      </div>

      {/* ── AUDIT TRAIL ──────────────────────────────── */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white/40">LIVE AUDIT TRAIL</h2>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-dime-green" />
            <span className="text-[10px] text-dime-green">Live</span>
          </div>
        </div>
        <div className="mt-3 overflow-hidden rounded-xl bg-surface">
          <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2 text-[10px] font-semibold text-white/30">
            <span className="w-[120px]">Transaction ID</span>
            <span className="w-[50px]">Time</span>
            <span className="flex-1">Recipient</span>
            <span className="w-[52px] text-right">Status</span>
          </div>
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

      {/* ── SECURITY ─────────────────────────────────── */}
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

      {/* ── POS INTEGRATION ──────────────────────────── */}
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

      {/* ── 3-STEP INTEGRATION ───────────────────────── */}
      <div className="mt-6 rounded-xl bg-dime-teal/5 p-4">
        <p className="text-sm font-semibold text-dime-teal">3-Step Integration</p>
        <div className="mt-3 space-y-3">
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dime-teal/20 text-xs font-bold text-dime-teal">1</div>
            <p className="text-xs text-white/50">Add DIMETECH SDK to your checkout — one line of code</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dime-teal/20 text-xs font-bold text-dime-teal">2</div>
            <p className="text-xs text-white/50">11¢ is automatically added and split at the payment layer</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dime-teal/20 text-xs font-bold text-dime-teal">3</div>
            <p className="text-xs text-white/50">Funds flow to certified charities with full audit trail — merchant gets ESG reports automatically</p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-[10px] text-white/15">
        Simulated data for demonstration purposes
      </p>
    </div>
  );
}
