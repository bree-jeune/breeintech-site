// ==========================================================================
// Project Data
// ==========================================================================

export interface ProjectLink {
  github?: string;
  live?: string;
  codepen?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: 'Shipped' | 'Live' | 'In Development';
  image: ProjectImage;
  highlights: string[];
  links?: ProjectLink;
  // Case study content
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
    techRationale: string;
    learnings: string[];
    screenshots?: ProjectImage[];
  };
}

export const projects: Project[] = [
  {
    id: 'orbit-web',
    slug: 'orbit-web',
    name: 'Orbit Web',
    tagline: 'Focus management as a web application',
    description: 'A full-featured web application evolved from the Orbit Chrome extension. Helps users stay focused by managing browsing habits with a clean, accessible interface. Built with React and modern web technologies.',
    stack: ['React', 'JavaScript', 'CSS', 'Vercel'],
    status: 'Live',
    image: {
      src: 'https://res.cloudinary.com/dkdxt6f6x/image/upload/v1766835938/ChatGPT_Image_Dec_22_2025_at_04_34_34_AM_giprjk.png',
      alt: 'Orbit logo',
    },
    highlights: [
      'Full web app version of the Chrome extension',
      'Deployed and live on Vercel',
      'Clean, responsive design for all devices'
    ],
    links: {
      github: 'https://github.com/bree-jeune/orbit-v2-web',
      live: 'https://stayinorbit.vercel.app/',
    },
    caseStudy: {
      overview: 'Orbit Web is the evolution of a browser extension into a standalone web application. After building and shipping the Orbit Chrome extension, I wanted to make the focus management experience accessible to everyone—regardless of their browser or device.',
      challenge: 'The Chrome extension worked well but had limitations: it was locked to one browser, couldn\'t sync across devices easily, and had restrictions on what the extension APIs could do. Users wanted their focus settings and blocked sites to follow them everywhere.',
      solution: 'I rebuilt Orbit from the ground up as a React web application. This meant rethinking the architecture—what was previously handled by Chrome\'s background scripts now needed to work in a standard web context. The result is a cleaner, more maintainable codebase that runs anywhere.',
      features: [
        'Site blocking with customizable blocklists',
        'Focus session timer with break reminders',
        'Clean, distraction-free interface',
        'Responsive design for mobile and desktop',
        'No browser extension required'
      ],
      techRationale: 'React was the natural choice given the component-based UI. I kept the stack simple—no state management library, just React hooks and context where needed. Vercel handles deployment with zero configuration, which lets me focus on features rather than infrastructure.',
      learnings: [
        'Browser extension patterns don\'t always translate directly to web apps',
        'Sometimes the simplest solution (plain CSS) beats complex tooling',
        'Shipping fast and iterating beats waiting for perfection'
      ],
    },
  },
  {
    id: 'orbit-extension',
    slug: 'orbit-extension',
    name: 'Orbit Extension',
    tagline: 'Chrome extension for focused browsing',
    description: 'A Chrome browser extension that helps users stay focused by managing their browsing habits. Built with vanilla JavaScript and Chrome Extension APIs, demonstrating clean architecture and practical UX design.',
    stack: ['JavaScript', 'Chrome Extension API', 'HTML', 'CSS'],
    status: 'Shipped',
    image: {
      src: 'https://res.cloudinary.com/dkdxt6f6x/image/upload/v1766835938/ChatGPT_Image_Dec_22_2025_at_04_34_34_AM_giprjk.png',
      alt: 'Orbit logo',
    },
    highlights: [
      'Published to Chrome Web Store (pending review)',
      'Clean, intuitive interface for distraction management',
      'Built with vanilla JS for minimal footprint'
    ],
    links: {
      github: 'https://github.com/bree-jeune/orbit',
    },
    caseStudy: {
      overview: 'Orbit started as a personal tool. I needed something to help me stay focused while coding, but existing solutions felt bloated or over-complicated. So I built my own.',
      challenge: 'Most productivity tools try to do too much. They\'re packed with features that get in the way of the one thing you actually need: help staying focused. I wanted something lightweight that would just work, without requiring a manual to figure out.',
      solution: 'I built Orbit with vanilla JavaScript—no frameworks, no build tools, just clean code that does exactly what it needs to. The extension integrates with Chrome\'s native APIs to block distracting sites and track focus sessions without any performance overhead.',
      features: [
        'One-click site blocking',
        'Focus timer with customizable durations',
        'Blocklist management',
        'Session statistics',
        'Minimal, native-feeling UI'
      ],
      techRationale: 'Vanilla JavaScript was intentional. Browser extensions should be fast and lightweight—adding React or another framework would mean shipping unnecessary code to users. The Chrome Extension API handles everything I need, and the result is a sub-100kb package.',
      learnings: [
        'Chrome extension development has a unique mental model worth learning',
        'Manifest V3 changes everything—plan for it',
        'Users want simple tools that respect their time'
      ],
    },
  },
  {
    id: 'neuronibble',
    slug: 'neuronibble',
    name: 'NeuroNibble',
    tagline: 'Compassion-first productivity for neurodivergent minds',
    description: 'A React Native task manager that meets users where they are. Energy-based routing, dopamine mechanics, and async body doubling—built for brains that work differently.',
    stack: ['React Native', 'TypeScript', 'Expo'],
    status: 'In Development',
    image: {
      src: 'https://res.cloudinary.com/dkdxt6f6x/image/upload/v1766835714/Gemini_Generated_Image_5ghzuh5ghzuh5ghz_xd4zp5.png',
      alt: 'NeuroNibble mobile app icon',
    },
    highlights: [
      'Energy check-ins that adapt task suggestions',
      'Dopamine vending machine for reward randomization',
      'Real-time user counter for virtual co-working'
    ],
    caseStudy: {
      overview: 'NeuroNibble is a task management app designed specifically for neurodivergent users. Traditional productivity apps assume everyone\'s brain works the same way—they don\'t. This app adapts to how you\'re actually feeling, not how you "should" be feeling.',
      challenge: 'Most task managers are built on shame. Missed deadlines get highlighted in red. Overdue tasks pile up accusingly. For people with ADHD, autism, or other neurodivergent conditions, this approach actively makes things worse. We needed something different.',
      solution: 'NeuroNibble flips the script. Instead of asking "what do you need to do?", it asks "how are you feeling?" Energy levels determine task suggestions. Low energy? Here are small wins. High energy? Let\'s tackle something bigger. No shame, no judgment, just meeting users where they are.',
      features: [
        'Energy-based task routing',
        'Dopamine vending machine (randomized small rewards)',
        'Async body doubling with real-time user count',
        'Gentle notifications that don\'t add stress',
        'Celebration of small wins'
      ],
      techRationale: 'React Native with Expo makes cross-platform development practical. TypeScript catches bugs before they reach users. The focus is on getting a working product into hands quickly—Expo\'s managed workflow handles the complexity of native development.',
      learnings: [
        'Accessibility isn\'t just visual—it\'s cognitive too',
        'The best features come from lived experience',
        'Building for yourself first creates authentic products'
      ],
    },
  },
  {
    id: 'medic138',
    slug: 'medic138',
    name: 'Medic 138',
    tagline: 'Gamified medical education for non-traditional learners',
    description: 'An interactive learning platform that uses gamification and virtual experiences to teach EMS protocols. Built from experience—I know what works in the field.',
    stack: ['React', 'Jekyll', 'JavaScript Canvas'],
    status: 'Live',
    image: {
      src: '/images/medic138/landing_page.png',
      alt: 'Medic 138 landing page',
    },
    highlights: [
      'Interactive ECG waveform visualizations',
      'Protocol-based curriculum structure',
      'Designed for retention under pressure'
    ],
    caseStudy: {
      overview: 'Medic 138 is an educational platform for EMT and paramedic students. It combines my background in emergency medicine with my development skills to create learning experiences that actually stick.',
      challenge: 'Traditional EMS education relies heavily on textbooks and lectures. But when you\'re on a 3am call with a critical patient, you don\'t have time to flip through pages. You need information that\'s been internalized through practice and repetition.',
      solution: 'Medic 138 uses gamification and interactive scenarios to teach protocols. Instead of reading about cardiac rhythms, you interpret them. Instead of memorizing drug dosages, you calculate them under simulated pressure. The learning sticks because it mirrors real-world conditions.',
      features: [
        'Interactive ECG rhythm interpretation',
        'Scenario-based learning modules',
        'Protocol quick-reference cards',
        'Progress tracking and spaced repetition',
        'Mobile-friendly for on-the-go study'
      ],
      techRationale: 'Jekyll handles the static content and curriculum structure efficiently. React powers the interactive components—ECG visualizations, scenario simulations, and quiz modules. JavaScript Canvas renders the waveform animations smoothly.',
      learnings: [
        'Domain expertise + development skills = powerful combination',
        'Gamification works when it serves learning, not replaces it',
        'Medical education is ripe for innovation'
      ],
    },
  },
  {
    id: 'rigready',
    slug: 'rigready',
    name: 'RigReady',
    tagline: 'EMS protocols in your pocket',
    description: 'A native iOS app for EMT and paramedic students to study critical medical information and access protocols in high-pressure field environments.',
    stack: ['Swift', 'SwiftUI', 'Python'],
    status: 'In Development',
    image: {
      src: '/images/placeholder/placeholder.png',
      alt: 'RigReady app preview',
    },
    highlights: [
      'Python script for protocol parsing and categorization',
      'Offline-first for field reliability',
      'Quick reference designed for 3am calls'
    ],
    caseStudy: {
      overview: 'RigReady is a companion app for field EMS providers. It puts protocols, drug references, and quick calculations right in your pocket—accessible even when you\'re in an ambulance with no cell service.',
      challenge: 'EMS providers need instant access to protocols and references. Existing apps are either too slow, require internet, or bury critical information under layers of menus. In an emergency, every second counts.',
      solution: 'RigReady is built offline-first. All protocol data is stored locally after initial download. The interface is designed for one-handed use—because your other hand is probably doing something important. Search is instant, and the most common references are one tap away.',
      features: [
        'Offline protocol access',
        'One-handed interface design',
        'Instant search across all content',
        'Drug dosage calculators',
        'Customizable quick-access shortcuts'
      ],
      techRationale: 'Swift and SwiftUI deliver the native performance iOS users expect. Python handles the backend work—parsing protocol PDFs, categorizing content, and preparing it for the app\'s database. This separation keeps the app fast and the content pipeline maintainable.',
      learnings: [
        'Offline-first changes how you think about data',
        'SwiftUI is powerful but has sharp edges',
        'Cross-functional skills (Python + Swift) multiply effectiveness'
      ],
    },
  },
  {
    id: 'inconveniences',
    slug: 'inconveniences',
    name: "World's Biggest Inconveniences",
    tagline: 'A catalog of everyday annoyances',
    description: 'A playful React project to sharpen component patterns and state management. Sometimes you build serious tools. Sometimes you catalog the little things that drive everyone crazy.',
    stack: ['React', 'Vite'],
    status: 'In Development',
    image: {
      src: '/images/assignments_practice/INCONVENIENCES.png',
      alt: 'Inconveniences catalog landing page',
    },
    highlights: [
      'Practice project for React fundamentals',
      'Component composition patterns',
      'Voting and interaction features planned'
    ],
    caseStudy: {
      overview: 'Not every project needs to change the world. World\'s Biggest Inconveniences is a fun catalog of everyday annoyances—a place to vote on whether a loose doorknob is worse than a slow elevator.',
      challenge: 'I wanted to practice React patterns in a low-stakes environment. Building "serious" projects is valuable, but sometimes you learn more when you\'re not worried about perfection.',
      solution: 'A simple voting app where users can browse, add, and vote on inconveniences. The architecture is intentionally over-engineered for the use case—because the point is to practice patterns I\'d use in larger applications.',
      features: [
        'Browse categorized inconveniences',
        'Upvote/downvote system',
        'Add your own annoyances',
        'Sorting and filtering',
        'Responsive card-based layout'
      ],
      techRationale: 'Vite for instant dev server startup. React with hooks for state management. The goal was to practice—so I implemented patterns like compound components, render props, and custom hooks even where simpler solutions would suffice.',
      learnings: [
        'Practice projects remove the pressure that blocks learning',
        'Over-engineering on purpose teaches you when not to',
        'Side projects keep coding fun'
      ],
    },
  },
];

// ==========================================================================
// Helper Functions
// ==========================================================================

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}

export function getProjectsWithCaseStudies(): Project[] {
  return projects.filter(p => p.caseStudy);
}
