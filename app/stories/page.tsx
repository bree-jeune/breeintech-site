import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labs',
  description: 'Notes, walkthroughs, and things I am figuring out. Low-pressure writing about the work.',
};

// Placeholder posts for upcoming content
const upcomingPosts = [
  {
    id: 'paramedic-to-developer',
    title: 'What EMS Taught Me About Building Software',
    category: 'Perspective',
    excerpt: 'How years in emergency medicine shaped the way I think about user experience, reliability, and staying calm when things break.',
    tags: ['Career', 'Process'],
  },
  {
    id: 'energy-based-ux',
    title: 'Designing for Variable Energy States',
    category: 'UX',
    excerpt: 'Notes on building NeuroNibble: why productivity apps fail neurodivergent users and what "compassion-first" actually means in code.',
    tags: ['React Native', 'UX', 'Accessibility'],
  },
];

export default function LabsPage() {
  const publishedPosts = getAllPosts();

  return (
    <main id="main-content">
      <section className="section page-header">
        <h1>Labs</h1>
        <p className="page-description">
          Notes, walkthroughs, and things I'm figuring out. Low-pressure writing about the work.
        </p>
      </section>

      <section className="section labs-section">
        <div className="labs-list">
          {/* Published posts */}
          {publishedPosts.map((post) => {
            const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            });

            return (
              <Link
                key={post.slug}
                href={`/stories/${post.slug}`}
                className="labs-entry labs-entry--clickable"
              >
                <div className="labs-meta">
                  <span className="labs-date">{formattedDate}</span>
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
                  <span className="btn btn--sm btn--ghost">Read &rarr;</span>
                </div>
              </Link>
            );
          })}

          {/* Upcoming posts */}
          {upcomingPosts.map((post) => (
            <article key={post.id} className="labs-entry labs-entry--upcoming">
              <div className="labs-meta">
                <span className="labs-date">Soon</span>
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
  );
}
