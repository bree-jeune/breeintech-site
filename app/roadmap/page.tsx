'use client'

import { useState } from 'react'

// Milestone data for each lane
const roadmapData = {
  softwareEngineering: {
    id: 'software',
    title: 'Software Engineering',
    icon: '⚙️',
    milestones: [
      {
        id: 'se-1',
        title: 'Portfolio Site v2',
        status: 'completed',
        description: 'Rebuilt personal portfolio with Next.js 16, TypeScript, and a custom design system.',
        tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        proof: { label: 'Live Site', url: 'https://breeintech.com' },
      },
      {
        id: 'se-2',
        title: 'Orbit Chrome Extension',
        status: 'completed',
        description: 'Built a browser extension for productivity tracking and tab management.',
        tools: ['JavaScript', 'Chrome APIs', 'HTML/CSS'],
        proof: { label: 'GitHub', url: 'https://github.com/bree-jeune' },
      },
      {
        id: 'se-3',
        title: 'Full-Stack App Architecture',
        status: 'in_progress',
        description: 'Deepening knowledge of backend patterns, API design, and database optimization.',
        tools: ['Node.js', 'PostgreSQL', 'REST APIs'],
        proof: null,
      },
      {
        id: 'se-4',
        title: 'CI/CD Pipeline Mastery',
        status: 'locked',
        description: 'Setting up automated testing, deployment pipelines, and infrastructure as code.',
        tools: ['GitHub Actions', 'Docker', 'AWS'],
        proof: null,
      },
      {
        id: 'se-5',
        title: 'Open Source Contribution',
        status: 'locked',
        description: 'Contributing meaningful PRs to established open source projects.',
        tools: ['Git', 'Code Review', 'Documentation'],
        proof: null,
      },
    ],
  },
  cybersecurity: {
    id: 'security',
    title: 'Cybersecurity',
    icon: '🛡️',
    milestones: [
      {
        id: 'cs-1',
        title: 'Security Fundamentals',
        status: 'completed',
        description: 'Completed foundational training in network security, encryption, and threat modeling.',
        tools: ['CompTIA Security+', 'Wireshark', 'Linux'],
        proof: { label: 'Certificate', url: '#' },
      },
      {
        id: 'cs-2',
        title: 'CTF Challenges',
        status: 'in_progress',
        description: 'Actively participating in Capture The Flag competitions to sharpen practical skills.',
        tools: ['Burp Suite', 'Kali Linux', 'Python'],
        proof: { label: 'Write-ups', url: '#' },
      },
      {
        id: 'cs-3',
        title: 'Web App Security',
        status: 'in_progress',
        description: 'Learning OWASP Top 10 vulnerabilities and secure coding practices.',
        tools: ['OWASP ZAP', 'SQLMap', 'Secure Code Review'],
        proof: null,
      },
      {
        id: 'cs-4',
        title: 'Penetration Testing',
        status: 'locked',
        description: 'Developing skills in ethical hacking and vulnerability assessment.',
        tools: ['Metasploit', 'Nmap', 'Reporting'],
        proof: null,
      },
      {
        id: 'cs-5',
        title: 'Security Certification',
        status: 'locked',
        description: 'Pursuing advanced security certification to validate expertise.',
        tools: ['CEH', 'OSCP', 'Practical Labs'],
        proof: null,
      },
    ],
  },
  writing: {
    id: 'writing',
    title: 'Writing & Knowledge Sharing',
    icon: '✍️',
    milestones: [
      {
        id: 'wr-1',
        title: 'Technical Blog Launch',
        status: 'completed',
        description: 'Launched a blog to document learning journeys and technical discoveries.',
        tools: ['MDX', 'Next.js', 'Markdown'],
        proof: { label: 'Labs', url: '/stories' },
      },
      {
        id: 'wr-2',
        title: 'Project Documentation',
        status: 'completed',
        description: 'Writing clear READMEs and documentation for all public projects.',
        tools: ['Markdown', 'Diagrams', 'GitHub'],
        proof: { label: 'GitHub', url: 'https://github.com/bree-jeune' },
      },
      {
        id: 'wr-3',
        title: 'Tutorial Series',
        status: 'in_progress',
        description: 'Creating step-by-step tutorials on topics I\'ve mastered.',
        tools: ['Technical Writing', 'Code Examples', 'Diagrams'],
        proof: null,
      },
      {
        id: 'wr-4',
        title: 'Community Engagement',
        status: 'locked',
        description: 'Sharing knowledge through talks, threads, or community contributions.',
        tools: ['Twitter/X', 'Dev.to', 'Conferences'],
        proof: null,
      },
      {
        id: 'wr-5',
        title: 'Published Guide',
        status: 'locked',
        description: 'Publishing a comprehensive guide or resource for other builders.',
        tools: ['Long-form Writing', 'Research', 'Editing'],
        proof: null,
      },
    ],
  },
}

type MilestoneStatus = 'completed' | 'in_progress' | 'locked'

interface Milestone {
  id: string
  title: string
  status: MilestoneStatus
  description: string
  tools: string[]
  proof: { label: string; url: string } | null
}

