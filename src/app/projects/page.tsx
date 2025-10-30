import { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"
import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Projects | Richmond Andoh",
  description: "A collection of my recent projects and work.",
}

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle 
          title="My Projects"
          description="A selection of projects I've worked on, showcasing my skills and experience."
          className="mb-12"
        />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
