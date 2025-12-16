'use client';

import { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 50, onComplete }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    let index = 0;

    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className="typewriter">
      {displayText}
      {!isComplete && <span className="terminal-cursor" aria-hidden="true" />}
    </span>
  );
}
