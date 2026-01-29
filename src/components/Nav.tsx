'use client';

import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Infrastructure', href: '/#infrastructure' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-surface-950/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between sm:px-8" aria-label="Main">
        <Link
          href="/"
          className="text-white font-mono text-sm font-medium hover:text-accent transition-colors"
        >
          AR
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-4 sm:gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/#') ? (
                <a
                  href={item.href}
                  className="text-zinc-400 text-sm font-mono hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="text-zinc-400 text-sm font-mono hover:text-accent transition-colors"
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
