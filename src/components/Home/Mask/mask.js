'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Group } from 'three'
import { gsap } from 'gsap'

export default function Mask({ modelPath }) {
  const meshRef = useRef(null)
  const { scene } = useGLTF(modelPath)
  const rotationTarget = useRef({ x: 0, y: 0, z: 0 })
  const positionTarget = useRef({ x: 0, y: 0, z: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = - (event.clientY / window.innerHeight) * 2 + 1

      // Use GSAP for smooth rotation animation
      gsap.to(rotationTarget.current, {
        duration: 1.5,
        x: - y * 0.5,
        y: x * 0.7,
        z: x * 0.2, // Add slight Z rotation for more dynamic effect
        ease: "power2.out"
      })

      // Optional: Add position offset based on mouse
      gsap.to(positionTarget.current, {
        duration: 2,
        x: x * 0.2,
        y: y * 0.2,
        ease: "power3.out"
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    // Apply the animated values to the mesh
    meshRef.current.rotation.x = rotationTarget.current.x
    meshRef.current.rotation.y = rotationTarget.current.y + 5
    meshRef.current.rotation.z = rotationTarget.current.z

    meshRef.current.position.x = positionTarget.current.x
    meshRef.current.position.y = positionTarget.current.y + Math.sin(state.clock.elapsedTime * 0.5) * 0.05

    // Optional: Scale animation on hover
    const distance = Math.sqrt(
      Math.pow(rotationTarget.current.x, 2) + Math.pow(rotationTarget.current.y, 2)
    )
    const scale = 3.5 + distance * 0.1
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <group ref={meshRef}>
      <primitive 
        object={scene.clone()} 
        scale={[1, 1, 1]}
        position={[0, 0, 0]}
      />
    </group>
  )
}