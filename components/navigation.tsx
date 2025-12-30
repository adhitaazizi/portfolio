import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pr-12">
        <div className="flex justify-end items-center">
          <div className="hidden md:flex items-center gap-2">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              Projects
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
