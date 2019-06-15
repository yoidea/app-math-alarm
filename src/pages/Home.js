import React, { Component } from "react";
import Cardlink from "../components/cardlink";

class Home extends Component {
  render() {
    return (
      <div
        className="Home blue-grey darken-2"
        style={{
          margin: "0",
          padding: "3em",
          minHeight: "100vh"
        }}
      >
        <h1 className="white-text center">Hello from Materialize</h1>
        <Cardlink title="Ring" to="/ring">
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </Cardlink>
        <Cardlink title="List" to="/">
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </Cardlink>
        <Cardlink title="Setiing" to="/">
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </Cardlink>
      </div>
    );
  }
}

export default Home;
