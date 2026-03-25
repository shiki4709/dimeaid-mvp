"use client";

import { Info } from "lucide-react";
import { DIME_AID_FEE } from "@/lib/data";
import { useState } from "react";

interface OrderSummaryProps {
  readonly subtotal: number;
  readonly deliveryFee: number;
  readonly showTooltipToggle?: boolean;
  readonly compact?: boolean;
}

export default function OrderSummary({
  subtotal,
  deliveryFee,
  showTooltipToggle = true,
  compact = false,
}: OrderSummaryProps) {
  const [showTip, setShowTip] = useState(false);

  const serviceFee = Math.round(subtotal * 0.05 * 100) / 100;
  const total = subtotal + deliveryFee + serviceFee + DIME_AID_FEE.total;

  const textSize = compact ? "text-xs" : "text-sm";
  const gap = compact ? "space-y-1.5" : "space-y-2.5";

  return (
    <div className={gap}>
      <div className={`flex justify-between ${textSize}`}>
        <span className="text-white/50">Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className={`flex justify-between ${textSize}`}>
        <span className="text-white/50">Delivery Fee</span>
        <span>${deliveryFee.toFixed(2)}</span>
      </div>
      <div className={`flex justify-between ${textSize}`}>
        <span className="text-white/50">Service Fee</span>
        <span>${serviceFee.toFixed(2)}</span>
      </div>

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className={`${textSize} text-dime-teal/80`}>Hunger Relief</span>
          {showTooltipToggle && (
            <button
              onClick={() => setShowTip(!showTip)}
              className="text-white/20 transition-colors hover:text-white/40"
            >
              <Info size={12} />
            </button>
          )}
        </div>
        <span className={`${textSize} text-dime-teal/80`}>$0.10</span>
        {showTip && (
          <div className="absolute -top-14 left-0 right-0 z-10 rounded-lg bg-[#27272A] p-2.5 text-xs text-white/60 shadow-xl">
            10¢ goes to local food banks in your area. 1¢ to platform operations.
          </div>
        )}
      </div>
      <div className={`flex justify-between ${compact ? "text-[10px]" : "text-xs"}`}>
        <span className="text-white/25">Platform Fee</span>
        <span className="text-white/25">$0.01</span>
      </div>

      <div className="border-t border-white/10 pt-2.5">
        <div className={`flex justify-between font-bold ${compact ? "text-sm" : ""}`}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
