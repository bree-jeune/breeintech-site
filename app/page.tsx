'use client';

import Terminal from '@/components/Terminal';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label label">Full Stack Developer</p>
          <h1 className="hero-title">
            I build software that works<br />
            <span className="text-accent">under pressure.</span>
          </h1>
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
              Practical software development with a focus on security & systems thinking.
              I build tools that solve real problems.
            </p>
          </div>
          <div className="intro-block">
            <h3 className="intro-title">How I Work</h3>
            <p className="intro-text">
              Clean architecture. Clear communication. I explain complex things simply,
              and document decisions as they happen.
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
  );
}
