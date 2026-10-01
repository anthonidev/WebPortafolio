"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Filter = "all" | "featured";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const displayed = filter === "featured"
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section
      id="proyectos"
      className="py-20 px-6 lg:px-8"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
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
            Lo que he construido
          </motion.h2>

          {/* Filter buttons — node style */}
          <div className="flex gap-2">
            {(["all", "featured"] as Filter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className="node px-4 py-2 text-sm transition-all duration-150"
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: filter === f ? "#38bdf8" : "#64748b",
                  borderColor:
                    filter === f ? "rgba(56,189,248,0.5)" : "rgba(148,163,184,0.2)",
                }}
              >
                {f === "all" ? "Todos" : "Destacados"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {displayed.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
