import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'

export default function TermsPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8">Terms of Service</h1>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-gray-300 space-y-6">
                        <p className="text-sm text-gray-500">Last Updated: January 01, 2026</p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the Sentro website, you accept and agree to be bound by the terms and provision of this agreement.
                                In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Educational Services</h2>
                            <p>
                                The content provided on this website is for general information and use only. It is subject to change without notice.
                                We reserve the right to modify or discontinue any aspect of our educational programs or services at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
                            <p>
                                You agree not to use the website for any unlawful purpose or any purpose prohibited under this clause.
                                You agree not to use the website in any way that could damage the website, the services, or the general business of Sentro.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                            <p>
                                All content included on the website, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the website,
                                is the property of Sentro or its suppliers and protected by copyright and other laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                            <p>
                                Sentro shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages,
                                including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}
