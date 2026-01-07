import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './components/Scene'
import Navbar from './components/UI/Navbar'
import Hero from './components/UI/Hero'
import About from './components/UI/About'
import Faculties from './components/UI/Faculties'
import StudentLife from './components/UI/StudentLife'
import Contact from './components/UI/Contact'

function App() {
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
        <Hero />
        <About />
        <Faculties />
        <StudentLife />
        <Contact />
      </main>
    </div>
  )
}

export default App
