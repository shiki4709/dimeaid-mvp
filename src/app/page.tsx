import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DimeAid \u2014 Every Transaction Fights Hunger",
  description:
    "DimeAid adds 11 cents to every transaction \u2014 10 cents to food banks, 1 cent to verified operations. Independent third-party verification for tax compliance.",
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
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "18px", color: "#2C2825" }}>DimeAid</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#how" className="hidden text-sm md:block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279", fontWeight: 500 }}>How It Works</Link>
            <Link href="#why" className="hidden text-sm md:block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279", fontWeight: 500 }}>Why DimeAid</Link>
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
          <div className="max-w-[640px]">
            <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "#2C2825" }}>
              Every transaction<br />fights hunger.
            </h1>
            <p className="mt-5 max-w-[440px] text-lg leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6259" }}>
              11&cent; per transaction. 10&cent; to food banks. 1&cent; to operations. Independently verified. Tax compliant.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="mailto:larry@lazarusbleau.com" className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "linear-gradient(135deg, #5C534A, #44403C)", color: "#FAF9F7", fontWeight: 600, fontSize: "15px" }}>
                Start a Conversation
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <Link href="/demo" className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279", fontWeight: 500 }}>
                See the demo &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────── */}
      <section style={{ borderTop: "1px solid #E8E4DF", borderBottom: "1px solid #E8E4DF" }}>
        <div className="mx-auto max-w-[1120px] px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {([
              { val: "11\u00A2", lbl: "Per transaction" },
              { val: "91%", lbl: "Direct to food banks" },
              { val: "100%", lbl: "Tax compliant" },
              { val: "$0", lbl: "Cost to partner" },
            ] as const).map((s, i) => (
              <div key={s.lbl} className="py-8 md:py-10" style={{ paddingLeft: i > 0 ? "clamp(16px, 3vw, 40px)" : undefined, borderLeft: i > 0 ? "1px solid #E8E4DF" : undefined }}>
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1, letterSpacing: "-0.02em", color: "#8B7355" }}>{s.val}</p>
                <p className="mt-1.5 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279", fontWeight: 500 }}>{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────── */}
      <section id="how" className="px-6 lg:px-12" style={{ paddingTop: "clamp(64px, 10vw, 110px)", paddingBottom: "clamp(64px, 10vw, 110px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-start md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.12em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95", fontWeight: 500 }}>How it works</p>
              <h2 className="mt-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.12, letterSpacing: "-0.01em", color: "#2C2825" }}>
                Three steps.<br />Zero friction.
              </h2>
              <div className="mt-10 space-y-8">
                {([
                  { n: "01", t: "Transaction happens", b: "Customer orders. 11\u00A2 is added to the price automatically. Nothing else changes." },
                  { n: "02", t: "Funds split and routed", b: "10\u00A2 to a local food bank. 1\u00A2 to audit operations. Every cent logged." },
                  { n: "03", t: "Verified instantly", b: "Tax receipt generated. Audit trail complete. Independent third-party proof." },
                ] as const).map((step, i) => (
                  <div key={step.n} className="flex gap-5">
                    <span className="mt-0.5 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95", fontWeight: 500 }}>{step.n}</span>
                    <div>
                      <h3 className="text-base" style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: "#2C2825", fontSize: "18px" }}>{step.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279" }}>{step.b}</p>
                      {i === 2 && (
                        <div className="mt-3 flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#8B7355" /><path d="M5 8l2 2 4-4" stroke="#FAF9F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5D4D", fontWeight: 600 }}>Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow diagram */}
            <div className="space-y-2.5 rounded-xl p-6 md:p-8" style={{ background: "linear-gradient(160deg, #F3F0EC 0%, #EBE7E2 100%)" }}>
              <div className="rounded-lg px-5 py-3.5" style={{ backgroundColor: "rgba(250,249,247,0.8)" }}>
                <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95", fontWeight: 500 }}>Customer pays</span>
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "26px", color: "#2C2825", letterSpacing: "-0.02em" }}>$18.73</p>
              </div>

              <div className="flex justify-center py-0.5">
                <svg width="1" height="16"><line x1="0.5" y1="0" x2="0.5" y2="16" stroke="#D5CFC8" strokeWidth="1" strokeDasharray="3 3" /></svg>
              </div>

              <div className="rounded-lg px-5 py-3.5" style={{ backgroundColor: "rgba(250,249,247,0.8)" }}>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs uppercase tracking-[0.1em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2C2825", fontWeight: 600 }}>DimeTech</span>
                  <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279" }}>separates</span>
                </div>
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "26px", color: "#8B7355", letterSpacing: "-0.02em" }}>11&cent;</p>
              </div>

              <div className="flex justify-center py-0.5">
                <svg width="1" height="12"><line x1="0.5" y1="0" x2="0.5" y2="12" stroke="#D5CFC8" strokeWidth="1" strokeDasharray="3 3" /></svg>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-lg px-5 py-3.5" style={{ backgroundColor: "rgba(250,249,247,0.8)" }}>
                  <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "26px", color: "#8B7355", letterSpacing: "-0.02em" }}>10&cent;</p>
                  <p className="mt-0.5 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2C2825", fontWeight: 600 }}>Food Bank</p>
                </div>
                <div className="rounded-lg px-5 py-3.5" style={{ backgroundColor: "rgba(250,249,247,0.8)" }}>
                  <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "26px", color: "#A69E95", letterSpacing: "-0.02em" }}>1&cent;</p>
                  <p className="mt-0.5 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2C2825", fontWeight: 600 }}>Operations</p>
                </div>
              </div>

              <div className="flex justify-center py-0.5">
                <svg width="1" height="12"><line x1="0.5" y1="0" x2="0.5" y2="12" stroke="#D5CFC8" strokeWidth="1" strokeDasharray="3 3" /></svg>
              </div>

              <div className="flex items-center gap-2 rounded-lg px-5 py-3.5" style={{ backgroundColor: "rgba(250,249,247,0.8)" }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#8B7355" /><path d="M5 8l2 2 4-4" stroke="#FAF9F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5D4D", fontWeight: 600 }}>Tax receipt issued</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY DIMEAID ──────────────────────────── */}
      <section id="why" className="px-6 lg:px-12" style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(64px, 10vw, 110px)" }}>
        <div className="mx-auto max-w-[1120px]">
          <p className="text-xs uppercase tracking-[0.12em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95", fontWeight: 500 }}>Why DimeAid</p>
          <h2 className="mt-3 max-w-[480px]" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.12, letterSpacing: "-0.01em", color: "#2C2825" }}>
            Any company can add a surcharge. Only we verify it.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {([
              { label: "Tax compliance", head: "Independent proof that stands up to any audit.", body: "When the IRS audits a $40M deduction, you need a third party. That\u2019s us." },
              { label: "Zero friction", head: "No prompts. No opt-ins. No checkout changes.", body: "The 11\u00A2 is built into the price. Your team integrates once via API. Live in weeks." },
              { label: "Brand value", head: "1\u20132% revenue uplift from cause marketing.", body: "We handle charitable solicitation compliance across all 50 states. Your PR team gets a win." },
            ] as const).map((item, i) => (
              <div
                key={item.label}
                className="rounded-xl p-6 md:p-7"
                style={{
                  background: i === 0
                    ? "linear-gradient(160deg, #F3F0EC 0%, #EBE7E2 100%)"
                    : i === 1
                    ? "linear-gradient(160deg, #F0ECE7 0%, #E8E3DD 100%)"
                    : "linear-gradient(160deg, #ECE8E3 0%, #E5E0DA 100%)",
                }}
              >
                <span className="text-xs uppercase tracking-[0.1em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95", fontWeight: 500 }}>{item.label}</span>
                <h3 className="mt-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "20px", lineHeight: 1.25, color: "#2C2825" }}>{item.head}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 lg:px-12" style={{ paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(80px, 12vw, 140px)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, #FAF9F7 0%, #F0ECE7 40%, #E5E0DA 100%)" }} />
        <div className="relative mx-auto max-w-[1120px]">
          <div className="max-w-[520px]">
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#2C2825" }}>
              Ready to make every<br />transaction count?
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6259" }}>
              Zero cost. Full tax compliance. Real impact.
            </p>
            <a href="mailto:larry@lazarusbleau.com" className="mt-8 inline-flex items-center gap-2 rounded-lg px-7 py-3.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "linear-gradient(135deg, #5C534A, #44403C)", color: "#FAF9F7", fontWeight: 600, fontSize: "15px" }}>
              Partner With Us
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <p className="mt-5 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A69E95" }}>
              Or email{" "}
              <a href="mailto:larry@lazarusbleau.com" className="underline" style={{ color: "#8C8279" }}>larry@lazarusbleau.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────── */}
      <footer style={{ backgroundColor: "#2C2825" }}>
        <div className="mx-auto max-w-[1120px] px-6 py-10 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-semibold" style={{ background: "linear-gradient(135deg, #8B7355, #6B5D4D)", color: "#FAF9F7" }}>D</div>
              <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: "#E8E4DF" }}>DimeAid</span>
              <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6259" }}>by Lazarus Invents</span>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              {([
                { href: "/demo", label: "Demo" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/partner-kit", label: "Partner Kit" },
              ] as const).map((link) => (
                <Link key={link.label} href={link.href} className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8C8279" }}>{link.label}</Link>
              ))}
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
