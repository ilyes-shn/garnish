import React from "react";
import Layout from "../components/Layout";
import "../styles/home.scss";

const items = [
  { source: "/assets/images/iStock-866951620@1X.png", title: "", sub: "" },
  {
    source: "/assets/images/iStock-1318814445@1X.png",
    title: "Bonduelle - Life is full of ingredients",
    sub: "SEE PROJECT",
  },
  { source: "/assets/images/iStock-1252407106@1X.png", title: "", sub: "" },
  { source: "/assets/images/iStock-1270634212@1X.png", title: "", sub: "" },
];

const Home = () => {
  return (
    <Layout>
      {items.map((item) => (
        <div className="bigCard" key={item.source}>
          <img src={item.source} alt="cover" />
          <h3>{item.title}</h3>
          <ul>
            <li>{item.sub}</li>
          </ul>
        </div>
      ))}
    </Layout>
  );
};

export default Home;
