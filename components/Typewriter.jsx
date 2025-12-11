'use client';

import { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 60 }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
}
