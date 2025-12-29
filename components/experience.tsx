export default function Experience() {
  const experiences = [
    {
      company: "Tech Company Inc",
      position: "Senior Software Engineer",
      period: "2023 - Present",
      description:
        "Led development of scalable web applications using React and Node.js. Mentored junior developers and improved system performance by 40%.",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      company: "Digital Solutions Ltd",
      position: "Full Stack Developer",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved deployment efficiency.",
      skills: ["React", "Python", "AWS", "Docker"],
    },
    {
      company: "StartUp Hub",
      position: "Junior Developer",
      period: "2020 - 2021",
      description:
        "Built responsive web interfaces and collaborated with design teams. Fixed bugs and optimized frontend performance.",
      skills: ["JavaScript", "React", "CSS", "Git"],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif font-bold text-black mb-4 text-center">Work Experience</h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-16"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 border border-gray-200 hover:border-gray-400 transition rounded-3xl" suppressHydrationWarning>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">{exp.position}</h3>
                  <p className="text-gray-600 text-lg">{exp.company}</p>
                </div>
                <p className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
