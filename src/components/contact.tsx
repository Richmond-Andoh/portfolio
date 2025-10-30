'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative border-t py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-black/30 -z-10"></div>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
            Have a project in mind or want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 max-w-5xl mx-auto bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-800">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Let's Connect
            </h3>
            <p className="text-muted-foreground">
              I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:contact@richmondandoh.com" 
                    className="text-muted-foreground hover:text-blue-600 dark:hover:text-cyan-400 hover:underline transition-colors"
                  >
                    richmondandoh@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+233XXXXXXXX" 
                    className="text-muted-foreground hover:text-blue-600 dark:hover:text-cyan-400 hover:underline transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Accra, Ghana (GMT+0)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" placeholder="your@email.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="How can I help you?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
            </div>
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
