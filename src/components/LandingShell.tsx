import Link from "next/link";
import { FadeInSection } from "@/components/AnimatedSections";
import MagneticButton from "@/components/MagneticButton";
import type { ReactNode } from "react";

interface LandingShellProps {
  children: ReactNode;
  activeSegment?: "restaurants" | "platforms" | "grocery";
}

export default function LandingShell({
  children,
  activeSegment,
}: LandingShellProps) {
  const segments = [
    { key: "restaurants" as const, label: "Restaurants", href: "/for-restaurants" },
    { key: "platforms" as const, label: "Platforms", href: "/for-platforms" },
    { key: "grocery" as const, label: "Grocery & Retail", href: "/for-grocery" },
  ];

  return (
    <div className="min-h-dvh" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ─── NAV ──────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50"
        style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #EBEBEB" }}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold" style={{ backgroundColor: "#0D9373", color: "#fff" }}>D</div>
              <span className="text-sm font-semibold tracking-tight" style={{ color: "#111" }}>DimeTech</span>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            {segments.map((seg) => (
              <Link
                key={seg.key}
                href={seg.href}
                className="hidden rounded-md px-3 py-1.5 text-sm md:block"
                style={{
                  color: activeSegment === seg.key ? "#0D9373" : "#888",
                  fontWeight: activeSegment === seg.key ? 600 : 500,
                  backgroundColor: activeSegment === seg.key ? "rgba(13,147,115,0.06)" : "transparent",
                }}
              >
                {seg.label}
              </Link>
            ))}
            <MagneticButton
              href="mailto:larry@lazarusbleau.com"
              className="ml-4 rounded-md px-4 py-1.5 text-sm"
              style={{ backgroundColor: "#0D9373", color: "#fff", fontWeight: 600 }}
              strength={0.2}
            >
              Talk to Us
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* ─── PAGE CONTENT ─────────────────────────── */}
      {children}

      {/* ─── BACK TO HOME + CTA ───────────────────── */}
      <section className="px-6 lg:px-12" style={{ backgroundColor: "#FAFAFA", paddingTop: "clamp(48px, 8vw, 80px)", paddingBottom: "clamp(48px, 8vw, 80px)" }}>
        <div className="mx-auto max-w-[1120px] text-center">
          <FadeInSection>
            <p className="text-sm" style={{ color: "#777" }}>
              Want the full picture?
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors"
                style={{ backgroundColor: "#111", color: "#fff" }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3m0 0l4 4M3 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                See the full product
              </Link>
              <MagneticButton
                href="mailto:larry@lazarusbleau.com"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm transition-transform active:scale-[0.98]"
                style={{ backgroundColor: "#0D9373", color: "#fff", fontWeight: 600 }}
              >
                Talk to Us
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </MagneticButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────── */}
      <footer style={{ backgroundColor: "#111", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="mx-auto max-w-[1120px] px-6 py-10 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2.5">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold" style={{ backgroundColor: "#0D9373", color: "#fff" }}>D</div>
                <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>DimeTech</span>
              </Link>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>by Lazarus Invents</span>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/" className="text-xs transition-colors hover:text-white/60" style={{ color: "rgba(255,255,255,0.35)" }}>Home</Link>
              {segments.map((seg) => (
                <Link key={seg.key} href={seg.href} className="text-xs transition-colors hover:text-white/60" style={{ color: "rgba(255,255,255,0.35)" }}>{seg.label}</Link>
              ))}
              <a href="mailto:larry@lazarusbleau.com" className="text-xs transition-colors hover:text-white/60" style={{ color: "rgba(255,255,255,0.35)" }}>Contact</a>
            </div>
          </div>
          <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            &copy; {new Date().getFullYear()} Lazarus Invents Inc. Toronto &amp; San Francisco.
          </p>
        </div>
      </footer>
    </div>
  );
}
