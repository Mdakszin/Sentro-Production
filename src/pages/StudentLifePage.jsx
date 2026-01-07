import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'
import { motion } from 'framer-motion'
import { Users, Calendar, Trophy, Music, Coffee, BookOpen } from 'lucide-react'

export default function StudentLifePage() {
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
                            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Life</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                            Life at Sentro is about more than just books. It's about community, creativity, and personal growth.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: Users, title: "Clubs & Societies", desc: "Join over 50 student-run clubs ranging from coding to debating." },
                            { icon: Calendar, title: "Events & Socials", desc: "Weekly campus events, music festivals, and networking nights." },
                            { icon: Trophy, title: "Sports", desc: "Competitive and recreational sports leagues for everyone." },
                            { icon: Music, title: "Arts & Culture", desc: "Theater productions, art exhibitions, and musical performances." },
                            { icon: Coffee, title: "Campus Hubs", desc: "Modern cafeterias, student lounges, and collaborative spaces." },
                            { icon: BookOpen, title: "Support Services", desc: "Counseling, academic advising, and career guidance." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="h-[300px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center text-gray-500 font-bold uppercase tracking-widest">
                            Event Gallery 1
                        </div>
                        <div className="h-[300px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center text-gray-500 font-bold uppercase tracking-widest">
                            Event Gallery 2
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}
