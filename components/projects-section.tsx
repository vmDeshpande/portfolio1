"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export function ProjectsSection() {
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

    const element = sectionRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: "AI Agent Workflow Automation",
      description:
        "An open-source platform for designing and orchestrating AI agents using modular, event-driven workflows, focused on automation and task coordination.",
      image: "/ai-agent-workflow-automation-platform.jpg",
      tags: ["React", "Node.js", "TypeScript", "AI Agents", "Automation"],
      github: "https://github.com/vmDeshpande/ai-agent-automation",
      Demo: "https://vmdeshpande.github.io/ai-automation-platform-website/",
      featured: true,
    },
    {
      title: "Secure & Share Government Documents",
      description:
        "A secure web application for storing and sharing government documents with family members, featuring authentication, access control, and activity logging.",
      image: "/secure-and-share-government-documents.jpg",
      tags: ["Node.js", "MongoDB", "Firebase", "Security"],
      github:
        "https://github.com/vmDeshpande/Secure-and-Share-Government-Documents",
      Demo: "",
      featured: false,
    },
    {
      title: "Environmental Data Analysis",
      description:
        "A data analysis project focused on exploring and visualizing environmental datasets to identify trends and insights using Python.",
      image: "/environment-data-analysis.jpg",
      tags: ["Python", "Data Analysis", "Visualization"],
      github: "https://github.com/vmDeshpande/ENVIRONMENT_DATA_ANALYSIS",
      Demo: "",
      featured: false,
    },
    {
      title: "Harmful URL Detector",
      description:
        "A machine learning-based system that identifies potentially harmful or malicious URLs by analyzing patterns and extracted features.",
      image: "/harmful-url-detector.jpg",
      tags: ["Python", "Machine Learning", "Cybersecurity"],
      github: "https://github.com/vmDeshpande/HarmfulURLDetector",
      Demo: "",
      featured: false,
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Projects</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            A selection of projects where I explored full-stack development, AI
            automation, and real-world problem solving.
          </p>
        </div>

        {/* Featured project */}
        {featuredProject && (
          <Card
            className={`group relative mb-20 overflow-hidden border border-primary/30 bg-card/50 backdrop-blur-sm transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-semibold text-primary-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              Featured
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <h3 className="mb-4 text-3xl font-bold transition-colors group-hover:text-primary">
                  {featuredProject.title}
                </h3>

                <p className="mb-6 leading-relaxed text-foreground">
                  {featuredProject.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/15 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a
                      href={featuredProject.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Other projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all duration-1000 hover:border-primary hover:shadow-lg hover:shadow-primary/20 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative h-44">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <a
                      href={project.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
