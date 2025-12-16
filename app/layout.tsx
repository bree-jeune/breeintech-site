import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Bree — Developer',
  description: 'Full Stack Developer. I build thoughtful systems at the intersection of real-world pressure, technology, and care.',
  keywords: ['developer', 'full stack', 'web development', 'mobile development', 'React', 'Next.js'],
  authors: [{ name: 'Bree' }],
  openGraph: {
    title: 'Bree — Developer',
    description: 'Full Stack Developer. I build thoughtful systems at the intersection of real-world pressure, technology, and care.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
