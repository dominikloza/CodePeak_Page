import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Brush from './Brush'
import styled from 'styled-components'
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

    @media only screen and (max-width: 768px){
      display: none;
    }
`

const Illustration = () => {
    return (
        <>
            <Canvas>
                <Rig>
                    <Brush />
                </Rig>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 2, 1]} />
            </Canvas>
            <Desc>
                In creating our illustrations, we prioritize creativity, attention to detail, and originality to captivate our clients.
            </Desc>
        </>
    )
}

export default Illustration