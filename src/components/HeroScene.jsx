import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function createParticlePositions(count) {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        const r = 2.4
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
}

function ParticleSphere() {
    const ref = useRef(null)
    const count = 3000
    const [positions] = useState(() => createParticlePositions(count))

    useFrame((state) => {
        const t = state.clock.elapsedTime
        ref.current.rotation.y = t * 0.05
        ref.current.rotation.x = Math.sin(t * 0.03) * 0.15
    })

    return (
        <points ref={ref} frustumCulled={false}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
                transparent
                color="#f26a3d"
                size={0.012}
                sizeAttenuation
                depthWrite={false}
                opacity={0.32}
            />
        </points>
    )
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 opacity-[0.85]">
            <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
                <ambientLight intensity={0.5} />
                <ParticleSphere />
            </Canvas>
        </div>
    )
}
