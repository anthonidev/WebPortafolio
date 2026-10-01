"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SKILL_GROUPS = [
  {
    header: "// frontend",
    colorClass: "layer-sky",
    textColor: "#38bdf8",
    skills: ["React", "Next.js 14+", "TypeScript", "Tailwind CSS", "Zustand", "React Query"],
  },
  {
    header: "// backend",
    colorClass: "layer-emerald",
    textColor: "#34d399",
    skills: ["NestJS", "Express.js", "Django", "Python", "gRPC", "WebSockets"],
  },
  {
    header: "// databases",
    colorClass: "layer-violet",
    textColor: "#a78bfa",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "TypeORM", "Prisma"],
  },
  {
    header: "// cloud & devops",
    colorClass: "layer-sky",
    textColor: "#38bdf8",
    skills: ["AWS EC2/S3/RDS/Lambda/Cognito", "Docker", "GitHub Actions", "Nginx"],
  },
  {
    header: "// testing",
    colorClass: "layer-emerald",
    textColor: "#34d399",
    skills: ["Jest", "React Testing Library", "Supertest"],
  },
];

const STATS = [
  { value: "6+", label: "años de exp.", target: 6 },
  { value: "6", label: "empresas", target: 6 },
  { value: "10+", label: "proyectos", target: 10 },
];

const BIO_BLOCKS = [
  {
    comment: "// who",
    prose: "Soy un Tech Lead e Ingeniero Full Stack con base en Lima, Perú.",
  },
  {
    comment: "// what i build",
    prose: "Sistemas distribuidos, APIs REST/gRPC, pipelines ETL, y plataformas SaaS multi-tenant.",
  },
  {
    comment: "// how i work",
    prose: "Lidero equipos, defino arquitectura, y escribo código de producción — sin elegir uno sobre el otro.",
  },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, motionVal, target]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v).toString()));
  }, [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-20 px-6 lg:px-8"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="space-y-8">
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 1 }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display), 'Geist', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                letterSpacing: "-0.02em",
                color: "#f1f5f9",
                lineHeight: 1.1,
              }}
            >
              El ingeniero detrás del stack
            </motion.h2>

            <div className="space-y-6">
              {BIO_BLOCKS.map((block, i) => (
                <motion.div
                  key={block.comment}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0, margin: "-60px" }}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#38bdf8",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {block.comment}
                  </p>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontFamily: "var(--font-body), 'Inter', sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.7,
                    }}
                  >
                    {block.prose}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats with count-up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "-60px" }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-3 pt-4"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="node px-4 py-5"
                  whileHover={{ borderColor: "rgba(56,189,248,0.4)", transition: { duration: 0.2 } }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display), 'Geist', sans-serif",
                      fontSize: "28px",
                      color: "#38bdf8",
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <CountUp target={stat.target} suffix={stat.value.includes("+") ? "+" : ""} />
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), 'Inter', sans-serif",
                      fontSize: "12px",
                      color: "#64748b",
                      marginTop: "4px",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — skill clusters */}
          <div className="space-y-5">
            {SKILL_GROUPS.map((group, gi) => (
              <motion.div
                key={group.header}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "-60px" }}
                transition={{ delay: gi * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="annotation mb-2"
                  style={{ color: group.textColor, fontSize: "12px" }}
                >
                  {group.header}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className={`node ${group.colorClass} px-2.5 py-1`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0 }}
                      transition={{ delay: gi * 0.07 + si * 0.04, duration: 0.3, ease: "easeOut" }}
                      whileHover={{ scale: 1.06, transition: { duration: 0.12 } }}
                      style={{
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "12px",
                        color: group.textColor,
                        cursor: "default",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
