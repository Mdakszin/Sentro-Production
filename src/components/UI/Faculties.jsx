import { motion } from 'framer-motion'
import { Rocket, Calculator, HeartPulse, Scale, Code, Briefcase } from 'lucide-react'

const faculties = [
    { icon: Code, title: 'Information Technology', desc: 'Software Dev, Systems Analysis, AI' },
    { icon: Briefcase, title: 'Business Management', desc: 'Leadership, Marketing, Finance' },
    { icon: Rocket, title: 'Engineering', desc: 'Civil, Electrical, Mechanical' },
    { icon: Scale, title: 'Law & Governance', desc: 'Public Law, Human Rights, Policy' },
    { icon: Calculator, title: 'Accounting', desc: 'Financial Accounting, Auditing' },
    { icon: HeartPulse, title: 'Health Sciences', desc: 'Nursing, Pharmacy Assistance' },
]

export default function Faculties() {
    return (
        <section id="faculties" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Our Faculties</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Choose Your <span className="text-accent">Path</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl text-lg">
                        Our diverse range of faculties ensures that you find a program that aligns with your passion and career goals.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faculties.map((faculty, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 duration-500">
                                <faculty.icon size={100} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 text-accent">
                                    <faculty.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{faculty.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{faculty.desc}</p>
                                <div className="flex text-secondary font-bold text-sm uppercase tracking-wider items-center gap-2 group-hover:gap-4 transition-all">
                                    View Programs <span className="text-xl">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
