import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import Board from "./board";

export default class Chapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, valid: false };
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
        <div>
          <Board
            permutation={this.props.data.board}
            image={this.props.data.image}
            inc={this.props.inc}
            validate={this.validate}
            valid={this.state.valid}
          />
          {this.skipButton()}
        </div>
      );
    return (
      <div className="chapter-block">
        <h1>The End</h1>
      </div>
    );
  }

  validate = () => {
    this.setState({ valid: true });
  };

  skipButton() {
    if (!this.state.valid)
      return (
        <div className="skip-button" onClick={this.validate}>
          Skip
        </div>
      );
  }
}
