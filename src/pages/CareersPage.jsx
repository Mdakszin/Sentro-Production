import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'

export default function CareersPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Join Our Team</h1>
                    <p className="text-gray-300 text-lg mb-12">
                        We are always looking for passionate educators and administrators to join the Sentro family.
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
                        <p className="text-gray-400 mb-6">There are currently no open positions.</p>
                        <p className="text-gray-500 text-sm">
                            Please check back later or send your CV to <a href="mailto:careers@sentro.edu" className="text-secondary hover:underline">careers@sentro.edu</a> for future consideration.
                        </p>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}
