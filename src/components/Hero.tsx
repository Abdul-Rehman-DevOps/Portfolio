'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { resume } from '@/lib/site';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[82vh] sm:min-h-[88vh] flex flex-col md:flex-row md:items-center md:justify-between overflow-hidden gap-8 md:gap-14 px-4 pt-28 pb-20 sm:px-6 md:px-8 lg:px-10 max-w-6xl mx-auto"
      style={{ boxSizing: 'border-box' }}
      aria-label="Introduction"
    >
      <div className="relative z-10 flex flex-col justify-center text-center md:text-left order-2 md:order-1 flex-1 min-w-0">
        <Reveal delay={0}>
          <h1 className="font-display text-[clamp(1.85rem,5vw,3.4rem)] font-semibold text-heading tracking-tight mb-3 text-balance">
            Abdul Rehman
          </h1>
        </Reveal>
        <Reveal delay={60}>
          <p className="text-base sm:text-lg text-brand/95 dark:text-accent/95 font-mono font-medium tracking-tight mb-5">
            DevSecOps &amp; Cloud Engineer
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-subtle text-sm sm:text-base leading-[1.65] max-w-xl mx-auto md:mx-0">
            I design and run secure, scalable infrastructure on AWS and Azure—Kubernetes, GitOps, CI/CD—and ship
            reliable platforms for Web3, AI, and product teams. Currently at{' '}
            <span className="text-slate-800 dark:text-zinc-200">ChainGPT</span> and{' '}
            <span className="text-slate-800 dark:text-zinc-200">Funavry</span>.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={resume.href}
              download={resume.downloadName}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200/90 bg-white/90 px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-brand/30 hover:bg-white hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:border-border/50 dark:bg-surface-900/50 dark:text-zinc-100 dark:hover:border-accent/40 dark:hover:bg-surface-800/50 dark:focus-visible:ring-accent/40 dark:focus-visible:ring-offset-canvas"
            >
              <svg
                className="h-4 w-4 shrink-0 text-brand dark:text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l3 3m0 0l3-3m-3 3V3"
                />
              </svg>
              Download resume
            </a>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 flex items-center justify-center md:justify-end order-1 md:order-2 flex-shrink-0">
        <Reveal delay={80}>
          <div className="relative flex items-center justify-center">
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 'min(240px, 70vw)',
                height: 'min(240px, 70vw)',
                maxWidth: '280px',
                maxHeight: '280px',
                background:
                  'radial-gradient(circle at center, rgba(91, 143, 168, 0.1) 0%, rgba(91, 143, 168, 0.03) 45%, transparent 70%)',
              }}
              aria-hidden
            />
            <div className="absolute pointer-events-none opacity-[0.1] dark:opacity-[0.12]" aria-hidden>
              <svg
                width="220"
                height="220"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                style={{ width: 'min(220px, 60vw)', height: 'min(220px, 60vw)' }}
              >
                <defs>
                  <radialGradient id="hero-ray-gradient" cx="50" cy="50" r="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#5B8FA8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7C8BC8" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {Array.from({ length: 20 }).map((_, i) => {
                  const angle = (i * 360) / 20 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x2 = 50 + 48 * Math.cos(rad);
                  const y2 = 50 + 48 * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={x2}
                      y2={y2}
                      stroke="url(#hero-ray-gradient)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
            </div>
            <div
              className="relative rounded-full ring-1 ring-slate-300/80 ring-offset-2 ring-offset-slate-100 overflow-hidden
                dark:ring-zinc-600/50 dark:ring-offset-canvas
                w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 transition-[box-shadow,transform] duration-300 ease-out hover:ring-slate-400/90 dark:hover:ring-zinc-500/60"
            >
              <Image
                src="/profile.png"
                alt="Abdul Rehman"
                width={208}
                height={208}
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 176px, 208px"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
