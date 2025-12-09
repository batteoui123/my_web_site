"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Mail, Download, Linkedin, Github, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"

import StarBackground from "./star-background"

export default function Hero() {
  /* Rotating Typewriter Logic */
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(200 - Math.random() * 100)
  const { t, language } = useTranslation()
  const toRotate = [t("hero.role1"), t("hero.role2")]
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
  }, [text, delta, language])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(200 - Math.random() * 100)
    } else if (!isDeleting && updatedText === "") {
      setDelta(150);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="aboutMe" className="py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden">
      <StarBackground />

      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-3">
            <span className="text-cyan-400">EL-</span>BATTÉOUI
            <br />
            OUSSAMA
          </h1>
          <motion.div variants={itemVariants} className="text-cyan-400 text-xl font-semibold flex items-center gap-2 h-8">
            <span>{"<"}</span>
            <span>{text}</span>
            <span className="animate-pulse">|</span>
            <span>{">"}</span>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-3 mb-8">
          {[
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Github, href: "https://github.com" },
            { Icon: Instagram, href: "https://instagram.com" },
            { Icon: Facebook, href: "https://facebook.com" },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-muted-foreground hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
                asChild
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.Icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
          {t("hero.description").split('\n').map((line, index) => (
            <span key={index} className="block min-h-[1.5em]">
              {line}
            </span>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-2">{t("hero.technologies")}</p>
          <p className="text-sm text-muted-foreground">Java,Spring Boot, React, Next.js,CI/CD</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-3 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-cyan-400 text-black hover:bg-cyan-300 rounded-lg" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                {t("cta.contact")}
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-lg bg-transparent"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1-m-CLNhmK_Sv5JQxLvqxcMTEtrGPh-h6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 mr-2" />
                {t("cta.download")}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Content - Profile Image */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center items-center relative z-10"
      >
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>

          {/* Main Circle Container */}
          <div className="relative w-full h-full p-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-shine">
            {/* Inner Background */}
            <div className="relative w-full h-full rounded-full bg-background/80 backdrop-blur-sm overflow-hidden flex items-end justify-center">

              {/* Subtle Inner Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-cyan-500/20"></div>

              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

              {/* Profile Image */}
              <img
                src="/profile.png"
                alt="Profile"
                className="relative w-full h-full object-cover object-bottom transform translate-y-2 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Floating Elements (Optional decoration) */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-500/20 rounded-full blur-xl animate-bounce delay-700"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-bounce delay-300"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

