'use client'

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    issuedDate: "March 2024",
    credentialId: "ABC123XYZ456",
    skills: ["AWS", "Cloud Computing", "Cloud Architecture", "Security"],
    image: "/projects/certificate.png",
    verifyUrl: "https://www.credly.com/badges/2e5c6513-f613-4326-a44b-54c7693f81d7/public_url"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="h-40 w-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/certificate-placeholder.png';
                      }}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <CardTitle className="text-2xl">{cert.title}</CardTitle>
                        <span className="text-sm text-muted-foreground">{cert.issuedDate}</span>
                      </div>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </p>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Skills Validated:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <a 
                        href={cert.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:underline"
                      >
                        View Credential
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
