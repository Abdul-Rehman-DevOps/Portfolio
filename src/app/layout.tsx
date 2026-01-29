import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

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
    >
      <body className="min-h-screen font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
