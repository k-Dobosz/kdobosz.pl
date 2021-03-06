import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`

const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.5;
`

const Footer = () => (
  <StyledFooter>
    <Paragraph>
      &copy; Konrad Dobosz {new Date().getFullYear()}, Built with{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://gatsbyjs.org">
        Gatsby
      </a>
      <br />
      Source code on{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/k-Dobosz/kdobosz.pl"
      >
        Github
      </a>
    </Paragraph>
  </StyledFooter>
)

export default Footer
