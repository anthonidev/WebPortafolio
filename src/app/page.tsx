import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://anthonidev.site',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main itemScope itemType="https://schema.org/ProfilePage">
        <meta itemProp="name" content="Anthoni Portocarrero Rodriguez" />
        <meta itemProp="description" content="Tech Lead & Full Stack Developer - Portfolio profesional de Anthoni Portocarrero Rodriguez" />
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
