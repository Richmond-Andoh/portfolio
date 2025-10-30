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
          <div className="mb-24">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                />
              ))}
            </div>
          </div>
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
