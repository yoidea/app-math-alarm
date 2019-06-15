import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./cardlink.css";

class Cardlink extends Component {
  render() {
    return (
      <div
        className="card card-link"
        onClick={() => {
          this.props.history.push(this.props.to);
        }}
      >
        <div className="card-content white-text">
          <span className="card-title">{this.props.title}</span>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Cardlink);
