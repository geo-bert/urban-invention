import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Level from "./pages/level";
import Home from "./pages/home";
import References from "./pages/references";
import About from "./pages/about";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Site extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <Link className="navelement" to="/urban-invention/">
              Home
            </Link>
            <Link className="navelement" to="/urban-invention/game">
              Game
            </Link>
            <Link className="navelement" to="/urban-invention/references">
              References
            </Link>
            <Link className="navelement" to="/urban-invention/about">
              About
            </Link>
          </div>
          <div className="content">
            <Switch>
              <Route path="/urban-invention/about">
                <About />
              </Route>
              <Route path="/urban-invention/references">
                <References />
              </Route>
              <Route path="/urban-invention/game">
                <Level />
              </Route>
              <Route path="/urban-invention/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
        <div className="footer">
          <a
            href="https://github.com/geo-bert/urban-invention"
            target="_blank"
            rel="noreferrer"
          >
            View Source Code
          </a>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Site />, document.getElementById("root"));
