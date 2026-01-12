import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

function getStatusBadgeClass(status: string): string {
  switch (status) {
    case 'Shipped':
    case 'Live':
      return 'badge--success';
    case 'In Development':
      return 'badge--warning';
    default:
      return 'badge--muted';
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <main id="main-content" className="case-study">
      {/* Hero Section */}
      <section className="case-study-hero">
        <Link href="/projects" className="case-study-back">
          ← Back to Projects
        </Link>

        <div className="case-study-hero-content">
          <div className="case-study-hero-text">
            <span className={`badge ${getStatusBadgeClass(project.status)}`}>
              {project.status}
            </span>
            <h1>{project.name}</h1>
            <p className="case-study-tagline">{project.tagline}</p>

            <div className="case-study-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>

            {project.links && (
              <div className="case-study-links">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost"
                  >
                    View on GitHub
                  </Link>
                )}
                {project.links.live && (
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    View Live
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="case-study-hero-image">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={400}
              height={300}
              style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      {caseStudy ? (
        <div className="case-study-content">
          {/* Overview */}
          <section className="case-study-section">
            <h2>Overview</h2>
            <p>{caseStudy.overview}</p>
          </section>

          {/* The Challenge */}
          <section className="case-study-section">
            <h2>The Challenge</h2>
            <p>{caseStudy.challenge}</p>
          </section>

          {/* The Solution */}
          <section className="case-study-section">
            <h2>The Solution</h2>
            <p>{caseStudy.solution}</p>
          </section>

          {/* Key Features */}
          <section className="case-study-section">
            <h2>Key Features</h2>
            <ul className="case-study-features">
              {caseStudy.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Tech Rationale */}
          <section className="case-study-section">
            <h2>Technical Decisions</h2>
            <p>{caseStudy.techRationale}</p>
            <div className="case-study-tech-grid">
              {project.stack.map((tech) => (
                <div key={tech} className="case-study-tech-item">
                  <span className="tag tag--lg">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Learnings */}
          <section className="case-study-section">
            <h2>What I Learned</h2>
            <ul className="case-study-learnings">
              {caseStudy.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </section>

          {/* Screenshots if available */}
          {caseStudy.screenshots && caseStudy.screenshots.length > 0 && (
            <section className="case-study-section">
              <h2>Screenshots</h2>
              <div className="case-study-screenshots">
                {caseStudy.screenshots.map((screenshot, index) => (
                  <div key={index} className="case-study-screenshot">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={800}
                      height={500}
                      style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="case-study-content">
          <section className="case-study-section">
            <h2>About This Project</h2>
            <p>{project.description}</p>

            <h3>Highlights</h3>
            <ul className="case-study-features">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </section>
        </div>
      )}

      {/* CTA */}
      <section className="case-study-cta">
        <p>Interested in working together?</p>
        <Link href="/contact" className="btn btn--primary">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
