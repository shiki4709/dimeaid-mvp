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
          <div className="flex items-center gap-6">
            <Link href="#how" className="hidden text-sm md:block" style={{ color: "#888", fontWeight: 500 }}>How It Works</Link>
            <Link href="#use-cases" className="hidden text-sm md:block" style={{ color: "#888", fontWeight: 500 }}>Use Cases</Link>
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
                Transaction-layer infrastructure
              </p>
            </FadeInSection>

            <div className="mt-5">
              <TextReveal
                text="Embed tax-deductible giving into every transaction. No checkout changes."
                tag="h1"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 700, color: "#fff" }}
              />
            </div>

            <FadeInSection delay={0.15}>
              <p className="mt-6 max-w-[500px] text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                DimeTech sits downstream of payment, upstream of reconciliation. Each transaction generates a verified micro-donation to a registered food bank. Your company receives a consolidated tax receipt. Customers experience zero change.
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
                text="One connection. Fully automated from there."
                tag="h2"
                className="mt-3"
                style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#111" }}
                delay={0.1}
              />

              <div className="mt-10 space-y-8">
                {([
                  { n: "01", t: "Connect your payment system", b: "REST API or webhook. Compatible with Stripe, Square, Toast, Clover, and custom POS systems. No frontend deployment required." },
                  { n: "02", t: "Donations are generated per transaction", b: "Each completed sale triggers a verified micro-donation to a CRA-registered food bank. Donation amount, recipient, and receipt ID are logged against the transaction." },
                  { n: "03", t: "Consolidated tax receipts are issued quarterly", b: "Your company receives a single charitable tax receipt covering all donations for the period. Deductible under ITA s.110.1 (Canada) or IRC \u00A7170 (US). Audit-ready documentation included." },
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
                        <span>amount</span>
                        <span className="font-mono font-medium" style={{ color: "#111" }}>$18.73</span>
                      </div>
                      <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
                        <span>donation</span>
                        <span className="font-mono font-medium" style={{ color: "#0D9373" }}>$0.11</span>
                      </div>
                      <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
                        <span>recipient</span>
                        <span className="font-mono font-medium" style={{ color: "#111" }}>Greater Toronto Food Bank</span>
                      </div>
                      <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
                        <span>receipt</span>
                        <span className="font-mono font-medium" style={{ color: "#111" }}>rct_9f3a2b</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ─── WHY NOW ─────────────────────────────── */}
      <section className="px-6 lg:px-12" style={{ backgroundColor: "#111", color: "#fff", paddingTop: "clamp(64px, 10vw, 110px)", paddingBottom: "clamp(64px, 10vw, 110px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-center md:gap-20">
            <div>
              <FadeInSection>
                <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0D9373" }}>Why now</p>
              </FadeInSection>
              <TextReveal
                text="Checkout charity is dying. Agentic commerce will finish it."
                tag="h2"
                className="mt-3"
                style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#fff" }}
                delay={0.1}
              />
              <FadeInSection delay={0.2}>
                <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Fewer than 19% of Canadian tax filers claimed a charitable donation last year &mdash; a 30-year low. In the US, donating households dropped below 50%. Checkout roundups convert at 2&ndash;4% and falling. People aren&apos;t less generous. They&apos;re exhausted from being asked.
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Now add agentic commerce. When an AI agent orders your Uber, buys your groceries, or pays your bills, it optimizes for price and speed. &ldquo;Add $1 for hunger relief?&rdquo; The agent declines. Every time. Not because it&apos;s cruel &mdash; because it was told to get the best deal.
                </p>
                <p className="mt-4 text-sm font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  The only giving model that survives is one where the donation is invisible to the buyer and invisible to AI. That&apos;s DimeAid.
                </p>
              </FadeInSection>
            </div>

            <FadeInSection delay={0.3}>
              <div className="space-y-4">
                {([
                  { stat: "19%", desc: "of Canadian tax filers claimed a donation in 2024", src: "CanadaHelps 2024" },
                  { stat: "2M", desc: "monthly food bank visits in Canada, up 90% from pre-COVID", src: "Food Banks Canada 2024" },
                  { stat: "61%", desc: "of North Americans say checkout donation prompts feel like pressure", src: "" },
                  { stat: "2\u20134%", desc: "conversion rate on checkout roundup prompts \u2014 and declining", src: "" },
                ] as const).map((item) => (
                  <div key={item.stat} className="flex items-baseline gap-4 rounded-lg px-5 py-4" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="shrink-0 text-2xl font-bold tracking-tight" style={{ color: "#0D9373" }}>{item.stat}</span>
                    <div>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{item.desc}</span>
                      {item.src && <span className="ml-1 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>({item.src})</span>}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
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
            text="Any business that processes transactions can plug in."
            tag="h2"
            className="mt-3 max-w-[560px]"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#111" }}
            delay={0.1}
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {([
              { label: "Restaurants & QSR", head: "POS integration with zero operational overhead.", body: "Compatible with Toast, Square, and Clover. Every order generates a tracked donation. Customers see no change to pricing or checkout flow.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=340&fit=crop&q=80", alt: "Restaurant dining" },
              { label: "Platforms & marketplaces", head: "Embed giving across your entire transaction volume.", body: "Single API integration covers all merchants. Per-merchant attribution, consolidated reporting, and a full audit trail for compliance teams.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop&q=80", alt: "Analytics dashboard" },
              { label: "Charities & food banks", head: "Predictable, transaction-linked funding.", body: "Receive steady, verified donations tied to real commerce. Full transparency on source, amount, and frequency. No fundraising campaigns required.", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=340&fit=crop&q=80", alt: "Food bank volunteers" },
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
            text="What your finance team wants to hear."
            tag="h2"
            className="mt-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#111" }}
            delay={0.1}
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl md:grid-cols-3" style={{ backgroundColor: "#EBEBEB" }}>
            {([
              { stat: "$0", desc: "Net cost to your business", detail: "Donations are micro-amounts routed at the transaction layer. There is no markup, no subscription, and no budget allocation required. The cost structure is embedded in the flow." },
              { stat: "1\u20132%", desc: "Documented revenue uplift", detail: "Published research shows cause-linked commerce increases average order value. DimeTech gives you per-transaction attribution to quantify the lift." },
              { stat: "100%", desc: "Tax-deductible", detail: "Receipts are issued by CRA-registered charities (or 501(c)(3) equivalents in the US). Deductible under ITA s.110.1 up to 75% of net income. Quarterly consolidation, audit-ready." },
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
                Whether you process 100 transactions a day or 100,000 &mdash; DimeTech works the same way. Connect once, and every transaction generates a tracked, tax-deductible donation with no changes to your checkout.
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
