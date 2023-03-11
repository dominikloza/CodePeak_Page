import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Laptop from './Laptop'
import Rig from './Rig'

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: #5F2F93;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    right: 100px;
    -webkit-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
    -moz-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
    box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
    font-size: 14px;
    font-weight: 300;

    @media only screen and (max-width: 1130px){
        top: unset;
        bottom: 120px;
    }

    @media only screen and (max-width: 768px){
      display: none;
    }
`

const WebDesign = () => {
    return (
        <>
            <Canvas camera={{ fov: 25, position: [0.5, 0.5, 0.5] }}>
                <Rig>
                    <Laptop />
                </Rig>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={1} />
                <directionalLight position={[2, 4, 3]} />
            </Canvas>
            <Desc>
                We design products with a strong focus on both world class design and ensuring your product is a market success.
            </Desc>
        </>
    )
}

export default WebDesign