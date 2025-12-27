import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects, type Project } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A focused collection of projects that show how I think. Chrome extensions, web applications, and component-based interfaces.',
};

function getStatusBadgeClass(status: Project['status']): string {
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

export default function ProjectsPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <section className="section page-header">
          <h1>Selected Work</h1>
          <p className="page-description">
            A focused collection of projects that show how I think. Process over polish.
          </p>
        </section>

        <section className="section projects-section">
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card-custom">
                <div className="project-image-wrapper">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={320}
                    height={200}
                    style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <div>
                      <h2 className="project-title">{project.name}</h2>
                      <p className="project-tagline">{project.tagline}</p>
                    </div>
                    <span className={`badge ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>

                  {project.highlights && (
                    <ul className="project-highlights">
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {project.caseStudy && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="btn btn--sm btn--secondary"
                      >
                        Case Study
                      </Link>
                    )}
                    {project.links?.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--sm btn--ghost"
                      >
                        GitHub
                      </Link>
                    )}
                    {project.links?.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--sm btn--primary"
                      >
                        View Live
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
