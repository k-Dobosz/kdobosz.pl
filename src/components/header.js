import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  &::before {
    content: '';
    position: absolute;
    height: 100vh;
    width: 100%;  
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
    z-index: 1;
  }
`;

const StyledH1 = styled.h1`
  margin-top: 40vh;
  margin-left: 4rem;
  font-size: 3.6rem;
  color: rgba(255, 255, 255, 1);
  z-index: 1;
  
  @media(max-width: 800px) {
    margin-left: 2rem;
    font-size: 2.5rem;
  }  
`;

const StyledH3 = styled.h3`
  margin-left: 4rem;
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.6);
  z-index: 1;
  
  @media(max-width: 800px) {
    margin-left: 2rem;
    font-size: 1.6rem;
  }  
`;

const Header = () => {
  const data = useStaticQuery(graphql`
  {
    placeholderImage: file(relativePath: {eq: "bg.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 2000, fit: COVER) {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }
`);
  return (
    <StyledHeader>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ position: `initial`, height: `0`, width: `0` }}
      />
      <StyledH1 data-sal="slide-up" data-sal-duration="1000">
        Hi, I'm Konrad
      </StyledH1>
      <StyledH3 data-sal="slide-up" data-sal-duration="1000">
        I'm web developer
      </StyledH3>
    </StyledHeader>
  );
}

export default Header