import { Code2, Sparkles, Workflow, Palette } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const highlights = [
  {
    icon: Code2,
    label: 'Web Development',
    description: 'Modern, responsive websites',
  },
  {
    icon: Workflow,
    label: 'Automation',
    description: 'Streamlined workflows',
  },
  {
    icon: Sparkles,
    label: 'AI Integration',
    description: 'Smart digital solutions',
  },
  {
    icon: Palette,
    label: 'UI/UX Design',
    description: 'User-centered interfaces',
  },
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={cn(
          'max-w-6xl mx-auto opacity-0',
          isVisible && 'animate-slide-up'
        )}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-primary/80 via-foreground to-secondary/70 bg-clip-text text-transparent">About</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Results-driven IT professional with experience in web development, 
              workflow automation, and AI-assisted content creation. Skilled in 
              building systems, automating workflows using Google Workspace tools, 
              and enhancing digital marketing and brand content.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I bring a unique combination of technical expertise and creative 
              problem-solving to every project. My approach focuses on delivering 
              solutions that are not just functional, but also intuitive and 
              scalable.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {"Let's work together"}
                <span className="text-lg">&rarr;</span>
              </a>
            </div>
          </div>

            {/* Highlight Cards - Mananatiling grid-cols-2 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    /* Binawasan ang padding sa mobile (p-4) vs desktop (md:p-6) */
                    'group p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1',
                    isVisible && 'animate-fade-in',
                    index === 0 && 'delay-100',
                    index === 1 && 'delay-200',
                    index === 2 && 'delay-300',
                    index === 3 && 'delay-400'
                  )}
                >
                  {/* Liitan ang icon sa mobile */}
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                  
                  {/* Responsive font size: text-sm sa mobile, text-base sa desktop */}
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 leading-tight break-words">
                    {item.label}
                  </h3>
                  
                  {/* Liitan ang description sa mobile */}
                  <p className="text-[10px] md:text-sm text-muted-foreground leading-snug">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
