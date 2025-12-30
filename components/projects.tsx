"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type Category = "AI & Data" | "Mobile" | "Web" | "Desktop"

interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  gradient: string
  category: Category
}

const CategoryInfo: Record<Category, { title: string; description: string }> = {
  "AI & Data": {
    title: "AI & Data",
    description: "Machine learning models, data analysis pipelines, and intelligent systems."
  },
  "Mobile": {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications built for performance and user experience."
  },
  "Web": {
    title: "Web Development",
    description: "Responsive, dynamic, and scalable web applications using modern frameworks."
  },
  "Desktop": {
    title: "Desktop Applications",
    description: "Robust software solutions optimized for desktop environments."
  }
}

// Tech Stack Icons
const TechIcons: Record<string, React.ReactNode> = {
  "React": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c1.94 0 3.754.512 5.32 1.408l-1.076 1.864A7.957 7.957 0 0 0 12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8a7.957 7.957 0 0 0-4.244-7.272l1.076-1.864A9.957 9.957 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM4 12c0-4.418 3.582-8 8-8 1.854 0 3.555.632 4.907 1.693L5.693 16.907A7.94 7.94 0 0 1 4 12zm8 8c-1.854 0-3.555-.632-4.907-1.693l11.214-11.214A7.94 7.94 0 0 1 20 12c0 4.418-3.582 8-8 8z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  "TypeScript": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM16.5 16.5c-1.25 1.25-2.75 1.5-4.5 1.5-2.5 0-4-1.5-4-3.5 0-2 1.5-3.5 4-3.5 1 0 1.75.25 2.25.75l-1 1.5c-.5-.25-.75-.5-1.25-.5-1.25 0-2 .75-2 1.75s.75 1.75 2 1.75c.75 0 1.25-.25 1.75-.75l1 1.5zM20 18h-2v-5h-2.5v-2H22v2h-2v5z" />
    </svg>
  ),
  "Python": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-2H6.38l-.16-.01-.15-.06-.14-.08-.12-.11-.08-.13-.05-.14-.01-.15.03-.13.08-.12.11-.1.15-.07.16-.01h2.53l.63.02.48.06.47.1.44.15.54.26.4.24.47.38.35.35.48.64.3.56.23.63.1.53.03.39v4.28h3.84l.2.02.17.07.14.09.11.12.06.14.03.14-.01.14-.06.13-.09.11-.13.08-.14.05h-4.2V.18l-.2.01zm-3.1 1.26l-.08.01-.12.06-.09.1-.05.12-.02.14.03.14.09.12.13.09.16.03.18-.01.15-.05.09-.09.06-.12.01-.14-.02-.13-.07-.12-.12-.1-.14-.05-.16.01zm5.22 5.56l-.06.01-.12.05-.1.09-.06.12-.02.14.02.14.08.12.14.09.16.03.18-.01.15-.05.1-.09.05-.12.02-.14-.02-.14-.07-.11-.13-.1-.15-.04-.15.01zM9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13v-5.36l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h4.97l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h2.25l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01h-8.16v2h5.17l.16.01.15.06.14.08.12.11.08.13.05.14.01.15-.03.13-.08.12-.11.1-.15.07-.16.01h-2.53l-.63-.02-.48-.06-.47-.1-.44-.15-.54-.26-.4-.24-.47-.38-.35-.35-.48-.64-.3-.56-.23-.63-.1-.53-.03-.39v-4.28H1.67l-.2-.02-.17-.07-.14-.09-.11-.12-.06-.14-.03-.14.01-.14.06-.13.09-.11.13-.08.14-.05h4.2v5.34l.2-.01z" />
    </svg>
  ),
  "Pytorch": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm-1.5 5.5l-3 3 3 3 3-3-3-3zm1.5 8c-3.038 0-5.5 2.462-5.5 5.5S8.962 24.5 12 24.5 17.5 22.038 17.5 19 15.038 13.5 12 13.5zm0 8.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  "OpenAI API": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 9.7825 0a5.999 5.999 0 0 0-4.3216 1.8384A6.0596 6.0596 0 0 0 0 6.0567a6.0125 6.0125 0 0 0 1.696 4.3168 5.993 5.993 0 0 0 .5157 4.9088 6.0487 6.0487 0 0 0 6.5098 2.902A6.0536 6.0536 0 0 0 14.1793 24a6.0028 6.0028 0 0 0 4.3206-1.8384A6.057 6.057 0 0 0 24 17.9403a6.0028 6.0028 0 0 0-1.7181-8.1192ZM13.0673 2.12a4.4079 4.4079 0 0 1 3.5532 1.815L15.429 2.12Zm-2.1287 0 .1955 1.813L10.9387 2.12Zm-6.5218 8.026a4.4284 4.4284 0 0 1-1.3655-3.8445l.9332.6105a2.536 2.536 0 0 0 .6105 3.336Zm-.6786 1.037L5.597 10.51l.1565 1.8282a4.398 4.398 0 0 1-2.0153-.1532Zm2.5592 5.0935.9407-1.4284a2.505 2.505 0 0 0 3.3887.1691l-1.0772 1.487a4.3854 4.3854 0 0 1-3.2522-.2277Zm1.6146.9114 1.159-1.446 1.155 1.446a4.4284 4.4284 0 0 1-2.314-.002Zm6.4958-1.5714a2.52 2.52 0 0 0-.66-3.3595l1.0968-1.464a4.4258 4.4258 0 0 1 1.259 4.148Zm.9472-1.2854L18.406 13.5l-.1591-1.823a4.444 4.444 0 0 1 2.053.8647Zm-3.031-6.7214-.9407 1.4285a2.5076 2.5076 0 0 0-3.3887-.1691l1.0772-1.487a4.3933 4.3933 0 0 1 3.2522.2276ZM12 7.155a3.197 3.197 0 0 1 2.68 1.4938l-4.0044 2.3087-1.3216-2.289A3.2075 3.2075 0 0 1 12 7.155Zm-3.3912 6.002 1.3256-2.2965 4.007 2.3162a3.1892 3.1892 0 0 1-5.3326-.0197Zm9.293-1.025-1.3283 2.2966-4.0044-2.3113a3.197 3.197 0 0 1 2.68-1.4913 3.2205 3.2205 0 0 1 2.6527 1.506Z" />
    </svg>
  ),
  "Firebase": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M3.89 15.672L6.255.406a.916.916 0 0 1 1.637-.367l2.844 5.617 3.737-7.662a.49.49 0 0 1 .894.02l6.29 11.83 1.942 3.82c.504 1.01-.225 2.22-1.354 2.22H1.96c-1.123 0-1.85-1.196-1.36-2.197l3.29-6.997z" />
    </svg>
  ),
  "D3.js": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 12 2 12 2zm-2 5h4c1.105 0 2 .895 2 2v2c0 1.105-.895 2-2 2H8v-2h2v2h2V9h-2v2h-2V7z" />
    </svg>
  ),
  "PostgreSQL": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 12 2 12 2zm-2 5h4c.552 0 1 .448 1 1s-.448 1-1 1h-2v6h2c.552 0 1 .448 1 1s-.448 1-1 1h-4c-.552 0-1-.448-1-1v-8c0-.552.448-1 1-1z" />
    </svg>
  ),
  "Vercel": (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  )
}

