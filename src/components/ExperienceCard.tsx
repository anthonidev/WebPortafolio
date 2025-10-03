'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceCardProps {
  id: number;
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export default function ExperienceCard({
  company,
  location,
  position,
  startDate,
  endDate,
  current,
  description,
  responsibilities,
  technologies,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const getDateRange = () => {
    const start = formatDate(startDate);
    const end = current ? 'Actualidad' : endDate ? formatDate(endDate) : '';
    return `${start} - ${end}`;
  };

  return (
    <div className="relative group">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-foreground/10 group-hover:bg-gradient-to-b group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300" />

      {/* Timeline Dot */}
      <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-foreground/20 group-hover:border-blue-500 group-hover:scale-125 transition-all duration-300">
        {current && (
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
        )}
        {current && (
          <div className="absolute inset-0 rounded-full bg-blue-500" />
        )}
      </div>

      {/* Content Card */}
      <div className="ml-8 mb-12">
        <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 hover:border-foreground/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                  {position}
                </h3>
                {current && (
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs font-medium rounded-full">
                    Actual
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-foreground/70">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Company icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="font-semibold">{company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Location icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Calendar icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{getDateRange()}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground/70 leading-relaxed mb-4">
            {description}
          </p>

          {/* Expandable Responsibilities */}
          {responsibilities.length > 1 && (
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3"
              >
                <span>
                  {isExpanded ? 'Ocultar' : 'Ver'} responsabilidades
                </span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <title>Toggle responsibilities icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-2 overflow-hidden"
                  >
                    {responsibilities.map((responsibility, index) => (
                      <motion.li
                        key={responsibility}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                          ease: "easeOut"
                        }}
                        className="flex gap-3 text-sm text-foreground/70"
                      >
                        <span className="text-blue-500 mt-1.5 flex-shrink-0">
                          •
                        </span>
                        <span className="leading-relaxed">{responsibility}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
