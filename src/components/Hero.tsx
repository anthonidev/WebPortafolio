"use client";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const ROLES = ["Tech Lead", "Full Stack Engineer", "Backend Architect"];

const LAYER_NODES = [
  {
    label: "Frontend", sublabel: "React · Next.js · TS",
    colorClass: "layer-sky", color: "#38bdf8",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Backend", sublabel: "NestJS · Node · gRPC",
    colorClass: "layer-emerald", color: "#34d399",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Cloud & Infra", sublabel: "AWS · Docker · CI/CD",
    colorClass: "layer-violet", color: "#a78bfa",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
];

const ANNOTATION_PILLS = [
  // Right side — stacked
  { label: "NestJS",     top: "2%",    right: "-26%", color: "#34d399", border: "rgba(52,211,153,0.4)",  delay: 0.9 },
  { label: "Next.js",   top: "28%",   right: "-28%", color: "#38bdf8", border: "rgba(56,189,248,0.4)",  delay: 1.05 },
  { label: "TypeScript",top: "54%",   right: "-30%", color: "#38bdf8", border: "rgba(56,189,248,0.3)",  delay: 1.2 },
  { label: "PostgreSQL",bottom: "8%", right: "-22%", color: "#a78bfa", border: "rgba(167,139,250,0.4)", delay: 1.35 },
  // Left side — stacked
  { label: "AWS",        top: "8%",    left: "-20%",  color: "#38bdf8", border: "rgba(56,189,248,0.35)", delay: 1.0 },
  { label: "Docker",     top: "35%",   left: "-22%",  color: "#a78bfa", border: "rgba(167,139,250,0.35)", delay: 1.15 },
  { label: "Redis",      bottom: "28%",left: "-18%",  color: "#34d399", border: "rgba(52,211,153,0.3)",  delay: 1.3 },
];

// Ambient background — ultra-subtle geometry, depth not diagram
function AmbientBackground() {
  // Sparse nodes pushed to edges so they don't compete with content
  const nodes = [
    { x: 4, y: 12 }, { x: 18, y: 52 }, { x: 6, y: 82 },
    { x: 94, y: 6 }, { x: 97, y: 44 }, { x: 91, y: 78 },
    { x: 48, y: 3 }, { x: 52, y: 97 },
  ];
  const edges = [
    [0, 1], [1, 2], [3, 4], [4, 5], [0, 6], [3, 6],
  ];
  return (
    <svg
      className="pointer-events-none absolute inset-0 w-full h-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
    >
      <defs>
        {/* Fine grid — almost invisible */}
        <pattern id="microgrid" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 6 0 L 0 0 0 6" fill="none" stroke="rgba(148,163,184,0.018)" strokeWidth="0.25" />
        </pattern>
        {/* Radial glow behind right column (photo area) */}
        <radialGradient id="photoGlow" cx="72%" cy="48%" r="28%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(56,189,248,0.04)" />
          <stop offset="100%" stopColor="rgba(56,189,248,0)" />
        </radialGradient>
        {/* Bottom-left ambient warm */}
        <radialGradient id="warmGlow" cx="12%" cy="88%" r="30%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(167,139,250,0.03)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0)" />
        </radialGradient>
      </defs>

      {/* Grid layer */}
      <rect width="100%" height="100%" fill="url(#microgrid)" />

      {/* Soft ambient glows */}
      <rect width="100%" height="100%" fill="url(#photoGlow)" />
      <rect width="100%" height="100%" fill="url(#warmGlow)" />

      {/* Edges — barely perceptible */}
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
          x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
          stroke="rgba(56,189,248,0.04)"
          strokeWidth="0.25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.15, duration: 2, ease: "easeOut" }}
        />
      ))}

      {/* Nodes — tiny, peripheral, almost invisible */}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={`${node.x}%`} cy={`${node.y}%`}
          r="0.4"
          fill="rgba(56,189,248,0.12)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 + i * 0.1, duration: 1.5, ease: "easeOut" }}
        />
      ))}

      {/* Single traveling dot — very subtle, right-side path */}
      <motion.circle
        r="0.35"
        fill="#38bdf8"
        opacity={0.18}
        animate={{
          cx: [`${nodes[3].x}%`, `${nodes[4].x}%`, `${nodes[5].x}%`, `${nodes[3].x}%`],
          cy: [`${nodes[3].y}%`, `${nodes[4].y}%`, `${nodes[5].y}%`, `${nodes[3].y}%`],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
      />
    </svg>
  );
}

