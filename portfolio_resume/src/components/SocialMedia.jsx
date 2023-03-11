import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import React from 'react'
import Chart from './Chart'
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

const SocialMedia = () => {
    return (
        <>
            <Canvas>
                <Rig>
                    <Chart />
                </Rig>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={1} />
                <directionalLight position={[-3, 2, 1]} />
            </Canvas>
            <Desc>
                By caring for our clients on social media, we prioritize engagement, valuable content, and personalized approaches.
            </Desc>
        </>
    )
}

export default SocialMedia