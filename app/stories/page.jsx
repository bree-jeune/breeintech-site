import Navigation from '@/components/Navigation';

export default function StoriesPage() {
   const stories = [
    {
      id: 1,
      title: 'Debugging the System Reboot Portfolio',
      tag: 'Debugging story',
      summary:
        'A breakdown of how I used React and Next.js to build this portfolio while learning the ecosystem in public.',
    },
    {
      id: 2,
      title: 'From Paramedic to Full Stack Developer',
      tag: 'Career transition',
      summary:
        'How years in emergency medicine shaped the way I think about user experience, reliability, and calm under pressure.',
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
        <section style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Stories</h1>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
            Narrative case studies about projects, learning, and the journey from paramedic to developer.
          </p>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {stories.map((story) => (
              <article
                key={story.id}
                style={{
                  borderRadius: '12px',
                  border: '1px solid #334155',
                  padding: '1.5rem',
                  background: '#020617',
                }}
              >
                <h2 style={{ marginBottom: '0.25rem', fontSize: '1.25rem' }}>
                  {story.title}
                </h2>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#9CA3AF',
                    marginBottom: '0.5rem',
                  }}
                >
                  {story.tag}
                </div>
                <p style={{ margin: 0 }}>{story.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
