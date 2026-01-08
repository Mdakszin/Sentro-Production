import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'
import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

export default function NotFoundPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <section className="pt-40 pb-20 px-6 min-h-[80vh] flex items-center justify-center text-center">
                <div className="container mx-auto">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-secondary animate-pulse">
                        <AlertTriangle size={48} />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold font-heading text-white mb-4">404</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-8">Page Not Found</h2>
                    <p className="text-gray-400 max-w-md mx-auto mb-12">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link to="/" className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-colors inline-block">
                        Go Back Home
                    </Link>
                </div>
            </section>
            <Contact />
        </div>
    )
}
