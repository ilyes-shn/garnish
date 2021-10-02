import React from "react";
import { Link } from "react-router-dom";
import HeaderBlack from "./HeaderBlack";
import "../styles/menu.scss";
import Social from "./Social";
import { useData } from "../Context";

const Menu = () => {
  
  const [data, dispatch] = useData()
  
  return (
    <div className="menu">
      <HeaderBlack />
      <div className="items">
        <Link to="/" onClick={() => dispatch({type: 'off'})}>
          <h3>Photos</h3>
        </Link>
        <Link to="/details" onClick={() => dispatch({type: 'off'})}>
          <h3>Stop Motions</h3>
        </Link>
        <Link to="/" onClick={() => dispatch({type: 'off'})}>
          <h3>Cinemagraphs</h3>
        </Link>
        <Link to="/social" onClick={() => dispatch({type: 'off'})}>
          <h3>Social Media</h3>
        </Link>
        <Link to="/" onClick={() => dispatch({type: 'off'})}>
          <h3>Video Recipes</h3>
        </Link>
        <Link to="/" onClick={() => dispatch({type: 'off'})}>
          <h3>Timelapse</h3>
        </Link>
        <hr />
        <Link to="/whatwedo" onClick={() => dispatch({type: 'off'})}>
          <h3>What we do</h3>
        </Link>
        <Link to="/about" onClick={() => dispatch({type: 'off'})}>
          <h3>About us</h3>
        </Link>
        <Link to="/careers" onClick={() => dispatch({type: 'off'})}>
          <h3>Careers</h3>
        </Link>
        <Link to="/terms" onClick={() => dispatch({type: 'off'})}>
          <h3>Terms</h3>
        </Link>
        <div className="social">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Menu;
