import { Github, Linkedin } from "lucide-react"

// Custom X (formerly Twitter) icon component
const XIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

export default function About() {
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
        <>
            <section className="min-h-screen flex items-center justify-center px-4 pb-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-2">
                            Muhammad Arrizky
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-4">
                            Adhita Azizi
                        </h1>
                        <p className="text-2xl md:text-2xl text-red-600 dark:text-red-500 mb-8 font-medium">
                            Machine Learning System and Compute at Scale.
                        </p>

                        <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 space-y-4">
                            <p>
                                A final year student in computer science at President University, concentrating in Artificial Intelligence. Proactively building a strong foundation in cross-platform application, a machine learning solution, with hands-on experience in many tools and programming languages.
                            </p>
                            <p>
                                Able to work both independently and as a supportive team member. Eager to solve real-world problems and contribute to innovative technology projects.
                            </p>
                        </div>

                        <div className="flex gap-6">
                            <a href="https://github.com/adhitaazizi" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition transform hover:scale-110">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/adhitaazizi" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition transform hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://x.com/adhitaazizi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition transform hover:scale-110">
                                <XIcon size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="w-80 h-80 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 dark:text-gray-500 text-lg">Placeholder Image</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="pb-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-black dark:text-white mb-6">Work Experience</h2>
                    <ul className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {experiences.map((exp, index) => (
                            <li key={index}>
                                <span className="font-semibold text-black dark:text-white">
                                    {exp.position} at {exp.company} ({exp.period}):
                                </span>{" "}
                                {exp.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}
