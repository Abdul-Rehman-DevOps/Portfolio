'use client';

import Link from 'next/link';
import { resume } from '@/lib/site';

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Focus', href: '/#rating' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Infrastructure', href: '/#infrastructure' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass min-w-0">
      <nav
        className="mx-auto max-w-4xl w-full px-4 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-4 sm:px-6 md:px-8"
        aria-label="Main"
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Link
            href="/"
            className="text-heading font-mono text-sm font-medium tracking-tight hover:text-brand dark:hover:text-accent transition-colors duration-200"
          >
            AR
          </Link>
        </div>
        <ul className="flex flex-wrap items-center justify-end gap-x-2.5 gap-y-2 sm:gap-x-3.5 min-w-0 shrink">
          <li>
            <a
              href={resume.href}
              download={resume.downloadName}
              className="link-underline text-subtle text-[13px] sm:text-sm font-mono hover:text-slate-900 dark:hover:text-zinc-200 transition-colors py-1"
            >
              Resume
            </a>
          </li>
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/#') ? (
                <a
                  href={item.href}
                  className="link-underline text-subtle text-[13px] sm:text-sm font-mono hover:text-slate-900 dark:hover:text-zinc-200 transition-colors py-1"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="link-underline text-subtle text-[13px] sm:text-sm font-mono hover:text-slate-900 dark:hover:text-zinc-200 transition-colors py-1"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
