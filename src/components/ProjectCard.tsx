'use client';

import { useState } from 'react';
import { technologiesData } from '@/data/projects';

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  images: string[];
  link: string;
  technologies: number[];
}

export default function ProjectCard({
  name,
  description,
  images,
  link,
  technologies,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const getTechNames = () => {
    return technologies
      .map((techId) => technologiesData.find((tech) => tech.id === techId))
      .filter(Boolean);
  };

  const nextImage = () => {
    setIsImageLoaded(false);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIsImageLoaded(false);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group bg-foreground/5 border border-foreground/10 rounded-2xl overflow-hidden hover:border-foreground/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Image Carousel */}
      <div className="relative aspect-video bg-foreground/5 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${name} - imagen ${currentImageIndex + 1}`}
          className={`w-full h-full object-cover transition-all duration-500 ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          onLoad={() => setIsImageLoaded(true)}
        />

        {/* Image Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              type="button"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label="Imagen anterior"
            >
              <svg
                className="w-5 h-5"
                fill="none"

                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Previous image icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label="Siguiente imagen"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Next image icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((imgSrc, index) => (
                <button
                  key={imgSrc}
                  type="button"
                  onClick={() => {
                    setIsImageLoaded(false);
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                    }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* External Link Badge */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>External link icon</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
            {name}
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {getTechNames().map((tech) => (
            <span
              key={tech?.id}
              className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-medium"
            >
              {tech?.name}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
        >
          Ver proyecto
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>External link arrow icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
