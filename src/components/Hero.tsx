'use client';

import Image from 'next/image';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col md:flex-row md:items-center md:justify-between overflow-hidden gap-8 md:gap-12 px-4 pt-24 pb-16 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto"
      style={{ boxSizing: 'border-box' }}
      aria-label="Introduction"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Left: Text content — on mobile order-2 so photo shows first */}
      <div className="relative z-10 flex flex-col justify-center text-center md:text-left order-2 md:order-1 flex-1 min-w-0">
        <Reveal delay={0}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-3 animate-fade-in-up">
            Abdul Rehman
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-base sm:text-lg md:text-xl text-accent font-mono mb-4">
            Senior Cloud & DevOps Engineer
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Specializing in scalable infrastructure, platform reliability, and secure software delivery across AWS and Azure. Kubernetes, GitOps (ArgoCD, FluxCD), CI/CD, and Web3/blockchain infrastructure.
          </p>
        </Reveal>
      </div>

      {/* Right: Photo with rays and glow — on mobile order-1, top */}
      <div className="relative z-10 flex items-center justify-center md:justify-end order-1 md:order-2 flex-shrink-0">
        <Reveal delay={100}>
          <div className="relative flex items-center justify-center">
            {/* Blue trap glow */}
            <div
              className="absolute rounded-full pointer-events-none animate-glow-pulse"
              style={{
                width: 'min(280px, 75vw)',
                height: 'min(280px, 75vw)',
                maxWidth: '320px',
                maxHeight: '320px',
                background: 'radial-gradient(circle at center, rgba(34, 211, 238, 0.25) 0%, rgba(34, 211, 238, 0.08) 40%, transparent 70%)',
              }}
              aria-hidden
            />
            {/* Rays */}
            <div className="absolute pointer-events-none" aria-hidden>
              <svg
                width="240"
                height="240"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                className="opacity-30"
                style={{ width: 'min(240px, 65vw)', height: 'min(240px, 65vw)' }}
              >
                <defs>
                  <radialGradient id="hero-ray-gradient" cx="50" cy="50" r="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i * 360) / 24 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x2 = 50 + 50 * Math.cos(rad);
                  const y2 = 50 + 50 * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={x2}
                      y2={y2}
                      stroke="url(#hero-ray-gradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
            </div>
            <div className="relative rounded-full ring-2 ring-accent/30 ring-offset-4 ring-offset-surface-950 overflow-hidden w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 transition-transform duration-500 hover:scale-105 hover:ring-accent/50 animate-float">
              <Image
                src="/profile.png"
                alt="Abdul Rehman"
                width={208}
                height={208}
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 192px, 208px"
              />
            </div>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