function getTechIcon(name: string) {
  return TechIcons[name] || (
    <div className="w-full h-full flex items-center justify-center font-bold text-xs bg-gray-200 rounded-full">
      {name[0]}
    </div>
  )
}

function TechBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
      <div className="w-3 h-3 text-gray-700 dark:text-gray-300">
        {getTechIcon(name)}
      </div>
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{name}</span>
    </div>
  )
}

function MainTechStack({ technologies, selected, onToggle }: { technologies: string[], selected: string[], onToggle: (tech: string) => void }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 my-8">
      {technologies.map((tech) => {
        const isSelected = selected.includes(tech);
        return (
          <button
            key={tech}
            onClick={() => onToggle(tech)}
            className="group relative focus:outline-none"
          >
            <div className={cn(
              "w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-sm border transition-all duration-300",
              isSelected
                ? "border-black dark:border-white ring-2 ring-black/10 dark:ring-white/10 scale-110"
                : "border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md"
            )}>
              <div className={cn(
                "w-6 h-6 transition-transform duration-300",
                isSelected ? "text-black dark:text-white" : "text-gray-700 dark:text-gray-300 group-hover:scale-110"
              )}>
                {getTechIcon(tech)}
              </div>
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm border dark:border-gray-700 whitespace-nowrap z-10 pointer-events-none">
              {tech}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="w-[300px] md:w-[350px] flex-shrink-0 bg-white dark:bg-gray-900 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 transition-all duration-300 group rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      {/* Thumbnail */}
      <div className={`h-40 w-full rounded-xl bg-gradient-to-br ${project.gradient} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-inner`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
        {project.technologies.slice(0, 3).map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
        {project.technologies.length > 3 && (
          <div className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-full font-medium border border-gray-100 dark:border-gray-700">
            +{project.technologies.length - 3}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function CategorySection({
  category,
  projects,
  onProjectClick
}: {
  category: Category,
  projects: Project[],
  onProjectClick: (p: Project) => void
}) {
  if (projects.length === 0) return null;

  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {CategoryInfo[category].title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          {CategoryInfo[category].description}
        </p>
      </div>

      <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x gap-6">
        {projects.map(project => (
          <div key={project.title} className="snap-start">
            <ProjectCard project={project} onClick={() => onProjectClick(project)} />
          </div>
        ))}
      </div>
    </div>
  )
}


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([])

  const projects: Project[] = [
    {
      title: "Antigen-Antibody Affinity Prediction",
      description:
        `
        Trained and eveluated a Graph Attention Network based architecture model for predicting binding affinity of
        Antibody-Antigen prediction on protein data from ABRank benchmark. The implementation in this project is
        only using the hard-ag split and the model shows the competitive performance in the split with the
        state-of-the-art model.
        `,
      technologies: ["Pytorch", "Python", "Regression"],
      link: "https://github.com/adhitaazizi/chewy",
      gradient: "from-purple-500 to-pink-500",
      category: "AI & Data"
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
      technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500",
      category: "Web"
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Interactive dashboard for visualizing complex datasets with custom charts, filters, and export capabilities.",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      link: "#",
      gradient: "from-green-500 to-teal-500",
      category: "AI & Data"
    },
    {
      title: "AI Content Generator",
      description:
        "A web application that uses AI to generate marketing content, blog posts, and social media captions.",
      technologies: ["React", "Next.js", "OpenAI API", "Vercel"],
      link: "#",
      gradient: "from-orange-500 to-red-500",
      category: "Web"
    },
  ]

  const uniqueTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies)))

  const toggleTech = (tech: string) => {
    setSelectedTechStacks(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    )
  }

  const filterProjects = (projects: Project[]) => {
    if (selectedTechStacks.length === 0) return projects;
    return projects.filter(project =>
      selectedTechStacks.every(tech => project.technologies.includes(tech))
    );
  }

  const filteredProjects = filterProjects(projects);
  const categories: Category[] = ["AI & Data", "Mobile", "Web", "Desktop"];

  return (
    <>
      <section id="projects" className="py-24 px-4 bg-white dark:bg-black min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-black dark:text-white mb-6">Personal Projects</h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>

            {/* Tech Stack Banner */}
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">Filter by technology</p>
            <MainTechStack
              technologies={uniqueTechnologies}
              selected={selectedTechStacks}
              onToggle={toggleTech}
            />
          </div>

          {/* Categories */}
          <div className="space-y-4">
            {categories.map(category => (
              <CategorySection
                key={category}
                category={category}
                projects={filteredProjects.filter(p => p.category === category)}
                onProjectClick={setSelectedProject}
              />
            ))}

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                No projects match the selected filters.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`h-64 bg-gradient-to-br ${selectedProject.gradient} relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-10"
                >
                  ✕
                </button>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-wider rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white drop-shadow-sm leading-tight">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-10">
                <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-10">
                  {selectedProject.description.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line.trim()}</p>
                  ))}
                </div>

                <div className="mb-10">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Built With</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    View Project Live
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
