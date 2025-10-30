"use client";

import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { TextHoverEffect } from "./ui/text-hover-effect";
import dynamic from 'next/dynamic';

const GlobeDemo = dynamic(
  () => import('@/components/ui/globe-demo').then((mod) => mod.GlobeDemo),
  { ssr: false }
);

const RippleButton = ({ children, className = "", ...props }: any) => {
  const [ripples, setRipples] = useState<{x: number, y: number, id: number}[]>([])
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      setRipples(prev => [...prev, { x, y, id: Date.now() }])
      
      if (props.onClick) {
        props.onClick(e)
      }
    }
  }

  return (
    <button 
      ref={btnRef}
      {...props}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/20"
            initial={{ width: 0, height: 0, x: ripple.x, y: ripple.y, opacity: 1 }}
            animate={{ width: 500, height: 500, x: ripple.x - 250, y: ripple.y - 250, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onAnimationComplete={() => {
              setRipples(prev => prev.filter(r => r.id !== ripple.id))
            }}
          />
        ))}
      </AnimatePresence>
    </button>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:email@example.com", label: "Email" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 z-0">
        <BackgroundRippleEffect 
          rows={6}
          cols={20}
          cellSize={80}
          className="opacity-50"
        />
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="mb-8"
            >
              <div className="relative">
                <TextHoverEffect 
                  text="Richmond Andoh" 
                  className="h-24 sm:h-28 md:h-32 lg:h-36"
                  textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-6xl"
                />
              </div>
              <motion.div 
                className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl md:mt-6 md:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block">
                  <TextHoverEffect 
                    text="Frontend-Focused" 
                    className="inline-block h-8 md:h-10"
                    textClassName="text-xl sm:text-2xl md:text-3xl"
                    duration={0.2}
                  />
                </span>{' '}
                <span className="inline-block">
                  <TextHoverEffect 
                    text="Full-Stack Developer" 
                    className="inline-block h-8 md:h-10"
                    textClassName="text-xl sm:text-2xl md:text-3xl text-primary"
                    duration={0.3}
                  />
                </span>
              </motion.div>
            </motion.div>

            <motion.p 
              className="mx-auto lg:mx-0 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I build clean, interactive, and scalable web applications using modern technologies like Next.js, React, Tailwind, and TypeScript.
            </motion.p>

            <motion.div 
              className="mt-8 lg:mt-12 flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <RippleButton
                asChild
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/80 px-8 py-3 font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Link href="#projects" className="flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </RippleButton>
              
              <RippleButton
                variant="outline"
                className="group relative overflow-hidden rounded-full border-2 px-8 py-3 font-medium transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <a 
                  href="/Richmond_Andoh_Modern_CV.pdf" 
                  download
                  className="flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </RippleButton>
            </motion.div>

            <motion.div 
              className="mt-12 flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-full p-2 text-muted-foreground transition-all duration-300 hover:bg-muted/50 hover:text-foreground"
                  whileHover={{ y: -2 }}
                  aria-label={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.6 + (index * 0.1),
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                >
                  <span className="relative z-10">{link.icon}</span>
                  <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Globe */}
          <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <GlobeDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, 20]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
          <motion.div
            className="h-2 w-2 rounded-full bg-muted-foreground/70"
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "loop",
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
