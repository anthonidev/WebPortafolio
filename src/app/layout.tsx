import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const siteUrl = "https://anthonidev.me";

export const metadata: Metadata = {
  title: "Anthoni Portocarrero · Tech Lead & Full Stack Engineer",
  description:
    "Tech Lead e Ingeniero Full Stack con 6+ años diseñando sistemas escalables — NestJS, Next.js, TypeScript, AWS. Disponible para proyectos y posiciones senior.",
  keywords: [
    "Tech Lead",
    "Full Stack Engineer",
    "Next.js",
    "NestJS",
    "TypeScript",
    "AWS",
    "Lima",
    "Peru",
    "Anthoni Portocarrero",
    "anthonidev",
  ],
  authors: [{ name: "Anthoni Portocarrero Rodriguez", url: siteUrl }],
  creator: "Anthoni Portocarrero Rodriguez",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Anthoni Portocarrero · Tech Lead & Full Stack Engineer",
    description:
      "Tech Lead e Ingeniero Full Stack con 6+ años diseñando sistemas escalables — NestJS, Next.js, TypeScript, AWS. Disponible para proyectos y posiciones senior.",
    url: siteUrl,
    siteName: "Anthoni Portocarrero",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Anthoni Portocarrero · Tech Lead & Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthoni Portocarrero · Tech Lead & Full Stack Engineer",
    description:
      "Tech Lead e Ingeniero Full Stack con 6+ años diseñando sistemas escalables — NestJS, Next.js, TypeScript, AWS.",
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
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anthoni Portocarrero Rodriguez",
    jobTitle: "Tech Lead & Full Stack Engineer",
    description:
      "Tech Lead e Ingeniero Full Stack con 6+ años diseñando sistemas escalables — NestJS, Next.js, TypeScript, AWS.",
    url: siteUrl,
    email: "softwaretoni21@gmail.com",
    image: `${siteUrl}/imgs/profile.webp`,
    sameAs: [
      "https://github.com/anthonidev",
      "https://linkedin.com/in/anthoni-portotocarrero-rodriguez-06089119a",
    ],
  };

  return (
    <html
      lang="es"
      className={`${geist.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
