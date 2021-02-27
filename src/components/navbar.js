import React from "react";
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Container } from "./style";

const Navigation = styled.div`
  position: absolute;
  width: 100%;
  // height: 6rem;
  padding: 2.5rem;
  color: #fff;
  z-index: 3;
  background-color: ${props => (props.active ? '#fff' : 'transparent')};
  transition: background-color .4s;
  
  @media(min-width: 800px) {
    background-color: transparent;
  }
`

const ContainerRow = styled(Container)`
    flex-direction: row;
`

const Logo = styled.h1`
  display: flex;
  color: ${props => (props.active ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)')};
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  align-self: center;
  
  @media(min-width: 800px) {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-self: center;
`

const NavItem = styled.a`
  color: rgba(255, 255, 255, 0.8);
  margin: 0 .6rem;
  font-size: 1rem;
  display: none;
  
  &:hover {
    cursor: pointer;
  }
  
  &:last-child {
    margin: 0 0 0 .6rem;
  }
  
  @media(min-width: 800px) {
    display: block;
  }`

const NavButtonIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 4px;
  width: 80%;
  border-radius: 2px;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    width: 100%;
    height: 4px;
    border-radius: 2px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    top: 10px;
    border-radius: 2px;
  }`

const MobileMenuItem = styled.a`
  display: flex;
  align-items: center;
  margin: auto 4rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    transition: color .2s !important;
  }
`

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 8rem;
  left: 0;
  padding-bottom: 1.2rem;
  width: 100%;
  background-color: ${props => (props.active ? '#ffffff': 'transparent')};
  z-index: ${props => (props.active ? 3 : 0)};
  transition: .4s;
  opacity: ${props => (props.active ? 1 : 0)};
  
  ${MobileMenuItem} {
    height: ${props => (props.active ? '3rem': '0')};
    transition: .4s;
  }
  
  @media(min-width: 800px) {
    display: none;
  }`

const MobileNavButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  outline: none;
  height: 3.5rem;
  width: 3.5rem;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  padding: .3px;
  
   &:hover {
    cursor: pointer;
  }
  
  @media(min-width: 800px) {
    display: none;
  }

  ${NavButtonIcon} {
    background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.5)')};
    transform: ${props => (props.active ? 'rotate(45deg)' : '')};
    transition: .2s;

    &:before {
      background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.5)')};
      transform: ${props => (props.active ? 'translateY(10px)' : '')};
      opacity: 1;
      transition: .2s;
    }

    &:after {
      background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.5)')};
      transform: ${props => (props.active ? 'translateY(-10px) rotate(90deg)' : '')};
      transition: .2s;
    }
  }`

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false }
  }


  toggle = () => {
    this.setState(prev => ({
      isActive: !prev.isActive,
    }));
  }

  render() {
    return (
        <Navigation active={this.state.isActive}>
          <ContainerRow>
            <Logo active={this.state.isActive}>kDobosz</Logo>
            <Nav>
              <NavItem onClick={() => { scrollTo('#about-me'); this.toggle(); }}>About me</NavItem>
              <NavItem>Contact</NavItem>
              <MobileNavButton onClick={this.toggle} active={this.state.isActive}><NavButtonIcon/></MobileNavButton>
            </Nav>
            <MobileNav active={this.state.isActive}>
              <MobileMenuItem onClick={() => { scrollTo('#about-me'); this.toggle(); }}>About me</MobileMenuItem>
              <MobileMenuItem onClick={() => { this.toggle(); }}>Contact</MobileMenuItem>
            </MobileNav>
          </ContainerRow>
        </Navigation>
    )
  }
};

export default Navbar;