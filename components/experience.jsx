"use client"

import { useRef } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { motion, useScroll, useSpring } from "framer-motion"
import { MapPin } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import TiltCard from "@/components/tilt-card"

const experienceData = [
  {
    id: 1,
    roleEn: "Full Stack Engineer (Capstone Internship)",
    roleFr: "Ingénieur Full Stack (Stage PFE)",
    company: "IZEMX",
    logo: "/experience/izemx-logo-1-scaled.png",
    location: "Casablanca-Settat, Maroc",
    periodEn: "Mar 2026 — Present",
    periodFr: "Mars 2026 — Présent",
    current: true,
    descriptionEn:
      "Designing and building a B2B SaaS platform for managing AI agents, delivering the following business and technical modules:",
    descriptionFr:
      "Conception et développement d'une plateforme SaaS B2B dédiée à la gestion d'agents IA. Réalisation des modules métiers et techniques suivants :",
    bulletsEn: [
      "Transactions & Usage: Stripe billing/subscriptions integration, plus a credit system to track AI usage.",
      "AI Orchestration: Managing deployed agents via n8n and integrating the LiteLLM proxy.",
      "CRM & Support: Automated sales proposal generation, client/prospect management, and a ticketing system for complaints.",
      "Security & Access: Internal/external user management with centralized authentication secured by Keycloak.",
    ],
    bulletsFr: [
      "Transactions & Consommation : intégration de la facturation et des abonnements via Stripe, et création d'un système de crédits pour le suivi de la consommation IA.",
      "Orchestration IA : gestion des agents déployés via n8n et intégration du proxy LiteLLM.",
      "CRM & Support : automatisation de la génération des propositions commerciales, gestion des clients/prospects, et mise en place d'un système de tickets pour les réclamations.",
      "Sécurité & Accès : gestion des utilisateurs internes et externes avec une authentification centralisée sécurisée par Keycloak.",
    ],
    tags: ["Spring Boot", "React", "Microservices", "Stripe", "n8n", "LiteLLM", "Keycloak", "PostgreSQL"],
  },
  {
    id: 2,
    roleEn: "Full Stack Engineer (Capstone Internship)",
    roleFr: "Ingénieur Full Stack (Stage PFA)",
    company: "FMPT",
    logo: "/experience/fmpt.jpg",
    location: "Tanger-Tétouan-Al Hoceïma, Maroc",
    periodEn: "Jul 2025 — Oct 2025",
    periodFr: "Juil. 2025 — Oct. 2025",
    current: false,
    descriptionEn:
      "Designed and developed an interactive web platform for exploring 3D medical models — 3D modeling and UI/UX prototyping, a Spring Boot REST API for data management, and an immersive front-end. Hardened production with a CI/CD pipeline and Docker deployment.",
    descriptionFr:
      "Conception et développement d'une plateforme web interactive pour l'exploration de modèles médicaux 3D. Modélisation 3D et prototypage UI/UX, API REST avec Spring Boot pour la gestion des données, et interface front-end immersive. Mise en production fiabilisée via un pipeline CI/CD et un déploiement Docker.",
    bulletsEn: [],
    bulletsFr: [],
    tags: ["Spring Boot", "Next.js", "Three.js", "Docker", "Blender"],
  },
]

export default function Experience() {
  const { t, language } = useTranslation()
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.6"],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <section id="experience" className="py-16 md:py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
        <span className="text-foreground dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-violet-400 dark:to-fuchsia-600">
          {t("sections.experience")}
        </span>
      </h2>

      <div ref={timelineRef} className="max-w-4xl mx-auto relative z-10">
        {/* Track */}
        <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border/40" />
        {/* Line - draws in as you scroll */}
        <motion.div
          className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-violet-400 to-fuchsia-500"
          style={{ scaleY: lineProgress }}
        />

        <div className="space-y-10 md:space-y-16">
          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0
            return (
              <div key={exp.id} className="relative flex md:items-start">
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500 border-4 border-background shadow-lg shadow-violet-500/30 z-10"
                >
                  {exp.current && (
                    <motion.span
                      animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-violet-400"
                    />
                  )}
                </motion.div>

                {/* Card */}
                <div
                  className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                    isLeft ? "md:pr-10" : "md:pl-10 md:ml-auto"
                  }`}
                >
                  <TiltCard
                    index={index}
                    className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl dark:shadow-2xl"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-16 h-16 shrink-0 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden border border-border/50 shadow-inner">
                        <div className="relative w-full h-full">
                          <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground leading-tight">
                          {language === "fr" ? exp.roleFr : exp.roleEn}
                        </h3>
                        <p className="text-sm font-semibold text-fuchsia-500 dark:text-fuchsia-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1">
                        {exp.current && (
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        )}
                        {language === "fr" ? exp.periodFr : exp.periodEn}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {language === "fr" ? exp.descriptionFr : exp.descriptionEn}
                    </p>

                    {(language === "fr" ? exp.bulletsFr : exp.bulletsEn).length > 0 && (
                      <ul className="space-y-1.5 mb-4">
                        {(language === "fr" ? exp.bulletsFr : exp.bulletsEn).map((bullet, i) => (
                          <li key={i} className="text-xs text-muted-foreground leading-relaxed pl-3 relative">
                            <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-violet-400" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border/30">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-violet-500/10 text-violet-700 dark:text-violet-300 hover:bg-violet-500/20 border-violet-500/20 px-2 py-0.5 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TiltCard>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
