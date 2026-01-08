import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, Stars, ScrollControls, useScroll, Text } from '@react-three/drei'
import * as THREE from 'three'

function Box({ position, rotation, color }) {
    const meshRef = useRef(null)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2
            meshRef.current.rotation.y += delta * 0.1
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position} rotation={rotation}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.2}
                    wireframe
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    )
}

function MovingStars() {
    const scroll = useScroll()
    const starsRef = useRef(null)

    useFrame(() => {
        if (starsRef.current) {
            // Rotate stars based on scroll
            starsRef.current.rotation.y = scroll.offset * 0.5
        }
    })

    return (
        <group ref={starsRef}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
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
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

            <MovingStars color={themeColor} />

            <group position={[0, 0, -5]}>
                {/* Background Elements */}
                <Box position={[-5, 2, -10]} rotation={[0, 0, 0]} color={themeColor} />
                <Box position={[6, -3, -15]} rotation={[1, 1, 0]} color={themeColor} />
                <Box position={[-8, -5, -20]} rotation={[0.5, 0.5, 0]} color={themeColor} />
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
