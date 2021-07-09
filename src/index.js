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
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/game">Game</Link>
              </li>
              <li>
                <Link to="/references">References</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
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
