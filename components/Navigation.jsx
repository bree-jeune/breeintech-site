'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import './Navigation.css';


export default function Navigation() {
  const pathname = usePathname();
  const [glitched, setGlitched] = useState(false);
  const [promptGlitch, setPromptGlitch] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitched((prev) => !prev);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleMouseEnter = () => {
    setPromptGlitch(true);
    setTimeout(() => setPromptGlitch(false), 300);
  };

  const handleMouseLeave = () => {
    setPromptGlitch(false);
  };

  const isActive = (path) => (pathname === path ? 'active' : '');

  const brandText = glitched ? '> BR33|NTECH' : 'BREE_IN_TECH';
  const promptText = promptGlitch ? '>> ' : '> ';




  return (
    <nav className="navigation">
      <div
        className="brand-logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={`prompt ${promptGlitch ? 'glitch-flash' : ''}`}>
          {promptText}
        </span>
        <span className={`brand-text ${glitched ? 'glitched' : ''}`}>
          {brandText}
        </span>
      </div>

      <button
        className="hamburger"
        type="button"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <div className="nav-links">
        <Link href="/" className={isActive('/')}>
          /~
        </Link>
        <Link href="/projects" className={isActive('/projects')}>
          /Projects
        </Link>
        <Link href="/stories" className={isActive('/stories')}>
          /BLOG
        </Link>
        <Link href="/contact" className={isActive('/contact')}>
          /CONTACT
        </Link>
        <Link href="/about" className={isActive('/about')}>
          /ABOUT
        </Link>
      </div>
    </nav>
  );
}
