'use client'

import { useState, useEffect, useMemo } from 'react'
import { roadmapData, type Milestone, type Lane, type MilestoneStatus } from './data'

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

      <div className="roadmap-detail__meta">
        <div className="roadmap-detail__item">
          <span className="roadmap-detail__label">Learning Objective</span>
          <p className="roadmap-detail__value">{milestone.objective}</p>
        </div>
        <div className="roadmap-detail__item">
          <span className="roadmap-detail__label">Expected Artifact</span>
          <p className="roadmap-detail__value">{milestone.artifact}</p>
        </div>
      </div>

      <div className="roadmap-detail__tools">
        <div className="flex justify-between items-center mb-sm">
          <span className="roadmap-detail__label">Tools & Technologies</span>
          {milestone.lastUpdated && (
            <span className="roadmap-detail__date">Refined {milestone.lastUpdated}</span>
          )}
        </div>
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

  const lanes = useMemo(() => Object.values(roadmapData) as Lane[], [])

  const getActiveMilestoneData = (): Milestone | null => {
    if (!activeMilestone) return null
    for (const lane of lanes) {
      const found = lane.milestones.find((m) => m.id === activeMilestone)
      if (found) return found
    }
    return null
  }

  const activeMilestoneData = getActiveMilestoneData()

  // Auto-select first in-progress or completed milestone
  useEffect(() => {
    if (activeMilestone) return;

    let firstInProgress: string | null = null;
    let firstCompleted: string | null = null;

    for (const lane of lanes) {
      for (const m of lane.milestones) {
        if (!firstInProgress && m.status === 'in_progress') {
          firstInProgress = m.id;
        }
        if (!firstCompleted && m.status === 'completed') {
          firstCompleted = m.id;
        }
      }
    }

    const toSelect = firstInProgress || firstCompleted;
    if (toSelect) {
      setActiveMilestone(toSelect);
    }
  }, [lanes, activeMilestone]);

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
              <p>Click a milestone to view context, artifacts, and links.</p>
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
