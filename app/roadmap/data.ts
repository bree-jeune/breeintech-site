export type MilestoneStatus = 'completed' | 'in_progress' | 'locked'

export interface Milestone {
    id: string
    title: string
    status: MilestoneStatus
    description: string
    tools: string[]
    proof: { label: string; url: string } | null
}

export interface Lane {
    id: string
    title: string
    icon: string
    milestones: Milestone[]
}

export const roadmapData: Record<string, Lane> = {
    softwareEngineering: {
        id: 'software',
        title: 'Software Engineering',
        icon: '⚙️',
        milestones: [
            {
                id: 'se-1',
                title: 'Portfolio Site v2',
                status: 'completed',
                description: 'Rebuilt personal portfolio with Next.js 16, TypeScript, and a custom design system.',
                tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
                proof: { label: 'Live Site', url: 'https://breeintech.com' },
            },
            {
                id: 'se-2',
                title: 'Orbit Chrome Extension',
                status: 'completed',
                description: 'Built a browser extension for productivity tracking and tab management.',
                tools: ['JavaScript', 'Chrome APIs', 'HTML/CSS'],
                proof: { label: 'GitHub', url: 'https://github.com/bree-jeune' },
            },
            {
                id: 'se-3',
                title: 'Full-Stack App Architecture',
                status: 'in_progress',
                description: 'Deepening knowledge of backend patterns, API design, and database optimization.',
                tools: ['Node.js', 'PostgreSQL', 'REST APIs'],
                proof: null,
            },
            {
                id: 'se-4',
                title: 'CI/CD Pipeline Mastery',
                status: 'locked',
                description: 'Setting up automated testing, deployment pipelines, and infrastructure as code.',
                tools: ['GitHub Actions', 'Docker', 'AWS'],
                proof: null,
            },
            {
                id: 'se-5',
                title: 'Open Source Contribution',
                status: 'locked',
                description: 'Contributing meaningful PRs to established open source projects.',
                tools: ['Git', 'Code Review', 'Documentation'],
                proof: null,
            },
        ],
    },
    cybersecurity: {
        id: 'security',
        title: 'Cybersecurity',
        icon: '🛡️',
        milestones: [
            {
                id: 'cs-1',
                title: 'Security Fundamentals',
                status: 'completed',
                description: 'Completed foundational training in network security, encryption, and threat modeling.',
                tools: ['CompTIA Security+', 'Wireshark', 'Linux'],
                proof: { label: 'Certificate', url: '#' },
            },
            {
                id: 'cs-2',
                title: 'CTF Challenges',
                status: 'in_progress',
                description: 'Actively participating in Capture The Flag competitions to sharpen practical skills.',
                tools: ['Burp Suite', 'Kali Linux', 'Python'],
                proof: { label: 'Write-ups', url: '#' },
            },
            {
                id: 'cs-3',
                title: 'Web App Security',
                status: 'in_progress',
                description: 'Learning OWASP Top 10 vulnerabilities and secure coding practices.',
                tools: ['OWASP ZAP', 'SQLMap', 'Secure Code Review'],
                proof: null,
            },
            {
                id: 'cs-4',
                title: 'Penetration Testing',
                status: 'locked',
                description: 'Developing skills in ethical hacking and vulnerability assessment.',
                tools: ['Metasploit', 'Nmap', 'Reporting'],
                proof: null,
            },
            {
                id: 'cs-5',
                title: 'Security Certification',
                status: 'locked',
                description: 'Pursuing advanced security certification to validate expertise.',
                tools: ['CEH', 'OSCP', 'Practical Labs'],
                proof: null,
            },
        ],
    },
    writing: {
        id: 'writing',
        title: 'Writing & Knowledge Sharing',
        icon: '✍️',
        milestones: [
            {
                id: 'wr-1',
                title: 'Technical Blog Launch',
                status: 'completed',
                description: 'Launched a blog to document learning journeys and technical discoveries.',
                tools: ['MDX', 'Next.js', 'Markdown'],
                proof: { label: 'Labs', url: '/stories' },
            },
            {
                id: 'wr-2',
                title: 'Project Documentation',
                status: 'completed',
                description: 'Writing clear READMEs and documentation for all public projects.',
                tools: ['Markdown', 'Diagrams', 'GitHub'],
                proof: { label: 'GitHub', url: 'https://github.com/bree-jeune' },
            },
            {
                id: 'wr-3',
                title: 'Tutorial Series',
                status: 'in_progress',
                description: 'Creating step-by-step tutorials on topics I\'ve mastered.',
                tools: ['Technical Writing', 'Code Examples', 'Diagrams'],
                proof: null,
            },
            {
                id: 'wr-4',
                title: 'Community Engagement',
                status: 'locked',
                description: 'Sharing knowledge through talks, threads, or community contributions.',
                tools: ['Twitter/X', 'Dev.to', 'Conferences'],
                proof: null,
            },
            {
                id: 'wr-5',
                title: 'Published Guide',
                status: 'locked',
                description: 'Publishing a comprehensive guide or resource for other builders.',
                tools: ['Long-form Writing', 'Research', 'Editing'],
                proof: null,
            },
        ],
    },
}
