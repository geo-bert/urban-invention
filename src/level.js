import React from "react";

function Blob(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class Level extends React.Component {
  constructor(props) {
    super(props);
    let blobs = new Array(4);
    this.free = 0;

    for (let i = 0; i < blobs.length; i++) {
      blobs[i] = new Array(4);
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        blobs[i][j] = {
          value: j + i * 4 !== 15 ? "" + (j + i * 4) : "",
          onClick: () => this.onClick(i, j),
        };
      }
    }

    this.state = {
      blobs,
      free: { blob: blobs[3][3], x: 3, y: 3 },
      valid: false,
    };
  }

  render() {
    if (this.state.valid) return <div>Done</div>;
    return (
      <div className="game">
        <div className="game-board">
          {this.state.blobs.map((blob, x) => {
            return (
              <div className="board-row" key={x}>
                {blob.map((b) => {
                  return (
                    <Blob value={b.value} onClick={b.onClick} key={b.value} />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  onClick(x, y) {
    let blobs = this.state.blobs;
    let free = this.state.free.blob;
    let b = blobs[x][y];

    if (b === free) return;

    if (this.dist(x, y) === 1) {
      free.value = b.value;
      b.value = "";
      this.setState({
        blobs,
        free: { blob: b, x, y },
        valid: this.validateBoard(),
      });
    }
  }

  dist(x, y) {
    return Math.abs(x - this.state.free.x + y - this.state.free.y);
  }

  validateBoard() {
    let blobs = this.state.blobs;
    let width = blobs.length;

    for (let x = 0; x < width; x++) {
      let height = blobs[x].length;
      for (let y = 0; y < height; y++) {
        if (y + x * height === height * width - 1 && blobs[x][y].value === "")
          break;

        if (y + x * height + "" !== blobs[x][y].value) return false;
      }
    }

    return true;
  }
}
