import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Abdul Rehman',
  description: 'Get in touch with Abdul Rehman for senior DevOps, cloud architect, and AI infrastructure roles.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
