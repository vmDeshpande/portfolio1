"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient-shift" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float-delayed" />

      <div className="container relative z-10 mx-auto px-4 py-20 lg:px-8">
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Availability badge */}
          <div className="mb-10 inline-flex opacity-80 items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            Available for opportunities
          </div>

          {/* Headline */}
          <h1 className="mb-8 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Building Modern Web
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-text">
              Experiences & AI Systems
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-12 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            I’m a full-stack developer focused on crafting scalable web applications, intuitive user experiences,
            and AI-powered automation systems using React, Next.js, and Node.js.
          </p>

          {/* CTA buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
            <Button onClick={scrollToContact} size="lg" className="group">
              Let’s Talk
              <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              onClick={scrollToProjects}
              size="lg"
              variant="outline"
              className="group bg-transparent"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>

          {/* Social links */}
          <div className="mt-16 flex items-center gap-6 opacity-80">
            <a
              href="https://github.com/vmdeshpande"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/vedant-devv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:vedant.milind.deshpande@gmail.com"
              target="_blank"
              className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
