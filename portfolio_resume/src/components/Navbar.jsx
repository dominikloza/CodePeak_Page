import React from 'react'
import styled from 'styled-components'
import logo from '../imgs/logo_two_colors.png'


const Section = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 3;
    width: 100%;
    @media only screen and (max-width: 768px){
        width: 100%;
        position: relative;
    }
  `

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 0 16px;
    }
`
const Links = styled.div`
   display: flex;
   align-items: center;


`
const Icons = styled.div`

`
const Logo = styled.img`
    height: 70px;
`
const List = styled.ul`
   display: flex;
   list-style: none;
   gap: 20px;

   @media only screen and (max-width: 768px){
        display: none;
    }
`
const ListItem = styled.a`
    cursor: pointer;
    color: #351e45;
    font-weight: 600;
    text-decoration: none;

    &:hover {
        transform: scale(1.2);
        transition: transform 0.3s;
    }
`
const Button = styled.button`
    width:100%;
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
function Navbar() {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src={logo} />
                    <List>
                        <ListItem href="#hero">
                            Home
                        </ListItem>
                        <ListItem href="#about">About Us</ListItem>
                        <ListItem href="#works">Works</ListItem>
                        <ListItem href="#contact">Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar