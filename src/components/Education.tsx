import { GraduationCap, Award } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export function Education() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="education" className="py-24 px-6 bg-card/30">
      <div
        ref={ref}
        className={cn(
          'max-w-6xl mx-auto opacity-0',
          isVisible && 'animate-slide-up'
        )}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-primary/80 via-foreground to-secondary/70 bg-clip-text text-transparent">Education</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Education Card */}
        <div className="w-full">
          <div className="relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-t-xl" />
            
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Bachelor of Science in Information Technology
                </h3>

                <p className="text-sm text-muted-foreground mb-2">
                  Pamantasan ng Lungsod ng Marikina • Philippines
                </p>
                
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-accent font-semibold">Cum Laude</span>
                </div>
                
               <div className="mb-4">
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Award className="w-4 h-4" />
                  <span>2023 Best in Thesis – Web Application Development</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Restoration and Repair Scheduling System with SMS Notification for BOS Shoes and Bag Repair (PHP)
                </p>
              </div>
                <p className="text-muted-foreground leading-relaxed">
                  Graduated with honors, demonstrating excellence in technical coursework 
                  including web development, database management, and software engineering. 
                  Active participation in IT projects and academic research.
                </p>
              </div>
            </div>
          </div>
        </div>

 {/* Education Card */}
        <div className="w-full mt-8">
          <div className="relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-t-xl" />
            
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Junior and Senior High School
                </h3>
                
                <p className="text-sm text-muted-foreground mb-2">
                  National Christian Life College • Philippines
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-accent font-semibold">With Honors</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Developed and designed websites and systems from high school through college, 
                  building a strong foundation in web development and demonstrating continuous 
                  passion for learning and growth.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
      
    </section>
  )
}
