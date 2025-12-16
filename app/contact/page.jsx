import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main>
        <section className="section contact-section">
          <div className="contact-content">
            <h1>Get in Touch</h1>
            <p className="contact-intro">
              Have a project in mind? Want to collaborate? Just want to say hello?
              I'd like to hear from you.
            </p>

            <div className="contact-methods">
              <a
                href="mailto:connect@breeintech.com"
                className="contact-card contact-card--primary"
              >
                <span className="contact-label">Email</span>
                <span className="contact-value">connect@breeintech.com</span>
                <span className="contact-hint">Best for project inquiries</span>
              </a>

              <Link
                href="https://linkedin.com/in/breejeune"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">linkedin.com/in/breejeune</span>
                <span className="contact-hint">Let's connect professionally</span>
              </Link>

              <Link
                href="https://github.com/bree-jeune"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/bree-jeune</span>
                <span className="contact-hint">See what I'm building</span>
              </Link>
            </div>

            <div className="contact-note">
              <p>
                Based in NYC. Open to remote opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
