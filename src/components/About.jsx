import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
  font-family:"monospace";
`;

const Highlight = styled.span`
  color: #ff6347;
  font-weight: bold;
`;

const About = () => {
  return (
    <AboutContainer>
        <Title> </Title>
      <Paragraph>
        Welcome to the <Highlight>Video to GIF Converter</Highlight> app! This tool allows you to easily convert your video files into GIFs. 
        Whether you want to create funny moments, capture highlights, or share snippets, this app makes it easy and quick.
      </Paragraph>
      <Paragraph>
        Simply upload your video, set your desired frame rate and scale, and let our converter do the rest. Enjoy your GIFs and share them with your friends!
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
