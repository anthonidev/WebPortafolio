"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Experiencia" },
  { id: "experiencia", label: "Trayectoria" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = ["inicio", "sobre-mi", "experiencia", "proyectos", "contacto"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(11,15,20,0.90)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        borderBottom: "1px solid rgba(148,163,184,0.10)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("inicio")}
            className="flex items-center gap-1.5 group"
            style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
          >
            <span
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#38bdf8" }}
            >
              [
            </span>
            <span
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#f1f5f9" }}
            >
              anthoni.dev
            </span>
            <span
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#38bdf8" }}
            >
              ]
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-4 py-2 text-sm transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-body), 'Inter', sans-serif",
                    color: isActive ? "#f1f5f9" : hoveredItem === item.id ? "#f1f5f9" : "#64748b",
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 right-0 mx-auto h-px"
                      style={{ background: "#38bdf8", width: "60%", left: "20%" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Available badge */}
            <div
              className="flex items-center gap-1.5 ml-3 px-3 py-1.5 rounded"
              style={{
                border: "1px solid rgba(52,211,153,0.4)",
                background: "rgba(52,211,153,0.04)",
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#34d399",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full pulse-dot"
                style={{ background: "#34d399" }}
              />
              Disponible
            </div>

            {/* Contactar CTA */}
            <button
              type="button"
              onClick={() => scrollTo("contacto")}
              className="ml-3 node px-4 py-2 text-sm transition-all duration-150 hover:text-[#38bdf8]"
              style={{
                borderColor: "rgba(56,189,248,0.4)",
                color: "#94a3b8",
                fontFamily: "var(--font-body), 'Inter', sans-serif",
              }}
            >
              Contactar
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            style={{ color: "#64748b" }}
            aria-label="Abrir menú"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(11,15,20,0.97)",
              borderTop: "1px solid rgba(148,163,184,0.10)",
            }}
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="block w-full text-left px-3 py-2.5 rounded text-sm"
                  style={{
                    fontFamily: "var(--font-body), 'Inter', sans-serif",
                    color: activeSection === item.id ? "#38bdf8" : "#64748b",
                    background:
                      activeSection === item.id
                        ? "rgba(56,189,248,0.06)"
                        : "transparent",
                    borderRadius: "6px",
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
              <button
                type="button"
                onClick={() => scrollTo("contacto")}
                className="block w-full mt-3 node px-4 py-2.5 text-sm text-center"
                style={{
                  borderColor: "rgba(56,189,248,0.4)",
                  color: "#38bdf8",
                  fontFamily: "var(--font-body), 'Inter', sans-serif",
                }}
              >
                Contactar →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
