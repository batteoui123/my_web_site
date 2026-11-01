"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { motion, useInView, animate } from "framer-motion"
import { Blocks, Sparkles, Rocket } from "lucide-react"
import TiltCard from "@/components/tilt-card"

const cards = [
  {
    icon: Blocks,
    titleKey: "about.card1.title",
    descKey: "about.card1.desc",
    color: "text-[#7160ED]",
    bg: "bg-[#6366F1]/10",
  },
  {
    icon: Sparkles,
    titleKey: "about.card2.title",
    descKey: "about.card2.desc",
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/10",
  },
  {
    icon: Rocket,
    titleKey: "about.card3.title",
    descKey: "about.card3.desc",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
]

const stats = [
  { key: "about.stats.projects", value: 10, suffix: "+" },
  { key: "about.stats.technologies", value: 30, suffix: "+" },
  { key: "about.stats.experience", value: 2, suffix: "+" },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-[#7160ED]">
      {display}
      {suffix}
    </span>
  )
}

export default function AboutMe() {
  const { t } = useTranslation()

  return (
    <section id="aboutMe" className="py-16 md:py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 relative z-10">
        <span className="text-foreground">
          <span className="font-black text-[0.55em] align-middle mr-[0.15em] bg-clip-text text-transparent bg-gradient-to-b from-[#7160ED] to-[#6366F1]">{"<"}</span>
          {t("sections.aboutMe")}
          <span className="font-black text-[0.55em] align-middle ml-[0.15em] bg-clip-text text-transparent bg-gradient-to-b from-[#7160ED] to-[#6366F1]">{"/>"}</span>
        </span>
      </h2>

      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-lg md:text-xl text-foreground leading-relaxed"
        >
          {t("about.intro.line2")}
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 relative z-10">
        {cards.map((card, index) => (
          <TiltCard
            key={card.titleKey}
            index={index}
            className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl dark:shadow-2xl"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.bg} ${card.color}`}>
              <card.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{t(card.titleKey)}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(card.descKey)}</p>
          </TiltCard>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto border-t border-border/50 pt-8 mb-10 relative z-10 text-center">
        {stats.map((stat) => (
          <div key={stat.key}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{t(stat.key)}</p>
          </div>
        ))}
      </div>

      {/* Objective */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto relative z-10"
      >
        {t("about.objective")}
      </motion.p>
    </section>
  )
}
