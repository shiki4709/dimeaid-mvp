import Link from "next/link";
import {
  FadeInSection,
  SlideInFromLeft,
  ScaleIn,
} from "@/components/AnimatedSections";
import ImpactCounter from "@/components/ImpactCounter";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import type { ReactNode } from "react";

interface LandingShellProps {
  children: ReactNode;
  activeSegment?: "restaurants" | "platforms" | "grocery";
  howItWorksSteps: readonly { n: string; t: string; b: string }[];
  howItWorksHeadline: string;
  sideVisual: ReactNode;
}

export default function LandingShell({
  children,
  activeSegment,
  howItWorksSteps,
  howItWorksHeadline,
  sideVisual,
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

      {/* ─── HERO (injected per page) ─────────────── */}
      {children}

      {/* ─── STATS ────────────────────────────────── */}
      <section style={{ backgroundColor: "#FAFAFA", borderBottom: "1px solid #EBEBEB" }}>
        <div className="mx-auto max-w-[1120px] px-6 py-12 lg:px-12">
          <div className="grid grid-cols-3 gap-8">
            <ImpactCounter value="142,857" label="Donations verified" color="#0D9373" />
            <ImpactCounter value="15,714" label="Transactions processed today" color="#0D9373" />
            <ImpactCounter value="0" label="Checkout modifications required" prefix="" color="#0D9373" />
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────── */}
      <section id="how" className="px-6 lg:px-12" style={{ backgroundColor: "#fff", paddingTop: "clamp(64px, 10vw, 110px)", paddingBottom: "clamp(64px, 10vw, 110px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-start md:gap-20">
            <div>
              <FadeInSection>
                <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>Integration</p>
              </FadeInSection>
              <TextReveal
                text={howItWorksHeadline}
                tag="h2"
                className="mt-3"
                style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#111" }}
                delay={0.1}
              />

              <div className="mt-10 space-y-8">
                {howItWorksSteps.map((step, i) => (
                  <SlideInFromLeft key={step.n} delay={i * 0.15}>
                    <div className="flex gap-4">
                      <span className="mt-1 text-xs font-bold" style={{ color: "#0D9373" }}>{step.n}</span>
                      <div>
                        <h3 className="text-sm font-semibold" style={{ color: "#111" }}>{step.t}</h3>
                        <p className="mt-1 text-sm leading-relaxed" style={{ color: "#777" }}>{step.b}</p>
                      </div>
                    </div>
                  </SlideInFromLeft>
                ))}
              </div>
            </div>

            <ScaleIn delay={0.2}>
              {sideVisual}
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS CASE ────────────────────────── */}
      <section className="px-6 lg:px-12" style={{ backgroundColor: "#FAFAFA", paddingTop: "clamp(64px, 10vw, 100px)", paddingBottom: "clamp(64px, 10vw, 100px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>Business case</p>
          </FadeInSection>
          <TextReveal
            text="What your finance team wants to hear."
            tag="h2"
            className="mt-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#111" }}
            delay={0.1}
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl md:grid-cols-3" style={{ backgroundColor: "#EBEBEB" }}>
            {([
              { stat: "$0", desc: "Net cost to your business", detail: "Donations are micro-amounts routed at the transaction layer. There is no markup, no subscription, and no budget allocation required." },
              { stat: "1\u20132%", desc: "Documented revenue uplift", detail: "Published research shows cause-linked commerce increases average order value. DimeTech gives you per-transaction attribution to quantify the lift." },
              { stat: "100%", desc: "Tax-deductible", detail: "Receipts are issued by CRA-registered charities (or 501(c)(3) equivalents in the US). Deductible under ITA s.110.1. Quarterly consolidation, audit-ready." },
            ] as const).map((item, i) => (
              <FadeInSection key={item.stat} delay={i * 0.1}>
                <div className="p-8" style={{ backgroundColor: "#fff" }}>
                  <p className="text-3xl font-bold tracking-tight" style={{ color: "#0D9373" }}>{item.stat}</p>
                  <p className="mt-1 text-sm font-semibold" style={{ color: "#111" }}>{item.desc}</p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "#777" }}>{item.detail}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 lg:px-12" style={{ backgroundColor: "#111", paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(80px, 12vw, 140px)" }}>
        <div className="relative mx-auto max-w-[1120px]">
          <div className="max-w-[520px]">
            <TextReveal
              text="One integration. Verified giving. Tax-efficient by default."
              tag="h2"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#fff" }}
            />
            <FadeInSection delay={0.3}>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Whether you process 100 transactions a day or 100,000 &mdash; DimeTech works the same way. Connect once, and every transaction generates a tracked, tax-deductible donation with no changes to your checkout.
              </p>
              <div className="mt-8">
                <MagneticButton
                  href="mailto:larry@lazarusbleau.com"
                  className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm transition-transform active:scale-[0.98]"
                  style={{ backgroundColor: "#0D9373", color: "#fff", fontWeight: 600 }}
                >
                  Talk to Us
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </MagneticButton>
              </div>
              <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                Or email{" "}
                <a href="mailto:larry@lazarusbleau.com" className="underline transition-colors hover:text-white/60" style={{ color: "rgba(255,255,255,0.4)" }}>larry@lazarusbleau.com</a>
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────── */}
      <footer style={{ backgroundColor: "#111", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="mx-auto max-w-[1120px] px-6 py-10 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold" style={{ backgroundColor: "#0D9373", color: "#fff" }}>D</div>
              <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>DimeTech</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>by Lazarus Invents</span>
            </div>
            <div className="flex flex-wrap items-center gap-5">
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
