import { Briefcase, Calendar } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const experiences = [
    {
    title: 'FREELANCE WEB DESIGNER (REMOTE PROJECTS)',
    company: 'International & Local Clients • USA (California) & Philippines',
    period: 'Jan 2024 - Present',
    responsibilities: [
      'Led development of two U.S.-based websites: a Medical Billing Services platform and a Virtual Assistant productivity site',
      'Designed responsive UI/UX layouts using Figma',
      'Utilized AI-assisted tools for layout concepts, visual ideation, and content optimization',
      'Collaborated with developers to deliver functional, user-centered web solutions',
    ],
    tags: ['UI/UX Design', 'Figma', 'AI Tools', 'Web Design', 'Remote Work'],
  },
  {
    title: 'WEB & DIGITAL CONTENT ASSOCIATE',
    company: 'Most Holy Rosary Multi-Purpose Cooperative • Rizal, Philippines',
    period: 'Jan 2025 - Jan 2026',
    responsibilities: [
      'Managed website updates and ensured mobile responsiveness across platforms',
      'Automated internal reports and email notifications using Google Apps Script',
      'Leveraged AI tools to generate visual concepts, enhance images, and streamline content production',
      'Designed graphics and multimedia materials to strengthen digital presence',
    ],
    tags: ['Web Development', 'Google Workspace', 'AI Tools', 'Content Creation', 'Media', 'Brand Management'],
  },
  {
    title: 'IT JUNIOR DEVELOPER (PROJECT-BASED; ABSORBED AS INTERNAL STAFF)',
    company: 'Most Holy Rosary Multi-Purpose Cooperative • Rizal, Philippines',
    period: 'Feb 2024 - Jan 2025',
    responsibilities: [
      'Developed and maintained web-based administrative systems',
      'Created structured System Analysis and Design documentation',
      'Improved internal workflows through system enhancements and optimization',
      'Worked with technologies including PHP (Laravel), Bootstrap, JavaScript, and MSSQL',
    ],
    tags: ['Laravel', 'PHP', 'Bootstrap', 'MSSQL', 'System Development'],
  },
  {
    title: 'TRADE MARKETING SPECIALIST',
    company: 'Brew Master International Inc. • Pasig City, Philippines',
    period: 'Oct 2023 - Feb 2024',
    responsibilities: [
      'Spearheaded merchandising strategies and promotions as distributor of Asia Brewery Inc. brands',
      'Ensured proper implementation of marketing collaterals across supervised stores',
      'Monitored and guided sales agents to execute promotional activities effectively',
      'Executed trade and consumer promotions to boost engagement and sales',
      'Managed and organized events to enhance brand experience',
    ],
    tags: ['Marketing and Brand Promotion', 'Sales Operations', 'Event Management'],
  },
]

export function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div
        ref={ref}
        className={cn(
          'max-w-6xl mx-auto opacity-0',
          isVisible && 'animate-slide-up'
        )}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-primary/80 via-foreground to-secondary/70 bg-clip-text text-transparent">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={cn(
                'group relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300',
                isVisible && 'animate-fade-in',
                index === 0 && 'delay-100',
                index === 1 && 'delay-200',
                index === 2 && 'delay-300'
              )}
            >
              {/* Timeline indicator */}
              <div className="absolute left-0 top-8 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
