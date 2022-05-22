import React from "react";
import styled from "@emotion/styled";
import { FaRegFileAlt } from "react-icons/fa";
import { StyledIcon } from "./StyledIcon";

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const StyledVariant = styled.div`
  display: flex;
  flex-direction: column;
  //   background-color: red;
  width: 50%;
  height: 300px;
  margin: 0px 5px 0px 5px;
  text-align: center;
`;
const StyledOfferIconAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const StyledOffer = () => {
  return (
    <Section>
      <StyledVariant>
        <StyledOfferIconAboutMe>
          <FaRegFileAlt size={"50px"} />
        </StyledOfferIconAboutMe>

        <h2>O MNIE</h2>
        <p>Cześć, nazywam się Patryk Stefański</p>
        <p>Uczę, jak jeść i trenować,bez popadania w skrajności</p>
        <button>Czytaj więcej</button>
      </StyledVariant>
      <StyledVariant>
        <h2>Opinie</h2>
        <p>Sprawdź opinie moich klientów</p>
        <button>Czytaj więcej</button>
      </StyledVariant>
      <StyledVariant>
        <h2>Współpraca</h2>
        <p>Sprawdź cennik usług</p>
        <button>Czytaj więcej</button>
      </StyledVariant>
      <StyledVariant>
        <h2>Kontakt</h2>
        <p>
          E-mail: fitojciectrener@gmail.com Instagram:
          www.instagram.com/fit.ojciec
        </p>
        <button>Czytaj więcej</button>
      </StyledVariant>
    </Section>
  );
};
