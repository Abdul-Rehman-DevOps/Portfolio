'use client';

import Image from 'next/image';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-transparent to-surface-950 pointer-events-none" />

      {/* Light DevOps / cloud icon behind photo */}
      <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" aria-hidden>
        <svg
          className="h-80 w-80 sm:h-96 sm:w-96 text-accent"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <Reveal delay={0}>
          <div className="relative mb-8 rounded-full ring-2 ring-border/50 ring-offset-4 ring-offset-surface-950 overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/profile.png"
              alt="Abdul Rehman"
              width={160}
              height={160}
              className="object-cover aspect-square"
              priority
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-3">
            Abdul Rehman
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-lg sm:text-xl text-accent font-mono mb-4">
            Senior Cloud & DevOps Engineer
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="text-zinc-400 max-w-xl text-base sm:text-lg leading-relaxed">
            Specializing in scalable infrastructure, automation, and secure systems. Multi-cloud (AWS, Azure), Kubernetes, CI/CD, and AI/ML deployment—building platforms that enable fast, confident releases.
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60 animate-fade-in">
        <span className="text-zinc-500 text-sm font-mono">Scroll</span>
        <div className="mt-1 mx-auto w-px h-8 bg-gradient-to-b from-accent/50 to-transparent rounded-full" />
      </div>
    </section>
  );
}
