import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-text">
          Built by Bree
        </p>
        <div className="footer-links">
          <Link href="https://github.com/bree-jeune" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/ebonne-young/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/BreeInTech" target="_blank" rel="noopener noreferrer">
            X
          </Link>
          <Link href="https://instagram.com/BreeInTech" target="_blank" rel="noopener noreferrer">
            IG
          </Link>
        </div>
      </div>
    </footer>
  );
}
