import React from 'react';
import Image from 'next/image';

interface DeviceMockupProps {
    children?: React.ReactNode;
    src?: string;
    alt?: string;
    maxWidth?: string;
}

export default function DeviceMockup({ children, src, alt, maxWidth = '280px' }: DeviceMockupProps) {
    return (
        <div className="device-mockup" style={{ maxWidth }}>
            <div className="device-frame">
                <div className="device-screen">
                    {src ? (
                        <Image
                            src={src}
                            alt={alt || 'Mobile app screenshot'}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="280px"
                        />
                    ) : (
                        children
                    )}
                </div>
                <div className="device-notch" />
            </div>
        </div>
    );
}
