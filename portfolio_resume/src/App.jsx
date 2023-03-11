import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import styled, { createGlobalStyle } from 'styled-components'
import img from './imgs/bg_4.jpg'
import bgMobile from './imgs/bg_mb.jpg'
import { useEffect, useState } from 'react'


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth ;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  color: white;
  background: url(${img});
  background-position: 0 25%;
  background-size:cover;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 768px){
    scroll-snap-type: none;
    background: url(${bgMobile});
    background-position: 25% 14%;
  }
`
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

const App = () => {

  const [isLoading, setLoading] = useState(true);

  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  } 

  
  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (
    <Container>
      <GlobalStyle />
      <Hero />
      <About />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
