"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Mail, Download, Linkedin, Github, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

import StarBackground from "./star-background"

const techStack = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", className: "dark:invert" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
]

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
    <section id="intro" className="py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden">
      <StarBackground />

      {/* Left - Profile Photo (frame-break effect) */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center items-center relative z-10"
      >
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          {/* Ambient Glow - follows the blob shape */}
          <motion.div
            className="absolute w-56 h-56 md:w-72 md:h-72 translate-y-6 bg-gradient-to-br from-[#6B49DE] to-[#273188] blur-[70px]"
            animate={{
              opacity: [0.35, 0.55, 0.35],
              borderRadius: [
                "75% 25% 65% 35% / 35% 65% 35% 65%",
                "30% 70% 40% 60% / 65% 30% 70% 35%",
                "75% 25% 65% 35% / 35% 65% 35% 65%",
              ],
            }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Single blob-shaped contour - outline only, glow does the coloring */}
          <motion.div
            className="absolute w-56 h-56 md:w-72 md:h-72 -translate-x-2 translate-y-8 border-[3px] border-[#6366F1] shadow-[0_0_45px_5px_rgba(99,102,241,0.45)]"
            animate={{
              borderRadius: [
                "75% 25% 65% 35% / 35% 65% 35% 65%",
                "30% 70% 40% 60% / 65% 30% 70% 35%",
                "40% 60% 30% 70% / 70% 40% 60% 30%",
                "75% 25% 65% 35% / 35% 65% 35% 65%",
              ],
            }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Photo - head breaks out above, body contained within the blob, fades at the bottom */}
          <img
            src="/profile.png"
            alt="Profile"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 96%)",
              maskImage: "linear-gradient(to bottom, black 60%, transparent 96%)",
            }}
            className="relative z-10 w-48 md:w-60 h-auto object-contain drop-shadow-[0_20px_35px_rgba(99,102,241,0.45)] hover:scale-105 transition-transform duration-500"
          />

          {/* Floating Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="hidden md:block absolute -right-6 lg:-right-10 bottom-2 z-20 w-56 rounded-xl border border-[#202332] bg-[#111828]/90 backdrop-blur-md shadow-2xl shadow-[#6366F1]/20 overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#202332]">
              <span className="text-xs font-mono text-muted-foreground">{"</>"} Code</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
            <div className="p-4 font-mono text-[11px] leading-relaxed text-left whitespace-pre text-muted-foreground">
              <p><span className="text-[#6366F1]">const</span> <span className="text-[#9F90E9]">developer</span> = {"{"}</p>
              <p className="pl-3"><span className="text-sky-300">name</span>: <span className="text-orange-300">"Oussama"</span>,</p>
              <p className="pl-3"><span className="text-sky-300">skills</span>: [<span className="text-orange-300">"Java"</span>, <span className="text-orange-300">"Spring"</span>,</p>
              <p className="pl-6"><span className="text-orange-300">"React"</span>, <span className="text-orange-300">"Next.js"</span>],</p>
              <p className="pl-3"><span className="text-sky-300">passion</span>: <span className="text-orange-300">"Building scalable</span></p>
              <p className="pl-6"><span className="text-orange-300">web apps"</span></p>
              <p>{"}"};</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right - Text Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10"
      >
        <motion.p variants={itemVariants} className="text-muted-foreground text-lg mb-2">
          {t("hero.greeting")}
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-3 text-foreground whitespace-nowrap">
          EL-BATTÉOUI OUSSAMA
        </motion.h1>

        <motion.div variants={itemVariants} className="text-lg md:text-xl font-semibold mb-6 flex flex-wrap items-center gap-2">
          <span className="text-foreground">{t("hero.rolePrefix")}</span>
          <span className="text-[#6366F1]">{text}</span>
          <span className="text-[#6366F1] animate-pulse">|</span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-sm md:text-base text-muted-foreground mb-8 max-w-md leading-relaxed">
          {t("hero.tagline")}
        </motion.p>

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
                className="rounded-full border-muted-foreground hover:border-[#6366F1] hover:text-[#6366F1] bg-transparent"
                asChild
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.Icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-3 flex-wrap mb-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#6366F1] text-white hover:bg-[#7160ED] rounded-lg" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                {t("cta.contact")}
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-[#6366F1]/50 text-[#6366F1] hover:bg-[#6366F1]/10 rounded-lg bg-transparent"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1bFApnev25BVSC1KS4YM3_som3KHmGYDQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 mr-2" />
                {t("cta.download")}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants}>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#9F90E9] mb-3">
            {t("hero.techStack")}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                className="w-10 h-10 rounded-lg bg-white/5 border border-[#202332] flex items-center justify-center p-2 hover:border-[#6366F1]/50 hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className={`object-contain ${tech.className || ""}`}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
