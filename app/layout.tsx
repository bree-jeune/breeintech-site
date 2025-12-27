import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://breeintech.com'),
  title: {
    default: 'Bree — Frontend Developer',
    template: '%s — Bree',
  },
  description: 'Frontend Developer. I build practical software with attention to structure, clarity, and real-world use.',
  keywords: ['frontend developer', 'web development', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'Chrome Extensions'],
  authors: [{ name: 'Bree', url: 'https://breeintech.com' }],
  creator: 'Bree',
  openGraph: {
    title: 'Bree — Frontend Developer',
    description: 'Frontend Developer. I build practical software with attention to structure, clarity, and real-world use.',
    url: 'https://breeintech.com',
    siteName: 'Bree',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bree — Frontend Developer',
    description: 'Frontend Developer. I build practical software with attention to structure, clarity, and real-world use.',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
