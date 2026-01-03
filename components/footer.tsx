export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Vedant Deshpande · Full-Stack Developer & AI Engineer
          </p>

          {/* Center / Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </a>
          </div>

          {/* Right */}
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Built with Next.js, Tailwind CSS & a lot of curiosity.
          </p>
        </div>
      </div>
    </footer>
  )
}
