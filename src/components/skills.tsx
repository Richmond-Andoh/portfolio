"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Code2, Layers, Server, Wrench, Zap } from "lucide-react"
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPhp, 
  SiMongodb, 
  SiMysql, 
  SiFirebase, 
  SiSui, 
  SiSolidity, 
  SiGithub, 
  SiAmazon, 
  SiVercel, 
  SiNetlify, 
  SiPostman, 
  SiGooglechrome 
} from "react-icons/si"
import { 
  TbBrandAws, 
  TbBrandGit, 
  TbBrandGithub, 
  TbBrandMongodb, 
  TbBrandMysql, 
  TbBrandNextjs, 
  TbBrandNodejs, 
  TbBrandPhp, 
  TbBrandReact, 
  TbBrandTailwind, 
  TbBrandTypescript, 
  TbBrandVercel 
} from "react-icons/tb"
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa"

import { skills } from "@/lib/data"

type SkillCategory = keyof typeof skills

const categoryIcons = {
  frontend: <Code2 className="h-5 w-5" />,
  backend: <Server className="h-5 w-5" />,
  blockchain: <Zap className="h-5 w-5" />,
  tools: <Wrench className="h-5 w-5" />
}

type SkillIcons = {
  [key: string]: JSX.Element;
};

const skillIcons: SkillIcons = {
  // Frontend
  'Next.js': <TbBrandNextjs className="h-5 w-5" />,
  'React': <TbBrandReact className="h-5 w-5 text-[#61DAFB]" />,
  'TypeScript': <TbBrandTypescript className="h-5 w-5 text-[#3178C6]" />,
  'Tailwind CSS': <TbBrandTailwind className="h-5 w-5 text-[#06B6D4]" />,
  'ShadCN UI': <Layers className="h-5 w-5" />,
  'Aceternity UI': <Layers className="h-5 w-5" />,
  'Ant Design': <Layers className="h-5 w-5" />,
  
  // Backend
  'Node.js': <TbBrandNodejs className="h-5 w-5 text-[#339933]" />,
  'Express': <SiExpress className="h-5 w-5" />,
  'PHP': <TbBrandPhp className="h-5 w-5 text-[#777BB4]" />,
  'MongoDB': <TbBrandMongodb className="h-5 w-5 text-[#47A248]" />,
  'MySQL': <TbBrandMysql className="h-5 w-5 text-[#4479A1]" />,
  'Firebase': <SiFirebase className="h-5 w-5 text-[#FFCA28]" />,
  
  // Blockchain
  'Move Language': <Code2 className="h-5 w-5" />,
  'Sui Blockchain': <SiSui className="h-5 w-5" />,
  'Solidity': <SiSolidity className="h-5 w-5" />,
  
  // Tools
  'Git': <TbBrandGit className="h-5 w-5 text-[#F05032]" />,
  'GitHub': <TbBrandGithub className="h-5 w-5" />,
  'AWS': <TbBrandAws className="h-5 w-5 text-[#FF9900]" />,
  'Vercel': <TbBrandVercel className="h-5 w-5" />,
  'Netlify': <SiNetlify className="h-5 w-5 text-[#00C7B7]" />,
  'Postman': <SiPostman className="h-5 w-5 text-[#FF6C37]" />,
  'Chrome DevTools': <SiGooglechrome className="h-5 w-5 text-[#4285F4]" />
}

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const Icon = skillIcons[name] || <Code className="h-4 w-4 text-muted-foreground" />

  return (
    <div ref={ref} className="group relative mb-6">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="flex h-5 w-5 items-center justify-center">
            {Icon}
          </span>
          <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors duration-300">
            {name}
          </span>
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted/50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full shadow-lg shadow-primary/20"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section 
      id="skills" 
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
            My Skills
          </span>
          <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Technical Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            I've worked with a variety of technologies across different areas of development.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {categoryIcons[category as keyof typeof categoryIcons] || <Code className="h-5 w-5" />}
                  </div>
                  <h3 className="text-xl font-semibold capitalize text-foreground">
                    {category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
