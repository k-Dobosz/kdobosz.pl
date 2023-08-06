import React from 'react'
import styled from 'styled-components'
import { Container, Section, Separator } from './style'

const AboutMeHeader = styled.div`
  flex-grow: 0;
  margin-bottom: 1.6rem;

  @media (min-width: 800px) {
    width: 50%;
  }
`

const AboutMeH2 = styled.h2`
  width: 100%;
  font-size: 2rem;
  text-align: left;
  margin-bottom: 0.5rem;
`

const AboutMeContent = styled.div`
  flex-grow: 1;
  text-align: justify;
  line-height: 1.5rem;
`

const AboutMe = () => (
  <Section id="about-me">
    <Container>
      <AboutMeHeader>
        <AboutMeH2 data-sal="slide-up" data-sal-duration="1000">
          About me
        </AboutMeH2>
        <Separator data-sal="slide-up" data-sal-duration="1000" />
      </AboutMeHeader>
      <AboutMeContent data-sal="slide-up" data-sal-duration="1000">
        <p>
        I'm a 21-year-old engineering student who focuses mostly on writing backend applications. But I'm not afraid to create both. I enjoy developing useful things and learning new things.
        </p>
      </AboutMeContent>
    </Container>
  </Section>
)

export default AboutMe
