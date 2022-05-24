import React from "react";
import styled from "@emotion/styled";

const SectionAboutMe = styled.div`
  display: flex;
  height: 600px;
  margin-top: 15px;
`;
const LeftDivText = styled.div`
  flex: 50%;
  background-color: blue;
`;
const RightDivCrossButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 50%;
  background-color: red;

  justify-content: center;
`;
const StyledHashimotoDiv = styled.div`
  margin: 0px 2px 2px 0px;
  width: 49%;
  background-color: white;
`;
const AboutMeText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 0px 15px;
`;

export const StyledAboutMe = () => {
  return (
    <SectionAboutMe>
      <LeftDivText>
        <AboutMeText>
          <h1>Test nagłówka</h1>
          <p>
            Test tekstu
            <br />
            Nastepna linia tekstu
          </p>
        </AboutMeText>
      </LeftDivText>
      <RightDivCrossButtons>
        <StyledHashimotoDiv />
        <StyledHashimotoDiv />
        <StyledHashimotoDiv />
        <StyledHashimotoDiv />
      </RightDivCrossButtons>
    </SectionAboutMe>
  );
};
