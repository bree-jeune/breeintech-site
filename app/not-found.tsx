import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="not-found-page">
        <div className="not-found-content">
          <span className="not-found-code">404</span>
          <h1>Page not found</h1>
          <p>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-actions">
            <Link href="/" className="btn btn--primary">
              Go Home
            </Link>
            <Link href="/projects" className="btn">
              View Work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
