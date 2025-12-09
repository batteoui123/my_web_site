"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronDown, ChevronUp, Puzzle, Users, Mic, Lightbulb, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

const projectsData = [
  {
    id: 1,
    titleEn: "ElectraCore",
    titleFr: "ElectraCore",
    roleEn: "DevOps Lead",
    roleFr: "Responsable DevOps",
    descriptionEn:
      "Microservices e-commerce platform offering product browsing, cart management and secure payment flows, built on a containerized and scalable architecture.",
    descriptionFr:
      "Plateforme e-commerce en microservices offrant navigation produit, gestion du panier et traitement sécurisé des paiements, basée sur une architecture conteneurisée et évolutive.",
    imgUrl: "/Projects/electracore.jpg",
    tags: ["Docker", "Docker Compose", "GitHub Actions", "DigitalOcean"],
    github: "#",
    live: "#",
  },

  {
    id: 2,
    titleEn: "ServeEase",
    titleFr: "ServeEase",
    roleEn: "Backend Developer",
    roleFr: "Développeur Backend",
    descriptionEn:
      "Service marketplace connecting clients with providers using intelligent search, advanced filtering and a simplified request management workflow.",
    descriptionFr:
      "Marketplace de services connectant clients et prestataires via une recherche intelligente, un filtrage avancé et un flux simplifié de gestion des demandes.",
    imgUrl: "/Projects/spring.png",
    tags: ["Spring Boot", "PostgreSQL", "GROQ API"],
    github: "https://github.com/batteoui123/Freelance-Service-Marketplace-Spring-Next",
    live: "#",
  },

  {
    id: 3,
    titleEn: "MediCare",
    titleFr: "MediCare",
    roleEn: "Backend Developer",
    roleFr: "Développeur Backend",
    descriptionEn:
      "Medical appointment and patient record management platform with secure access, scheduling features and centralized health data handling.",
    descriptionFr:
      "Plateforme de gestion des rendez-vous médicaux et dossiers patients, offrant accès sécurisé, planification et centralisation des données médicales.",
    imgUrl: "/Projects/spring2.png",
    tags: ["Spring Boot", "PostgreSQL"],
    github: "https://github.com/batteoui123/MedicalAppointmentManagement-spring",
    live: "#",
  },

  {
    id: 4,
    titleEn: "Elevatio",
    titleFr: "Elevatio",
    roleEn: "Frontend Developer",
    roleFr: "Développeur Frontend",
    descriptionEn:
      "Web platform for evaluating engineering programs, featuring structured assessments, dynamic dashboards and a modern Next.js interface.",
    descriptionFr:
      "Plateforme web d’évaluation de programmes d’ingénierie, intégrant évaluations structurées, tableaux de bord dynamiques et interface Next.js moderne.",
    imgUrl: "/Projects/elevatio.png",
    tags: ["Next.js", "Tailwind CSS", "Figma"],
    github: "#",
    live: "#",
  },

  {
    id: 5,
    titleEn: "EduKids",
    titleFr: "EduKids",
    roleEn: "Backend Developer",
    roleFr: "Développeur Backend",
    descriptionEn:
      "Children activity management system enabling registration, planning, notifications and administrative monitoring in a unified interface.",
    descriptionFr:
      "Plateforme de gestion des activités pour enfants incluant inscriptions, plannings, notifications et suivi administratif dans une interface unifiée.",
    imgUrl: "/Projects/laravel.png",
    tags: ["Laravel", "MySQL", "Postman"],
    github: "https://github.com/batteoui123/Children-s-Activity-Management--laravel",
    live: "#",
  },

  {
    id: 6,
    titleEn: "School Management System",
    titleFr: "Système de Gestion Scolaire",
    roleEn: "Java Developer",
    roleFr: "Développeur Java",
    descriptionEn:
      "JavaFX school management application including dashboards, CRUD modules and role-based access for students, teachers and courses.",
    descriptionFr:
      "Application de gestion scolaire en JavaFX intégrant tableaux de bord, modules CRUD et accès basé sur les rôles pour étudiants, enseignants et modules.",
    imgUrl: "/Projects/javafx.png",
    tags: ["JavaFX", "PostgreSQL", "CSS"],
    github: "https://github.com/batteoui123/ScholManagement-JavaFx",
    live: "#",
  },

  {
    id: 7,
    titleEn: "Personal Portfolio",
    titleFr: "Portfolio Personnel",
    roleEn: "Frontend Developer",
    roleFr: "Développeur Frontend",
    descriptionEn:
      "Interactive React.js portfolio showcasing projects, skills and achievements in a clean and responsive layout.",
    descriptionFr:
      "Portfolio interactif développé avec React.js, présentant projets, compétences et réalisations dans une interface propre et responsive.",
    imgUrl: "/Projects/portfolio.png",
    tags: ["React", "Bootstrap"],
    github: "https://github.com/batteoui123/MyPortfolio",
    live: "#",
  },

  {
    id: 8,
    titleEn: "3DXEmbryo",
    titleFr: "3DXEmbryo",
    roleEn: "Frontend Developer & 3D Modeler",
    roleFr: "Développeur Front-End & Modélisation 3D",
    descriptionEn:
      "3D medical model exploration platform featuring real-time visualization, structured model management and an immersive Next.js interface.",
    descriptionFr:
      "Plateforme d’exploration de modèles médicaux en 3D offrant visualisation en temps réel, gestion structurée des modèles et interface immersive en Next.js.",
    imgUrl: "/Projects/3dXembryo.png",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "Blender", "Docker"],
    github: "#",
    live: "#",
  },
];




