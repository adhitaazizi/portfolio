export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-2 py-4">
        <div className="flex justify-end items-end">
          <div className="hidden md:flex gap-8">
            <a href="#experience" className="text-gray-600 hover:text-black transition">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 hover:text-black transition">
              Projects
            </a>
            <a href="#certifications" className="text-gray-600 hover:text-black transition">
              Certifications
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
