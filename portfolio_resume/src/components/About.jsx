import React from 'react'
import styled from 'styled-components'
import arrow from '../imgs/arrow.png'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px){
       scroll-snap-align: start;
       height: auto;
       scroll-snap-align: start;
    }
  `
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  position: relative;
  
`
const HeroText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background: #5F2F93;
  height: auto;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  -webkit-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
  -moz-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
  box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);

  @media only screen and (max-width: 768px){
        align-items: center;
        text-align: center;
        justify-content: start;
        padding: 70px 24px;
        box-shadow: none;
        border-radius: 0;
    }
`
const HeroImages = styled.div`
 flex: 1;
 position: relative;
 height: 100%;

 @media only screen and (max-width: 768px){
        display: none;
    }
`

const Title = styled.h1`
  font-size: 54px;
  margin-bottom: 20px;
  margin-top:0px;
  color: white;

  @media only screen and (max-width: 768px){
       font-size: 45px;
    }

`
const WhatIDo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`
// const SubTitle = styled.h2`
//   color: #fa9804;
//   margin: 0;
//   font-family: 'Pacifico', cursive;
//   font-size: 34px;

//   @media only screen and (max-width: 768px){
//        font-size: 30px;
//     }
// `

const Desc = styled.p`
  font-style: 24px;
  color: #fa9804;
  margin-top: 0;

  @media only screen and (max-width: 768px){
       font-size: 16px;
    }
`

const Job = styled.p`
  color: white;
  font-weight:600;
  font-size: 34px;
  margin-bottom: 10px;
  margin-top: 0;

  @media only screen and (max-width: 768px){
       font-size: 24px;
    }
`
const JobDesc = styled.p`
color: lightgray;
font-size: 20px;
margin: 0;
::before {
  content: '';
  margin-bottom: 20px;
  display: block;
  height: 2px;
  background-color: #fa9804;
  width: 100%;
}

::after {
  content: '';
  margin-top: 20px;
  display: block;
  height: 2px;
  background-color: #fa9804;
  width: 100%;
}

@media only screen and (max-width: 768px){
       font-size: 18px;
    }
`
const Arrow = styled.img`
width: 300px;
transform: rotate(-25deg);
position: absolute;
left: 0px;
z-index: 0;
top: 170px;

@media only screen and (max-width: 768px){
       display: none;
    }
`
const About = () => {
  return (
    <Section id="about">
      <Container>
        <HeroImages>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[4, 2, 1]} />
            <Cube />
          </Canvas>
          <Arrow src={arrow} />
        </HeroImages>
        <HeroText>
          <Title>We we offer </Title>
          <Desc>As a coding company, we specialize in developing custom software solutions to meet the unique needs of our clients. Our team of experienced developers and designers work collaboratively with our clients to understand their business requirements, goals, and challenges.</Desc>
          <WhatIDo>
            <Job>Development and Design</Job>
          </WhatIDo>
          <JobDesc>Our services include software development, web development, mobile app development, cloud computing, data analysis and visualization, artificial intelligence and machine learning, and quality assurance testing. We also offer ongoing maintenance and support to ensure our clients' software continues to function optimally over time. <br/><br/> Our design services include graphic design, web design, user interface (UI) design, user experience (UX) design, branding and identity design, packaging design, and print design. We also offer ongoing maintenance and support to ensure our clients' designs continue to function optimally over time. </JobDesc>
        </HeroText>
      </Container>
    </Section>
  )
}

export default About