import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Float, Stars, ScrollControls, useScroll } from '@react-three/drei'
import * as THREE from 'three'

function Planet({ position, size, color, speed = 1, orbitRadius = 0, orbitSpeed = 0.5 }) {
    const meshRef = useRef(null)
    const randomOffset = useMemo(() => Math.random() * 100, [])

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime()
            // Self rotation
            meshRef.current.rotation.y += 0.002 * speed

            // Orbit logic
            if (orbitRadius > 0) {
                // Orbit around the initial position provided
                meshRef.current.position.x = position[0] + Math.cos(t * orbitSpeed + randomOffset) * orbitRadius
                meshRef.current.position.z = position[2] + Math.sin(t * orbitSpeed + randomOffset) * orbitRadius * 0.5 // Elliptical factor
            }
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position}>
                <sphereGeometry args={[size, 64, 64]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.8}
                    metalness={0.2}
                />
            </mesh>
        </Float>
    )
}

function MovingStars({ color }) {
    const groupRef = useRef(null)

    useFrame((state) => {
        if (groupRef.current) {
            // Mouse parallax effect
            // state.pointer.x/y are normalized coordinates (-1 to 1)
            const { x, y } = state.pointer

            // Smoothly interpolate rotation for "movable" feel
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.05, 0.1)
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.05, 0.1)
        }
    })

    return (
        <group ref={groupRef}>
            <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={0.5} />
        </group>
    )
}

function SceneContent({ route }) {
    // Determine color based on route
    const getTheme = () => {
        switch (route) {
            case '/about': return '#3b82f6' // Blue
            case '/faculties': return '#10b981' // Emerald
            case '/student-life': return '#f43f5e' // Rose
            case '/contact': return '#8b5cf6' // Violet
            default: return '#eab308' // Default Yellow/Gold
        }
    }

    const themeColor = getTheme()

    return (
        <>
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <MovingStars color={themeColor} />

            <group position={[0, 0, -5]}>
                {/* Main Planet - Theme Colored */}
                <Planet
                    position={[3, 1, -10]}
                    size={2.5}
                    color={themeColor}
                    speed={2}
                />

                {/* Orbiting Satellite/Moon */}
                <Planet
                    position={[-4, -2, -15]}
                    size={1.2}
                    color="#ffffff"
                    speed={1}
                    orbitRadius={2}
                    orbitSpeed={0.3}
                />

                {/* Distant Planet */}
                <Planet
                    position={[-6, 4, -20]}
                    size={3}
                    color="#1e293b" // Slate 800
                    speed={0.5}
                />
            </group>

            <Environment preset="city" />
        </>
    )
}

export default function Scene({ route }) {
    return (
        <ScrollControls pages={5} damping={0.3}>
            <SceneContent route={route} />
        </ScrollControls>
    )
}
