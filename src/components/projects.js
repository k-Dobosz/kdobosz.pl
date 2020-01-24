import React from "react"
import styled from "styled-components"

const StyledProjects = styled.section`
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
  <StyledProjects>
    <ProjectsH2>
      Projects
    </ProjectsH2>
    <div>
      <img src="https://via.placeholder.com/384x216" alt="Project"/>
    </div>
  </StyledProjects>
);

export default Projects