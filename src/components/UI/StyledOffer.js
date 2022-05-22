import React from "react";
import styled from "@emotion/styled";
import {
  FaRegFileAlt,
  FaRegCommentAlt,
  FaUser,
  FaAddressCard,
} from "react-icons/fa";

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 10px 0px 10px;

  webkit-box-shadow: 0px 9px 22px -17px rgba(108, 209, 108, 1);
  moz-box-shadow: 0px 9px 22px -17px rgba(108, 209, 108, 1);
  box-shadow: 0px 9px 22px -17px rgba(108, 209, 108, 1);
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
          <FaUser size={"50px"} />
        </StyledOfferIconAboutMe>

        <h2>O MNIE</h2>
        <p>
          Cześć, nazywam się Patryk Stefański. Uczę, jak jeść i trenować,bez
          popadania w skrajności
        </p>

        <button>Czytaj więcej</button>
      </StyledVariant>
      <StyledVariant>
        <StyledOfferIconAboutMe>
          <FaRegCommentAlt size={"50px"} />
        </StyledOfferIconAboutMe>
        <h2>Opinie</h2>
        <p>Sprawdź opinie moich klientów</p>
        <button>Czytaj więcej</button>
      </StyledVariant>
      <StyledVariant>
        <StyledOfferIconAboutMe>
          <FaRegFileAlt size={"50px"} />
        </StyledOfferIconAboutMe>
        <h2>Współpraca</h2>
        <p>Sprawdź cennik usług</p>
        <button>Czytaj więcej</button>
      </StyledVariant>
      <StyledVariant>
        <StyledOfferIconAboutMe>
          <FaAddressCard size={"50px"} />
        </StyledOfferIconAboutMe>
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
