import { ArrowDown, Facebook, Linkedin, Briefcase, Github} from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  const handleContactClick = () => {
    window.location.href = 'mailto:reselledugayo08@gmail.com'
  }

  const handleViewWorkClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className={cn(
          'relative max-w-4xl mx-auto text-center opacity-0',
          isVisible && 'animate-fade-in'
        )}
      >
       
        {/* IMAGE TOP */}
          <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border border-border bg-card mb-5">
            <img
              src="/icon_image.jpg"
              alt="Reselle Dugayo"
              className="w-full h-full object-cover"
            />
          </div>

        {/* Name */}
        <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] pb-1 mb-3">
          <span className="text-white">Hi I'm </span>
          <span className="bg-gradient-to-r from-primary/80 via-foreground to-secondary/70 bg-clip-text text-transparent">
            Reselle Dugayo
          </span>
        </h1>

        {/* Status Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-4">
          <span className="w-2 h-2 bg-accent rounded-full animate-glow" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div> */}

        {/* Role */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
          <span className="text-primary">Web Developer & UI/UX Designer </span>
          <span className="mx-2 text-border">|</span>
          <span className="text-secondary">Workflow System Automation </span>
          <span className="mx-2 text-border">|</span>
          <span className="text-accent block sm:inline">
            AI & Digital Content Creator
          </span>
        </p>


        {/* Tagline + Introduction */}
        <p className="text-base md:text-lg text-muted-foreground/80 mb-6 max-w-2xl mx-auto leading-relaxed text-pretty">
          Building efficient, intelligent, and user-centered digital systems. 
          I craft modern web experiences and automate workflows to help businesses scale efficiently. 
          Passionate about merging technology with creativity.
        </p>

        {/* Tagline */}
        {/* <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Building efficient, intelligent, and user-centered digital systems.
        </p> */}

        {/* Introduction */}
        {/* <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft modern web experiences and automate workflows to help businesses 
          scale efficiently. Passionate about merging technology with creativity.
        </p> */}

       {/* CTAs */}
        <div className="flex items-center justify-center gap-4">
        <a href="https://www.facebook.com/elledugayo/" target="_blank"
          className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all hover:scale-105">
          <Facebook className="w-5 h-5 text-primary" />
        </a>

        <a href="www.linkedin.com/in/reselle-dugayo-947271261" target="_blank"
          className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all hover:scale-105">
          <Linkedin className="w-5 h-5 text-primary" />
        </a>

        {/* <a href="https://indeed.com" target="_blank"
          className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all hover:scale-105">
          <Briefcase className="w-5 h-5 text-primary" />
        </a> */}

        <a
          href="https://github.com/ReselleAnnn"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all hover:scale-105"
        >
          <Github className="w-5 h-5 text-primary" />
        </a>

      </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
          </div>
        </div> */}
      </div>
    </section>
  )
}
