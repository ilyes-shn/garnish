import React from "react";
import Layout from "../components/Layout";
import "../styles/socialmedia.scss";

const SocialMedia = () => {
  return (
    <Layout>
      <div className="description">
        <h2>Social media content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className='albums'>
          <img src="/assets/images/iStock-1318814445@1X.png" alt="cover" />
          <img src="/assets/images/iStock-1301084319@1X.png" alt="cover" />
          <img src="/assets/images/Layer 5@1X.png" alt="cover" />
          <img src="/assets/images/Layer 4@1X.png" alt="cover" />
          <img src="/assets/images/iStock-1270634212@1X.png" alt="cover" />
          <img src="/assets/images/Layer 6@1X.png" alt="cover" />

      </div>
    </Layout>
  );
};

export default SocialMedia;
