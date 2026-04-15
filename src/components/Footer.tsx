import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:reselledugayo08@gmail.com', label: 'Email' },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#hero')
              }}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Reselle Dugayo
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Web Developer & Digital Creator
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5 flex-wrap text-center max-w-[300px] sm:max-w-none">
              &copy; {currentYear} Reselle Dugayo. All rights reserved.
            </p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5 flex-wrap text-center max-w-[300px] sm:max-w-none">
                <span>Built with</span>
                <Heart size={14} className="text-primary fill-primary" />
                <span>using</span>
                <span className="font-medium text-foreground">React</span>
                <span>+</span>
                <span className="font-medium text-foreground">Vite</span>
                <span>&</span>
                <span className="font-medium text-foreground">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
