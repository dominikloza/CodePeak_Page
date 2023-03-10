import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import ReactLogo from './ReactLogo'
import styled from 'styled-components'
import Rig from './Rig'

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: #5F2F93;
    border-radius: 10px;
    position: absolute;
    bottom: 200px;
    right: 100px;
    -webkit-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
    -moz-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
    box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
    font-size: 14px;
    font-weight: 300;

    @media only screen and (max-width: 1130px){
        bottom: 120px;
    }

    @media only screen and (max-width: 768px){
      display: none;
    }
`

const Development = () => {
    return (
        <>
            <Canvas camera={{ fov: 50, position: [5, 5, 5] }}>
                <Rig>
                    <ReactLogo />
                </Rig>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={0.15} />
                <directionalLight position={[2, 4, 3]} />
            </Canvas>
            <Desc>
                Our team of software development experts works hard to provide the best solutions for our clients.
            </Desc>
        </>
    )
}

export default Development