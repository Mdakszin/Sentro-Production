import { motion } from 'framer-motion'
import { GraduationCap, Users, Globe, Trophy } from 'lucide-react'

const features = [
    {
        icon: GraduationCap,
        title: 'Academic Excellence',
        desc: 'Our curriculum is crafted by industry experts to ensure you are job-ready from day one.'
    },
    {
        icon: Users,
        title: 'Diverse Community',
        desc: 'Join a vibrant, multicultural student body that fosters creativity and collaboration.'
    },
    {
        icon: Globe,
        title: 'Global Recognition',
        desc: 'Our qualifications are recognized internationally, opening doors to global opportunities.'
    },
    {
        icon: Trophy,
        title: 'Award Winning',
        desc: 'Consistently ranked among the top colleges for innovation and student satisfaction.'
    },
]

export default function About() {
    return (
        <section id="about" className="py-20 bg-primary/30 backdrop-blur-sm relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                        Shaping the <span className="text-accent">Future</span> of Education
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
