import SocialIcons from '@/components/SocialIcons';
import { SKILLS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Full Stack developer who builds practical software with attention to structure, clarity, and real-world use.',
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="section about-hero">
        <div className="about-intro">
          <h1>About Me</h1>
          <p className="about-lead">
            Full Stack developer who builds practical software with attention to structure,
            clarity, and real-world use.
          </p>
        </div>
      </section>

      <section className="section about-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>Background</h2>
            <p>
              I bring experience from healthcare, education, and systems design, which informs
              how I write and reason about code. I'm comfortable working through ambiguity,
              improving existing systems, and shipping incrementally instead of chasing perfection.
            </p>
            <p>
              I've built and deployed Chrome extensions, responsive web applications, and
              component-based interfaces using JavaScript, React, HTML, and CSS.
            </p>

            <h2>Strengths</h2>
            <p>
              My strengths include breaking down complex problems, writing clean and maintainable
              code, and translating requirements into working features. I value teams that
              prioritize thoughtful engineering, technical documentation, and steady progress.
            </p>

            <h2>Looking For</h2>
            <p>
              I'm looking for a full stack developer role where I can contribute immediately,
              collaborate with experienced engineers, and continue growing as a developer.
            </p>
          </div>

          <div className="about-sidebar">
            <div className="skills-block">
              <h3>Stack</h3>
              <div className="skills-section">
                <span className="skills-label">Frontend</span>
                <div className="skills-tags">
                  {SKILLS.frontend.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skills-section">
                <span className="skills-label">Backend</span>
                <div className="skills-tags">
                  {SKILLS.backend.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skills-section">
                <span className="skills-label">Tools</span>
                <div className="skills-tags">
                  {SKILLS.tools.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="connect-block">
              <h3>Connect</h3>
              <SocialIcons showLabels />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
