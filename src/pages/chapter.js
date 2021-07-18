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
        <div
          class="chapter-text"
          onClick={() => this.setState({ index: this.state.index + 1 })}
        >
          {this.props.data.text[this.state.index].split(" ").map((el) => {
            return (
              <div class="chapter-word">
                {[...el].map((x, i) => (
                  <span
                    class="chapter-letter"
                    style={{ animationDelay: `-0.${i % 5}s` }}
                  >
                    {x}
                  </span>
                ))}
              </div>
            );
          })}
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
          <div class="skip-button" onClick={this.props.inc}>
            Skip
          </div>
        </div>
      );
    return (
      <div class="chapter-text">
        <h1>The End</h1>
      </div>
    );
  }
}
