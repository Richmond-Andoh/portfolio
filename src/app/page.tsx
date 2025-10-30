import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { OpenSource } from "@/components/open-source"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <OpenSource />
      <Certifications />
      <Contact />
    </main>
  )
}
