import Navigation from '@/components/Navigation';
import ImageCarousel from '@/components/ImageCarousel';
import Image from 'next/image';


export default function ProjectsPage() {

  const projects = [
    {
      id: 1,
      name: 'Personal Portfolio | System Reboot',
      stack: 'Next.js • React',
      status: 'Live',
      summary:
        'This portfolio: a narrative “system reboot” theme showcasing my career transition journey.',
      images: [
            {
              src: '/images/portfolio/portfolio.png',
              alt: 'landing page of portfolio website',
              caption: 'Iterating the Terminal-style landing page',
            },
            {
              src: '/images/portfolio/portfolio-blog.png',
              alt: 'grid layout of blog posts',
              caption: 'Iterating the Blog layout',
            },
            {
              src: '/images/portfolio/portfolio-project.png',
              alt: 'button and header display for medic 138 website ',
              caption: 'Iterating the display of projects',
            },
    ],
      changelog: {
        notes: 'Initial release with hero terminal, projects, stories, and contact pages.',
        src: '#',
      },
      
    },
    
    
    {
      id: 2,
      name: 'World’s Biggest Inconveniences',
      stack: 'React • Vite',
      status: 'In progress',
      summary:
        'A playful, interactive catalog of everyday annoyances, built to practice React and component patterns.',
       images: [
            {
              src: '/images/assignments_practice/INCONVENIENCES.png',
              alt: 'landing page of inconveniences website',
              caption: 'Personal project to get more hands-on practice with React',
            },
        ],
      changelog: {
        notes: 'Core list rendering done; interactions and voting planned next.',
        src: '#',
      },
    },


    {
      id: 3,
      name: 'NeuroNibble: Compassion-First Productivity & Task Manager',
      stack: 'React Native • TypeScript',
      status: 'In progress',
      summary:
        'This portfolio: a narrative “system reboot” theme showcasing my journey from paramedic to developer.',
      images: [
        {
          src: '/images/neuro_nibble/NeuroNibbleOnboardingScreen.png',
          alt: 'application onboarding screen',
          caption: 'Onboarding screen',
        },
        {
          src: '/images/neuro_nibble/NeuroNibbleHome.png',
          alt: 'mobile app home screen',
          caption: 'mobile application home screen UI',
        },
        {
          src: '/images/neuro_nibble/counter.PNG',
          alt: 'users online counter on home tab',
          caption: 'Counter view on home tab for async body doubling',
        },
        {
          src: '/images/neuro_nibble/userEnergyCheckInForEnergyRouting.png',
          alt: 'UI of user being prompted for energy level check-in',
          caption: 'User check-in for energy routing UI',
        },
        {
          src: '/images/neuro_nibble/dopaminevendingmachine.jpg',
          alt: 'Dopamine Menu made into a vending machine UI',
          caption: 'User check-in for energy routing UI',
        },
        {
          src: '/images/neuro_nibble/dopaminevendingmachine_dispensing.jpg',
          alt: 'Screenshot of Dopamine Vending Machine Animation',
          caption: 'The user can add rewards to the vending machine and the app randomizes the choice',
        },
        {
          src: '/images/neuro_nibble/dopaminevendingmachine_dispensed_reward.jpg',
          alt: 'Screenshot of vending machine dispensing the reward',
          caption: 'UI display after reward is dispensed to the user',
        },
        {
          src: '/images/neuro_nibble/NeuroNibbleEndOfDayScreen.png',
          alt: 'Button display for user to end their day on the home tab',
          caption: 'User can end their day from the home tab, reflect on completed tasks, and answer a prompt for one final energy check-in',
        },
    ],
      changelog: {
        notes: 'Bug fixes in DopamineVendingMachine component UI',
        src: '#',
      },
    },


    {
      id: 4,
      name: 'RigReady: Rapid Recall EMS Study & Protocols',
      stack: 'Swift • SwiftUI',
      status: 'In progress',
      summary:
        'A native iOS app for EMT and paramedic students to study critical medical information and access protocols in high-pressure field environments on-the-go.',
      images: [
            {
              src: '/images/placeholder/placeholder.png',
              alt: 'placeholder image',
              caption: 'Coming soon',
            },
        ],
      changelog: {
        notes: 'Python script created to parse through protocol text, tables, and images for protocol categorization',
        src: '#',
      },
    },


    {
      id: 5,
      name: 'Medic 138',
      stack: 'React • Jekyll',
      status: 'Live',
      summary:
        'Interactive learning platform that uses gamification and virtual experiences to teach medical educational materials for the non-traditional learner',
      images: [
            {
              src: '/images/medic138/landing_page.png',
              alt: 'Medic 138 landing page',
              caption: 'Landing page',
            },
            {
              src: '/images/medic138/lessons_page.png',
              alt: 'course library',
              caption: 'Creating a course library page',
            },
            {
              src: '/images/medic138/lesson+page.png',
              alt: 'individual lesson page',
              caption: 'Designing the interactive lesson page layout',
            },
            {
              src: '/images/medic138/resources_page.png',
              alt: 'medic 138 resources page',
              caption: 'Building a reference and resource library',
            },
            {
              src: '/images/medic138/custom404.png',
              alt: '404 Error Page for Medic 138 website',
              caption: 'Custom 404 page',
            },
      ],
      changelog: {
        notes: 'Implemented JavaScript canvas to draw ECG wave forms for the 12-lead rhythm interpretation component; Future goals: Backend development and integration',
        src: '#',
      },
    },
  
  ];

  return (
    <>
      <Navigation />

      <main className='page'>

        <section className='sectionNarrow'>

          <h1 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem', marginLeft: '1rem' }}>Projects</h1> 

          <p style={{marginLeft:'1rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
            A growing collection of experiments, learning projects, and storytelling interfaces.
          </p>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {projects.map((project) => (
              <article key={project.id} className="card"> 
                {project.images && project.images.length > 0 && (
                  <div style={{ marginBottom: '1rem', display: 'grid', gap: '0.75rem' }}>
                    {project.images.map((img, index) => (
                      <div key={index}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={500}
                          height={500}
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
                          {img.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <h2 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                  {project.name}
                </h2>

                <div
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {project.stack} • {project.status}
                </div>

                <p style={{ marginBottom: '0.75rem' }}>{project.summary}</p>

                <p
                  style={{
                    margin: 0,
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {project.changelog.notes}
                  <a href={project.changelog.src}> Read More... </a>
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}