interface Lane {
  id: string
  title: string
  icon: string
  milestones: Milestone[]
}

function StatusBadge({ status }: { status: MilestoneStatus }) {
  const config = {
    completed: { label: 'Completed', className: 'roadmap-badge--completed' },
    in_progress: { label: 'In Progress', className: 'roadmap-badge--progress' },
    locked: { label: 'Locked', className: 'roadmap-badge--locked' },
  }

  const { label, className } = config[status]

  return <span className={`roadmap-badge ${className}`}>{label}</span>
}

function MilestoneNode({
  milestone,
  isActive,
  onClick,
}: {
  milestone: Milestone
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      className={`roadmap-node roadmap-node--${milestone.status} ${isActive ? 'roadmap-node--active' : ''}`}
      onClick={onClick}
      aria-expanded={isActive}
      aria-label={`${milestone.title} - ${milestone.status}`}
    >
      <span className="roadmap-node__indicator" />
      <span className="roadmap-node__title">{milestone.title}</span>
    </button>
  )
}

function MilestoneDetail({ milestone }: { milestone: Milestone }) {
  return (
    <div className="roadmap-detail">
      <div className="roadmap-detail__header">
        <h3 className="roadmap-detail__title">{milestone.title}</h3>
        <StatusBadge status={milestone.status} />
      </div>
      <p className="roadmap-detail__description">{milestone.description}</p>
      <div className="roadmap-detail__tools">
        <span className="roadmap-detail__label">Tools & Technologies</span>
        <div className="roadmap-detail__tags">
          {milestone.tools.map((tool) => (
            <span key={tool} className="tag">
              {tool}
            </span>
          ))}
        </div>
      </div>
      {milestone.proof && (
        <a
          href={milestone.proof.url}
          className="roadmap-detail__proof"
          target={milestone.proof.url.startsWith('http') ? '_blank' : undefined}
          rel={milestone.proof.url.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          View {milestone.proof.label} →
        </a>
      )}
    </div>
  )
}

function LaneTrack({ lane, activeMilestone, onSelectMilestone }: {
  lane: Lane
  activeMilestone: string | null
  onSelectMilestone: (id: string) => void
}) {
  return (
    <div className="roadmap-lane">
      <div className="roadmap-lane__header">
        <span className="roadmap-lane__icon">{lane.icon}</span>
        <h2 className="roadmap-lane__title">{lane.title}</h2>
      </div>
      <div className="roadmap-lane__track">
        <div className="roadmap-lane__path" />
        <div className="roadmap-lane__nodes">
          {lane.milestones.map((milestone, index) => (
            <div key={milestone.id} className="roadmap-lane__node-wrapper">
              <MilestoneNode
                milestone={milestone}
                isActive={activeMilestone === milestone.id}
                onClick={() => onSelectMilestone(milestone.id)}
              />
              {index < lane.milestones.length - 1 && (
                <div className={`roadmap-lane__connector roadmap-lane__connector--${milestone.status}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RoadmapPage() {
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null)

  const lanes = Object.values(roadmapData) as Lane[]

  const getActiveMilestoneData = (): Milestone | null => {
    if (!activeMilestone) return null
    for (const lane of lanes) {
      const found = lane.milestones.find((m) => m.id === activeMilestone)
      if (found) return found
    }
    return null
  }

  const activeMilestoneData = getActiveMilestoneData()

  return (
    <main className="roadmap-page">
      <section className="roadmap-header">
        <span className="label">Learning Roadmap</span>
        <h1>Building in Public</h1>
        <p className="roadmap-intro">
          This roadmap shows what I'm actively learning and building in public. Each milestone
          represents completed or in-progress work, with links to real artifacts. This is a
          living system, not a static resume.
        </p>
      </section>

      <section className="roadmap-legend">
        <div className="roadmap-legend__item">
          <span className="roadmap-legend__dot roadmap-legend__dot--completed" />
          <span>Completed</span>
        </div>
        <div className="roadmap-legend__item">
          <span className="roadmap-legend__dot roadmap-legend__dot--progress" />
          <span>In Progress</span>
        </div>
        <div className="roadmap-legend__item">
          <span className="roadmap-legend__dot roadmap-legend__dot--locked" />
          <span>Locked</span>
        </div>
      </section>

      <section className="roadmap-board">
        <div className="roadmap-lanes">
          {lanes.map((lane) => (
            <LaneTrack
              key={lane.id}
              lane={lane}
              activeMilestone={activeMilestone}
              onSelectMilestone={setActiveMilestone}
            />
          ))}
        </div>

        <aside className="roadmap-sidebar">
          {activeMilestoneData ? (
            <MilestoneDetail milestone={activeMilestoneData} />
          ) : (
            <div className="roadmap-sidebar__empty">
              <span className="roadmap-sidebar__icon">👆</span>
              <p>Select a milestone to view details</p>
            </div>
          )}
        </aside>
      </section>

      <section className="roadmap-footer">
        <p className="roadmap-footer__note">
          Want to know more about my background?{' '}
          <a href="/profile" className="roadmap-footer__link">
            View my full profile →
          </a>
        </p>
      </section>
    </main>
  )
}
