'use client';

import { useEffect, useState } from 'react';
import { ActivityCalendar, Activity, ThemeInput } from 'react-activity-calendar';
import { SOCIAL_LINKS } from '@/lib/constants';

// Explicitly defined theme to match site aesthetics (Amber/Rust)
// The calendar accepts a 'theme' object or explicit color levels.
// We'll use explicit levels for predictability with the design system.
const minimalTheme: ThemeInput = {
    light: ['#1C1F26', '#5e2f0d', '#8f4817', '#c46a2b', '#ff8c3a'],
    dark: ['#1C1F26', '#5e2f0d', '#8f4817', '#c46a2b', '#ff8c3a'],
};

export default function GitHubHeatmap() {
    const [data, setData] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Fetch data from the public proxy API
        // This avoids needing a personal access token on the client
        fetch(`https://github-contributions-api.jogruber.de/v4/${SOCIAL_LINKS.github.handle}`)
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch data');
                return response.json();
            })
            .then(json => {
                // The API returns { total: { ... }, contributions: [ ... ] }
                // We need 'contributions' which is Array<{ date: string, count: number, level: number }>
                if (json.contributions) {
                    // Filter to last 365 days if the API returns more, or just pass it through.
                    // react-activity-calendar handles the date range automatically (defaulting to last year).
                    // We transform to ensure it matches the shape expected if needed, but it usually matches directly.
                    setData(json.contributions);
                }
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    if (error) {
        return (
            <div className="heatmap-error">
                <p className="text-muted text-sm">
                    Unable to load GitHub activity.
                    <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noopener noreferrer" className="text-accent ml-1 hover:underline">
                        View on GitHub →
                    </a>
                </p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="heatmap-loading animate-pulse h-[140px] w-full bg-surface rounded-lg border border-border"></div>
        );
    }

    return (
        <div className="heatmap-container w-full overflow-hidden" title="GitHub Contributions">
            <ActivityCalendar
                data={data}
                theme={minimalTheme}
                blockSize={10}
                blockMargin={4}
                fontSize={10}
                labels={{
                    legend: {
                        less: 'Less',
                        more: 'More',
                    },
                    months: [
                        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                    ],
                    totalCount: '{{count}} contributions in the last year',
                    weekdays: [
                        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
                    ]
                }}
                showWeekdayLabels={true}
            />
        </div>
    );
}
