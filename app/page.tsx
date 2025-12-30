import About from "@/components/about"

import Certifications from "@/components/certifications"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />
      <About />

      <Certifications />
      <Footer />
    </div>
  )
}
