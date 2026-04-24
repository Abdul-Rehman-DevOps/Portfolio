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

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-32" role="main">
        <div className="section-container">
          <div className="mx-auto max-w-2xl animate-fade-in-up">
            <h1 className="font-display text-3xl font-semibold text-heading mb-2 tracking-tight">Contact</h1>
            <p className="text-subtle mb-10 text-pretty max-w-prose leading-relaxed">
              DevSecOps, cloud, and platform engineering. Open to senior IC and lead roles; remote or hybrid where
              it fits.
            </p>

            <div className="mb-12 card-surface p-6 sm:p-8">
              <h2 className="text-lg font-medium text-heading mb-6">Send a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-subtle">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-subtle">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-subtle">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. DevOps opportunity"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-subtle">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    className="form-input resize-y min-h-[120px]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand dark:bg-accent px-4 py-3 font-medium text-white dark:text-canvas transition-colors duration-200 hover:bg-brand/90 dark:hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-accent/40 dark:focus:ring-offset-canvas"
                >
                  Open in email
                </button>
              </form>
              <p className="mt-4 text-xs text-subtle">
                Submitting opens your default email client with the message pre-filled to{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-brand hover:underline dark:text-accent dark:hover:text-accent-muted"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="mailto:abdulrehman.devops@gmail.com"
                className="text-brand dark:text-accent hover:text-brand/80 dark:hover:text-accent-muted transition-colors"
              >
                abdulrehman.devops@gmail.com
              </a>
              <a
                href="tel:+923039692131"
                className="text-brand dark:text-accent hover:text-brand/80 dark:hover:text-accent-muted transition-colors"
              >
                0303-9692131
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rehman-a197a32b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand dark:text-accent hover:text-brand/80 dark:hover:text-accent-muted transition-colors"
              >
                LinkedIn
              </a>
              <Link href="/" className="text-subtle hover:text-slate-900 dark:hover:text-zinc-200 transition-colors">
                ← Back home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
