'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            Proyectos{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Una selección de mis mejores proyectos, desde plataformas
            enterprise hasta landing pages personalizadas.
          </p>
        </div>

        {/* Technology Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <motion.button
              type="button"
              onClick={() => setSelectedTech(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all overflow-hidden ${
                selectedTech === null
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-background/50 backdrop-blur-sm border border-foreground/10 hover:border-blue-500/30 text-foreground/70 hover:text-foreground'
              }`}
            >
              {selectedTech === null && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
              <span className="relative z-10">Todos</span>
            </motion.button>
            {technologiesData.map((tech) => {
              return (
                <motion.button
                  key={tech.id}
                  type="button"
                  onClick={() => setSelectedTech(tech.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all overflow-hidden ${
                    selectedTech === tech.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/25'
                      : 'bg-background/50 backdrop-blur-sm border border-foreground/10 hover:border-blue-500/30 text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {selectedTech === tech.id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                  <span className="relative z-10">{tech.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
