'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS, ANIMATION } from '@/lib/constants';
import './Navigation.css';

export default function Navigation() {
  const pathname = usePathname();
  const [glitched, setGlitched] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitched(true);
      setTimeout(() => setGlitched(false), ANIMATION.glitchDuration);
    }, ANIMATION.glitchInterval);

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

  const isActive = useCallback((path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

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
        onClick={toggleMenu}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <div
        id="nav-menu"
        className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
        role="menubar"
      >
        {NAV_LINKS.map((link) => {
          // Check if it has children
          if ('children' in link && link.children) {
            return (
              <div key={link.href} className="nav-item-dropdown-wrapper">
                <Link
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                  role="menuitem"
                  onClick={closeMenu}
                >
                  {link.label}
                  <span className="dropdown-arrow">▾</span>
                </Link>
                <div className="nav-dropdown">
                  {link.children.map((child: { href: string; label: string }) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`nav-dropdown-item ${isActive(child.href) ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
              role="menuitem"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {mobileMenuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
