"use client"

import { useTranslation } from "@/hooks/use-translation"
import { ExternalLink, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const certificationsData = [
  {
    id: 1,
    titleEn: "Oracle Certified Professional: Java SE 17 Developer",
    titleFr: "Professionnel Certifié Oracle : Développeur Java SE 17",
    issuer: "Oracle",
    date: "Dec 2025",
    image: "/certifications/oracle-java.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4BF1FD4C79706A7CA99518C27B6A87D585C92F4B7B01001E8788A9954361EAAB",
  },
  {
    id: 2,
    titleEn: "Excel Skills for Business: Essentials",
    titleFr: "Compétences Excel pour les Affaires : Essentiels",
    issuer: "Macquarie University",
    date: "Aug 2023",
    image: "/certifications/excel-skills.png",
    link: "https://www.coursera.org/account/accomplishments/verify/FL76KQH3Q7AG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    id: 3,
    titleEn: "General Secretary",
    titleFr: "Secrétaire Général",
    issuer: "Computer Science Club (CSC)",
    date: "2023 - 2024",
    image: "/certifications/csc_secretary.png",
    link: "#",
  },
]

export default function Certifications() {
  const { t, language } = useTranslation()

  return (
    <section id="certifications" className="py-16 md:py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
        <span className="text-foreground dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-500">
          {t("sections.certifications")}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 relative z-10">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl dark:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left z-10">
              {/* Image/Badge */}
              <div className="relative w-24 h-24 flex-shrink-0 bg-background/50 rounded-xl p-2 border border-border/50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={cert.image}
                  alt={cert.issuer}
                  fill
                  className="object-contain p-1"
                />
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col items-center md:items-start">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-cyan-400 transition-colors">
                  {language === "fr" ? cert.titleFr : cert.titleEn}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>{cert.issuer}</span>
                  <span className="text-border/50">•</span>
                  <span>{cert.date}</span>
                </div>

                {/* Verify Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-auto border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 rounded-full"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    {t("certifications.verify")}
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

