import type { Metadata } from "next";
import Link from "next/link";
import {
  FadeInSection,
  SlideInFromLeft,
  ScaleIn,
  HoverCard,
} from "@/components/AnimatedSections";
import ImpactCounter from "@/components/ImpactCounter";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "DimeTech \u2014 Embedded Giving at the Transaction Layer",
  description:
    "Embed tax-deductible micro-donations into every transaction. No checkout changes. Consolidated receipts. Full audit trail.",
};

export default function LandingPage() {
  return (
    <div className="min-h-dvh" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ─── NAV ──────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50"
        style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #EBEBEB" }}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold" style={{ backgroundColor: "#0D9373", color: "#fff" }}>D</div>
            <span className="text-sm font-semibold tracking-tight" style={{ color: "#111" }}>DimeTech</span>
          </div>
          <div className="flex items-center gap-1">
            <Link href="/for-restaurants" className="hidden rounded-md px-3 py-1.5 text-sm md:block" style={{ color: "#888", fontWeight: 500 }}>Restaurants</Link>
            <Link href="/for-platforms" className="hidden rounded-md px-3 py-1.5 text-sm md:block" style={{ color: "#888", fontWeight: 500 }}>Platforms</Link>
            <Link href="/for-grocery" className="hidden rounded-md px-3 py-1.5 text-sm md:block" style={{ color: "#888", fontWeight: 500 }}>Grocery &amp; Retail</Link>
            <MagneticButton
              href="mailto:larry@lazarusbleau.com"
              className="rounded-md px-4 py-1.5 text-sm"
              style={{ backgroundColor: "#0D9373", color: "#fff", fontWeight: 600 }}
              strength={0.2}
            >
              Talk to Us
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111", paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1400&h=800&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.5) 0%, rgba(17,17,17,0.9) 100%)" }} />
        </div>

        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12">
          <div className="max-w-[680px]">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>
                Automatic charitable giving for businesses
              </p>
            </FadeInSection>

            <div className="mt-5">
              <TextReveal
                text="Every sale feeds someone. Automatically. No checkout changes."
                tag="h1"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }}
              />
            </div>

            <FadeInSection delay={0.15}>
              <p className="mt-6 max-w-[500px] text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                DimeTech connects to your checkout and routes a small donation from every transaction to a registered food bank. Your company gets a tax deduction. Your customers see no difference. It just runs.
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
                <Link href="#how" className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
                  How it works &rarr;
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ─── DUAL VALUE PROP ─────────────────────── */}
      <section className="px-6 lg:px-12" style={{ backgroundColor: "#fff", paddingTop: "clamp(48px, 8vw, 72px)", paddingBottom: "clamp(48px, 8vw, 72px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <FadeInSection>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>A continuous impact engine</p>
            <p className="mt-2 text-center text-sm" style={{ color: "#888" }}>DimeTech creates value on both sides of the transaction.</p>
          </FadeInSection>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <FadeInSection delay={0.1}>
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#FAFAFA" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "#111" }}>For your business</p>
                <ul className="mt-5 space-y-4">
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs" style={{ backgroundColor: "#0D9373", color: "#fff" }}>1</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#111" }}>Tax deduction every quarter</p>
                      <p className="mt-0.5 text-sm" style={{ color: "#777" }}>One consolidated charitable receipt. Ready for your accountant.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs" style={{ backgroundColor: "#0D9373", color: "#fff" }}>2</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#111" }}>Customers spend more with you</p>
                      <p className="mt-0.5 text-sm" style={{ color: "#777" }}>Cause-linked brands see 1-2% revenue uplift. Measurable.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs" style={{ backgroundColor: "#0D9373", color: "#fff" }}>3</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#111" }}>Zero operational overhead</p>
                      <p className="mt-0.5 text-sm" style={{ color: "#777" }}>No checkout changes. No customer prompts. No new workflows.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#FAFAFA" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "#111" }}>For your community</p>
                <ul className="mt-5 space-y-4">
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs" style={{ backgroundColor: "#0D9373", color: "#fff" }}>1</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#111" }}>Steady funding for local food banks</p>
                      <p className="mt-0.5 text-sm" style={{ color: "#777" }}>Not a one-time donation. Every transaction generates ongoing support.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs" style={{ backgroundColor: "#0D9373", color: "#fff" }}>2</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#111" }}>Every donation is verified</p>
                      <p className="mt-0.5 text-sm" style={{ color: "#777" }}>Tracked per transaction. Fully auditable. No guesswork.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs" style={{ backgroundColor: "#0D9373", color: "#fff" }}>3</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#111" }}>Impact that scales with commerce</p>
                      <p className="mt-0.5 text-sm" style={{ color: "#777" }}>More sales means more meals. The system grows as your business grows.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

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
                text="Set it up once. Every sale donates automatically."
                tag="h2"
                className="mt-3"
                style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#111" }}
                delay={0.1}
              />

              <div className="mt-10 space-y-8">
                {([
                  { n: "01", t: "Connect your checkout system", b: "Works with Toast, Square, Clover, Stripe, and most POS systems. One-time setup, no hardware, no changes to your checkout." },
                  { n: "02", t: "Every sale generates a donation", b: "Each transaction automatically sends a small donation to a registered food bank. Fully tracked and verifiable." },
                  { n: "03", t: "You get a tax receipt every quarter", b: "One consolidated charitable receipt covering all donations. Tax-deductible in Canada and the US. Ready for your accountant." },
                ] as const).map((step, i) => (
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

            {/* Transaction flow visualization */}
            <ScaleIn delay={0.2}>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80"
                  alt="Customer completing a transaction at checkout"
                  width={600}
                  height={400}
                  loading="lazy"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)" }}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold" style={{ color: "#111" }}>txn_4827</span>
                      <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#0D9373" }}>
                        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#0D9373" }} />
                        verified
                      </span>
                    </div>
                    <div className="mt-2.5 space-y-1">
                      <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
                        <span>order</span>
                        <span className="font-mono font-medium" style={{ color: "#111" }}>$18.73</span>
                      </div>
                      <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
                        <span>donation</span>
                        <span className="font-mono font-medium" style={{ color: "#0D9373" }}>included</span>
                      </div>
                      <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
                        <span>recipient</span>
                        <span className="font-mono font-medium" style={{ color: "#111" }}>Local Food Bank</span>
                      </div>
                      <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
                        <span>status</span>
                        <span className="font-mono font-medium" style={{ color: "#0D9373" }}>verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ────────────────────────────── */}
      <section id="use-cases" className="px-6 lg:px-12" style={{ backgroundColor: "#FAFAFA", paddingTop: "clamp(64px, 10vw, 110px)", paddingBottom: "clamp(64px, 10vw, 110px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>Use cases</p>
          </FadeInSection>
          <TextReveal
            text="Works for restaurants, platforms, and retail chains."
            tag="h2"
            className="mt-3 max-w-[560px]"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#111" }}
            delay={0.1}
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {([
              { label: "Restaurants & QSR", head: "Every order feeds someone. Your checkout stays the same.", body: "Works with Toast, Square, and Clover. Set it up once, and every order automatically generates a donation. Your customers see no difference.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=340&fit=crop&q=80", alt: "Restaurant dining" },
              { label: "Platforms & marketplaces", head: "One integration covers every merchant on your platform.", body: "A single connection embeds giving across all your merchants. Each donation is tracked to the originating business.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop&q=80", alt: "Analytics dashboard" },
              { label: "Grocery & retail", head: "100 stores live in weeks. No checkout disruption.", body: "Connects to NCR, Toshiba, Shopify POS, and custom systems. Runs after the sale is complete, so your lanes are unaffected.", img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=340&fit=crop&q=80", alt: "Grocery store checkout" },
            ] as const).map((item, i) => (
              <ScaleIn key={item.label} delay={i * 0.1}>
                <HoverCard className="overflow-hidden rounded-xl" style={{ backgroundColor: "#fff" }}>
                  <div className="overflow-hidden" style={{ height: 180 }}>
                    <img
                      src={item.img}
                      alt={item.alt}
                      width={600}
                      height={340}
                      loading="lazy"
                      className="transition-transform duration-500 hover:scale-105"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "#0D9373" }}>{item.label}</span>
                    <h3 className="mt-2 text-base font-semibold leading-snug" style={{ color: "#111" }}>{item.head}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "#777" }}>{item.body}</p>
                  </div>
                </HoverCard>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUSINESS CASE ────────────────────────── */}
      <section className="px-6 lg:px-12" style={{ backgroundColor: "#fff", paddingTop: "clamp(64px, 10vw, 100px)", paddingBottom: "clamp(64px, 10vw, 100px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>Business case</p>
          </FadeInSection>
          <TextReveal
            text="Why your finance team will say yes."
            tag="h2"
            className="mt-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#111" }}
            delay={0.1}
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl md:grid-cols-3" style={{ backgroundColor: "#EBEBEB" }}>
            {([
              { stat: "$0", desc: "Cost to your business", detail: "No fees, no subscription, no budget line item. The donation is built into the transaction. Your bottom line stays the same." },
              { stat: "1\u20132%", desc: "Revenue uplift", detail: "Customers spend more with brands that stand for something. DimeTech gives you the proof to back it up." },
              { stat: "100%", desc: "Tax-deductible", detail: "You receive a quarterly charitable tax receipt. Deductible in both Canada and the US. Ready for your accountant." },
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
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&h=800&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }}
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.7) 0%, rgba(17,17,17,0.95) 100%)" }} />
        </div>

        <div className="relative mx-auto max-w-[1120px]">
          <div className="max-w-[520px]">
            <TextReveal
              text="One integration. Verified giving. Tax-efficient by default."
              tag="h2"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#fff" }}
            />
            <FadeInSection delay={0.3}>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Whether you run a single restaurant or a national chain &mdash; DimeTech works the same way. Connect once, and every sale generates a verified donation with no changes to your checkout.
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
              <Link href="#how" className="text-xs transition-colors hover:text-white/60" style={{ color: "rgba(255,255,255,0.35)" }}>How It Works</Link>
              <Link href="#use-cases" className="text-xs transition-colors hover:text-white/60" style={{ color: "rgba(255,255,255,0.35)" }}>Use Cases</Link>
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
