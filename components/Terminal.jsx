'use client';

import Typewriter from './Typewriter';

export default function Terminal() {
  return (
    <section
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #333',
        background: '#050816',
        color: '#E2E8F0',
        fontFamily: 'monospace',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
          fontSize: '14px',
          color: '#9CA3AF',
        }}
      >
        <span>~/bree_in_tech/system_reboot</span>
        <span>zsh • node v20.x</span>
      </header>

      <div style={{ marginBottom: '16px' }}>
        <Typewriter text="System Reboot Initialized...Paramedic → Full Stack Developer" speed={40} />
      </div>

      <p style={{ marginBottom: '8px' }}>
        I build accessible, user-friendly applications and digital tools that feel like a system upgrade—not a
        patch.
      </p>

      <p style={{ fontSize: '14px', color: '#9CA3AF' }}>
        Full Stack Web + Mobile Developer • React • React Native • Next.js
      </p>
    </section>
  );
}
