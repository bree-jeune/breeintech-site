import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://breeintech.com'),
  title: {
    default: 'Bree — Full Stack Developer',
    template: '%s — Bree',
  },
  description: 'Full Stack Developer. I build practical software with attention to structure, clarity, and real-world use.',
  keywords: ['full stack developer', 'web development', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'Chrome Extensions'],
  authors: [{ name: 'Bree', url: 'https://breeintech.com' }],
  creator: 'Bree',
  openGraph: {
    title: 'Bree — Full Stack Developer',
    description: 'Full Stack Developer. I build practical software with attention to structure, clarity, and real-world use.',
    url: 'https://breeintech.com',
    siteName: 'Bree',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bree — Full Stack Developer',
    description: 'Full Stack Developer. I build practical software with attention to structure, clarity, and real-world use.',
    creator: '@BreeInTech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
