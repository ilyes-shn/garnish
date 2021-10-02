import React from "react";
import GetInTouch from "../components/GetInTouch";
import Layout from "../components/Layout";
import "../styles/whatwedo.scss";

const WhatWeDo = () => {
  return (
    <Layout>
      <div className="desc">
        <h1>What we do</h1>
        <h3>
          We shoot digital products and services used by millions nationally
        </h3>
      </div>
      <div className="grid">
        <img src="/assets/images/item1.png" alt="item" />
        <img src="/assets/images/item2.png" alt="item" />
        <img src="/assets/images/item3.png" alt="item" />
        <img src="/assets/images/item4.png" alt="item" />
      </div>
      <div className="philo margin">
        <img src="/assets/images/Layer 8@1X.png" alt="camera" />
        <div>
          <h3>Mouth watering productions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="twoColumns tcolumns">
        <div className="weShoot align">
          <h3>
            We shoot digital products and services used by millions nationally
          </h3>
        </div>
        <div className=" cam">
          <img src="/assets/images/Layer 10@1X.png" alt="camera" />
        </div>
      </div>
      <h2 className="why">Why us</h2>
      <div className="options">
        <div className="option">
          <img src="/assets/images/1.svg" alt="option" />
          <p>
            <span>We coordinate</span> your project from A to Z
          </p>
        </div>
        <div className="option">
          <img src="/assets/images/2.svg" alt="option" />
          <p>
            <span>We adapt</span> to your project and budget
          </p>
        </div>
        <div className="option">
          <img src="/assets/images/3.svg" alt="option" />
          <p>
            <span>We transfer</span> all necessary usage rights
          </p>
        </div>
        <div className="option">
          <img src="/assets/images/4.svg" alt="option" />
          <p>
            <span>We provide</span> all required ingredients, props, location, chefs, music library
          </p>
        </div>

      </div>
      <div className="details">
        <div className="two">
          <div className='top'>
            <img src="/assets/images/Layer 9@1X.png" alt="camera" />
          </div>
          <div className='other'>
            <img src="/assets/images/Layer 8@1X.png" alt="camera" />
          </div>
        </div>


      </div>
      <div className="team" style={{ marginTop: "60px" }}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <GetInTouch />
      </div>
    </Layout>
  );
};

export default WhatWeDo;
