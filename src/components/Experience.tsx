'use client';

import { experienceData } from '@/data/experience';
import ExperienceCard from './ExperienceCard';

export default function Experience() {




  return (
    <section
      id="experiencia"
      className="min-h-screen py-20 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium">
              Trayectoria
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Mi{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Experiencia
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            5+ años desarrollando soluciones tecnológicas para
            empresas de diferentes sectores, desde startups hasta empresas
            consolidadas.
          </p>
        </div>



        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {experienceData.map((experience) => (
              <ExperienceCard
                key={experience.id}
                {...experience}
              />
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-foreground/10 p-8 md:p-10">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

          <div className="relative">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stack Tecnológico
              </h3>
              <p className="text-muted-foreground text-sm">
                Tecnologías y herramientas que domino
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Frontend icon</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Astro', 'Shadcn'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm border border-blue-500/20 rounded-xl text-sm font-medium hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Backend icon</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Backend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['NestJS', 'Django', 'Node.js', 'Python', 'TypeORM', 'Prisma'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm border border-purple-500/20 rounded-xl text-sm font-medium hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & Tools */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Cloud & Tools icon</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Cloud & Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Microservicios', 'Git', 'Figma', 'Docker', 'Vercel', 'Railway'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl text-sm font-medium hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
