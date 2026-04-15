"use client";

export default function LottieHero() {
  return (
    <div className="pointer-events-none hidden md:block">
      <svg width="360" height="360" viewBox="0 0 420 420" fill="none" style={{ animation: "spin 60s linear infinite" }}>
        <circle cx="210" cy="210" r="180" stroke="#E8E4DF" strokeWidth="1" />
        <circle cx="210" cy="210" r="140" stroke="#D5CFC8" strokeWidth="0.5" strokeDasharray="4 6" />
        <path d="M90 210 A120 120 0 0 1 210 90" stroke="#C4BBB0" strokeWidth="0.75" fill="none" />
        <path d="M330 210 A120 120 0 0 1 210 330" stroke="#C4BBB0" strokeWidth="0.75" fill="none" />
        <circle cx="210" cy="30" r="4" fill="#8B7355" opacity="0.25" />
        <circle cx="390" cy="210" r="3" fill="#8B7355" opacity="0.2" />
        <circle cx="210" cy="390" r="4" fill="#8B7355" opacity="0.15" />
        <circle cx="30" cy="210" r="3" fill="#8B7355" opacity="0.2" />
        <line x1="90" y1="90" x2="330" y2="330" stroke="#D5CFC8" strokeWidth="0.5" strokeDasharray="6 8" />
        <circle cx="150" cy="150" r="6" fill="#8B7355" opacity="0.08" />
        <circle cx="270" cy="270" r="8" fill="#8B7355" opacity="0.06" />
        <rect x="280" y="80" width="24" height="24" rx="4" stroke="#C4BBB0" strokeWidth="0.75" fill="none" transform="rotate(15 292 92)" />
        <rect x="100" y="300" width="18" height="18" rx="3" stroke="#D5CFC8" strokeWidth="0.75" fill="#8B7355" opacity="0.04" transform="rotate(-10 109 309)" />
      </svg>
    </div>
  );
}
