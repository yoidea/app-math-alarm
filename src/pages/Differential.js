import React, { Component } from "react";
import MathJax from "react-mathjax";
import Seplayer from "../components/seplayer";
import dig01 from "../sounds/Dig01-3L.mp3";

class Differential extends Component {
  constructor(props) {
    super(props);
    const values = Array.from(
      { length: 2 },
      () => Math.floor(Math.random() * 9) + 1
    );
    values.unshift(Math.floor(Math.random() * 3) + 1);
    this.state = {
      values: values,
      digits: [0, 0]
    };
  }

  changeDigit = n => {
    const copy = this.state.digits.slice();
    copy[n]++;
    if (copy[n] === 10) copy[n] = 0;
    this.setState({ digits: copy }, this.verify);
  };

  verify = () => {
    const inputs = this.state.digits;
    console.log(`inputs: ${inputs}, answer: ${this.state.values.slice(1)}`);
    if (this.state.digits.join() === this.state.values.slice(1).join()
      || this.state.digits.join() === this.state.values.slice(1).reverse().join()) {
      this.props.history.push("/rising");
    }
  };

  render() {
    const a = this.state.values;
    const equation = `
      ${a[0]}\\frac{d^{2} x}{dt^{2}}
      - ${a[0] * (a[1] + a[2])}\\frac{dx}{dt}
      + ${a[0] * a[1] * a[2]}x
      = 0
    `;
    return (
      <div
        className="Differential pink darken-1 center"
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
            一般解を求めよ
            <MathJax.Node formula={"x = C_1 e^{at} + C_2 e^{bt}"} />
          </MathJax.Provider>
        </h1>
        <h1 className="white-text">
          a ={" "}
          <button
            className="btn pink lighten-2 btn-large"
            style={{ fontSize: "3rem" }}
            onClick={() => this.changeDigit(0)}
          >
            {this.state.digits[0]}
          </button>
          , b ={" "}
          <button
            className="btn pink lighten-2 btn-large"
            style={{ fontSize: "3rem" }}
            onClick={() => this.changeDigit(1)}
          >
            {this.state.digits[1]}
          </button>
        </h1>
      </div>
    );
  }
}

export default Differential;
