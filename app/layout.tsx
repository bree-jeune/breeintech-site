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
      <body>{children}</body>
    </html>
  );
}
