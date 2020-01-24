import React from "react"
import styled from 'styled-components'
import svg from '../images/bg.svg'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  background-image: url(${svg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50% 60%;
  height: 70vh;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
`;

const StyledH1 = styled.h1`
  margin-top: 22vh;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.8);
`;

const StyledH3 = styled.h3`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
`;

const Header = () => (
  <StyledHeader>
    <div>
      <StyledH1>
        Hi, I'm Konrad
      </StyledH1>
      <StyledH3>
        I'm web developer
      </StyledH3>
    </div>
  </StyledHeader>
)

export default Header
