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
import Chapter from "./chapter";

import one from "../levels/one.json";
import two from "../levels/two.json";
import three from "../levels/three.json";
import four from "../levels/four.json";
import five from "../levels/five.json";
import six from "../levels/six.json";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.nextChapter = this.nextChapter.bind(this);

    this.state = { lvl: 1 };
  }

  render() {
    return this.currentLevel();
  }

  currentLevel() {
    switch (this.state.lvl) {
      case 1:
        return <Chapter key={1} lvl={1} data={one} inc={this.nextChapter} />;
      case 2:
        return <Chapter key={2} lvl={2} data={two} inc={this.nextChapter} />;
      case 3:
        return <Chapter key={3} lvl={3} data={three} inc={this.nextChapter} />;
      case 4:
        return <Chapter key={4} lvl={4} data={four} inc={this.nextChapter} />;
      case 5:
        return <Chapter key={5} lvl={5} data={five} inc={this.nextChapter} />;
      case 6:
        return <Chapter key={6} lvl={6} data={six} inc={this.nextChapter} />;
      default:
        return <h1>Illegal Level</h1>;
    }
  }

  nextChapter() {
    this.setState({ lvl: 1 + this.state.lvl });
  }
}
