import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./Context";
import Home from "./pages/Home";
import SocialMedia from "./pages/SocialMedia";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";

const App = () => {
  return (
    <Router>
      <Provider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/social" exact component={SocialMedia} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/careers" exact component={Careers} />
          <Route path="/details" exact component={Detail} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/whatwedo" exact component={WhatWeDo} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
