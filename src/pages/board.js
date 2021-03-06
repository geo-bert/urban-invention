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
const images = require.context("../img", true);

function Blob({ i, onClick, bgImage, cursor }) {
  const [x, y] = getPos(i);
  return (
    <div
      className="blob"
      onClick={onClick}
      style={{
        backgroundPosition: `-${y * 100 + 5}px -${x * 100 + 5}px`,
        backgroundImage: bgImage,
        cursor: cursor,
      }}
    />
  );
}

function DoneBlob({ bgImage, inc }) {
  return (
    <div
      className="done-blob"
      style={{ backgroundImage: bgImage }}
      onClick={inc}
    />
  );
}

function getPos(i) {
  return [Math.floor(i / 4), i % 4];
}

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.bgImage = images("./" + props.image).default;

    this.state = this.createBoard();
  }

  createBoard() {
    let blobs = [];
    for (let i = 0; i < 15; i++) {
      blobs.push(
        <Blob
          key={i}
          i={i}
          bgImage={`url("${this.bgImage}")`}
          onClick={() => this.move(blobs[i])}
          cursor={"pointer"}
        />
      );
    }
    blobs.push(
      <Blob
        key={15}
        i={15}
        bgImage={"none"}
        onClick={() => this.move(blobs[15])}
        cursor={"cursor"}
      />
    );

    return {
      blobs: this.permutate(blobs, this.props.permutation),
      empty: blobs[15],
      valid: false,
    };
  }

  permutate(array, permutation) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[permutation[i]]);
    }
    return newArray;
  }

  render() {
    return (
      <div className="extended-board">
        {" "}
        <div className="board">
          {this.state.valid ? (
            <DoneBlob bgImage={`url("${this.bgImage}")`} inc={this.props.inc} />
          ) : (
            this.state.blobs
          )}
        </div>
        {this.resetButton()}
        {this.skipButton()}
      </div>
    );
  }

  move(element) {
    if (element === this.state.empty) return;

    const blobs = [...this.state.blobs];
    const emptyI = blobs.indexOf(this.state.empty);
    const thisI = blobs.indexOf(element);
    const [emptyX, emptyY] = getPos(emptyI);
    const [thisX, thisY] = getPos(thisI);

    if (Math.abs(emptyX - thisX) + Math.abs(emptyY - thisY) === 1) {
      [blobs[emptyI], blobs[thisI]] = [blobs[thisI], blobs[emptyI]];
      this.setState({ blobs });
      this.validate(blobs);
    }
  }

  validate(blobs) {
    for (let i = 0; i < blobs.length; i++) {
      if (i !== blobs[i].props.i) {
        return;
      }
    }
    this.setState({ valid: true });
  }

  skipBoard() {
    this.setState({ valid: true });
  }

  skipButton() {
    if (!this.state.valid)
      return (
        <div
          className="reset-button"
          onClick={() => this.setState({ valid: true })}
        >
          Skip
        </div>
      );
  }

  resetButton() {
    if (!this.state.valid)
      return (
        <div
          className="skip-button"
          onClick={() => this.setState(this.createBoard())}
        >
          Reset
        </div>
      );
  }
}