export default function Projects() {
  const { t, language } = useTranslation()
  const [visibleCount, setVisibleCount] = useState(6)

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  const handleShowLess = () => {
    setVisibleCount(6)
  }

  const getRoleColor = (role) => {
    if (role.includes("DevOps")) return "text-blue-600 dark:text-blue-400"
    if (role.includes("Backend") || role.includes("Java")) return "text-emerald-600 dark:text-emerald-400"
    if (role.includes("Frontend") || role.includes("Front-End")) return "text-purple-600 dark:text-purple-400"
    if (role.includes("Full Stack")) return "text-pink-600 dark:text-pink-400"
    return "text-cyan-600 dark:text-cyan-400"
  }

  return (
    <section id="projects" className="py-16 md:py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
        <span className="text-foreground dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-500">
          {t("sections.projects")}
        </span>
      </h2>

      {/* Soft Skills Banner */}
      <div className="max-w-6xl mx-auto mb-16 overflow-x-auto pb-4 md:pb-0">
        <div className="flex flex-nowrap md:flex-wrap justify-between items-center gap-8 min-w-max md:min-w-0 px-4">
          <div className="flex items-center gap-3 group">
            <div className="p-3 rounded-full bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
              <Puzzle className="w-8 h-8" />
            </div>
            <span className="font-bold text-lg md:text-xl">
              {t("soft_skills.problem_solving")}
            </span>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
              <Users className="w-8 h-8" />
            </div>
            <span className="font-bold text-lg md:text-xl">{t("soft_skills.teamwork")}</span>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="p-3 rounded-full bg-blue-500/10 text-cyan-500 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
              <Lightbulb className="w-8 h-8" />
            </div>
            <span className="font-bold text-lg md:text-xl">
              {t("soft_skills.creative_thinking")}
            </span>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="p-3 rounded-full bg-pink-500/10 text-pink-500 group-hover:bg-pink-500/20 group-hover:scale-110 transition-all duration-300">
              <MessageCircle className="w-8 h-8" />
            </div>
            <span className="font-bold text-lg md:text-xl">{t("soft_skills.communication")}</span>
          </div>
        </div>
      </div>

      <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md shadow-xl dark:shadow-2xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="group border border-border/50 rounded-xl overflow-hidden bg-background/40 hover:bg-background/60 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Project Image - 16:9 Aspect Ratio */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-border/50">
                <Image
                  src={project.imgUrl}
                  alt={project.titleEn}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 group-hover:blur-[2px]"
                />
                {/* Permanent Discrete Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                <div className="absolute inset-0 bg-cyan-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <Button
                    size="lg"
                    className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/50 rounded-full"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-grow relative">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {language === "fr" ? project.titleFr : project.titleEn}
                  </h3>
                  <p className={`text-sm font-semibold mb-2 ${getRoleColor(project.roleEn)}`}>
                    {language === "fr" ? project.roleFr : project.roleEn}
                  </p>
                  {/* Glowing Separator */}
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${project.roleEn.includes("DevOps") ? "from-blue-400 to-blue-600" :
                    project.roleEn.includes("Backend") || project.roleEn.includes("Java") ? "from-emerald-400 to-emerald-600" :
                      project.roleEn.includes("Frontend") || project.roleEn.includes("Front-End") ? "from-purple-400 to-purple-600" :
                        "from-cyan-400 to-blue-500"
                    }`} />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 border-cyan-500/20 px-2 py-0.5 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                  {language === "fr" ? project.descriptionFr : project.descriptionEn}
                </p>

                {/* Action Buttons */}
                <div className="mt-auto pt-4 flex gap-4 border-t border-border/30">
                  <Button
                    variant="outline"
                    className="flex-1 border-cyan-600/50 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-cyan-600/50 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("projects.live")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Button */}
        <div className="flex justify-center mt-12">
          {visibleCount < projectsData.length ? (
            <Button
              onClick={handleSeeMore}
              variant="outline"
              size="lg"
              className="border-cyan-600/50 dark:border-cyan-400/50 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 rounded-full px-8"
            >
              {t("projects.see_more")}
              <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
            </Button>
          ) : (
            projectsData.length > 6 && (
              <Button
                onClick={handleShowLess}
                variant="outline"
                size="lg"
                className="border-cyan-600/50 dark:border-cyan-400/50 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 rounded-full px-8"
              >
                {t("projects.see_less")}
                <ChevronUp className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
            )
          )}
        </div>
      </div>
    </section>
  )
}
