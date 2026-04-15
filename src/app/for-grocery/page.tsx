import type { Metadata } from "next";
import LandingShell from "@/components/LandingShell";
import { FadeInSection } from "@/components/AnimatedSections";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "DimeTech for Grocery & Retail \u2014 Middleware Integration",
  description: "Works with NCR, Toshiba, Shopify POS, and custom systems. Runs after the sale. Zero checkout disruption.",
};

function PosFlow() {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop&q=80"
        alt="Grocery store checkout"
        width={600}
        height={400}
        loading="lazy"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)" }}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold" style={{ color: "#111" }}>Store #18 &middot; Lane 4</span>
            <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#0D9373" }}>
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#0D9373" }} />
              logged
            </span>
          </div>
          <div className="mt-2.5 space-y-1">
            <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
              <span>basket total</span>
              <span className="font-mono font-medium" style={{ color: "#111" }}>$87.42</span>
            </div>
            <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
              <span>donation</span>
              <span className="font-mono font-medium" style={{ color: "#0D9373" }}>$0.10</span>
            </div>
            <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
              <span>daily store accrual</span>
              <span className="font-mono font-medium" style={{ color: "#111" }}>$380.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ForGrocery() {
  return (
    <LandingShell
      activeSegment="grocery"
      howItWorksHeadline="Runs after the sale. Checkout speed is unaffected."
      howItWorksSteps={[
        { n: "01", t: "Middleware listens to completed transactions", b: "Compatible with NCR, Toshiba, Shopify POS, and custom enterprise systems. Cloud POS uses webhooks. Legacy systems use a lightweight middleware agent or nightly batch." },
        { n: "02", t: "Daily accrual per store, per banner, per region", b: "3,800 transactions at Store #18 = $380 accrued. The system creates daily charity liability entries ready for your ERP." },
        { n: "03", t: "Quarterly settlement and tax receipts", b: "Consolidated charitable tax receipt covering all stores. Compatible with SAP, Oracle, NetSuite, and QuickBooks export formats. Audit-ready." },
      ]}
      sideVisual={<PosFlow />}
    >
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111", paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1400&h=800&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.95) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12">
          <div className="max-w-[680px]">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>For grocery &amp; retail</p>
            </FadeInSection>
            <div className="mt-5">
              <TextReveal
                text="Enterprise POS integration. Zero checkout disruption. 100-store rollout in weeks."
                tag="h1"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }}
              />
            </div>
            <FadeInSection delay={0.15}>
              <p className="mt-6 max-w-[500px] text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                DimeTech installs as a middleware layer that listens to completed transactions. No changes to card authorization, pricing, tax engine, or inventory. Runs after the sale — your lanes are unaffected.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton
                  href="mailto:larry@lazarusbleau.com"
                  className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm transition-transform active:scale-[0.98]"
                  style={{ backgroundColor: "#0D9373", color: "#fff", fontWeight: 600 }}
                >
                  Talk to Us
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </MagneticButton>
                <a href="#how" className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>How it works &rarr;</a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </LandingShell>
  );
}
