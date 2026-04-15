import type { Metadata } from "next";
import LandingShell from "@/components/LandingShell";
import { FadeInSection } from "@/components/AnimatedSections";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "DimeTech for Restaurants \u2014 Embedded Giving at the POS",
  description: "Turn every order into a verified, tax-deductible donation. Works with Toast, Square, and Clover. Zero checkout changes.",
};

function TransactionCard() {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&q=80"
        alt="Restaurant dining"
        width={600}
        height={400}
        loading="lazy"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)" }}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold" style={{ color: "#111" }}>Order #1,847</span>
            <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#0D9373" }}>
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#0D9373" }} />
              verified
            </span>
          </div>
          <div className="mt-2.5 space-y-1">
            <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
              <span>order total</span>
              <span className="font-mono font-medium" style={{ color: "#111" }}>$42.50</span>
            </div>
            <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
              <span>donation</span>
              <span className="font-mono font-medium" style={{ color: "#0D9373" }}>$0.10</span>
            </div>
            <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
              <span>recipient</span>
              <span className="font-mono font-medium" style={{ color: "#111" }}>Local Food Bank</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ForRestaurants() {
  return (
    <LandingShell
      activeSegment="restaurants"
      howItWorksHeadline="Works with your existing POS. No new hardware."
      howItWorksSteps={[
        { n: "01", t: "Connect your POS system", b: "Compatible with Toast, Square, Clover, and custom setups. One-time configuration. No changes to your menu, pricing, or checkout flow." },
        { n: "02", t: "Every order generates a donation", b: "Each completed transaction triggers a $0.10 donation to a registered food bank. Tracked per-order with a receipt ID." },
        { n: "03", t: "You get a quarterly tax receipt", b: "A consolidated charitable tax receipt covering all donations for the quarter. One deduction, fully documented, audit-ready." },
      ]}
      sideVisual={<TransactionCard />}
    >
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111", paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=800&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.5) 0%, rgba(17,17,17,0.9) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12">
          <div className="max-w-[680px]">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>For restaurants &amp; QSR</p>
            </FadeInSection>
            <div className="mt-5">
              <TextReveal
                text="Every order fights hunger. Your customers pay the same price."
                tag="h1"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }}
              />
            </div>
            <FadeInSection delay={0.15}>
              <p className="mt-6 max-w-[500px] text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                DimeTech connects to your POS and routes $0.10 from every transaction to a registered food bank. No checkout changes. No customer prompts. You get a tax deduction and a brand story that writes itself.
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
