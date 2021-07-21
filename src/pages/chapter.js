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
