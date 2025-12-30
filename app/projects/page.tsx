import Navigation from "@/components/navigation"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Navigation />
            <div className="pt-20">
                <Projects />
            </div>
            <Footer />
        </div>
    )
}
