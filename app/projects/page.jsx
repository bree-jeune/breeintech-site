import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      id: 'neuronibble',
      name: 'NeuroNibble',
      tagline: 'Compassion-first productivity for neurodivergent minds',
      description: 'A React Native task manager that meets users where they are. Energy-based routing, dopamine mechanics, and async body doubling—built for brains that work differently.',
      stack: ['React Native', 'TypeScript', 'Expo'],
      status: 'In Development',
      image: {
        src: '/images/neuro_nibble/NeuroNibbleHome.png',
        alt: 'NeuroNibble mobile app home screen',
      },
      highlights: [
        'Energy check-ins that adapt task suggestions',
        'Dopamine vending machine for reward randomization',
        'Real-time user counter for virtual co-working'
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
      id: 'rigready',
      name: 'RigReady',
      tagline: 'EMS protocols in your pocket',
      description: 'A native iOS app for EMT and paramedic students to study critical medical information and access protocols in high-pressure field environments.',
      stack: ['Swift', 'SwiftUI', 'Python'],
      status: 'In Development',
      image: {
        src: '/images/placeholder/placeholder.png',
        alt: 'RigReady app preview',
      },
      highlights: [
        'Python script for protocol parsing and categorization',
        'Offline-first for field reliability',
        'Quick reference designed for 3am calls'
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
  ];

  return (
    <>
      <Navigation />

      <main>
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
                    <span className={`badge ${project.status === 'Live' ? 'badge--success' : 'badge--warning'}`}>
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
