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
