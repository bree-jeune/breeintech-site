import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for project inquiries, collaboration, or just to say hello.',
};

const contactMethods = [
  {
    key: 'email',
    isPrimary: true,
    hint: 'Best for project inquiries',
  },
  {
    key: 'linkedin',
    isPrimary: false,
    hint: "Let's connect professionally",
  },
  {
    key: 'twitter',
    isPrimary: false,
    hint: 'Thoughts and updates',
  },
  {
    key: 'instagram',
    isPrimary: false,
    hint: 'Behind the scenes',
  },
  {
    key: 'github',
    isPrimary: false,
    hint: "See what I'm building",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <section className="section contact-section">
          <div className="contact-content">
            <h1>Get in Touch</h1>
            <p className="contact-intro">
              Have a project in mind? Want to collaborate? Just want to say hello?
              I'd like to hear from you.
            </p>

            <div className="contact-methods">
              {contactMethods.map(({ key, isPrimary, hint }) => {
                const social = SOCIAL_LINKS[key as keyof typeof SOCIAL_LINKS];
                const isEmail = key === 'email';

                return (
                  <Link
                    key={key}
                    href={social.url}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noopener noreferrer'}
                    className={`contact-card ${isPrimary ? 'contact-card--primary' : ''}`}
                  >
                    <span className="contact-label">{social.label}</span>
                    <span className="contact-value">{social.handle}</span>
                    <span className="contact-hint">{hint}</span>
                  </Link>
                );
              })}
            </div>

            <div className="contact-note">
              <p>
                Based in {SITE_CONFIG.location}. Open to remote opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
