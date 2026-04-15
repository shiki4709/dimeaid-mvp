import type { Metadata } from "next";
import LandingShell from "@/components/LandingShell";
import { FadeInSection } from "@/components/AnimatedSections";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "DimeTech for Restaurants",
  description: "Turn every order into a tracked, tax-deductible donation. Designed for Toast, Square, and Clover. Zero checkout changes.",
};

export default function ForRestaurants() {
  return (
    <LandingShell activeSegment="restaurants">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111", paddingTop: "clamp(72px, 10vw, 120px)", paddingBottom: "clamp(56px, 8vw, 80px)" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=700&fit=crop&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} loading="eager" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.5) 0%, rgba(17,17,17,0.92) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>For restaurants &amp; QSR</p>
          </FadeInSection>
          <div className="mt-4 max-w-[580px]">
            <TextReveal text="Every order fights hunger. Your customers pay the same price." tag="h1" style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }} />
          </div>
          <FadeInSection delay={0.15}>
            <p className="mt-5 max-w-[440px] text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              DimeTech connects to your POS and routes $0.10 from every transaction to a registered food bank. No checkout changes. You get a tax deduction.
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
            { n: "01", t: "Works with your POS", d: "Toast, Square, Clover, and custom systems. One-time setup, no changes to your menu, pricing, or checkout." },
            { n: "02", t: "Quarterly tax receipts", d: "One consolidated charitable receipt per quarter covering all locations. Audit-ready." },
            { n: "03", t: "A story that sells itself", d: "\u201CEvery order at our restaurant fights hunger.\u201D Always-on cause marketing, not a seasonal campaign." },
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
