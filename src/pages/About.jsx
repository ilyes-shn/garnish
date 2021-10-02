import React from "react";
import GetInTouch from "../components/GetInTouch";
import Layout from "../components/Layout";
import '../styles/about.scss'

const About = () => {
  return (
    <Layout>
      <div className="desc">
        <h1>About</h1>
        <h3>
          We shoot digital products and services used by millions nationally
        </h3>
      </div>
      <img className='img' src="/assets/images/Layer 9@1X.png" alt="camera" />
      <div className='twoColumns'>
          <div className='weShoot'>
              <h3>We shoot digital products and services used by millions nationally</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='brands'>
              <img className='brnd' src="/assets/images/brand2.png" alt="brand" />
              <img className='brnd' src="/assets/images/brand1.png" alt="brand" />
          </div>
      </div>
    <div className='philo'>
        <img src="/assets/images/Layer 8@1X.png" alt="camera" />
        <div>
            <h3>Philosophy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <img src="/assets/images/Layer 10@1X.png" alt="camera" />
        </div>
    </div>
    <div className='big'>
      <img src="/Layer.png" alt="big" />
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
    </div>
    <div className='team'>
        <h1>Small team, <span>big productions</span></h1>
        <div className='members'>
            <img src="/assets/images/person1.png" alt="member" />
            <img src="/assets/images/person3.png" alt="member" />
            <img src="/assets/images/person2.png" alt="member" />

        </div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
    <GetInTouch />
    </div>
    </Layout>
  );
};

export default About;
