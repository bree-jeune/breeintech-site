import Navigation from '@/components/Navigation';

export default function ContactPage() {
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
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact</h1>
        <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
          Reach out below.
        </p>

        <div
          style={{
            borderRadius: '12px',
            border: '1px solid #334155',
            padding: '1.5rem',
            background: '#020617',
          }}
        >
          <p style={{ marginBottom: '0.75rem' }}>
            Contact me via:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              Email: <a href="mailto:connect@breeintech.com" style={{ color: '#38BDF8' }}>
                connect@breeintech.com
              </a>
            </li>
            <li>
              LinkedIn: <a href="https://linkedin.com/in/ebonne-young" style={{ color: '#38BDF8' }}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
      </main>
    </>
  );
}
