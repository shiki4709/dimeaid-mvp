import type { Metadata } from "next";
import LandingShell from "@/components/LandingShell";
import { FadeInSection } from "@/components/AnimatedSections";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "DimeTech for Grocery & Retail \u2014 Middleware POS Integration",
  description: "Works with NCR, Toshiba, Shopify POS, and custom systems. Runs after the sale. Zero checkout disruption. 100-store rollout in weeks.",
};

export default function ForGrocery() {
  return (
    <LandingShell activeSegment="grocery">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111", paddingTop: "clamp(80px, 12vw, 120px)", paddingBottom: "clamp(60px, 8vw, 80px)" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1400&h=800&fit=crop&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }} loading="eager" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.95) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12">
          <div className="max-w-[600px]">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>For grocery &amp; retail</p>
            </FadeInSection>
            <div className="mt-4">
              <TextReveal text="Enterprise POS integration. Zero checkout disruption. 100 stores in weeks." tag="h1" style={{ fontSize: "clamp(28px, 4.5vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }} />
            </div>
            <FadeInSection delay={0.15}>
              <p className="mt-5 max-w-[460px] text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                DimeTech installs as a middleware layer that listens to completed transactions. No changes to card authorization, pricing, tax engine, or inventory. Your lanes are unaffected.
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
            { title: "Works with any POS", desc: "NCR, Toshiba, Shopify POS, Lightspeed, and custom systems. Cloud POS uses webhooks. Legacy systems use a lightweight middleware agent." },
            { title: "Daily accrual by store", desc: "3,800 transactions at Store #18 = $380 accrued. Daily charity liability entries ready for your ERP. Compatible with SAP, Oracle, NetSuite." },
            { title: "Consolidated quarterly receipts", desc: "One tax receipt covering all stores, all banners, all regions. Deductible under ITA s.110.1. Audit-ready documentation included." },
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
