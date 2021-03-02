import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"
import styled from "styled-components"

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Main = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 50vh;
`

const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 0.8rem;
`

const StyledLink = styled(props => <Link {... props} />)`
  width: 100%;
  text-align: center;
`

const NotFoundPage = () => (
  <NotFound>
    <SEO/>
    <Main>404</Main>
    <Paragraph>Not found</Paragraph>
    <StyledLink to="/">Go back</StyledLink>
  </NotFound>
)

export default NotFoundPage
