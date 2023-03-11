import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


const Rig = ({ children }) => {
    const ref = useRef()
    useFrame((state) => {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.05)
    })
    return <group ref={ref}>{children}</group>
  }

export default Rig