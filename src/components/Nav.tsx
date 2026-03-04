'use client';

import Link from 'next/link';

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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-surface-950/80 backdrop-blur-sm min-w-0">
      <nav className="mx-auto max-w-4xl w-full px-4 py-4 flex flex-wrap items-center justify-between gap-4 sm:px-6 md:px-8" aria-label="Main">
        <Link
          href="/"
          className="text-white font-mono text-sm font-medium hover:text-accent transition-colors"
        >
          AR
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-3 sm:gap-5 min-w-0 shrink">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/#') ? (
                <a
                  href={item.href}
                  className="link-underline text-zinc-400 text-sm font-mono hover:text-accent transition-colors py-1"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="link-underline text-zinc-400 text-sm font-mono hover:text-accent transition-colors py-1"
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
