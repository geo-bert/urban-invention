import React from "react";
import bgImage from "../test.png";

function Blob({ i, onClick, bgImage }) {
  const [x, y] = getPos(i);
  return (
    <div
      className="blob"
      onClick={onClick}
      style={{
        backgroundPosition: `-${y * 100 + 5}px -${x * 100 + 5}px`,
        backgroundImage: bgImage,
      }}
    />
  );
}

function DoneBlob({ bgImage }) {
  return <div className="done-blob" style={{ backgroundImage: bgImage }} />;
}

function getPos(i) {
  return [Math.floor(i / 4), i % 4];
}

export default class Level extends React.Component {
  constructor(props) {
    super(props);
    let blobs = [];

    for (let i = 0; i < 15; i++) {
      blobs.push(
        <Blob
          key={i}
          i={i}
          bgImage={`url("${bgImage}")`}
          onClick={() => this.move(blobs[i])}
        />
      );
    }
    blobs.push(
      <Blob
        key={15}
        i={15}
        bgImage={"none"}
        onClick={() => this.move(blobs[15])}
      />
    );

    this.state = { blobs, empty: blobs[15], valid: false };
  }

  render() {
    return (
      <div className="board">
        {this.state.valid ? (
          <DoneBlob bgImage={`url("${bgImage}")`} />
        ) : (
          this.state.blobs
        )}
      </div>
    );
  }

  move(el) {
    if (el === this.state.empty) return;

    const blobs = [...this.state.blobs];
    const emptyI = blobs.indexOf(this.state.empty);
    const thisI = blobs.indexOf(el);
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
}
