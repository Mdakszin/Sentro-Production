import { motion } from 'framer-motion'
import { Calendar, MapPin, Search } from 'lucide-react'
import { useState } from 'react'
import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'

const eventsData = [
    {
        id: 1,
        title: "Future of AI Summit",
        faculty: "Information Technology",
        date: "Feb 20, 2026",
        time: "09:00 AM",
        location: "Main Auditorium",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        description: "Join industry leaders and researchers as we explore the ethical implications and future possibilities of Artificial Intelligence."
    },
    {
        id: 2,
        title: "Sustainable Engineering Expo",
        faculty: "Engineering",
        date: "Mar 05, 2026",
        time: "10:30 AM",
        location: "Engineering Hall",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        description: "Showcasing student projects and innovations in renewable energy and sustainable infrastructure solutions."
    },
    {
        id: 3,
        title: "Global Economics Forum",
        faculty: "Business Management",
        date: "Mar 12, 2026",
        time: "01:00 PM",
        location: "Business Center",
        image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=800",
        description: "A panel discussion on emerging global market trends and the changing landscape of international trade."
    },
    {
        id: 4,
        title: "Modern Art Symposium",
        faculty: "Humanities",
        date: "Apr 10, 2026",
        time: "11:00 AM",
        location: "Gallery Hall",
        image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=800",
        description: "Exploring contemporary art movements and their impact on modern society and culture."
    },
    {
        id: 5,
        title: "Health & Wellness Workshop",
        faculty: "Health Sciences",
        date: "Apr 25, 2026",
        time: "08:00 AM",
        location: "Student Center",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
        description: "Practical sessions on maintaining physical and mental well-being during stressful academic periods."
    },
    {
        id: 6,
        title: "Legal Tech Conference",
        faculty: "Law & Governance",
        date: "May 08, 2026",
        time: "09:30 AM",
        location: "Moot Court",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
        description: "Discussing the digitization of legal services and the future of law practice in the digital age."
    }
]

export default function EventsPage() {
    const [filter, setFilter] = useState('')

    const filteredEvents = eventsData.filter(event =>
        event.title.toLowerCase().includes(filter.toLowerCase()) ||
        event.faculty.toLowerCase().includes(filter.toLowerCase())
    )

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
                            Campus <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">Events</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                            Stay connected with the vibrant academic and social life at Sentro. Discover workshops, seminars, and expos happening across our faculties.
                        </p>

                        <div className="max-w-md mx-auto relative group">
                            <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-red-500 rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
                            <div className="relative flex items-center bg-black/40 border border-white/10 rounded-full px-6 py-3 backdrop-blur-md">
                                <Search className="text-gray-400 mr-3" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search events or faculties..."
                                    className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500"
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 right-4 z-20 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                                        {event.faculty}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-orange-400 text-sm font-bold mb-3 gap-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} /> {event.date}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-gray-400 font-normal">
                                            {event.time}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="flex items-center text-gray-400 text-sm mb-4">
                                        <MapPin size={14} className="mr-1.5" /> {event.location}
                                    </div>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                        {event.description}
                                    </p>
                                    <button className="w-full py-2.5 rounded-lg bg-white/10 text-white font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/5">
                                        Register Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredEvents.length === 0 && (
                        <div className="text-center text-gray-500 py-12">
                            <p className="text-xl">No events found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>

            <Contact />
        </div>
    )
}
