"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "./ui/badge"
import { Code, Cpu, Globe, Layers, Server, Terminal } from "lucide-react"

const skills = [
  { name: "Frontend Development", level: 90, icon: <Code className="h-5 w-5" /> },
  { name: "Backend Development", level: 80, icon: <Server className="h-5 w-5" /> },
  { name: "UI/UX Design", level: 75, icon: <Layers className="h-5 w-5" /> },
  { name: "DevOps & Cloud", level: 70, icon: <Cpu className="h-5 w-5" /> },
  { name: "Problem Solving", level: 90, icon: <Terminal className="h-5 w-5" /> },
  { name: "Web Performance", level: 85, icon: <Globe className="h-5 w-5" /> },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      {/* Background elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            About Me
          </span>
          <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Crafting Digital Experiences
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            I build exceptional digital experiences with a focus on performance, accessibility, and modern web technologies.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl border bg-card p-8 shadow-2xl shadow-primary/5">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate frontend-focused full-stack developer with expertise in modern web technologies. 
                    I specialize in building responsive, accessible, and performant web applications that deliver 
                    exceptional user experiences.
                  </p>
                  <p>
                    With a strong foundation in both design and development, I bridge the gap between beautiful 
                    interfaces and robust backend systems. My approach combines technical excellence with 
                    creative problem-solving.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1.5 text-sm">
                    <Code className="h-3.5 w-3.5" />
                    Full-Stack Developer
                  </Badge>
                  <Badge variant="outline" className="gap-1.5 text-sm">
                    <Terminal className="h-3.5 w-3.5" />
                    Open Source Contributor
                  </Badge>
                  <Badge variant="outline" className="gap-1.5 text-sm">
                    <Globe className="h-3.5 w-3.5" />
                    Tech Enthusiast
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -left-6 -top-6 h-12 w-12 rounded-full bg-primary/10" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/5" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square overflow-hidden rounded-2xl border bg-card"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <span className="text-4xl font-bold text-muted-foreground">RA</span>
            </div>
            {/* Replace with actual image */}
            {/* <Image
              src="/profile.png"
              alt="Richmond Andoh"
              fill
              className="object-cover"
              priority
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
