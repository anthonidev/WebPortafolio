# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers, CTOs, and technical leads at software companies (primary), and independent founders or startup teams looking for a senior freelance contractor (secondary). They arrive with a specific need — staff augmentation, a long-term hire, or a concrete project — and scan in under 90 seconds to decide whether to contact or close the tab.

## Product Purpose

A professional portfolio site for Anthoni Portocarrero Rodriguez, a Tech Lead and Full Stack Engineer based in Lima, Peru with 6+ years of experience. The site's job is to convert a qualified visitor into a contact: prove technical depth, demonstrate breadth across frontend and backend, and make reaching out feel easy and natural. Success means an inbound message or CV download from a qualified opportunity.

## Positioning

Unlike a generic portfolio, this site leads with engineering leadership and architectural decisions at scale — ETL pipelines, multi-tenant SaaS, microservices — not just a list of technologies. A candidate who has shipped production systems for six different companies and led teams is distinct from a developer who has built side projects; the site must surface that distinction immediately.

## Operating Context

Visitors typically arrive from a LinkedIn profile link, a job application, or a referral. They are on desktop at work, making a quick judgment call. The site is the single place Anthoni controls his professional narrative; it must be self-contained, fast, and leave a strong impression even without a follow-up conversation.

## Capabilities and Constraints

- Sections: hero/intro, about + skills, experience timeline, projects grid, contact form
- Contact form connects to an existing AWS SES backend at `/api/contact` — must not be replaced or altered
- Profile photo exists at `/public/imgs/profile.webp`
- Project images exist at `/public/projects/`
- Stack: Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Swiper
- No lucide-react available; icons must be inline SVG
- Deployment target: Vercel (anthonidev.me)
- Spanish-language copy; professional but not stiff

## Brand Commitments

Name: Anthoni Portocarrero Rodriguez  
Handle: anthonidev / anthonidev.me  
Email: softwaretoni21@gmail.com  
LinkedIn: anthoni-portotocarrero-rodriguez-06089119a  
GitHub: anthonidev  
No existing visual identity to preserve — this is a ground-up redesign.

## Evidence on Hand

- 6 years of employment history across 6 companies (ClinicSay, Nexus H Global, Sokso, Agencia Belmont, Mowa Consultora, Atom)
- Quantified results: 60% coupling reduction, 35% cost savings, 99.9% uptime, 80% test coverage, 45% bug reduction, 50% performance improvement, CI/CD time from 2h → 15 min
- 9 built projects with screenshots
- University degree in Software Engineering, UTP, 2023
- No testimonials, press, or third-party endorsements on hand

## Product Principles

1. **Lead with proof, not titles.** Metrics and shipped systems carry more weight than role names.
2. **Depth is the differentiator.** Full-stack breadth is table stakes; architectural decision-making and team leadership is what sets this profile apart.
3. **Friction kills conversion.** The contact action must be reachable from anywhere on the page; copy must remove doubt about availability and response time.
4. **The visitor's time is finite.** Every section earns its place by reducing uncertainty or building confidence; decoration that does neither is cut.
5. **Dark is the work environment.** Engineers read dark UIs at night and at desks; the site should feel at home in that context.
