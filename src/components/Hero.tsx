'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-full text-sm font-medium">
                  Tech Lead & Full Stack Developer
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hola, soy{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Anthoni Portocarrero
                </span>
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
                Tech Lead e Ingeniero de Software con 5+ años de experiencia diseñando y
                desarrollando soluciones full stack escalables. Especializado en Next.js,
                NestJS, Django, React y AWS.
              </p>
            </div>



            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                type="button"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
              >
                Ver Proyectos
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-3 border-2 border-foreground/20 text-foreground rounded-lg font-medium hover:bg-foreground/5 transition-colors"
              >
                Contactar
              </button>
              <a
                href="/CV_ANTHONI_PORTOCARRERO_RODRIGUEZ_2025.pdf"
                download
                className="px-8 py-3 border-2 border-foreground/20 text-foreground rounded-lg font-medium hover:bg-foreground/5 transition-colors inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Download</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Descargar CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="mailto:softwaretoni21@gmail.com"
                className="p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Email</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>GitHub</title>
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Animated gradient circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Tech stack floating elements */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    {/* Center circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
                      5+
                    </div>

                    {/* Floating tech badges */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-2 bg-background border border-foreground/10 rounded-lg shadow-lg">
                      <span className="text-sm font-medium">Next.js</span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 bg-background border border-foreground/10 rounded-lg shadow-lg">
                      <span className="text-sm font-medium">NestJS</span>
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-background border border-foreground/10 rounded-lg shadow-lg">
                      <span className="text-sm font-medium">React</span>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-background border border-foreground/10 rounded-lg shadow-lg">
                      <span className="text-sm font-medium">AWS</span>
                    </div>
                    <div className="absolute top-1/4 right-1/4 px-4 py-2 bg-background border border-foreground/10 rounded-lg shadow-lg">
                      <span className="text-sm font-medium">TypeScript</span>
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 px-4 py-2 bg-background border border-foreground/10 rounded-lg shadow-lg">
                      <span className="text-sm font-medium">Django</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
