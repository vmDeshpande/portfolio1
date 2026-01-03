"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-40 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          data-cursor="hover"
          className="relative text-2xl font-bold text-primary transition-colors hover:text-primary/80"
        >
          {"<Dev />"}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              data-cursor="hover"
              className="relative rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {/* Hover background (cursor-safe) */}
              <span className="pointer-events-none absolute inset-0 rounded-md bg-primary/10 opacity-0 transition-opacity duration-200 hover:opacity-100" />
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-cursor="hover"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-card/95 backdrop-blur-lg shadow-lg md:hidden">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                data-cursor="hover"
                className="relative rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="pointer-events-none absolute inset-0 rounded-md bg-primary/10 opacity-0 transition-opacity duration-200 hover:opacity-100" />
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
