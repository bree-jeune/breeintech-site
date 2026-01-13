import React from 'react';

interface DeviceMockupProps {
    children: React.ReactNode;
    maxWidth?: string;
}

export default function DeviceMockup({ children, maxWidth = '280px' }: DeviceMockupProps) {
    return (
        <div className="device-mockup" style={{ maxWidth }}>
            <div className="device-frame">
                <div className="device-screen">
                    {children}
                </div>
                <div className="device-notch" />
            </div>
        </div>
    );
}
