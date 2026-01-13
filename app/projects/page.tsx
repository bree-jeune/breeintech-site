import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import DeviceMockup from '@/components/DeviceMockup';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A focused collection of projects that show how I think. Chrome extensions, web applications, and component-based interfaces.',
};

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: 'Shipped' | 'Live' | 'In Development';
  image: {
    src: string;
    alt: string;
  };
  highlights: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    id: 'orbit-web',
    name: 'Orbit Web',
    tagline: 'Focus management as a web application',
    description: 'A full-featured web application evolved from the Orbit Chrome extension. Helps users stay focused by managing browsing habits with a clean, accessible interface. Built with React and modern web technologies.',
    stack: ['React', 'JavaScript', 'CSS', 'Vercel'],
    status: 'Live',
    image: {
      src: 'https://res.cloudinary.com/dkdxt6f6x/image/upload/v1766835938/ChatGPT_Image_Dec_22_2025_at_04_34_34_AM_giprjk.png',
      alt: 'Orbit logo',
    },
    highlights: [
      'Full web app version of the Chrome extension',
      'Deployed and live on Vercel',
      'Clean, responsive design for all devices'
    ],
    links: {
      github: 'https://github.com/bree-jeune/orbit-v2-web',
      live: 'https://stayinorbit.vercel.app/',
    },
  },
  {
    id: 'orbit-extension',
    name: 'Orbit Extension',
    tagline: 'Chrome extension for focused browsing',
    description: 'A Chrome browser extension that helps users stay focused by managing their browsing habits. Built with vanilla JavaScript and Chrome Extension APIs, demonstrating clean architecture and practical UX design.',
    stack: ['JavaScript', 'Chrome Extension API', 'HTML', 'CSS'],
    status: 'Shipped',
    image: {
      src: 'https://res.cloudinary.com/dkdxt6f6x/image/upload/v1766835938/ChatGPT_Image_Dec_22_2025_at_04_34_34_AM_giprjk.png',
      alt: 'Orbit logo',
    },
    highlights: [
      'Published to Chrome Web Store (pending review)',
      'Clean, intuitive interface for distraction management',
      'Built with vanilla JS for minimal footprint'
    ],
    links: {
      github: 'https://github.com/bree-jeune/orbit',
    },
  },
  {
    id: 'neuronibble',
    name: 'NeuroNibble',
    tagline: 'Compassion-first productivity for neurodivergent minds',
    description: 'A React Native task manager that meets users where they are. Energy-based routing, dopamine mechanics, and async body doubling—built for brains that work differently.',
    stack: ['React Native', 'TypeScript', 'Expo'],
    status: 'In Development',
    image: {
      src: '/images/projects/neuronibble/home.png',
      alt: 'NeuroNibble home screen showing energy check-ins',
    },
    highlights: [
      'Energy check-ins that adapt task suggestions',
      'Dopamine mechanics for reward randomization',
      'Contextualized task management'
    ],
  },
  {
    id: 'medic138',
    name: 'Medic 138',
    tagline: 'Gamified medical education for non-traditional learners',
    description: 'An interactive learning platform that uses gamification and virtual experiences to teach EMS protocols. Built from experience—I know what works in the field.',
    stack: ['React', 'Jekyll', 'JavaScript Canvas'],
    status: 'Live',
    image: {
      src: '/images/medic138/landing_page.png',
      alt: 'Medic 138 landing page',
    },
    highlights: [
      'Interactive ECG waveform visualizations',
      'Protocol-based curriculum structure',
      'Designed for retention under pressure'
    ],
  },
  {
    id: 'protomedic',
    name: 'ProtoMedic',
    tagline: 'EMS protocols in your pocket',
    description: 'A native iOS app for EMT and paramedic students to study critical medical information and access protocols in high-pressure field environments.',
    stack: ['Swift', 'SwiftUI', 'Python'],
    status: 'In Development',
    image: {
      src: '/images/projects/protomedic/main-menu.png',
      alt: 'ProtoMedic dashboard',
    },
    highlights: [
      'Python script for protocol parsing and categorization',
      'Offline-first for field reliability',
      'Clean interface for 3am protocol verification'
    ],
  },
  {
    id: 'inconveniences',
    name: "World's Biggest Inconveniences",
    tagline: 'A catalog of everyday annoyances',
    description: 'A playful React project to sharpen component patterns and state management. Sometimes you build serious tools. Sometimes you catalog the little things that drive everyone crazy.',
    stack: ['React', 'Vite'],
    status: 'In Development',
    image: {
      src: '/images/assignments_practice/INCONVENIENCES.png',
      alt: 'Inconveniences catalog landing page',
    },
    highlights: [
      'Practice project for React fundamentals',
      'Component composition patterns',
      'Voting and interaction features planned'
    ],
  },
  {
    id: 'bridge',
    name: 'Bridge',
    tagline: 'Reminders Template Bridging Application',
    description: 'A native iOS tool that bridges the gap between structured templates and Apple Reminders. Built for quick capture and seamless sync without cognitive friction.',
    stack: ['Swift', 'SwiftUI', 'EventKit'],
    status: 'Shipped',
    image: {
      src: '/images/projects/bridge/welcome.png',
      alt: 'Bridge app welcome screen',
    },
    highlights: [
      'Deep integration with Apple Reminders via EventKit',
      'Haptic-driven, minimalist capture interface',
      'Intelligent task categorization and timing'
    ],
    links: {
      github: 'https://github.com/bree-jeune/bridge-app.git',
    },
  },
];

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
                {['protomedic', 'bridge', 'neuronibble'].includes(project.id) ? (
                  <DeviceMockup>
                    <img src={project.image.src} alt={project.image.alt} />
                  </DeviceMockup>
                ) : (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={320}
                    height={200}
                    style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
                  />
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h2 className="project-name">{project.name}</h2>
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

                {project.links && (
                  <div className="project-links">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--sm btn--ghost"
                      >
                        GitHub
                      </Link>
                    )}
                    {project.links.live && (
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
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
