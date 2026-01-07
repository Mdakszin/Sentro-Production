import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
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
                            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Us</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            We're here to help. Reach out to us with any questions about admissions, programs, or campus life.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {[
                            { icon: Phone, title: "Call Us", info: "+27 11 123 4567" },
                            { icon: Mail, title: "Email Us", info: "info@sentro.edu" },
                            { icon: MapPin, title: "Visit Us", info: "123 President St, JHB" },
                            { icon: Clock, title: "Office Hours", info: "Mon - Fri, 8am - 5pm" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.info}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Embedded map or larger/more functional contact form could go here, 
                but we reuse the Footer Contact component for consistency at the bottom */}
            <Contact />
        </div>
    )
}
