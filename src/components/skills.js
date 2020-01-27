import React from "react"
import styled from "styled-components"

const SkillsSection = styled.section`
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
  flex-direction: column;
  width: 100%;
  
  @media(min-width: 800px) {
    flex-direction: row;
  }
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
  <SkillsSection id="skills">
    <SkillsH2 data-sal="slide-up" data-sal-duration="1000">
      Skills
    </SkillsH2>
    <SkillsContainer>
      <SkillsColumn>
        <SkillsH3 data-sal="slide-up" data-sal-duration="1000">Languages</SkillsH3>
        <SkillsList>
          <li data-sal="slide-up" data-sal-duration="1000">Javascript</li>
          <li data-sal="slide-up" data-sal-duration="1000">Python</li>
          <li data-sal="slide-up" data-sal-duration="1000">HTML</li>
          <li data-sal="slide-up" data-sal-duration="1000">CSS</li>
        </SkillsList>
      </SkillsColumn>
      <SkillsColumn>
        <SkillsH3 data-sal="slide-up" data-sal-duration="1000">Tools</SkillsH3>
        <SkillsList>
          <li data-sal="slide-up" data-sal-duration="1000">Git</li>
          <li data-sal="slide-up" data-sal-duration="1000">Linux</li>
        </SkillsList>
      </SkillsColumn>
      <SkillsColumn>
        <SkillsH3 data-sal="slide-up" data-sal-duration="1000">Frameworks</SkillsH3>
        <SkillsList>
          <li data-sal="slide-up" data-sal-duration="1000">React</li>
          <li data-sal="slide-up" data-sal-duration="1000">Gatsby</li>
        </SkillsList>
      </SkillsColumn>
    </SkillsContainer>
  </SkillsSection>
);

export default Skills