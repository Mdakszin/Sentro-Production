import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Contact() {
    return (
        <footer id="contact" className="relative z-10 bg-primary border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center font-bold text-primary">S</div>
                            <span className="text-xl font-bold text-white">Sentro</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Empowering the next generation of leaders through quality education and innovation.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/apply" className="hover:text-secondary transition">Apply Now</Link></li>
                            <li><Link to="/portal" className="hover:text-secondary transition">Student Portal</Link></li>
                            <li><Link to="/calendar" className="hover:text-secondary transition">Academic Calendar</Link></li>
                            <li><Link to="/careers" className="hover:text-secondary transition">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-secondary" size={20} />
                                <span>123 President Street<br />Johannesburg, 2000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-secondary" size={20} />
                                <span>+27 11 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-secondary" size={20} />
                                <span>info@sentro.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe for updates.</p>
                        <div className="flex">
                            <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 w-full text-white focus:outline-none focus:border-secondary" />
                            <button className="bg-secondary text-primary px-4 rounded-r-lg font-bold hover:bg-white transition-colors">→</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sentro. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
