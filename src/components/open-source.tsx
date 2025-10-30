
"use client"

import { Github, GitPullRequest, Star, GitFork, Code2, GitCommit, Users, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, TooltipProps } from "recharts"
import type { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { openSourceContributions } from "@/lib/data"
import Image from "next/image"

const contributionData = [
  { month: "Jan", contributions: 45, pullRequests: 12, issues: 8 },
  { month: "Feb", contributions: 78, pullRequests: 18, issues: 15 },
  { month: "Mar", contributions: 92, pullRequests: 22, issues: 10 },
  { month: "Apr", contributions: 65, pullRequests: 15, issues: 12 },
  { month: "May", contributions: 110, pullRequests: 28, issues: 18 },
  { month: "Jun", contributions: 134, pullRequests: 35, issues: 22 },
  { month: "Jul", contributions: 98, pullRequests: 25, issues: 15 },
  { month: "Aug", contributions: 156, pullRequests: 42, issues: 28 },
  { month: "Sep", contributions: 187, pullRequests: 51, issues: 32 },
  { month: "Oct", contributions: 210, pullRequests: 68, issues: 45 },
  { month: "Nov", contributions: 178, pullRequests: 48, issues: 38 },
  { month: "Dec", contributions: 165, pullRequests: 42, issues: 35 },
]

const chartConfig = {
  contributions: {
    label: "Contributions",
    color: "var(--chart-1)",
  },
  pullRequests: {
    label: "Pull Requests",
    color: "var(--chart-2)",
  },
  issues: {
    label: "Issues",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

const contributions = [
  {
    title: "Hacktoberfest 2024",
    description: "Contributed to multiple open-source projects during Hacktoberfest 2024, focusing on React component libraries and documentation improvements.",
    repo: "Various Repositories",
    repoUrl: "https://github.com/Richmond-Andoh?tab=repositories",
    tech: ["React", "TypeScript", "Documentation", "UI Components"],
    icon: <Github className="h-5 w-5 text-primary" />
  },
  {
    title: "JavaScript/TypeScript Projects",
    description: "Active contributor to various JavaScript and TypeScript open-source projects on GitHub, focusing on bug fixes and feature implementations.",
    repo: "Various Repositories",
    repoUrl: "https://github.com/Richmond-Andoh?tab=repositories",
    tech: ["JavaScript", "TypeScript", "Node.js", "Web APIs"],
    icon: <Code2 className="h-5 w-5 text-blue-500" />
  },
  {
    title: "Personal Projects",
    description: "Maintainer of several personal open-source projects related to web development and blockchain, encouraging community contributions.",
    repo: "Richmond-Andoh/*",
    repoUrl: "https://github.com/Richmond-Andoh",
    tech: ["React", "Next.js", "Blockchain", "Web3"],
    icon: <GitPullRequest className="h-5 w-5 text-green-500" />
  }
]

export function OpenSource() {
  return (
    <section id="open-source" className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Open Source
          </span>
          <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            My Contributions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            I believe in giving back to the community. Here are some of my open source contributions and projects.
          </p>
        </motion.div>

        {/* GitHub Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>GitHub Activity</CardTitle>
              <CardDescription>
                Your contributions, pull requests, and issues over the past year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <AreaChart
                  data={contributionData}
                  margin={{
                    left: 12,
                    right: 12,
                    top: 12,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={({ active, payload, label }: any) => {
                      if (!active || !payload || !payload.length) return null;
                      return (
                        <div className="bg-background border rounded-md p-2 text-sm">
                          <p>Month: {label}</p>
                          <p>{payload[0].value} contributions</p>
                        </div>
                      );
                    }}
                  />
                  <defs>
                    <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorPullRequests" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorIssues" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="contributions"
                    stroke="hsl(var(--chart-1))"
                    fillOpacity={1}
                    fill="url(#colorContributions)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="pullRequests"
                    stroke="hsl(var(--chart-2))"
                    fillOpacity={1}
                    fill="url(#colorPullRequests)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="issues"
                    stroke="hsl(var(--chart-3))"
                    fillOpacity={1}
                    fill="url(#colorIssues)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    Trending up by 28% this year
                  </div>
                  <div className="text-muted-foreground">
                    January - December 2024
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* GitHub Contributions */}
        {/* <motion.div 
          className="mb-16 overflow-hidden rounded-xl border bg-card p-6 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="mb-6 text-xl font-semibold">My GitHub Contributions</h3>
          <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-muted/50 p-4">
            <Image
              src="https://camo.githubusercontent.com/2091a381834424514b85c122aa8616aeed8c74875b1de3e98f28897775a55825/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d526963686d6f6e642d416e646f68267468656d653d7261646963616c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365"
              alt="GitHub Contribution Stats"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            My GitHub contribution graph showing my coding activity and consistency over time.
            <a 
              href="https://github.com/Richmond-Andoh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 font-medium text-primary hover:underline"
            >
              View full profile →
            </a>
          </p>
        </motion.div> */}

        {/* Contributions */}
        <motion.div 
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground/90">Featured Contributions</h3>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              A selection of my most significant open source contributions and projects
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contributions.map((contribution, index) => (
              <motion.div
                key={index}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Card Header */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <contribution.icon.type {...contribution.icon.props} className="h-16 w-16" />
                  </div>
                  <div className="absolute right-4 top-4">
                    <a
                      href={contribution.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground"
                      aria-label={`View ${contribution.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="flex-1 p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {contribution.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{contribution.title}</h3>
                      <a
                        href={contribution.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:underline"
                      >
                        {contribution.repo}
                      </a>
                    </div>
                  </div>
                  
                  <p className="mb-4 text-muted-foreground">{contribution.description}</p>
                  
                  <div className="mt-auto pt-4">
                    <div className="flex flex-wrap gap-2">
                      {contribution.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * (index + 1) + i * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mx-auto mt-16 max-w-2xl rounded-xl border bg-card p-8 text-center shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="mb-4 text-2xl font-semibold">Let's Build Something Amazing Together</h3>
          <p className="mb-6 text-muted-foreground">
            I'm always excited to collaborate on interesting open source projects.
            Whether you need help with an existing project or want to start something new, I'd love to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Richmond-Andoh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <Github className="mr-2 h-4 w-4" />
              View My GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
