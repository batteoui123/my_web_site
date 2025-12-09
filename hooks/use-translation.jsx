"use client"

import { createContext, useContext, useState, useEffect } from "react"

const translations = {
  en: {
    // Navigation
    "nav.aboutMe": "About me",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.certifications": "Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.description":
      "👨‍💻 As a Software Engineering student, I craft Full-Stack web solutions where performance, reliability, and user experience meet. Passionate about modern software architecture, I rely on a solid mastery of\n💻 Java, Spring Boot, React, Next.js, Laravel\nto design robust and elegant applications.\n\n🔧 Technical Approach & DevOps\nMy approach combines rigor, attention to detail, and DevOps practices:\n⚙️ Continuous Integration (CI/CD)\n🐳 Automated deployment with Docker\n📦 Containerized and reproducible environments\n\n🌱 Curious and continuously improving, I love exploring new tools, optimizing performance, and tackling complex technical challenges.\n\n🎯 Objective\nI am looking for a PFE internship (4–6 months) where I can:\n🚀 leverage my skills,\n🤝 learn from experienced teams,\n🌍 contribute to ambitious and innovative projects that shape the web of tomorrow.",
    "hero.technologies": "Technologies & Frameworks",
    "hero.role1": "Software Engineering Student",
    "hero.role2": "Web & Full-stack Developer",
    "cta.contact": "Contact me",
    "cta.download": "Download CV",

    // Sections
    "sections.skills": "Skills",
    "sections.education": "Education",
    "sections.projects": "Projects",
    "sections.certifications": "Certifications",
    "certifications.verify": "Verify Credential",
    "sections.contact": "Contact",

    // Skills
    "skills.languages": "Programming Languages",
    "skills.frameworks": "Frameworks & Libraries",
    "skills.databases": "Databases",
    "skills.tools": "Tools & Technologies",
    "skills.devops_tools": "DevOps & Tools",
    "skills.design_quality": "Design, Modeling & Quality",

    // Soft Skills
    "soft_skills.problem_solving": "Problem Solving",
    "soft_skills.teamwork": "Teamwork",
    "soft_skills.creative_thinking": "Creative Thinking",
    "soft_skills.communication": "Communication",

    // Projects
    "projects.live": "Live",
    "projects.see_more": "See More",
    "projects.see_less": "See Less",

    // Contact
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.form.name": "Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Message",
    "contact.form.send": "Send",
    "contact.form.sending": "Sending...",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  fr: {
    // Navigation
    "nav.aboutMe": "À propos",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.certifications": "Certifications",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero
    "hero.description":
      "👨‍💻 Élève ingénieur en génie informatique, je façonne des solutions web Full-Stack où performance, fiabilité et expérience utilisateur se rencontrent. Passionné par l’architecture logicielle moderne, je m’appuie sur une maîtrise solide de\n💻 Java, Spring Boot, React, Next.js, Laravel\npour concevoir des applications robustes et élégantes.\n\n🔧 Approche technique & DevOps\nMa démarche combine rigueur, sens du détail et pratiques DevOps :\n⚙️ Intégration continue (CI/CD)\n🐳 Déploiement automatisé avec Docker\n📦 Environnements conteneurisés et reproductibles\n\n🌱 Curieux et en amélioration continue, j’aime explorer de nouveaux outils, optimiser les performances et relever des défis techniques complexes.\n\n🎯 Objectif\nJe recherche un stage PFE (4–6 mois) où je pourrai :\n🚀 mettre à profit mes compétences,\n🤝 apprendre au contact d’équipes expérimentées,\n🌍 contribuer à des projets ambitieux et innovants qui façonnent le web de demain.",
    "hero.technologies": "Technologies & Frameworks",
    "hero.role1": "Élève Ingénieur Logiciel",
    "hero.role2": "Développeur Web & Full Stack",
    "cta.contact": "Contactez-moi",
    "cta.download": "Télécharger CV",

    // Sections
    "sections.skills": "Compétences",
    "sections.education": "Formation",
    "sections.projects": "Projets",
    "sections.certifications": "Certifications",
    "certifications.verify": "Vérifier le diplôme",
    "sections.contact": "Contact",

    // Skills
    "skills.languages": "Langues de Programmation",
    "skills.frameworks": "Frameworks & Bibliothèques",
    "skills.databases": "Bases de Données",
    "skills.tools": "Outils & Technologies",
    "skills.devops_tools": "DevOps & Outils",
    "skills.design_quality": "Design, Modélisation & Qualité",

    // Soft Skills
    "soft_skills.problem_solving": "Résolution de problèmes",
    "soft_skills.teamwork": "Travail d'équipe",
    "soft_skills.creative_thinking": "Pensée Créative",
    "soft_skills.communication": "Communication",

    // Projects
    "projects.live": "Live",
    "projects.see_more": "Voir Plus",
    "projects.see_less": "Voir Moins",

    // Contact
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.form.name": "Nom",
    "contact.form.email": "Adresse Email",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer",
    "contact.form.sending": "Envoi en cours...",

    // Footer
    "footer.rights": "Tous les droits réservés.",
  },
}

const TranslationContext = createContext()

export function TranslationProvider({ children }) {
  const [language, setLanguageState] = useState("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("language")
    const browserLang = navigator.language.startsWith("fr") ? "fr" : "en"
    setLanguageState(saved || browserLang)
    setMounted(true)
  }, [])

  const setLanguage = (lang) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  if (!mounted) return children

  return <TranslationContext.Provider value={{ language, setLanguage, t }}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider")
  }
  return context
}
