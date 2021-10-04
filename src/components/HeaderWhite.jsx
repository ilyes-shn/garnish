import React from "react";
import GetInTouch from "./GetInTouch";
import "../styles/header.scss";
import { useData } from "../Context";
import Menu from "./Menu";

const HeaderWhite = () => {
  const [data, dispatch] = useData();

  const open = () => {
    dispatch({
      type: "on",
    });
  };

  return (
    <div className="header">
      <img className="mobileTitle" src="/assets/images/MobileTitleBlack.svg" alt="logo" />
      <img
        onClick={open}
        className="open"
        src="/assets/images/open.svg"
        alt="open"
      />
      <img className="logo" src="/assets/images/title_black.svg" alt="logo" />
      <GetInTouch />
      {
          data.menu && <Menu />
      }
    </div>
  );
};

export default HeaderWhite;
