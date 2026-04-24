import type { ReactNode } from 'react';

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  className?: string;
};

/**
 * Section title scale: Sora (display) for titles, mono for eyebrow, muted lead.
 */
export default function SectionHeader({ id, eyebrow, title, lead, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-[11px] sm:text-xs font-mono font-medium uppercase tracking-[0.18em] text-subtle mb-2">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-2xl sm:text-3xl font-semibold text-heading tracking-tight text-balance"
      >
        {title}
      </h2>
      {lead && (
        <p className="text-sm text-subtle mt-3 max-w-2xl leading-relaxed text-pretty">{lead}</p>
      )}
    </div>
  );
}
