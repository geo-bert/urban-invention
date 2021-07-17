import React from "react";
import Board from "./board";

export default class Chapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  render() {
    return (
      <div className="chapter">
        <h1>Urban Invention - Chapter: {this.props.lvl}</h1>
        {this.gameplayLoop()}
      </div>
    );
  }

  gameplayLoop() {
    if (this.state.index >= this.props.data.text.length) return this.board();
    else
      return (
        <div onClick={() => this.setState({ index: this.state.index + 1 })}>
          <p class="chapter-text">{this.props.data.text[this.state.index]}</p>
        </div>
      );
  }

  board() {
    if (this.props.data.image)
      return (
        <div>
          <Board
            permutation={this.props.data.board}
            image={this.props.data.image}
            inc={this.props.inc}
          />
          <button onClick={this.props.inc}>Skip</button>
        </div>
      );
    return <h1>The End</h1>;
  }
}
