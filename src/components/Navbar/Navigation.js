import React from "react";
import { ContactButton } from "../UI/ContactButton";
import { NavigationBar } from "../UI/NavigationBar";
import { StyledIcon } from "../UI/StyledIcon";
import { StyledList } from "../UI/StyledList";
import { StyledLogo } from "../UI/StyledLogo";
import { StyledUl } from "../UI/StyledUl";
import { StyledHref } from "../UI/StyledHref";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Navigation = () => {
  return (
    <NavigationBar>
      <StyledLogo>Logo</StyledLogo>

      <StyledUl>
        <StyledIcon>
          <StyledHref a href="https://www.facebook.com">
            <FaFacebookF />
          </StyledHref>
        </StyledIcon>
        <StyledIcon>
          <StyledHref a href="https://www.instagram.com">
            <FaInstagram />
          </StyledHref>
        </StyledIcon>
      </StyledUl>
      <StyledUl>
        <StyledList>
          <StyledHref a href="https://www.w3schools.com">
            O mnie
          </StyledHref>
        </StyledList>
        <StyledList>
          <StyledHref a href="https://www.w3schools.com">
            Współpraca
          </StyledHref>
        </StyledList>
        <StyledList>
          <StyledHref a href="https://www.w3schools.com">
            Opinie
          </StyledHref>
        </StyledList>
        <StyledList>
          <StyledHref a href="https://www.w3schools.com">
            Metamorfozy
          </StyledHref>
        </StyledList>
      </StyledUl>
      <ContactButton>Kontakt</ContactButton>
    </NavigationBar>
  );
};
