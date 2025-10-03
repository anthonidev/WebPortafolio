'use client';

import { useState } from 'react';
import { projectsData, technologiesData } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<number | null>(null);

  const filteredProjects = selectedTech
    ? projectsData.filter((project) =>
      project.technologies.includes(selectedTech)
    )
    : projectsData;

  return (
    <section
      id="proyectos"
      className="min-h-screen py-20 px-6 lg:px-8 bg-foreground/[0.02]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-full text-sm font-medium">
              Portafolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Mis{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado, desde plataformas
            enterprise hasta landing pages personalizadas.
          </p>
        </div>

        {/* Technology Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              onClick={() => setSelectedTech(null)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${selectedTech === null
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 text-foreground/70'
                }`}
            >
              Todos ({projectsData.length})
            </button>
            {technologiesData.map((tech) => {
              const count = projectsData.filter((p) =>
                p.technologies.includes(tech.id)
              ).length;
              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => setSelectedTech(tech.id)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all ${selectedTech === tech.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 text-foreground/70'
                    }`}
                >
                  {tech.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-foreground/5 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-foreground/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>No projects icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              No hay proyectos con esta tecnología
            </h3>
            <p className="text-foreground/60">
              Intenta seleccionar otra tecnología del filtro
            </p>
          </div>
        )}


      </div>
    </section>
  );
}
