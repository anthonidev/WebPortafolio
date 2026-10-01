"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const LAYER_BORDERS: Record<string, string> = {
  sky: "rgba(56,189,248,0.35)",
  emerald: "rgba(52,211,153,0.35)",
  violet: "rgba(167,139,250,0.35)",
};

const LAYER_COLORS: Record<string, string> = {
  sky: "#38bdf8",
  emerald: "#34d399",
  violet: "#a78bfa",
};

interface Props {
  project: Project;
  index: number;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0);
  const accentColor = LAYER_COLORS[project.layer];
  const borderColor = LAYER_BORDERS[project.layer];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setImgIndex((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft") setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, project.images.length]);

  const prev = useCallback(() => setImgIndex((i) => (i - 1 + project.images.length) % project.images.length), [project.images.length]);
  const next = useCallback(() => setImgIndex((i) => (i + 1) % project.images.length), [project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(7,11,17,0.92)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="node w-full max-w-3xl overflow-hidden"
        style={{ borderColor, maxHeight: "90vh", display: "flex", flexDirection: "column" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image gallery */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", flexShrink: 0 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[imgIndex]}
                alt={`${project.title} — imagen ${imgIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows — only if multiple images */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full"
                style={{ background: "rgba(11,15,20,0.75)", border: "1px solid rgba(148,163,184,0.2)", color: "#f1f5f9" }}
                aria-label="Imagen anterior"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full"
                style={{ background: "rgba(11,15,20,0.75)", border: "1px solid rgba(148,163,184,0.2)", color: "#f1f5f9" }}
                aria-label="Imagen siguiente"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </>
          )}

          {/* Image counter */}
          {project.images.length > 1 && (
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5"
            >
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === imgIndex ? "20px" : "6px",
                    height: "6px",
                    background: i === imgIndex ? accentColor : "rgba(148,163,184,0.4)",
                  }}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full"
            style={{ background: "rgba(11,15,20,0.75)", border: "1px solid rgba(148,163,184,0.2)", color: "#94a3b8" }}
            aria-label="Cerrar"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3
              style={{
                fontFamily: "var(--font-display), 'Geist', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#f1f5f9",
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h3>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="node flex items-center gap-2 px-4 py-2 flex-shrink-0 transition-all duration-150"
                style={{
                  borderColor: "rgba(56,189,248,0.5)",
                  color: "#38bdf8",
                  fontFamily: "var(--font-body), 'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(15,23,42,0.85)";
                }}
              >
                Demo
                <ExternalIcon />
              </a>
            )}
          </div>

          <p
            style={{
              color: "#94a3b8",
              fontFamily: "var(--font-body), 'Inter', sans-serif",
              fontSize: "14px",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="node px-2.5 py-1"
                style={{
                  borderColor,
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: accentColor,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectCard({ project, index }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const accentColor = LAYER_COLORS[project.layer];
  const borderColor = LAYER_BORDERS[project.layer];

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "-40px" }}
        transition={{ delay: index * 0.05, type: "spring", stiffness: 120, damping: 22 }}
        className="node flex flex-col overflow-hidden cursor-pointer"
        style={{
          borderColor: isHovered ? borderColor : "rgba(148,163,184,0.2)",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: isHovered ? "0 8px 32px rgba(0,0,0,0.5)" : undefined,
        }}
        onClick={() => setModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              transform: isHovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
            style={{ background: "rgba(11,15,20,0.65)", opacity: isHovered ? 1 : 0 }}
          >
            <span
              className="node px-4 py-2 text-sm"
              style={{
                color: accentColor,
                borderColor,
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                fontSize: "13px",
              }}
            >
              Ver proyecto →
            </span>
          </div>

          {/* Image count badge */}
          {project.images.length > 1 && (
            <div
              className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded"
              style={{
                background: "rgba(11,15,20,0.75)",
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#64748b",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              {project.images.length}
            </div>
          )}

          {/* Featured badge */}
          {project.featured && (
            <div
              className="node absolute top-2 right-2 px-2 py-0.5"
              style={{
                border: "1px solid rgba(56,189,248,0.4)",
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#38bdf8",
              }}
            >
              featured
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3
            style={{
              fontFamily: "var(--font-display), 'Geist', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              color: "#f1f5f9",
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>

          <p
            className="flex-1"
            style={{
              color: "#94a3b8",
              fontFamily: "var(--font-body), 'Inter', sans-serif",
              fontSize: "13px",
              lineHeight: 1.65,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="node px-2 py-0.5"
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "#64748b",
                  borderColor,
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span
                className="node px-2 py-0.5"
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "#475569",
                }}
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <ProjectModal project={project} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
