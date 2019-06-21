import React, { Component } from "react";
import MathJax from "react-mathjax";
import { det } from "mathjs";
import Seplayer from "../components/seplayer";
import dig01 from "../sounds/Dig01-3L.mp3";

class Determinant extends Component {
  constructor(props) {
    super(props);
    const values = Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => Math.floor(Math.random() * 10))
    );
    this.state = {
      values: values,
      answer: Math.round(det(values)),
      plus: true,
      digits: [0, 0, 0]
    };
  }

  changeDigit = n => {
    const copy = this.state.digits.slice();
    copy[n]++;
    if (copy[n] === 10) copy[n] = 0;
    this.setState({ digits: copy }, this.verify);
  };

  changePM = () => {
    this.setState({ plus: !this.state.plus }, this.verify);
  };

  verify = () => {
    const d = this.state.digits;
    const sign = this.state.plus ? 1 : -1;
    const inputs = sign * (100 * d[0] + 10 * d[1] + 1 * d[2]);
    console.log(`inputs: ${inputs}, answer: ${this.state.answer}`);
    if (inputs === this.state.answer) {
      this.props.history.push("/");
    }
  };

  render() {
    const a = this.state.values;
    const equation = `
      A = \\begin{pmatrix}
        ${a[0][0]} & ${a[0][1]} & ${a[0][2]} \\\\
        ${a[1][0]} & ${a[1][1]} & ${a[1][2]} \\\\
        ${a[2][0]} & ${a[2][1]} & ${a[2][2]} \\\\
      \\end{pmatrix}
    `;
    return (
      <div
        className="Determinant teal darken-1 center"
        style={{
          margin: "0",
          padding: "3em",
          minHeight: "100vh"
        }}
      >
        <Seplayer file={dig01} />
        <h1 className="white-text">
          <MathJax.Provider>
            <MathJax.Node formula={equation} />
            <MathJax.Node inline formula="\det A" />
            を求めよ
          </MathJax.Provider>
        </h1>
        <button
          className="btn btn-large"
          style={{ fontSize: "3em" }}
          onClick={() => this.changePM()}
        >
          {this.state.plus ? "+" : "-"}
        </button>
        <button
          className="btn btn-large"
          style={{ fontSize: "3em" }}
          onClick={() => this.changeDigit(0)}
        >
          {this.state.digits[0]}
        </button>
        <button
          className="btn btn-large"
          style={{ fontSize: "3em" }}
          onClick={() => this.changeDigit(1)}
        >
          {this.state.digits[1]}
        </button>
        <button
          className="btn btn-large"
          style={{ fontSize: "3em" }}
          onClick={() => this.changeDigit(2)}
        >
          {this.state.digits[2]}
        </button>
      </div>
    );
  }
}

export default Determinant;
