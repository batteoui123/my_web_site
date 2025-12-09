"use client"

import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const socialIcons = [
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Github, href: "https://github.com", label: "GitHub" },
  ]

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20 py-12">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Email */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <a
            href="mailto:oussama.batteoui.dev@gmail.com"
            className="flex items-center justify-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors group"
          >
            <Mail className="h-4 w-4 group-hover:animate-bounce" />
            <span className="text-sm font-medium">oussama.batteoui.dev@gmail.com</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
          {socialIcons.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-muted-foreground hover:text-cyan-400 transition-colors"
              aria-label={item.label}
            >
              <item.Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright")} 2025. {t("footer.rights")}
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          variants={itemVariants}
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <p className="logo text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent italic">
            El batteoui oussama
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
