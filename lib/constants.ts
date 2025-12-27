// 
// Site Constants
// 

export const SITE_CONFIG = {
  name: 'Bree',
  title: 'Bree — Developer',
  description: 'Frontend Developer. I build practical software with attention to structure, clarity, and real-world use.',
  url: 'https://breeintech.com',
  email: 'connect@breeintech.com',
  location: 'Las Vegas',
};

// 
// Social Links
// 

export const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/bree-jeune',
    label: 'GitHub',
    handle: 'bree-jeune',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/ebonne-young/',
    label: 'LinkedIn',
    handle: 'Bree (Ebonne Young)',
  },
  twitter: {
    url: 'https://twitter.com/BreeInTech',
    label: 'X / Twitter',
    handle: '@BreeInTech',
  },
  instagram: {
    url: 'https://instagram.com/BreeInTech',
    label: 'Instagram',
    handle: '@BreeInTech',
  },
  email: {
    url: 'mailto:connect@breeintech.com',
    label: 'Email',
    handle: 'connect@breeintech.com',
  },
} as const;

// 
// Navigation
// 

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/stories', label: 'Labs' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

// 
// Skills
// 

export const SKILLS = {
  frontend: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'REST APIs'],
  tools: ['Git', 'Chrome Extensions', 'Figma', 'VS Code'],
} as const;

// 
// Animation Timings (in ms)
// 

export const ANIMATION = {
  glitchInterval: 5000,
  glitchDuration: 150,
  typewriterSpeed: 80,
} as const;
