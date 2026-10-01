export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  layer: 'sky' | 'emerald' | 'violet';
}

export const projects: Project[] = [
  {
    id: 'nexus-platform',
    title: "Nexus Platform",
    description:
      "Plataforma enterprise de gestión multinivel con ecommerce, pagos automáticos y distribución de comisiones en tiempo real.",
    images: [
      "/projects/nexus/nexus1.webp",
      "/projects/nexus/nexus2.webp",
      "/projects/nexus/nexus3.webp",
      "/projects/nexus/nexus4.webp",
    ],
    technologies: ["Next.js", "NestJS", "TypeScript", "MongoDB", "PostgreSQL", "Nats"],
    live: "https://www.nexushglobal.com",
    featured: true,
    layer: 'emerald',
  },
  {
    id: 'sistema-huertas',
    title: "Sistema de Huertas",
    description:
      "ERP inmobiliario multi-módulo: ventas, cobranza e inventario con dashboard analítico para Huertas Inmobiliarias.",
    images: [
      "/projects/sistema-huertas/smart1.webp",
      "/projects/sistema-huertas/smart2.webp",
      "/projects/sistema-huertas/smart3.webp",
      "/projects/sistema-huertas/smart4.webp",
    ],
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    live: "https://smart.inmobiliariahuertas.com",
    featured: true,
    layer: 'sky',
  },
  {
    id: 'ecommerce-sokso',
    title: "Ecommerce Sokso",
    description:
      "Plataforma ecommerce B2C con catálogo dinámico, carrito persistente y gestión de pedidos para miles de productos.",
    images: [
      "/projects/ecommerce-sokso/sokso1.webp",
      "/projects/ecommerce-sokso/sokso2.webp",
      "/projects/ecommerce-sokso/sokso3.webp",
    ],
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Nats"],
    live: "https://smart.sokso.com/articulos",
    featured: true,
    layer: 'violet',
  },
  {
    id: 'landing-olivar',
    title: "Landing Olivar Condominio",
    description:
      "Landing page de alto impacto para el Condominio El Olivar con galería interactiva y formulario de contacto integrado.",
    images: [
      "/projects/landing-olivar/olivar1.webp",
      "/projects/landing-olivar/olivar2.webp",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://olivar-condominio.inmobiliariahuertas.com",
    featured: false,
    layer: 'sky',
  },
  {
    id: 'landing-apolo',
    title: "Landing Apolo Condominio",
    description:
      "Landing page para el Condominio Apolo construida con Astro para rendimiento máximo y Core Web Vitals perfectos.",
    images: [
      "/projects/landing-apolo/apolo1.webp",
      "/projects/landing-apolo/apolo2.webp",
    ],
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
    live: "https://apolo-condominio.inmobiliariahuertas.com",
    featured: false,
    layer: 'emerald',
  },
  {
    id: 'huertas-website',
    title: "Website Huertas Inmobiliarias",
    description:
      "Website corporativo para Huertas Inmobiliarias con performance máximo, SEO técnico avanzado y catálogo de proyectos.",
    images: [
      "/projects/huertas-website/huertasweb1.webp",
      "/projects/huertas-website/huertasweb2.webp",
      "/projects/huertas-website/huertasweb3.webp",
    ],
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    live: "https://www.inmobiliariahuertas.com",
    featured: false,
    layer: 'violet',
  },
  {
    id: 'boda',
    title: "Boda Cesar & Verónica",
    description:
      "Landing temática para celebración de boda con cuenta regresiva interactiva, RSVP digital y galería de fotos.",
    images: ["/projects/boda/boda1.webp"],
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
    live: "https://boda-cesar-veronica2.vercel.app",
    featured: false,
    layer: 'sky',
  },
  {
    id: 'invertifast',
    title: "Invertifast",
    description:
      "Plataforma fintech de gestión de inversiones y préstamos P2P con dashboard de portafolio en tiempo real.",
    images: [
      "/projects/invertifast/invertifast1.webp",
      "/projects/invertifast/invertifast2.webp",
    ],
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
    live: "https://www.invertifast.pe",
    featured: false,
    layer: 'emerald',
  },
  {
    id: 'kopiri',
    title: "Kopiri",
    description:
      "Website del software Kopiri de optimización de imágenes con demos interactivos y documentación técnica integrada.",
    images: [
      "/projects/kopiri-site/kopiri1.webp",
      "/projects/kopiri-site/kopiri2.webp",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://kopiri-web.vercel.app",
    featured: false,
    layer: 'violet',
  },
];
