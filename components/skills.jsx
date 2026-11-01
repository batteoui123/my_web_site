"use client"

import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import Image from "next/image"

const skillCategories = [
  {
    name: "languages",
    titleKey: "skills.languages",
    items: [
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    name: "backend",
    titleKey: "skills.backend",
    items: [
      { name: "Spring Boot / Security / Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Spring Data JPA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" }, // Spring Data JPA fallback
      { name: "API REST", icon: "https://api.iconify.design/dashicons/rest-api.svg", className: "dark:invert" },
      { name: "OpenFeign", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" }, // OpenFeign fallback
      { name: "RestClient", icon: "https://img.icons8.com/color/96/api-settings.png" },
      { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg", className: "dark:invert" },
      { name: "JEE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" }, // JEE fallback
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    ],
  },
  {
    name: "frontend",
    titleKey: "skills.frontend",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", className: "dark:invert" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    name: "databases",
    titleKey: "skills.databases",
    items: [
      { name: "SQL", icon: "https://api.iconify.design/mdi/database.svg", className: "dark:invert" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Oracle (PL/SQL)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    name: "devops_tools", // New key, needs translation or fallback
    titleKey: "DevOps & Tools",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", className: "dark:invert" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
      { name: "GitLab CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
      { name: "Docker / Docker Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
      { name: "YAML", icon: "https://api.iconify.design/devicon/yaml.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
      { name: "n8n", icon: "https://api.iconify.design/simple-icons/n8n.svg", className: "dark:invert" },
    ],
  },
  {
    name: "architecture",
    titleKey: "skills.architecture",
    items: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
      { name: "MERISE", icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-database-computer-programming-flaticons-lineal-color-flat-icons.png" }, // Generic DB design icon for MERISE
      { name: "UML", icon: "https://api.iconify.design/material-icon-theme/uml.svg" },
      { name: "Microservices", icon: "https://api.iconify.design/carbon/microservices-1.svg", className: "dark:invert" },
    ],
  },
]

export default function Skills() {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-16 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        <span className="text-foreground">
          <span className="font-black text-[0.55em] align-middle mr-[0.15em] bg-clip-text text-transparent bg-gradient-to-b from-[#7160ED] to-[#6366F1]">{"<"}</span>
          {t("sections.skills")}
          <span className="font-black text-[0.55em] align-middle ml-[0.15em] bg-clip-text text-transparent bg-gradient-to-b from-[#7160ED] to-[#6366F1]">{"/>"}</span>
        </span>
      </motion.h2>

      <motion.div
        className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-xl p-8 backdrop-blur-md hover:border-[#7160ED]/30 transition-all shadow-xl dark:shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold text-[#7160ED] mb-6"
              >
                {category.titleKey === "Languages" ? category.titleKey : (t(`skills.${category.name}`) || category.titleKey)}
              </motion.h3>

              <motion.div
                className={`${category.type === "circular"
                  ? "grid grid-cols-2 md:grid-cols-3 gap-6"
                  : "grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center gap-4 md:gap-10"
                  }`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.items.map((item, index) => (
                  <motion.div
                    key={`${item.name}-${index}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: category.type === "circular" ? 0 : 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-4 p-3 rounded-lg transition-colors cursor-pointer group relative overflow-hidden"
                  >
                    {category.type === "circular" ? (
                      <>
                        <div className="relative w-14 h-14 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="6"
                              fill="transparent"
                              className="text-muted/20"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke={item.percentage === 100 ? "#22c55e" : "#22c55e"}
                              strokeWidth="6"
                              fill="transparent"
                              strokeDasharray={226.2}
                              strokeDashoffset={226.2 - (226.2 * item.percentage) / 100}
                              className="transition-all duration-1000 ease-out"
                            />
                          </svg>
                          <span className="absolute text-xs font-bold text-[#22c55e]">{item.percentage}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-4 relative overflow-hidden rounded-[2px] shadow-sm">
                            <Image
                              src={item.icon}
                              alt={item.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <span className="text-sm font-bold text-foreground">{item.name}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#6366F1]/30 blur-[20px] rounded-full pointer-events-none"
                          animate={{ opacity: [0.08, 0.28, 0.08] }}
                          transition={{
                            duration: 2.4 + (index % 5) * 0.35,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: (index % 7) * 0.3,
                          }}
                          whileHover={{ opacity: 0.9 }}
                        />
                        <div className="w-12 h-12 relative flex items-center justify-center z-10">
                          {/* Check if it's an emoji (flag) or URL */}
                          {item.icon.startsWith("http") ? (
                            <Image
                              src={item.icon}
                              alt={item.name}
                              width={40}
                              height={40}
                              className={`object-contain ${item.className || ""}`}
                              unoptimized // For external URLs
                            />
                          ) : (
                            <span className="text-4xl">{item.icon}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 z-10">
                          <span className="text-xs text-center text-muted-foreground font-medium group-hover:text-foreground transition-colors">{item.name}</span>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
