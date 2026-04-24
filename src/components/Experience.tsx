'use client';

import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { experienceRoles } from '@/data/experience';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container section-rule"
      aria-labelledby="experience-heading"
    >
      <Reveal>
        <SectionHeader
          id="experience-heading"
          title="Experience"
          lead="DevSecOps, platform, and client-facing delivery—security and reliability as part of the default path, not a separate phase."
          className="mb-10 sm:mb-12"
        />
      </Reveal>
      <ol className="space-y-6 sm:space-y-8 list-none m-0 p-0" aria-label="Work experience">
        {experienceRoles.map((role, i) => (
          <Reveal key={`${role.company}-${role.period}`} delay={i * 50}>
            <li>
              <article
                className="experience-card card-surface p-5 sm:p-6 md:p-7"
                itemScope
                itemType="https://schema.org/JobPosting"
              >
                <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-0 mb-3">
                  <h3
                    className="text-base sm:text-[17px] font-semibold text-heading tracking-tight"
                    itemProp="title"
                  >
                    {role.title}
                  </h3>
                  <span
                    className="text-brand dark:text-accent font-mono text-sm font-medium"
                    itemProp="hiringOrganization"
                  >
                    {role.company}
                  </span>
                  <span className="text-subtle text-xs sm:text-[13px] font-mono">
                    {role.period}
                    <span className="text-slate-400 dark:text-zinc-600 mx-1.5" aria-hidden>
                      ·
                    </span>
                    {role.location}
                  </span>
                </div>
                <p className="text-subtle text-sm leading-relaxed mb-4 max-w-3xl" itemProp="description">
                  {role.description}
                </p>
                <ul className="space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 pl-0.5">
                      <span className="text-brand/50 dark:text-accent/50 shrink-0 w-1.5 select-none" aria-hidden>
                        ·
                      </span>
                      <span className="min-w-0">{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
