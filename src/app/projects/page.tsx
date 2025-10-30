import { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"
import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Projects | Richmond Andoh",
  description: "A collection of my recent projects and work.",
}

function HeroSection({ project }: { project: typeof projects[0] }) {
  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10" />
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      <div className="relative z-20 h-full flex flex-col justify-end p-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
        <p className="text-lg text-white/90 mb-6 max-w-2xl">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-foreground rounded-lg font-medium flex items-center gap-2 hover:bg-white/90 transition-colors"
          >
            <span>View Code</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <span>Live Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <SectionTitle 
          title="Featured Projects"
          description="Highlighted projects that showcase my skills and experience."
          className="mb-12"
        />
        
        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project) => (
            <div key={project.title} className="h-[400px] md:h-[500px]">
              <HeroSection project={project} />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <SectionTitle 
          title="Other Projects"
          description="More projects I've worked on."
          className="mb-8"
        />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
              hoverText={project.hoverText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
