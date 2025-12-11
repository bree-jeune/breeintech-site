'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const current = images[currentIndex];

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Image
        src={current.src}
        alt={current.alt}
        width={960}
        height={540}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          marginTop: '0.25rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}
      >
        {current.caption}
      </div>

      <div
        style={{
          marginTop: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '0.5rem',
        }}
      >
        <button type="button" onClick={showPrev}>
          ‹ Prev
        </button>
        <div style={{ fontSize: '0.75rem' }}>
          {currentIndex + 1} / {images.length}
        </div>
        <button type="button" onClick={showNext}>
          Next ›
        </button>
      </div>
    </div>
  );
}
