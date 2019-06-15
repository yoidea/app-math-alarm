import React, { Component } from "react";

class Seplayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      se: new Audio(this.props.file)
    };
  }

  componentDidMount() {
    this.state.se.load();
    this.state.se.play();
    this.state.se.addEventListener(
      "ended",
      () => {
        this.state.se.play();
      },
      false
    );
  }

  componentWillUnmount() {
    this.state.se.pause();
  }

  render() {
    return <></>;
  }
}

export default Seplayer;
