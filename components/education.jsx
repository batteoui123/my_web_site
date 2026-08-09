"use client"

import { useRef } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { motion, useScroll, useSpring } from "framer-motion"
import Image from "next/image"

const educationItems = [
  {
    id: 1,
    titleEn: "Engineering cycle in Computer Science",
    titleFr: "Cycle d'ingénieur en Informatique",
    period: "2023 - 2026",
    descriptionEn:
      "Graduated with a Software Engineering degree from the National School of Applied Sciences of Tangier (ENSAT).",
    descriptionFr:
      "Diplômé d'ingénieur logiciel de l'École Nationale des Sciences Appliquées de Tanger (ENSAT).",
    image: "/education/logoEnsa.jpg",
  },
  {
    id: 2,
    titleEn: "Integrated Preparatory Cycle",
    titleFr: "Cycle Préparatoire Intégré",
    period: "2021 - 2023",
    descriptionEn: "Completed the integrated preparatory cycle at ENSAT",
    descriptionFr: "Cycle préparatoire intégré complété à l'ENSAT",
    image: "/education/logoEnsa.jpg",
  },
  {
    id: 3,
    titleEn: "First Year of DEUST",
    titleFr: "Première Année de DEUST",
    period: "2020 - 2021",
    descriptionEn:
      "Completed my first year of DEUST specializing in MIP (Mathematics, Computer Science, Physics) at the Faculty of Sciences and Technologies of Fes (FSTF).",
    descriptionFr:
      "Complété ma première année de DEUST spécialisée en MIP (Mathématiques, Informatique, Physique) à la Faculté des Sciences et Technologies de Fès (FSTF).",
    image: "/education/logoFst.png",
  },
  {
    id: 4,
    titleEn: "Scientific Baccalaureate",
    titleFr: "Baccalauréat Scientifique",
    period: "2019 - 2020",
    descriptionEn:
      "Graduated with a Scientific Baccalaureate, Physics-Chemistry option, from Lycée AL WAHDA in Taumate.",
    descriptionFr: "Diplômé avec un Baccalauréat Scientifique, option Physique-Chimie, du Lycée AL WAHDA à Taumate.",
    image: "/education/lycee.jpg",
  },
]

export default function Education() {
  const { t, language } = useTranslation()
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.6"],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <section id="education" className="py-16 md:py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
        <span className="text-foreground dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-violet-400 dark:to-fuchsia-600">
          {t("sections.education")}
        </span>
      </h2>

      <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-xl p-8 backdrop-blur-md shadow-xl dark:shadow-2xl relative z-10">
        <div ref={timelineRef} className="space-y-1 relative pl-8">
          {/* Vertical line track */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border/40" />
          {/* Vertical line - draws in as you scroll */}
          <motion.div
            className="absolute left-3 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-violet-400 to-fuchsia-500"
            style={{ scaleY: lineProgress }}
          />

          {educationItems.map((item, index) => (
            <div key={item.id} className="relative pb-8">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500 border-4 border-card flex items-center justify-center shadow-lg shadow-violet-500/20 z-10"
              >
                <motion.span
                  initial={{ scale: 0.5, opacity: 0.7 }}
                  whileInView={{ scale: 2.4, opacity: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-violet-400"
                />
              </motion.div>

              {/* Content */}
              <div className="flex justify-between items-center gap-4 group">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-violet-400 mb-2">{item.period}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                    {language === "fr" ? item.titleFr : item.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "fr" ? item.descriptionFr : item.descriptionEn}
                  </p>
                </div>

                {/* Logo Image */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden border-2 border-violet-400/20">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.titleEn}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
