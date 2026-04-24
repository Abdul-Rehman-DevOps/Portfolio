import Link from 'next/link';
import Nav from '@/components/Nav';
import { resume } from '@/lib/site';
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
      <main role="main" className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Rating />
        <Experience />
        <Projects />
        <InfrastructureProjects />
        <footer className="section-rule py-10 sm:py-12 text-center text-sm" role="contentinfo">
          <p className="font-mono text-[13px] text-subtle">Abdul Rehman — DevSecOps &amp; cloud engineering</p>
          <p className="mt-1 text-slate-500 dark:text-zinc-600 text-xs">ChainGPT · Funavry</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm font-mono">
            <a
              href={resume.href}
              download={resume.downloadName}
              className="text-subtle hover:text-brand dark:hover:text-accent transition-colors duration-200"
            >
              Download resume (PDF)
            </a>
            <span className="text-slate-300 dark:text-zinc-700" aria-hidden>
              ·
            </span>
            <Link
              href="/contact"
              className="text-subtle hover:text-brand dark:hover:text-accent transition-colors duration-200"
            >
              Contact →
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
