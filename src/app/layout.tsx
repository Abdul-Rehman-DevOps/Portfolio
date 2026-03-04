import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';
import CursorFollower from '@/components/CursorFollower';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abdulrehman.dev'),
  icons: {
    icon: '/profile.png',
    shortcut: '/profile.png',
    apple: '/profile.png',
  },
  title: 'Abdul Rehman | DevOps & Cloud Engineer',
  description:
    'DevOps and Cloud Engineer specializing in multi-cloud infrastructure, CI/CD, Kubernetes, AI/ML deployment, and secure, scalable systems. AWS, Azure, EKS, AKS.',
  keywords: [
    'DevOps',
    'Cloud Engineer',
    'Kubernetes',
    'AWS',
    'Azure',
    'CI/CD',
    'Infrastructure',
    'DevSecOps',
    'MLOps',
  ],
  authors: [{ name: 'Abdul Rehman', url: 'https://www.linkedin.com/in/abdul-rehman-a197a32b5/' }],
  openGraph: {
    title: 'Abdul Rehman | DevOps & Cloud Engineer',
    description:
      'DevOps and Cloud Engineer. Multi-cloud, Kubernetes, CI/CD, AI infrastructure. Building reliable systems.',
    type: 'website',
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Rehman | DevOps & Cloud Engineer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      style={{ width: '100%' }}
    >
      <body className="min-h-screen font-sans w-full overflow-x-hidden relative" style={{ width: '100%', minWidth: 0 }}>
        {/* Full-page blockchain background — blockchain.avif in public/ */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage: 'url("/blockchain.avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.4,
          }}
        />
        <div className="fixed inset-0 z-0 pointer-events-none bg-surface-950/55" aria-hidden />
        <div className="relative z-10" style={{ width: '100%', minWidth: 0, maxWidth: '100vw', overflowX: 'hidden' }}>
          {children}
        </div>
        <WhatsAppButton />
        <CursorFollower />
      </body>
    </html>
  );
}
