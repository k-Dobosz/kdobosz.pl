import React from 'react'
import styled from 'styled-components'
import { Container, Section, Separator } from './style'

const ProjectsH2 = styled.h2`
  width: 100%;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const ProjectContainer = styled.div``

const Project = styled.div`
  margin-top: 1.6rem;
`

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  
  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const ButtonDemo = styled.a`
  background-color: #000;
  border: 2px solid black;
  font-size: 1.2rem;
  text-align: center;
  padding: calc(0.5rem - 2px) calc(1.2rem - 2px);
  transition: color 0.2s ease, background-color 0.2s ease;
  margin-bottom: 1rem;

  &:hover {
    color: #000;
    background-color: #fff;

    &:link, &:visited {
      color: #000;
    }
  }

  &:link, &:visited {
    color: #fff;
    text-decoration: none;
  }
  
  @media (min-width: 800px) {
    font-size: 0.9rem;
    margin-right: 2rem;
    margin-bottom: 0;
  }
`

const ButtonCode = styled.a`
  border: 2px solid black;
  font-size: 1.2rem;
  text-align: center;
  padding: calc(0.5rem - 2px) calc(3rem - 2px);
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  
  &:hover {
    color: #fff;
    background-color: #000;

    &:link, &:visited {
      color: #fff;
    }
  }

  &:link, &:visited {
    color: #000;
    text-decoration: none;
  }

  @media (min-width: 800px) {
    font-size: 0.9rem;
  }
`

const Projects = () => (
  <Section id="projects">
    <Container>
      <ProjectsH2 data-sal="slide-up" data-sal-duration="1000">
        Projects
      </ProjectsH2>
      <Separator data-sal="slide-up" data-sal-duration="1000" />
      <ProjectContainer>
        <Project>
          <h4>Url shortener app</h4>
          <Description>
            Simple app written in Typescript that allows users to shorten their url. Used technologies: NodeJS, Typescript, MongoDb, Express and Jest
          </Description>
          <Buttons>
            <ButtonDemo target="_blank" rel="noopener noreferrer" href="https://url-shortener-kdobosz.herokuapp.com/">View project</ButtonDemo>
            <ButtonCode target="_blank" rel="noopener noreferrer" href="https://github.com/k-Dobosz/url-shortener">GitHub</ButtonCode>
          </Buttons>
        </Project>
      </ProjectContainer>
    </Container>
  </Section>
)

export default Projects
