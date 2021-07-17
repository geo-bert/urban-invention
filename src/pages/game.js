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
    return <div>{this.currentLevel()}</div>;
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
