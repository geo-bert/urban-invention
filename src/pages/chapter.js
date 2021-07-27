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
import { CSSTransition, SwitchTransition } from "react-transition-group";

import Board from "./board";

export default class Chapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  render() {
    return (
      <div className="chapter">
        <h1>Urban Invention - Chapter {this.props.lvl}</h1>
        {this.gameplay()}
      </div>
    );
  }

  gameplay() {
    if (this.state.index >= this.props.data.text.length) return this.board();
    else
      return (
        <SwitchTransition mode="out-in">
          <CSSTransition
            classNames="fade"
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            key={this.props.data.text[this.state.index]}
          >
            <div
              className="chapter-block"
              onClick={() => this.setState({ index: this.state.index + 1 })}
            >
              <div className="chapter-text" key={"chapter-text"}>
                {this.props.data.text[this.state.index].split(" ").map((el) => {
                  return (
                    <div key={el} className="chapter-word">
                      {[...el].map((x, i) => (
                        <span
                          key={`${i}${x}`}
                          className="chapter-letter"
                          style={{ animationDelay: `-0.${i % 5}s` }}
                        >
                          {x}
                        </span>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      );
  }

  board() {
    if (this.props.data.image)
      return (
        <Board
          permutation={this.props.data.board}
          image={this.props.data.image}
          inc={this.props.inc}
          validate={this.validate}
        />
      );
    return (
      <div className="chapter-block">
        <h1>The End</h1>
      </div>
    );
  }
}
