import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'
import { Calendar as CalendarIcon } from 'lucide-react'

export default function AcademicCalendarPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Academic Calendar</h1>
                        <p className="text-gray-300">Key dates for the academic year.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { date: "15 Jan 2026", event: "Registration Opens", type: "Admin" },
                            { date: "01 Feb 2026", event: "First Semester Begins", type: "Academic" },
                            { date: "20 Mar 2026", event: "Mid-Semester Break", type: "Holiday" },
                            { date: "15 Jun 2026", event: "Exam Period Starts", type: "Exam" },
                            { date: "01 Jul 2026", event: "Winter Recess", type: "Holiday" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex flex-col items-center justify-center text-secondary border border-white/10">
                                        <CalendarIcon size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{item.event}</h3>
                                        <p className="text-gray-400 text-sm">{item.date}</p>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${item.type === 'Holiday' ? 'bg-red-500/20 text-red-300' :
                                        item.type === 'Exam' ? 'bg-orange-500/20 text-orange-300' : 'bg-blue-500/20 text-blue-300'
                                    }`}>
                                    {item.type}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}
