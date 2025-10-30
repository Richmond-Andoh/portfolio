"use client"

import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  imageUrl: string
  featured?: boolean
  className?: string
  hoverText?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  imageUrl,
  featured = false,
  className = "",
  hoverText
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${featured ? 'lg:col-span-2' : ''} ${className}`}
    >
      <div className="flex flex-col h-full">
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 z-0" />
          <div className="absolute inset-0 overflow-y-auto">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={600}
              className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                minHeight: '100%'
              }}
              priority={featured}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 flex items-end">
            <div className="p-6 w-full">
              <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.slice(0, 3).map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="text-xs px-2 py-0.5 bg-background/80 backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {tags.slice(3).map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="text-xs px-2 py-0.5"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-foreground/70 transition-all hover:text-foreground hover:-translate-y-0.5 group"
                  aria-label={`View ${title} source code`}
                >
                  <Github className="mr-1.5 h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>Code</span>
                </Link>
              )}
              
              {liveUrl === "#" && hoverText && (
                <span className="text-xs text-muted-foreground/70 group relative">
                  <span className="inline-flex items-center">
                    <span className="mr-1.5 h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
                    {hoverText}
                  </span>
                </span>
              )}
              
              {liveUrl !== "#" && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-foreground/70 transition-all hover:text-foreground hover:-translate-y-0.5 group"
                  aria-label={`View ${title} live demo`}
                >
                  <ArrowUpRight className="mr-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>Live Demo</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
