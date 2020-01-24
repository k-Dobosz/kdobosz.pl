import React from "react"
import styled from "styled-components"

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 40px 40px 40px;
  background-color: #f3f3f3;
  clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
  
  @media(prefers-color-scheme: dark) {
    background-color: #0a0a0a;
  }
`;

const SkillsH2 = styled.h2`
  width: 100%;
  font-size 2rem;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
`;

const SkillsColumn = styled.div`
  flex: 1 1 0px;
`;

const SkillsH3 = styled.h3`
  text-align: center;
`;

const SkillsList = styled.ul`
  list-style-type: none;
`;

const Skills = () => (
  <StyledSkills>
    <SkillsH2>
      Skills
    </SkillsH2>
    <SkillsContainer>
      <SkillsColumn>
        <SkillsH3>Languages</SkillsH3>
        <SkillsList>
          <li>Javascript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
        </SkillsList>
      </SkillsColumn>
      <SkillsColumn>
        <SkillsH3>Tools</SkillsH3>
        <SkillsList>
          <li>Git</li>
          <li>Linux</li>
        </SkillsList>
      </SkillsColumn>
      <SkillsColumn>
        <SkillsH3>Frameworks</SkillsH3>
        <SkillsList>
          <li>React</li>
          <li>Gatsby</li>
        </SkillsList>
      </SkillsColumn>
    </SkillsContainer>
  </StyledSkills>
);

export default Skills