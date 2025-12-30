import Link from 'next/link'
import { Github } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navigation />

            <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
                <div className="mb-8">
                    <Github className="w-24 h-24 text-gray-900" />
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    404 - Page Not Found
                </h1>

                <p className="text-gray-600 mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                    Go Back Home
                </Link>
            </main>

            <Footer />
        </div>
    )
}
