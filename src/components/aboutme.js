import React from "react"
import styled from "styled-components"

const AboutMeSection = styled.section`
  width: 100%;
  padding: 80px 40px;
  
  @supports(-webkit-overflow-scrolling: touch) {
    padding: 0 40px 80px 40px;
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  
  @media(min-width: 800px) {
    flex-direction: row;
  }
`;

const AboutMeHeader = styled.div`
  flex-grow: 0;
  
  @media(min-width: 800px) {
    width: 50%;
  }
`;

const AboutMeH2 = styled.h2`
  width: 100%;
  font-size: 2rem;
  text-align: center;
`;

const AboutMeContent = styled.div`
  flex-grow: 1;
  text-align: justify;
`;

const AboutMe = () => (
  <AboutMeSection id="about-me">
    <AboutMeContainer>
      <AboutMeHeader>
        <AboutMeH2 data-sal="slide-up" data-sal-duration="1000">
          About me
        </AboutMeH2>
      </AboutMeHeader>
      <AboutMeContent data-sal="slide-up" data-sal-duration="1000">
        <p>I'm a 17 year old developer, mainly focused on writing backend side of applications. But I'm not afraid of creating both of them. I enjoy creating useful stuff and learing new things.</p>
      </AboutMeContent>
    </AboutMeContainer>
  </AboutMeSection>
);

export default AboutMe