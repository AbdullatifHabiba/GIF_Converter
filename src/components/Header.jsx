import React from "react";
import styled ,{ keyframes }from "styled-components";

const HeaderContainer = styled.div`
  background-color: #1f1531;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  //z-index: -1;
`;


const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  font-family: "monospace";
  &:hover {
    color: #ff6347;
  }
`;
const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const H1 = styled.h1`
  margin: 0;
  padding: 12px;
  background-color: #1f1531;
  color: #fff;
  font-family: monospace;
  font-size: 3em;
  animation: ${slideIn} 1s ease-out;
`;
export const Header = () => {
  return (
    <HeaderContainer>
      <H1>Video to GIF Converter</H1>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
		<NavLink href="/samples">Samples</NavLink>
      </Nav>
    </HeaderContainer>
  );
};
