"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Heart, TrendingUp, MapPin, Utensils, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { impactStats, merchantReport } from "@/lib/data";
import { Building2, Download } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactPage() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-md px-4 pt-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface transition-colors hover:bg-surface-hover"
        >
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-bold">Your Impact</h1>
      </div>

      {/* Hero Stats */}
      <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#06C167]/20 via-surface to-[#06B6D4]/20 p-6 text-center">
        <Heart size={28} className="mx-auto text-dime-green" fill="#06C167" />
        <div className="mt-3 text-3xl font-bold text-dime-green">
          <AnimatedCounter target={impactStats.totalContributed} prefix="$" />
        </div>
        <p className="mt-1 text-sm text-white/60">Total contributed through your orders</p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/5 p-3">
            <Utensils size={18} className="mx-auto text-dime-teal" />
            <div className="mt-2 text-xl font-bold">
              <AnimatedCounter target={impactStats.mealsServed} />
            </div>
            <p className="text-xs text-white/50">Meals Funded</p>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <MapPin size={18} className="mx-auto text-dime-teal" />
            <div className="mt-2 text-xl font-bold">
              <AnimatedCounter target={impactStats.citiesReached} />
            </div>
            <p className="text-xs text-white/50">Cities Reached</p>
          </div>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="mt-6 rounded-2xl bg-surface p-4">
        <div className="flex items-center gap-2">
          <TrendingUp size={16} className="text-dime-green" />
          <h2 className="text-sm font-bold">Monthly Meals Funded</h2>
        </div>
        <div className="mt-4 h-44">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[...impactStats.monthlyData]}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#27272A",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "12px",
                }}
                formatter={(value) => [`${Number(value).toLocaleString()} meals`, "Funded"]}
                cursor={{ fill: "rgba(255,255,255,0.05)" }}
              />
              <Bar dataKey="meals" fill="#06C167" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* City Breakdown */}
      <div className="mt-6 rounded-2xl bg-surface p-4">
        <h2 className="text-sm font-bold">Where Your Impact Goes</h2>
        <div className="mt-3 space-y-3">
          {impactStats.topCities.map((city) => {
            const pct = (city.meals / impactStats.mealsServed) * 100;
            return (
              <div key={city.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">{city.name}</span>
                  <span className="text-xs text-muted">
                    {city.meals.toLocaleString()} meals
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-dime-green to-dime-teal"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Partner Impact Report */}
      <div className="mt-6 rounded-2xl border border-dime-teal/20 bg-dime-teal/5 p-4">
        <div className="flex items-center gap-2">
          <Building2 size={16} className="text-dime-teal" />
          <h2 className="text-sm font-bold text-dime-teal">Partner Impact Report</h2>
        </div>
        <p className="mt-1 text-xs text-white/40">
          {merchantReport.partnerName} — {merchantReport.period}
        </p>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Total Orders with DIME AID</span>
            <span className="text-sm font-bold">{merchantReport.totalOrders.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Participation Rate</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-dime-green">{merchantReport.participationRate}%</span>
              <span className="text-xs text-white/30">vs ~{merchantReport.industryAvgRate}% industry avg</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Total Contributed</span>
            <span className="text-sm font-bold">${merchantReport.totalContributed.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Meals Funded</span>
            <span className="text-sm font-bold">{merchantReport.mealsFunded.toLocaleString()}</span>
          </div>
        </div>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-dime-teal/10 py-2.5 text-sm font-medium text-dime-teal transition-colors hover:bg-dime-teal/20">
          <Download size={14} />
          Download ESG Report
        </button>
        <p className="mt-2 text-center text-[10px] text-white/20">
          Simulated data for demonstration purposes
        </p>
      </div>

      {/* How DIMETECH Works CTA */}
      <Link
        href="/how-it-works"
        className="mt-6 flex items-center gap-3 rounded-2xl bg-surface p-4 transition-colors hover:bg-surface-hover"
      >
        <div className="flex-1">
          <p className="text-sm font-semibold">How DIMETECH Works</p>
          <p className="mt-0.5 text-xs text-white/40">Money flow, audit trail & POS integration</p>
        </div>
        <ChevronRight size={16} className="text-white/20" />
      </Link>
    </div>
  );
}
