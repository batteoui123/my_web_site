"use client"

import { useTranslation } from "@/hooks/use-translation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Globe, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCallback, useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const navItems = ["aboutMe", "skills", "education", "experience", "certifications", "projects", "contact"]

export default function Header() {
  const { language, setLanguage, t } = useTranslation()
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  const [triggerAnimation, setTriggerAnimation] = useState(false)

  useEffect(() => {
    setTriggerAnimation(true)
  }, [])

  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.span
            initial={triggerAnimation ? { opacity: 0, scale: 0.8 } : {}}
            animate={triggerAnimation ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-1 text-2xl font-bold"
          >
            <span className="font-black bg-clip-text text-transparent bg-gradient-to-b from-[#7160ED] to-[#6366F1]">{"<"}</span>
            <span className="text-foreground tracking-wide">OB</span>
            <span className="font-black bg-clip-text text-transparent bg-gradient-to-b from-[#7160ED] to-[#6366F1]">{"/>"}</span>
          </motion.span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Select language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-accent" : ""}>
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("fr")} className={language === "fr" ? "bg-accent" : ""}>
                🇫🇷 Français
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border/50 bg-card/50 p-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
