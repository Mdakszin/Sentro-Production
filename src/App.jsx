import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Scene from './components/Scene'
import Navbar from './components/UI/Navbar'
import Home from './pages/Home'
import FacultiesPage from './pages/FacultiesPage'
import AboutPage from './pages/AboutPage'
import StudentLifePage from './pages/StudentLifePage'
import ContactPage from './pages/ContactPage'
import ApplyPage from './pages/ApplyPage'
import StudentPortalPage from './pages/StudentPortalPage'
import AcademicCalendarPage from './pages/AcademicCalendarPage'
import CareersPage from './pages/CareersPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

import { useEffect } from 'react'
import Lenis from 'lenis'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative w-full bg-primary">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 15], fov: 45 }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay */}
      {/* We use a wrapper for the content that scrolls normally */}
      <main className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculties" element={<FacultiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/student-life" element={<StudentLifePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/portal" element={<StudentPortalPage />} />
          <Route path="/calendar" element={<AcademicCalendarPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
