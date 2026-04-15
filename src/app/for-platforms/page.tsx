import type { Metadata } from "next";
import LandingShell from "@/components/LandingShell";
import { FadeInSection } from "@/components/AnimatedSections";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "DimeTech for Platforms \u2014 Embedded Giving via API",
  description: "One API integration embeds tax-deductible donations across your entire transaction volume. Per-merchant attribution. Full audit trail.",
};

function ApiMockup() {
  return (
    <div className="overflow-hidden rounded-xl" style={{ backgroundColor: "#18181B", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
        <span className="ml-2 text-xs" style={{ fontFamily: "monospace", color: "rgba(255,255,255,0.3)" }}>POST /v1/transactions</span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 text-sm leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.5)" }}>
{`{
  `}<span style={{ color: "#0D9373" }}>&quot;transaction_id&quot;</span>{`: "txn_4827",
  `}<span style={{ color: "#0D9373" }}>&quot;merchant_id&quot;</span>{`: "mch_uber_ca",
  `}<span style={{ color: "#0D9373" }}>&quot;amount&quot;</span>{`: 18.73,
  `}<span style={{ color: "#0D9373" }}>&quot;donation&quot;</span>{`: {
    "amount": 0.11,
    "recipient": "Greater Toronto Food Bank",
    "receipt_status": `}<span style={{ color: "#22C55E" }}>&quot;verified&quot;</span>{`,
    "tax_deductible": true
  }
}`}
      </pre>
    </div>
  );
}

export default function ForPlatforms() {
  return (
    <LandingShell
      activeSegment="platforms"
      howItWorksHeadline="One API call. Full audit trail."
      howItWorksSteps={[
        { n: "01", t: "Integrate once via REST API or webhook", b: "A single endpoint covers all merchants on your platform. Per-merchant attribution is automatic. No frontend deployment required." },
        { n: "02", t: "Donations are generated per transaction", b: "Each completed transaction triggers a tracked micro-donation. Amount, recipient, merchant ID, and receipt ID are logged against the transaction." },
        { n: "03", t: "Consolidated reporting for compliance", b: "Quarterly tax receipts, per-merchant breakdowns, and a full audit trail for your compliance and finance teams." },
      ]}
      sideVisual={<ApiMockup />}
    >
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111", paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.95) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12">
          <div className="max-w-[680px]">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>For platforms &amp; marketplaces</p>
            </FadeInSection>
            <div className="mt-5">
              <TextReveal
                text="Embed giving across your entire transaction volume. One integration."
                tag="h1"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }}
              />
            </div>
            <FadeInSection delay={0.15}>
              <p className="mt-6 max-w-[500px] text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                DimeTech sits downstream of payment, upstream of reconciliation. A single API integration covers all merchants. Per-merchant attribution, consolidated reporting, and a full audit trail for compliance teams.
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
