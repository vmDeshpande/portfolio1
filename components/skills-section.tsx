"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = sectionRef.current
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "REST APIs",
      ],
    },
    {
      category: "AI, Data & Tools",
      skills: [
        "AI Agent Integration",
        "Machine Learning (Python)",
        "Data Analysis & Visualization",
        "Git & GitHub",
        "API Design",
        "System Design Basics",
      ],
    },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Tailwind CSS",
    "Python",
    "Machine Learning",
    "Git",
    "REST APIs",
    "Vercel",
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-secondary/20 py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          className={`mb-14 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Skills & Tech Stack
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            Tools and technologies I use to build scalable web applications,
            AI-powered systems, and clean user experiences.
          </p>
        </div>

        {/* Skill categories */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-1000 hover:border-primary hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="mb-4 text-xl font-semibold text-primary">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Tech stack cloud */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="mb-6 text-center text-2xl font-semibold">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
