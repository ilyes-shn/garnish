import React from "react";
import GetInTouch from "./GetInTouch";
import "../styles/header.scss";
import { useData } from "../Context";

const HeaderBlack = () => {
  const [data, dispatch] = useData();

  const close = () => {
    dispatch({
      type: "off",
    });
  };

  return (
    <div className="header">
      <img className="mobileTitle" src="/assets/images/MobileTitleWhite.svg" alt="logo" />
      <img
        onClick={close}
        className="close"
        src="/assets/images/close.svg"
        alt="close"
      />
      <img className="logo" src="/assets/images/title_white.svg" alt="logo" />
      <GetInTouch />
    </div>
  );
};

export default HeaderBlack;
