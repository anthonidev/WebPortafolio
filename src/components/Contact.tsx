"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

interface FieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function FormField({ label, id, name, type = "text", required, value, onChange, placeholder }: FieldProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2"
        style={{
          fontFamily: "var(--font-body), 'Inter', sans-serif",
          fontSize: "13px",
          color: "#94a3b8",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "10px 14px",
          background: "rgba(15,23,42,0.85)",
          border: `1px solid ${focused ? "var(--sky)" : "rgba(148,163,184,0.2)"}`,
          borderRadius: "8px",
          color: "#f1f5f9",
          fontSize: "14px",
          outline: "none",
          transition: "border-color 0.15s ease",
          fontFamily: "var(--font-body), 'Inter', sans-serif",
          boxShadow: focused ? "0 0 0 2px rgba(56,189,248,0.08)" : "none",
        }}
      />
    </div>
  );
}

interface TextareaProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  rows?: number;
}

function FormTextarea({ label, id, name, required, value, onChange, placeholder, rows = 5 }: TextareaProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2"
        style={{
          fontFamily: "var(--font-body), 'Inter', sans-serif",
          fontSize: "13px",
          color: "#94a3b8",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "10px 14px",
          background: "rgba(15,23,42,0.85)",
          border: `1px solid ${focused ? "var(--sky)" : "rgba(148,163,184,0.2)"}`,
          borderRadius: "8px",
          color: "#f1f5f9",
          fontSize: "14px",
          outline: "none",
          resize: "none",
          transition: "border-color 0.15s ease",
          fontFamily: "var(--font-body), 'Inter', sans-serif",
          boxShadow: focused ? "0 0 0 2px rgba(56,189,248,0.08)" : "none",
        }}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Error");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="py-20 px-6 lg:px-8"
      style={{ background: "rgba(15,23,42,0.4)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
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
            Conectemos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="mt-3"
            style={{ color: "#64748b", fontFamily: "var(--font-body), 'Inter', sans-serif", fontSize: "15px" }}
          >
            Disponible para posiciones senior, proyectos freelance y consultoría técnica.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — connection endpoint node */}
          <motion.div
            initial={{ opacity: 1, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Properties node — code block style */}
            <div className="node p-6">
              <p
                className="annotation mb-4"
                style={{ color: "#38bdf8", fontSize: "12px" }}
              >
                // connection.endpoint
              </p>
              <div
                className="space-y-3"
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "13px",
                }}
              >
                <div className="flex gap-2">
                  <span style={{ color: "#a78bfa", minWidth: "80px" }}>email:</span>
                  <a
                    href="mailto:softwaretoni21@gmail.com"
                    style={{ color: "#38bdf8" }}
                    className="transition-opacity duration-150 hover:opacity-70"
                  >
                    &quot;softwaretoni21@gmail.com&quot;
                  </a>
                </div>
                <div className="flex gap-2">
                  <span style={{ color: "#a78bfa", minWidth: "80px" }}>location:</span>
                  <span style={{ color: "#38bdf8" }}>&quot;Lima, Perú&quot;</span>
                </div>
                <div className="flex gap-2">
                  <span style={{ color: "#a78bfa", minWidth: "80px" }}>status:</span>
                  <span style={{ color: "#34d399" }}>&quot;disponible&quot;</span>
                </div>
                <div className="flex gap-2">
                  <span style={{ color: "#a78bfa", minWidth: "80px" }}>response:</span>
                  <span style={{ color: "#38bdf8" }}>&quot;&lt; 24h&quot;</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/anthonidev"
                target="_blank"
                rel="noopener noreferrer"
                className="node flex-1 flex items-center justify-center gap-2 py-3 text-sm transition-all duration-150 hover:text-[#38bdf8]"
                style={{
                  color: "#64748b",
                  fontFamily: "var(--font-body), 'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(148,163,184,0.2)";
                }}
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anthoni-portotocarrero-rodriguez-06089119a/"
                target="_blank"
                rel="noopener noreferrer"
                className="node flex-1 flex items-center justify-center gap-2 py-3 text-sm transition-all duration-150 hover:text-[#a78bfa]"
                style={{
                  color: "#64748b",
                  fontFamily: "var(--font-body), 'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(167,139,250,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(148,163,184,0.2)";
                }}
              >
                <LinkedinIcon />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 1, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="node p-10 flex flex-col items-center justify-center gap-6 text-center min-h-80"
                  style={{ borderColor: "rgba(52,211,153,0.35)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      border: "1px solid rgba(52,211,153,0.4)",
                      background: "rgba(52,211,153,0.06)",
                    }}
                  >
                    <svg width="28" height="28" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="mb-2"
                      style={{
                        fontFamily: "var(--font-display), 'Geist', sans-serif",
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#f1f5f9",
                      }}
                    >
                      Mensaje enviado
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#64748b", fontFamily: "var(--font-body), 'Inter', sans-serif" }}
                    >
                      te respondo en menos de 24h.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="node px-4 py-2 text-sm transition-all duration-150"
                    style={{
                      color: "#38bdf8",
                      borderColor: "rgba(56,189,248,0.35)",
                      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "12px",
                    }}
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="node p-6 space-y-5"
                >
                  <FormField
                    label="nombre"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                  />
                  <FormField
                    label="email"
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@empresa.com"
                  />
                  <FormTextarea
                    label="mensaje"
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm transition-all duration-150 disabled:opacity-50"
                    style={{
                      background: "rgba(56,189,248,0.12)",
                      border: "1px solid rgba(56,189,248,0.4)",
                      borderRadius: "8px",
                      color: "#38bdf8",
                      fontFamily: "var(--font-body), 'Inter', sans-serif",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "loading") {
                        (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.18)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.12)";
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4" style={{ animation: "spin 1s linear infinite" }} fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Enviar mensaje →"
                    )}
                  </button>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-center"
                      style={{
                        color: "#f87171",
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "12px",
                      }}
                    >
                      // Error al enviar. Intenta de nuevo.
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
