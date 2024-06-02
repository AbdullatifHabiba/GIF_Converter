import React from "react";
import styled from "styled-components";
import pic0 from "../utils/image.gif";
import pic1 from "../utils/image1.gif";
import pic2 from "../utils/image2.gif";
import pic3 from "../utils/image3.gif";

const SampleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Sample = styled.div`
  width: calc(50% - 20px); /* 50% width with a margin of 20px */
  margin-bottom: 40px;
`;

const GifImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SampleText = styled.p`
  text-align: center;
`;

const SamplePage = () => {
  return (
    <div>
      <h1> </h1>
      <SampleContainer>
        <Sample>
          <GifImage src={pic0} alt="Sample 1" />
          <SampleText>kibana </SampleText>
        </Sample>
        <Sample>
          <GifImage src={pic1} alt="Sample 2" />
          <SampleText>kibana</SampleText>
        </Sample>
        <Sample>
          <GifImage src={pic2} alt="Sample 3" />
          <SampleText>Archicture </SampleText>
        </Sample>
        <Sample>
          <GifImage src={pic3} alt="Sample 4" />
          <SampleText>Class diagram </SampleText>
        </Sample>
      </SampleContainer>
    </div>
  );
};

export default SamplePage;
