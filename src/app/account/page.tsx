"use client";

import Link from "next/link";
import {
  ChevronRight,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
  Info,
  Gift,
  Star,
  LogOut,
  ClipboardList,
  Bookmark,
  Zap,
} from "lucide-react";

const menuItems = [
  {
    section: "DIME AID",
    items: [
      { icon: Heart, label: "Your Impact", href: "/impact", accent: true },
      { icon: Zap, label: "How DIMETECH Works", href: "/how-it-works", accent: true },
    ],
  },
  {
    section: "Orders & Favorites",
    items: [
      { icon: ClipboardList, label: "Orders", href: "#" },
      { icon: Bookmark, label: "Favorites", href: "#" },
    ],
  },
  {
    section: "Account",
    items: [
      { icon: MapPin, label: "Addresses", href: "#" },
      { icon: CreditCard, label: "Wallet", href: "#" },
      { icon: Bell, label: "Notifications", href: "#" },
      { icon: Shield, label: "Privacy", href: "#" },
    ],
  },
  {
    section: "Earn & Save",
    items: [
      { icon: Gift, label: "Promotions", href: "#" },
      { icon: Star, label: "Uber One", href: "#", badge: "Try Free" },
    ],
  },
  {
    section: "Support",
    items: [
      { icon: HelpCircle, label: "Help", href: "#" },
      { icon: Info, label: "About", href: "#" },
    ],
  },
] as const;

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-md px-4 pt-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-xl font-bold">
          J
        </div>
        <div>
          <h1 className="text-lg font-bold">Jordan M.</h1>
          <p className="text-xs text-muted">jordan.m@email.com</p>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="mt-6 space-y-6">
        {menuItems.map((section) => (
          <div key={section.section}>
            <p className="mb-2 text-xs font-semibold tracking-wide text-white/30">
              {section.section}
            </p>
            <div className="overflow-hidden rounded-2xl bg-surface">
              {section.items.map((item, i) => {
                const Icon = item.icon;
                const isAccent = "accent" in item && item.accent;
                const badge = "badge" in item ? item.badge : null;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-surface-hover ${
                      i > 0 ? "border-t border-white/5" : ""
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isAccent ? "text-dime-green" : "text-white/50"}
                      fill={isAccent ? "#06C167" : "none"}
                    />
                    <span
                      className={`flex-1 text-sm ${
                        isAccent ? "font-medium text-dime-green" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                    {badge && (
                      <span className="rounded-full bg-dime-green/15 px-2 py-0.5 text-xs font-medium text-dime-green">
                        {badge}
                      </span>
                    )}
                    <ChevronRight size={16} className="text-white/20" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sign Out */}
      <button className="mt-6 flex w-full items-center gap-3 rounded-2xl bg-surface px-4 py-3.5 text-sm text-red-400 transition-colors hover:bg-surface-hover">
        <LogOut size={18} />
        Sign Out
      </button>

      {/* App Version */}
      <p className="mt-4 text-center text-xs text-white/15">v1.0.0</p>
    </div>
  );
}
