import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ring from "./pages/Ring";
import Determinant from "./pages/Determinant";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/ring" component={Ring} />
        <Route exact path="/ring/determinant" component={Determinant} />
        <Route exact path="/params/:id(\d+)" component={Home} />
      </HashRouter>
    );
  }
}

export default Router;
