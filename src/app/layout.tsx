import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skapa Design System - Audit IA de Design System',
  description: 'AI-powered design system audit and management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="fr" className="dark">
        <body className="bg-dark text-white antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
