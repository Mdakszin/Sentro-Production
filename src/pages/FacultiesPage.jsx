import { motion } from 'framer-motion'
import { Rocket, Calculator, HeartPulse, Scale, Code, Briefcase, GraduationCap, Users, Lightbulb, Globe } from 'lucide-react'
import Navbar from '../components/UI/Navbar'
import Contact from '../components/UI/Contact'

const facultiesDetail = [
    {
        icon: Code,
        title: 'Information Technology',
        desc: 'Shape the digital future with cutting-edge skills in software development, systems analysis, and artificial intelligence.',
        careers: ['Software Developer', 'Data Scientist', 'Network Engineer', 'Cybersecurity Analyst'],
        departments: [
            'Computer Science',
            'Information Systems',
            'Cyber Security & Forensics',
            'Artificial Intelligence'
        ]
    },
    {
        icon: Briefcase,
        title: 'Business Management',
        desc: 'Master the art of leadership, finance, and marketing to drive organizational success in the global economy.',
        careers: ['Business Analyst', 'Marketing Manager', 'Financial Advisor', 'Project Manager'],
        departments: [
            'Business Administration',
            'Marketing & Sales',
            'Human Resource Management',
            'Supply Chain Management'
        ]
    },
    {
        icon: Rocket,
        title: 'Engineering',
        desc: 'Design, build, and innovate solutions that solve real-world problems in civil, electrical, and mechanical fields.',
        careers: ['Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Robotics Specialist'],
        departments: [
            'Civil Engineering',
            'Electrical Engineering',
            'Mechanical Engineering',
            'Chemical Engineering'
        ]
    },
    {
        icon: Scale,
        title: 'Law & Governance',
        desc: 'Uphold justice and shape policy with a deep understanding of public law, human rights, and corporate governance.',
        careers: ['Attorney', 'Legal Consultant', 'Policy Analyst', 'Compliance Officer'],
        departments: [
            'Public Law',
            'Private Law',
            'Criminal Justice',
            'Corporate Governance'
        ]
    },
    {
        icon: Calculator,
        title: 'Accounting',
        desc: 'Gain precision and expertise in financial accounting, auditing, and taxation to become a pillar of economic integrity.',
        careers: ['Chartered Accountant', 'Auditor', 'Tax Consultant', 'Financial Manager'],
        departments: [
            'Financial Accounting',
            'Management Accounting',
            'Auditing & Tax',
            'Public Sector Accounting'
        ]
    },
    {
        icon: HeartPulse,
        title: 'Health Sciences',
        desc: 'Dedicate yourself to healing and wellness through comprehensive programs in nursing, pharmacy, and public health.',
        careers: ['Registered Nurse', 'Pharmacist', 'Health Administrator', 'Public Health Official'],
        departments: [
            'Nursing Science',
            'Pharmacy',
            'Public Health',
            'Wellness & Nutrition'
        ]
    },
    {
        icon: GraduationCap,
        title: 'Education',
        desc: 'Inspire the next generation with modern pedagogical techniques and a passion for lifelong learning.',
        careers: ['Teacher', 'Curriculum Developer', 'Education Administrator', 'Lecturer'],
        departments: [
            'Foundation Phase Teaching',
            'Intermediate Phase Teaching',
            'Educational Psychology',
            'Curriculum Studies'
        ]
    },
    {
        icon: Globe,
        title: 'Humanities',
        desc: 'Explore the human experience through language, history, and social sciences to foster critical thinking and empathy.',
        careers: ['Journalist', 'Social Worker', 'Historian', 'Translator'],
        departments: [
            'Communication Science',
            'Social Work',
            'History & Political Studies',
            'Languages & Literature'
        ]
    }
]

export default function FacultiesPage() {
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
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Faculties</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Discover a world of opportunity across our diverse faculties. Each tailored to equip you with the skills and knowledge to lead in your chosen field.
                        </p>
                    </motion.div>

                    <div className="grid gap-12">
                        {facultiesDetail.map((faculty, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors"
                            >
                                <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                                    <div className="flex flex-col gap-6">
                                        <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                                            <faculty.icon size={40} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white">{faculty.title}</h2>
                                        <p className="text-gray-400 text-lg leading-relaxed">
                                            {faculty.desc}
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-8 bg-black/20 p-8 rounded-xl">
                                        <div>
                                            <h3 className="text-secondary font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <Users size={18} /> Departments
                                            </h3>
                                            <ul className="space-y-2">
                                                {faculty.departments.map((dept, i) => (
                                                    <li key={i} className="text-gray-300 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                                        {dept}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-accent font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <Lightbulb size={18} /> Career Paths
                                            </h3>
                                            <ul className="space-y-2">
                                                {faculty.careers.map((career, i) => (
                                                    <li key={i} className="text-gray-300 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                                        {career}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    )
}
