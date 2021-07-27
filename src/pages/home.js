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
import { NavLink as Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Urban Invention - Home</h1>
        <p>
          You wake up not knowing your whereabouts or why you are in this
          situation. Solve puzzles to reconstruct your memory and find out what
          happened.
        </p>
        <h2>Tutorial</h2>
        <p>You progress the texts by clicking on them. </p>
        <p>
          There are five chapters with a puzzle at the end of each, plus a final
          one without one. The puzzles increase in difficulty and are{" "}
          <a href="https://en.wikipedia.org/wiki/15_puzzle">15 puzzles</a>.
        </p>
        <p>
          The puzzles are represented as four by four grids. There is one empty
          cell. To solve the puzzle you have to click on an adjacent cell of the
          empty one to move the pieces. The objective is to rearrange the cells
          in such a way that a coherent image forms.
        </p>
        <Link className="play-button" to="/urban-invention/game">
          Play
        </Link>
      </div>
    );
  }
}
