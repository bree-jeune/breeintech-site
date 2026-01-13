import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile | Bree',
  description: 'Multi-disciplinary technologist building at the intersection of software engineering, cybersecurity, and public knowledge sharing.',
}

// Current tech stack badges
const techStack = [
  { name: 'TypeScript', color: 'accent' },
  { name: 'React', color: 'accent' },
  { name: 'Next.js', color: 'accent' },
  { name: 'Node.js', color: 'accent' },
  { name: 'Python', color: 'accent' },
  { name: 'Tailwind CSS', color: 'accent' },
]

import GitHubHeatmap from '@/components/GitHubHeatmap';

// Current work items
const currentWork = [
  {
    title: 'Security-Focused Web Development',
    description: 'Building web applications with security best practices baked in from the start, not bolted on after.',
    links: [
      { label: 'Projects', url: '/projects' },
    ],
  },
  {
    title: 'Learning in Public',
    description: 'Documenting my journey through cybersecurity fundamentals and advanced software patterns through writing and building.',
    links: [
      { label: 'Labs', url: '/stories' },
      { label: 'Roadmap', url: '/roadmap' },
    ],
  },
]

// Skills organized by domain
const skillDomains = [
  {
    domain: 'Software Engineering',
    skills: [
      'JavaScript / TypeScript',
      'React & Next.js',
      'Node.js & Express',
      'REST API Design',
      'Database Design (PostgreSQL, MongoDB)',
      'Git & Version Control',
      'Testing (Jest, Playwright)',
      'Chrome Extension Development',
    ],
  },
  {
    domain: 'Cybersecurity',
    skills: [
      'Network Security Fundamentals',
      'OWASP Top 10 Awareness',
      'Secure Code Review',
      'Linux Administration',
      'CTF Problem Solving',
      'Threat Modeling Basics',
      'Security Tools (Burp Suite, Wireshark)',
    ],
  },
  {
    domain: 'Tooling & Systems',
    skills: [
      'VS Code & Dev Environment',
      'Terminal & Shell Scripting',
      'Figma & Design Systems',
      'CI/CD Basics',
      'Docker Fundamentals',
      'Technical Writing',
      'Documentation',
    ],
  },
]

// Featured projects
const projects = [
  {
    name: 'Orbit Web',
    description: 'A productivity dashboard that helps users track habits, goals, and daily progress with clean visualizations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    outcome: 'Personal productivity tool used daily',
    url: '/projects',
  },
  {
    name: 'Orbit Extension',
    description: 'Chrome extension companion to Orbit Web for quick captures and tab management.',
    tech: ['JavaScript', 'Chrome APIs', 'HTML/CSS'],
    outcome: 'Browser extension with 50+ installs',
    url: '/projects',
  },
  {
    name: 'NeuroNibble',
    description: 'Educational platform concept for bite-sized learning modules with gamification elements.',
    tech: ['React', 'Node.js', 'MongoDB'],
    outcome: 'Prototype completed',
    url: '/projects',
  },
]

// Learning goals for next 90 days
const learningGoals = [
  'Complete web application security fundamentals',
  'Build and deploy a full-stack app with authentication',
  'Contribute to an open source security tool',
  'Write 4 technical blog posts',
]

// Recent milestones
const recentMilestones = [
  { title: 'Portfolio Site v2 Launched', status: 'completed' },
  { title: 'Technical Blog Setup', status: 'completed' },
  { title: 'CTF Challenge Participation', status: 'in_progress' },
]

