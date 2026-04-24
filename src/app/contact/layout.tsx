import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Abdul Rehman for senior DevSecOps, cloud, and platform engineering roles. ChainGPT, Funavry, and consulting.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
