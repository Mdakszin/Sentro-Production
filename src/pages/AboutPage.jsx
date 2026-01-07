import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'
import { motion } from 'framer-motion'
import { Target, Users, Award, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Sentro</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                            Sentro (formerly Gauteng City College) is a premier educational institution dedicated to empowering the next generation of leaders. We bridge the gap between academic theory and practical application.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                To be a globally recognized hub of innovation and excellence, shaping minds that will define the future of industry and society. We believe in education that not only informs but transforms.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { icon: Target, text: "Excellence in Teaching" },
                                    { icon: Users, text: "Student-Centric Approach" },
                                    { icon: Award, text: "Industry Recognition" },
                                    { icon: ShieldCheck, text: "Integrity & Ethics" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-secondary">
                                            <item.icon size={20} />
                                        </div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-[400px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-gray-500 font-bold uppercase tracking-widest z-10">Campus Image Placeholder</span>
                        </motion.div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Our History</h2>
                        <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            Founded with a mission to provide accessible, high-quality education, Sentro has grown from a small city campus to a leading institution. The rebrand from Gauteng City College to Sentro marks our evolution into a center of modern excellence, embracing technology and global standards.
                        </p>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}
