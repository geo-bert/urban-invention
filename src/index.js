/*
BSD 3-Clause License

Copyright (c) 2021, Markus Diller
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Game from "./pages/game";
import Home from "./pages/home";
import References from "./pages/references";
import About from "./pages/about";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Site extends React.Component {
  render() {
    return (
      <Router>
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
              <Game />
            </Route>
            <Route path="/urban-invention/">
              <Home />
            </Route>
          </Switch>
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
