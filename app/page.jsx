import Navigation from '@/components/Navigation';
import Terminal from '@/components/Terminal';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main 
      style={{
        minHeight: '100vh',
        padding: '40px 16px',
        background: '#020617',
        color: '#E2E8F0'
      }}
      >
        <Terminal />
      </main>
    </>
  );
}
