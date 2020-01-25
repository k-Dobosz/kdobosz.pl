import React from "react"
import styled from "styled-components"

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 40px 40px 40px;
  clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
`;

const ProjectsH2 = styled.h2`
  width: 100%;
  font-size: 2rem;
  text-align: center;
`;


const Projects = () => (
  <ProjectsSection id="projects">
    <ProjectsH2>
      Projects
    </ProjectsH2>
    <div>
    </div>
  </ProjectsSection>
);

export default Projects