// Word-by-word reveal for heading
function SplitHeading({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline", overflow: "hidden" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{
            delay: delay + i * 0.06,
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Typewriter with blinking cursor
function TypewriterRole({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      <motion.span
        animate={{ opacity: done ? [1, 0, 1] : 1 }}
        transition={{ duration: 0.8, repeat: done ? Infinity : 0 }}
        style={{ color: "#38bdf8", marginLeft: "1px" }}
      >
        |
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [edgesDrawn, setEdgesDrawn] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax on right column
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setEdgesDrawn(true), 600);
    return () => clearTimeout(timeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set(((e.clientX - cx) / rect.width) * 12);
    mouseY.set(((e.clientY - cy) / rect.height) * 8);
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-8"
      style={{
        background: "radial-gradient(ellipse 120% 90% at 60% 40%, #0d1520 0%, #0b0f14 65%)",
        overflowX: "clip",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <AmbientBackground />

      {/* Vignette — darkens corners subtly */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(8,14,27,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

          {/* Left column */}
          <div className="space-y-7">
            {/* Annotation */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "13px",
                color: "#38bdf8",
                letterSpacing: "0.05em",
              }}
            >
              // tech-lead &amp;&amp; fullstack-engineer
            </motion.p>

            {/* Heading — split reveal word by word */}
            <h1
              style={{
                fontFamily: "var(--font-display), 'Geist', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
                color: "#f1f5f9",
              }}
            >
              <SplitHeading text="Anthoni Portocarrero" delay={0.2} />
            </h1>

            {/* Role — typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.3 }}
              className="flex items-center gap-2 h-8"
            >
              <span
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "17px",
                  color: "#38bdf8",
                }}
              >
                &gt;&nbsp;
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "17px",
                    color: "#94a3b8",
                  }}
                >
                  <TypewriterRole text={ROLES[roleIndex]} />
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg"
              style={{
                color: "#94a3b8",
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                letterSpacing: "0.01em",
              }}
            >
              6+ años diseñando y entregando sistemas escalables — desde microservicios en NestJS hasta interfaces en Next.js. Construyo el stack completo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                type="button"
                onClick={() => scrollTo("proyectos")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="node px-6 py-2.5 text-sm"
                style={{
                  borderColor: "rgba(56,189,248,0.5)",
                  color: "#38bdf8",
                  fontFamily: "var(--font-body), 'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Ver proyectos →
              </motion.button>
              <motion.a
                href="/CV_ANTHONI_PORTOCARRERO_RODRIGUEZ_2025.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="node px-6 py-2.5 text-sm"
                style={{
                  borderColor: "rgba(148,163,184,0.3)",
                  color: "#94a3b8",
                  fontFamily: "var(--font-body), 'Inter', sans-serif",
                  fontSize: "14px",
                }}
              >
                Descargar CV
              </motion.a>
            </motion.div>

            {/* Stack layer nodes */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <div className="grid grid-cols-3 gap-2">
                {LAYER_NODES.map((node, i) => (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + i * 0.12, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className={`node ${node.colorClass} px-3 py-3`}
                  >
                    <div className="flex items-center gap-1.5 mb-1.5" style={{ color: node.color }}>
                      {node.icon}
                      <span
                        style={{
                          fontFamily: "var(--font-display), 'Geist', sans-serif",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: node.color,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {node.label}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "10px",
                        color: "#475569",
                        lineHeight: 1.4,
                      }}
                    >
                      {node.sublabel}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — parallax photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ x: springX, y: springY, overflow: "visible" }}
          >
            {/* Extra right margin on desktop only to give pills room */}
            <div
              className="relative lg:mr-16"
              style={{
                width: "clamp(220px, 28vw, 340px)",
                height: "clamp(220px, 28vw, 340px)",
              }}
            >

              {/* Rotating dashed ring */}
              <motion.svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 340 340"
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <circle
                  cx="170" cy="170" r="162"
                  fill="none"
                  stroke="rgba(56,189,248,0.12)"
                  strokeWidth="1"
                  strokeDasharray="8 16"
                />
              </motion.svg>

              {/* Draw-on solid ring */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 340 340"
                aria-hidden="true"
              >
                <circle
                  cx="170" cy="170" r="155"
                  fill="none"
                  stroke="rgba(56,189,248,0.22)"
                  strokeWidth="1"
                  strokeDasharray="974"
                  strokeDashoffset={edgesDrawn ? 0 : 974}
                  style={{ transition: "stroke-dashoffset 2s cubic-bezier(0.16,1,0.3,1) 0.5s" }}
                />
              </svg>

              {/* Profile photo */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  margin: "14px",
                  borderRadius: "50%",
                  border: "1px solid rgba(148,163,184,0.2)",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.6), 0 0 60px rgba(56,189,248,0.06)",
                }}
              >
                <Image
                  src="/imgs/profile.webp"
                  alt="Anthoni Portocarrero Rodriguez — Tech Lead & Full Stack Engineer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 240px, 340px"
                />
              </div>

              {/* Floating annotation pills — staggered entrance */}
              {ANNOTATION_PILLS.map((pill) => (
                <motion.div
                  key={pill.label}
                  className="node absolute px-2.5 py-1.5"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: pill.delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                  style={{
                    top: pill.top,
                    bottom: pill.bottom,
                    right: pill.right,
                    left: pill.left,
                    borderColor: pill.border,
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: pill.color,
                    whiteSpace: "nowrap",
                  }}
                >
                  {pill.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.12em",
            color: "#334155",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 24, background: "linear-gradient(to bottom, #334155, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
