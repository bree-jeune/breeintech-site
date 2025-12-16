'use client';

import { useState } from 'react';
import Typewriter from './Typewriter';

export default function Terminal() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot terminal-dot--red" />
          <span className="terminal-dot terminal-dot--yellow" />
          <span className="terminal-dot terminal-dot--green" />
        </div>
        <span className="terminal-title">~/bree/init.sh</span>
        <div style={{ width: '52px' }} />
      </div>

      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt">
            <Typewriter
              text="whoami"
              speed={80}
              onComplete={() => setShowContent(true)}
            />
          </span>
        </div>

        {showContent && (
          <div className="terminal-output" style={{ marginTop: 'var(--space-md)' }}>
            <p style={{ color: 'var(--color-text)', marginBottom: 'var(--space-sm)' }}>
              Full Stack Developer
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)', fontSize: '0.9375rem' }}>
              I build thoughtful systems at the intersection of real-world pressure, technology, and care.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <span className="tag">React</span>
              <span className="tag">Next.js</span>
              <span className="tag">React Native</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Node.js</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
