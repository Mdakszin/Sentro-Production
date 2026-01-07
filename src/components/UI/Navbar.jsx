import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-lg py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    {/* Logo placeholder */}
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-primary font-heading">
                        S
                    </div>
                    <span className="text-2xl font-heading font-bold text-white tracking-tight">
                        Sentro
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'About', 'Faculties', 'Student Life', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : item === 'Faculties' ? '/faculties' : `/#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-gray-300 hover:text-secondary font-medium transition-colors text-sm uppercase tracking-wider"
                        >
                            {item}
                        </Link>
                    ))}
                    <button className="bg-secondary text-primary px-6 py-2 rounded-full font-bold hover:bg-white transition-colors">
                        Apply Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 md:hidden">
                    {['Home', 'About', 'Faculties', 'Student Life', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : item === 'Faculties' ? '/faculties' : `/#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-white hover:text-secondary font-heading text-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <button className="bg-secondary text-primary w-full py-3 rounded-lg font-bold">
                        Apply Now
                    </button>
                </div>
            )}
        </nav>
    )
}
