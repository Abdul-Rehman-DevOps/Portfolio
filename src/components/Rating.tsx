'use client';

import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const RATING_KEY = 'portfolio-rating';
const STAR_COUNT = 5;

const areas = [
  { label: 'Cloud & Infrastructure', value: 5, max: 5 },
  { label: 'CI/CD & DevOps', value: 5, max: 5 },
  { label: 'Kubernetes & Containers', value: 5, max: 5 },
  { label: 'Security & IAM', value: 4, max: 5 },
  { label: 'IaC (Terraform, etc.)', value: 5, max: 5 },
  { label: 'AI/ML Ops & GPU workloads', value: 4, max: 5 },
  { label: 'Blockchain / Web3 infra', value: 4, max: 5 },
];

export default function Rating() {
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hoverStar, setHoverStar] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(RATING_KEY);
      if (saved) setUserRating(parseInt(saved, 10));
    } catch {
      // ignore
    }
  }, []);

  const handleRate = (stars: number) => {
    setUserRating(stars);
    try {
      localStorage.setItem(RATING_KEY, String(stars));
    } catch {
      // ignore
    }
  };

  const displayStars = hoverStar ?? userRating ?? 0;

  return (
    <section id="rating" className="section-container border-t border-border/50" aria-labelledby="rating-heading">
      <Reveal>
        <h2 id="rating-heading" className="text-2xl font-semibold text-white mb-2 font-mono tracking-tight">
          Focus & proficiency
        </h2>
        <p className="text-zinc-500 text-sm mb-4 max-w-xl">
          High-level expertise across cloud, automation, and platform engineering.
        </p>
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <div className="inline-flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-semibold text-white font-mono tabular-nums">5.4k</span>
            <span className="text-zinc-500 text-sm">rating</span>
          </div>
          {/* User star rating */}
          <div className="flex flex-col gap-2">
            <span className="text-zinc-400 text-sm">Rate my profile</span>
            <div className="flex gap-1" role="group" aria-label="Rate profile with stars">
              {Array.from({ length: STAR_COUNT }, (_, i) => {
                const value = i + 1;
                const filled = value <= displayStars;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleRate(value)}
                    onMouseEnter={() => setHoverStar(value)}
                    onMouseLeave={() => setHoverStar(null)}
                    className={`p-0.5 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-950 transition-transform hover:scale-110 ${filled ? 'text-accent' : 'text-zinc-500'}`}
                    aria-label={`${value} star${value > 1 ? 's' : ''}`}
                    aria-pressed={userRating === value}
                  >
                    <svg
                      className="w-8 h-8 sm:w-9 sm:h-9 transition-colors"
                      fill={filled ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </button>
                );
              })}
            </div>
            {userRating !== null && (
              <p className="text-accent/90 text-sm font-mono">
                Thanks! You rated {userRating}/5
              </p>
            )}
          </div>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
        {areas.map((area, i) => (
          <Reveal key={area.label} delay={i * 40}>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-300 text-sm font-medium">{area.label}</span>
                <span className="text-accent/80 text-xs font-mono">
                  {area.value}/{area.max}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-900 overflow-hidden">
                <div
                  className="h-full rounded-full bg-accent/70 transition-all duration-700 ease-out"
                  style={{ width: `${(area.value / area.max) * 100}%` }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
