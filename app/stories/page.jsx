import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LabsPage() {
  const posts = [
    {
      id: 'debugging-portfolio',
      title: 'Building This Portfolio in Public',
      date: '2025',
      category: 'Dev Notes',
      excerpt: 'A breakdown of decisions, trade-offs, and the constraints that shaped this site. React, Next.js, and learning the ecosystem by shipping.',
      tags: ['React', 'Next.js', 'CSS'],
    },
    {
      id: 'paramedic-to-developer',
      title: 'What EMS Taught Me About Building Software',
      date: '2025',
      category: 'Perspective',
      excerpt: 'How years in emergency medicine shaped the way I think about user experience, reliability, and staying calm when things break.',
      tags: ['Career', 'Process'],
    },
    {
      id: 'energy-based-ux',
      title: 'Designing for Variable Energy States',
      date: '2025',
      category: 'UX',
      excerpt: 'Notes on building NeuroNibble: why productivity apps fail neurodivergent users and what "compassion-first" actually means in code.',
      tags: ['React Native', 'UX', 'Accessibility'],
    },
  ];

  return (
    <>
      <Navigation />

      <main>
        <section className="section page-header">
          <h1>Labs</h1>
          <p className="page-description">
            Notes, walkthroughs, and things I'm figuring out. Low-pressure writing about the work.
          </p>
        </section>

        <section className="section labs-section">
          <div className="labs-list">
            {posts.map((post) => (
              <article key={post.id} className="labs-entry">
                <div className="labs-meta">
                  <span className="labs-date">{post.date}</span>
                  <span className="labs-category">{post.category}</span>
                </div>

                <div className="labs-content">
                  <h2 className="labs-title">{post.title}</h2>
                  <p className="labs-excerpt">{post.excerpt}</p>

                  <div className="labs-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="labs-action">
                  <span className="coming-soon">Coming soon</span>
                </div>
              </article>
            ))}
          </div>

          <div className="labs-cta">
            <p>More posts in the works. Building in public means shipping before it's perfect.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
