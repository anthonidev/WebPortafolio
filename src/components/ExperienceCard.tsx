"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ExperienceItem } from "@/data/experience";

function highlightMetrics(text: string): React.ReactNode[] {
  const parts = text.split(/(\d+[\+%]|\d+\.\d+%)/g);
  return parts.map((part, i) =>
    /(\d+[\+%]|\d+\.\d+%)/.test(part) ? (
      <span key={i} style={{ color: "var(--sky)", fontWeight: 600 }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

const LAYER_COLORS: Record<string, string> = {
  sky: "#38bdf8",
  emerald: "#34d399",
  violet: "#a78bfa",
};

const LAYER_BORDERS: Record<string, string> = {
  sky: "rgba(56,189,248,0.35)",
  emerald: "rgba(52,211,153,0.35)",
  violet: "rgba(167,139,250,0.35)",
};

const LAYER_BG: Record<string, string> = {
  sky: "rgba(56,189,248,0.04)",
  emerald: "rgba(52,211,153,0.04)",
  violet: "rgba(167,139,250,0.04)",
};

interface Props {
  exp: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ exp, index }: Props) {
  const { company, position, location, period, current, highlights, stack, layer } = exp;
  const accentColor = LAYER_COLORS[layer];
  const borderColor = LAYER_BORDERS[layer];
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="node mb-4 last:mb-0 overflow-hidden"
      style={{ borderColor: expanded ? borderColor : "rgba(148,163,184,0.15)" }}
    >
      {/* Header row — always visible, click to expand */}
      <button
        type="button"
        className="w-full text-left"
        onClick={() => setExpanded((v) => !v)}
      >
        <div
          className="flex items-center justify-between px-5 py-4 gap-4"
          style={{ background: expanded ? LAYER_BG[layer] : "transparent" }}
        >
          {/* Left */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Color dot */}
            <div
              className="flex-shrink-0 w-2 h-2 rounded-full"
              style={{
                background: accentColor,
                boxShadow: current ? `0 0 6px ${accentColor}80` : "none",
              }}
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  style={{
                    fontFamily: "var(--font-display), 'Geist', sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#f1f5f9",
                  }}
                >
                  {company}
                </span>
                {current && (
                  <span
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded"
                    style={{
                      background: "rgba(52,211,153,0.08)",
                      border: "1px solid rgba(52,211,153,0.35)",
                      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: "#34d399",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full pulse-dot"
                      style={{ background: "#34d399", display: "inline-block" }}
                    />
                    Actual
                  </span>
                )}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: accentColor,
                  marginTop: "1px",
                }}
              >
                {position}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right hidden sm:block">
              <p
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "#64748b",
                }}
              >
                {period}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "#475569",
                  marginTop: "1px",
                }}
              >
                {location}
              </p>
            </div>
            {/* Chevron */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.25s ease",
                opacity: 0.7,
                flexShrink: 0,
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 pb-5" style={{ borderTop: "1px solid rgba(148,163,184,0.08)" }}>
              {/* Period on mobile */}
              <p
                className="sm:hidden mt-3 mb-3"
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "#64748b",
                }}
              >
                {period} · {location}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mt-4">
                {highlights.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 leading-relaxed"
                    style={{
                      color: "#94a3b8",
                      fontFamily: "var(--font-body), 'Inter', sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 font-medium"
                      style={{ color: accentColor, fontSize: "15px" }}
                    >
                      ›
                    </span>
                    <span>{highlightMetrics(bullet)}</span>
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="node px-2.5 py-1"
                    style={{
                      borderColor,
                      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "#64748b",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
