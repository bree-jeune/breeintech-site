'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
  const pathname = usePathname();
  const [glitched, setGlitched] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitched(true);
      setTimeout(() => setGlitched(false), 150);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Work' },
    { href: '/stories', label: 'Labs' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <Link href="/" className="brand">
        <span className={`brand-text ${glitched ? 'glitch' : ''}`}>
          bree<span className="brand-accent">.</span>
        </span>
      </Link>

      <button
        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
        type="button"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        aria-controls="nav-menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div
        id="nav-menu"
        className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
        role="menubar"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
            role="menuitem"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {mobileMenuOpen && (
        <div
          className="nav-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
