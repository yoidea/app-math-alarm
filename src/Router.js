import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Home} />
        <Route exact path="/params/:id(\d+)" component={Home} />
      </HashRouter>
    );
  }
}

export default Router;
