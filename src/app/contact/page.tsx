'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';

const EMAIL = 'abdulrehman.devops@gmail.com';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject || 'Portfolio contact')}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  }

  const inputBase =
    'w-full rounded-lg border border-border bg-surface-800/50 px-4 py-3 text-zinc-200 placeholder-zinc-500 outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20';

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-32" role="main">
        <div className="section-container">
          <div className="mx-auto max-w-2xl animate-fade-in-up">
            <h1 className="text-3xl font-semibold text-white mb-2 font-mono tracking-tight">
              Contact
            </h1>
            <p className="text-zinc-500 mb-10">
              Get in touch for senior DevOps, cloud architect, or AI infrastructure roles.
            </p>

            <div className="mb-12 rounded-xl border border-border/50 bg-surface-900/30 p-6 sm:p-8">
              <h2 className="text-lg font-medium text-white mb-6">Send a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. DevOps opportunity"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    className={`${inputBase} resize-y min-h-[120px]`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-4 py-3 font-medium text-surface-950 transition-all duration-200 hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-950"
                >
                  Open in email
                </button>
              </form>
              <p className="mt-4 text-xs text-zinc-500">
                Submitting opens your default email client with the message pre-filled to{' '}
                <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                  {EMAIL}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="mailto:abdulrehman.devops@gmail.com"
                className="text-accent hover:text-accent-muted transition-colors"
              >
                abdulrehman.devops@gmail.com
              </a>
              <a
                href="tel:+923039692131"
                className="text-accent hover:text-accent-muted transition-colors"
              >
                0303-9692131
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rehman-a197a32b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-muted transition-colors"
              >
                LinkedIn
              </a>
              <Link href="/" className="text-zinc-400 hover:text-accent transition-colors">
                ← Back home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
