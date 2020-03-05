import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navigation = styled.div `
`;

const DesktopMenu = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: ${props => (props.active ? 'white' : 'transparent')};
  padding: 1rem 4rem;
  transition: background-color .4s;
  z-index: 2;
  
  @media(max-width: 800px) {
    padding: 1rem 2rem;
  }  
`;

const Logo = styled.h1`
  color: ${props => (props.active ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)')};
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin: auto 0 auto;
`;

const NavItem = styled.a`
  color: rgba(255, 255, 255, 0.8);
  margin: 0 .6rem 0 .6rem;
  font-size: 1rem;
  
  &:hover {
    cursor: pointer;
  }
  
  @media(max-width: 800px) {
    display: none;
  }
`;


const NavIcon = styled.div`
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
  }
`;

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

  ${NavIcon} {
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
  }
`;

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
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${props => (props.active ? '6rem': 0)};
  left: 0;
  width: 100%;
  background-color: ${props => (props.active ? '#ffffff': 'transparent')};
  z-index: ${props => (props.active ? 3 : 0)};
  transition: .4s;
  
  ${MobileMenuItem} {
    height: ${props => (props.active ? '3rem': '0')};
    transition: .4s;
  }
  
  @media(min-width: 800px) {
    display: none;
  }
`;



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
      <Navigation>
        <DesktopMenu active={this.state.isActive}>
          <Logo active={this.state.isActive}>kDobosz</Logo>
          <Nav>
            <NavItem onClick={() => scrollTo('#about-me')}>About me</NavItem>
            <NavItem onClick={() => scrollTo('#skills')}>Skills</NavItem>
            <NavItem onClick={() => scrollTo('#projects')}>Projects</NavItem>
            <MobileNavButton onClick={this.toggle} active={this.state.isActive}><NavIcon/></MobileNavButton>
          </Nav>
        </DesktopMenu>
        <MobileMenu active={this.state.isActive}>
          <MobileMenuItem onClick={() => { scrollTo('#about-me'); this.toggle(); }}>About me</MobileMenuItem>
          <MobileMenuItem onClick={() => { scrollTo('#skills'); this.toggle(); }}>Skills</MobileMenuItem>
          <MobileMenuItem onClick={() => { scrollTo('#projects'); this.toggle(); }}>Projects</MobileMenuItem>
        </MobileMenu>
      </Navigation>
    );
  }
};

export default Navbar;