export default function ProfilePage() {
  return (
    <main className="profile-page">
      {/* Header Section - GitHub Style */}
      <header className="profile-header">
        <div className="profile-header__avatar">
          <span className="profile-header__avatar-placeholder">B</span>
        </div>
        <div className="profile-header__info">
          <h1 className="profile-header__name">Bree</h1>
          <p className="profile-header__title">
            Full Stack Developer
          </p>
          <p className="profile-header__focus">
            Security-minded, systems-driven. Learning in public means documenting the hard parts:
            the architecture decisions, security tradeoffs, and lessons learned.
          </p>
          <div className="profile-header__badges">
            {techStack.map((tech) => (
              <span key={tech.name} className="profile-badge">
                {tech.name}
              </span>
            ))}
          </div>
        </div>


      </header>

      {/* Current Work Section */}
      <section className="profile-section">
        <h2 className="profile-section__title">
          <span className="profile-section__icon">🔨</span>
          Current Work
        </h2>
        <div className="profile-work-grid">
          {currentWork.map((work) => (
            <div key={work.title} className="profile-work-card">
              <h3 className="profile-work-card__title">{work.title}</h3>
              <p className="profile-work-card__description">{work.description}</p>
              <div className="profile-work-card__links">
                {work.links.map((link) => (
                  <a key={link.label} href={link.url} className="profile-work-card__link">
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="profile-section">
        <h2 className="profile-section__title">
          <span className="profile-section__icon">🛠️</span>
          Skills
        </h2>
        <div className="profile-skills-grid">
          {skillDomains.map((domain) => (
            <div key={domain.domain} className="profile-skills-domain">
              <h3 className="profile-skills-domain__title">{domain.domain}</h3>
              <ul className="profile-skills-domain__list">
                {domain.skills.map((skill) => (
                  <li key={skill} className="profile-skills-domain__item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="profile-section">
        <h2 className="profile-section__title">
          <span className="profile-section__icon">📦</span>
          Projects
        </h2>
        <div className="profile-projects-list">
          {projects.map((project) => (
            <div key={project.name} className="profile-project">
              <div className="profile-project__header">
                <h3 className="profile-project__name">{project.name}</h3>
                <a href={project.url} className="profile-project__link">
                  View →
                </a>
              </div>
              <p className="profile-project__description">{project.description}</p>
              <div className="profile-project__meta">
                <div className="profile-project__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <span className="profile-project__outcome">{project.outcome}</span>
              </div>
            </div>
          ))}
        </div>
        <a href="/projects" className="profile-section__more">
          View all projects →
        </a>
      </section>

      {/* Learning in Public Section */}
      <section className="profile-section">
        <h2 className="profile-section__title">
          <span className="profile-section__icon">📚</span>
          Learning in Public
        </h2>

        <div className="profile-learning-grid">
          <div className="profile-learning-block">
            <h3 className="profile-learning-block__title">Next 90 Days</h3>
            <ul className="profile-learning-block__list">
              {learningGoals.map((goal, index) => (
                <li key={index} className="profile-learning-block__item">
                  <span className="profile-learning-block__bullet">○</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className="profile-learning-block">
            <h3 className="profile-learning-block__title">Recent Milestones</h3>
            <ul className="profile-learning-block__list">
              {recentMilestones.map((milestone) => (
                <li key={milestone.title} className="profile-learning-block__item">
                  <span className={`profile-learning-block__status profile-learning-block__status--${milestone.status}`}>
                    {milestone.status === 'completed' ? '✓' : '◐'}
                  </span>
                  {milestone.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href="/roadmap" className="profile-roadmap-link">
          <span className="profile-roadmap-link__icon">🗺️</span>
          <span className="profile-roadmap-link__text">
            <strong>View Full Roadmap</strong>
            <span>See all milestones and progress across disciplines</span>
          </span>
          <span className="profile-roadmap-link__arrow">→</span>
        </a>
      </section>

      {/* GitHub Activity */}
      <section className="profile-section">
        <h2 className="profile-section__title">
          <span className="profile-section__icon">📊</span>
          Contributions
        </h2>
        <GitHubHeatmap />
      </section>

      {/* Footer CTA */}
      <section className="profile-cta">
        <p className="profile-cta__text">
          Want to connect or collaborate?
        </p>
        <a href="/contact" className="btn btn--primary">
          Get in Touch
        </a>
      </section>

    </main >
  )
}
