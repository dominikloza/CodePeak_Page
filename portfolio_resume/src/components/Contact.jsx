import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (max-width: 1130px){
      padding-bottom: 100px;
    }

  @media only screen and (max-width: 768px){
      padding-left:0;
    }

`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 50px;

  @media only screen and (max-width: 768px){
      width: 100%;
        justify-content: center;
        margin-right: 0;
        padding: 20px 20px 100px 20px;
        margin-top: 0;
    }
`
const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px){
        display: none;
    }
`
const Title = styled.h1`
  font-weight: 300;
  margin-bottom: 0;
  font-size: 44px;
  font-family: 'Pacifico', cursive;

  @media only screen and (max-width: 768px){
        background-color: #5F2F93;
        border-radius: 10px;
        text-align: center;
    }
`
const Inform = styled.p`
  font-weight: 400;
  margin-bottom: 0;
  font-size: 16px;
  color: #fa9804;

  @media only screen and (max-width: 768px){
        text-align: center;
    }
`

const Form = styled.form`
  width: 100%;;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  @media only screen and (max-width: 768px){
      box-sizing: border-box;
    }
`
const Input = styled.input`
  padding: 20px;
  background-color: #f1e7ff;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
  -moz-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
  box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #f1e7ff;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
  -moz-box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
  box-shadow: 20px 16px 65px -11px rgba(0, 0, 0, 1);
  
`
const Button = styled.button`
  padding: 20px 20px;
  border: none;
  border-radius: 5px;
  background-color: #fa9804;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-weight: 900;
    box-shadow: 0 0 0 0 #dba613;
	transform: scale(1);
	animation: pulse 2s infinite;
    @keyframes pulse {
	    0% {
	    	transform: scale(0.95);
	    	box-shadow: 0 0 0 0 rgba(235, 184, 17, 0.7);
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

const Contact = () => {

  const ref = useRef()
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_8td6udk', 'template_r68z7bw', ref.current, '6LX-wsKpVKeOzHqQm')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  }


  return (
    <Section id='contact'>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder='Wrie your message' name="message" rows={10} />
            <Button type='submit'> Send </Button>
            {success && <Inform>Your message has been sent.<br /> We'll get back to you soon!</Inform>}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact