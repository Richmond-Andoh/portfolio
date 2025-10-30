import { ContactForm } from "@/components/contact-form"
import { SectionTitle } from "@/components/section-title"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Richmond Andoh",
  description: "Get in touch with Richmond Andoh, a Frontend-Focused Full-Stack Developer based in Ghana.",
}

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle 
          title="Get In Touch"
          description="Have a project in mind or want to discuss potential opportunities? Feel free to reach out!"
          className="mb-12"
        />
        <ContactForm />
      </div>
    </div>
  )
}
