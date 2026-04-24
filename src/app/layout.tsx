import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter, JetBrains_Mono, Sora } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';
import CursorFollower from '@/components/CursorFollower';
import BlockchainBackground from '@/components/BlockchainBackground';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B0F19',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abdulrehman.dev'),
  icons: {
    icon: '/profile.png',
    shortcut: '/profile.png',
    apple: '/profile.png',
  },
  title: {
    default: 'Abdul Rehman | DevSecOps & Cloud Engineer',
    template: '%s | Abdul Rehman',
  },
  description:
    'DevSecOps and cloud engineer: multi-cloud infrastructure, secure CI/CD, Kubernetes, GitOps, AI/Web3-adjacent platforms. AWS, Azure, EKS, AKS.',
  keywords: [
    'DevSecOps',
    'DevOps',
    'Cloud Engineer',
    'Kubernetes',
    'AWS',
    'Azure',
    'CI/CD',
    'Infrastructure',
    'Web3',
    'MLOps',
  ],
  authors: [{ name: 'Abdul Rehman', url: 'https://www.linkedin.com/in/abdul-rehman-a197a32b5/' }],
  openGraph: {
    title: 'Abdul Rehman | DevSecOps & Cloud Engineer',
    description:
      'Multi-cloud platforms, Kubernetes, secure delivery, and automation. Building reliable systems at ChainGPT and Funavry.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Rehman | DevSecOps & Cloud Engineer',
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t!=='light');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
      style={{ width: '100%' }}
    >
      <body style={{ width: '100%', minWidth: 0 }} className="relative">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <BlockchainBackground />
          <div
            className="relative z-10 min-w-0 w-full"
            style={{ maxWidth: '100vw', overflowX: 'hidden' }}
          >
            {children}
          </div>
          <WhatsAppButton />
          <CursorFollower />
        </ThemeProvider>
      </body>
    </html>
  );
}
