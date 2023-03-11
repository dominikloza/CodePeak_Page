
import styled from 'styled-components'
import Navbar from './Navbar'
import astronault from '../imgs/astronault_2.png';
import shadow from '../imgs/shadow.png';
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;

  @media only screen and (max-width: 768px){
        height: 200vh;
        scroll-snap-align: start;
    }
  `
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
const HeroText = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 768px){
        flex: 1;
        align-items: center;
        height: 100vh;
    }
`
const HeroImages = styled.div`
 flex: 3;
 position:relative;
 @media only screen and (max-width: 768px){
        flex: 1;
        width: 100%;
        height: 100vh; 
    }
`
const Title = styled.h1`
  font-size: 64px;
  margin-bottom:10px;
  color: white;

  @media only screen and (max-width: 768px){
        text-align: center;
        font-size: 45px;
        padding: 0 16px;
    }
`

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.div`
  height: 5px;
  width: 20px;
  background-color: #fa9804;
  margin-bottom: 0;
`
const SubTitle = styled.h2`
  color: #fa9804;
  margin: 0;
  font-family: 'Pacifico', cursive;

`
const Desc = styled.p`
  font-style: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px){
        padding: 0 16px;
        text-align: center;
    }

`
const Button = styled.button`
    width:150px;
    padding:10px;
    background-color: #fa9804;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-weight: 900;
    box-shadow: 0 0 0 0 #fa9804;
	transform: scale(1);
	animation: pulse 2s infinite;
    @keyframes pulse {
	    0% {
	    	transform: scale(0.95);
	    	box-shadow: 0 0 0 0 #fa9804;
	    }

	    70% {
	    	transform: scale(1);
	    	box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	    }

	    100% {
	    	transform: scale(0.95);
	    	box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	    }
    }
`
const Img = styled.img`
  width: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -100px;
  animation: animate 2s infinite ease-in-out alternate;
  margin: auto;
  pointer-events: none;

  @keyframes animate {
    to {
      transform: translateY(40px);
    }
  }

  @media only screen and (max-width: 768px){
        width: 400px;
        right: 0;
        pointer-events: auto;
    }
`
const Shadow = styled.img`
  width: 220px;
  object-fit: contain;
  position:absolute;
  top: 0;
  bottom: -700px;
  left: 0;
  right: -100px;
  animation: sizeChange 2s infinite ease-in-out alternate-reverse ;
  margin: auto;

  @keyframes sizeChange {
    to {
      transform: scaleX(0.5);
    }
  }

  @media only screen and (max-width: 768px){
     display: none;
    }
`

const Hero = () => {
  return (
    <Section id='hero'>
      <Navbar />
      <Container>
        <HeroText>
          <Title>Code is like humor.<br /> When you have to explain it, it’s bad.</Title>
          <WhatIDo>
            <Line />
            <SubTitle>Cory House</SubTitle>
          </WhatIDo>
          <Desc><strong>Code your way to success with us!</strong><br /> We are enjoy creating delightful, websites and web applications.</Desc>
          <Button>Learn More</Button>
        </HeroText>
        <HeroImages>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensivity={3.5} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial color="#5F2F93" attach="material" distort={0.5} />
            </Sphere>
          </Canvas>
          <Img src={astronault} />
          <Shadow src={shadow} />
        </HeroImages>
      </Container>
    </Section>
  )
}

export default Hero