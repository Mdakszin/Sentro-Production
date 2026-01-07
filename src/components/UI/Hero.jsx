import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase mb-4 block">
                            Welcome to Sentro
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                            Ignite Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                Potential
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
                            Experience world-class education in a dynamic environment designed for the future leaders of tomorrow.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-all transform hover:scale-105">
                                Explore Courses <ArrowRight size={20} />
                            </button>
                            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
                                Virtual Tour
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right side is left empty for the 3D focus */}
                <div className="hidden md:block"></div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-xs tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    )
}
