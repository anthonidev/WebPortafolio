export const technologiesData = [
    { id: 1, name: "Next.js" },
    { id: 2, name: "NestJS" },
    { id: 3, name: "TypeScript" },
    { id: 4, name: "Tailwind CSS" },
    { id: 5, name: "MongoDB" },
    { id: 6, name: "PostgreSQL" },
    { id: 7, name: "Nats" },
    { id: 8, name: "Astro" },
 
];

export const projectsData = [
    {
        id: 1,
        name: "Nexus platform",
        description: "Plataforma de gestión de sistema multinivel, ecommerce, pagos y reparto de comisiones.",
        images: ["/projects/nexus/nexus1.webp", "/projects/nexus/nexus2.webp", "/projects/nexus/nexus3.webp", "/projects/nexus/nexus4.webp"],
        link: "https://www.nexushglobal.com",
        technologies: [1, 2, 3, 4, 5, 6, 7] // Next.js, NestJS, TypeScript, Tailwind CSS, MongoDB, PostgreSQL, Nats
    },
    {
        id: 2,
        name: "Sistema de huertas",
        description: "Sistema de gestión de ventas, cobranza y gestión de inventario para la empresa huertas inmobiliarias.",
        images: ["/projects/sistema-huertas/smart1.webp", "/projects/sistema-huertas/smart2.webp", "/projects/sistema-huertas/smart3.webp", "/projects/sistema-huertas/smart4.webp"],
        link: "https://smart.inmobiliariahuertas.com",
        technologies: [1, 3, 4, 2, 5, 6] // Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, MongoDB, PostgreSQL
    },
    {
        id: 3,
        name: "Landing Olivar Condominio",
        description: "Landing page para la promoción del condominio el olivar.",
        images: ["/projects/landing-olivar/olivar1.webp", "/projects/landing-olivar/olivar2.webp"],
        link: "https://olivar-condominio.inmobiliariahuertas.com",
        technologies: [1, 3, 4, 2, 5, 6] // Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, MongoDB, PostgreSQL
    },
    {
        id: 4,
        name: "Landing Apolo Condominio",
        description: "Landing page para la promoción del condominio apolo.",
        images: ["/projects/landing-apolo/apolo1.webp", "/projects/landing-apolo/apolo2.webp"],
        link: "https://apolo-condominio.inmobiliariahuertas.com",
        technologies: [8, 3, 4, 6] // Astro, TypeScript, Tailwind CSS, PostgreSQL
    },
    {
        id: 5,
        name: "Website Huertas Inmobiliarias",
        description: "Website corporativo para la empresa huertas inmobiliarias.",
        images: ["/projects/huertas-website/huertasweb1.webp", "/projects/huertas-website/huertasweb2.webp", "/projects/huertas-website/huertasweb3.webp"],
        link: "https://www.inmobiliariahuertas.com",
        technologies: [8, 3, 4, 6] // Astro, TypeScript, Tailwind CSS, PostgreSQL

    },
    {
        id: 6,
        name: "Ecommerce Sokso",
        description: "Ecommerce para la venta de productos de la empresa Sokso.",
        images: ["/projects/ecommerce-sokso/sokso1.webp", "/projects/ecommerce-sokso/sokso2.webp", "/projects/ecommerce-sokso/sokso3.webp"],
        link: "https://smart.sokso.com/articulos",
        technologies: [1, 3, 4, 2, 5, 6,7] // Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, MongoDB, PostgreSQL

    },
    {
        id: 7,
        name: "Boda Cesar & Verónica",
        description: "Landing page para la promoción de la boda de Cesar y Verónica.",
        images: ["/projects/boda/boda1.webp"],
        link: "https://boda-cesar-veronica2.vercel.app",
        technologies: [8, 3, 4] // Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, MongoDB, PostgreSQL
    },
    {
        id: 8,
        name: "Invertifast",
        description: "Plataforma de gestión de inversiones y préstamos entre personas.",
        images: ["/projects/invertifast/invertifast1.webp", "/projects/invertifast/invertifast2.webp"],
        link: "https://www.invertifast.pe",
        technologies: [8, 3, 4,] // Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, MongoDB, PostgreSQL
    },
    {
        id: 9,
        name: "Kopiri",
        description: "Website del software Kopiri que permite la optimización de imágenes.",
        images: ["/projects/kopiri-site/kopiri1.webp", "/projects/kopiri-site/kopiri2.webp"],
        link: "https://kopiri-web.vercel.app",
        technologies: [1,3,4] // Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, MongoDB, PostgreSQL
    }
];

// Función helper para obtener los nombres de las tecnologías de un proyecto
export const getProjectTechnologies = (projectId: number) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return [];
    
    return project.technologies.map(techId => 
        technologiesData.find(tech => tech.id === techId)
    ).filter(Boolean);
};