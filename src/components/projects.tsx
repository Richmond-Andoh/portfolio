"use client"

import { projects } from "@/lib/data"
import { ProjectCard } from "./project-card"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section 
      id="projects" 
      ref={ref}
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      {/* Background elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            My Work
          </span>
          <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A selection of projects I've worked on, from concept to deployment.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 z-0" />
                    <div className="absolute inset-0 overflow-y-auto">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'top',
                          minHeight: '100%'
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {project.description.length > 100 
                        ? `${project.description.substring(0, 100)}...` 
                        : project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                      >
                        <span>View Code</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14L21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </a>
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.liveUrl === "#" && project.hoverText && (
                        <span className="text-sm text-muted-foreground flex items-center">
                          <span className="mr-2 h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                          {project.hoverText}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3 
              className="mb-8 text-2xl font-semibold text-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Other Projects
            </motion.h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
