import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 70vh;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
  
  @supports(-webkit-overflow-scrolling: touch) {
    background-attachment: scroll
  }
`;

const StyledH1 = styled.h1`
  margin-top: 22vh;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.8);
  z-index: 0;
  
  @supports(-webkit-overflow-scrolling: touch) {
    margin-top: 12vh;
  }
`;

const StyledH3 = styled.h3`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
  z-index: 0;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
  {
    placeholderImage: file(relativePath: {eq: "bg.png"}) {
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
        imgStyle={{ position: `fixed` }}
        style={{ height: `0`, width: `0` }}
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