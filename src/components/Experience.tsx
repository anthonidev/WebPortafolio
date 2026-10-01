"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="py-20 px-6 lg:px-8"
      style={{ background: "rgba(15,23,42,0.4)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 1 }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display), 'Geist', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "#f1f5f9",
              lineHeight: 1.1,
            }}
          >
            Experiencia profesional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="mt-3 max-w-lg"
            style={{
              color: "#64748b",
              fontFamily: "var(--font-body), 'Inter', sans-serif",
              fontSize: "15px",
            }}
          >
            6+ años diseñando y construyendo sistemas para empresas de distintos sectores.
          </motion.p>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
