import type { Metadata } from "next";
import LandingShell from "@/components/LandingShell";
import { FadeInSection } from "@/components/AnimatedSections";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "DimeTech for Grocery & Retail",
  description: "Works with NCR, Toshiba, Shopify POS. Runs after the sale. Zero checkout disruption. 100-store rollout in weeks.",
};

export default function ForGrocery() {
  return (
    <LandingShell activeSegment="grocery">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111", paddingTop: "clamp(72px, 10vw, 120px)", paddingBottom: "clamp(56px, 8vw, 80px)" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1400&h=700&fit=crop&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }} loading="eager" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.95) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>For grocery &amp; retail</p>
          </FadeInSection>
          <div className="mt-4 max-w-[580px]">
            <TextReveal text="Enterprise POS integration. Zero checkout disruption. 100 stores in weeks." tag="h1" style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }} />
          </div>
          <FadeInSection delay={0.15}>
            <p className="mt-5 max-w-[440px] text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Middleware that listens to completed transactions. No changes to card authorization, pricing, tax engine, or inventory. Runs after the sale.
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
            { n: "01", t: "Works with any POS", d: "NCR, Toshiba, Shopify POS, Lightspeed, custom systems. Cloud POS via webhooks, legacy via middleware agent." },
            { n: "02", t: "Daily accrual by store", d: "3,800 transactions at Store #18 = $380 accrued. Daily charity liability entries ready for SAP, Oracle, or NetSuite." },
            { n: "03", t: "Consolidated quarterly receipts", d: "One tax receipt covering all stores, banners, and regions. ITA s.110.1 compliant. Audit-ready." },
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
