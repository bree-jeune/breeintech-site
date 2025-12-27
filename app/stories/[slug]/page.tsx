import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Navigation />

      <main id="main-content">
        <article className="section labs-post">
          <header className="labs-post-header">
            <Link href="/stories" className="labs-post-back">
              &larr; Back to Labs
            </Link>
            <div className="labs-post-meta">
              <span className="labs-category">{post.category}</span>
              <span className="labs-date">{formattedDate}</span>
            </div>
            <h1 className="labs-post-title">{post.title}</h1>
            <p className="labs-post-excerpt">{post.excerpt}</p>
            <div className="labs-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </header>

          <div className="labs-post-content">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
