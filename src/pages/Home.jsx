import Hero from '../components/UI/Hero'
import About from '../components/UI/About'
import Faculties from '../components/UI/Faculties'
import StudentLife from '../components/UI/StudentLife'
import Contact from '../components/UI/Contact'

// This component aggregates the "Home" sections
export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Faculties />
            <StudentLife />
            <Contact />
        </>
    )
}
