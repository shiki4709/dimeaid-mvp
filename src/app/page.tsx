import type { Metadata } from "next";
import Link from "next/link";
import LottieHero from "@/components/LottieHero";
import {
  FadeInSection,
  SlideInFromLeft,
  ScaleIn,
  HoverCard,
} from "@/components/AnimatedSections";

export const metadata: Metadata = {
  title: "DimeTech \u2014 Every Transaction Fights Hunger",
  description:
    "DimeTech turns everyday commerce into a force for good. Verified charitable impact, real tax deductions, zero customer friction.",
};

export default function LandingPage() {
  return (
    <div className="min-h-dvh" style={{ backgroundColor: "#FAF9F7", color: "#2C2825" }}>
      {/* ─── NAV ──────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50"
        style={{ backgroundColor: "rgba(250,249,247,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E8E4DF" }}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold" style={{ background: "linear-gradient(135deg, #5C534A, #44403C)", color: "#FAF9F7" }}>D</div>
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "18px", color: "#2C2825" }}>DimeTech</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#how" className="hidden text-sm md:block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279", fontWeight: 500 }}>How It Works</Link>
            <Link href="#why" className="hidden text-sm md:block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279", fontWeight: 500 }}>For Partners</Link>
            <a href="mailto:larry@lazarusbleau.com" className="rounded-lg px-5 py-2 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "linear-gradient(135deg, #5C534A, #44403C)", color: "#FAF9F7", fontWeight: 600 }}>Partner With Us</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 lg:px-12"
        style={{ paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(60px, 8vw, 100px)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 70% 0%, rgba(139,115,85,0.04), transparent 70%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(92,83,74,0.03), transparent)" }} />

        <div className="relative mx-auto max-w-[1120px]">
          <div className="flex items-center justify-between">
            <div className="max-w-[640px]">
              <FadeInSection>
                <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "#2C2825" }}>
                  Turn everyday commerce into a force for good.
                </h1>
              </FadeInSection>
              <FadeInSection delay={0.15}>
                <p className="mt-5 max-w-[480px] text-lg leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6259" }}>
                  DimeTech embeds verified charitable giving into every transaction&mdash;invisibly. Your business gains a tax deduction, a brand story, and real community impact. Your customers notice nothing different.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a href="mailto:larry@lazarusbleau.com" className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 transition-transform hover:scale-[1.02] active:scale-[0.98]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "linear-gradient(135deg, #5C534A, #44403C)", color: "#FAF9F7", fontWeight: 600, fontSize: "15px" }}>
                    Start a Conversation
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                  <a href="mailto:larry@lazarusbleau.com" className="text-sm transition-colors hover:text-[#6B6259]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279", fontWeight: 500 }}>
                    Or email us directly &rarr;
                  </a>
                </div>
              </FadeInSection>
            </div>

            {/* Lottie animation (desktop only) */}
            <FadeInSection delay={0.4} className="hidden md:block">
              <LottieHero />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────── */}
      <section style={{ borderTop: "1px solid #E8E4DF", borderBottom: "1px solid #E8E4DF" }}>
        <div className="mx-auto max-w-[1120px] px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {([
              { val: "$0", lbl: "Cost to partner" },
              { val: "100%", lbl: "Verified &amp; auditable" },
              { val: "Real", lbl: "Tax deduction" },
              { val: "Zero", lbl: "Customer friction" },
            ] as const).map((s, i) => (
              <FadeInSection key={s.lbl} delay={i * 0.1}>
                <div className="py-8 md:py-10" style={{ paddingLeft: i > 0 ? "clamp(16px, 3vw, 40px)" : undefined, borderLeft: i > 0 ? "1px solid #E8E4DF" : undefined }}>
                  <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1, letterSpacing: "-0.02em", color: "#8B7355" }}>{s.val}</p>
                  <p className="mt-1.5 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279", fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: s.lbl }} />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────── */}
      <section id="how" className="px-6 lg:px-12" style={{ paddingTop: "clamp(64px, 10vw, 110px)", paddingBottom: "clamp(64px, 10vw, 110px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-start md:gap-20">
            <div>
              <FadeInSection>
                <p className="text-xs uppercase tracking-[0.12em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95", fontWeight: 500 }}>How it works</p>
                <h2 className="mt-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.12, letterSpacing: "-0.01em", color: "#2C2825" }}>
                  Invisible to customers.<br />Valuable to your business.
                </h2>
              </FadeInSection>
              <div className="mt-10 space-y-8">
                {([
                  { n: "01", t: "We integrate with your platform", b: "One simple integration. No changes to your checkout, no prompts for customers, no disruption to your operations." },
                  { n: "02", t: "Every transaction creates impact", b: "Each sale automatically generates a verified charitable contribution to a registered food bank. Fully tracked, fully auditable." },
                  { n: "03", t: "Your company gets the tax receipt", b: "A consolidated charitable tax receipt is issued directly to your company. One deduction, fully documented, every quarter." },
                ] as const).map((step, i) => (
                  <SlideInFromLeft key={step.n} delay={i * 0.15}>
                    <div className="flex gap-5">
                      <span className="mt-0.5 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95", fontWeight: 500 }}>{step.n}</span>
                      <div>
                        <h3 className="text-base" style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: "#2C2825", fontSize: "18px" }}>{step.t}</h3>
                        <p className="mt-1 text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279" }}>{step.b}</p>
                      </div>
                    </div>
                  </SlideInFromLeft>
                ))}
              </div>
            </div>

            {/* What you get */}
            <ScaleIn delay={0.2}>
              <div className="space-y-2.5 rounded-xl p-6 md:p-8" style={{ background: "linear-gradient(160deg, #F3F0EC 0%, #EBE7E2 100%)" }}>
                <div className="rounded-lg px-5 py-3.5" style={{ backgroundColor: "rgba(250,249,247,0.8)" }}>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#8B7355" /><path d="M5 8l2 2 4-4" stroke="#FAF9F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5D4D", fontWeight: 600 }}>Tax deduction</span>
                  </div>
                  <p className="mt-1 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95" }}>Consolidated charitable receipt issued quarterly</p>
                </div>

                <div className="flex justify-center py-0.5">
                  <svg width="1" height="12"><line x1="0.5" y1="0" x2="0.5" y2="12" stroke="#D5CFC8" strokeWidth="1" strokeDasharray="3 3" /></svg>
                </div>

                <div className="rounded-lg px-5 py-3.5" style={{ backgroundColor: "rgba(250,249,247,0.8)" }}>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#8B7355" /><path d="M5 8l2 2 4-4" stroke="#FAF9F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5D4D", fontWeight: 600 }}>Verified impact</span>
                  </div>
                  <p className="mt-1 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95" }}>Every donation tracked, audited, and attributable to your brand</p>
                </div>

                <div className="flex justify-center py-0.5">
                  <svg width="1" height="12"><line x1="0.5" y1="0" x2="0.5" y2="12" stroke="#D5CFC8" strokeWidth="1" strokeDasharray="3 3" /></svg>
                </div>

                <div className="rounded-lg px-5 py-3.5" style={{ backgroundColor: "rgba(250,249,247,0.8)" }}>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#8B7355" /><path d="M5 8l2 2 4-4" stroke="#FAF9F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5D4D", fontWeight: 600 }}>Brand story</span>
                  </div>
                  <p className="mt-1 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95" }}>&ldquo;Every order fights hunger&rdquo; &mdash; a cause marketing headline that writes itself</p>
                </div>

                <div className="flex justify-center py-0.5">
                  <svg width="1" height="12"><line x1="0.5" y1="0" x2="0.5" y2="12" stroke="#D5CFC8" strokeWidth="1" strokeDasharray="3 3" /></svg>
                </div>

                <div className="rounded-lg px-5 py-3.5" style={{ backgroundColor: "rgba(250,249,247,0.8)" }}>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#8B7355" /><path d="M5 8l2 2 4-4" stroke="#FAF9F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5D4D", fontWeight: 600 }}>Zero customer friction</span>
                  </div>
                  <p className="mt-1 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95" }}>No prompts, no opt-ins, no checkout changes. Completely invisible.</p>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ─── FOR PARTNERS ─────────────────────────── */}
      <section id="why" className="px-6 lg:px-12" style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(64px, 10vw, 110px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <FadeInSection>
            <p className="text-xs uppercase tracking-[0.12em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95", fontWeight: 500 }}>For partners</p>
            <h2 className="mt-3 max-w-[520px]" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.12, letterSpacing: "-0.01em", color: "#2C2825" }}>
              A tax deduction, a brand story, and zero work for your team.
            </h2>
          </FadeInSection>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {([
              { label: "Tax deduction", head: "Your company gets a consolidated charitable tax receipt.", body: "Receipts are issued directly to your company by a registered food bank. At scale, this is a significant deduction\u2014fully documented." },
              { label: "Brand lift", head: "\u201CEvery order fights hunger.\u201D That\u2019s your headline.", body: "Cause marketing drives 1\u20132% revenue uplift. DimeTech gives you the story and the proof to back it up." },
              { label: "Zero friction", head: "No prompts. No opt-ins. No checkout changes.", body: "Completely invisible to customers. Your team integrates once and every transaction automatically generates impact." },
            ] as const).map((item, i) => (
              <ScaleIn key={item.label} delay={i * 0.12}>
                <HoverCard
                  className="relative overflow-hidden rounded-xl p-6 md:p-7"
                  style={{
                    background: i === 0
                      ? "linear-gradient(160deg, #F3F0EC 0%, #EBE7E2 100%)"
                      : i === 1
                      ? "linear-gradient(160deg, #F0ECE7 0%, #E8E3DD 100%)"
                      : "linear-gradient(160deg, #ECE8E3 0%, #E5E0DA 100%)",
                  }}
                >
                  {/* Card geometric accent */}
                  <svg className="pointer-events-none absolute -right-4 -top-4" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                    {i === 0 && <circle cx="40" cy="40" r="32" stroke="#C4BBB0" strokeWidth="0.75" opacity="0.4" />}
                    {i === 1 && <rect x="12" y="12" width="56" height="56" rx="8" stroke="#C4BBB0" strokeWidth="0.75" opacity="0.4" transform="rotate(12 40 40)" />}
                    {i === 2 && <><polygon points="40,8 72,60 8,60" stroke="#C4BBB0" strokeWidth="0.75" fill="none" opacity="0.4" /><circle cx="40" cy="42" r="12" stroke="#C4BBB0" strokeWidth="0.5" opacity="0.25" /></>}
                  </svg>
                  <span className="relative text-xs uppercase tracking-[0.1em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95", fontWeight: 500 }}>{item.label}</span>
                  <h3 className="mt-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "20px", lineHeight: 1.25, color: "#2C2825" }}>{item.head}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279" }}>{item.body}</p>
                </HoverCard>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 lg:px-12" style={{ paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(80px, 12vw, 140px)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, #FAF9F7 0%, #F0ECE7 40%, #E5E0DA 100%)" }} />

        {/* CTA geometric decoration */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <svg className="absolute right-8 top-1/2 hidden -translate-y-1/2 md:block" width="300" height="300" viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="120" stroke="#D5CFC8" strokeWidth="0.75" />
            <circle cx="150" cy="150" r="80" stroke="#C4BBB0" strokeWidth="0.5" strokeDasharray="3 5" />
            <circle cx="150" cy="150" r="40" fill="#8B7355" opacity="0.03" />
            <line x1="30" y1="150" x2="270" y2="150" stroke="#D5CFC8" strokeWidth="0.5" />
            <line x1="150" y1="30" x2="150" y2="270" stroke="#D5CFC8" strokeWidth="0.5" />
            <circle cx="150" cy="30" r="3" fill="#8B7355" opacity="0.15" />
            <circle cx="270" cy="150" r="3" fill="#8B7355" opacity="0.15" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1120px]">
          <FadeInSection>
            <div className="max-w-[520px]">
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#2C2825" }}>
                Ready to make every<br />transaction count?
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6259" }}>
                Zero cost. A real tax deduction. A brand story customers care about.
              </p>
              <a href="mailto:larry@lazarusbleau.com" className="mt-8 inline-flex items-center gap-2 rounded-lg px-7 py-3.5 transition-transform hover:scale-[1.02] active:scale-[0.98]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "linear-gradient(135deg, #5C534A, #44403C)", color: "#FAF9F7", fontWeight: 600, fontSize: "15px" }}>
                Partner With Us
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <p className="mt-5 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95" }}>
                Or email{" "}
                <a href="mailto:larry@lazarusbleau.com" className="underline transition-colors hover:text-[#6B6259]" style={{ color: "#8C8279" }}>larry@lazarusbleau.com</a>
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────── */}
      <footer style={{ backgroundColor: "#2C2825" }}>
        <div className="mx-auto max-w-[1120px] px-6 py-10 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-semibold" style={{ background: "linear-gradient(135deg, #8B7355, #6B5D4D)", color: "#FAF9F7" }}>D</div>
              <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: "#E8E4DF" }}>DimeTech</span>
              <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6259" }}>by Lazarus Invents</span>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="#how" className="text-xs transition-colors hover:text-[#E8E4DF]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279" }}>How It Works</Link>
              <Link href="#why" className="text-xs transition-colors hover:text-[#E8E4DF]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279" }}>For Partners</Link>
              <a href="mailto:larry@lazarusbleau.com" className="text-xs transition-colors hover:text-[#E8E4DF]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279" }}>Contact</a>
            </div>
          </div>
          <p className="mt-8 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5C534A" }}>
            &copy; {new Date().getFullYear()} Lazarus Invents Inc. Toronto &amp; San Francisco.
          </p>
        </div>
      </footer>
    </div>
  );
}
