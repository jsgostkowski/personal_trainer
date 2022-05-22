import React from "react";
import { Popup } from "../UI/Popup";
import { PopupInner } from "../UI/PopupInner";
import { PopupButton } from "../UI/PopupButton";

export const AboutMePopup = (props) => {
  return props.trigger ? (
    <Popup>
      <PopupInner>
        <PopupButton onClick={() => props.setTrigger(false)}>X</PopupButton>
        {props.children}
      </PopupInner>
    </Popup>
  ) : (
    ""
  );
};
