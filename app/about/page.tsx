'use client'

import { useState } from 'react';
import type { Metadata } from 'next';

const NARRATIVES = {
  thinking: {
    title: 'How I Think',
    subtitle: 'Systems over hacks.',
    content: (
      <>
        <p>
          I view software not as a collection of features, but as a system of constraints and flows.
          My background in healthcare and education taught me that the most elegant solution is
          worthless if it fails under pressure or can't be maintained by the next person.
        </p>
        <p>
          I prioritize <strong>calm under pressure</strong>. Whether it's a production bug or a
          complex refactor, I lean into systems thinking: identifying the root cause,
          mapping the dependencies, and shipping incremental improvements.
        </p>
        <p>
          I believe in a <strong>bias toward shipping</strong>. Done is better than perfect,
          provided "done" includes a commitment to security and clarity.
        </p>
      </>
    ),
  },
  building: {
    title: 'How I Build',
    subtitle: 'Security first, always.',
    content: (
      <>
        <p>
          Construction is a deliberate act. I build with a <strong>security-first mindset</strong>,
          meaning I consider the attack surface before I write the first line of code.
          Architecture should be resilient by design, not by patch.
        </p>
        <p>
          I value <strong>clear architecture and clean code</strong>. I strive to make the
          implicit explicit. If a piece of logic is clever but opaque, it's a liability.
          I write code for humans first, and machines second.
        </p>
        <p>
          I'm an advocate for <strong>incremental progress</strong>. Continuous integration
          and deployment aren't just tools; they are the rhythmic heartbeat of a healthy project.
        </p>
      </>
    ),
  },
  future: {
    title: 'Where I’m Going',
    subtitle: 'Security-minded mastery.',
    content: (
      <>
        <p>
          My trajectory is focused on the intersection of <strong>full-stack engineering and
            web application security</strong>. I'm moving toward a state of mastery where
          technical depth meets real-world reliability.
        </p>
        <p>
          In the long term, I aim to lead projects where the stakes are high and the
          engineering must be airtight. I'm building a career that favors
          <strong>substance over hype</strong> and long-term durability over temporary trends.
        </p>
      </>
    ),
  },
  learning: {
    title: 'What I’m Learning Now',
    subtitle: 'Phase 1: Secure Foundations.',
    content: (
      <>
        <p>
          Currently executing Phase 1 of a structured 6-month learning plan.
          I'm deepening my understanding of <strong>secure authentication patterns</strong>
          and building robust error-handling middleware.
        </p>
        <p>
          Every Friday is for <strong>Exploitation Laboratory</strong>: getting hands-on with
          the OWASP Top 10 to understand exactly how systems break, so I can build
          them stronger.
        </p>
        <p>
          <em>Last synced with Roadmap: Jan 2026</em>
        </p>
      </>
    ),
  },
};

export default function AboutPage() {
  const [activeRegion, setActiveRegion] = useState<keyof typeof NARRATIVES | null>(null);

  return (
    <main id="main-content" className="about-interactive">
      <section className="about-canvas">
        <div className="canvas-grid">
          {(Object.entries(NARRATIVES) as [keyof typeof NARRATIVES, typeof NARRATIVES.thinking][]).map(([key, data]) => (
            <button
              key={key}
              className={`canvas-region ${activeRegion === key ? 'is-active' : ''}`}
              onClick={() => setActiveRegion(activeRegion === key ? null : key)}
            >
              <div className="region-header">
                <span className="region-indicator" />
                <h2 className="region-title">{data.title}</h2>
                <p className="region-subtitle">{data.subtitle}</p>
              </div>

              <div className="region-content">
                <div className="content-inner">
                  {data.content}
                </div>
              </div>

              <div className="region-footer">
                <span className="region-action">{activeRegion === key ? 'Close' : 'Explore'}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="about-philosophy">
        <p className="philosophy-text">
          I build software that works <strong>under pressure</strong>.
        </p>
      </section>
    </main>
  );
}
