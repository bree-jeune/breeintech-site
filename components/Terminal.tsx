'use client';

import { useState, useCallback } from 'react';
import Typewriter from './Typewriter';
import { ANIMATION } from '@/lib/constants';

export default function Terminal() {
  const [showContent, setShowContent] = useState(false);

  const handleTypewriterComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot terminal-dot--red" />
          <span className="terminal-dot terminal-dot--yellow" />
          <span className="terminal-dot terminal-dot--green" />
        </div>
        <span className="terminal-title">~/bree/init.sh</span>
        <div className="terminal-header-spacer" aria-hidden="true" />
      </div>

      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt">
            <Typewriter
              text="whoami"
              speed={ANIMATION.typewriterSpeed}
              onComplete={handleTypewriterComplete}
            />
          </span>
        </div>

        {showContent && (
          <div className="terminal-output terminal-output-content">
            <p className="terminal-output-title">
              Frontend Developer
            </p>
            <p className="terminal-output-description">
              I build practical software with attention to structure, clarity, and real-world use.
            </p>
            <div className="terminal-output-tags">
              <span className="tag">JavaScript</span>
              <span className="tag">React</span>
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Chrome Extensions</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
