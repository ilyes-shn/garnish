import React from "react";
import Layout from "../components/Layout";
import "../styles/detail.scss";

const Detail = () => {
  return (
    <Layout>
      <div className="details">
        <div className="description">
          <h2>Life of vegetables</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img src="/assets/images/iStock-866951620@1X.png" alt="Saumon" />
        <div className="two">
          <div>
            <img src="/assets/images/Layer 9@1X.png" alt="camera" />
          </div>
          <div>
            <img src="/assets/images/Layer 8@1X.png" alt="camera" />
          </div>
        </div>
        <div className="description">
          <h3>Slow motion for details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img src="/assets/images/iStock-1318814445@1X.png" alt="slowmotion" />
      </div>
    </Layout>
  );
};

export default Detail;
