import { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"
import { skills } from "@/lib/data"

export const metadata: Metadata = {
  title: "Skills | Richmond Andoh",
  description: "Explore the technical skills and technologies I work with.",
}

export default function SkillsPage() {
  return (
    <div className="py-12 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle 
          title="Skills & Technologies"
          description="A comprehensive overview of my technical skills and the technologies I work with."
          className="mb-12"
        />
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div 
              key={category} 
              className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-6 text-xl font-semibold capitalize">
                {category}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div 
                        className="h-full bg-primary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
