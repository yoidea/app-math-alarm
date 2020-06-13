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
        <h1 className="white-text center">App Math Alerm Clock</h1>
        <Cardlink title="Determinant" to="/ring/determinant">
         
        </Cardlink>
        <Cardlink title="Differential" to="/ring/differential">
          
        </Cardlink>
        <Cardlink title="Setiing" to="/">
          
        </Cardlink>
      </div>
    );
  }
}

export default Home;
