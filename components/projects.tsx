"use client"

import { useState } from "react"

interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  gradient: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
      technologies: ["Pytorch", "Pytorch Geometric", "Protein Language Model", "Regression"],
      link: "https://github.com/adhitaazizi/chewy",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
      technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Interactive dashboard for visualizing complex datasets with custom charts, filters, and export capabilities.",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      link: "#",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "AI Content Generator",
      description:
        "A web application that uses AI to generate marketing content, blog posts, and social media captions.",
      technologies: ["React", "Next.js", "OpenAI API", "Vercel"],
      link: "#",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <>
      <section id="projects" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-black mb-4 text-center">Personal Projects</h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-16"></div>

          {/* Horizontal scrolling container */}
          <div className="relative">
            <div
              className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-4"
              style={{
                scrollbarWidth: 'thin',
                msOverflowStyle: 'none',
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[550px] lg:w-[600px] bg-white border border-gray-200 hover:border-black transition-all duration-300 group rounded-3xl overflow-hidden snap-center"
                  suppressHydrationWarning
                >
                  {/* Thumbnail / Gradient Placeholder */}
                  <div className={`h-56 md:h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-600 text-sm rounded-full font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center px-5 py-2.5 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-sm"
                    >
                      View Details
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll hint gradient overlays */}
            <div className="absolute left-0 top-0 bottom-6 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block"></div>
            <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block"></div>
          </div>

          {/* Scroll indicator for mobile */}
          <p className="text-center text-gray-400 text-sm mt-4 md:hidden">← Swipe to see more →</p>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Gradient */}
            <div className={`h-48 md:h-56 bg-gradient-to-br ${selectedProject.gradient} relative`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  className="flex-1 text-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Visit Project
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-black hover:text-black transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
