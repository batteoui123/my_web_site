"use client"

import { useTranslation } from "@/hooks/use-translation"
import Image from "next/image"

const educationItems = [
  {
    id: 1,
    titleEn: "Engineering cycle in Computer Science",
    titleFr: "Cycle d'ingénieur en Informatique",
    period: "2023 - Present",
    descriptionEn:
      "Currently pursuing my Software Engineering degree at the National School of Applied Sciences of Tangier (ENSAT).",
    descriptionFr:
      "Actuellement en poursuivant mon diplôme d'ingénieur logiciel à l'École Nationale des Sciences Appliquées de Tanger (ENSAT).",
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

  return (
    <section id="education" className="py-16 md:py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
        <span className="text-foreground dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-500">
          {t("sections.education")}
        </span>
      </h2>

      <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-xl p-8 backdrop-blur-md shadow-xl dark:shadow-2xl relative z-10">
        <div className="space-y-1 relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400" />

          {educationItems.map((item, index) => (
            <div key={item.id} className="relative pb-8">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 border-4 border-card flex items-center justify-center shadow-lg shadow-cyan-500/20" />

              {/* Content */}
              <div className="flex justify-between items-center gap-4 group">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">{item.period}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                    {language === "fr" ? item.titleFr : item.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "fr" ? item.descriptionFr : item.descriptionEn}
                  </p>
                </div>

                {/* Logo Image */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden border-2 border-cyan-400/20">
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
