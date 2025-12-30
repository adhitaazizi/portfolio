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

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-gray-500 text-lg tracking-widest uppercase mb-8">Welcome to my portfolio</p>
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-black mb-6">Muhammad Arrizky Adhita Azizi</h1>
        <p className="text-2xl md:text-3xl text-gray-500 mb-8">AI & Data</p>

        <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          A final year student in computer science at President University, concentrating in Artificial Intelligence. Proactively building a strong foundation in cross-platform application, a machine learning solution, with hands-on experience in many tools and programming languages. Able to work both independently and as a supportive team member. Eagers to solve real-world problems and contribute to innovative technology projects.
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a href="https://github.com/adhitaazizi" className="text-gray-500 hover:text-black transition transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/adhitaazizi" className="text-gray-500 hover:text-black transition transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/adhitaazizi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition transform hover:scale-110">
            <XIcon size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
