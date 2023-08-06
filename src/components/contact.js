import React from 'react'
import styled from 'styled-components'
import { Container, Section, Separator } from './style'
import { Linkedin, GitHub, Mail } from 'react-feather'

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
  border: 2px solid black;
  background-color: #000;
  font-size: 1.2rem;
  text-align: center;
  height: 45px;
  padding: calc(0.5rem - 2px) calc(1.2rem - 2px);
  transition: color 0.2s ease, background-color 0.2s ease !important;

  @media (min-width: 800px) {
    font-size: initial;
    width: 100px;
    height: 35px;
  }

  &:hover {
    cursor: pointer;
    color: #000;
    background-color: #fff;
  }

  @media (min-width: 800px) {
    font-size: 0.9rem;
    margin-right: 2rem;
    margin-bottom: 0;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  line-height: 1.5rem;
  margin-right: 1.5rem;
  margin-bottom: 2rem;

  p {
    margin-bottom: 1rem;
  }
`

const Link = styled((props) => <a {...props} />)`
  display: flex;
  flex-direction: row;
  width: max-content;

  &:link,
  &:visited {
    text-decoration: none;
  }

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
  }
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
          <Info>
            <p>You can reach me by contact form and via: </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/konrad-dobosz-18310b1a2"
            >
              <Linkedin color="#35353E" size="20" aria-label="LinkedIn" />
              LinkedIn
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/k-Dobosz"
            >
              <GitHub color="#35353E" size="20" aria-label="GitHub" />
              GitHub
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:kdobosz02@gmail.com"
            >
              <Mail color="#35353E" size="20" aria-label="e-mail" />
              e-mail
            </Link>
          </Info>
          <ContactForm name="contact" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <Label data-sal="slide-up" data-sal-duration="1000">
              Name
              <Input type="text" name="name" placeholder="Your name" required />
            </Label>
            <Label data-sal="slide-up" data-sal-duration="1000">
              Email
              <Input type="email" name="email" placeholder="Email" required />
            </Label>
            <Label data-sal="slide-up" data-sal-duration="1000">
              Message
              <Textarea name="message" placeholder="Message" required />
            </Label>
            <Button type="submit" data-sal="slide-up" data-sal-duration="1000">
              Send
            </Button>
          </ContactForm>
        </ContactContent>
      </Container>
    </Section>
  )
}

export default Contact
