import type { Metadata } from "next";
import LandingShell from "@/components/LandingShell";
import { FadeInSection } from "@/components/AnimatedSections";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "DimeTech for Platforms \u2014 Embedded Giving via API",
  description: "One API integration embeds tax-deductible donations across your entire transaction volume. Per-merchant attribution. Full audit trail.",
};

export default function ForPlatforms() {
  return (
    <LandingShell activeSegment="platforms">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111", paddingTop: "clamp(80px, 12vw, 120px)", paddingBottom: "clamp(60px, 8vw, 80px)" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }} loading="eager" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.95) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12">
          <div className="max-w-[600px]">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>For platforms &amp; marketplaces</p>
            </FadeInSection>
            <div className="mt-4">
              <TextReveal text="One API. Giving embedded across your entire transaction volume." tag="h1" style={{ fontSize: "clamp(28px, 4.5vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }} />
            </div>
            <FadeInSection delay={0.15}>
              <p className="mt-5 max-w-[460px] text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                DimeTech sits downstream of payment, upstream of reconciliation. A single integration covers all merchants. Per-merchant attribution and a full audit trail for compliance.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="mt-8">
                <MagneticButton href="mailto:larry@lazarusbleau.com" className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm active:scale-[0.98]" style={{ backgroundColor: "#0D9373", color: "#fff", fontWeight: 600 }}>
                  Talk to Us <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </MagneticButton>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="px-6 lg:px-12" style={{ backgroundColor: "#fff", paddingTop: "clamp(48px, 8vw, 80px)", paddingBottom: "clamp(48px, 8vw, 80px)" }}>
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-3">
          {([
            { title: "Single API integration", desc: "REST API or webhook. One endpoint covers all merchants on your platform. No frontend deployment required." },
            { title: "Per-merchant attribution", desc: "Every donation is tagged to the originating merchant. Consolidated reporting for your finance and compliance teams." },
            { title: "Audit-ready documentation", desc: "Quarterly tax receipts, per-merchant breakdowns, and a full audit trail. Deductible under ITA s.110.1 or IRC \u00A7170." },
          ] as const).map((item, i) => (
            <FadeInSection key={item.title} delay={i * 0.1}>
              <div>
                <span className="text-xs font-bold" style={{ color: "#0D9373" }}>0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold" style={{ color: "#111" }}>{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "#777" }}>{item.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </LandingShell>
  );
}
