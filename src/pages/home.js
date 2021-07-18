import React from "react";
import { NavLink as Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Urban Invention - Home</h1>
        <p>
          You wake up not knowing your whereabouts or why you are in this
          situation. Solve puzzles to reconstruct your memory and find out what
          happened.
        </p>
        <h2>Tutorial</h2>
        <p>
          There are five puzzles to solve. All in the form of a{" "}
          <a href="https://en.wikipedia.org/wiki/15_puzzle">15 puzzle</a>. There
          are five chapters plus a final one without a puzzle. The puzzles
          increase in difficulty.
        </p>
        <p>
          You progress the texts by clicking on them. The puzzles are
          represented as four by four grids. There is one empty cell. To solve
          the puzzle you have to click on an adjacent cell of the empty one to
          move the pieces. The objective is to rearrange the cells in such a way
          that a coherent image forms.
        </p>
        <Link class="play-button" to="/urban-invention/game">
          Play
        </Link>
      </div>
    );
  }
}
