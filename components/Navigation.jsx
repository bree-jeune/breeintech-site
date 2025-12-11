'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav
      style={{
        padding: '16px 24px',
        borderBottom: '1px solid #1F2933',
        background: '#020617',
        color: '#E2E8F0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ fontWeight: 'bold' }}>Bree_In_Tech</div>
      <div style={{ display: 'flex', gap: '16px', fontSize: '0.95rem' }}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/stories">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
