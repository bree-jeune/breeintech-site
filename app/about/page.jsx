import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  const skills = {
    frontend: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'REST APIs'],
    tools: ['Git', 'Figma', 'Xcode', 'VS Code'],
  };

  return (
    <>
      <Navigation />

      <main>
        <section className="section about-hero">
          <div className="about-intro">
            <h1>About</h1>
            <p className="about-lead">
              Full stack developer with a background in emergency medicine. I build thoughtful
              systems that work under pressure.
            </p>
          </div>
        </section>

        <section className="section about-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>Background</h2>
              <p>
                Before code, I spent years as a paramedic. I know what it's like to build systems
                that need to work when it matters—and what happens when they don't.
              </p>
              <p>
                That experience shapes how I approach software: clear thinking, reliable execution,
                and always considering the person on the other end.
              </p>

              <h2>Approach</h2>
              <p>
                I care about outcomes, not vibes. I explain complex things simply but never dumb them down.
                I'd rather ship something useful than polish something perfect.
              </p>
              <p>
                Current focus: React Native mobile development and building tools for people whose
                brains work differently.
              </p>
            </div>

            <div className="about-sidebar">
              <div className="skills-block">
                <h3>Stack</h3>
                <div className="skills-section">
                  <span className="skills-label">Frontend</span>
                  <div className="skills-tags">
                    {skills.frontend.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="skills-section">
                  <span className="skills-label">Backend</span>
                  <div className="skills-tags">
                    {skills.backend.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="skills-section">
                  <span className="skills-label">Tools</span>
                  <div className="skills-tags">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="connect-block">
                <h3>Connect</h3>
                <div className="connect-links">
                  <Link href="https://github.com/bree-jeune" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                  <Link href="https://www.linkedin.com/in/ebonne-young/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                  <Link href="https://twitter.com/BreeInTech" target="_blank" rel="noopener noreferrer">
                    X / Twitter
                  </Link>
                  <Link href="https://instagram.com/BreeInTech" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </Link>
                  <Link href="mailto:connect@breeintech.com">
                    Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
