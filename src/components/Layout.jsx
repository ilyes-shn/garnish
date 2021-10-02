import React from "react";
import HeaderWhite from "./HeaderWhite";
import "../styles/layout.scss";
import Footer from "./Footer";
import Cookie from "./Cookie";
import { useData } from "../Context";
import Circle from "./Circle";

const Layout = ({ children }) => {
  const [data, dispatch] = useData();

  return (
    <div className="layout">
      <Circle />
      <HeaderWhite />
      <div className="main">{children}</div>
      {data.cookies && <Cookie />}
      <Footer />
    </div>
  );
};

export default Layout;
