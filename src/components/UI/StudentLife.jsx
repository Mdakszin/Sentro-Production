import { motion } from 'framer-motion'

export default function StudentLife() {
    return (
        <section id="life" className="py-20 relative z-10 bg-black/40 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Student Life</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            More Than Just <span className="text-accent">Studying</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            At Sentro, we believe in a holistic education. Join clubs, participate in sports, and engage in community outreach programs.
                        </p>

                        <div className="flex flex-col gap-4">
                            {['Sports & Recreation', 'Tech & Innovation Clubs', 'Student Council', 'Community Outreach'].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-white p-4 bg-white/5 rounded-lg border border-white/10">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4 h-[500px]"
                    >
                        <div className="bg-white/10 rounded-2xl col-span-2 row-span-1 animate-pulse"></div>
                        <div className="bg-white/5 rounded-2xl col-span-1 row-span-1 animate-pulse"></div>
                        <div className="bg-white/5 rounded-2xl col-span-1 row-span-1 animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
