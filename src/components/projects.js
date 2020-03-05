import React from "react"
import styled from "styled-components"

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 60px 40px;
`;

const ProjectsH2 = styled.h2`
  width: 100%;
  font-size: 2rem;
  text-align: center;
`;


const Projects = () => (
  <ProjectsSection id="projects">
    <ProjectsH2 data-sal="slide-up" data-sal-duration="1000">
      Projects
    </ProjectsH2>
    <div>
    </div>
  </ProjectsSection>
);

export default Projects