import { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"
import { openSourceContributions } from "@/lib/data"

export const metadata: Metadata = {
  title: "Open Source | Richmond Andoh",
  description: "My contributions to open source projects and the community.",
}

export default function OpenSourcePage() {
  return (
    <div className="py-12 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle 
          title="Open Source Contributions"
          description="My journey in open source and contributions to the community."
          className="mb-12"
        />
        
        <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
          <p>
            I'm a strong believer in the power of open source software and the community 
            behind it. Contributing to open source has been an incredible learning 
            experience that has helped me grow as a developer.
          </p>
          
          <h3>Hacktoberfest 2024</h3>
          <p>
            I actively participated in Hacktoberfest 2024, contributing to various 
            open source projects. Here are some highlights of my contributions:
          </p>
          
          <ul>
            {openSourceContributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
          
          <h3>Why I Contribute</h3>
          <p>
            Open source has given me so much, and I believe in giving back. 
            Contributing to open source allows me to:
          </p>
          
          <ul>
            <li>Improve my coding skills by reading and writing production-quality code</li>
            <li>Learn from experienced developers and code reviewers</li>
            <li>Build a public portfolio of my work</li>
            <li>Help make software more accessible to everyone</li>
            <li>Be part of a global community of developers</li>
          </ul>
          
          <h3>Get Involved</h3>
          <p>
            If you're new to open source and want to get started, I encourage you to 
            find a project you're passionate about and start small. Even documentation 
            improvements and bug reports are valuable contributions!
          </p>
          
          <p>
            Feel free to check out my GitHub profile to see my contributions, 
            and don't hesitate to reach out if you'd like to collaborate on 
            an open source project together!
          </p>
        </div>
      </div>
    </div>
  )
}
