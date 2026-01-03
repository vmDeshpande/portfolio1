"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Full-Stack Web Development Intern",
      company: "Unified Mentory",
      period: "2024",
      description:
        "Worked as a full-stack web development intern, building and improving real-world web applications with a strong focus on functionality, UI, and scalability.",
      achievements: [
        "Built multiple complete web applications including expense trackers, music players, weather apps, and EV recharge systems",
        "Developed backend services using Node.js and MongoDB with authentication and data validation",
        "Collaborated on a Digital E-Gram Panchayat project, extending schemas and improving service workflows",
      ],
    },
    {
      title: "UI / UX Design Intern",
      company: "Design & Web Projects",
      period: "2023 - 2024",
      description:
        "Focused on designing and implementing modern, user-friendly interfaces with smooth animations and responsive layouts.",
      achievements: [
        "Designed and developed visually rich business websites with animations and responsive layouts",
        "Worked extensively with Tailwind CSS to create clean, reusable UI components",
        "Improved user experience by simplifying layouts and enhancing interaction feedback",
      ],
    },
    {
      title: "Independent Projects & Open Source",
      company: "Self-Directed",
      period: "Ongoing",
      description:
        "Continuously building personal and open-source projects to deepen skills across full-stack development, AI, and automation.",
      achievements: [
        "Built an open-source AI Agent Workflow Automation platform focused on task orchestration and intelligent agents",
        "Developed a stock market analysis tool with real-time data visualization",
        "Created a LinkedIn-style job platform with user and company dashboards",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Experience</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            A hands-on journey through internships, real-world projects, and
            continuous learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                    ? "-translate-x-10 opacity-0"
                    : "translate-x-10 opacity-0"
                } ${
                  index % 2 === 0
                    ? "md:pr-[calc(50%+2rem)]"
                    : "md:pl-[calc(50%+2rem)]"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="
    absolute top-6 left-8 -translate-x-1/2
    h-4 w-4 rounded-full
    border-4 border-background bg-primary
    md:left-1/2
  "
                />

                <Card className="group ml-16 border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20 md:ml-0">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="mb-1 text-xl font-semibold transition-colors group-hover:text-primary">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-foreground">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
