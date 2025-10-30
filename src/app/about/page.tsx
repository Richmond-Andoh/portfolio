import { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"

export const metadata: Metadata = {
  title: "About | Richmond Andoh",
  description: "Learn more about Richmond Andoh, a Frontend-Focused Full-Stack Developer based in Ghana.",
}

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle 
          title="About Me"
          description="Get to know more about my journey, skills, and experience."
          className="mb-12"
        />
        
        <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
          <p>
            Hello! I'm Richmond Andoh, a passionate Frontend-Focused Full-Stack Developer based in Ghana. 
            With a strong foundation in both frontend and backend technologies, I specialize in creating 
            modern, responsive, and user-friendly web applications.
          </p>
          
          <h3>My Journey</h3>
          <p>
            My journey in web development started several years ago when I built my first website. 
            Since then, I've been on an exciting path of continuous learning and growth, working with 
            various technologies and frameworks to bring ideas to life.
          </p>
          
          <h3>What I Do</h3>
          <p>
            I focus on building exceptional digital experiences using modern web technologies. 
            My expertise includes:
          </p>
          <ul>
            <li>Building responsive and accessible user interfaces with React and Next.js</li>
            <li>Creating robust backend services with Node.js and Express</li>
            <li>Working with various databases including MongoDB and MySQL</li>
            <li>Implementing modern UI/UX principles and best practices</li>
            <li>Writing clean, maintainable, and efficient code</li>
          </ul>
          
          <h3>Beyond Coding</h3>
          <p>
            When I'm not coding, you can find me contributing to open-source projects, 
            learning new technologies, or sharing my knowledge with the developer community. 
            I'm also passionate about blockchain technology and its potential to transform industries.
          </p>
          
          <p>
            I'm always open to interesting projects and collaborations. 
            If you have an idea you'd like to discuss, feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  )
}
