"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const DIGIT_HEIGHT = 1; // in em units

function AnimatedDigit({ digit, delay }: { digit: string; delay: number }) {
  const numericValue = parseInt(digit, 10);
  const isNumber = !isNaN(numericValue);

  if (!isNumber) {
    return (
      <span className="inline-block" style={{ lineHeight: 1 }}>
        {digit}
      </span>
    );
  }

  return (
    <span
      className="relative inline-block overflow-hidden"
      style={{ height: `${DIGIT_HEIGHT}em`, width: "0.6em" }}
    >
      <motion.span
        className="absolute left-0 top-0 flex flex-col items-center"
        initial={{ y: 0 }}
        animate={{ y: `-${numericValue * DIGIT_HEIGHT}em` }}
        transition={{
          duration: 1.2 + numericValue * 0.08,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ width: "100%" }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className="flex items-center justify-center"
            style={{ height: `${DIGIT_HEIGHT}em`, lineHeight: 1 }}
          >
            {i}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

interface ImpactCounterProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  color?: string;
}

export default function ImpactCounter({
  value,
  label,
  prefix = "",
  suffix = "",
  color = "#0D9373",
}: ImpactCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (isInView && !triggered) {
      setTriggered(true);
    }
  }, [isInView, triggered]);

  const chars = value.split("");

  return (
    <div ref={ref} className="text-center">
      <div
        className="flex items-baseline justify-center"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(36px, 5vw, 56px)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color,
        }}
      >
        {prefix && <span>{prefix}</span>}
        {triggered ? (
          chars.map((char, i) => (
            <AnimatedDigit
              key={`${i}-${char}`}
              digit={char}
              delay={i * 0.06}
            />
          ))
        ) : (
          <span style={{ visibility: "hidden" }}>
            {prefix}
            {value}
            {suffix}
          </span>
        )}
        {suffix && <span>{suffix}</span>}
      </div>
      <p
        className="mt-2 text-sm"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#888",
          fontWeight: 500,
        }}
      >
        {label}
      </p>
    </div>
  );
}
