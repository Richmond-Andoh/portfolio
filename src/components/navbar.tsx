"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#open-source" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
          onClick={closeMenu}
        >
          Richmond Andoh
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 group",
                  pathname === item.href || (pathname === '/' && item.href === '#home') 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300",
                  (pathname === item.href || (pathname === '/' && item.href === '#home')) 
                    ? "w-4/5 -translate-x-1/2" 
                    : "group-hover:w-4/5 group-hover:-translate-x-1/2"
                )} />
              </Link>
            ))}
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-muted/50"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 w-full bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                    (pathname === item.href || (pathname === '/' && item.href === '#home'))
                      ? "bg-muted text-primary"
                      : "text-foreground/80 hover:bg-muted/50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <Button
                  variant="outline"
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center space-x-2"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-4 w-4" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
