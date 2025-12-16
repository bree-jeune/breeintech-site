import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-text">
          Built by Bree Jeune
        </p>
        <div className="footer-links">
          <Link href="https://github.com/bree-jeune" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/breejeune" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
