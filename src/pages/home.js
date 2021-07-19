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
        <Link class="play-button" to="/urban-invention/game">
          Play
        </Link>
      </div>
    );
  }
}
