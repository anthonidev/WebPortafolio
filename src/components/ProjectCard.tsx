'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { technologiesData } from '@/data/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Generate a valid CSS selector ID from project name
  const getSafeId = (text: string) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/[^a-zA-Z0-9]/g, '-') // Replace special chars with dash
      .replace(/-+/g, '-') // Replace multiple dashes with single dash
      .replace(/^-|-$/g, ''); // Remove leading/trailing dashes
  };

  const safeId = getSafeId(name);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const getTechNames = () => {
    return technologies
      .map((techId) => technologiesData.find((tech) => tech.id === techId))
      .filter(Boolean);
  };

  return (
    <>
      {/* Card Preview */}
      {!isModalOpen && (
        <motion.div
          layoutId={`project-container-${name}`}
          onClick={() => setIsModalOpen(true)}
          whileHover={{ y: -8 }}
          transition={{
            layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            default: { duration: 0.3, ease: "easeOut" }
          }}
          className="group relative bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-2xl overflow-hidden hover:border-blue-500/30 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
        >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

        {/* Image Carousel */}
        <div className="relative aspect-video bg-foreground/5 overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={{
              nextEl: `.swiper-button-next-${safeId}`,
              prevEl: `.swiper-button-prev-${safeId}`,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={images.length > 1}
            className="h-full w-full project-card-swiper"
            onClick={(swiper, e) => {
              const target = e.target as HTMLElement;
              // Don't open modal if clicking navigation buttons
              if (!target.closest('.swiper-button-next') && !target.closest('.swiper-button-prev')) {
                return;
              }
              e.stopPropagation();
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={img}>
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`${name} - imagen ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {images.length > 1 && (
            <>
              <div
                className={`swiper-button-prev-${safeId} absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-20 cursor-pointer`}
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Previous</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div
                className={`swiper-button-next-${safeId} absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-20 cursor-pointer`}
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Next</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </>
          )}

          {/* Click to expand hint */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>Expand icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 relative z-20">
          {/* Title & Description */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                {name}
              </h3>
              <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Arrow icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h10M7 7v10M7 7l10 10"
                  />
                </svg>
              </div>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {getTechNames().slice(0, 4).map((tech) => (
              <span
                key={tech?.id}
                className="px-3 py-1.5 bg-gradient-to-r from-foreground/5 to-foreground/10 border border-foreground/10 rounded-lg text-xs font-medium hover:border-blue-500/30 transition-colors"
              >
                {tech?.name}
              </span>
            ))}
            {getTechNames().length > 4 && (
              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-lg text-xs font-medium text-blue-500">
                +{getTechNames().length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>
      )}

      {/* Expanded Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              layoutId={`project-container-${name}`}
              transition={{
                layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              className="relative w-full max-w-5xl bg-background border border-foreground/10 rounded-2xl shadow-2xl"
              style={{ overflow: 'hidden' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-foreground/10 transition-colors"
                aria-label="Cerrar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Close icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image Carousel - Larger */}
              <div className="relative aspect-video bg-foreground/5 overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{
                    nextEl: `.modal-swiper-button-next-${safeId}`,
                    prevEl: `.modal-swiper-button-prev-${safeId}`,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={images.length > 1}
                  className="h-full w-full modal-swiper"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={img}>
                      <div className="relative w-full h-full">
                        <Image
                          src={img}
                          alt={`${name} - imagen ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 100vw, 1280px"
                          priority={index === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <div
                      className={`modal-swiper-button-prev-${safeId} absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-all z-20 cursor-pointer`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <title>Previous</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div
                      className={`modal-swiper-button-next-${safeId} absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-all z-20 cursor-pointer`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <title>Next</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {name}
                  </h2>
                  <p className="text-foreground/70 text-base leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground/60 mb-3">
                    Tecnologías utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {getTechNames().map((tech) => (
                      <span
                        key={tech?.id}
                        className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-lg text-sm font-medium hover:bg-foreground/10 transition-colors"
                      >
                        {tech?.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
                >
                  Visitar proyecto
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>External link arrow icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
