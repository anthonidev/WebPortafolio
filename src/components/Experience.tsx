'use client';

import { experienceData } from '@/data/experience';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  const totalYears = () => {
    const firstJob = experienceData[experienceData.length - 1];
    const start = new Date(firstJob.startDate);
    const now = new Date();
    const years =
      (now.getFullYear() - start.getFullYear()) +
      (now.getMonth() - start.getMonth()) / 12;
    return Math.floor(years);
  };

  const getAllTechnologies = () => {
    const techSet = new Set<string>();
    experienceData.forEach((exp) => {
      exp.technologies.forEach((tech) => {
        techSet.add(tech);
      });
    });
    return Array.from(techSet);
  };

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
            {totalYears()}+ años desarrollando soluciones tecnológicas para
            empresas de diferentes sectores, desde startups hasta empresas
            consolidadas.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 text-center hover:border-foreground/20 transition-all hover:shadow-lg">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              {totalYears()}+
            </div>
            <div className="text-sm text-foreground/60">Años de experiencia</div>
          </div>
          <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 text-center hover:border-foreground/20 transition-all hover:shadow-lg">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              {experienceData.length}
            </div>
            <div className="text-sm text-foreground/60">Empresas</div>
          </div>
          <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 text-center hover:border-foreground/20 transition-all hover:shadow-lg">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              {getAllTechnologies().length}+
            </div>
            <div className="text-sm text-foreground/60">Tecnologías</div>
          </div>
          <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 text-center hover:border-foreground/20 transition-all hover:shadow-lg">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-foreground/60">Compromiso</div>
          </div>
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
        <div className="mt-16 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-foreground/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Stack Tecnológico
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Open menu icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background border border-foreground/10 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Server icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                {['NestJS', 'Django', 'Node.js', 'Python'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background border border-foreground/10 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Cloud and tools icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                Cloud & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Microservicios', 'Git', 'Figma'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background border border-foreground/10 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
