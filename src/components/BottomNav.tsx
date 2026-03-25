"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ClipboardList, User } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "#", icon: Search, label: "Search" },
  { href: "#", icon: ClipboardList, label: "Orders" },
  { href: "/impact", icon: User, label: "Account" },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#09090B]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center justify-around py-2">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs transition-colors ${
                active ? "text-white" : "text-white/50 hover:text-white/70"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 1.5} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
