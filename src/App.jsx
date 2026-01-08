import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
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
import EventsPage from './pages/EventsPage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/Utils/ScrollToTop'

import { useEffect } from 'react'
import Lenis from 'lenis'

function App() {
  const location = useLocation()

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
            <Scene route={location.pathname} />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay */}
      {/* We use a wrapper for the content that scrolls normally */}
      <main className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
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
            <Route path="/events" element={<EventsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
