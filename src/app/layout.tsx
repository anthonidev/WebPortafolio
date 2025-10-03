import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://anthonidev.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anthoni Portocarrero Rodriguez - Tech Lead & Full Stack Developer | Portfolio",
    template: "%s | Anthoni Portocarrero Rodriguez",
  },
  description:
    "Anthoni Portocarrero Rodriguez - Tech Lead e Ingeniero de Software con 5+ años de experiencia diseñando y desarrollando soluciones full stack escalables. Especializado en Next.js, NestJS, Django, React y AWS. Portfolio profesional.",
  keywords: [
    "Anthoni Portocarrero Rodriguez",
    "Anthoni Portocarrero",
    "Portocarrero Rodriguez",
    "Tech Lead Peru",
    "Full Stack Developer Peru",
    "Ingeniero de Software Peru",
    "Desarrollador Web Peru",
    "Next.js Developer",
    "React Developer",
    "NestJS Developer",
    "Django Developer",
    "AWS Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Python Developer",
    "Software Engineer Peru",
    "anthonidev",
    "UNI Ingeniero",
    "Universidad Nacional de Ingeniería",
  ],
  authors: [{ name: "Anthoni Portocarrero", url: siteUrl }],
  creator: "Anthoni Portocarrero",
  publisher: "Anthoni Portocarrero",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "profile",
    locale: "es_ES",
    url: siteUrl,
    title: "Anthoni Portocarrero Rodriguez - Tech Lead & Full Stack Developer",
    description:
      "Anthoni Portocarrero Rodriguez - Tech Lead e Ingeniero de Software con 5+ años de experiencia diseñando y desarrollando soluciones full stack escalables. Especializado en Next.js, NestJS, Django, React y AWS.",
    siteName: "Anthoni Portocarrero Rodriguez - Portfolio Profesional",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Anthoni Portocarrero Rodriguez - Tech Lead & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthoni Portocarrero Rodriguez - Tech Lead & Full Stack Developer",
    description:
      "Anthoni Portocarrero Rodriguez - Tech Lead e Ingeniero de Software con 5+ años de experiencia diseñando y desarrollando soluciones full stack escalables.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anthoni Portocarrero Rodriguez",
    jobTitle: "Tech Lead & Full Stack Developer",
    description:
      "Tech Lead e Ingeniero de Software con 5+ años de experiencia diseñando y desarrollando soluciones full stack escalables.",
    url: siteUrl,
    email: "softwaretoni21@gmail.com",
    image: `${siteUrl}/og-image.png`,
    sameAs: [
      "https://github.com/anthoniportocarrero",
      "https://linkedin.com/in/anthoni-portocarrero",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "NestJS",
      "Django",
      "AWS",
      "TypeScript",
      "JavaScript",
      "Python",
      "Full Stack Development",
      "Software Engineering",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Universidad Nacional de Ingeniería",
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
