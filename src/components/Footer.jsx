import React from "react";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const FooterContainer = styled.footer`
  background-color: #1f1531;;
  color: #fff;
  margin-top: 20px;
  
  width: 98%;
  bottom: 0;
  // set the position to be fixed at the bottom of the page

  position:  relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 1s ease-out;
//   z-index: -1;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1em;
  font-family: "Arial", sans-serif;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Abdullatif Habiba. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
