import { Award, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const certifications = [
  {
    title: 'Digital Content Creator Workshop',
    issuer: 'Professional Workshop',
    year: '2025',
    credential: 'Content Creation & Digital Media',
  },
  {
    title: 'Cybersecurity Seminar',
    issuer: 'Cybersecurity Training',
    year: '2024',
    credential: 'Information Security Awareness',
  },
  {
    title: 'TESDA Computer System Servicing NC II',
    issuer: 'TESDA',
    year: '2023',
    credential: 'Computer System Servicing',
  },
  {
    title: 'TESDA Installing and Configuring Computer Systems',
    issuer: 'TESDA',
    year: '2023',
    credential: 'Computer Systems Installation',
  },
  {
    title: 'TESDA Setting Up Computer Networks',
    issuer: 'TESDA',
    year: '2023',
    credential: 'Network Configuration',
  },
  {
    title: 'TESDA Setting Up Computer Servers',
    issuer: 'TESDA',
    year: '2023',
    credential: 'Server Setup',
  },
  {
    title: 'TESDA Maintaining Computer Systems and Networks',
    issuer: 'TESDA',
    year: '2023',
    credential: 'System Maintenance',
  },
  {
    title: 'Unlock the Power of Data Privacy: Cybersecurity in the Workplace',
    issuer: 'Cybersecurity Seminar',
    year: '2023',
    credential: 'Workplace Data Protection',
  },
  {
    title: 'Data Privacy Awareness for Academic Setting',
    issuer: 'Data Privacy Office / Academic Seminar',
    year: '2021',
    credential: 'Data Privacy Fundamentals',
  },
]

export function Certifications() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="certifications" className="py-24 px-6">
      <div
        ref={ref}
        className={cn(
          'max-w-6xl mx-auto opacity-0',
          isVisible && 'animate-slide-up'
        )}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-primary/80 via-foreground to-secondary/70 bg-clip-text text-transparent">Certifications</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={cn(
                'group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1',
                isVisible && 'animate-fade-in'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
              </div>
              
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
              </h3>
              
              <p className="text-sm text-primary font-medium mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground">{cert.credential}</p>
              
              {/* <button className="mt-4 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                <span>View credential</span>
                <ExternalLink size={12} />
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
