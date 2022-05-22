import React from "react";
import styled from "@emotion/styled";

const AboutDiv = styled.div`
  display: flex;
  position: fixed;
  height: 250px;
  width: 250px;
  background-color: green;
`;

export const AboutModal = (closeAboutModal) => {
  return (
    <AboutDiv>
      <h1>Test Test Test Test</h1>
    </AboutDiv>
  );
};
