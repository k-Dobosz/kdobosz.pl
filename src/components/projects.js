import React from 'react'
import styled from 'styled-components'
import { Container, Section, Separator } from './style'

const ProjectsH2 = styled.h2`
  width: 100%;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const Projects = () => (
  <Section id="projects">
    <Container>
      <ProjectsH2 data-sal="slide-up" data-sal-duration="1000">
        Projects
      </ProjectsH2>
      <Separator data-sal="slide-up" data-sal-duration="1000" />
    </Container>
  </Section>
)

export default Projects
