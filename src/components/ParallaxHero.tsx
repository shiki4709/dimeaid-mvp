"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const card2Y = useTransform(scrollYProgress, [0, 1], ["5%", "-12%"]);
  const card2Rotate = useTransform(scrollYProgress, [0, 1], [-1, 2]);

  return (
    <div
      ref={ref}
      className="relative hidden md:block"
      style={{ width: 440, height: 400 }}
    >
      {/* Photo with parallax */}
      <motion.div
        className="absolute overflow-hidden rounded-2xl"
        style={{
          y: imgY,
          top: 0,
          left: 10,
          width: 380,
          height: 280,
          boxShadow: "0 24px 64px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=760&h=560&fit=crop&q=80"
          alt="Volunteers packing food donation boxes"
          width={760}
          height={560}
          loading="eager"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
      </motion.div>

      {/* Impact card */}
      <motion.div
        className="absolute"
        style={{
          y: cardY,
          bottom: 30,
          left: -15,
          padding: "18px 22px",
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          borderRadius: "14px",
        }}
      >
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "10px",
            color: "#0D9373",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Growing every day
        </p>
        <p
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "30px",
            lineHeight: 1,
            color: "#2C2825",
            marginTop: "4px",
          }}
        >
          142,857 meals
        </p>
        <div
          className="mt-1.5 flex items-center gap-1.5"
          style={{ color: "#0D9373" }}
        >
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 12V4m0 0L4 8m4-4l4 4"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
            }}
          >
            +12% this week
          </span>
        </div>
      </motion.div>

      {/* Receipt card */}
      <motion.div
        className="absolute"
        style={{
          y: card2Y,
          rotate: card2Rotate,
          top: 210,
          right: -5,
          padding: "14px 18px",
          backgroundColor: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 12px 36px rgba(0,0,0,0.08)",
          borderRadius: "12px",
          minWidth: 175,
        }}
      >
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "9px",
            color: "#0D9373",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Transaction #4,827
        </p>
        <div className="mt-2 space-y-1">
          <div className="flex items-center justify-between gap-6">
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "11px",
                color: "#6B6259",
              }}
            >
              Order total
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "11px",
                color: "#2C2825",
                fontWeight: 600,
              }}
            >
              $18.73
            </span>
          </div>
          <div style={{ height: "1px", background: "#F0E8DD" }} />
          <div className="flex items-center justify-between gap-6">
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "11px",
                color: "#0D9373",
                fontWeight: 600,
              }}
            >
              Donation
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "11px",
                color: "#0D9373",
                fontWeight: 600,
              }}
            >
              $0.11
            </span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="8" fill="#0D9373" />
            <path
              d="M5 8l2 2 4-4"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "9px",
              fontWeight: 500,
              color: "#0D9373",
            }}
          >
            Verified
          </span>
        </div>
      </motion.div>
    </div>
  );
}
