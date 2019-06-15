import React, { Component } from "react";
import Seplayer from "../components/seplayer";
import dig01 from "../sounds/Dig01-3L.mp3";

class Home extends Component {
  render() {
    return (
      <div
        className="Home teal darken-1"
        style={{
          margin: "0",
          padding: "3em",
          minHeight: "100vh"
        }}
      >
        <Seplayer file={dig01} />
        <h1 className="white-text center">Ringing!</h1>
      </div>
    );
  }
}

export default Home;
