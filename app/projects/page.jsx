import Navigation from '@/components/Navigation';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: 'World’s Biggest Inconveniences',
      stack: 'React • Vite',
      status: 'In progress',
      summary:
        'A playful, interactive catalog of everyday annoyances, built to practice React and component patterns.',
    },
    {
      id: 2,
      name: 'System Reboot Portfolio',
      stack: 'Next.js • React',
      status: 'Live',
      summary:
        'This portfolio: a narrative “system reboot” theme showcasing my journey from paramedic to developer.',
    },
  ];

  return (
    <>
      <Navigation />
      <main
        style={{
          minHeight: '100vh',
          padding: '40px 16px',
          background: '#020617',
          color: '#E2E8F0',
        }}
      >
        <section style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Projects</h1>
          <p style={{ marginBottom: '2rem', color: '#9CA3AF' }}>
            A growing collection of experiments, learning projects, and storytelling interfaces.
          </p>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {projects.map((project) => (
              <article
                key={project.id}
                style={{
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #334155',
                  background: '#020617',
                }}
              >
                <h2 style={{ marginBottom: '0.25rem', fontSize: '1.25rem' }}>{project.name}</h2>
                <div style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>
                  {project.stack} • {project.status}
                </div>
                <p style={{ margin: 0 }}>{project.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
