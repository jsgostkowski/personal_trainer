import React from "react";
import styled from "@emotion/styled";
import PancakesMain from "../UI/Images/Main_Background.jpg";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 0px;
  height: 600px;
  webkit-box-shadow: 0px 9px 22px -17px rgba(108, 209, 108, 1);
  moz-box-shadow: 0px 9px 22px -17px rgba(108, 209, 108, 1);
  box-shadow: 0px 9px 22px -17px rgba(108, 209, 108, 1);
`;
const DescriptionLeft = styled.div`
  flex: 50%;
  margin-left: 25px;
`;
const StyledImgMain = styled.div`
  flex: 50%;
  margin-top: 10px;
`;
const StyledH1 = styled.h1`
  color: green;
  margin-top: 150px;
  text-align: left;
`;
const StyledH2 = styled.h2`
  color: green;
  text-align: left;
`;
const StyledP = styled.p`
  color: black;
  overflow-wrap: break-word;
  text-align: left;
`;
const StyledList = styled.li`
  margin-left: 30px;
`;
const imageHeight = 100 + "%";
const width = 100 + "%";

export const StyledMain = () => {
  return (
    <Section>
      <DescriptionLeft>
        <StyledH1>Dieta jest dla Ciebie, nie Ty dla niej!</StyledH1>
        <StyledP>
          Chcesz schudnąć? Zmienić swoje nawyki żywieniowe? Poprawić wygląd
          swojej sylwetki lub zadbać o swoje zdrowie? ŚWIETNIE TRAFIŁAŚ/EŚ. Ze
          swojej strony oferuję w pełni zindywidualizowane podejście - jadłospis
          dopasowany zarówno pod względem ilości posiłków, jak i Twoich kubków
          smakowych - KONIEC z jedzeniem posiłków, których nie lubisz, dieta ma
          być smaczna i przynosić oczekiwane efekty!
        </StyledP>
        <button>Kontakt</button>
        <StyledH2>Współpracuje również z osobami:</StyledH2>
        <StyledList>z hashimoto</StyledList>
        <StyledList>z cukrzycą</StyledList>
        <StyledList>z insulinoopornością</StyledList>
        <StyledList>z niedoczynnością tarczycy</StyledList>
      </DescriptionLeft>
      <StyledImgMain>
        {<img src={PancakesMain} height={imageHeight} width={width}></img>}
      </StyledImgMain>

      {/* <Div>
        <img src={pancake} height={80} width={80}></img>
      </Div> */}
    </Section>
  );
};
