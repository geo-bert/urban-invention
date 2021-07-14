import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Level from "./level";
import Home from "./home";
import References from "./references";
import About from "./about";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Site extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div class="navbar">
            <Link class="navelement" to="/">
              Home
            </Link>
            <Link class="navelement" to="/game">
              Game
            </Link>
            <Link class="navelement" to="/references">
              References
            </Link>
            <Link class="navelement" to="/about">
              About
            </Link>
          </div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/references">
              <References />
            </Route>
            <Route path="/game">
              <Level />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Site />, document.getElementById("root"));
