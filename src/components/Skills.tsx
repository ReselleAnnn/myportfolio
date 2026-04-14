import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const skillCategories = [
  {
    name: 'Web Development',
    color: 'primary',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React JS (Working Knowledge)',
      'Vite',
      'Tailwind CSS',
      'PHP (Laravel)',
      'WordPress',
    ],
  },
  {
    name: 'Automation & Productivity',
    color: 'secondary',
    skills: [
      'Google Apps Script',
      'Google Sheets Automation',
      'Workflow Optimization',
      'Process Automation',
      'Google Workspace',
    ],
  },
  {
    name: 'AI & Content Tools',
    color: 'accent',
    skills: [
      'AI-Assisted Content Creation',
      'Prompt Engineering',
      'AI Image Enhancement',
      'AI Content Generation',
    ],
  },
  {
    name: 'Design & Multimedia',
    color: 'primary',
    skills: [
      'Figma',
      'Canva',
      'Adobe Photoshop (Working Knowledge)',
      'Adobe Premiere Pro (Working Knowledge)',
      'CapCut',
      'Filmora',
      'Social Media Content Creation',
      'Video Editing',
    ],
  },
  {
    name: 'Brand & Business Tools',
    color: 'secondary',
    skills: [
      'Brand Management',
      'Digital Marketing',
      'GitHub',
      'Vercel Deployment',
      'Web Hosting Management',
      'Google Workspace',
      'Microsoft Office',
    ],
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/30',
    hover: 'hover:bg-primary/20 hover:border-primary/50',
  },
  secondary: {
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    border: 'border-secondary/30',
    hover: 'hover:bg-secondary/20 hover:border-secondary/50',
  },
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    border: 'border-accent/30',
    hover: 'hover:bg-accent/20 hover:border-accent/50',
  },
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="py-24 px-6">
      <div
        ref={ref}
        className={cn(
          'max-w-6xl mx-auto opacity-0',
          isVisible && 'animate-slide-up'
        )}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-primary/80 via-foreground to-secondary/70 bg-clip-text text-transparent">Skills</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses]
            return (
              <div
                key={category.name}
                className={cn(
                  'p-6 rounded-xl bg-card border border-border',
                  isVisible && 'animate-fade-in',
                  categoryIndex === 0 && 'delay-100',
                  categoryIndex === 1 && 'delay-200',
                  categoryIndex === 2 && 'delay-300',
                  categoryIndex === 3 && 'delay-400',
                  categoryIndex === 4 && 'delay-500'
                )}
              >
                <h3 className={cn('text-lg font-semibold mb-4', colors.text)}>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        'px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 cursor-default',
                        colors.bg,
                        colors.text,
                        colors.border,
                        colors.hover
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
