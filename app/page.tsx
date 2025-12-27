'use client';

import Navigation from '@/components/Navigation';
import Terminal from '@/components/Terminal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-label label">Frontend Developer</p>
            <h1 className="hero-title">
              I build software that works<br />
              <span className="text-accent">under pressure.</span>
            </h1>
            <p className="hero-description">
              Less noise. More signal. Practical code for real-world problems.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="btn btn--primary">
                View Work
              </Link>
              <Link href="/contact" className="btn">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="hero-terminal">
            <Terminal />
          </div>
        </section>

        {/* Brief intro section */}
        <section className="section intro-section">
          <div className="intro-grid">
            <div className="intro-block">
              <h3 className="intro-title">What I Do</h3>
              <p className="intro-text">
                Frontend web development. I care about outcomes, not vibes.
                Every project starts with understanding the real problem.
              </p>
            </div>
            <div className="intro-block">
              <h3 className="intro-title">How I Work</h3>
              <p className="intro-text">
                Clean architecture. Clear communication. I explain complex things simply,
                but never dumb them down.
              </p>
            </div>
            <div className="intro-block">
              <h3 className="intro-title">Background</h3>
              <p className="intro-text">
                Experience in healthcare, education, and systems design. I know what it means
                to build things that need to work when it matters.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
