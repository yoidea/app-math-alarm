import React from "react";
import Router from "./Router";
import "materialize-css";
import "materialize-css/sass/materialize.scss";

function App() {
  return (
    <>
      <div
        style={{
          "-webkit-app-region": "drag",
          position: "absolute",
          zIndex: "2",
          height: "2em",
          width: "100%",
          backgroundColor: "transparent"
        }}
      ></div>
      <Router />
    </>
  );
}

export default App;
