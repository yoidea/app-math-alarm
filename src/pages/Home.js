import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div
        className="Home blue-grey darken-1"
        style={{
          margin: "0",
          padding: "3em",
          minHeight: "100vh"
        }}
      >
        <h1 className="white-text center">Hello from Materialize</h1>
        <Link className="btn btn-large" to="ring">
          Ring
        </Link>
      </div>
    );
  }
}

export default Home;