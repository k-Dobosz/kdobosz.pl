import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  
  @media(min-width: 1200px) {
    max-width: 1100px;
  }

`

const Section = styled.section`
  width: 100%;
  padding: 5rem 2.5rem;
  background-color: #fff;
  color: #000;
  
  &:last-child {
    border-radius: 0 0 20px 20px;
  }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const CenterText = styled.div`
    text-align: center;
`

const Separator = styled.hr`
  width: 3.8rem;
  height: 5px;
  background-color: #000;
  border: none;
  border-radius: 50px;
`

export {
    Container,
    Section,
    Column,
    CenterText,
    Separator
}