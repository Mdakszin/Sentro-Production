import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ApplyPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 px-6 min-h-[70vh] flex items-center">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-5xl font-bold font-heading text-white mb-6">
                            Start Your Journey with <span className="text-secondary">Sentro</span>
                        </h1>
                        <p className="text-gray-300 text-lg mb-10">
                            Our application process is simple and online. Select your desired program and intake year to begin.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-left">
                            <h3 className="text-2xl font-bold text-white mb-6">Application Form</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm">First Name</label>
                                        <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm">Last Name</label>
                                        <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Email Address</label>
                                    <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Interested Faculty</label>
                                    <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none">
                                        <option>Information Technology</option>
                                        <option>Business Management</option>
                                        <option>Engineering</option>
                                        <option>Law & Governance</option>
                                    </select>
                                </div>
                                <button type="button" className="w-full bg-secondary text-primary font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                                    Submit Application <ArrowRight size={20} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Contact />
        </div>
    )
}
