import type { Metadata } from "next";
import LandingShell from "@/components/LandingShell";
import { FadeInSection } from "@/components/AnimatedSections";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "DimeTech for Platforms",
  description: "One API integration embeds tax-deductible donations across your entire transaction volume. Per-merchant attribution.",
};

export default function ForPlatforms() {
  return (
    <LandingShell activeSegment="platforms">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111", paddingTop: "clamp(72px, 10vw, 120px)", paddingBottom: "clamp(56px, 8vw, 80px)" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=700&fit=crop&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }} loading="eager" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.95) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>For platforms &amp; marketplaces</p>
          </FadeInSection>
          <div className="mt-4 max-w-[580px]">
            <TextReveal text="One API. Giving embedded across your entire transaction volume." tag="h1" style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }} />
          </div>
          <FadeInSection delay={0.15}>
            <p className="mt-5 max-w-[440px] text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Downstream of payment, upstream of reconciliation. A single integration covers all merchants with per-merchant attribution and a full audit trail.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.25}>
            <div className="mt-7">
              <MagneticButton href="mailto:larry@lazarusbleau.com" className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm active:scale-[0.98]" style={{ backgroundColor: "#0D9373", color: "#fff", fontWeight: 600 }}>
                Talk to Us <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </MagneticButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Value props */}
      <section className="px-6 lg:px-12" style={{ paddingTop: "clamp(48px, 8vw, 72px)", paddingBottom: "clamp(48px, 8vw, 72px)" }}>
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-3">
          {([
            { n: "01", t: "Single API integration", d: "REST API or webhook. One endpoint covers all merchants on your platform. No frontend deployment required." },
            { n: "02", t: "Per-merchant attribution", d: "Every donation tagged to the originating merchant. Consolidated reporting for finance and compliance." },
            { n: "03", t: "Audit-ready documentation", d: "Quarterly tax receipts, per-merchant breakdowns, and full audit trail. ITA s.110.1 and IRC \u00A7170 compliant." },
          ] as const).map((item) => (
            <FadeInSection key={item.n} delay={parseInt(item.n) * 0.08}>
              <span className="text-xs font-bold" style={{ color: "#0D9373" }}>{item.n}</span>
              <h3 className="mt-2 text-sm font-semibold" style={{ color: "#111" }}>{item.t}</h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "#777" }}>{item.d}</p>
            </FadeInSection>
          ))}
        </div>
      </section>
    </LandingShell>
  );
}
