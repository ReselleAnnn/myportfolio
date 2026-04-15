import { useState } from 'react'
import {
  Code2,
  Palette,
  Video,
  Camera,
  Workflow,
  Sparkles,
} from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

/* =========================
   HELPER FUNCTIONS
========================= */
const getYouTubeThumbnail = (url: string): string | null => {
  if (!url.includes('youtube') && !url.includes('youtu.be')) return null;

  let videoId = null;

  if (url.includes('/shorts/')) {
    videoId = url.split('/shorts/')[1].split('?')[0];
  } else if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  }

  if (!videoId) return null;

  // I-return ang Max Resolution thumbnail. 
  // Kung wala nito ang video, fallback into medium res (mqdefault.jpg).
  return `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
}

/* =========================
   TYPES
========================= */
type Project = {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  icon: any
  gradient: string
   image?: string        
  video?: string        
}

/* =========================
   CATEGORIES
========================= */
const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-uiux', label: 'Web & UI/UX' },
  { id: 'video', label: 'Video & Motion' },
  { id: 'photo', label: 'Photo & Graphic Design' },
  { id: 'ai', label: 'AI Content & Creative Systems' },
  { id: 'automation', label: 'Workflow Automation' },
]

const projects: Project[] = [
  {
    id: 1,
    title: 'Koop Web',
    description:
      'Responsive cooperative e-commerce website with streamlined purchasing flow and user-friendly interface.',
    category: 'web-uiux',
    tags: ['Laravel', 'Bootstrap', 'E-commerce UI'],
    icon: Code2,
    gradient: 'from-primary/20 to-secondary/20',
    image: '/KoopWeb.png'
  },
  {
    id: 2,
    title: '24-7 Web',
    description:
      'Corporate website redesign focused on modern UI, improved navigation, and better user engagement.',
    category: 'web-uiux',
    tags: ['Laravel', 'Bootstrap', 'Web Redesign'],
    icon: Code2,
    gradient: 'from-primary/20 to-secondary/20',
    image: '/247Web.png'
  },
  {
    id: 3,
    title: 'ACP Web',
    description:
      'Dashboard interface design for data visualization with structured layout and intuitive user flow.',
    category: 'web-uiux',
    tags: ['Figma', 'UI/UX Design', 'Dashboard'],
    icon: Palette,
    gradient: 'from-secondary/20 to-accent/20',
    image: '/ACPWeb.png'
  },

  {
    id: 4,
    title: 'MHRMPC Sustainable Development Goals',
    description:
      'Promotional video highlighting sustainability initiatives aligned with SDG awareness campaigns.',
    category: 'video',
    tags: ['Video Editing', 'Motion Graphics', 'Campaign Video'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtu.be/M_qhUbpXwTY'
  },
  {
    id: 5,
    title: 'MHRMPC Annual Physical Examination - Ads',
    description:
      'Announcement video promoting annual physical examination services for members.',
    category: 'video',
    tags: ['CapCut', 'Promo Video', 'Social Media'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtube.com/shorts/il3gtXpLlEs?feature=share'
  },
  {
    id: 6,
    title: 'MHRMPC Cooperative Month - Highlights',
    description:
      'Event highlights video showcasing key moments during Cooperative Month celebration.',
    category: 'video',
    tags: ['Event Highlights', 'CapCut', 'Storytelling'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtu.be/M_GCM5tk9nU'
  },
  {
    id: 7,
    title: 'MHRMPC Moving Logo',
    description:
      'Animated logo presentation used for branding and video intros.',
    category: 'video',
    tags: ['Logo Animation', 'Motion Graphics'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtu.be/bjwLlz0xFQE'
  },
  {
    id: 9,
    title: 'MHRMPC Prayer - My Saving Grace',
    description:
      'Faith-based video content featuring prayer and reflective visuals.',
    category: 'video',
    tags: ['Video Editing', 'Inspirational Content'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtu.be/j0I5RC4flYg'
  },
  {
    id: 10,
    title: 'MHRMPC Prayer - We See You Lord',
    description:
      'Spiritual video content combining worship themes with visual storytelling.',
    category: 'video',
    tags: ['Inspirational Video', 'Editing'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtu.be/LB8qzQkctOs'
  },
  {
    id: 11,
    title: 'MHRMPC 2025 Highlights',
    description:
      'Year-end highlights showcasing major events and milestones of the organization.',
    category: 'video',
    tags: ['Highlights Video', 'Recap'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtu.be/sQRi03NHXOE'
  },
  {
    id: 12,
    title: 'MHRMPC Gawad Rosas Highlights',
    description:
      'Event recap video capturing key moments from the Gawad Rosas ceremony.',
    category: 'video',
    tags: ['Event Video', 'Highlights'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtu.be/LAh_hRJUtmo'
  },
  {
    id: 13,
    title: 'MHRMPC VAWC Highlights',
    description:
      'Awareness video highlighting activities for VAWC campaign initiatives.',
    category: 'video',
    tags: ['Awareness Campaign', 'Highlights'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtube.com/shorts/vAM0Ji717wk?feature=share'
  },
  {
    id: 14,
    title: 'MHRMPC 40 Years - Motion Title Card',
    description:
      'Animated title card created for the organization’s 40th anniversary celebration.',
    category: 'video',
    tags: ['Motion Graphics', 'Title Animation'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtu.be/QzyL4J0rWUk'
  },
  {
    id: 15,
    title: 'MHRMPC GA2025 Highlights',
    description:
      'Quick highlight reel from the General Assembly 2025 event.',
    category: 'video',
    tags: ['Event Highlights', 'Recap'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtube.com/shorts/GDJb4-O3LVQ?feature=share'
  },
  {
    id: 16,
    title: 'SAFELAB GA2025 Highlights',
    description:
      'Event highlight video for SAFELAB during the 2025 General Assembly.',
    category: 'video',
    tags: ['Event Coverage', 'Highlights'],
    icon: Video,
    gradient: 'from-accent/20 to-primary/20',
    video: 'https://youtube.com/shorts/L8YWab9pSHw?feature=share'
  },
  {
    id: 17,
    title: 'MHRMPC Annual Physical Examination - GIF',
    description:
      'Animated promotional GIF for digital campaigns and announcements.',
    category: 'photo',
    tags: ['GIF Animation', 'Digital Ads'],
    icon: Camera,
    gradient: 'from-primary/20 to-accent/20',
    video: 'https://youtube.com/shorts/jjWSzOQIG8M?feature=share'
  },
  {
    id: 18,
    title: 'Bukal Magazine Back Cover Ad',
    description:
      'Back cover advertisement design for Bukal Magazine promoting cooperative services.',
    category: 'photo',
    tags: ['Graphic Design', 'Print Ad'],
    icon: Camera,
    gradient: 'from-primary/20 to-accent/20',
    image: '/Your Gateway to Smarter Cooperative Services.png'
  },
  {
    id: 19,
    title: 'Koop Web Banners',
    description:
      'Hero banners designed for website landing pages and promotions.',
    category: 'photo',
    tags: ['Web Banners', 'UI Design'],
    icon: Camera,
    gradient: 'from-primary/20 to-accent/20',
    image: '/web hero banners.png'
  },
  {
    id: 20,
    title: 'Koop Konek - WiFi Portal',
    description:
      'Login portal interface design for WiFi access with branding integration.',
    category: 'photo',
    tags: ['UI Design', 'Portal Design'],
    icon: Camera,
    gradient: 'from-primary/20 to-accent/20',
    image: '/wifi portal.png'
  },

  {
    id: 21,
    title: 'AI Content - Moving Rayo',
    description:
      'AI-assisted animated character content for digital storytelling.',
    category: 'ai',
    tags: ['AI Content', 'Animation'],
    icon: Sparkles,
    gradient: 'from-accent/20 to-secondary/20',
    video: 'https://youtu.be/sUspCcTjjaM'
  },
  {
    id: 22,
    title: 'AI Content - Rayo and Rosa',
    description:
      'AI-generated character visuals for branding and creative storytelling.',
    category: 'ai',
    tags: ['AI Images', 'Creative Design'],
    icon: Sparkles,
    gradient: 'from-accent/20 to-secondary/20',
    image: '/rayo and rosa.png'
  },
  {
    id: 23,
    title: 'AI Content - MHRMPC Souvenir Mockups',
    description:
      'AI-generated mockups for souvenir concepts and promotional materials.',
    category: 'ai',
    tags: ['Mockups', 'AI Design'],
    icon: Sparkles,
    gradient: 'from-accent/20 to-secondary/20',
    image: '/mhrmpc mockups.png'
  },

  {
    id: 24,
    title: 'Workflow Automation - Job Request Form',
    description:
      'Automated job request system using Google Workspace for streamlined task management.',
    category: 'automation',
    tags: ['Google Apps Script', 'Automation', 'Workflow System'],
    icon: Workflow,
    gradient: 'from-secondary/20 to-primary/20',
    image: '/Job Request Form- Using Google Workspace and Automation.jpg'
  },
]

/* =========================
   COMPONENT
========================= */
export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  // IDAGDAG ITO:
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div
        ref={ref}
        className={cn(
          'max-w-6xl mx-auto opacity-0',
          isVisible && 'animate-slide-up'
        )}
      >
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-primary/80 via-foreground to-secondary/70 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <p className="text-muted-foreground mb-8 whitespace-nowrap">
          A showcase of my work across web development, design, automation, and AI-assisted projects.
        </p>

        {/* FILTER */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'px-4 py-2 text-sm rounded-lg transition',
                activeCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-card border border-border text-muted-foreground'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              // Kuhanin ang YouTube thumbnail kung YT video ito
              const youtubeThumbnail = project.video ? getYouTubeThumbnail(project.video) : null;
              const isThisCardHovered = hoveredCard === project.id;

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  // IDAGDAG ITONG DALAWANG LINE:
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="cursor-pointer group rounded-xl border border-border bg-card hover:border-primary transition-all duration-200 hover:-translate-y-1 active:scale-[0.98]"
                >
                  <div
                    className={cn(
                      'h-48 overflow-hidden bg-gradient-to-br relative flex items-center justify-center',
                      project.gradient
                    )}
                  >
                    {project.video ? (
                      youtubeThumbnail ? (
                        /* CASE: YOUTUBE VIDEO */
                        <>
                          <img
                            src={youtubeThumbnail}
                            alt={project.title}
                            className={cn(
                              "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                              isThisCardHovered && 'opacity-0' 
                            )}
                          />
                          {isThisCardHovered && (
                            <iframe
                              src={project.video
                                .replace('youtu.be/', 'www.youtube.com/embed/')
                                .replace('watch?v=', 'embed/')
                                .replace('/shorts/', '/embed/') + '?autoplay=1&mute=1&controls=0&modestbranding=1'}
                              className="absolute inset-0 w-full h-full pointer-events-none"
                              allow="autoplay; encrypted-media"
                            />
                          )}
                        </>
                      ) : (
                        /* CASE: LOCAL VIDEO (.mp4) */
                        <video
                          src={project.video}
                          className="w-full h-full object-cover"
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      )
                    ) : project.image ? (
                      /* CASE: STATIC IMAGE */
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <project.icon className="w-14 h-14 text-muted-foreground group-hover:text-primary transition" />
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      

      
     {/* MODAL */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card w-[95%] max-w-lg max-h-[80vh] overflow-y-auto rounded-xl p-5 md:p-6 relative border border-border animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground text-xl"
              >
                ✕
              </button>

              {/* CONTENT */}
              <h2 className="text-2xl font-bold mb-3">
                {selectedProject.title}
              </h2>

              <p className="text-muted-foreground mb-4">
                {selectedProject.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-background rounded text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

             {/* IMAGE / VIDEO HERO SECTION */}
              {selectedProject.image && (
                <div className="w-full mb-4 rounded-lg overflow-auto bg-black/5 max-h-[65vh]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto"
                  />
                </div>
              )}

                {selectedProject.video && (
                selectedProject.video.includes('youtube') || selectedProject.video.includes('youtu.be') ? (
                  <iframe
                    src={
                      selectedProject.video
                        .replace('youtu.be/', 'www.youtube.com/embed/')
                        .replace('watch?v=', 'embed/')
                        .replace('/shorts/', '/embed/') // Ito ang pinaka-importante para sa Shorts!
                        .split('?')[0] // Para malinis ang URL
                    }
                    className="w-full aspect-video rounded-lg" // Gumamit ng aspect-video para sa tamang scaling
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  /* CASE: LOCAL VIDEO (.mp4) */
                  <video
                    src={selectedProject.video}
                    className="w-full max-h-[60vh] object-contain rounded-lg bg-black" // Binago natin sa object-contain para makita ang buong frame
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto" // Binago natin sa "auto" para pilitin si Vercel na i-download ang video stream
                    onClick={(e) => {
                      e.stopPropagation(); // Pinaka-importante: Para hindi mag-close ang modal pag-click sa video
                    }}
                  />
                )
              )}
            </div>
          </div>
        )}
    </section>
  )
}