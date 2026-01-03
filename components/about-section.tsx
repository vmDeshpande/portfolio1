"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Database, Sparkles, Zap } from "lucide-react"

export function AboutSection() {
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

  const highlights = [
    {
      icon: Code2,
      title: "Modern Full-Stack Development",
      description:
        "Building clean, scalable, and performant web applications using React, Next.js, and TypeScript with a strong focus on UI/UX.",
    },
    {
      icon: Database,
      title: "Backend & Data Systems",
      description:
        "Designing reliable backends with Node.js, MongoDB, Firebase, and SQL databases, focusing on security and scalability.",
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description:
        "Developing AI-powered systems, agent workflows, and automation tools that solve real-world problems efficiently.",
    },
    {
      icon: Zap,
      title: "Performance & Quality",
      description:
        "Obsessed with performance, smooth interactions, clean architecture, and delivering a polished user experience.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">About Me</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            A full-stack developer focused on building modern web experiences and intelligent,
            automation-driven systems.
          </p>
        </div>

        {/* Main About Card */}
        <div className="mb-16">
          <Card
            className={`border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-lg leading-relaxed text-foreground">
              I’m a full-stack developer and programmer with hands-on experience building real-world
              applications using React, Next.js, JavaScript, Node.js, MongoDB, and Firebase. Over time,
              I’ve worked on projects ranging from data-driven platforms and job portals to animated
              business websites and secure document-management systems.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-foreground">
              Recently, my focus has shifted toward{" "}
              <strong className="font-semibold text-foreground">
                AI-powered applications and automation
              </strong>
              . I’m actively building an open-source AI Agent Workflow Automation platform that explores
              how intelligent agents can coordinate tasks, automate workflows, and improve developer
              productivity.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-foreground">
              I enjoy working at the intersection of{" "}
              <strong className="font-semibold text-foreground">
                engineering, design, and intelligence
              </strong>{" "}
              — crafting applications that not only look good, but are scalable, efficient, and
              thoughtfully engineered from the ground up.
            </p>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card
                key={index}
                className={`group border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-1000 hover:border-primary hover:shadow-lg hover:shadow-primary/20 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {highlight.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
