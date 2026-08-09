"use client"

import { createContext, useContext, useState, useEffect } from "react"

const translations = {
  en: {
    // Navigation
    "nav.aboutMe": "About me",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.certifications": "Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero (intro section)
    "hero.greeting": "Hello, I'm",
    "hero.rolePrefix": "And I'm a",
    "hero.tagline":
      "I build full-stack web experiences where clean code meets great design — from backend APIs to polished, DevOps-ready deployments.",
    "hero.role1": "Software Engineer",
    "hero.role2": "Web & Full-stack Developer",
    "cta.contact": "Contact me",
    "cta.download": "Download CV",

    // About Me section
    "about.intro.line2":
      "I don't just write code — I design systems. From architecture modeling to automated deployment, I build web applications that are robust, scalable, and user-focused.",
    "about.card1.title": "Architecture First",
    "about.card1.desc":
      "I choose the approach that fits the business need — structured monolith or distributed microservices — to keep codebases scalable and maintainable.",
    "about.card2.title": "Full-Stack & AI",
    "about.card2.desc":
      "Building secure APIs and modern interfaces, enhanced with AI tooling to solve complex problems.",
    "about.card3.title": "\"Ship It\" Culture",
    "about.card3.desc":
      "My work doesn't stop at local code. I use my DevOps foundations — Docker, CI/CD — to containerize and harden production releases.",
    "about.objective":
      "I'm now looking for a full-time Software Engineering role where I can keep building scalable systems with solid DevOps practices.",
    "about.stats.projects": "Completed Projects",
    "about.stats.technologies": "Technologies Mastered",
    "about.stats.experience": "Years of Coding",

    // Sections
    "sections.aboutMe": "About Me",
    "sections.skills": "Skills",
    "sections.education": "Education",
    "sections.experience": "Experience",
    "experience.present": "Present",
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
    "nav.experience": "Expérience",
    "nav.certifications": "Certifications",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero (intro section)
    "hero.greeting": "Bonjour, je suis",
    "hero.rolePrefix": "Et je suis",
    "hero.tagline":
      "Je conçois des expériences web full-stack où code propre et bon design se rencontrent — des API backend aux déploiements prêts pour le DevOps.",
    "hero.role1": "Ingénieur Logiciel",
    "hero.role2": "Développeur Web & Full Stack",
    "cta.contact": "Contactez-moi",
    "cta.download": "Télécharger CV",

    // About Me section
    "about.intro.line2":
      "Je ne me contente pas d'écrire du code : je conçois des systèmes. De la modélisation de l'architecture jusqu'au déploiement automatisé, je construis des applications web robustes, scalables et centrées sur l'utilisateur.",
    "about.card1.title": "Architecture d'abord",
    "about.card1.desc":
      "Je choisis l'approche adaptée au besoin métier — monolithe structuré ou microservices distribués — pour garantir des bases de code évolutives et maintenables.",
    "about.card2.title": "Full-Stack & IA",
    "about.card2.desc":
      "Réalisation d'API sécurisées et d'interfaces modernes, enrichies par l'intégration d'outils IA pour résoudre des problèmes complexes.",
    "about.card3.title": "Culture du \"Ship It\"",
    "about.card3.desc":
      "Mon travail ne s'arrête pas au code local. J'utilise mes bases DevOps — Docker, CI/CD — pour conteneuriser et fiabiliser les mises en production.",
    "about.objective":
      "Je recherche aujourd'hui un poste à temps plein en ingénierie logicielle où je pourrai continuer à construire des systèmes scalables avec de solides pratiques DevOps.",
    "about.stats.projects": "Projets Réalisés",
    "about.stats.technologies": "Technologies Maîtrisées",
    "about.stats.experience": "Années de Code",

    // Sections
    "sections.aboutMe": "À propos de moi",
    "sections.skills": "Compétences",
    "sections.education": "Formation",
    "sections.experience": "Expérience",
    "experience.present": "Présent",
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
