import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'BreeInTech - System Reboot',
  description:
    'Full Stack Web + Mobile Developer | Building accessible, user friendly applications and digital tools',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Bree|Portfolio</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
