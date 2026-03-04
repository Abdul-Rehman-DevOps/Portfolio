import Link from 'next/link';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import InfrastructureProjects from '@/components/InfrastructureProjects';
import Rating from '@/components/Rating';

export default function Home() {
  return (
    <>
      <Nav />
      <main role="main">
        <Hero />
        <About />
        <Skills />
        <Rating />
        <Experience />
        <Projects />
        <InfrastructureProjects />
        <footer className="border-t border-border/50 py-8 text-center text-zinc-500 text-sm font-mono" role="contentinfo">
          <p>Abdul Rehman · DevOps / Cloud Engineer</p>
          <Link href="/contact" className="mt-2 inline-block text-accent hover:text-accent-muted transition-colors">
            Contact →
          </Link>
        </footer>
      </main>
    </>
  );
}
