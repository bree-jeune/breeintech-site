import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  const commits = [
    {
      version: 'v2.0-stable',
      title: 'BreeInTech (Stable Release)',
      description: 'Rebuilt from ground up. Prioritizing human first. Developer, creator, strategist. Finally in beta for a better version of myself.'
    },
    {
      version: 'v1.2-fatal',
      title: 'The Crash (Burnout)',
      description: 'Unhandled exception. System overload. All services critical. Required complete shutdown for recovery.'
    },
    {
      version: 'v1.1',
      title: 'The Motherboard Update (Mini OS Patch)',
      description: 'Upgraded dependency management, chaos handling, and patience buffers while reducing sleep capacity by 60% (feature, not bug).'
    },
    {
      version: 'v1.0',
      title: 'The Medic Era',
      description: 'Dedicated years to emergency response, protocol development, and saving lives. Built systems that lasted.'
    }
  ];

  return (
    <>
      <Navigation />
      <section className="section">
        <h2>ABOUT (Git History)</h2>
        <div className="timeline">
          {commits.map((commit, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-tag">commit {commit.version}</div>
              <h3 style={{ margin: '0.5rem 0 0.5rem 0', color: 'var(--color-text)' }}>{commit.title}</h3>
              <p>{commit.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}