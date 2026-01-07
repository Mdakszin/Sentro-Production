import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'

export default function StudentPortalPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 px-6 min-h-[80vh] flex items-center justify-center">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 w-full max-w-md text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Student Portal</h1>
                    <p className="text-gray-400 mb-8">Login to access your dashboard</p>

                    <form className="space-y-4 text-left">
                        <div>
                            <label className="block text-gray-400 text-sm mb-1">Student ID</label>
                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-1">Password</label>
                            <input type="password" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none" />
                        </div>
                        <button className="w-full bg-accent text-white font-bold py-3 rounded-lg hover:bg-white/20 transition-colors">
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white">Forgot Password?</a>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}
