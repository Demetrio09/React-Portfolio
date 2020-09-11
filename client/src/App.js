import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import * as navUtil from "./utils/Header/index.json";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Main {...navUtil.home} />
        </Route>

        <Route exact path="/about">
          <About {...navUtil.about} />
        </Route>

        <Route exact path="/portfolio">
          <Portfolio {...navUtil.portfolio} />
        </Route>

        <Route exact path="/contact">
          <Contact {...navUtil.contact} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
