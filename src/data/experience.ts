export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
  stack: string[];
  layer: 'sky' | 'emerald' | 'violet';
}

export const experiences: ExperienceItem[] = [
  {
    id: 'clinicsay',
    company: 'ClinicSay',
    position: 'Senior Full Stack Developer',
    location: 'Lima, Perú',
    period: 'Dic 2025 — Actualidad',
    current: true,
    layer: 'sky',
    highlights: [
      'Diseñé e implementé pipelines ETL desde sistemas legacy (SQL Server, Excel, CSV) hacia PostgreSQL, garantizando integridad referencial y cero pérdida de datos.',
      'Arquitecté estrategias de migración delta para sincronización incremental de datos clínicos con rollback seguro en cada etapa.',
      'Construí arquitectura backend multi-tenant con NestJS, TypeScript y PostgreSQL: aislamiento de datos por tenant y gestión dinámica de esquemas.',
      'Implementé autenticación multi-tenant con AWS Cognito y desarrollé interfaces de gestión clínica con Next.js.',
    ],
    stack: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'AWS Cognito', 'Docker'],
  },
  {
    id: 'nexus',
    company: 'Nexus H Global',
    position: 'Tech Lead Full Stack',
    location: 'Lima, Perú',
    period: 'Mar 2025 — Nov 2025',
    current: false,
    layer: 'emerald',
    highlights: [
      'Lideré arquitectura full stack de dos sistemas enterprise, reduciendo acoplamiento en 60% y mejorando velocidad de desarrollo.',
      'Diseñé infraestructura AWS (EC2, S3, RDS) optimizando costos en 35% y alcanzando 99.9% de disponibilidad.',
      'Establecí testing automatizado con 80% de cobertura, reduciendo bugs en producción en 45%.',
      'Optimicé performance backend (Redis, indexación) y frontend (code splitting, lazy loading): 50% menos tiempo de respuesta/carga.',
      'Implementé CI/CD con GitHub Actions, reduciendo tiempo de release de 2 horas a 15 minutos.',
      'Mentoreé el equipo estableciendo estándares de código, code reviews y documentación técnica.',
    ],
    stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'sokso',
    company: 'Sokso',
    position: 'Full Stack Developer',
    location: 'Lima, Perú',
    period: 'May 2024 — Feb 2025',
    current: false,
    layer: 'violet',
    highlights: [
      'Diseñé arquitectura de microservicios para Smart 3.0 con deployment autónomo por servicio.',
      'Construí arquitectura frontend modular con Next.js y atomic design, reduciendo duplicación de código en 60%.',
      'Desarrollé APIs con NestJS aplicando arquitectura hexagonal y DDD.',
      'Alcancé 75% de cobertura de tests con Jest y React Testing Library.',
    ],
    stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Microservicios', 'Jest'],
  },
  {
    id: 'belmont',
    company: 'Agencia Belmont',
    position: 'Full Stack Developer',
    location: 'Lima, Perú',
    period: 'Dic 2022 — May 2024',
    current: false,
    layer: 'sky',
    highlights: [
      'Construí Plataforma Lotemania completa con Next.js y Django REST Framework desde cero hasta producción.',
      'Desarrollé interfaces responsive pixel-perfect desde Figma con mobile-first y compatibilidad cross-browser.',
      'Diseñé modelos de datos complejos con Django ORM optimizando queries con select_related y prefetch_related.',
      'Implementé autenticación JWT con registro, login, recuperación de contraseñas y permisos por roles.',
    ],
    stack: ['Next.js', 'React', 'Django', 'Python', 'PostgreSQL', 'TypeScript'],
  },
  {
    id: 'mowa',
    company: 'Mowa Consultora',
    position: 'Frontend Developer',
    location: 'Lima, Perú',
    period: 'Jul 2022 — Nov 2022',
    current: false,
    layer: 'emerald',
    highlights: [
      'Desarrollé interfaces con React transformando diseños Figma en componentes pixel-perfect.',
      'Integré AWS Cognito y desplegué con AWS Amplify configurando pipelines CI/CD.',
      'Optimicé Core Web Vitals y garanticé accesibilidad WCAG 2.1 con HTML semántico y ARIA labels.',
    ],
    stack: ['React', 'AWS Cognito', 'AWS Amplify', 'JavaScript'],
  },
  {
    id: 'atom',
    company: 'Atom',
    position: 'Full Stack Developer',
    location: 'Lima, Perú',
    period: 'Abr 2021 — May 2022',
    current: false,
    layer: 'violet',
    highlights: [
      'Desarrollé plataforma e-commerce completa desde cero: frontend con React y backend con Django/Python.',
      'Implementé catálogo, carrito, procesamiento de órdenes, pagos y panel de administración.',
    ],
    stack: ['React', 'Django', 'Python', 'JavaScript'],
  },
];
