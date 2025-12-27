import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for project inquiries, collaboration, or just to say hello.',
};

const quickLinks = [
  { key: 'linkedin', hint: 'Connect professionally' },
  { key: 'github', hint: 'See my code' },
  { key: 'twitter', hint: 'Follow updates' },
] as const;

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <section className="section contact-section">
          <div className="contact-grid">
            {/* Left: Form */}
            <div className="contact-form-section">
              <h1>Get in Touch</h1>
              <p className="contact-intro">
                Have a project in mind? Want to collaborate? Just want to say hello?
                I'd like to hear from you.
              </p>
              <ContactForm />
            </div>

            {/* Right: Quick Links */}
            <div className="contact-sidebar">
              <div className="contact-quick-links">
                <h2>Quick Links</h2>
                <div className="contact-link-list">
                  {quickLinks.map(({ key, hint }) => {
                    const social = SOCIAL_LINKS[key as keyof typeof SOCIAL_LINKS];
                    return (
                      <Link
                        key={key}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-quick-link"
                      >
                        <span className="contact-quick-label">{social.label}</span>
                        <span className="contact-quick-hint">{hint}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="contact-email-block">
                <h2>Email Directly</h2>
                <Link
                  href={SOCIAL_LINKS.email.url}
                  className="contact-email-link"
                >
                  {SOCIAL_LINKS.email.handle}
                </Link>
              </div>

              <div className="contact-location">
                <p>
                  Based in {SITE_CONFIG.location}.<br />
                  Open to remote opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
