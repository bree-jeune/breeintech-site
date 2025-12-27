import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Bree — Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0F1115',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#F4F3EE',
              letterSpacing: '-0.02em',
            }}
          >
            bree
          </span>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#C46A2B',
            }}
          >
            .
          </span>
        </div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#F4F3EE',
            lineHeight: 1.2,
            marginBottom: '24px',
            letterSpacing: '-0.03em',
          }}
        >
          Frontend Developer
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#9CA3AF',
            lineHeight: 1.5,
            maxWidth: '800px',
          }}
        >
          I build practical software with attention to structure, clarity, and real-world use.
        </div>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '48px',
          }}
        >
          {['React', 'Next.js', 'TypeScript', 'Chrome Extensions'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '8px 16px',
                backgroundColor: '#1C1F26',
                borderRadius: '4px',
                fontSize: '20px',
                color: '#9CA3AF',
                border: '1px solid #2D3139',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
