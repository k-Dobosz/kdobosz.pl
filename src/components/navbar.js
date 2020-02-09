import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navigation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background-color: ${props => (props.active ? 'white' : 'transparent')};;
  transition: background-color .4s;
  z-index: 2;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Logo = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.5rem;
  margin: auto 15px auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin: auto 0 auto;
`;

const NavItem = styled.a`
  color: rgba(0, 0, 0, 0.8);
  margin: 0 10px 0 10px;
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
  padding: 5px;
  
   &:hover {
    cursor: pointer;
  }
  
  @media(min-width: 800px) {
    display: none;
  }

  ${NavIcon} {
    background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)')};
    transform: ${props => (props.active ? 'rotate(45deg)' : '')};
    transition: .2s;

    &:before {
      background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)')};
      // top: ${props => (props.active ? '0px' : '10px')};
      transform: ${props => (props.active ? 'translateY(10px)' : '')};
      opacity: 1;
      transition: .2s;
    }

    &:after {
      background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)')};
      // top: ${props => (props.active ? '0px' : '-10px')};
      transform: ${props => (props.active ? 'translateY(-10px) rotate(90deg)' : '')};
      transition: .2s;
    }
  }
`;

const DropdownMenuItem = styled.a`
  display: flex;
  align-items: center;
  margin: auto 15px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  
  &:hover {
    cursor: pointer;
    color: #E9C7D3;
    transition: color .2s !important;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${props => (props.active ? '3.5rem': 0)};
  left: 0;
  width: 100%;
  background-color: ${props => (props.active ? '#ffffff': 'transparent')};
  z-index: ${props => (props.active ? 1: 0)};
  transition: .4s;
  
  ${DropdownMenuItem} {
    height: ${props => (props.active ? '2.5rem': '0')};
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
      <div>
        <Navigation active={this.state.isActive}>
          <NavContainer>
            <Logo>kDobosz</Logo>
            <Nav>
              <NavItem onClick={() => scrollTo('#about-me')}>About me</NavItem>
              <NavItem onClick={() => scrollTo('#skills')}>Skills</NavItem>
              <NavItem onClick={() => scrollTo('#projects')}>Projects</NavItem>
              <MobileNavButton onClick={this.toggle} active={this.state.isActive}><NavIcon/></MobileNavButton>
            </Nav>
          </NavContainer>
        </Navigation>
        <DropdownMenu active={this.state.isActive}>
          <DropdownMenuItem onClick={() => { scrollTo('#about-me'); this.toggle(); }}>About me</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { scrollTo('#skills'); this.toggle(); }}>Skills</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { scrollTo('#projects'); this.toggle(); }}>Projects</DropdownMenuItem>
        </DropdownMenu>
      </div>
    );
  }
};

export default Navbar;