"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = sectionRef.current
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vedant.milind.deshpande@gmail.com",
      href: "mailto:vedant.milind.deshpande@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nashik, Maharashtra, India",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vmdeshpande",
      href: "https://github.com/vmdeshpande",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vedant-devv",
      href: "https://linkedin.com/in/vedant-devv",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 overflow-x-hidden">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Let’s Connect</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            Interested in working together, collaborating on a project, or just having a tech conversation?
            The fastest way to reach me is through email or LinkedIn.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Details */}
          <Card
            className={`overflow-hidden border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "md:-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="mb-6 text-2xl font-semibold">Contact Details</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = (
                  <div className="flex items-start gap-4 rounded-lg p-4 transition-all hover:bg-primary/10">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-1 text-sm font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-base font-medium break-all sm:break-normal">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>
          </Card>

          {/* Availability & CTA */}
          <Card
            className={`overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 p-8 backdrop-blur-sm transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "md:translate-x-10 opacity-0"
            }`}
          >
            <h3 className="mb-4 text-2xl font-semibold">Open for Opportunities</h3>
            <p className="mb-6 leading-relaxed text-foreground">
              I’m open to freelance projects, internships, full-time roles, and collaborations focused on
              full-stack development, AI-powered applications, and workflow automation.
              If you’re building something meaningful, I’d love to hear about it.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="group">
                <a href="mailto:vedant.milind.deshpande@gmail.com">
                  Email Me
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>

              <Button variant="outline" asChild className="group">
                <a
                  href="https://linkedin.com/in/vedant-devv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
