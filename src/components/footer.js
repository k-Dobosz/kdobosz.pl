import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  flexDirection: column;
  width: 100%;
  background-color: #f3f3f3;
  padding-top: 60px;
  clip-path: polygon(0 45%, 100% 8%, 100% 100%, 0 100%);
  webkit-clip-path: polygon(0 45%, 100% 8%, 100% 100%, 0 100%);
  
  @media(prefers-color-scheme: dark) {
    background-color: #0a0a0a;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 24px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #4a4a4a;
`;

const Footer = () => (
  <StyledFooter>
    <Paragraph>
      &copy; Konrad Dobosz {new Date().getFullYear()}, Built with <a target="_blank" rel="noopener noreferrer" href="https://gatsbyjs.org">Gatsby</a>
      <br />
      Source code on <a target="_blank" rel="noopener noreferrer" href="https://github.com/k-Dobosz/kdobosz.pl">Github</a>
    </Paragraph>
    </StyledFooter>
);

export default Footer