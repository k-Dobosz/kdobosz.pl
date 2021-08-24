import React from "react";
import styled from 'styled-components'
import { Container, Section, Separator } from './style'

const ContactH2 = styled.h2`
  width: 100%;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  border: none;
  border-radius: 7px;
  background-color: #f9f9f9;
  font-size: 1.2rem;
  height: 45px;
  padding: 1rem 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  
  &:focus {
    border: 2px solid black;
    background-color: #fff;
    transition: border 0.1s;
    outline: 0;
  }
`

const Textarea = styled.textarea`
  border: none;
  border-radius: 7px;
  background-color: #f9f9f9;
  font-size: 1.2rem;
  height: 75px;
  max-width: 100%;
  padding: 1rem 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  
  &:focus {
    border: 2px solid black;
    background-color: #fff;
    transition: border 0.1s;
    outline: 0;
  }
`

const Button = styled.button`
  color: #fff;
  border: none;
  border-radius: 7px;
  background-color: #000;
  font-size: 1.2rem;
  height: 45px;

  @media (min-width: 800px) {
    font-size: initial;
    width: 100px;
    height: 35px;
  }
  
  &:hover {
    cursor: pointer;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <ContactH2 data-sal="slide-up" data-sal-duration="1000">
          Contact
        </ContactH2>
        <Separator data-sal="slide-up" data-sal-duration="1000" />
        <ContactContent>
          <ContactForm name="contact" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <Label data-sal="slide-up" data-sal-duration="1000">
              Name
              <Input type="text" name="name" placeholder="Your name" required/>
            </Label>
            <Label data-sal="slide-up" data-sal-duration="1000">
              Email
              <Input type="email" name="email" placeholder="Email" required/>
            </Label>
            <Label data-sal="slide-up" data-sal-duration="1000">
              Message
              <Textarea name="message" placeholder="Message" required/>
            </Label>
            <Button type="submit" data-sal="slide-up" data-sal-duration="1000">Send</Button>
          </ContactForm>
        </ContactContent>
      </Container>
    </Section>
  )
}

export default Contact
