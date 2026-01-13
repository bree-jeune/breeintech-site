export type MilestoneStatus = 'completed' | 'in_progress' | 'locked'

export interface Milestone {
    id: string
    title: string
    status: MilestoneStatus
    description: string
    objective: string
    artifact: string
    tools: string[]
    proof: { label: string; url: string } | null
    lastUpdated?: string
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
        title: 'Phase 1: Secure Foundations',
        icon: '⚙️',
        milestones: [
            {
                id: 'se-1',
                title: 'Full-Stack Architecture',
                status: 'completed',
                description: 'Solidifying app structure, sessions, and state management.',
                objective: 'Build scalable, maintainable full-stack foundations.',
                artifact: 'Secure Auth Template & Best Practices Doc',
                tools: ['Next.js', 'TypeScript', 'Auth.js', 'PostgreSQL'],
                proof: { label: 'Auth Demo', url: '/projects/bridge' },
                lastUpdated: 'Jan 2026',
            },
            {
                id: 'se-2',
                title: 'Error Handling & Logging',
                status: 'in_progress',
                description: 'Implementing robust middleware for graceful failure and observability.',
                objective: 'System-wide reliability and debugging visibility.',
                artifact: 'Centralized Logging Utility',
                tools: ['Winston', 'Sentry', 'Middleware'],
                proof: null,
            },
            {
                id: 'se-3',
                title: 'Testing Discipline',
                status: 'locked',
                description: 'Integrating unit and E2E testing into the development lifecycle.',
                objective: 'Confidence in deployments and code quality.',
                artifact: 'Test Suite with 80%+ Coverage',
                tools: ['Jest', 'Playwright', 'Vitest'],
                proof: null,
            },
        ],
    },
    cybersecurity: {
        id: 'security',
        title: 'Phase 2: Exploit + Mitigate',
        icon: '🛡️',
        milestones: [
            {
                id: 'cs-1',
                title: 'Networking & CLI',
                status: 'completed',
                description: 'TCP/IP fundamentals, DNS, and advanced Linux CLI fluency.',
                objective: 'Foundational understanding of system communication.',
                artifact: 'Networking Fundamentals Lab Notes',
                tools: ['Wireshark', 'Bash', 'Linux'],
                proof: { label: 'Lab Notes', url: '/stories' },
                lastUpdated: 'Nov 2025',
            },
            {
                id: 'cs-2',
                title: 'OWASP Top 10 Hands-on',
                status: 'in_progress',
                description: 'Practical exploitation and mitigation of common web vulnerabilities.',
                objective: 'Identify and fix real-world security flaws.',
                artifact: 'Vulnerable App + Exploit Write-ups',
                tools: ['OWASP ZAP', 'Burp Suite', 'SQLMap'],
                proof: null,
            },
            {
                id: 'cs-3',
                title: 'Threat Modeling intro',
                status: 'locked',
                description: 'Analyzing systems for potential attack vectors and prioritizing defenses.',
                objective: 'Design software with a security-first mindset.',
                artifact: 'Threat Model for Bridge App',
                tools: ['STRIDE', 'Data Flow Diagrams'],
                proof: null,
            },
        ],
    },
    writing: {
        id: 'writing',
        title: 'Phase 3: Synthesis & Signal',
        icon: '✍️',
        milestones: [
            {
                id: 'wr-1',
                title: 'Technical Narrative',
                status: 'completed',
                description: 'Transitioning from factual notes to narrative explanations and tutorials.',
                objective: 'Demonstrate deep understanding through teaching.',
                artifact: 'Published Tutorial: Secure Architecture',
                tools: ['Technical Writing', 'Diagraming'],
                proof: { label: 'Labs', url: '/stories' },
                lastUpdated: 'Jan 2026',
            },
            {
                id: 'wr-2',
                title: 'Automation & Tooling',
                status: 'locked',
                description: 'Building custom security tools or automating dev workflows.',
                objective: 'Apply engineering skills to security problems.',
                artifact: 'Home Lab Automation Tool',
                tools: ['Python', 'Docker', 'Go'],
                proof: null,
            },
            {
                id: 'wr-3',
                title: 'Public Synthesis',
                status: 'locked',
                description: 'Publishing a comprehensive series tying everything together.',
                objective: 'Establish a clear, defensible professional signal.',
                artifact: 'Mastering the Full-stack Security Cycle',
                tools: ['Public Speaking', 'System Design'],
                proof: null,
            },
        ],
    },
}
