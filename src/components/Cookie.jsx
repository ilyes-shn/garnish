import React from "react";
import "../styles/cookie.scss";
import { useData } from '../Context'

const Cookie = () => {
const [data, dispatch] = useData()

  return (
    <div className="cookie">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat duis aute irure <span>dolor in reprehenderit.</span>
      </p>
      <button onClick={() => dispatch({type: 'cookie'})}><pre>I Accept</pre></button>
    </div>
  );
};

export default Cookie;
