import React from "react";
import Layout from "../components/Layout";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="infos">
          <h1>Get in touch</h1>
          <div>
            <img src="/assets/images/position.svg" alt="position" />

            <p>Str. Logofătul Tăutu 68A, București, Romania</p>
          </div>
          <div>
            <img src="/assets/images/msg.svg" alt="msg" />

            <p>contact@garnishstudio.com</p>
          </div>
          <div>
            <img src="/assets/images/call.svg" alt="call" />

            <p>+40 766 231 581</p>
          </div>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas"><iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=tineretului&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
              href="https://123movies-to.org"></a>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
